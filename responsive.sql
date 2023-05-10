-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 27-Abr-2023 às 14:51
-- Versão do servidor: 10.1.38-MariaDB
-- versão do PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `responsive`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `carros`
--

CREATE TABLE `carros` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `marca` varchar(50) COLLATE utf8_unicode_ci NOT NULL,
  `modelo` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cor` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `km` varchar(25) COLLATE utf8_unicode_ci NOT NULL,
  `ano` varchar(4) COLLATE utf8_unicode_ci NOT NULL,
  `preco` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `caminho` varchar(255) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `carros`
--

INSERT INTO `carros` (`id`, `nome`, `marca`, `modelo`, `cor`, `km`, `ano`, `preco`, `caminho`) VALUES
(1, 'Skyline R34 GTR Nismo', 'Nissan', 'R34 GTR', 'Prata', '50.000', '2004', '1.000.000,00', 'img/carros/skylineR34.png'),
(2, 'Acura Integra Type R', 'Acura', 'Integra Type R', 'Branco', '50.000', '2001', '250.000,00', 'img/carros/integraTypeR.png'),
(3, 'RX7', 'Mazda', 'FC', 'Branco', '90.000', '1986', '400.000,00', 'img/carros/rx7fc.png'),
(4, 'Silvia S13', 'Nissan', 'S13', 'Dourado', '100.000', '1989', '200.000,00', 'img/carros/silviaS13.png'),
(5, 'Skyline GTR R32', 'Nissan', 'GTR R32', 'Cinza', '100.000', '1994', '800.000,00', 'img/carros/skylineR32.png');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `senha` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `cep` varchar(8) COLLATE utf8_unicode_ci NOT NULL,
  `telefone` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `admin` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`, `cep`, `telefone`, `admin`) VALUES
(0, 'admin', 'admin@admin.com', '$2y$10$kAvQBFR.dIg/ZoexURfWM.uHnEvXDFPjv9RSritwbXwVep.fdHSnK', '17160025', '14998849268', 1),
(4, 'Afonso', 'afonso@email.com', '$2y$10$qDKcdES5ehUw0NfcNa/hd.A1oSv91n4E61WEV4EHxYnNDtRoz2VnK', '17160100', '14998149365', 0),
(5, 'lala', 'lalao@email.com', '$2y$10$ey8m//CBT1pQZw8svnipfOYkrpOP313yNmqRPPayutfGR0s99UZ0K', '17160035', '14998149365', 0),
(11, 'Afastado', 'afastado@gmail.com', '$2y$10$8yMsaLeDTM9Emc93lJf8BekxNRXJXGg..mrxcspRU21LmL51pclky', '17160025', '14998849268', 0),
(12, 'abergado', 'albergado@.com.vr', '$2y$10$VthoiyvK9B9h4wWTl6SQ7OLo/C3EKrVr1tptVoBNQh5piQm1Cb4JW', '17160082', '14998849268', 0),
(15, 'fast', 'fast@furiosos.fg', '$2y$10$zC8babxWZko5/YmOhhSs8epTneo.ZPhnSmrxSpbs2kWveZ.AjEjBO', '17160300', '14998849268', 0),
(16, 'tokyo', 'tokyo@lapapel.com', '$2y$10$BSZpyaoApS0GUwDkmFEWie8aLZbFugltt8jfYj4o/etdzZdNghY22', '17160100', '17994486235', 0),
(17, 'teste teste', 'teste@teste.com', '$2y$10$fyMbYgva7JmvDjoOaMbRa.SskFCAgCoppNeeDKDCJUzKe1GZHc7lu', '17160025', '14998849268', 0),
(19, 'Vinicius Luciano ', 'vinicius@teste.com', '$2y$10$Sh5aE.0yaRaq41gJL1Ds3eKKU3B0ZkvewVt/fdMqdA/GgJb39yEK.', '17160025', '14998849268', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `carros`
--
ALTER TABLE `carros`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `carros`
--
ALTER TABLE `carros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
