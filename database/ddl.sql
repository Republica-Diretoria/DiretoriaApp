CREATE DATABASE IF NOT EXISTS diretoria
CHARACTER SET utf8mb4
COLLATE utf8mb4_unicode_ci;

USE diretoria;

CREATE TABLE IF NOT EXISTS turno (
	horario VARCHAR(10) PRIMARY KEY,
        esta_ativo BOOLEAN NOT NULL # == TINYINT(1)
);

INSERT INTO turno (horario, esta_ativo) VALUES
        ('noturno', 1),
        ('integral', 1),
        ('vespertino', 0),
        ('matutino', 0);

CREATE TABLE IF NOT EXISTS cursos (
	id VARCHAR(10) PRIMARY KEY,
	nome VARCHAR(40) NOT NULL,
	turno_id VARCHAR(10) REFERENCES turno(horario)
);

INSERT INTO cursos (id, nome, turno_id) VALUES
('adm-so', 'bacharelado em administração', 'integral'),
('cc-so ', 'bacharelado em ciência da computação', 'integral'),
('cb-so ', 'bacharelado em biologia', 'integral'),
('cbln-so', 'licenciatura em ciências biológicas', 'integral'),
('cbl-so', 'licenciatura em ciências biológicas', 'integral'),
('cec-so', 'bacharelado em ciências econômicas', 'integral'),
('ep-so ', 'bacharelado em engenharia da produção', 'integral'),
('efl-so', 'bacharelado em engenharia florestal', 'integral'),
('fl-so ', 'licenciatura em fisica', 'integral'),
('gol-so', 'licenciatura em geografia', 'integral'),
('ml-so ', 'licenciatura em matemática', 'integral'),
('pedl-so', 'licenciatura em pedagogia', 'integral'),
('ql-so ', 'licenciatura em química', 'integral'),
('tur-so', 'bacharelado em turismo', 'integral');

CREATE TABLE IF NOT EXISTS comodos (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        comodo VARCHAR(30) UNIQUE NOT NULL
);  

INSERT INTO comodos(comodo) VALUES
        ('cozinha'),
        ('hall'),
        ('sala de cima'),
        ('quartão'),
        ('varanda do quartão'),
        ('garagem interna'),
        ('garagem externa'),
        ('quintal'),
        ('lavabo'),
        ('corredor'),
        ('suíte master'),
        ('banheiro suíte master'),
        ('closet suíte master'),
        ('suíte bob marley'),
        ('banheiro bob marley'),
        ('suíte placa diretoria'),
        ('banheiro placa diretoria'),
        ('suíte chiqueirinho'),
        ('banheiro suíte chiqueirinho'),
        ('quarto divisória'),
        ('varanda da cozinha'),
        ('quarto da cozinha'),
        ('varanda do quarto da cozinha'),
        ('despensa'),
        ('escada do hall'),
        ('quartinho da escada'),
        ('escada do quintal'),
        ('sala principal'),
        ('quarto cativeiro'),
        ('suíte safadiana'),
        ('banheiro da suíte safadiana'),
        ('varal de baixo'),
        ('varal de cima'),
        ('churrasqueira'),
        ('piscina'),
        ('copa'),
        ('pomar'),
        ('quarto do pomar');

CREATE TABLE IF NOT EXISTS areas_administrativas (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) UNIQUE NOT NULL,
        descricao VARCHAR(200)
);

INSERT INTO areas_administrativas (nome, descricao) VALUES
        ('admin', ''),
        ('geral', ''),
        ('marketing', ''),
        ('produtos', ''),
        ('venda salgados', ''),
        ('administrador salgados', ''),
        ('manutenção', '');

CREATE TABLE IF NOT EXISTS usuarios (
        id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        apelido VARCHAR(20) UNIQUE NOT NULL,
        ano_ingresso INT NOT NULL,
        curso_id VARCHAR(10) NOT NULL REFERENCES cursos(id),
        comodo_id BIGINT UNSIGNED NOT NULL REFERENCES comodos(id),
        senha_salted_hashed VARCHAR(255) NOT NULL,
        data_criacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        data_ultima_modificacao TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
INSERT INTO usuarios (email, apelido, ano_ingresso, curso_id, comodo_id, senha_salted_hashed) VALUES
        ('', 'gru', 2023, 'cc-so', 22, '2345678');

CREATE TABLE IF NOT EXISTS usuario_areas (

            usuario_id BIGINT UNSIGNED REFERENCES usuarios(id),
         area_adm_id BIGINT UNSIGNED REFERENCES areas_administrativas(id)
);

CREATE TABLE IF NOT EXISTS venda_salgado (
         id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
         data DATE UNIQUE NOT NULL,
         valor_investido DECIMAL(10,2) NOT NULL,
         valor_faturado DECIMAL(10,2) NOT NULL,
         salgados_vendidos INT NOT NULL,
         salgados_comprados INT NOT NULL,
         observacao VARCHAR(200),
         venda_ocorreu BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS vendedores_salgado (
           venda_salgado_id BIGINT UNSIGNED REFERENCES venda_salgado(id),
           usuario_id BIGINT UNSIGNED REFERENCES usuarios(id)
);

CREATE TABLE IF NOT EXISTS categoria_eventos (
           id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
           nome VARCHAR(40) NOT NULL,
           publico BOOLEAN NOT NULL
);

CREATE TABLE IF NOT EXISTS eventos (
           id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
           data_hora DATETIME NOT NULL,
           titulo VARCHAR(30) NOT NULL,
           id_area BIGINT UNSIGNED REFERENCES areas_administrativas(id),
           descricao VARCHAR(100),
           id_categoria BIGINT UNSIGNED REFERENCES categoria_eventos(id)
);

CREATE TABLE IF NOT EXISTS drop_produtos (
           id DATE PRIMARY KEY,
           titulo VARCHAR(40) NOT NULL,
           valor_frete DECIMAL(10,2) NOT NULL
);

CREATE TABLE IF NOT EXISTS produto (
           id BIGINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
           id_drop DATE REFERENCES drop_produtos(id),
           custo_frete DECIMAL(10,2)

);
