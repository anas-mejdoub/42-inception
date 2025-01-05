# Inception: System Administration with Docker

## Overview

This project explores and enhances your understanding of **system administration** using Docker. The goal is to virtualize various services by creating custom Docker images and orchestrating them with `docker-compose`.

## Features

### Mandatory Part
- Set up a Docker-based infrastructure with the following services:
  - **NGINX** configured with **TLSv1.2/1.3**.
  - **WordPress** with **php-fpm** (no NGINX).
  - **MariaDB** database service.
- Implement **Docker Volumes**:
  - One volume for WordPress database storage.
  - Another for WordPress website files.
- Establish a secure **Docker network** for inter-service communication.
- Ensure services restart automatically upon failure.
- Secure entry into the infrastructure via **NGINX** on **port 443**.
- Configure domain name `<your_login>.42.fr` to point to the local IP.

### Bonus Part
- Extend functionality by implementing:
  - **Redis Cache** for WordPress to improve performance.
  - **FTP Server** for managing WordPress files.
  - A **Static Website** (non-PHP) to showcase additional skills.
  - **Adminer** for MariaDB database management.
  - An extra service of your choice, demonstrating creativity and utility.

## Project Structure

```plaintext
.
├── Makefile
├── secrets/
│   ├── credentials.txt
│   ├── db_password.txt
│   └── db_root_password.txt
├── srcs/
│   ├── docker-compose.yml
│   ├── .env
│   └── requirements/
│       ├── mariadb/
│       │   ├── Dockerfile
│       │   └── conf/
│       ├── nginx/
│       │   ├── Dockerfile
│       │   └── conf/
│       ├── wordpress/
│       │   ├── Dockerfile
│       │   └── conf/
│       └── bonus/
