function criaCalc() {
    return {
        display: document.querySelector('#display'),
        btnClear: document.querySelector('.btn-clear'),


        inicia() {
            this.clicouBotoes();
        },

        pressEnter() {
            
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13) {
                    this.fazerConta();
                }
            });
        },

        clearDisplay() {
            this.display.value = '';
        },

        delchar() {
            this.display.value = this.display.value.slice(0, -1);
        },

        fazerConta() {
            let conta = this.display.value;
            try {
                conta = eval(conta).toFixed(2);

                if (!conta) {
                    alert('Conta Invalida!');
                    return;
                } 
                this.display.value = conta;

            } catch (e) {
                conta = alert('Conta Invalida!');
                return;
            }
        },

        clicouBotoes() {
            document.addEventListener('click', (e) => {
                let el = e.target;

                if (el.classList.contains('btn-num')) {
                    this.botaoParaDisplay(el.innerText);
                }

                if (el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }
                if (el.classList.contains('btn-del')) {
                    this.delchar();
                }
                if (el.classList.contains('btn-eq')) {
                    this.fazerConta();
                }

            })
        },

        botaoParaDisplay(valor) {
            this.display.value += valor;
        },




    };
}

let calculadora = criaCalc();
calculadora.inicia()