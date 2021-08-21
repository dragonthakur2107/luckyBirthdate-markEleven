const birthDate = document.querySelector("#birth-Date");
const luckyNumber = document.querySelector("#lucky-Number");
const resultArea = document.querySelector("#result-Area");


const btnCheck = document.querySelector("#btn-Main")


btnCheck.addEventListener("click",function dated(){
    const dateOne = birthDate.value;
    const luckNo = luckyNumber.value;
    const sumOfDate=bdayCalci(dateOne);
    if( sumOfDate % luckNo ===0 ){
    resultArea.innerText= "Yup! Your Birthdate is lucky.";
    }
    else{
        resultArea.innerText="Your Birthdate is not so lucky.";
    }
});
function dateformatter(dob){
    dob=dob.replaceAll("-","")
    return dob;
} 
function bdayCalci(dob){
    const dateTwo=dateformatter(dob);
    let sum=0;
    for(let i=0;i<dateTwo.length;i++)
    {
        sum=sum+ Number(dateTwo.charAt(i));
    }
    return sum;
}