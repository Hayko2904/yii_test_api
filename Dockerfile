FROM php:8.0-fpm

RUN apt update \
    && apt install -y zlib1g-dev g++ git libicu-dev zip libzip-dev zip \
    && curl -sL https://deb.nodesource.com/setup_4.x | bash
    && docker-php-ext-install intl opcache pdo pdo_mysql \
    && pecl install apcu \
    && docker-php-ext-enable apcu \
    && docker-php-ext-configure zip \
    && docker-php-ext-install zip
    && apt-get install nodejs
    && apt-get install npm

WORKDIR /var/www/test_yii

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

