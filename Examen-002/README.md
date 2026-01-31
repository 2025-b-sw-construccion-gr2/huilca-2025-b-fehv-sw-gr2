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

### Instalación
1. **Clonar el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Examen-002
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

### Ejecución del Proyecto
1. **Abrir la aplicación:**
   - Abre el archivo `src/index.html` en tu navegador
   - O usa un servidor local como Live Server en VS Code

2. **Ejecutar pruebas:**
   ```bash
   npm test
   ```

3. **Ejecutar pruebas con cobertura:**
   ```bash
   npm run test:coverage
   ```

4. **Verificar linting:**
   ```bash
   npm run lint
   ```

5. **Verificar formato de código:**
   ```bash
   npm run format:check
   ```

6. **Formatear código automáticamente:**
   ```bash
   npm run format:write
   ```

7. **Generar build:**
   ```bash
   npm run build
   ```
   El build se generará en la carpeta `dist/`

## 🔄 Pipeline de CI/CD

### ¿Cómo Funciona el Pipeline?

El pipeline se ejecuta automáticamente en GitHub Actions cuando:
- Se hace push a las ramas `main`, `develop`, o ramas que empiecen con `feature/`
- Se abre un Pull Request hacia `main` o `develop`

### Etapas del Pipeline

El pipeline se ejecuta en **4 jobs** en paralelo (los primeros 3) y uno final:

#### 1. **Lint (Verificación de Código)** 🔍
- **Objetivo:** Analizar el código en busca de errores de sintaxis y malas prácticas
- **Herramienta:** ESLint
- **Qué valida:**
  - Uso correcto de variables
  - Sintaxis de JavaScript
  - Convenciones de código
- **Comando:** `npm run lint`

#### 2. **Format Check (Verificación de Formato)** 🎨
- **Objetivo:** Verificar que el código siga un estilo consistente
- **Herramienta:** Prettier
- **Qué valida:**
  - Indentación correcta
  - Uso de comillas
  - Espaciado
  - Formato de HTML, CSS y JS
- **Comando:** `npm run format:check`

#### 3. **Test (Pruebas Unitarias)** 🧪
- **Objetivo:** Ejecutar todas las pruebas unitarias y generar reporte de cobertura
- **Herramienta:** Jest
- **Qué valida:**
  - Funcionamiento correcto de `sumarNumeros()`
  - Funcionamiento correcto de `restarNumeros()`
  - Casos edge: números negativos, ceros, decimales
- **Comando:** `npm test -- --coverage`
- **Artefactos:** Sube reporte de cobertura que se puede descargar

#### 4. **Build (Construcción del Proyecto)** 🏗️
- **Objetivo:** Compilar/generar la versión de producción
- **Dependencias:** Solo se ejecuta si Lint, Format y Test pasan exitosamente
- **Qué hace:**
  - Crea carpeta `dist/`
  - Copia todos los archivos necesarios
  - Prepara el proyecto para deployment
- **Comando:** `npm run build`
- **Artefactos:** Sube el build generado que se puede descargar

### Orden de Ejecución
```
┌──────────┐     ┌──────────┐     ┌──────────┐
│   Lint   │     │  Format  │     │   Test   │
│    🔍    │     │    🎨    │     │    🧪    │
└────┬─────┘     └────┬─────┘     └────┬─────┘
     │                │                │
     └────────────────┴────────────────┘
                      │
                      ▼
               ┌──────────┐
               │  Build   │
               │    🏗️    │
               └──────────┘
```

### Ver Resultados del Pipeline
1. Ve a la pestaña **Actions** en GitHub
2. Selecciona el workflow run más reciente
3. Revisa cada job para ver logs detallados
4. Descarga artefactos (coverage report y build) si necesitas

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

## 📸 Capturas de Ejecución

### Pipeline Exitoso
_Captura del pipeline en GitHub Actions mostrando todos los jobs en verde._

### Cobertura de Tests
_Captura del reporte de cobertura de Jest._

### Build Generado
_Captura de la carpeta dist/ con los archivos compilados._

---

**Autor:** Fernando Huilca  
**Fecha:** Enero 2026  
**Curso:** Construcción y Evolución de Software
