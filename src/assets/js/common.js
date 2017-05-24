
import conf from './conf';

import axios from 'axios';

var oproto = Object.prototype;
var serialize = oproto.toString;
var Rxports = {	
	/**
	  * 封装axios，减少学习成本，参数基本跟jq ajax一致
	  * @param {String} type			请求的类型，默认post
	  * @param {String} url				请求地址
	  * @param {String} time			超时时间
	  * @param {Object} data			请求参数
	  * @param {String} dataType		预期服务器返回的数据类型，xml html json ...
	  * @param {Object} headers			自定义请求headers
	  * @param {Function} success		请求成功后，这里会有两个参数,服务器返回数据，返回状态，[data, res]
	  * @param {Function} error		发送请求前
	  * @param return 
	*/
	ajax:function (opt){
		
		var opts = opt || {};
		
		if (!opts.url) {
			alert('请填写接口地址');
			return false;
		}
		
		axios({
			method: opts.type || 'post',
			url: opts.url,
			params: opts.data || {},
			headers: opts.headers || {
			  	'Content-Type':'application/x-www-form-urlencoded'
			},
			// `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  			// 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
			baseURL:'http://t.lanchenglv.com/tp5demo/index.php/',
			timeout: opts.time || 10*1000,
			responseType: opts.dataType || 'json'
		}).then(function(res){
			
			if(res.status == 200 ){
				
				if(opts.success){
					opts.success(res.data,res);
				}
				
			}else{
				
				if (data.error) {
					opts.error(error);
				}else{
					alert('好多人在访问呀，请重新试试[timeout]');
				}
				
			}
			
				
		}).catch(function (error){
			console.log(error);
			if (opts.error) {
				opts.error(error);
			}else{
				alert('好多人在访问呀，请重新试试[timeout]');
			}
		});
			
	},
	/*判定是否类数组，如节点集合，纯数组，arguments与拥有非负整数的length属性的纯JS对象*/
	isArrayLike:function(obj) {
	    if (!obj)
	        return false
	    var n = obj.length
	    if (n === (n >>> 0)) { //检测length属性是否为非负整数
	        var type = serialize.call(obj).slice(8, -1)
	        if (/(?:regexp|string|function|window|global)$/i.test(type))
	            return false
	        if (type === "Array")
	            return true
	        try {
	            if ({}.propertyIsEnumerable.call(obj, "length") === false) { //如果是原生对象
	                return /^\s?function/.test(obj.item || obj.callee)
	            }
	            return true
	        } catch (e) { //IE的NodeList直接抛错
	            return !obj.window //IE6-8 window
	        }
	    }
	    return false
	},
	/*遍历数组与对象,回调的第一个参数为索引或键名,第二个或元素或键值*/
    each: function (obj, fn) {
    	var That = this;
        if (obj) { //排除null, undefined
            var i = 0
            if (That.isArrayLike(obj)) {
                for (var n = obj.length; i < n; i++) {
                    if (fn(i, obj[i]) === false)
                        break
                }
            } else {
                for (i in obj) {
                    if (obj.hasOwnProperty(i) && fn(i, obj[i]) === false) {
                        break
                    }
                }
            }
        }
    },
	/**
	  * 获取url传过来的参数
	  * @param name 	获取的参数
	  * @param Url 		自定义获取参数的链接
	  * @param return {Object}||{String}
	*/
	getUrlParam (name,Url) {
	    if (name) {
	      var reg = new RegExp("(^|&)" + name + "=([^&]*)(\\s|&|$)");
	      var r = Url?Url.split("?")[1].match(reg):window.location.search.substr(1).match(reg);
	      if (r != null) return unescape(r[2]);
	      return null;
	    } else {
	      var urlParams;
	      var match,
	        pl     = /\+/g,  // Regex for replacing addition symbol with a space
	        search = /([^&=]+)=?([^&]*)/g,
	        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
	        query  = Url?Url.split("?")[1]:window.location.search.substring(1);
	        urlParams = {};
	        while (match = search.exec(query))
	           urlParams[decode(match[1])] = decode(match[2]);
	      return urlParams;
	    }
	},
	/**
	  * 用object拼接url地址
	  * @param param {object} 	对象参数
	  * @param key 	{String}	{String}.a=1
	  * @param encode {boolean} 是否需要转码
	*/
	urlEncode(param, key, encode){
	    if(param==null) return '';
	    var paramStr = '';
	    var t = typeof (param);
	    if (t == 'string' || t == 'number' || t == 'boolean') {
	      paramStr += '&' + key + '=' + ((encode==null||encode) ? encodeURIComponent(param) : param);
	    } else {
	      for (var i in param) {
	        var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
	        paramStr += Rxports.urlEncode(param[i], k, encode);
	      }
	    }
	    return paramStr;
	},
	/**
	  * 获取随机字符串
	  * @param return
	*/
	random(){
	    return Math.random().toString(36).substr(2) + Date.now().toString(36);
	},
	/**
	  * 对象继承类似jquery extend
	  * @param return {object}
	*/
	merge(target){
	    for (let i = 1, j = arguments.length; i < j; i++) {
	      let source = arguments[i] || {};
	      for (let prop in source) {
	        if (source.hasOwnProperty(prop)) {
	          let value = source[prop];
	          if (value !== undefined) {
	            target[prop] = value;
	          }
	        }
	      }
	    }
	    return target;
	}
};
export default Rxports;


































