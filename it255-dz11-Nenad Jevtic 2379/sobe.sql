-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 24, 2016 at 08:27 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `korisnici`
--

-- --------------------------------------------------------

--
-- Table structure for table `sobe`
--

CREATE TABLE IF NOT EXISTS `sobe` (
  `id` int(50) NOT NULL,
  `tipSobe` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `kvadrata` varchar(50) DEFAULT NULL,
  `brojKreveta` varchar(50) DEFAULT NULL,
  `pogledNa` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sobe`
--

INSERT INTO `sobe` (`id`, `tipSobe`, `kvadrata`, `brojKreveta`, `pogledNa`) VALUES
(1, 'duplex', '20', '4', 'more'),
(2, 'apartman', '25', '3', 'more'),
(3, 'apartman', '15', '2', 'grad'),
(4, 'duplex', '40', '5', 'grad'),
(5, 'apartman', '10', '1', 'more');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `sobe`
--
ALTER TABLE `sobe`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `sobe`
--
ALTER TABLE `sobe`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=8;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
