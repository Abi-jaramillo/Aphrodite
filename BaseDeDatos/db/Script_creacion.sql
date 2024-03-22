-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Aphrodite
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Aphrodite
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Aphrodite` DEFAULT CHARACTER SET utf8 ;
USE `Aphrodite` ;

-- -----------------------------------------------------
-- Table `Aphrodite`.`registro_usuario`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aphrodite`.`registro_usuario` (
  `idusuario` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(45) NOT NULL,
  `teléfono` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`idusuario`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aphrodite`.`categoría`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aphrodite`.`categoría` (
  `id` INT NOT NULL,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `no_categoría_UNIQUE` (`id` ASC) VISIBLE,
  UNIQUE INDEX `nombre_UNIQUE` (`nombre` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aphrodite`.`producto`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aphrodite`.`producto` (
  `idproducto` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripción` TEXT NOT NULL,
  `precio` VARCHAR(45) NOT NULL,
  `categoría_id` INT NOT NULL,
  PRIMARY KEY (`idproducto`, `categoría_id`),
  INDEX `fk_producto_categoría1_idx` (`categoría_id` ASC) VISIBLE,
  CONSTRAINT `fk_producto_categoría1`
    FOREIGN KEY (`categoría_id`)
    REFERENCES `Aphrodite`.`categoría` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Aphrodite`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Aphrodite`.`pedidos` (
  `no_pedido` INT NOT NULL AUTO_INCREMENT,
  `cantidad_productos` INT NOT NULL,
  `dirección` MEDIUMTEXT NOT NULL,
  `idusuario` INT NOT NULL,
  `idproducto` INT NOT NULL,
  PRIMARY KEY (`no_pedido`, `idusuario`, `idproducto`),
  INDEX `fk_pedidos_registro_usuarios1_idx` (`idusuario` ASC) VISIBLE,
  INDEX `fk_pedidos_productos1_idx` (`idproducto` ASC) VISIBLE,
  CONSTRAINT `fk_pedidos_registro_usuarios1`
    FOREIGN KEY (`idusuario`)
    REFERENCES `Aphrodite`.`registro_usuario` (`idusuario`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_pedidos_productos1`
    FOREIGN KEY (`idproducto`)
    REFERENCES `Aphrodite`.`producto` (`idproducto`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
