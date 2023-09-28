// deposite section + deposite show box niye age kaj korbo.
// step 1: deposite button er jonno even hadlaer set
document.getElementById('btn-deposit').addEventListener('click', function(){
    // console.log('ok') checked
    
    // step-2: deposite er input filed ta nibo
    const depositeFiled = document.getElementById('deposit-field');
    
    // step 3: deposite filed er value nibo
    const depositeFieldValue = depositeFiled.value; 
   
    // aita k integer a converst kora lagbe ba float a convert kora lagbe 
    const DepositeFiledValueNumber = parseFloat(depositeFieldValue);
    // console.log(depositeFieldValue); checked




    // step4: total deposte section ta nibo
    const totalDeposite = document.getElementById('deposit-total');
    
    // step 5: total deposite er value nibo. aita input filed hole value hisebe nibo na hole innerText nibo
    const TotalDepositeValue = totalDeposite.innerText; 
    
    // aita k integer a converst kora lagbe ba float a convert kora lagbe 
    const TotalDepositeValueNumber = parseFloat(TotalDepositeValue);
    
    // step 6: total deposte er moddhe amar normal deposite filed er value ta k update korbo
    
    // console.log(TotalDepositeValue); first show kore then update
    // final total deposite value
    const finaTotalDepositeValue = TotalDepositeValueNumber + DepositeFiledValueNumber;
    // set inner test of seposite total
    totalDeposite.innerText = finaTotalDepositeValue;
   
   

    // step 8: set total balcne with deposite deposite input filed element or value
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotal.innerText;
    const balanceTotalValueFloat = parseFloat(balanceTotalValue);
    const FinalBalanceTotalValue =   balanceTotalValueFloat +  DepositeFiledValueNumber; 
    balanceTotal.innerText = FinalBalanceTotalValue
   
    // step 7: deposite filed ta clear : last step
   depositeFiled.value = '';
   

   
    
    
})

 // widthrow section start from here 
   
 document.getElementById('btn-withdraw').addEventListener('click', function(){
    
    const widthrowInputFiled = document.getElementById('withdraw-field');
    const widthrowInneerText = widthrowInputFiled.value;
    const widthrowInnerTextFloat = parseFloat(widthrowInneerText);
    

    // widthrow show box coonect
    const PresentwidthInputFiled = document.getElementById('withdraw-total');
    const PresentwidthInputFiledValue = PresentwidthInputFiled.innerText;
    const PresentwidthInputFiledValueFloat = parseFloat(PresentwidthInputFiledValue);

    const FinalwidthowBoxValue = PresentwidthInputFiledValueFloat - widthrowInnerTextFloat;
    PresentwidthInputFiled.innerText = FinalwidthowBoxValue;


    // connect with widthow total balnce with withdrow input filed
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalValue = balanceTotal.innerText;
    const balanceTotalValueFloat = parseFloat(balanceTotalValue);
    const FinalBalanceTotalValue =   balanceTotalValueFloat -  widthrowInnerTextFloat; 
    balanceTotal.innerText = FinalBalanceTotalValue

    widthrowInputFiled.value = '';

 });