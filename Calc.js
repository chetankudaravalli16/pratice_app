function Calculation()

{
 const Total=parseFloat(document.querySelector('#total').value)
const Rate=parseFloat(document.querySelector('#rate').value)
console.log(Rate);

     const Tip=Total*(Rate/100)

     const Tax_Rate=5.5

     const Tax=Total*(Tax_Rate/100)

     const Grand_Total=Total+Tip+Tax;

     document.querySelector('#Tip').innerHTML=`$${Tip.toFixed(2)}`

     document.querySelector('#Tax').innerHTML=`$${Tax.toFixed(2)}`

     document.querySelector('#Total').innerHTML=`$${Grand_Total.toFixed(2)}`

}

     document.querySelector('#button').addEventListener('click',Calculation)