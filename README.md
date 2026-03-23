🚀 Sistema Web Completo

Aplicação web fullstack desenvolvida com foco em escalabilidade, performance e experiência do usuário. O projeto simula um sistema real de pedidos online, com autenticação, cardápio dinâmico e área do cliente.

📌 Funcionalidades
Landing Page moderna e responsiva
Cardápio dinâmico com filtros
Sistema de autenticação (JWT + Bcrypt)
Carrinho de compras
Área do cliente com histórico de pedidos
Estrutura preparada para webhooks (tempo real)
🛠️ Tecnologias Utilizadas
Frontend: HTML, CSS, JavaScript
Backend: Node.js
Autenticação: JWT
Segurança: Bcrypt
Banco de Dados: (adicione o que você usar, ex: MongoDB ou MySQL)

Estrutura do projeto:
pizzaria-sophia/
├── public/                # Arquivos acessíveis pelo navegador
│   ├── assets/
│   │   ├── images/        # Logos, fotos das pizzas, banners
│   │   ├── icons/         # Favicon, ícones sociais
│   │   └── audio/         # Push tones e alertas de novos pedidos
│   ├── css/               # Estilização (Tailwind/Custom)
│   ├── js/                # Scripts do Frontend (Vanilla JS ou React/Vue)
│   └── index.html         # Ponto de entrada
├── src/                   # Código fonte do Backend (API)
│   ├── controllers/       # Lógica de rotas
│   ├── models/            # Esquemas do Banco de Dados
│   ├── routes/            # Definição dos endpoints
│   ├── middlewares/       # Segurança e Autenticação (JWT)
│   └── config/            # Variáveis de ambiente e DB
├── .env                   # Dados sensíveis (Secret Keys, DB URL)
└── package.json           # Dependências do projeto
