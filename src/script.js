const reset = document.querySelector('#reset')
const tipAmount = document.querySelector('.tip-amount')
const totalAmount = document.querySelector('.total-amount')
const peopleField = document.querySelector('.people-field')
const keys = document.querySelectorAll('.key')
const customEl = document.querySelector('.custom')
const bill = document.querySelector('#bill-amount')
const errorField = document.querySelector('.error')

let { totalTip, tipPerPerson, totalPerPerson}  = Number

console.log('helloo')

const calcTip = (total, tip, people) => {

    totalTip = total * (tip / 100 )
    tipPerPerson = Number((totalTip / people).toFixed(2))
    let totalBill = total + totalTip
    totalPerPerson = Number((totalBill / people).toFixed(2))
    //console.log(totalBill)

    if (!people) {
        peopleField.classList.add('red-colored')
        errorField.classList.remove('hidden')
        tipPerPerson = 0
        totalPerPerson = 0
    }

 
}

const getBill = () => {
    return Number(bill.value)
}
const getPeople = () => {
    return Number(peopleField.value)
}

const displayBill = (val) => {
    calcTip(getBill(), val, getPeople())
    tipAmount.innerText = `$ ${tipPerPerson}`
    totalAmount.innerText = `$ ${totalPerPerson}`
}

bill.addEventListener('input', () => getBill())
peopleField.addEventListener('input', () => getPeople())
reset.addEventListener('click', () => {
    tipAmount.innerText  = '$0.00'
    totalAmount.innerText  = '$0.00'
    bill.value = '0'
    peopleField.value = '0'
})

keys.forEach(key => {
    key.addEventListener('click', () => {       

        displayBill(key.value)
    }  )
  
})


customEl.addEventListener('input', (e) => displayBill(e.target.value))

peopleField.addEventListener('input', (e) => displayBill(e.target.value))