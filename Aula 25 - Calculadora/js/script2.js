function Calculadora() {
    this.display = document.querySelector('#display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.pressEnter();
    }; 

    this.pressEnter = () => {
        document.addEventListener('keyup', e => {
            if(e.keyCode === 13) {
                this.realizaConta();
            }
        })
    }



    this.addNumDisplay = (el) => {
        this.display.value += el.innerText;
        this.display.focus(); 
    };

    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    
    this.realizaConta = () => { 
        try {
           let conta = eval(this.display.value).toFixed(2);
           if(!conta) {
            alert('Invalido!');
            return
        }
        this.display.value = conta;
        }
        catch(e) {
            alert('Invalido!');
            return
        }
    };
    
    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            let el = event.target;
            if(el.classList.contains('btn-num')) this.addNumDisplay(el);
            if(el.classList.contains('btn-clear')) this.clear();
            if(el.classList.contains('btn-del')) this.del();
            if(el.classList.contains('btn-eq')) this.realizaConta();
        })
    }; 
}

const calculadora = new Calculadora();
calculadora.inicia(); 