-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 02-02-2024 a las 08:33:27
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `dbnotes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Categories`
--

CREATE TABLE `Categories` (
  `idCategorie` int(200) NOT NULL,
  `nameCategorie` varchar(200) NOT NULL,
  `statusCategorie` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Notes`
--

CREATE TABLE `Notes` (
  `idNote` int(200) NOT NULL,
  `titleNote` varchar(200) NOT NULL,
  `contentNote` varchar(200) NOT NULL,
  `archiveNote` tinyint(1) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `Notes`
--

INSERT INTO `Notes` (`idNote`, `titleNote`, `contentNote`, `archiveNote`, `createdAt`, `updatedAt`) VALUES
(28, 'Text1', '\"Los amigos son la familia que elegimos\". Jennifer Aniston', 0, '2024-02-02 08:18:41', '2024-02-02 08:18:41'),
(29, 'text 2', '\"Mi propósito: levantar tu espíritu y motivarte\". Mavis Staples', 0, '2024-02-02 08:18:58', '2024-02-02 08:18:58'),
(30, 'text 3', '\"La amabilidad es una cosa que no puedes regalar. Siempre vuelve\". George Skolsky', 0, '2024-02-02 08:19:10', '2024-02-02 08:19:10'),
(31, 'text 4', '\"Las grandes cosas suceden a aquellos que no dejan de creer, intentar, aprender y ser agradecidos\". Roy T. Bennett', 0, '2024-02-02 08:19:25', '2024-02-02 08:19:25'),
(32, 'text 5', '\"Intenta ser un arco iris en la nube de otra persona\". Maya Angelou', 0, '2024-02-02 08:19:37', '2024-02-02 08:19:37'),
(33, 'text 7', '\"A veces, cuando las cosas se están desmoronando, en realidad pueden estar cayendo en su lugar\". Desconocido', 0, '2024-02-02 08:19:48', '2024-02-02 08:19:48'),
(34, 'text 8', '\"Lucha por las cosas que te importan, pero hazlo de un modo que lleve a otros a unirse a ti\". Ruth Bader Ginsburg', 0, '2024-02-02 08:20:00', '2024-02-02 08:20:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `Users`
--

CREATE TABLE `Users` (
  `idUser` int(200) NOT NULL,
  `nameUser` varchar(200) NOT NULL,
  `passwordUser` varchar(200) NOT NULL,
  `emailUser` varchar(200) NOT NULL,
  `statusUser` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `Categories`
--
ALTER TABLE `Categories`
  ADD PRIMARY KEY (`idCategorie`);

--
-- Indices de la tabla `Notes`
--
ALTER TABLE `Notes`
  ADD PRIMARY KEY (`idNote`);

--
-- Indices de la tabla `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`idUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `Categories`
--
ALTER TABLE `Categories`
  MODIFY `idCategorie` int(200) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `Notes`
--
ALTER TABLE `Notes`
  MODIFY `idNote` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT de la tabla `Users`
--
ALTER TABLE `Users`
  MODIFY `idUser` int(200) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
