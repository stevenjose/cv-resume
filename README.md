# CV / Resume – Steven Jose

CV interactivo desarrollado con **React**, mostrando la experiencia profesional como desarrollador de software.

## 👨‍💻 Sobre mí

Desarrollador de Software con experiencia en entornos empresariales de gran escala, actualmente trabajando en **Mecalux** (Barcelona, España).

## 🛠️ Stack Tecnológico Principal

| Área | Tecnologías |
|------|-------------|
| **Backend** | Java, Spring Framework (Boot, Data, Security) |
| **Frontend** | Angular, TypeScript, RxJS |
| **Integración ECM** | Alfresco |
| **Prácticas** | Clean Code, SOLID, arquitectura limpia |
| **Herramientas** | Git, Maven, REST APIs |

## 🚀 Demo en vivo

[Ver CV en vivo](https://stevenjose.github.io/cv-resume/)

## 📦 Instalación y uso

```bash
# Instalar dependencias
yarn install

# Iniciar en modo desarrollo
yarn start

# Ejecutar tests
yarn test

# Generar build de producción
yarn build
```

## 🏗️ Estructura del proyecto

```
src/
├── actions/        # Redux actions (Firestore fetchers)
├── assets/         # Imágenes y recursos estáticos
├── components/     # Componentes React funcionales
│   ├── About.js        # Información personal y redes sociales
│   ├── Experience.js   # Experiencia laboral
│   ├── Education.js    # Formación académica
│   ├── Certificate.js  # Certificaciones
│   ├── Portafolio.js   # Proyectos destacados
│   └── Skills.js       # Habilidades técnicas
├── hooks/          # Custom hooks (UserHook)
├── reducers/       # Redux reducers
├── store/          # Configuración del store Redux
└── types/          # Constantes de tipos Redux
```

## 🔧 Tecnologías del proyecto

- **React 17** – Componentes funcionales con Hooks
- **Redux + Redux Thunk** – Gestión de estado
- **Firebase / Firestore** – Base de datos en tiempo real
- **Material-UI** – Componentes de interfaz
- **React Router** – Navegación SPA

## 📄 Licencia

MIT
