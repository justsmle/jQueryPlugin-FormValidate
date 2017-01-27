# jQueryPlugin-FormValidate
表单验证
 js引入  
  <script src="js/jquery-1.12.2.min.js"></script>
	<script src="js/validate.js"></script>
	<!-- 调用validate函数 -->
	<script type="text/javascript">
		$(function(){
			$('#validateForm').validate({
				checkUser    : /^[\u4E00-\u9FA5]{2,4}$/,//用户名判断格式，2-4个中文
				checkPsw     : /^[A-Za-z0-9_]{6,16}$/,//密码判断格式，默认数字，字母，下划线组成6-16个
				
				userFocusMsg : "请输入用户名",//用户名获得焦点时提示语
				userEmptyMsg : "用户名不能为空！",//用户名空提示语
				userWrongMsg : "用户名2-4个汉字",//用户名格式错误提示语
				
				pswFocusMsg  : "请输入密码",//密码获得焦点时提示语
				pswEmptyMsg  : "密码不能为空！",//密码空提示语
				pswWrongMsg  : "密码长度6-16位",//密码格式错误提示语
				
				pswCheckMsg  : "密码必须相同" //两次输入密码不通顺提示语
			})
		})
    
 html结构  input添加name='user','psw','psw1','submit'
