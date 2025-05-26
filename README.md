<p align="center">
  <a href="https://www.codescouts.academy/" target="_blank">
    <img alt="CodeScouts" src="https://www.codescouts.academy/images/logo-all-yellow.png" />
  </a>
</p>

<h1 align="center">
  🏗️ Curso de arquitectura FrontEnd 🏭
</h1>
<p align="center">
  <br />
  <a href="https://github.com/codescouts-academy/curso-arquitectura-frontend/stargazers">Stars are welcome 😊</a>
  <a href="https://github.com/codescouts-academy/curso-arquitectura-frontend/issues">Report an error 🐛</a>
  <a href="https://www.codescouts.academy/courses/arquitectura-frontend/">Contact us 🤔</a>
</p>
<p>
  <a href="https://library.codescouts.academy/" title="Go to project documentation" target="_blank"><img src="https://img.shields.io/badge/view-Documentation-blue?style=for-the-badge" alt="view - Documentation"/></a>

</p>
<span>
  <img src="https://img.shields.io/badge/maintained-yes-blue" alt="maintained - yes">
  <a title="Go to contributions doc"><img src="https://img.shields.io/badge/contributions-welcome-blue" alt="contributions - welcome"></a>
  <a href="https://library.codescouts.academy/docs/clean-architecture/"><img src="https://img.shields.io/badge/Clean-Architecture-2ea44f" alt="Clean - Architecture"></a>
</span>

## 🚀 Getting started

⬇️ Template downloading

```sh
npx degit codescouts-academy/curso-arquitectura-frontend#shop-vite my-app
```

🏂 Install dependencies

```sh
npm i
```

🏁 Start

```sh
npm run dev
```

## 🥋 Dependencies

- 🧪 codescouts/test -> Jest & Vite mocking library easy to use
- 💉 codescouts/di -> agnostic ependency injection container
- ⚡️ codescouts/events -> agnostic library to create and handle domain events
- 🛟 codescouts/store -> reactive store to allow update ui from domain
- 👩‍💻 codescouts/ui -> components for events and di only for react

## 👩‍💻 Project explanation

### 📁 Recommended folder structure

```

public/
├── favicon.png --> CodeScouts's logo
│
src/
├── application/ Our use cases
├── domain/ Our Business logic
│   ├── events --> Here we model the domain events
│   ├── model --> Here we model our business logic
│   └── services --> Here exists the domain services (only abstractions)
│
├── infrastructure/ Our external services implementations│
├── ui/ React things
│   ├── components/ --> stateless components
│   └── pages/
│
├── App.tsx
├── di.ts --> Dependency injection configuration
└── main.tsx --> Main component loaded, referenced in index.html
```

## 🤔 Contributing

Si encuentras algún error, crees que hay cosas por mejorar o simplemente quieres contribuir, eres bienvenido/a.
Solo realiza un fork y envíanos tu PR 🙏.

## LICENSE

Released under [MIT](/LICENSE) by [@codescouts-academy](https://github.com/codescouts-academy).
