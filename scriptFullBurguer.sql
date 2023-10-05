CREATE TABLE `Facturas`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `fecha` DATE NOT NULL,
    `subtotal` DECIMAL(8, 2) NOT NULL,
    `discount` INT NOT NULL,
    `total` DECIMAL(8, 2) NOT NULL,
    `id_usuario` BIGINT NOT NULL
);
CREATE TABLE `Usuarios`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `birthday` DATE NOT NULL,
    `address` TEXT NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `category` TEXT NOT NULL,
    `avatar` VARCHAR(255) NOT NULL,
    `id_roles` BIGINT NOT NULL
);
CREATE TABLE `productos_factura`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `id_productos` BIGINT NOT NULL,
    `id_factura` BIGINT NOT NULL,
    `precio` DECIMAL(8, 2) NOT NULL,
    `cantidad` INT NOT NULL
);
CREATE TABLE `Productos`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `price` DECIMAL(8, 2) NOT NULL,
    `discount` INT NOT NULL,
    `description` TEXT NOT NULL,
    `borrado` TINYINT(1) NOT NULL,
    `images` VARCHAR(255) NOT NULL,
    `id_categoria` BIGINT NOT NULL
);
CREATE TABLE `Tipo`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255) NOT NULL
);
CREATE TABLE `Roles`(
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `nombre` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `productos_factura` ADD CONSTRAINT `productos_factura_id_productos_foreign` FOREIGN KEY(`id_productos`) REFERENCES `Productos`(`id`);
ALTER TABLE
    `Usuarios` ADD CONSTRAINT `usuarios_id_roles_foreign` FOREIGN KEY(`id_roles`) REFERENCES `Roles`(`id`);
ALTER TABLE
    `Productos` ADD CONSTRAINT `productos_id_categoria_foreign` FOREIGN KEY(`id_categoria`) REFERENCES `Tipo`(`id`);
ALTER TABLE
    `productos_factura` ADD CONSTRAINT `productos_factura_id_factura_foreign` FOREIGN KEY(`id_factura`) REFERENCES `Facturas`(`id`);
ALTER TABLE
    `Facturas` ADD CONSTRAINT `facturas_id_usuario_foreign` FOREIGN KEY(`id_usuario`) REFERENCES `Usuarios`(`id`);