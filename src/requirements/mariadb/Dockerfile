FROM debian:12

RUN apt-get update && apt-get install -y mariadb-server && \
	mkdir /run/mysqld && chmod 777 /run/mysqld && \
	chown mysql:mysql /run/mysqld && \
	apt-get clean && rm -rf /var/lib/apt/lists/*
EXPOSE 3306

COPY ./conf/setup_mariadb.sh /setup_mariadb.sh
RUN sed -i "s|127.0.0.1|0.0.0.0|g" /etc/mysql/mariadb.conf.d/50-server.cnf
CMD ["sh", "setup_mariadb.sh"]
