# Mi primer pipeline de CI

Repositorio de práctica preparado para trabajar con integración continua en GitHub Actions.

## Requisitos

- Git
- Node.js 24 o superior y npm
- Python 3.13 o superior
- Java 17 o superior
- `yamllint` y `actionlint`
- Visual Studio Code con las extensiones YAML e indent-rainbow

## Uso local

```powershell
npm ci
npm test
python -m yamllint .
actionlint
```

## Ramas

- `main`: versión estable.
- `develop`: rama de trabajo para la siguiente clase.

El workflow [`.github/workflows/hola.yml`](.github/workflows/hola.yml) se ejecuta al enviar cambios a `main` o `develop`, al abrir un pull request y también de forma manual.
