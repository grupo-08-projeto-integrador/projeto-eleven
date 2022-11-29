const counter = document.querySelector('#counterValue');
        const buttonDecrement = document.querySelector('#btnmenos-checkout');
        const buttonIncrement = document.querySelector('#btnmais-checkout');

        let  value = counter.value;

        buttonIncrement.addEventListener('click',() => {
        value = ++value;
        counter.value = value;
        });
        buttonDecrement.addEventListener('click', () => {
        value = value !== 1 ? --value : 1;
        counter.value = value;
        });