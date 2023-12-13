function getCurrentDate(){
    const options ={
        day:'numeric',
        month: 'short',
        year: 'numeric'
    };
    return new Date().toLocaleDateString('en-GB', options);
}



 