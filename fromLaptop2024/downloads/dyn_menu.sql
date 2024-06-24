-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 10, 2023 at 02:32 PM
-- Server version: 10.3.22-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bajcar_2017`
--

-- --------------------------------------------------------

--
-- Table structure for table `dyn_menu`
--

CREATE TABLE `dyn_menu` (
  `id` int(11) NOT NULL,
  `label` varchar(50) NOT NULL DEFAULT '',
  `link_url` varchar(100) NOT NULL DEFAULT '#',
  `parent_id` int(11) NOT NULL DEFAULT 0
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `dyn_menu`
--

INSERT INTO `dyn_menu` (`id`, `label`, `link_url`, `parent_id`) VALUES
(1, 'Web Development', '', 0),
(2, 'Content Creation', '', 0),
(3, 'PHP Jobs', '/php_web_development_jobs.php', 1),
(4, 'OSCommerce projects', '/php_web_development_jobs.php', 1),
(5, 'Technical Writing Jobs', '/php_web_development_jobs.php', 2),
(6, 'Forum Posting', '/php_web_development_jobs.php', 2),
(7, 'Design and Artwork', '', 0),
(8, 'Blog Design Projects', '/php_web_development_jobs.php', 7),
(9, 'Freelance Website Design', '/php_web_development_jobs.php', 7),
(10, 'Sales and Marketing', '', 0),
(11, 'Internet Marketing Consulting', '/php_web_development_jobs.php', 10),
(12, 'Leads Generation Services', '/php_web_development_jobs.php', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dyn_menu`
--
ALTER TABLE `dyn_menu`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `dyn_menu`
--
ALTER TABLE `dyn_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
