-- CREACIÓN DE CATEGORÍAS
SELECT * FROM aphrodite.categoría;
INSERT INTO `Aphrodite`.`categoría` VALUES (1,'piel');
INSERT INTO `Aphrodite`.`categoría` VALUES (2,'cabello');
INSERT INTO `Aphrodite`.`categoría` VALUES (3,'maquillaje');

-- CREACIÓN DE PRODUCTOS
SELECT * FROM aphrodite.producto;
INSERT INTO `Aphrodite`.`producto` (`nombre`, `descripción`, `precio`, `categoría_id`) 
VALUES ( 'Cepillo', 'Cepillo de cerdas gruesas fabricado a base de bambú', '$90', 2);
INSERT INTO `Aphrodite`.`producto` (`nombre`, `descripción`, `precio`, `categoría_id`) 
VALUES ( 'Tinte de Betabel', 'Goza de nuestro vibrante tinte aplicándolo en labios y mejillas. Con extracto de betabel para nutrir e hidratar. Dura hasta 24 hrs', '$100', 3);
INSERT INTO `Aphrodite`.`producto` (`nombre`, `descripción`, `precio`, `categoría_id`) 
VALUES ( 'Ácido Hialurónico 2% + B5', 'Proporciona una hidratación voluminosa instantánea para brindar una piel más suave, tersa y de aspecto saludable. Fórmula revitalizante e hidratante con durabilidad de 24 hrs', '$300', 1);
INSERT INTO `Aphrodite`.`producto` (`nombre`, `descripción`, `precio`, `categoría_id`) 
VALUES ( 'Maquillaje con Base de Quinoa', 'Con ingredientes naturales antiinflamatorios, base liviana de suave aplicación. Fórmula para dar una cobertura fina y natural con fijación y acabado mate uniforme', '$190', 3);
INSERT INTO `Aphrodite`.`producto` (`nombre`, `descripción`, `precio`, `categoría_id`) 
VALUES ( 'Kit de Rutina Diaria', 'Kit de tres piezas para rutina diaria de skin care. El limpiador Squalane elimina el maquillaje. Hyaluronic Acid 2% + B5 favorece la hidratación de múltiples capas de la superficie de la piel', '$450', 1);

-- CREACIÓN DE USUARIOS
SELECT * FROM aphrodite.registro_usuario;
INSERT INTO `Aphrodite`.`registro_usuario` (`nombre`, `correo`, `teléfono`) 
VALUES ('Juan Torres', 'juantorres@gmail.com', '5526354789');
INSERT INTO `Aphrodite`.`registro_usuario` (`nombre`, `correo`, `teléfono`) 
VALUES ('María Juanita', 'ma.jua@gmail.com', '5567895314');
INSERT INTO `Aphrodite`.`registro_usuario` (`nombre`, `correo`, `teléfono`) 
VALUES ('Lupita Mendoza', 'lupis@gmail.com', '5585631784');
INSERT INTO `Aphrodite`.`registro_usuario` (`nombre`, `correo`, `teléfono`) 
VALUES ('Rodrigo Duran', 'rodrigod@gmail.com', '5578465329');
INSERT INTO `Aphrodite`.`registro_usuario` (`nombre`, `correo`, `teléfono`) 
VALUES ('Angélica Hernández', 'angie@gmail.com', '5598764532');

-- CREACIÓN DE PEDIDOS
SELECT * FROM aphrodite.pedidos;
INSERT INTO `Aphrodite`.`pedidos` (`cantidad_productos`, `dirección`, `idusuario`, `idproducto`) 
VALUES ('3', 'calle 4 no.33 col.Carlos Hank González', '1', '5');
INSERT INTO `Aphrodite`.`pedidos` (`cantidad_productos`, `dirección`, `idusuario`, `idproducto`) 
VALUES ('2', 'Av. Dr. Río de la Loza 148, Doctores, Cuauhtémoc, 06720 Ciudad de México, CDMX', '3', '2');
INSERT INTO `Aphrodite`.`pedidos` (`cantidad_productos`, `dirección`, `idusuario`, `idproducto`) 
VALUES ('4', 'Museo 150, San Pablo Tepetlapa, Coyoacán, 04620 Ciudad de México, CDMX', '5', '3');
INSERT INTO `Aphrodite`.`pedidos` (`cantidad_productos`, `dirección`, `idusuario`, `idproducto`) 
VALUES ('1', 'Pedregal de Carrasco Secc 5ta, Coyoacán, 04700 Mexico City', '1', '2');
INSERT INTO `Aphrodite`.`pedidos` (`cantidad_productos`, `dirección`, `idusuario`, `idproducto`) 
VALUES ('2', 'Av. Coyoacán 518, Col del Valle Centro, Benito Juárez, 03100 Ciudad de México, CDMX', '2', '4');
