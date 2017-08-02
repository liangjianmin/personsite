/*
Navicat MySQL Data Transfer

Source Server         : sys
Source Server Version : 50715
Source Host           : ljmvae123.mysql.rds.aliyuncs.com:3306
Source Database       : auction

Target Server Type    : MYSQL
Target Server Version : 50715
File Encoding         : 65001

Date: 2017-08-02 15:49:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `desc` varchar(10000) NOT NULL COMMENT '评论语',
  `time` varchar(255) NOT NULL COMMENT '评论时间',
  `evaluate` int(255) NOT NULL COMMENT '评分',
  `user` varchar(255) NOT NULL COMMENT '评论者',
  `shopid` int(11) NOT NULL COMMENT '关联的shopId',
  `userid` int(11) NOT NULL COMMENT '用户的id',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=55 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------
INSERT INTO `comment` VALUES ('38', '这夏普很好', '2017-06-05 15:53:33', '5', 'vae', '2', '29');
INSERT INTO `comment` VALUES ('39', '垃圾', '2017-06-05 15:54:06', '1', 'vae', '44', '29');
INSERT INTO `comment` VALUES ('40', '飒飒', '2017-06-05 15:54:39', '5', 'vae', '229', '29');
INSERT INTO `comment` VALUES ('41', 'good', '2017-06-05 15:54:47', '5', 'vae', '45', '29');
INSERT INTO `comment` VALUES ('42', '我见过最好的产品', '2017-06-05 15:55:01', '5', 'vae', '238', '29');
INSERT INTO `comment` VALUES ('43', '美女认为不错', '2017-06-05 15:55:07', '5', 'vae', '241', '29');
INSERT INTO `comment` VALUES ('44', '马拉个币', '2017-06-05 15:55:12', '5', 'vae', '242', '29');
INSERT INTO `comment` VALUES ('45', '傻逼一样', '2017-06-05 15:55:17', '2', 'vae', '243', '29');
INSERT INTO `comment` VALUES ('46', '嗯，我女朋友非常喜欢', '2017-06-05 15:55:33', '4', 'vae', '230', '29');
INSERT INTO `comment` VALUES ('47', '哦哦哦', '2017-06-05 15:56:06', '1', 'vae', '2', '29');
INSERT INTO `comment` VALUES ('48', '我去', '2017-06-05 15:56:34', '5', 'ljm', '2', '24');
INSERT INTO `comment` VALUES ('49', '这小米电脑非常nice运起来', '2017-06-05 15:58:05', '5', 'ljm', '239', '24');
INSERT INTO `comment` VALUES ('50', '很好看', '2017-06-06 09:57:36', '5', 'vae', '1', '29');
INSERT INTO `comment` VALUES ('51', '一般般', '2017-06-06 12:16:46', '5', 'zkl', '1', '30');
INSERT INTO `comment` VALUES ('52', '随便', '2017-06-13 11:16:13', '1', 'zkl', '229', '30');
INSERT INTO `comment` VALUES ('53', '呵呵', '2017-06-20 16:11:06', '5', 'liangjm', '229', '2');
INSERT INTO `comment` VALUES ('54', '买了10个', '2017-06-21 13:56:13', '5', 'lg', '230', '43');

-- ----------------------------
-- Table structure for `order`
-- ----------------------------
DROP TABLE IF EXISTS `order`;
CREATE TABLE `order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopname` varchar(255) NOT NULL COMMENT '商品名称',
  `price` int(11) NOT NULL COMMENT '商品价格',
  `total` int(11) NOT NULL COMMENT '商品总价格',
  `shopnum` int(255) NOT NULL COMMENT '购买的商品个数',
  `username` varchar(255) NOT NULL COMMENT '订单者',
  `orderuid` varchar(255) NOT NULL COMMENT '订单编号',
  `status` int(11) NOT NULL COMMENT '1：待付款 2：待发货 3：已配货 4：已完成（订单状态）',
  `ordertime` varchar(255) NOT NULL COMMENT '订单时间',
  `shopid` int(11) NOT NULL,
  `userid` int(11) NOT NULL COMMENT '关联的用户id',
  `sign` varchar(255) DEFAULT NULL COMMENT '签名',
  `timestamp` varchar(255) DEFAULT NULL COMMENT '记录倒计时的时间戳',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=283 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of order
-- ----------------------------
INSERT INTO `order` VALUES ('282', 'Apple iPhone 6', '4666', '27996', '6', 'lg', 'E201706231608021498205282368', '1', '2017-06-23 16:08:02', '47', '43', '6a9aeddfc689c1d0e3b9ccc3ab651bc5', '1498207083494');

-- ----------------------------
-- Table structure for `pics`
-- ----------------------------
DROP TABLE IF EXISTS `pics`;
CREATE TABLE `pics` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(1000) NOT NULL COMMENT '所有图片地址',
  `from` varchar(255) NOT NULL COMMENT '插入者',
  `time` varchar(255) NOT NULL COMMENT '插入时间',
  `desc` varchar(255) DEFAULT NULL COMMENT '信息',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=420 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pics
-- ----------------------------
INSERT INTO `pics` VALUES ('222', '52aa0fc069cb3e26f20809794b6476d4.jpg', '刘诗诗', '2017-05-14 11:30:21', 'shop table use');
INSERT INTO `pics` VALUES ('223', '52aa0fc069cb3e26f20809794b6476d4.jpg', '刘诗诗', '2017-05-14 12:15:03', 'shop table use');
INSERT INTO `pics` VALUES ('224', 'a.jpg', '刘诗诗', '2017-05-14 12:15:29', 'shop table use');
INSERT INTO `pics` VALUES ('227', 'd745391ca43d91c242a844b21b6aea6c.jpg', 'admin', '2017-05-14 14:40:41', 'shop table use');
INSERT INTO `pics` VALUES ('228', 'b0b4cb2175a5c7a9e250cfb32841e448.jpg', 'admin', '2017-05-14 15:18:12', 'shop table use');
INSERT INTO `pics` VALUES ('229', 'afabec96311faa5f47b00c446e5551d0.jpg', 'admin', '2017-05-15 15:44:39', 'shop table use');
INSERT INTO `pics` VALUES ('230', 'afabec96311faa5f47b00c446e5551d0.jpg', 'admin', '2017-05-15 15:49:36', 'shop table use');
INSERT INTO `pics` VALUES ('231', 'ff91636a9657a4992aefe22f42892d09.jpg', 'admin', '2017-05-16 13:41:43', 'shop table use');
INSERT INTO `pics` VALUES ('232', '52832b1b79dfa5b76e0e585acc27591b.png', 'admin', '2017-05-17 14:11:17', 'shop table use');
INSERT INTO `pics` VALUES ('233', 'afabec96311faa5f47b00c446e5551d0.jpg', 'admin', '2017-05-17 14:33:18', 'shop table use');
INSERT INTO `pics` VALUES ('234', 'afabec96311faa5f47b00c446e5551d0.jpg', 'admin', '2017-05-17 14:36:15', 'shop table use');
INSERT INTO `pics` VALUES ('235', 'afabec96311faa5f47b00c446e5551d0.jpg', 'admin', '2017-05-17 14:41:23', 'shop table use');
INSERT INTO `pics` VALUES ('236', '52832b1b79dfa5b76e0e585acc27591b.png', 'admin', '2017-05-17 14:42:10', 'shop table use');
INSERT INTO `pics` VALUES ('237', 'afabec96311faa5f47b00c446e5551d0.jpg', 'admin', '2017-05-17 14:43:33', 'shop table use');
INSERT INTO `pics` VALUES ('238', 'afabec96311faa5f47b00c446e5551d0.jpg', 'admin', '2017-05-17 14:43:42', 'shop table use');
INSERT INTO `pics` VALUES ('239', 'd5fc48a90a101eff69be5b2de674c437.jpeg', 'admin', '2017-05-17 14:55:10', 'shop table use');
INSERT INTO `pics` VALUES ('240', 'd5fc48a90a101eff69be5b2de674c437.jpeg', 'admin', '2017-05-17 14:57:43', 'shop table use');
INSERT INTO `pics` VALUES ('241', 'd5fc48a90a101eff69be5b2de674c437.jpeg', 'admin', '2017-05-17 15:30:05', 'shop table use');
INSERT INTO `pics` VALUES ('242', '58a668e9Ne4b8c935.jpg', 'admin', '2017-05-17 15:38:48', 'shop table use');
INSERT INTO `pics` VALUES ('243', '584cfbbfN25d205dd.jpg', 'admin', '2017-05-17 15:41:44', 'shop table use');
INSERT INTO `pics` VALUES ('244', '59103c06Na246d91a.jpg', 'admin', '2017-05-17 21:34:36', 'shop table use');
INSERT INTO `pics` VALUES ('245', '573e706cNf4ba819a.jpg', 'admin', '2017-05-17 21:35:05', 'shop table use');
INSERT INTO `pics` VALUES ('246', 'smalllogocanary.png', 'admin', '2017-05-21 16:34:42', 'shop table use');
INSERT INTO `pics` VALUES ('247', '16565966ykx1jbk1y6xjzm.jpg', 'admin', '2017-05-23 11:01:13', 'shop table use');
INSERT INTO `pics` VALUES ('248', '16565966ykx1jbk1y6xjzm.jpg', 'admin', '2017-05-23 11:15:24', 'shop table use');
INSERT INTO `pics` VALUES ('283', '9d50cb80a189877a181f54102e9096e2.jpg', 'admin', '2017-05-23 17:30:37', 'shop table use');
INSERT INTO `pics` VALUES ('284', 'bbea713d594b6eb80b1112da8b0a97de.jpg', 'admin', '2017-05-23 17:53:54', 'shop table use');
INSERT INTO `pics` VALUES ('285', '6577575745287969.jpg', 'admin', '2017-05-24 15:29:02', 'shop table use');
INSERT INTO `pics` VALUES ('286', '4073203858335935.jpg', 'admin', '2017-05-24 15:40:27', 'shop table use');
INSERT INTO `pics` VALUES ('287', '57e4a35bN230918c0.jpg', 'admin', '2017-05-24 15:46:18', 'shop table use');
INSERT INTO `pics` VALUES ('288', '6255d4a92acc4f0531cb11f70f1bf0c6.jpg', 'admin', '2017-05-24 15:48:08', 'shop table use');
INSERT INTO `pics` VALUES ('289', '365792f64b20865ae852694feadb3142.jpg', 'admin', '2017-05-24 15:50:50', 'shop table use');
INSERT INTO `pics` VALUES ('290', '52832b1b79dfa5b76e0e585acc27591b.png', 'admin', '2017-05-24 15:53:48', 'shop table use');
INSERT INTO `pics` VALUES ('291', '6255d4a92acc4f0531cb11f70f1bf0c6.jpg', 'admin', '2017-05-24 15:55:22', 'shop table use');
INSERT INTO `pics` VALUES ('292', 'e6ec5cf638a3add106fd4727f7273801.jpg', 'admin', '2017-05-24 15:56:47', 'shop table use');
INSERT INTO `pics` VALUES ('293', '58a668e9Ne4b8c935.jpg', 'admin', '2017-05-24 16:01:59', 'shop table use');
INSERT INTO `pics` VALUES ('294', '584cfbbfN25d205dd.jpg', 'admin', '2017-05-24 16:02:23', 'shop table use');
INSERT INTO `pics` VALUES ('295', '6577575745287969.jpg', 'admin', '2017-05-24 16:02:35', 'shop table use');
INSERT INTO `pics` VALUES ('296', '57e4a35bN230918c0.jpg', 'admin', '2017-05-24 16:03:08', 'shop table use');
INSERT INTO `pics` VALUES ('297', 'TB2PQVnuXXXXXcKXpXXXXXXXXXX_!!2928230926.jpg_430x430q90.jpg', 'admin', '2017-05-24 16:03:42', 'shop table use');
INSERT INTO `pics` VALUES ('298', 'TB2wAIqot4opuFjSZFLXXX8mXXa_!!2224276217.jpg_430x430q90.jpg', 'admin', '2017-05-24 16:03:57', 'shop table use');
INSERT INTO `pics` VALUES ('299', 'TB2UNU.qbRkpuFjSspmXXc.9XXa_!!446381428.jpg_400x400.jpg_.webp', 'admin', '2017-05-24 16:05:09', 'shop table use');
INSERT INTO `pics` VALUES ('300', 'TB2o9yxsXXXXXXyXpXXXXXXXXXX_!!1953839465.jpg_430x430q90.jpg', 'admin', '2017-05-24 16:06:11', 'shop table use');
INSERT INTO `pics` VALUES ('301', 'TB25rVpb1nAQeBjSZFGXXazoFXa_!!1714128138.jpg_430x430q90.jpg', 'admin', '2017-05-24 16:08:31', 'shop table use');
INSERT INTO `pics` VALUES ('302', 'TB232qtnrtlpuFjSspfXXXLUpXa_!!2693053539.jpg_430x430q90.jpg', 'admin', '2017-05-24 16:09:31', 'shop table use');
INSERT INTO `pics` VALUES ('303', 'TB1vMryIVXXXXXAXpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg', 'admin', '2017-05-24 17:17:33', 'shop table use');
INSERT INTO `pics` VALUES ('304', 'TB23swhoJ0opuFjSZFxXXaDNVXa_!!177308654.jpg_400x400.jpg_.webp', 'admin', '2017-05-24 17:19:15', 'shop table use');
INSERT INTO `pics` VALUES ('305', 'TB23swhoJ0opuFjSZFxXXaDNVXa_!!177308654.jpg_400x400.jpg_.webp', 'admin', '2017-05-24 17:21:02', 'shop table use');
INSERT INTO `pics` VALUES ('306', 'TB1IOHYQpXXXXc7XpXXXXXXXXXX_!!0-item_pic.jpg_400x400.jpg_.webp', 'admin', '2017-05-24 17:21:07', 'shop table use');
INSERT INTO `pics` VALUES ('308', '9d50cb80a189877a181f54102e9096e2.jpg', 'admin', '2017-05-27 15:57:36', 'shop table use');
INSERT INTO `pics` VALUES ('324', '58a668e9Ne4b8c935.jpg', 'pony', '2017-06-05 17:54:06', 'shop table use');
INSERT INTO `pics` VALUES ('325', 'bg.715c62e.jpg', 'pony', '2017-06-11 11:07:10', 'shop table use');
INSERT INTO `pics` VALUES ('326', 'bg.715c62e.jpg', 'pony', '2017-06-11 11:08:29', 'shop table use');
INSERT INTO `pics` VALUES ('327', '81S58PICgjy_1024.jpg', 'pony', '2017-06-13 16:54:20', 'shop table use');
INSERT INTO `pics` VALUES ('409', 'bg2.png,01.jpg', 'pony', '2017-06-16 17:09:06', 'banner table use');
INSERT INTO `pics` VALUES ('410', '6255d4a92acc4f0531cb11f70f1bf0c6.jpg,afabec96311faa5f47b00c446e5551d0.jpg,d5fc48a90a101eff69be5b2de674c437.jpeg', 'pony', '2017-06-16 17:11:26', 'banner table use');
INSERT INTO `pics` VALUES ('411', '011.jpg,011.jpg', 'lg', '2017-06-16 17:11:11', 'banner table use');
INSERT INTO `pics` VALUES ('412', 'afabec96311faa5f47b00c446e5551d0.jpg,d5fc48a90a101eff69be5b2de674c437.jpeg,52832b1b79dfa5b76e0e585acc27591b.png', 'lg', '2017-06-16 17:11:49', 'banner table use');
INSERT INTO `pics` VALUES ('414', '011.jpg,012.jpg,013.jpg', 'lg', '2017-06-16 17:12:59', 'banner table use');
INSERT INTO `pics` VALUES ('415', '011.jpg,012.jpg,013.jpg', 'lg', '2017-06-16 17:13:50', 'banner table use');
INSERT INTO `pics` VALUES ('416', '003.png', 'lg', '2017-06-16 17:16:02', 'banner table use');
INSERT INTO `pics` VALUES ('417', '011.jpg,012.jpg,013.jpg', 'lg', '2017-06-16 17:18:58', 'banner table use1');
INSERT INTO `pics` VALUES ('418', '011.jpg,012.jpg,013.jpg,14370412254530_3177584_16.jpg', 'lg', '2017-06-20 14:23:09', 'banner table use');

-- ----------------------------
-- Table structure for `shop`
-- ----------------------------
DROP TABLE IF EXISTS `shop`;
CREATE TABLE `shop` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `shopname` varchar(255) NOT NULL COMMENT '商品名称',
  `price` int(11) NOT NULL COMMENT '商品价格',
  `describes` varchar(255) NOT NULL COMMENT '商品描述',
  `evaluate` int(11) NOT NULL COMMENT '由评论表统计的平均评分',
  `imgid` int(11) NOT NULL COMMENT '记录pics表的id',
  `stocknum` int(11) NOT NULL COMMENT '库存数量',
  `storagetime` varchar(255) NOT NULL COMMENT '入库时间',
  `outstocktime` varchar(255) DEFAULT NULL COMMENT '出库时间',
  `shopnumber` int(11) DEFAULT NULL COMMENT '商品编号',
  `type` int(11) NOT NULL COMMENT '商品类型 0：服饰美妆 1：家用电器 2：电脑数码',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=246 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shop
-- ----------------------------
INSERT INTO `shop` VALUES ('1', '裙子', '55', '夏天最流行的裙子', '5', '324', '191', '2017-06-11 10:57:30', '2017-06-13 11:08:25', '150', '0');
INSERT INTO `shop` VALUES ('44', '乐2', '4888', '高通骁龙652/联发科X20处理器；3GB+32GB大内存；金属一体化机身', '1', '295', '84', '2017-06-11 10:58:59', '2017-06-21 16:55:32', '25789', '1');
INSERT INTO `shop` VALUES ('47', 'Apple iPhone 6', '4666', 'Apple iPhone 6 32G 金色 移动联通电信4G手机', '4', '296', '92', '2017-06-11 11:04:28', '2017-06-23 16:08:02', '48795', '0');
INSERT INTO `shop` VALUES ('229', '雪纺印花连衣裙', '300', 'LUXLEAD洛诗琳 2017年夏装新款女装30D数码雪纺印花连衣裙烂漫复古短袖裙子 预售 花色 M预售5月24号', '4', '298', '300', '2017-06-11 10:43:44', '2017-06-10 19:42:47', '154646456', '0');
INSERT INTO `shop` VALUES ('230', '最新ipad', '4855', '这是最新的iPad', '5', '299', '198', '2017-06-11 10:58:25', '2017-06-21 16:26:46', '155501212', '1');
INSERT INTO `shop` VALUES ('238', '凉帽', '200', '婴儿帽子凉帽夏天遮阳帽女宝宝帽子0-3-6-12个月新生儿盆帽太阳帽', '5', '300', '299', '2017-06-11 10:44:01', '2017-06-11 11:39:51', '100', '0');
INSERT INTO `shop` VALUES ('239', '小米 ', '3888', 'Xiaomi/小米 小米笔记本Air 13.3吋便携学生游戏本手提电脑超薄本', '5', '301', '100', '2017-06-11 11:30:08', '2017-06-08 15:53:52', '1100', '2');
INSERT INTO `shop` VALUES ('241', '裤子', '68', '2017春款男童牛仔裤加肥加大宽松版型大童中童长裤休闲裤肥版裤子', '5', '303', '100', '2017-06-11 10:44:35', '2017-06-08 15:53:58', '253', '0');
INSERT INTO `shop` VALUES ('242', '打底衫男', '68', '古子夏季日系复古圆领T恤学生个性假两件短袖拼接多口袋打底衫男', '5', '304', '107', '2017-05-24 17:19:16', '2017-05-25 14:52:24', '25321', '0');
INSERT INTO `shop` VALUES ('243', '宽松上衣', '88', '素木夏装2017新款拼接撞色套头短袖t恤女韩版宽松上衣女夏1204', '2', '306', '200', '2017-06-11 10:44:44', '2017-06-08 17:17:58', '53211', '0');

-- ----------------------------
-- Table structure for `stock`
-- ----------------------------
DROP TABLE IF EXISTS `stock`;
CREATE TABLE `stock` (
  `id` int(11) NOT NULL,
  `total` int(11) NOT NULL COMMENT '库存总数量',
  `typecostume` int(11) NOT NULL COMMENT '服饰美妆统计 type=0',
  `typeelectrical` int(11) NOT NULL COMMENT '家用电器统计 type=1',
  `typedigital` int(11) NOT NULL COMMENT '电脑数据统计 type=2',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of stock
-- ----------------------------
INSERT INTO `stock` VALUES ('0', '1671', '1289', '282', '100');

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
  `sex` varchar(11) DEFAULT NULL COMMENT '性别',
  `from` varchar(255) NOT NULL COMMENT '注册来源 0：后台用户 1：客户端注册来源',
  `role` varchar(255) NOT NULL COMMENT '角色权限',
  `phone` varchar(255) DEFAULT NULL COMMENT '手机号',
  PRIMARY KEY (`id`),
  UNIQUE KEY `ID_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('00001', 'poney', 'e10adc3949ba59abbe56e057f20f883e', '超级管理员权限', '2017-06-20 15:09:30', '0', '0', '0', null);
INSERT INTO `user` VALUES ('00002', 'liangjm', 'e8f852a9e3d285c75fffc8a6251072dd', 'client', '2017-06-20 15:11:34', '0', '1', '2', '15365025118');
INSERT INTO `user` VALUES ('00003', 'lg', '96e79218965eb72c92a549dd5a330112', 'client', '2017-06-20 15:59:12', '0', '1', '2', '13111111111');
INSERT INTO `user` VALUES ('00044', 'sm', 'e10adc3949ba59abbe56e057f20f883e', 'client', '2017-06-23 10:15:13', '0', '1', '2', '15365025117');

-- ----------------------------
-- Table structure for `wechat`
-- ----------------------------
DROP TABLE IF EXISTS `wechat`;
CREATE TABLE `wechat` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` mediumtext NOT NULL,
  `time` varchar(255) NOT NULL,
  `openid` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=213 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wechat
-- ----------------------------
INSERT INTO `wechat` VALUES ('212', 'snLUXkbKP7MgecRXJlPLgqey9o6GWwWO8r0BgjEfne6nRhEeMZPyp1XFWzYpZ5aQ,qnfvRDy72KaKY3LouypWEtK1i3IuxaGJLn9rbiIu0r5NqyUkwD9qFbOr5xc-FXW1,iMOzMdyqQUUPuBiECoLixg5P6J3X9bC4OnEf9B4H_XwLRMCKJ8ctTbZEsNhfFsBB', '2017-07-30 10:05:36', 'oSEApwgmc0AeZ5uaf49PzABIqk1I');

-- ----------------------------
-- Table structure for `wsuser`
-- ----------------------------
DROP TABLE IF EXISTS `wsuser`;
CREATE TABLE `wsuser` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `openid` varchar(255) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `sex` varchar(255) NOT NULL,
  `headimgurl` varchar(255) NOT NULL,
  `time` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of wsuser
-- ----------------------------
INSERT INTO `wsuser` VALUES ('4', 'oSEApwgmc0AeZ5uaf49PzABIqk1I', 'LJM', '1', 'http://wx.qlogo.cn/mmopen/R0rqW41h4o1NJYLbBsYxd37cECW7PsoJg1ORibHw7ibtMKrk9GddcWFgBSzqnFruiaFXbaC8sqmH5FuXMfogFpAWZzbfeCTyXAz/0', '2017-07-10 14:11:43');
INSERT INTO `wsuser` VALUES ('5', 'oSEApwtWNyqWO1Ikb9cpMWJQZCw0', '大约Z在冬季kl', '1', 'http://wx.qlogo.cn/mmopen/2ekWUdVhcDMjcDA4Km3qKtw8wTVypT8Zfl75tiaLZegxHiajAKyO6jdw1HDnIbXL5ohickdic6ZJ6K2SAIjico0mSwz4rJibC5CyYic/0', '2017-07-10 15:45:54');
INSERT INTO `wsuser` VALUES ('6', 'oSEApwu3uNoQAcUD7ezOXapnF34w', '邵徽越', '1', 'http://wx.qlogo.cn/mmopen/R0rqW41h4o2Ib4QJZViclhOMUsWZSkoCVgrUDRTETiboseSULCqWb7eoBVCYZLp6e0GyjYfc9Q1LXY9zX2OgL4PUibcGvrKwWVb/0', '2017-07-10 20:40:14');
INSERT INTO `wsuser` VALUES ('8', 'oSEApwmO22NWQ6x08L3qHb8ouzaE', '大锤', '1', 'http://wx.qlogo.cn/mmopen/YQqDDcQ4kwaZKquibThWcsskeGicQXtuNr9usgwhqAkpXdoDxhbcianW340DM5BzPIqACCDBibpVnnzjdvokR9yeeRoYrA5MiaF88/0', '2017-07-11 13:07:30');
INSERT INTO `wsuser` VALUES ('9', 'oSEApwmpHffQF8mFkLLP_X-esSZk', 'Harvey', '1', 'http://wx.qlogo.cn/mmopen/ajNVdqHZLLBVJV7But86TKQrznia1djF6sPqeDtFCf9Cic6sagOtic0k3yVex82DUpH6hGiafIKXIsDZJ0ueloxqHg/0', '2017-07-11 13:09:59');
INSERT INTO `wsuser` VALUES ('10', 'oSEApwh-fnoZ30OXlR4z6LVUHxGI', '晨曦', '1', 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM52ib15Vgj9gmxfS0hsJ9dicyBzM2tjZzgqGohVhue2IBJg/0', '2017-07-13 17:22:39');
INSERT INTO `wsuser` VALUES ('11', 'oJPv51IqcXvZyWbeK-q_ZHW2rldw', '大约Z在冬季kl', '1', 'http://wx.qlogo.cn/mmopen/Y0wjF6wNJ096pAdIibIPIPWicJib0V2bxg8A8pXfWskXaw2JibyemOib41GKrSLLeZgWJ2PDOscRueTRvK8HbS8LIv9Cia48gRGdoT/0', '2017-07-25 17:35:27');
INSERT INTO `wsuser` VALUES ('12', 'oJPv51F6hGCs_G7A-oRWLQgyq4l8', 'LJM', '1', 'http://wx.qlogo.cn/mmopen/sVjCkKEibw13wgcickywbrhq92Gw0IWJDKia8q9iaQ3ZK2qZ9jwYPYor7BibrL0nRZ7FGWWu2fyYwFDHn4lmjoaUk6DYdjqE8dwoib/0', '2017-07-25 17:40:40');
INSERT INTO `wsuser` VALUES ('13', 'oJPv51CJiZ5t-kFmBdPfS-fv1od4', '落寞', '1', '/0', '2017-07-25 18:00:48');
INSERT INTO `wsuser` VALUES ('14', 'oSEApwtM_S6t9Cw5sCMlYyHqCObg', '寻常', '1', 'http://wx.qlogo.cn/mmopen/R0rqW41h4o2Ib4QJZViclhOaUdPwghO0nKoJYAdh361Gia7kYbXFLsVmibXrNejwfcjXtLmAC95Z0HchJRowLQkIJhz46Kn4kKQ/0', '2017-07-28 17:34:28');
