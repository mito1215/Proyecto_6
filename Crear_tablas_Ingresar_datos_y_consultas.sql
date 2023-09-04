--Crear Tabla de Habilidades
CREATE TABLE skills (
	skill_id SERIAL PRIMARY KEY,
	skill_name VARCHAR(20) NOT NULL,
	skill_description VARCHAR(50) NOT NULL
);

--Ingresar datos a la tabla de Habilidades
INSERT INTO skills VALUES (1,'Comunicación Efectiv','compartir ideas de la forma más comprensible');
INSERT INTO skills  VALUES (2,'Pensamiento Critico','capacidad de evaluar la consistencia de las ideas');
INSERT INTO skills VALUES (3,'Persuación','inducir a alguien con razones a hacer o creer algo');
INSERT INTO skills  VALUES (4,'Resolución de Proble','encuentras una solución para un problema');
INSERT INTO skills  VALUES (5,'Inteligencia Emocion','reconocer sus propias emociones y las de los demás');

--Consultar Registros de la Tabla de Habilidades
SELECT * FROM skills;

--Crear Tabla de Usuarios
CREATE TABLE users (
	user_id SERIAL PRIMARY KEY,
	user_name VARCHAR(40) NOT NULL,
	user_city VARCHAR(20) NOT NULL,
	user_address VARCHAR(30) NOT NULL,
	user_tariff NUMeric(10,2) NOT NULL,
	skill_id INT NOT NULL,
	FOREIGN KEY (skill_id) REFERENCES skills (skill_id)
);

--Ingresar datos a la tabla de Usuarios
INSERT INTO users VALUES (1, 'Pedrito Sola', 'Bogota', 'Calle 154 N° 32-4', 30, 1);
INSERT INTO users VALUES (2, 'Pedrito Sola', 'Bogota', 'Calle 154 N° 32-4', 30, 2);
INSERT INTO users VALUES (3, 'Pedrito Sola', 'Bogota', 'Calle 154 N° 32-4', 30, 3);
INSERT INTO users VALUES (4, 'Pedrito Sola', 'Bogota', 'Calle 154 N° 32-4', 30, 4);
INSERT INTO users VALUES (5, 'Pedrito Sola', 'Bogota', 'Calle 154 N° 32-4', 30, 5);
INSERT INTO users VALUES (6, 'Juan Rojas', 'Medellin', 'Calle 54 N° 12-47', 45, 1);
INSERT INTO users VALUES (7, 'Juan Rojas', 'Medellin', 'Calle 54 N° 12-47', 45, 2);
INSERT INTO users VALUES (8, 'Juan Rojas', 'Medellin', 'Calle 54 N° 12-47', 45, 3);
INSERT INTO users VALUES (9, 'Juan Rojas', 'Medellin', 'Calle 54 N° 12-47', 45, 4);
INSERT INTO users VALUES (10, 'Juan Rojas', 'Medellin', 'Calle 54 N° 12-47', 45, 5);

--Consultar Registros de la Tabla de Usuarios
SELECT * FROM users;

--Crear Tabla de Empresas
CREATE TABLE companies (
	companie_id SERIAL PRIMARY KEY,
	companie_name VARCHAR(40) NOT NULL,
	companie_city VARCHAR(20) NOT NULL,
	companie_address VARCHAR(30) NOT NULL,
	companie_sector VARCHAR(30) NOT NULL
);

--Ingresar datos a la tabla de Empresas
INSERT INTO companies VALUES (1, 'Productos Naturales de la Sabana SAS', 'Cajica', 'KM 5 Via Cajica Tabio', 'Industrial');
INSERT INTO companies VALUES (2, 'Ecopetrol SA', 'Bogota', 'Carrera 13 n.º 36 - 24', 'Petrolero');
INSERT INTO companies VALUES (3, 'Rappi', 'Bogota', 'Cra. 14a #71a-59', 'Domicilios');

--Consultar Registros de la Tabla de Empresas
SELECT * FROM companies;

--Crear Tabla de Estado de Negociacion
CREATE TABLE negotiation_status (
	status_id SERIAL PRIMARY KEY,
	status_name VARCHAR(20) NOT NULL,
	status_description VARCHAR(40) NOT NULL
);

--Ingresar datos a la tabla de Estados de Negociación
INSERT INTO negotiation_status VALUES (1, 'Cotización', 'Busqueda de la mejor oferta');
INSERT INTO negotiation_status VALUES (2, 'Contratación', 'Elección de la mejor opción');
INSERT INTO negotiation_status VALUES (3, 'Ejecución', 'Ejecución del contrato');
INSERT INTO negotiation_status VALUES (4, 'Finalización', 'Finalización del contrato');

--Consultar Registros de la Tabla de Estados de Negociación
SELECT * FROM negotiation_status;

--Crear Tabla de Negociacion
CREATE TABLE negotiation (
	negotiation_id SERIAL PRIMARY KEY,
	status_id INT NOT NULL,
	user_id INT NOT NULL,
	companie_id INT NOT NULL,
	negotiation_hours NUMERIC (5,2),
	FOREIGN KEY (status_id) REFERENCES negotiation_status (status_id),
	FOREIGN KEY (user_id) REFERENCES users (user_id),
	FOREIGN KEY (companie_id) REFERENCES companies (companie_id)
);

--Ingresar datos a la tabla de Nagociación
INSERT INTO negotiation VALUES (1, 1, 1, 3, 6);

--Consultar Registros de la Tabla de Estados de Negociación
SELECT * FROM negotiation;
