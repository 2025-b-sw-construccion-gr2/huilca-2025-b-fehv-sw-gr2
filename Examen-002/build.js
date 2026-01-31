const fs = require('fs');
const path = require('path');

// Crear directorio dist si no existe
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
}

// Función para copiar directorios recursivamente
function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

// Copiar src
const srcDir = path.join(__dirname, 'src');
const destSrcDir = path.join(distDir, 'src');
console.log('Copiando src...');
copyDir(srcDir, destSrcDir);

// Copiar Operaciones
const operacionesDir = path.join(__dirname, 'Operaciones');
const destOperacionesDir = path.join(distDir, 'Operaciones');
console.log('Copiando Operaciones...');
copyDir(operacionesDir, destOperacionesDir);

// Copiar index.html si existe
const indexPath = path.join(__dirname, 'src', 'index.html');
if (fs.existsSync(indexPath)) {
    const destIndexPath = path.join(distDir, 'index.html');
    console.log('Copiando index.html...');
    fs.copyFileSync(indexPath, destIndexPath);
}

console.log('✓ Build completado exitosamente en el directorio dist/');
