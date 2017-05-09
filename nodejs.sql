/*
Navicat MySQL Data Transfer

Source Server         : node
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : nodejs

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-09 14:01:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `publish`
-- ----------------------------
DROP TABLE IF EXISTS `publish`;
CREATE TABLE `publish` (
  `id` int(11) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `region` varchar(255) NOT NULL,
  `starttime` varchar(255) NOT NULL,
  `endtime` varchar(255) NOT NULL,
  `delivery` tinyint(255) NOT NULL,
  `type` varchar(255) DEFAULT NULL,
  `desc` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of publish
-- ----------------------------
INSERT INTO `publish` VALUES ('00000000019', '外卖', 'shanghai', '2017-05-08', '09:21:38', '1', '美食/餐厅线上活动,地推活动,线下主题活动', '立即送达', '2017-05-08 09:21:50');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(5) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT 'the primary key for user',
  `username` varchar(45) NOT NULL COMMENT 'the login account for user',
  `password` varchar(100) NOT NULL COMMENT 'the md5 format string',
  `info` varchar(45) DEFAULT NULL COMMENT 'the email for the user to find password',
  `time` varchar(255) NOT NULL,
  `sex` varchar(11) NOT NULL,
  `role` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `ID_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('00001', 'admin', 'admin', 'boss', '2017-05-04 00:00:00', '1', '0');
INSERT INTO `user` VALUES ('00002', 'vae', '123456', 'boss', '2017-05-06 20:35:57', '2', '0');
INSERT INTO `user` VALUES ('00003', '刘诗诗', '1', '大家好，我是刘诗诗', '2017-05-03 16:20:46', '1', '1');
INSERT INTO `user` VALUES ('00004', '胡歌', '1', '大家好，我是胡歌', '2017-05-05 22:56:49', '2', '2');
INSERT INTO `user` VALUES ('00005', '11', '1', '1', '2017-05-08 10:33:27', '1', '2');
INSERT INTO `user` VALUES ('00006', '111', '1', '1', '2017-05-08 10:33:34', '1', '2');
INSERT INTO `user` VALUES ('00007', '1111', '1', '1', '2017-05-08 10:33:37', '1', '2');
INSERT INTO `user` VALUES ('00008', '22', '1', '1', '2017-05-08 10:33:41', '1', '2');
INSERT INTO `user` VALUES ('00009', '222', '1', '1', '2017-05-09 09:59:44', '1', '2');
INSERT INTO `user` VALUES ('00010', '33', '1', '1', '2017-05-09 09:57:15', '1', '2');
INSERT INTO `user` VALUES ('00011', 'ww', '1', '1', '2017-05-08 10:34:58', '1', '2');
INSERT INTO `user` VALUES ('00012', 'rf', '1', '1', '2017-05-08 10:35:03', '1', '2');
INSERT INTO `user` VALUES ('00013', 'tr', '1', '1', '2017-05-08 10:35:07', '1', '2');
INSERT INTO `user` VALUES ('00014', 'qewr', '21', '21', '2017-05-08 10:35:49', '1', '2');
INSERT INTO `user` VALUES ('00015', 'qewr3', '21', '213', '2017-05-09 10:40:43', '2', '2');
INSERT INTO `user` VALUES ('00016', 'qewr334', '21', '213', '2017-05-08 10:35:57', '1', '2');
INSERT INTO `user` VALUES ('00017', 'dads', '21', '213', '2017-05-08 10:36:03', '1', '2');
