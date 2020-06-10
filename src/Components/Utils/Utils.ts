import moment from 'moment';

export const replacer = (arr: any) => {
    let result:any = []
    for (let index = 0; index < arr.length; index++) {
        result.push(parseFloat(arr[index].replace(",", ".")))

    }
  return result
}

export const formatDate = (arr: any) => {
    let result:any = []
    for (let index = 0; index < arr.length; index++) {
        result.push(moment(arr[index]).format("DD-MM-YYYY"))

    }
  return result
}
