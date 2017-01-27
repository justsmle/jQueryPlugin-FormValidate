(function($){
	$.fn.extend({
		'validate' : function(options){
			//合并defaults options
			var options     = $.extend({},defaults,options);
			//获取表单 用户名 和 密码 提交
			var $form       = $(this);
			var $user       = $(this).find('input[name=user]');
			var $psw        = $(this).find('input[name=password]');
			var $psw1       = $(this).find('input[name=password1]');
			var $submit     = $(this).find('input[name=submit]');
			//设置提示语
			var $userMsg    = $('<span></span>').css({'fontSize': '10px','marginLeft':'10px'});
			var $pswMsg     = $('<span></span>').css({'fontSize': '10px','marginLeft':'10px'});
			var $pswMsg1    = $('<span></span>').css({'fontSize': '10px','marginLeft':'10px'});
			var $userSucess = $('<img src="./img/sucess.png">').css({'marginLeft':'10px'});
			var $pswSucess  = $('<img src="./img/sucess.png">').css({'marginLeft':'10px'});
			var $pswSucess1 = $('<img src="./img/sucess.png">').css({'marginLeft':'10px'});
			//获取原始input框的边框颜色
			var borderClr = $user.css('border-color');
			// var bgColr = $user.css('background-color');
			//用户获得焦点
			$user.focus(function(){
				$(this).after($userMsg.html(options.userFocusMsg).css({'color': '#ccc'})).css({'borderColor': borderClr});
				$userSucess.remove();
			})
			//用户失去焦点
			$user.blur(function(){
				//空值判断
				if ( !$user.val().length ) {
					$(this).after($userMsg.html(options.userEmptyMsg).css({'color': '#FF0000'})).css({'borderColor':'#FF0000'});
					return false;
				}
				//判断格式是否正确
				else if ( !options.checkUser.test($user.val()) ) {
					$(this).after($userMsg.html(options.userWrongMsg).css({'color': '#FF0000'})).css({'borderColor':'#FF0000'});
					return false;
				}
				//填写正确
				else{
					$(this).after($userSucess).css({'borderColor': borderClr});
					$userMsg.remove();
					return true;
				}
			})
			//密码获得焦点
			$psw.focus(function(){
				$(this).after($pswMsg.html(options.pswFocusMsg).css({'color': '#ccc'})).css({'borderColor': borderClr});
				$pswSucess.remove();
			})
			//密码失去焦点
			$psw.blur(function(){
				//空值判断
				if ( !$psw.val().length ) {
					$(this).after($pswMsg.html(options.pswEmptyMsg).css({'color': '#FF0000'})).css({'borderColor':'#FF0000'});
					return false;
				}
				//判断格式是否正确
				else if ( !options.checkPsw.test($psw.val()) ) {
					$(this).after($pswMsg.html(options.pswWrongMsg).css({'color': '#FF0000'})).css({'borderColor':'#FF0000'});
					return false;
				}
				//填写正确
				else{
					$(this).after($pswSucess).css({'borderColor': borderClr});
					$pswMsg.remove();
					return true;
				}
			})
			//确认密码获得焦点
			$psw1.focus(function(){
				$(this).after($pswMsg1.html(options.pswFocusMsg).css({'color':'#ccc'})).css({'borderColor': borderClr});
				$pswSucess1.remove();
			})
			//判断再次输入的密码与之前的密码是否一致
			$psw1.blur(function(){
				//空值判断
				if ( !$psw1.val().length ) {
					$(this).after($pswMsg1.html(options.pswEmptyMsg).css({'color': '#FF0000'})).css({'borderColor':'#FF0000'});
					return false;
				}
				//判断格式是否正确
				else if ( !options.checkPsw.test($psw1.val()) ) {
					$(this).after($pswMsg1.html(options.pswWrongMsg).css({'color': '#FF0000'})).css({'borderColor':'#FF0000'});
					return false;
				}
				//判断是否相等
				else if ( !($psw.val() === $psw1.val()) ) {
					$(this).after($pswMsg1.html(options.pswCheckMsg).css({'color': '#FF0000'})).css({'borderColor':'#FF0000'});
					return false;
				}
				//填写正确
				else{
					$(this).after($pswSucess1).css({'borderColor': borderClr});
					$pswMsg1.remove();
					return true;
				}
			})
			//提交验证
			$submit.click(function(){
				if ( options.checkUser.test($user.val()) & options.checkPsw.test($psw.val()) & ($psw.val()===$psw1.val()) ) {
					return true;
				}
				else{
					$user.blur();
					$psw.blur();
					$psw1.blur();
					return false;
				}
			})
		}
	})
	//设置默认参数
	var defaults={
		checkUser    : /^[\u4E00-\u9FA5]{2,4}$/,//用户名判断格式，2-4个中文
		checkPsw     : /^[A-Za-z0-9_]{6,16}$/,//密码判断格式，默认数字，字母，下划线组成6-16个
		
		userFocusMsg : "请输入用户名",//用户名获得焦点时提示语
		userEmptyMsg : "用户名不能为空！",//用户名空提示语
		userWrongMsg : "用户名2-4个汉字",//用户名格式错误提示语
		
		pswFocusMsg  : "请输入密码",//密码获得焦点时提示语
		pswEmptyMsg  : "密码不能为空！",//密码空提示语
		pswWrongMsg  : "密码长度6-16位",//密码格式错误提示语
		
		pswCheckMsg  : "密码必须相同" //两次输入密码不通顺提示语
	}
})(jQuery);