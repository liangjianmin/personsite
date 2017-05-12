/*
Navicat MySQL Data Transfer

Source Server         : node
Source Server Version : 50717
Source Host           : localhost:3306
Source Database       : nodejs

Target Server Type    : MYSQL
Target Server Version : 50717
File Encoding         : 65001

Date: 2017-05-12 12:54:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `pics`
-- ----------------------------
DROP TABLE IF EXISTS `pics`;
CREATE TABLE `pics` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL COMMENT '所有图片地址',
  `fromname` varchar(255) NOT NULL COMMENT '插入者',
  `time` varchar(255) NOT NULL COMMENT '插入时间',
  `imgid` int(11) DEFAULT NULL COMMENT '关联imgid',
  `desc` varchar(255) DEFAULT NULL COMMENT '信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=144 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pics
-- ----------------------------
INSERT INTO `pics` VALUES ('141', '52832b1b79dfa5b76e0e585acc27591b.png', 'admin', '2017-05-12 12:45:09', null, 'shop table use');
INSERT INTO `pics` VALUES ('142', '365792f64b20865ae852694feadb3142.jpg', 'vae', '2017-05-12 12:51:49', null, 'shop table use');
INSERT INTO `pics` VALUES ('143', '365792f64b20865ae852694feadb3142.jpg', 'admin', '2017-05-12 12:52:15', null, 'shop table use');

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
  `type` varchar(255) NOT NULL,
  `desc` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of publish
-- ----------------------------
INSERT INTO `publish` VALUES ('00000000001', '外卖', 'beijing', '2017-05-02', '12:16:10', '1', '美食/餐厅线上活动,地推活动', '21212', '2017-05-10 12:16:13', 'bb4a47028a16039911f60c20d53c2d90.jpg');
INSERT INTO `publish` VALUES ('00000000002', '212', 'beijing', '2017-05-19', '12:17:40', '1', '美食/餐厅线上活动,地推活动', '212', '2017-05-10 12:17:50', 'bb4a47028a16039911f60c20d53c2d90.jpg,bbea713d594b6eb80b1112da8b0a97de.jpg');
INSERT INTO `publish` VALUES ('00000000023', '21', 'beijing', '2017-05-15', '12:20:42', '1', '美食/餐厅线上活动,地推活动', '212', '2017-05-10 12:20:47', '9d50cb80a189877a181f54102e9096e2.jpg,68722755c3ea27f917f41caf54a54bb8.jpg');

-- ----------------------------
-- Table structure for `shop`
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopname` varchar(255) NOT NULL COMMENT '商品名称',
  `price` int(11) NOT NULL COMMENT '商品价格',
  `desc` varchar(255) NOT NULL COMMENT '商品描述',
  `evaluate` int(11) NOT NULL COMMENT '评价',
  `imgid` int(11) NOT NULL COMMENT '记录pics表的id',
  `stocknum` int(11) NOT NULL COMMENT '库存数量',
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=224 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('220', 'iPhone', '4800', '这是商品描述', '0', '114', '100', '2017-05-12 12:17:01');
INSERT INTO `shop` VALUES ('221', 'ipad', '212', '21212', '0', '141', '21', '2017-05-12 12:45:15');
INSERT INTO `shop` VALUES ('222', 'c8650', '21', '华为手机', '0', '142', '11', '2017-05-12 12:51:50');

-- ----------------------------
-- Table structure for `stock`
-- ----------------------------
DROP TABLE IF EXISTS `stock`;
CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `shop` int(11) NOT NULL COMMENT '总商品分类库存数量'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stock
-- ----------------------------
INSERT INTO `stock` VALUES ('0', '55');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(5) unsigned zerofill NOT NULL AUTO_INCREMENT COMMENT 'the primary key for user',
  `username` varchar(45) NOT NULL COMMENT 'the login account for user',
  `password` varchar(100) NOT NULL COMMENT 'the md5 format string',
  `info` varchar(45) DEFAULT NULL COMMENT '用户介绍',
  `time` varchar(255) NOT NULL COMMENT '注册时间',
  `sex` varchar(11) NOT NULL COMMENT '性别',
  `role` varchar(255) NOT NULL COMMENT '角色权限',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ID_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('00001', 'admin', 'admin', 'boss', '2017-05-04 00:00:00', '1', '0');
INSERT INTO `user` VALUES ('00002', 'vae', '123456', 'boss', '2017-05-06 20:35:57', '2', '0');
INSERT INTO `user` VALUES ('00003', '刘诗诗', '1', '大家好，我是刘诗诗', '2017-05-03 16:20:46', '1', '1');
INSERT INTO `user` VALUES ('00004', '胡歌', '1', '大家好，我是胡歌', '2017-05-09 14:48:11', '2', '2');
INSERT INTO `user` VALUES ('00005', '11', '1', '1', '2017-05-08 10:33:27', '1', '2');
INSERT INTO `user` VALUES ('00006', '111', '1', '1', '2017-05-10 14:18:28', '1', '2');
INSERT INTO `user` VALUES ('00007', '1111', '1', '1', '2017-05-08 10:33:37', '1', '2');
INSERT INTO `user` VALUES ('00008', '22', '1', '1', '2017-05-08 10:33:41', '1', '2');
INSERT INTO `user` VALUES ('00009', '222', '1', '1', '2017-05-09 09:59:44', '1', '2');
INSERT INTO `user` VALUES ('00010', '33', '1', '1', '2017-05-09 09:57:15', '1', '2');
INSERT INTO `user` VALUES ('00011', 'ww', '1', '1', '2017-05-10 16:16:00', '1', '1');
INSERT INTO `user` VALUES ('00012', 'rf', '1', '1', '2017-05-08 10:35:03', '1', '2');
INSERT INTO `user` VALUES ('00013', 'tr', '1', '1', '2017-05-08 10:35:07', '1', '2');
INSERT INTO `user` VALUES ('00014', 'qewr', '21', '21', '2017-05-08 10:35:49', '1', '2');
INSERT INTO `user` VALUES ('00015', 'qewr3', '21', '213', '2017-05-09 10:40:43', '2', '2');
INSERT INTO `user` VALUES ('00016', 'qewr334', '21', '213', '2017-05-08 10:35:57', '1', '2');
INSERT INTO `user` VALUES ('00017', 'dads', '21', '213', '2017-05-08 10:36:03', '1', '2');
