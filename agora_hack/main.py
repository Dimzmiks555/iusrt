import json


import time
start_time = time.time()

result = []

with open('data.json', encoding='utf-8') as f:
    data = json.load(f)
    print(len(data))

    etalons = list(filter(lambda item: item['is_reference'] == True, data))[:20]

    print('Количество эталонов: ' + str(len(etalons)))

    for etalon in etalons:
        name = etalon['name']

        name_words = name.split(' ')

        for name_word in name_words:

            products = list(filter(lambda item: name_word in item['name'], data))

            print(name_word + ' ' + str(len(products)))

            if (len(products) == 1):
                result.append({
                    'etalon': etalon['name'],
                    'product': products[0]['name']
                })
                data.remove(products[0])
                break
            


print(len(data))
print(result)
print("--- %s seconds ---" % (time.time() - start_time))



    