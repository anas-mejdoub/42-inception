FROM debian:12

RUN apt-get update && apt-get install -y mariadb-server && \
	mkdir /run/mysqld && chmod 777 /run/mysqld && \
	chown mysql:mysql /run/mysqld && \
	apt-get clean && rm -rf /var/lib/apt/lists/*

EXPOSE 3306

COPY ./conf/setup_mariadb.sh /setup_mariadb.sh

CMD ["sh", "setup_mariadb.sh"]
