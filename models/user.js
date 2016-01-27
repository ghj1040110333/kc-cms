var express = require('express')
,mysql = require('mysql')
,http = require('http');
var  queryDb = require('../db');
mysql = queryDb.getMysqlConn();
var  mysqlString = require('./api/sql');
var  object = require('./api/object');
var app = express();

exports.get =  function  (username, callback) {
	var sql =mysqlString.k_user.getAllByName(username);
	object.queryMysql(sql,callback);
};
exports.verifyUserName =  function  (username, callback) {
    var sql =mysqlString.k_user.getAllByName(username);
    object.queryMysql(sql,callback);
};
exports.postUserInfo =  function  (userAffirmPwd,userName,userEmail, callback) {
    var sql =mysqlString.k_user.postUserInfo(userAffirmPwd,userName,userEmail);
    object.queryMysql(sql,callback);
};