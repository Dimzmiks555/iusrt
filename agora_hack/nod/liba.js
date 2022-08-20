var stringSimilarity = require("string-similarity");
var fs = require('fs');

var data = JSON.parse(fs.readFileSync('agora_hack/nod/data.json', 'utf8'));

console.log(data.length)

let result = []

let true_result = []
let false_result = []


let etalons = data.filter(item => item.is_reference) 

    
    // for item in data:
    //     del item['props']
    //     if (list(filter( lambda x: x['product_id'] == item['reference_id'] , etalons))):
    //         item['ref'] = list(filter( lambda x: x['product_id'] == item['reference_id'] , etalons))[0]

    non_etalons = data.filter(item => !item.is_reference) 
    second_non_etalons = [...non_etalons]

    console.log('Количество эталонов: ' + etalons.length)
    console.log('Количество товаров: ' + non_etalons.length)

    etalons.forEach(etalon => {
        let name = etalon.name.toLowerCase().replace(',', '')


        function map_non_etalon(item) {
            tr = item.name
            return tr
        }
        
        fuzzresult = stringSimilarity.findBestMatch(name, non_etalons.map(map_non_etalon))

        res = fuzzresult.ratings.filter(item => item.rating > 0.60 )

        console.log(name)
        console.log(res)

    })
        










console.log(data.length)
console.log('Правда: ' + true_result.length)
console.log('Ложь: ' + false_result.length)
console.log('Правда 2 волна: ' + second_true_result.length)
console.log('Ложь 2 волна: ' + second_false_result.length)