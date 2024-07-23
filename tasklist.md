

# Estrutura de pastas


assistente-virtual-negocios/
│
├── public/
│   ├── css/
│   │   └── styles.css         # Estilos CSS
│   ├── js/
│   │   └── app.js             # Scripts JavaScript
│   ├── images/
│   │   └── logo.png           # Imagens estáticas
│   └── index.html             # Página inicial
│
├── src/
│   ├── config/
│   │   └── db.js              # Configuração do banco de dados MySQL
│   ├── controllers/
│   │   ├── businessController.js # Lógica de negócios e APIs
│   │   └── userController.js     # Lógica de gerenciamento de usuários
│   ├── models/
│   │   ├── businessModel.js    # Modelos de dados de negócios
│   │   └── userModel.js        # Modelos de dados de usuários
│   ├── routes/
│   │   ├── businessRoutes.js   # Rotas relacionadas a negócios
│   │   └── userRoutes.js       # Rotas relacionadas a usuários
│   ├── services/
│   │   └── geminiService.js    # Serviço para integração com a API Gemini
│   └── utils/
│       └── helperFunctions.js  # Funções utilitárias
│
├── views/
│   ├── layouts/
│   │   └── mainLayout.ejs      # Layout principal para views EJS
│   ├── business.ejs            # View para gerenciamento de negócios
│   └── user.ejs                # View para gerenciamento de usuários
│
├── .gitignore                   # Arquivo para ignorar arquivos do Git
├── package.json                 # Gerenciador de pacotes e scripts
├── README.md                    # Documentação do projeto
└── server.js                    # Ponto de entrada da aplicação
