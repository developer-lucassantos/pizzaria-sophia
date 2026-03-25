const SABORES = [
    { id: 1, nome: "Abobrinha", desc: "Mussarela, Abobrinha, Bacon, Catupiry e Parmesão.", preco: 49.99 },
    { id: 2, nome: "Alho frito", desc: "Alho frito e mussarela", preco: 44.99 },
    { id: 3, nome: "Americana", desc: "Presunto, ovo, milho, mussarela e tomate", preco: 49.99 },
    { id: 4, nome: "Atum II", desc: "Atum e Cebola", preco: 54.99 },
    { id: 5, nome: "Bacon", desc: "Bacon com mussarela", preco: 47.99 },
    { id: 6, nome: "Baiana", desc: "Calabresa Ralada, Ovos, Cebola, Pimenta e Tabasco.", preco: 47.99 },
    { id: 7, nome: "Bauru", desc: "Presunto, tomate, oregano e mussarela", preco: 45.99 },
    { id: 8, nome: "Brócolis", desc: "Mussarela, Brócolis, Bacon, Catupiry e Alho Frito.", preco: 49.99 },
    { id: 9, nome: "Caipira", desc: "Frango Desfiado, Milho, Bacon e Mussarela.", preco: 47.99 },
    { id: 10, nome: "Calabresa", desc: "Calabresa Fatiada e Cebola.", preco: 45.00 },
    { id: 11, nome: "Calabresa com Catupiry", desc: "Calabresa Fatiada, Catupiry e Cebola.", preco: 47.99 },
    { id: 12, nome: "Carijó", desc: "Frango desfiado, milho e catupiry", preco: 49.99 },
    { id: 13, nome: "dois queijos", desc: "Mussarela e catupiry", preco: 48.99 },
    { id: 14, nome: "Doritos", desc: "Mussarela e MUITOO Doritos!!", preco: 49.99 },
    { id: 15, nome: "Doritos com cheedar", desc: "mussarela, cheeadar e doritos", preco: 59.99 },
    { id: 16, nome: "Frango com Milho", desc: "Frango e milho", preco: 44.99 },
    { id: 17, nome: "Frango com Catupiry", desc: "Frango desfiado e Catupiry", preco: 47.99 },
    { id: 18, nome: "Frango com Cheddar", desc: "Frango desfiado e cheddar cremoso", preco: 47.99 },
    { id: 19, nome: "Frango com queijo", desc: "Frango desfiado e mussarela", preco: 49.99 },
    { id: 20, nome: "Jardineira", desc: "frango desfiado, milho, ervilha e mussarela", preco: 50.00 },
    { id: 21, nome: "Magnifica", desc: "Presunto, mussarela, calabresa, ervilha e cebola", preco: 55.00 },
    { id: 22, nome: "Marguerita", desc: "Mussarela, Tomate, Parmesão e Manjericão.", preco: 46.99 },
    { id: 23, nome: "Mata Fome", desc: "Calabresa, Presunto, Ovo, Bacon e Mussarela", preco: 54.99 },
    { id: 24, nome: "Milho com catupiry Especial", desc: "Milho, catupiry e mussarela", preco: 47.99 },
    { id: 25, nome: "Mineira", desc: "mussarela, bacon, ovos e cebola", preco: 55.00 },
    { id: 26, nome: "mista", desc: "calabresa, cebola e mussarela", preco: 50.00 },
    { id: 27, nome: "Mussarela", desc: "Mussarela e Tomate.", preco: 45.00 },
    { id: 28, nome: "Palmito", desc: "Palmito Picado e Mussarela.", preco: 44.99 },
    { id: 29, nome: "Pepperoni", desc: "Mussarela e Pepperoni.", preco: 47.99 },
    { id: 30, nome: "Pepperoni Cheese", desc: "Mussarela, Pepperoni, Cream Cheese e Parmesão.", preco: 49.99 },
    { id: 31, nome: "Portuguesa", desc: "Presunto, Ervilha, Ovos Cozidos, Cebola e Mussarela.", preco: 46.99 },
    { id: 32, nome: "Quatro Queijos", desc: "Mussarela, Catupiry, Provolone e Parmesão.", preco: 51.99 },
    { id: 33, nome: "Raladinha com Cream Cheese", desc: "Mussarela, Calabresa Ralada e Cream Cheese.", preco: 46.99 },
    { id: 34, nome: "Toscana", desc: "Calabresa Fatiada, Cebola e Mussarela.", preco: 47.99 },
    { id: 35, nome: "Toscana 2", desc: "calabresa, mussrela e bacon", preco: 48.99 },
    { id: 36, nome: "X- Tudo", desc: "Presunto, calabresa, frango,ovo,ervilha,cebola,bacon,tomate e mussarela", preco: 65.00 },
    { id: 37, nome: "Milho", desc: "MIlho e mussarela", preco: 48.00 },
    { id: 38, nome: "Francesa", desc: "palmito c/bancon, presunto e mussarela", preco: 55.00 },
    { id: 39, nome: "Do chefe", desc: "Calabresa, bacon, mussarela, catupiry", preco: 49.99 },
    { id: 40, nome: "Gaúcha", desc: "Calabresa, cebola, molho churrasco e mussarela.", preco: 60.00 },
    { id: 41, nome: "Frango com queijo e cheddar", desc: "frango, mussrela e cheddar", preco: 53.99 },
    { id: 42, nome: "Brigadeiro", desc: "creme de chocolate e granulado", preco: 60.00 }
];

class CarrinhoSophia {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('sophia_cart')) || [];
        this.step = 1;
        this.pagamento = "";
        this.init();
    }

    init() {
        this.renderProdutos();
        this.renderCart();
    }

    renderProdutos() {
        const grid = document.getElementById('pizzas-grid');
        if(!grid) return;
        grid.innerHTML = SABORES.map(p => `
            <div class="bg-sophia-gray p-6 rounded-[2rem] border border-white/5 flex flex-col justify-between group hover:border-sophia-orange transition">
                <div>
                    <h3 class="font-black text-xl uppercase italic mb-2">${p.nome}</h3>
                    <p class="text-gray-400 text-sm mb-6">${p.desc}</p>
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-2xl font-black">R$ ${p.preco.toFixed(2)}</span>
                    <button onclick="window.sophiaCart.add(${p.id})" class="bg-sophia-orange text-white w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg"><i class="fas fa-plus"></i></button>
                </div>
            </div>
        `).join('');
    }

    add(id) {
        const p = SABORES.find(x => x.id === id);
        const exists = this.items.find(i => i.id === id);
        exists ? exists.qtd++ : this.items.push({...p, qtd: 1});
        this.save();
    }

    save() {
        localStorage.setItem('sophia_cart', JSON.stringify(this.items));
        this.renderCart();
    }

    renderCart() {
        const count = this.items.reduce((acc, i) => acc + i.qtd, 0);
        const total = this.items.reduce((acc, i) => acc + (i.preco * i.qtd), 0);
        document.getElementById('cart-count').innerText = count;
        document.getElementById('cart-total').innerText = total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'});
        document.getElementById('cart-bar').classList.toggle('translate-y-full', count === 0);
        
        const list = document.getElementById('step-1');
        if(list) {
            list.innerHTML = this.items.map(i => `
                <div class="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
                    <div><h4 class="font-bold text-sm">${i.nome}</h4><p class="text-sophia-orange font-black text-xs">R$ ${i.preco.toFixed(2)}</p></div>
                    <div class="flex items-center gap-3">
                        <button onclick="window.sophiaCart.changeQtd(${i.id}, -1)" class="w-8 h-8 bg-sophia-dark rounded-lg">-</button>
                        <span class="font-bold">${i.qtd}</span>
                        <button onclick="window.sophiaCart.changeQtd(${i.id}, 1)" class="w-8 h-8 bg-sophia-dark rounded-lg">+</button>
                    </div>
                </div>
            `).join('');
        }
    }

    changeQtd(id, delta) {
        const i = this.items.find(x => x.id === id);
        if(i) {
            i.qtd += delta;
            if(i.qtd <= 0) this.items = this.items.filter(x => x.id !== id);
            this.save();
        }
    }

    abrirModal() {
        this.step = 1;
        this.updateModal();
        document.getElementById('cart-modal').classList.remove('hidden');
        setTimeout(() => document.getElementById('modal-content').classList.remove('translate-y-full'), 10);
    }

    fecharModal() {
        document.getElementById('modal-content').classList.add('translate-y-full');
        setTimeout(() => document.getElementById('cart-modal').classList.add('hidden'), 300);
    }

    nextStep() {
        if(this.step === 1) this.step = 2;
        else if(this.step === 2) {
            if(!document.getElementById('cust-nome').value) return alert("Diga seu nome!");
            this.step = 3;
        }
        else if(this.step === 3) {
            if(!document.getElementById('cust-end').value) return alert("Diga o endereço!");
            this.step = 4;
        }
        else if(this.step === 4) {
            if(!this.pagamento) return alert("Escolha o pagamento!");
            this.finalizar();
        }
        this.updateModal();
    }

    prevStep() {
        if(this.step > 1) this.step--;
        this.updateModal();
    }

    updateModal() {
        document.querySelectorAll('.step-container').forEach(s => s.classList.add('hidden'));
        document.getElementById(`step-${this.step}`).classList.remove('hidden');
        document.getElementById('btn-back').classList.toggle('hidden', this.step === 1);
        document.getElementById('btn-next').innerText = this.step === 4 ? "ENVIAR WHATSAPP" : "AVANÇAR";
        const titles = ["Seu Pedido", "Identificação", "Entrega", "Pagamento"];
        document.getElementById('step-title').innerText = titles[this.step-1];
    }

    setPay(m) {
        this.pagamento = m;
        document.querySelectorAll('.pay-opt').forEach(b => b.classList.remove('border-sophia-orange', 'text-sophia-orange'));
        event.currentTarget.classList.add('border-sophia-orange', 'text-sophia-orange');
    }

    finalizar() {
        const nome = document.getElementById('cust-nome').value;
        const end = document.getElementById('cust-end').value;
        let msg = `*NOVO PEDIDO - SOPHIA*%0A%0A*CLIENTE:* ${nome}%0A%0A*ITENS:*%0A`;
        this.items.forEach(i => msg += `- ${i.qtd}x ${i.nome}%0A`);
        msg += `%0A*TOTAL:* ${document.getElementById('cart-total').innerText}%0A%0A*ENDEREÇO:* ${end}%0A*PAGAMENTO:* ${this.pagamento}`;
        window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
        localStorage.removeItem('sophia_cart');
        location.reload();
    }
}
window.sophiaCart = new CarrinhoSophia();