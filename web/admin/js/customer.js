var myVar = setInterval(myTimer, 1000); 
function myTimer() {
  	var d = new Date();
  	var t = d.toLocaleTimeString();
  	document.getElementById("time").innerHTML=t;
}
window.onload=function(){
	showThongtinKhachHang(0);
}
function showThongtinKhachHang(index){
	if(localStorage.getItem('user')===null){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	var idkh = "";
	var hotenkh = "";
	var userkh = "";
	var emailkh = "";
	var tinhtrangkh = "";
	var chucnangkh = "";

	if (index < 0) {
		index = 0;
	}

	var sizeUser = 5;
	var totalPage = Math.ceil(userArray.length / sizeUser);
	var start = sizeUser*index;
	var end = start + sizeUser;
	if (end > userArray.length) {
		end = userArray.length;
	}

	for(var i = start+1; i<end;i++){
		idkh = idkh + '<div><h1>'+userArray[i].userId+'</h1></div>';
		hotenkh = hotenkh + '<div><h5>'+userArray[i].fullname+'</h5></div>';
		userkh = userkh + '<div><h5>'+userArray[i].username+'</h5></div>';
		emailkh = emailkh + '<div><h2>'+userArray[i].email+'</h2></div>';
		tinhtrangkh = tinhtrangkh + '<div><h1>'+userArray[i].quyen+'</h1></div>';
		chucnangkh = chucnangkh +  '<div class="chucnang"><button onclick="deleteUser('+userArray[i].userId+')">'+"Xóa"+'</button><button onclick="repairUser('+userArray[i].userId+')">'+"Sửa"+'</button></div>';
	}
	var pagingHtml = '';
	for (var i = 0; i < totalPage; i++) {
		var abc = i + 1;
		pagingHtml += '<div id="phantrangkh" onclick="nextPage('+ i +');">'+abc+'</div>'
	}
	document.getElementById('phantrangkh').innerHTML=pagingHtml;
	document.getElementById('idkh').innerHTML=idkh;
	document.getElementById('hotenkh').innerHTML=hotenkh;
	document.getElementById('userkh').innerHTML=userkh;
	document.getElementById('emailkh').innerHTML=emailkh;
	document.getElementById('tinhtrangkh').innerHTML=tinhtrangkh;
	document.getElementById('chucnangkh').innerHTML=chucnangkh;
}
function nextPage(index){
	showThongtinKhachHang(index);
}
function TatForm(){
	document.getElementById('formsua').style.display='none';
	document.getElementById('bgden').style.display='none';
}
function deleteUser(id){
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(userArray[i].userId==id)
			if(confirm('Bạn có muốn xóa tài khoản này?'))
				userArray.splice(i, 1);
	}
	localStorage.setItem('user',JSON.stringify(userArray));
	showThongtinKhachHang(0)
}

function repairUser(id){
	document.getElementById('formsua').style.display='block';
	document.getElementById('bgden').style.display='block';
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(userArray[i].userId==id) {
			document.getElementById("hoten").value = userArray[i].fullname;
			document.getElementById("usr").value = userArray[i].username;
			document.getElementById("email").value = userArray[i].email;
			document.getElementById("ns").value = userArray[i].ngaysinh;
			document.getElementById("quyen").value = userArray[i].quyen;
			localStorage.setItem('editId',id);
			break;
		}
	}
}

function saveUser(){
	var userLocal = localStorage.getItem("user");
	var editId = localStorage.getItem("editId");
	var userArray = JSON.parse(userLocal);
	var quyen = document.getElementById("quyen").value;
	for(var i=0;i<userArray.length;i++){
		if(userArray[i].userId==editId){
			userArray[i].hoten=userArray[i].fullname;
			userArray[i].user=userArray[i].user;
			userArray[i].email=userArray[i].email;
			userArray[i].ngaysinh=userArray[i].ngaysinh;
			userArray[i].quyen = quyen;
			break;
		}
	}
	localStorage.setItem('user',JSON.stringify(userArray));
	localStorage.setItem('editId',0);
	showThongtinKhachHang(0)
	if(confirm('Bạn có muốn thay đổi quyền tài khoản này?'))
				userArray.splice(i, 1);
	TatForm();
}
function MoSearchAdmin(index){
	if(document.getElementById('khungsearchadmin').style.display == 'block'){
		document.getElementById('khungsearchadmin').style.display = 'none';
		showThongtinKhachHang(0);
		document.getElementById('khungsearchadmin').value ="";
		document.getElementById('chonsearch').style.display = 'none';

	}
	else{
		document.getElementById('khungsearchadmin').style.display = 'block';
		document.getElementById('chonsearch').style.display = 'inline-block';
		if(localStorage.getItem('user')===null){
			return false;
		}
		var userArray = JSON.parse(localStorage.getItem('user'));
		var idkh = "";
		var hotenkh = "";
		var userkh = "";
		var emailkh = "";
		var tinhtrangkh = "";
		var chucnangkh = "";

		if (index < 0) {
			index = 0;
		}

		var sizeUser = 5;
		var totalPage = Math.ceil(userArray.length / sizeUser);
		var start = sizeUser*index;
		var end = start + sizeUser;
		if (end > userArray.length) {
			end = userArray.length;
		}

		for(var i = start+1; i<end;i++){
			idkh = idkh + '<div><h1>'+userArray[i].userId+'</h1></div>';
			hotenkh = hotenkh + '<div><h5>'+userArray[i].fullname+'</h5></div>';
			userkh = userkh + '<div><h5>'+userArray[i].username+'</h5></div>';
			emailkh = emailkh + '<div><h5>'+userArray[i].email+'</h5></div>';
			tinhtrangkh = tinhtrangkh + '<div><h5>'+userArray[i].quyen+'</h5></div>';
			chucnangkh = chucnangkh +  '<div class="chucnang"><button onclick="deleteUser('+userArray[i].userId+')">'+"Xóa"+'</button><button onclick="repairUser('+userArray[i].userId+')">'+"Sửa"+'</button></div>';
		}
		var pagingHtml = '';
		for (var i = 0; i < totalPage; i++) {
			var abc = i + 1;
			pagingHtml += '<div id="phantrangkh" onclick="nextPage('+ i +');">'+abc+'</div>'
		}
		document.getElementById('phantrangkh').innerHTML='';
		document.getElementById('idkh').innerHTML='';
		document.getElementById('hotenkh').innerHTML='';
		document.getElementById('userkh').innerHTML='';
		document.getElementById('emailkh').innerHTML='';
		document.getElementById('tinhtrangkh').innerHTML='';
		document.getElementById('chucnangkh').innerHTML='';
	}
}

function searching(){
	var productsearch = document.getElementById('khungsearchadmin').value.toLowerCase();
	var userArray = JSON.parse(localStorage.getItem('user'));
	var idkh = "";
	var hotenkh = "";
	var userkh = "";
	var emailkh = "";
	var tinhtrangkh = "";
	var chucnangkh = "";
	var chonsearch = document.getElementById("chonsearch").value;
	var kt=0;
	for(var i = 1; i<userArray.length; i++){
		if(chonsearch == "tendn"){
			if (userArray[i].username.toLowerCase().search(productsearch) != -1  && productsearch != '') {
					idkh = idkh + '<div><h1>'+userArray[i].userId+'</h1></div>';
				hotenkh = hotenkh + '<div><h5>'+userArray[i].fullname+'</h5></div>';
				userkh = userkh + '<div><h5>'+userArray[i].username+'</h5></div>';
				emailkh = emailkh + '<div><h5>'+userArray[i].email+'</h5></div>';
				tinhtrangkh = tinhtrangkh + '<div><h5>'+userArray[i].quyen+'</h5></div>';
				chucnangkh = chucnangkh +  '<div class="chucnang"><button onclick="deleteUser('+userArray[i].userId+')">'+"Xóa"+'</button><button onclick="repairUser('+userArray[i].userId+')">'+"Sửa"+'</button></div>';
				kt++;
			}
		}
		
		if(chonsearch == "id"){	
			if (userArray[i].userId == productsearch  && productsearch != '') {
				idkh = idkh + '<div><h1>'+userArray[i].userId+'</h1></div>';
				hotenkh = hotenkh + '<div><h5>'+userArray[i].fullname+'</h5></div>';
				userkh = userkh + '<div><h5>'+userArray[i].username+'</h5></div>';
				emailkh = emailkh + '<div><h5>'+userArray[i].email+'</h5></div>';
				tinhtrangkh = tinhtrangkh + '<div><h5>'+userArray[i].quyen+'</h5></div>';
				chucnangkh = chucnangkh +  '<div class="chucnang"><button onclick="deleteUser('+userArray[i].userId+')">'+"Xóa"+'</button><button onclick="repairUser('+userArray[i].userId+')">'+"Sửa"+'</button></div>';
				kt++;

			}
		}
		if(chonsearch == "hoten"){	
			if (userArray[i].fullname.toLowerCase().search(productsearch) != -1  && productsearch != '') {
				idkh = idkh + '<div><h1>'+userArray[i].userId+'</h1></div>';
				hotenkh = hotenkh + '<div><h5>'+userArray[i].fullname+'</h5></div>';
				userkh = userkh + '<div><h5>'+userArray[i].username+'</h5></div>';
				emailkh = emailkh + '<div><h5>'+userArray[i].email+'</h5></div>';
				tinhtrangkh = tinhtrangkh + '<div><h5>'+userArray[i].quyen+'</h5></div>';
				chucnangkh = chucnangkh +  '<div class="chucnang"><button onclick="deleteUser('+userArray[i].userId+')">'+"Xóa"+'</button><button onclick="repairUser('+userArray[i].userId+')">'+"Sửa"+'</button></div>';
				kt++;

			}
		}
		if(chonsearch == "email"){
			if (userArray[i].email.toLowerCase().search(productsearch) != -1  && productsearch != '') {
				idkh = idkh + '<div><h1>'+userArray[i].userId+'</h1></div>';
				hotenkh = hotenkh + '<div><h5>'+userArray[i].fullname+'</h5></div>';
				userkh = userkh + '<div><h5>'+userArray[i].username+'</h5></div>';
				emailkh = emailkh + '<div><h5>'+userArray[i].email+'</h5></div>';
				tinhtrangkh = tinhtrangkh + '<div><h5>'+userArray[i].quyen+'</h5></div>';
				chucnangkh = chucnangkh +  '<div class="chucnang"><button onclick="deleteUser('+userArray[i].userId+')">'+"Xóa"+'</button><button onclick="repairUser('+userArray[i].userId+')">'+"Sửa"+'</button></div>';
				kt++

			}
		}
		if(chonsearch == "quyen"){
			if (userArray[i].quyen.toLowerCase().search(productsearch) != -1  && productsearch != '') {
				idkh = idkh + '<div><h1>'+userArray[i].userId+'</h1></div>';
				hotenkh = hotenkh + '<div><h5>'+userArray[i].fullname+'</h5></div>';
				userkh = userkh + '<div><h5>'+userArray[i].username+'</h5></div>';
				emailkh = emailkh + '<div><h5>'+userArray[i].email+'</h5></div>';
				tinhtrangkh = tinhtrangkh + '<div><h5>'+userArray[i].quyen+'</h5></div>';
				chucnangkh = chucnangkh +  '<div class="chucnang"><button onclick="deleteUser('+userArray[i].userId+')">'+"Xóa"+'</button><button onclick="repairUser('+userArray[i].userId+')">'+"Sửa"+'</button></div>';
				kt++

			}
		}
		if(chonsearch == "all"){
			if (userArray[i].userId == productsearch || userArray[i].username.toLowerCase().search(productsearch) != -1||userArray[i].fullname.toLowerCase().search(productsearch) != -1 || userArray[i].email.toLowerCase().search(productsearch) != -1 || userArray[i].quyen.toLowerCase().search(productsearch) != -1  && productsearch != '') {
				idkh = idkh + '<div><h1>'+userArray[i].userId+'</h1></div>';
				hotenkh = hotenkh + '<div><h5>'+userArray[i].fullname+'</h5></div>';
				userkh = userkh + '<div><h5>'+userArray[i].username+'</h5></div>';
				emailkh = emailkh + '<div><h5>'+userArray[i].email+'</h5></div>';
				tinhtrangkh = tinhtrangkh + '<div><h5>'+userArray[i].quyen+'</h5></div>';
				chucnangkh = chucnangkh +  '<div class="chucnang"><button onclick="deleteUser('+userArray[i].userId+')">'+"Xóa"+'</button><button onclick="repairUser('+userArray[i].userId+')">'+"Sửa"+'</button></div>';
				kt++
			}
		}

		if(kt==6)
			break;
			document.getElementById('idkh').innerHTML=idkh;
			document.getElementById('hotenkh').innerHTML=hotenkh;
			document.getElementById('userkh').innerHTML=userkh;
			document.getElementById('emailkh').innerHTML=emailkh;
			document.getElementById('tinhtrangkh').innerHTML=tinhtrangkh;
			document.getElementById('chucnangkh').innerHTML=chucnangkh;
		}
	}
