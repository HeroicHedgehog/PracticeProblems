const dateLength = (stringIn) =>{
    let string = typeof stringIn === "string" ? stringIn : stringIn + '';
    if(string.length < 2)
    {
        string = '0' + string;
    }
    return string;
}

const attempt1 = () =>{
    const aDate = new Date();
    const day = dateLength(aDate.getDate() );
    const month = dateLength((aDate.getMonth()+1));
    const hour = dateLength(aDate.getHours());
    const min = dateLength(aDate.getMinutes());
    const sec = dateLength(aDate.getSeconds());
    console.log(`${aDate.getFullYear()}-${month}-${day} ${hour}:${min}:${sec}`);
}

const main = () =>{
    const aDate = new Date();
    let longDate = aDate.toISOString().replace('T', ' ').slice(0,19);
    // longDate = longDate.replace('T', ' ');
    // longDate = longDate.slice(0,19);
    console.log(longDate);
}
main()