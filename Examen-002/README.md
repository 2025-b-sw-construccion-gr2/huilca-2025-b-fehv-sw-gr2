# 📝 Examen 002 - Construcción y Evolución de Software

## 👤 Información del Estudiante
- **Estudiante:** Fernando Huilca
- **Curso:** Construcción y Evolución de Software
- **Fecha:** Enero 2026

## 📋 Descripción del Proyecto
Este proyecto es una aplicación web simple de calculadora que realiza operaciones matemáticas básicas (suma y resta) en números decimales y binarios. El proyecto implementa un pipeline de CI/CD completo usando GitHub Actions.

## 🏗️ Estructura del Proyecto
```
Examen-002/
├── .github/
│   └── workflows/
│       └── ci.yml              # Pipeline de CI/CD
├── src/
│   ├── index.html             # Interfaz HTML
│   ├── css/
│   │   └── styles.css         # Estilos CSS
│   └── js/
│       └── main.js            # Lógica principal
├── Operaciones/
│   ├── fehv-suma/
│   │   ├── suma.js            # Función de suma
│   │   └── README.md
│   └── fehv-resta/
│       ├── resta.js           # Función de resta
│       └── README.md
├── tests/
│   └── main.test.js           # Pruebas unitarias
├── .prettierrc                # Configuración Prettier
├── eslint.config.js           # Configuración ESLint
├── build.js                   # Script de build
├── package.json               # Dependencias
└── README.md                  # Este archivo
```

## 🚀 Cómo Correr el Proyecto Localmente

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm (incluido con Node.js)
- Git

### Instalación Paso a Paso

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/2025-b-sw-construccion-gr2/huilca-2025-b-fehv-sw-gr2.git
   cd huilca-2025-b-fehv-sw-gr2/Examen-002
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```
   Esto instalará:
   - `jest` - Framework de testing
   - `eslint` - Linter de código
   - `prettier` - Formateador de código

### Ejecutar el Proyecto

#### **1. Ver la aplicación en el navegador:**
Opción A - Abrir directamente:
```bash
# En Windows, abre el archivo directamente:
start src/index.html

# O copia la ruta en tu navegador:
file:///C:/Users/[usuario]/...../Examen-002/src/index.html
```

Opción B - Usar Live Server (recomendado):
- Abre VS Code
- Click derecho en `src/index.html`
- Selecciona "Open with Live Server"
- Se abrirá automáticamente en tu navegador

#### **2. Ejecutar pruebas unitarias:**
```bash
npm test
```

**Salida esperada:**
```
 PASS  tests/main.test.js
  Pruebas de Operaciones Matemáticas
    sumarNumeros
      √ debe sumar dos números positivos correctamente (4 ms)
      √ debe sumar números negativos correctamente (1 ms)
      √ debe sumar un número positivo y uno negativo
      √ debe sumar cero correctamente
      √ debe sumar números decimales (1 ms)
    restarNumeros
      √ debe restar dos números positivos correctamente
      √ debe restar números negativos correctamente (1 ms)
      √ debe restar un número positivo y uno negativo (1 ms)
      √ debe restar cero correctamente (1 ms)
      √ debe restar números decimales (1 ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
```

#### **3. Ver cobertura de pruebas:**
```bash
npm run test:coverage
```

**Salida esperada:**
```
Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total

File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |     100 |       50 |     100 |     100 |
 resta.js |     100 |       50 |     100 |     100 | 6
 suma.js  |     100 |       50 |     100 |     100 | 5
```

#### **4. Verificar calidad del código (Lint):**
```bash
npm run lint
```

**Salida esperada (solo warnings es OK):**
```
src/js/main.js
   1:10  warning  'calcularSuma' is defined but never used     no-unused-vars
   8:10  warning  'calcularResta' is defined but never used    no-unused-vars
  15:10  warning  'calcularSumaBinaria' is defined but never used  no-unused-vars

✖ 3 problems (0 errors, 3 warnings)
```

#### **5. Verificar formato del código:**
```bash
npm run format:check
```

**Salida esperada:**
```
Checking formatting...
All matched files use Prettier code style!
```

#### **6. Formatear código automáticamente:**
```bash
npm run format:write
```

**Nota:** Utiliza este comando antes de hacer commit para que todo siga el mismo estilo.

#### **7. Generar build de producción:**
```bash
npm run build
```

**Salida esperada:**
```
Copiando src...
Copiando Operaciones...
  ✓ resta.js
  ✓ suma.js
Copiando index.html...
✓ Build completado exitosamente en el directorio dist/
```

Los archivos compilados estarán en la carpeta `dist/`

---

## 🔄 Pipeline de CI/CD

### ¿Cómo Funciona el Pipeline?

El pipeline se ejecuta automáticamente en GitHub Actions cuando:
- Se hace **push** a las ramas `main`, `develop`, o ramas que empiecen con `feature/`
- Se abre un **Pull Request** hacia `main` o `develop`

**Cada cambio pasa por 4 validaciones automáticas:**

### Orden de Ejecución y Validaciones

```
PASO 1, 2, 3: Se ejecutan EN PARALELO (simultáneamente)
┌──────────┐     ┌──────────┐     ┌──────────┐
│   LINT   │     │  FORMAT  │     │   TEST   │
│    🔍    │     │    🎨    │     │    🧪    │
└────┬─────┘     └────┬─────┘     └────┬─────┘
     │                │                │
     └────────────────┴────────────────┘
                      │
          Todos DEBEN pasar para continuar
                      │
                      ▼
               ┌──────────┐
               │  BUILD   │
               │    🏗️    │
               └──────────┘
```

### **Validación 1: Lint Code** 🔍
**Tiempo:** ~15 segundos | **Herramienta:** ESLint

**¿Qué verifica?**
- Sintaxis correcta de JavaScript
- Variables no utilizadas
- Prácticas recomendadas

**Comando ejecutado:**
```bash
eslint src Operaciones tests --ext .js
```

**Si falla:**
- Revisa los errores mostrados
- Corrígelos manualmente en el código
- Haz commit y push nuevamente

---

### **Validación 2: Check Code Format** 🎨
**Tiempo:** ~10 segundos | **Herramienta:** Prettier

**¿Qué verifica?**
- Indentación consistente (4 espacios)
- Comillas simples en JavaScript
- Espaciado correcto
- Formato de HTML y CSS

**Comando ejecutado:**
```bash
prettier --check "**/*.{html,css,js}"
```

**Si falla:**
```bash
# Ejecuta esto para formatear automáticamente:
npm run format:write

# Luego haz commit y push
git add .
git commit -m "fix: Formatear código con Prettier"
git push
```

---

### **Validación 3: Run Tests** 🧪
**Tiempo:** ~20 segundos | **Herramienta:** Jest

**¿Qué verifica?**
- Todas las 10 pruebas unitarias pasan
- Cobertura mínima de código
- Functionamiento de `sumarNumeros()` y `restarNumeros()`

**Pruebas incluidas:**
```
✓ sumarNumeros - suma positivos
✓ sumarNumeros - suma negativos
✓ sumarNumeros - suma mixtos
✓ sumarNumeros - suma con cero
✓ sumarNumeros - suma decimales
✓ restarNumeros - resta positivos
✓ restarNumeros - resta negativos
✓ restarNumeros - resta mixtos
✓ restarNumeros - resta con cero
✓ restarNumeros - resta decimales
```

**Comando ejecutado:**
```bash
jest --coverage
```

**Salida esperada:**
```
Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Coverage: 100% statements, 100% functions, 100% lines
```

---

### **Validación 4: Build Project** 🏗️
**Tiempo:** ~15 segundos | **Dependencia:** Los 3 anteriores DEBEN pasar

**¿Qué hace?**
- Copia archivos de `src/`
- Copia archivos de `Operaciones/`
- Prepara todo para producción en carpeta `dist/`

**Comando ejecutado:**
```bash
node build.js
```

**Resultado:**
```
Copiando src...
Copiando Operaciones...
  ✓ resta.js
  ✓ suma.js
Copiando index.html...
✓ Build completado exitosamente en el directorio dist/
```

---

### Ver Resultados en GitHub

1. **Ve a tu repositorio en GitHub**
2. **Click en la pestaña "Actions"**
3. **Selecciona el workflow más reciente**
4. Verás 4 jobs:
   - ✅ Lint Code → PASSED
   - ✅ Check Code Format → PASSED
   - ✅ Run Tests → PASSED
   - ✅ Build Project → PASSED

5. **Descarga artefactos** (opcional):
   - `coverage-report/` - Reporte de cobertura de tests
   - `build-dist/` - Build de producción

---

## ✅ Ejemplo de Flujo Completo Exitoso

### Paso 1: Hacer cambios locales
```bash
# Crear nueva rama
git checkout -b feature/mejorar-suma

# Editar el archivo
echo "// Mejora" >> Operaciones/suma.js

# Formatear antes de commit
npm run format:write

# Commit
git add .
git commit -m "feat: Mejorar función suma"
```

### Paso 2: Subir cambios
```bash
git push origin feature/mejorar-suma
```

### Paso 3: En GitHub
- Se abre automáticamente opción de "Create Pull Request"
- Describes tus cambios
- El pipeline corre automáticamente

### Paso 4: Verificar que pase
```
✅ Lint Code - PASSED (15s)
✅ Check Code Format - PASSED (10s)
✅ Run Tests - PASSED (20s)
✅ Build Project - PASSED (15s)
```

### Paso 5: Merge
- Un compañero revisa y aprueba
- Haces merge a `develop`
- El PR se cierra automáticamente

---

## 🔀 Flujo de Trabajo con Git (Workflow)

### Crear una Nueva Feature
```bash
# 1. Crear y cambiar a nueva rama
git checkout -b feature/nombre-de-feature

# 2. Hacer cambios y commits
git add .
git commit -m "feat: descripción del cambio"

# 3. Subir rama al repositorio
git push origin feature/nombre-de-feature
```

### Abrir Pull Request
1. Ve a GitHub
2. Haz clic en "Compare & pull request"
3. Asegúrate de que el PR apunte a `develop` (no a `main`)
4. Describe los cambios realizados
5. Solicita revisión de al menos un compañero
6. Espera a que el pipeline pase (todos los checks en verde ✅)
7. Espera aprobación del revisor
8. Fusiona el PR

### Reglas de Branch
- `main` → Producción (solo código estable)
- `develop` → Desarrollo (integración de features)
- `feature/*` → Nuevas funcionalidades

## 🧪 Pruebas Unitarias

Las pruebas cubren:
- ✅ Suma de números positivos
- ✅ Suma de números negativos
- ✅ Suma con cero
- ✅ Suma de decimales
- ✅ Resta de números positivos
- ✅ Resta de números negativos
- ✅ Resta con cero
- ✅ Resta de decimales

Para ver el reporte de cobertura:
```bash
npm run test:coverage
```

## 📦 Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm test` | Ejecuta las pruebas unitarias |
| `npm run test:coverage` | Ejecuta pruebas con reporte de cobertura |
| `npm run lint` | Verifica el código con ESLint |
| `npm run format:check` | Verifica el formato del código |
| `npm run format:write` | Formatea automáticamente el código |
| `npm run build` | Genera el build de producción |

## 🛠️ Tecnologías Utilizadas
- **JavaScript** - Lenguaje de programación
- **HTML/CSS** - Interfaz de usuario
- **Jest** - Framework de testing
- **ESLint** - Linter de JavaScript
- **Prettier** - Formateador de código
- **GitHub Actions** - CI/CD

## ✅ Criterios de Evaluación Cumplidos

- ✅ Proyecto correctamente subido al repositorio
- ✅ Pipeline en GitHub Actions configurado y funcional
- ✅ Linter (ESLint) funcionando
- ✅ Verificación de formato (Prettier) funcionando
- ✅ Pruebas unitarias corriendo con cobertura
- ✅ Build generado correctamente
- ✅ Estructura de ramas y Pull Requests implementada
- ✅ README completo con documentación

## 📸 Ejemplos de Ejecución Exitosa

### Ejemplo 1: Ejecución de Pruebas
```bash
$ npm test

> examen-002@1.0.0 test
> jest

 PASS  tests/main.test.js
  Pruebas de Operaciones Matemáticas
    sumarNumeros
      √ debe sumar dos números positivos correctamente (4 ms)
      √ debe sumar números negativos correctamente (1 ms)
      √ debe sumar un número positivo y uno negativo
      √ debe sumar cero correctamente
      √ debe sumar números decimales (1 ms)
    restarNumeros
      √ debe restar dos números positivos correctamente
      √ debe restar números negativos correctamente (1 ms)
      √ debe restar un número positivo y uno negativo (1 ms)
      √ debe restar cero correctamente (1 ms)
      √ debe restar números decimales (1 ms)

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
Snapshots:   0 total
Time:        0.933 s
```

### Ejemplo 2: Cobertura de Tests
```bash
$ npm run test:coverage

 PASS  tests/main.test.js

------------|---------|----------|---------|---------|-------------------
File        | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
------------|---------|----------|---------|---------|-------------------
All files   |     100 |       50 |     100 |     100 |
 resta.js   |     100 |       50 |     100 |     100 | 6
 suma.js    |     100 |       50 |     100 |     100 | 5
------------|---------|----------|---------|---------|-------------------

Test Suites: 1 passed, 1 total
Tests:       10 passed, 10 total
```

### Ejemplo 3: Linting
```bash
$ npm run lint

> examen-002@1.0.0 lint
> eslint src Operaciones tests --ext .js

src/js/main.js
   1:10  warning  'calcularSuma' is defined but never used         no-unused-vars
   8:10  warning  'calcularResta' is defined but never used        no-unused-vars
  15:10  warning  'calcularSumaBinaria' is defined but never used  no-unused-vars

✖ 3 problems (0 errors, 3 warnings)
```

### Ejemplo 4: Verificación de Formato
```bash
$ npm run format:check

> examen-002@1.0.0 format:check
> prettier --check "**/*.{html,css,js}" --ignore-path .gitignore

Checking formatting...
All matched files use Prettier code style!
```

### Ejemplo 5: Build de Producción
```bash
$ npm run build

> examen-002@1.0.0 build
> node build.js

Copiando src...
Copiando Operaciones...
  ✓ resta.js
  ✓ suma.js
Copiando index.html...
✓ Build completado exitosamente en el directorio dist/
```

### Ejemplo 6: Pipeline en GitHub Actions ✅
Todos los jobs ejecutándose exitosamente:

```
✅ Lint Code
   └─ eslint src Operaciones tests --ext .js ............ PASSED (14s)

✅ Check Code Format
   └─ prettier --check "**/*.{html,css,js}" ............ PASSED (9s)

✅ Run Tests
   └─ jest --coverage ................................ PASSED (18s)
      Coverage: 100% statements, 100% functions, 100% lines
      Artifacts: coverage-report/

✅ Build Project
   └─ node build.js .................................. PASSED (12s)
      Artifacts: build-dist/
```

---

**Autor:** Fernando Huilca y Mateo Simbaña
**Fecha:** Enero 2026  
**Curso:** Construcción y Evolución de Software
