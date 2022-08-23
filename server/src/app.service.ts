import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    let result = []

    // const CostForOneThreadOneDay = 0.01383333333
    const CostForOneThreadOneDay = 0.0139


    let threads_array = [
      50, 75, 100, 
      125, 150, 175, 200, 
      225, 250, 275, 300, 
      325, 350, 375, 400, 
      425, 450, 475, 500, 
      525, 550, 575, 600, 
      625, 650, 675, 700, 
      725, 750, 775, 800, 
      825, 850, 875, 900, 
      925, 950, 975, 1000,
      1100, 1200, 1300, 1400,
      1500, 1600, 1700, 1800,
      1900, 2000, 3000
    ]

    
    // let threads_array = [...Array(1000).keys()]

    // delete threads_array[0]


    let hours_array = [24, 120, 240, 480 , 720,  1440, 2160, 2880, 3600, 4320]
    // let hours_array = [94]
    // let hours_array = [720]
    
    


    // let coefThread = (threads) => {

    //   if (threads < 100) {
    //     return 2
    //   } else {
    //     return 1
    //   }

    // }

    let coefThread = (price, threads) => {

      if (threads < 100) {
        return price
      } else {
        return price / 2
      }

    }

    // let coefHour = (hours) => {

    //   if (hours < 120) {
    //     return 2 + ((120 - hours) * 0.02083333333) 
    //   } else if (hours < 240) {
    //     return 1.65 + ((240 - hours) * 0.002916666667) 
    //   } else if (hours < 480) {
    //     return 1.25 + ((480 - hours) * 0.001666666667) 
    //   } else if (hours < 720) {
    //     return 1 + ((720 - hours) * 0.001041666667) 
    //   } else {
    //     return 1
    //   }

    // }

    
    let coefHour = (hours) => {

      if (hours < 120) {
        return 2 + ((120 - hours) * 0.0312) 
      } else if (hours < 240) {
        return 1.65 + ((240 - hours) * 0.002916666667) 
      } else if (hours < 480) {
        return 1.25 + ((480 - hours) * 0.001666666667) 
      } else if (hours < 720) {
        return 1 + ((720 - hours) * 0.001041666667) 
      } else {
        return 1
      }

    }

    
    // let priceOffset = (CostForOneThreadOneDay, hours, threads) => {
    //   if (threads < 100) {
    //     return CostForOneThreadOneDay * 2 * hours * 25 
    //   } else {
    //     return CostForOneThreadOneDay * 2 * hours * 25 * 2
    //   }
    // }

   let priceOffset = (CostForOneThreadOneDay, hours, threads) => {
      if (threads < 100) {
        return CostForOneThreadOneDay * 2 * hours * 25 
      } else if (threads < 1000) {
        return CostForOneThreadOneDay * 2 * hours * 25 * 2
      } else {
        return CostForOneThreadOneDay * 2 * hours * (threads / 40) * 2
      }
    }


    function globalPrice(CostForOneThreadOneDay, hours, threads) {
      return (priceOffset(CostForOneThreadOneDay, hours, threads) +  (( coefThread(CostForOneThreadOneDay, threads) * threads ) * hours)) * coefHour(hours)
    }


    let main = (CostForOneThreadOneDay, threads, hours) => {

        threads = threads - 1


        let position = {
          // price: (((CostForOneThreadOneDay * threads) * coefThread(threads) * hours)) * coefHour(hours),
          // price: (((1.023666667 + (( coefThread(CostForOneThreadOneDay, threads)) * threads )) * hours)) * coefHour(hours),
          price: globalPrice(CostForOneThreadOneDay, hours, threads),
          cost: coefThread(CostForOneThreadOneDay, threads),
          hours,
          threads,
          days: hours / 24,
          coefStart: priceOffset(CostForOneThreadOneDay, hours, threads)
        }


        // return `<tr>
        //           <td>${position.threads} потоков</td> 
        //           <td>${position.days} дней </td>
        //           <td>(${position.hours}) </td>
        //           <td>цена = <b>${position.price.toFixed(2)}</b></td>
        //           <td>(${position.cost})   </td>
        //           <td>${position.coefStart}</td>
        //         </tr>`

        
        // return `<td><b>${position.price.toFixed(2)}</b></td>`
        return `<td><b>${position.price.toFixed(0)}</b> </td>`
    }

    
    threads_array.forEach(thread => {

      let sub_result = []

      hours_array.forEach(hour => {
        sub_result.push(main(CostForOneThreadOneDay, thread, hour))
      })


      result.push(`<tr>
                    <td>${thread}</td> 
                    ${sub_result.map(res => `${res}`)}
                  </tr>`)



    })



    return `<table border="1" cellspacing="0" cellpadding="3" style="border: 1px solid black">
      <thead><td>Потоки</td>${hours_array.map(item => `<td>${item / 24} дней</td>`)}</thead>
      ${result.join(' ')}        
    </table>`;
  }
}
