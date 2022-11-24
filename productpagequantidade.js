const counter= document.querySelector('#counterValue');
        const buttonDecrement = document.querySelector('#buttonDecrement');
        const buttonIncrement = document.querySelector('#buttonIncrement');

        let  value = counter.value;

        buttonIncrement.addEventListener('click',() => {
        value = ++value;
        counter.value = value;
        });
        buttonDecrement.addEventListener('click', () => {
        value = value !== 1 ? --value : 1;
        counter.value = value;
        });