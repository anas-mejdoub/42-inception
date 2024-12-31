NAME=inception
dirs= ~/data/mariadb ~/data/wp
all: $(NAME)

$(NAME):
	@sudo mkdir -p $(dirs)
	@sudo chown -R www-data:www-data ~/data/wp
	docker-compose -f ./srcs/docker-compose.yml up -d --build

clean:
	docker-compose -f ./srcs/docker-compose.yml down

fclean: clean
	sudo rm -rf $(dirs)
	docker system prune -af



re: clean all
