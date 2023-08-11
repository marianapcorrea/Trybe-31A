# Busca uma imagem já existente para ser usada como base
FROM httpd:2.4.54

#Copia um arquivo local e a coloca dentro da imagem, no caminho especificado
COPY index.html /usr/local/apache2/htdocs/

#COPY pode ser substituido por ADD. O ADD irá fazer download do conteúdo de uma url <src> na pasta de destino, e irá descompactar automaticamente todos os formatos de arquivos compactados reconhecidos.

#Indica o número da porta em que a imagem poderá receber conexões.
#É opcional quando se tem apenas uma porta em execução na máquina.
EXPOSE 80

#Define qual comando deve ser usado ao iniciar a imagem como container
#Aceita lista de parâmetros.
# CMD ["echo", "Eu sou uma pessoa estudante da Trybe!"]
CMD ["httpd-foreground"]