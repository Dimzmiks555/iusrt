import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {

    let result = []

    const CostForOneThreadOneDay = 0.01383333333

    // let threads_array = [
    //   25, 50, 75, 100, 
    //   125, 150, 175, 200, 
    //   225, 250, 275, 300, 
    //   325, 350, 375, 400, 
    //   425, 450, 475, 500, 
    //   525, 550, 575, 600, 
    //   625, 650, 675, 700, 
    //   725, 750, 775, 800, 
    //   825, 850, 875, 900, 
    //   925, 950, 975, 1000
    // ]

    
    let threads_array = [...Array(1000).keys()]


    let hours_array = [720]
    
    


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

    let coefHour = (hours) => {
      return 1
    }

    
    let priceOffset = (CostForOneThreadOneDay, hours, threads) => {
      if (threads < 100) {
        return CostForOneThreadOneDay * 2 * hours * 25
      } else {
        return CostForOneThreadOneDay * 2 * hours * 25 * 2
      }
    }


    let main = (CostForOneThreadOneDay, threads, hours) => {




        let position = {
          // price: (((CostForOneThreadOneDay * threads) * coefThread(threads) * hours)) * coefHour(hours),
          // price: (((1.023666667 + (( coefThread(CostForOneThreadOneDay, threads)) * threads )) * hours)) * coefHour(hours),
          price: ( priceOffset(CostForOneThreadOneDay, hours, threads) +  (( coefThread(CostForOneThreadOneDay, threads) * threads ) * hours)) * coefHour(hours),
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

        
        return `<tr>
                  <td>${position.threads}</td> 
                  <td><b>${position.price.toFixed(2)}</b></td>
                </tr>`
    }

    
    threads_array.forEach(thread => {
      hours_array.forEach(hour => {
        result.push(main(CostForOneThreadOneDay, thread, hour))
      })
    })



    return `<table border="1" cellspacing="0" cellpadding="3" style="border: 1px solid black">
      ${result.join(' ')}        
    </table>`;
  }
}
