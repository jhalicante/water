-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 30, 2018 at 11:38 PM
-- Server version: 5.6.38
-- PHP Version: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `water_station`
--

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `transaction_id` varchar(55) NOT NULL,
  `customer_id` varchar(55) NOT NULL,
  `delivery_id` varchar(55) NOT NULL,
  `quantity` int(3) NOT NULL,
  `description` text NOT NULL,
  `status` enum('waiting','delivering','recieved') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`ID`, `transaction_id`, `customer_id`, `delivery_id`, `quantity`, `description`, `status`) VALUES
(1, 'alskdjalksdjaskljdklasjd', 'asdadkasjd', 'asdasda', 3, '1 Small gallon with 2 large', 'delivering'),
(2, 'asdasdasd', 'asdadkasjd', 'asdasda', 2, '2 gallon', 'waiting'),
(20, 'Sat Dec 01 2018 06:12:52 GMT+0800 (PST)', 'asdadkasjd', 'asdasda', 1, '1 Gallon', 'delivering');

-- --------------------------------------------------------

--
-- Table structure for table `user_accounts`
--

CREATE TABLE `user_accounts` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `uid` varchar(55) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(55) NOT NULL,
  `fname` varchar(30) NOT NULL,
  `lname` varchar(30) NOT NULL,
  `user_type` enum('customer','delivery') NOT NULL,
  `latitude` varchar(55) NOT NULL,
  `longitude` varchar(55) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user_accounts`
--

INSERT INTO `user_accounts` (`ID`, `uid`, `username`, `password`, `fname`, `lname`, `user_type`, `latitude`, `longitude`) VALUES
(1, 'asdadkasjd', 'mark', 'mark', 'mark', 'john', 'customer', '14.64191', '121.034411'),
(2, 'asdasda', 'jad', 'jad', 'Snowflash', 'Water Station', 'delivery', '14.63913', '121.03558'),
(3, 'sdfdsfsdfsdf', 'juan', 'juan', 'Lakas Virgilio', 'Water Station', 'delivery', '14.64191', '121.034411'),
(4, 'gfhgf', 'lanaval', 'lanaval', 'Lanaval', 'Water Station', 'delivery', '14.64191', '121.034411'),
(5, 'gfhgfmhello', 'mhello', 'mhello', 'Mhello Pure', 'Water Station', 'delivery', '14.64191', '121.034411');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- Indexes for table `user_accounts`
--
ALTER TABLE `user_accounts`
  ADD UNIQUE KEY `ID` (`ID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `user_accounts`
--
ALTER TABLE `user_accounts`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
