# Mi primer pipeline de CI

Proyecto de práctica para comprobar un pipeline de integración continua con GitHub Actions.

## Requisitos cubiertos

- Push a `main`.
- Pull request hacia `main`.
- Cambios únicamente en `docs/` no disparan el workflow.
- Job `calidad` ejecuta ESLint y falla si hay advertencias.
- Job `pruebas` usa una matriz con Node.js 20 y 22.
- Job `empaquetar` depende de `calidad` y `pruebas`.
- Se publican el paquete generado y los reportes de cobertura como artefactos.

## Uso local

```powershell
npm test
npm run test:coverage
npm run lint
```
