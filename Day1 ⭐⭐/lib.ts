export const sumFile = (fileData : number[])  : number => {
    return fileData.reduce((a, b) => a + b, 0);
}