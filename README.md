# Создаем проект express c bdd тестированием

1. Создаем проект express с помощью cli

> express --view=pug express-ts

1. Устанавливаем зависимости для тестов

> npm i -D mocha chai chai-http

1. Создаем папку для тестов и первый файл server.js

> tslint -i
> npx tsc --init --rootDir src --outDir lib --esModuleInterop --resolveJsonModule --lib es6,dom --module commonjs

1. Добавляем prettier и в настройках VSСODE ставим true в autofix

> npm i -D tslint-config-prettier

> в tslint.json
> "extends": ["tslint:recommended", "tslint-config-prettier"],

> в preferences VSCODE
> { "tslint.autoFixOnSave": true,
> "typescript.updateImportsOnFileMove.enabled": "always",
> "editor.formatOnSave": true,
> "tslint.alwaysShowRuleFailuresAsWarnings": true,
> "prettier.tslintIntegration": true,
> "tslint.run": "onSave" }

1. Переименовываем все файлы из js в ts

1. Добавляем папки input/output

> из tsconfig.ts
> "outDir": "lib"
> "rootDir": "src"

> В lib переносим всю статику
> В src все файлы .ts

1. В tsconfig добавляем

> "noImplicitAny": false - разрешает использовать тип any

1. Устанавливаем .d.ts для модулей используемых в проекте

> npm i -D @types/http-errors @types/cookie-parser @types/morgan @types/debug

1. Исправляем файлы на ES6

1. Компилируем и запускаем

> scripts в package.json
> {"build-ts": "tsc",
> "start": "npm run serve",
> "serve": "node lib/bin/www.js",
> "watch-node": "nodemon lib/bin/www.js",
> "watch-ts": "tsc -w" }
