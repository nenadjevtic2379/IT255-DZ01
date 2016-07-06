-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jul 06, 2016 at 11:46 PM
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
-- Table structure for table `korisnici`
--

CREATE TABLE IF NOT EXISTS `korisnici` (
  `id` int(11) NOT NULL,
  `firstname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `lastname` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `username` varchar(50) COLLATE utf8_bin DEFAULT NULL,
  `password` varchar(128) COLLATE utf8_bin DEFAULT NULL,
  `token` varchar(128) COLLATE utf8_bin DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Dumping data for table `korisnici`
--

INSERT INTO `korisnici` (`id`, `firstname`, `lastname`, `username`, `password`, `token`) VALUES
(30, 'Nenad', 'Jevtic', 'sone', '202cb962ac59075b964b07152d234b70', NULL),
(31, 'nenad', 'jevtic', '@@@', '202cb962ac59075b964b07152d234b70', NULL),
(32, 'nenad', 'jevtic', 'nenad', '827ccb0eea8a706c4c34a16891f84e7b', 'ca3ba2c3ea4951fed006cd0692715a9acd47a6b6'),
(33, 'nenad', 'nenad', 'sonee', 'e10adc3949ba59abbe56e057f20f883e', '8a0442b6709b645631f6c39809dbbc8a1fe6afc0'),
(34, 'sone', 'sone', 'sonesone', 'e10adc3949ba59abbe56e057f20f883e', '87df445a8757761019f127a378fc1e8027cddeda'),
(35, 'ddd', 'ddd', 'soneee', '4b80c0384bc99e7abc867a8f68bcde8a', 'c1bc533da6ec7ad3d0b18a7cb7036242e1580a6e'),
(47, 'asdas', 'adasd', 'qwerty', 'd8578edf8458ce06fbc5bb76a58c5ca4', '6369bae76bd8fa8e217f236189434df371666ee6');

-- --------------------------------------------------------

--
-- Table structure for table `sobe`
--

CREATE TABLE IF NOT EXISTS `sobe` (
  `id` int(11) NOT NULL,
  `tipSobe` varchar(50) CHARACTER SET utf8 COLLATE utf8_bin DEFAULT NULL,
  `kvadrata` varchar(50) DEFAULT NULL,
  `brojKreveta` varchar(50) DEFAULT NULL,
  `pogledNa` varchar(50) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `sobe`
--

INSERT INTO `sobe` (`id`, `tipSobe`, `kvadrata`, `brojKreveta`, `pogledNa`) VALUES
(18, 'duplexxxx', '3433', '22222', 'aaa'),
(20, 'duplex', '40', '3', 'plazuu');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `korisnici`
--
ALTER TABLE `korisnici`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sobe`
--
ALTER TABLE `sobe`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `korisnici`
--
ALTER TABLE `korisnici`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=48;
--
-- AUTO_INCREMENT for table `sobe`
--
ALTER TABLE `sobe`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
