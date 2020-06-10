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

export const average = (arr: any) => {
    let result: any = ''
    let sum: any = arr.reduce((previous: any, current: any) => current += previous)
    result = sum / arr.length;
    return result;
}

export const destructuredDate = (date: any, isStartDate: boolean) => {
    return (isStartDate)
        ? date.replace(/(.{7}).{1}/, "$1/dias_i/").replace('-', '/')
        : date.replace(/(.{7}).{1}/, "$1/dias_f/").replace('-', '/');
}