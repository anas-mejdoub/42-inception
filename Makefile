NAME=inception
dirs= ~/data/mariadb ~/data/wp ~/data/phpmyadmin
all: $(NAME)

$(NAME):
	@sudo mkdir -p $(dirs)
	@sudo chown -R www-data:www-data ~/data/wp
	docker-compose -f ./src/docker-compose.yml up -d --build

down:
	docker-compose -f ./src/docker-compose.yml down

fclean: down
	sudo rm -rf dirs
	docker system prune -af



re: down all
