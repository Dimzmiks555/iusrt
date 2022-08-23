import json
from operator import index, indexOf
from fuzzywuzzy import process
import rapidfuzz as fuzz
import re
import time
import os
start_time = time.time()
from googletrans import Translator, constants
from transliterate import translit, get_available_language_codes

dir_path = os.path.dirname(os.path.realpath(__file__))

result = []

true_result = []
false_result = []
second_true_result = []
second_false_result = []


with open(dir_path + '/data.json', encoding='utf-8') as f:
    data = json.load(f)


    print(len(data))

    etalons = list(filter(lambda item: item['is_reference'] == True, data))

    
    for item in data:
        del item['props']
        if (list(filter( lambda x: x['product_id'] == item['reference_id'] , etalons))):
            item['ref'] = list(filter( lambda x: x['product_id'] == item['reference_id'] , etalons))[0]

    non_etalons = list(filter(lambda item: item['is_reference'] == False, data))
    second_non_etalons = [e.copy() for e in non_etalons]

    print('Количество эталонов: ' + str(len(etalons)))
    print('Количество товаров: ' + str(len(non_etalons)))

    for etalon in etalons:
        name = etalon['name'].replace('/', ',').lower().replace(',', '').replace('+', '')

        # name = translit(name, 'ru', reversed=True)

        # print(name)

        # processing = process.extract(name, list(map(lambda item: item['name'], non_etalons)))

        def map_non_etalon(item):
            # tr = translit(item['name'].lower().replace(',', ''), 'ru', reversed=True)
            tr = item['name'].replace('/', ',').lower().replace(',', '').replace('+', '')
            return tr
        
        fuzzresult = fuzz.process.extract(name, list(map(map_non_etalon, non_etalons)), scorer=fuzz.fuzz.token_set_ratio, limit=100)

        res = list(filter(lambda item: item[1] > 80, fuzzresult))


        if len(res) > 0:

            similar_word = set()


            
            wrds = name.split(' ')
            
            for it in res:


                for wrd in wrds:
                    if wrd.lower() in it[0].replace('/', ',').lower().replace(',', ''):
                        similar_word.add(wrd.lower())
                
                
                pr = {
                    'etalon': name,
                    'product': non_etalons[it[2]]['name']
                }

                print(pr)
            # print(similar_word)
            for sim_word in similar_word:
                for it in res:

                    lst = list(it)

                    lst[0] = lst[0].replace('/', ',').lower().replace(',', '').replace('+', '')

                    if (re.search('\d+', sim_word) is None):
                        lst[0] = lst[0].replace(sim_word, '').strip()


                    res[res.index(it)] = tuple(lst)
                


            def map_filtered_non_etalon(item):


                return item[0]

            second_fuzzresult = fuzz.process.extract(name, list(map(map_filtered_non_etalon, res)), scorer=fuzz.fuzz.token_set_ratio, limit=100)

            print(second_fuzzresult)

            second_res = list(filter(lambda item: item[1] > 40, second_fuzzresult))

            print(name)

            if len(res) > 0:
                for item in second_res:


                    if (non_etalons[res[item[2]][2]]['reference_id'] == etalon['product_id']):
                        if (not pr in true_result):
                            true_result.append(pr)
                    else:
                        result.append(pr)
                        false_result.append(False)

                # # print(it, len(second_non_etalons))

                # if(non_etalons[it[2]] in second_non_etalons ):
                #     del second_non_etalons[second_non_etalons.index(non_etalons[it[2]])]


    # print(len(second_non_etalons))
    # print(second_non_etalons[:70])

    # for etalon in etalons:
    #     name = etalon['name']

    #     # processing = process.extract(name, list(map(lambda item: item['name'], non_etalons)))
        
    #     name_words = name.replace(',', ' ').split(' ')

    #     mayby_products = []

    #     suggestions = 0

    #     for word in name_words:
    #         word = word.strip()

    #         ansi_escape = re.compile(r'\x1B(?:[@-Z\\-_]|\[[0-?]*[ -/]*[@-~])')
    #         sometext = 'ls\r\n\x1b[00m\x1b[01;31mexamplefile.zip\x1b[00m\r\n\x1b[01;31m'
    #         word = ansi_escape.sub('', word)

    #         for prod in second_non_etalons:
    #             if word in prod['name']:
    #                 # print('r' + word + 'r')
    #                 if prod not in mayby_products:
    #                     mayby_products.append(prod)


        # print(len(mayby_products))





        
                
    print('Количество товаров: ' + str(len(non_etalons)))


print(len(data))
print('Правда: ' + str(len(true_result)))
print('Ложь: ' + str(len(false_result)))
print('Правда 2 волна: ' + str(len(second_true_result)))
print('Ложь 2 волна: ' + str(len(second_false_result)))
# print(result)

print("--- %s seconds ---" % (time.time() - start_time))



    