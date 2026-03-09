-- MySQL dump 10.13  Distrib 8.0.44, for Win64 (x86_64)
--
-- Host: localhost    Database: smart_grocery_db
-- ------------------------------------------------------
-- Server version	8.0.44

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Vegetables'),(2,'Fruits'),(3,'Dairy');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `image_url` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `category_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `category_id` int DEFAULT NULL,
  `price` double DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `image_url` text,
  PRIMARY KEY (`id`),
  KEY `category_id` (`category_id`),
  CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Onion',1,40,NULL,'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=400'),(2,'Tomato',1,60,NULL,'https://images.unsplash.com/photo-1590779033100-9f60705a2f3b?w=400'),(3,'Potato',1,30,NULL,'https://images.unsplash.com/photo-1518977676601-b53f02bad675?w=400'),(4,'Carrot',1,50,NULL,'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=400'),(5,'Garlic',1,20,NULL,'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?w=400'),(6,'Spinach',1,25,NULL,'https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=400'),(7,'Broccoli',1,80,NULL,'https://images.unsplash.com/photo-1584270354949-c26b0d5b4a0c?w=400'),(8,'Cucumber',1,40,NULL,'https://images.unsplash.com/photo-1449333254714-23eeffcf6823?w=400'),(9,'Cauliflower',1,45,NULL,'https://images.unsplash.com/photo-1568584711271-6c929fb49b60?w=400'),(10,'Green Beans',1,60,NULL,'https://images.unsplash.com/photo-1567191060458-261c706248d0?w=400'),(11,'Peas',1,50,NULL,'https://images.unsplash.com/photo-1592394533824-9440e5d68530?w=400'),(12,'Corn',1,30,NULL,'https://images.unsplash.com/photo-1551754655-cd27e38d2076?w=400'),(13,'Lemon',1,5,NULL,'https://images.unsplash.com/photo-1585059895312-5e769bc65544?w=400'),(14,'Mango',2,120,NULL,'https://images.unsplash.com/photo-1553279768-865429fa0078?w=400'),(15,'Apple',2,150,NULL,'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=400'),(16,'Guava',2,60,NULL,'https://images.unsplash.com/photo-1536511110591-17726487e914?w=400'),(17,'Watermelon',2,40,NULL,'https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=400'),(18,'Banana',2,60,NULL,'https://images.unsplash.com/photo-1571771894821-ad9b588640ba?w=400'),(19,'Orange',2,80,NULL,'https://images.unsplash.com/photo-1557800636-894a64c1696f?w=400'),(20,'Grapes',2,90,NULL,'https://images.unsplash.com/photo-1537640538966-79f369b4018f?w=400'),(21,'Pineapple',2,70,NULL,'https://images.unsplash.com/photo-1589820296156-2454bb8a6ad1?w=400'),(22,'Kiwi',2,180,NULL,'https://images.unsplash.com/photo-1591734682008-530355118c6e?w=400'),(23,'Peach',2,200,NULL,'https://images.unsplash.com/photo-1521124553232-9c4c16641887?w=400'),(24,'Papaya',2,50,NULL,'https://images.unsplash.com/photo-1526434426615-1abe81efcb0b?w=400'),(25,'Milk',3,66,NULL,'https://images.unsplash.com/photo-1550583724-1255d14264b3?w=400'),(26,'Curd',3,40,NULL,'https://images.unsplash.com/photo-1631451095765-2c91616fc9e6?w=400'),(27,'Cheese',3,120,NULL,'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400'),(28,'Paneer',3,90,NULL,'https://images.unsplash.com/photo-1634045504012-680459c38173?w=400'),(29,'Butter',3,55,NULL,'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400'),(30,'Yogurt',3,35,NULL,'https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=400'),(31,'Cream',3,70,NULL,'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=400'),(32,'Ice Cream Cone',3,40,NULL,'https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400'),(33,'Ghee',3,550,NULL,'https://images.unsplash.com/photo-1632832585258-09514f7b4916?w=400'),(34,'Buttermilk',3,25,NULL,'https://images.unsplash.com/photo-1560035069-125c96361816?w=400');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'kartik','dkartik01');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2026-03-10  0:27:06
