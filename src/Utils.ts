export const isUniqueElem = (arr:any[], elem:any) => {
    return arr.indexOf(elem) < 0;
};

export const arrayDiff = (arr1:string[], arr2:string[]) => {
    return arr1.filter((e:any) => {
        return arr2.indexOf(e) < 0;
    });
};

export const isValidInput = (arr:string[], input:string) => {
    return input != '' && input != undefined && isUniqueElem(arr, input);
}
