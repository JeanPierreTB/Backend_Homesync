# Usamos una imagen base oficial de Node.js
FROM node:18

# Establecemos el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiamos los archivos de dependencias
COPY package*.json ./

# Instalamos las dependencias de Node.js
RUN npm install

# Copiamos todo el código fuente al contenedor
COPY . .

# Compilamos el proyecto TypeScript
RUN npm run build

# Exponemos el puerto en el que el servidor escuchará
EXPOSE 3001

# Comando para iniciar el microservicio
CMD ["npm", "start"]
