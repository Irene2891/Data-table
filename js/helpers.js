// function getCurrentDate(){
//     const options ={
//         day:'numeric',
//         month: 'short',
//         year: 'numeric'
//     };
//     return new Date().toLocaleDateString('en-GB', options);
// }

const addSuffixCorrrespondToNumber =(input)=> {
    let str = input.toString();
    if (str.length >= 2 && str.slice(-2) === '11' || str.slice(-2) === '12' || str.slice(-2) === '13') {
        return 'th';
    }
    if ( str.endsWith('1')){
        return 'st';
    }
    if (str.endsWith('2')){
        return 'nd';
    }
    if (str.endsWith ('3')){
        return 'rd';
    }
    return 'th';
 };

 export const formatDate =(dateInput)=> {
    let date =new Date(dateInput);
    const dayNumber= date.getDate();
    return `${dayNumber}${addSuffixCorrrespondToNumber(
        dayNumber
    )}, ${date.toLocaleString('en-GB',{
        month: 'short',
    }
    )} ${date.getFullYear()}`
};

 export const formatToDateString =() => {
let date= new Date();
return `${date.getFullYear()}-${date.getMonth()}-${date.getDate}`;
 };