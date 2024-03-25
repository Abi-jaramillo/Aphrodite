CREATE DATABASE aphroditedb;
-- CREACIÓN DE CATEGORÍAS
SELECT * FROM aphroditedb.categorias;
INSERT INTO aphroditedb.categorias VALUES (1,'piel');
INSERT INTO aphroditedb.categorias VALUES (2,'cabello');
INSERT INTO aphroditedb.categorias VALUES (3,'maquillaje');

-- CREACIÓN DE PRODUCTOS
SELECT * FROM aphroditedb.productos;
-- INSERT INTO aphroditedb.productos (url_imagen, categoria, descripcion, nombre, precio)
-- VALUES ('cepillo.jpg', 'cabello', 'Cepillo de cerdas gruesas fabricado a base de bambú', 'cepillo', 90);
INSERT INTO aphroditedb.productos (url_imagen, categoria, descripcion, nombre, precio)  
VALUES ('tinte.jpg', 'maquillaje', 'Goza de nuestro vibrante tinte aplicándolo en labios y mejillas. Con extracto de betabel para nutrir e hidratar. Dura hasta 24 hrs',  'Tinte de Betabel', 100);
INSERT INTO aphroditedb.productos (url_imagen, categoria, descripcion, nombre, precio)
VALUES ('acido.jpg', 'piel', 'Proporciona una hidratación voluminosa instantánea para brindar una piel más suave, tersa y de aspecto saludable. Fórmula revitalizante e hidratante con durabilidad de 24 hrs', 'Ácido Hialurónico 2% + B5', 300);
INSERT INTO aphroditedb.productos (url_imagen, categoria, descripcion, nombre, precio)
VALUES ('quinoa.jpg', 'maquillaje', 'Con ingredientes naturales antiinflamatorios, base liviana de suave aplicación. Fórmula para dar una cobertura fina y natural con fijación y acabado mate uniforme', 'Maquillaje con Base de Quinoa', 190);
INSERT INTO aphroditedb.productos (url_imagen, categoria, descripcion, nombre, precio) 
VALUES ('kit.jpg', 'piel', 'Kit de tres piezas para rutina diaria de skin care. El limpiador Squalane elimina el maquillaje. Hyaluronic Acid 2% + B5 favorece la hidratación de múltiples capas de la superficie de la piel', 'Kit de Rutina Diaria', 450);

-- CREACIÓN DE USUARIOS
SELECT * FROM aphroditedb.usuarios;
INSERT INTO aphroditedb.usuarios (correo, nombre, `password`, telefono) 
VALUES ('juantorres@gmail.com', 'Juan Torres','Pa$$w0rd' , '5526354789');
INSERT INTO aphroditedb.usuarios (correo, nombre, `password`, telefono) 
VALUES ('ma.jua@gmail.com', 'María Juanita', 'Pa$$w1rd', '5567895314');
INSERT INTO aphroditedb.usuarios (correo, nombre, `password`, telefono)
VALUES ('lupis@gmail.com', 'Lupita Mendoza', 'Pa$$w2rd', '5585631784');
INSERT INTO aphroditedb.usuarios (correo, nombre, `password`, telefono) 
VALUES ('rodrigod@gmail.com', 'Rodrigo Duran', 'Pa$$w3rd', '5578465329');
INSERT INTO aphroditedb.usuarios (correo, nombre, `password`, telefono)
VALUES ('angie@gmail.com', 'Angélica Hernández', 'Pa$$w4rd', '5598764532');

-- Creación de pedidos
SELECT * FROM aphroditedb.pedidos;
INSERT INTO aphroditedb.pedidos (cantidad_productos, direccion, id_productos)
VALUES (3, 'calle 4 no.33 col.Carlos Hank González' , '2');
INSERT INTO aphroditedb.pedidos (cantidad_productos, direccion, id_productos)
VALUES (1, 'Av. Dr. Río de la Loza 148, Doctores, Cuauhtémoc, 06720 Ciudad de México, CDMX' , '1');
INSERT INTO aphroditedb.pedidos (cantidad_productos, direccion, id_productos)
VALUES (2, 'Pedregal de Carrasco Secc 5ta, Coyoacán, 04700 Mexico City' , '3');
INSERT INTO aphroditedb.pedidos (cantidad_productos, direccion, id_productos)
VALUES (1, 'Museo 150, San Pablo Tepetlapa, Coyoacán, 04620 Ciudad de México, CDMX' , '5');
INSERT INTO aphroditedb.pedidos (cantidad_productos, direccion, id_productos)
VALUES (3, 'Av. Coyoacán 518, Col del Valle Centro, Benito Juárez, 03100 Ciudad de México, CDMX' , '4');