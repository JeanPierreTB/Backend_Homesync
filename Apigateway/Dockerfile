# Usa la imagen base de NGINX
FROM nginx:alpine

# Copia la configuración personalizada de NGINX
COPY nginx.conf /etc/nginx/nginx.conf

# Copia la página de inicio al directorio de NGINX
COPY index.html /usr/share/nginx/html/index.html

# Exponer el puerto 80 para el gateway
EXPOSE 80

# Inicia NGINX
CMD ["nginx", "-g", "daemon off;"]
