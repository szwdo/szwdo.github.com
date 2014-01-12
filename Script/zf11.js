<!-- 
// 跳窗脚本
var win = null;
function LyWindow(mypage,myname,w,h,scroll,resiza){
LeftPosition = (screen.width) ? (screen.width-w)/2 : 0;
TopPosition = (screen.height) ? (screen.height-h)/2 : 0;
settings =
'height='+h+',width='+w+',top='+TopPosition+',left='+LeftPosition+',scrollbars='+scroll+',resizable='+resiza+'resizable'
win = window.open(mypage,myname,settings)
}
function newpage(htmlurl) {
var newwin=window.open(htmlurl,"newWin","toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,top=150,left=200,width=400,height=300");
newwin.focus();
return false;
}
// 判断连接函数
function link()
			{
			if (form.fl_name.value=="")
			{	alert("请填写网站名称");
				form.fl_name.focus();
				return false;
			}

			if (form.fl_url.value=="http://")
			{	alert("请填写网站地址");
				form.fl_url.focus();
				return false;
			}
                        if (form.fl_name.value.length>10)
			{	alert("网站名称不可以超过6个字");
				form.fl_name.focus();
				return false;
			}
                        alert("申请提示：\n\n⒈你已经做好了本站连接。\n\n⒉你的网站内容没有非法内容。 \n\n⒊你的站点具有一定的访问量。\n\n如果达不到以上三点你的连接不会被通过！");
                        form.submit.disabled=true;
			return true;
			}
function vote() 
{
win = window.open("","vote","width=600,height=350,resizable=no,scrollbars=no,status=no,toolbar=no,menubar=no,location=no")
} 
// 字体大小
function ContentSize(size)
{
var obj=document.getElementById("size");obj.style.fontSize=size+"px";
}
// 复制文本
function copyText(obj) 
{
var rng = document.body.createTextRange();rng.moveToElementText(obj);rng.scrollIntoView();rng.select();rng.execCommand("Copy");rng.collapse(false);
}
// 复制网址
function copyUrl(obj) 
{
var rng = document.body.createTextRange();rng.moveToElementText(obj);rng.scrollIntoView();rng.select();rng.execCommand("Copy");rng.collapse(false);
alert("复制成功，请把此网址在你喜欢的论坛或QQ里面发给你的朋友！");
}
// 判断评论函数
function checkRemark()
			{
			var form=document.getElementById("form");
			if (form.review.value=="")
			{	alert("请填写评论内容");
				form.review.focus();
				return false;
			}
			if (form.reviewemail.value=="")
			{	alert("请填写你的邮箱");
				form.reviewemail.focus();
				return false;
			}
			if (form.reviewname.value=="")
			{	alert("请填写姓名");
				form.reviewname.focus();
				return false;
			}
			if (form.review.value.length>255)
			{	alert("评论内容不可以超过255字");
				form.review.focus();
				return false;
			}
			if (form.reviewemail.value.length>40)
			{	alert("邮箱不可超过40个字");
				form.reviewemail.focus();
				return false;
			}
			if (form.reviewname.value.length>10)
			{	alert("姓名不可以超过10个字");
				form.reviewname.focus();
				return false;
			}
			form.submit.disabled=true;
			return true;
			}
			function showLen(obj)
			{
				document.getElementById("reviewLen").value=obj.value.length;
			}
// 判断留言函数
function checkBook()
			{
			var form=document.getElementById("form");
			if (form.words.value=="")
			{	alert("请填写留言内容");
				form.words.focus();
				return false;
			}
                        if (form.words.value.length>255)
			{	alert("留言内容不可以超过255个汉字");
				form.words.focus();
				return false;
			}
			if (form.name.value=="")
			{	alert("请填写姓名");
				form.name.focus();
				return false;
			}
			if (form.name.value.length>10)
			{	alert("姓名不可以超过10个字");
				form.name.focus();
				return false;
			}
                        if (form.words.value.length<4)
			{	alert("留言内容不可以低于2个汉字");
				form.words.focus();
				return false;
			}
			if (form.VerifyCode.value=="")
			{	alert("请输入正确的认证码");
				form.VerifyCode.focus();
				return false;
			}
			form.submit.disabled=true;
			return true;
			}
			function bookshowLen(obj)
			{
				document.getElementById("wordsLen").value=obj.value.length;
			}
// 图片缩放脚本
var flag=true; 
function DrawImage(ImgD){ 
    var image=new Image(); 
    image.src=ImgD.src; 
    if(image.width>0 && image.height>0){ 
        flag=true; 
        if(image.width>=700){ 
            ImgD.width=700; 
            ImgD.height=(image.height*700)/image.width; 
        }else{ 
            ImgD.width=image.width; 
            ImgD.height=image.height; 
        }  
    } 
} 
// 图片缩放脚本
var flag=true; 
function DownImage(ImgD){ 
    var image=new Image(); 
    image.src=ImgD.src; 
    if(image.width>0 && image.height>0){ 
        flag=true; 
        if(image.width>=300){ 
            ImgD.width=300; 
            ImgD.height=(image.height*300)/image.width; 
        }else{ 
            ImgD.width=image.width; 
            ImgD.height=image.height; 
        }  
    } 
} 
function cgimg(o){
var zoom=parseInt(o.style.zoom, 10)||100;zoom+=event.wheelDelta/12;if (zoom>0) o.style.zoom=zoom+'%';
return false;
}
// 滚动脚本
var rollspeed=30
var myInter;
function MarqueeV(){
	var ooRollV=document.getElementById("oRollV");
	var ooRollV1=document.getElementById("oRollV1");
	var ooRollV2=document.getElementById("oRollV2");
	if(ooRollV2.offsetTop-ooRollV.scrollTop<=0) {
		ooRollV.scrollTop-=ooRollV1.offsetHeight;
	}else{
		ooRollV.scrollTop++;
	}
}
function StartRollV() {
	var ooRollV=document.getElementById("oRollV");
	var ooRollV1=document.getElementById("oRollV1");
	var ooRollV2=document.getElementById("oRollV2");
	if (ooRollV) {
		if (parseInt(ooRollV.style.height)>=ooRollV2.offsetTop) {
			ooRollV.style.height = ooRollV2.offsetTop;
			return;
		}
		ooRollV2.innerHTML=ooRollV1.innerHTML;
		myInter=setInterval(MarqueeV,rollspeed);
		ooRollV.onmouseover=function() {clearInterval(myInter)};
		ooRollV.onmouseout=function() {myInter=setInterval(MarqueeV,rollspeed)};
	}
}
function MarqueeH(){
	var ooRollH=document.getElementById("oRollH");
	var ooRollH1=document.getElementById("oRollH1");
	var ooRollH2=document.getElementById("oRollH2");
	if(ooRollH2.offsetLeft-ooRollH.scrollLeft<=0) {
		ooRollH.scrollLeft-=ooRollH1.offsetWidth;
	}else{
		ooRollH.scrollLeft++;
	}
}
function StartRollH() {
	var ooRollH=document.getElementById("oRollH");
	var ooRollH1=document.getElementById("oRollH1");
	var ooRollH2=document.getElementById("oRollH2");
	if (ooRollH) {
		if (parseInt(ooRollH.style.width)>=ooRollH2.offsetLeft) {
			oRollH.style.width = oRollH2.offsetLeft;
			return;
		}
		ooRollH2.innerHTML=ooRollH1.innerHTML;
		myInter=setInterval(MarqueeH,rollspeed);
		ooRollH.onmouseover=function() {clearInterval(myInter)};
		ooRollH.onmouseout=function() {myInter=setInterval(MarqueeH,rollspeed)};
	}
}
// 图片脚本--------------------------
function zf11Pic(img,url,alt,blank)
{
	if (blank==null)
		blank=false;
	with(document){
		write("<table class='zf11Pic'>");
		write("<tr><td>");
		write("<a href='");
		write(url);
		if (blank)
			write("' >"); // 添加onClick='return newpage(this.href);'为跳窗脚本
		else
			write("' target='_blank'>");
		write("<img width='150' height='120' src='"); //  在width='150'后面添加height='高度'为图片固定大小
		write(img);
		write("' title='");
		write(alt);
		write("' ");
		write("></a></td></tr></table>");
	}
}
// FLASH动画脚本--------------------------
function lanyuflash(file, w, h)
{
		document.write("<div style=\"padding:5px\"><object classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" codebase=\"http://active.macromedia.com/flash2/cabs/swflash.cab#version=4,0,0,0\" width=\"");
		document.write(w);
		document.write("\" height=\"");
		document.write(h);
		document.write("\"><param name=\"movie\" value=\"");
		document.write(file);
		document.write("\"> <param name=\"quality\" value=\"high\"><embed src=\"");
		document.write(file);
		document.write("\" loop=\"false\" menu=\"false\" quality=\"high\" width=\"");
		document.write(w);
		document.write("\" height=\"");
		document.write(h);
		document.write("\" type=\"application/x-shockwave-flash\" pluginspage=\"http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash\"></embed></object></div>");
}
// 小表上--------------------------
function lanyutabletop(size,m)
{
	with(document){
		write("<DIV class=lframe><TABLE cellSpacing=0 cellPadding=0 width='100%'><TBODY><TR><TD class='tl'></TD><TD class='tm'><SPAN class='tt'>");
		write(size);
		write("</SPAN></TD><TD class='tr'></TD></TD></TR></TBODY></TABLE><TABLE cellSpacing=0 cellPadding=0 width='95%'><TBODY><TR><TD class='");
                write(m);
		write("'></TD><TD class='mm'>");
	}
}
// 小表下--------------------------
function lanyutablebottom(m)
{

	with(document){
		write("</TD><TD class='");
                write(m);
                write("'></TD></TR></TBODY></TABLE><table width='95%' cellspacing='0' cellpadding='0'><tr><td bgcolor='#dddddd' height='1'></td></tr><tr><td height='5'></td></tr></table></div>");
	}
}
// 大表--------------------------
function lanyutable(size)
{
	with(document){
		write("<TABLE cellSpacing=0 cellPadding=0 width='100%'><TBODY><TR><TD class=tl></TD><TD class=tm><TABLE cellSpacing=0 cellPadding=0 width='100%'><TBODY><TR><TD><SPAN class=tt>");
		write(size);
		write("</SPAN></TD></TR></TBODY></TABLE></TD><TD class=tr></TD></TR></TBODY></TABLE>");
	}
}



    //双击滚屏
    var currentpos,timer;
    function initialize()
    { 
    timer=setInterval("scrollwindow()",30); 
    } 
    function sc(){
    clearInterval(timer);
    }
    function scrollwindow()
    {
    currentpos=document.body.scrollTop;
    window.scroll(0,++currentpos);
    if (currentpos != document.body.scrollTop)
    sc();
    } 
    document.onmousedown=sc
    document.ondblclick=initialize




    //检测登陆时的用户名和密码是否有写
    function CheckForm()
    {
	if(document.zf11User_Login.UserName.value=="")
	{
		alert("请输入用户名！");
		document.zf11User_Login.UserName.focus();
		return false;
	}
	if(document.zf11User_Login.UserPassword.value == "")
	{
		alert("请输入密码！");
		document.zf11User_Login.UserPassword.focus();
		return false;
	}
    }






    //首页大图片随机转换
    bg = new Array(0); //设定图片数量，如果图片数为3，这个参数就设为2，依次类推
    //bg[0] = 'images/zf11_topbanner1.gif' //显示的图片路径，可用http://
    //bg[1] = 'images/zf11_topbanner2.gif'
    //bg[2] = 'images/zf11_topbanner3.gif'
    bg[0] = 'images/zf11_topbanner4.gif'
    index = Math.floor(Math.random() * bg.length);
    document.write("<style>#huerreson{background-image:url("+bg[index]+")}</style>");






    function zf11_time()
    {
    tmpDate = new Date();
    date = tmpDate.getDate();
    month= tmpDate.getMonth() + 1;
    year= tmpDate.getYear();
    document.write(year);
    document.write("年");
    document.write(month);
    document.write("月");
    document.write(date);
    document.write("日 ");
    myArray=new Array(6);
    myArray[0]="星期日"
    myArray[1]="星期一"
    myArray[2]="星期二"
    myArray[3]="星期三"
    myArray[4]="星期四"
    myArray[5]="星期五"
    myArray[6]="星期六"
    weekday=tmpDate.getDay();
    if (weekday==0 | weekday==6)
    {
    document.write(myArray[weekday])
    }
    else
    {
    document.write(myArray[weekday])
    }
    };


function bookmarksite(name,page){
	if (document.all) {
	window.external.addFavorite('http://'+window.location.host+"/"+page,name);
	} else if (window.sidebar) {
	window.sidebar.addPanel(name, 'http://'+window.location.host+"/"+page, "");
	}
}
