# Modulos.

# Paso 1
En el archivo tsconfig.json anulamos "module": "commonjs"

# Paso 2 
En el index.html de la caperta dist, agregamos los siguientes script:

  #  <script>var exports = {};</script>
  #  <script type="module" src="./main.js"></script>

# Nota: 
Tener cuidado a la hora de los import en los archivos que estan en distribución, 
porque no vienen con el .js al final y eso genera errores. 
Esto es producto de que en el archivo ts no fueron importados con esta extensión.
.js en vez de .ts

# Para la ejecución npx tsc
