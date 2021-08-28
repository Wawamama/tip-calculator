const reset = document.querySelector('#reset')
const tipAmount = document.querySelector('.tip-amount')
const totalAmount = document.querySelector('.total-amount')
const people = document.querySelector('.people-field')
const keys = document.querySelectorAll('.key')
const custom = document.querySelector('.custom').value
const bill = document.querySelector('#bill-amount')

let { totalTip, tipPerPerson, totalPerPerson}  = Number

const calcTip = (total, tip, people) => {
    totalTip = total * (tip / 100 )
    tipPerPerson = Number((totalTip / people).toFixed(2))
    let totalBill = total + totalTip
    totalPerPerson = Number((totalBill / people).toFixed(2))
    console.log(totalBill)
    // return total * (tip / 100 )
}

const getBill = () => {
    return Number(bill.value)
}
const getPeople = () => {
    return Number(people.value)
}

bill.addEventListener('input', () => getBill())
people.addEventListener('input', () => getPeople())
reset.addEventListener('click', () => {
    tipAmount.innerText  = '$0.00'
    totalAmount.innerText  = '$0.00'
    bill.value = '0'
    people.value = '0'
})

keys.forEach(key => {
    key.addEventListener('click', () => {       
        calcTip(getBill(), key.value, getPeople())
        tipAmount.innerText = `$ ${tipPerPerson}`
        totalAmount.innerText = `$ ${totalPerPerson}`
    }  )
  
})


