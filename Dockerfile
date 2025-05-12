# Usando uma imagem do Nginx como base
FROM nginx:latest

# Define o diretório de trabalho
WORKDIR /usr/share/nginx/html

# Copia os arquivos do projeto para o contêiner
COPY index.html .
COPY style.css .
COPY script.js .

# Expõe a porta 80 para acessar a aplicação
EXPOSE 80