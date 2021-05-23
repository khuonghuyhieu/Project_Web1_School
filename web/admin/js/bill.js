var myVar = setInterval(myTimer, 1000); 
function myTimer() {
  	var d = new Date();
  	var t = d.toLocaleTimeString();
  	document.getElementById("time").innerHTML=t;
}
function quydoi(x) {
  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
window.onload=function(){
	showThongtinHoaDon(0);
}
function showThongtinHoaDon(index){
	if(localStorage.getItem('bill')===null){
		return false;
	}
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var bill = "";
	var khachhang = "";
	var ngaydathang = "";
	var tongtien = "";
	var tinhtrang = "";
	var chitiet = "";

	if (index < 0) {
		index = 0;
	}

	var sizeBill = 8;
	var totalPage = Math.ceil(billArray.length / sizeBill);
	var start = sizeBill*index;
	var end = start + sizeBill;
	if (end > billArray.length) {
		end = billArray.length;
	}

	for(var i = start; i<end;i++){
		bill = bill + '<div><h6>'+billArray[i].IDbill+'</h6></div>';
		khachhang= khachhang + '<div><h6>'+billArray[i].userId+'</h6></div>';
		ngaydathang = ngaydathang + '<div><h5>'+billArray[i].date+'</h5></div>';
		tongtien = tongtien + '<div><h5>'+quydoi(billArray[i].totalprice)+'</h5></div>';
		if(billArray[i].status=='Chưa xử lý')
			tinhtrang = tinhtrang + '<div><h6 style="color: red">'+"Chưa xử lý"+'</h6></div>';
		else
			tinhtrang = tinhtrang + '<div><h6 style="color: green">'+"Đã xử lý"+'</h6></div>';
		chitiet = chitiet + '<div class="chucnangbill"><button onclick="showBill('+billArray[i].IDbill+')">'+"Chi tiết"+'</button></div>';
	}
	var pagingHtml = '';
	for (var i = 0; i < totalPage; i++) {
		var abc = i + 1;
		pagingHtml += '<div id="phantrang" onclick="nextPage('+ i +');">'+abc+'</div>'
	}
	document.getElementById('phantrang').innerHTML=pagingHtml;
	document.getElementById('idbill').innerHTML=bill;
	document.getElementById('idkhachhang').innerHTML=khachhang;
	document.getElementById('ngaydathang').innerHTML=ngaydathang;
	document.getElementById('tongtien').innerHTML=tongtien;
	document.getElementById('tinhtrangbill').innerHTML=tinhtrang;
	document.getElementById('chitietbill').innerHTML=chitiet;
}
function nextPage(index){
	showThongtinHoaDon(index);
}
function showBill(id){
	document.getElementById('formchitiet').style.display="block";
	document.getElementById('bgden').style.display="block";
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var userArray = JSON.parse(localStorage.getItem('user'));
	// var user = "";
	// var hoten = "";
	// var email = "";
	// var ngaysinh = "";
	// var hotennguoinhan = "";
	// var diachi = "";
	// var sdt = "";
	for(var i=0;i<billArray.length;i++){
		if(billArray[i].IDbill==id){
			var a=billArray[i].userId;
			var b=quydoi(billArray[i].totalprice);
			document.getElementById('hotennguoinhan').innerHTML = billArray[i].nguoinhan;
			document.getElementById('diachinhan').innerHTML = billArray[i].diachi;
			document.getElementById('sodienthoainhan').innerHTML = billArray[i].sdt;
			document.getElementById('ghichu').innerHTML = billArray[i].ghichu;
			document.getElementById('cuahang').innerHTML = billArray[i].chinhanh;
			document.getElementById('hinhthuc').innerHTML = billArray[i].pay;
			document.getElementById('ngaydat').innerHTML = billArray[i].date;
			document.getElementById('totalprice').innerHTML = b;
			document.getElementById('info').innerHTML = billArray[i].info;
			localStorage.setItem('editId',id);
			break;
		}
	}
	for(var i=0;i<userArray.length;i++){
		if(userArray[i].userId==a){
			document.getElementById('user').innerHTML = userArray[i].username;
			document.getElementById('hoten').innerHTML = userArray[i].fullname;
			document.getElementById('email').innerHTML = userArray[i].email;
			localStorage.setItem('editId',id);
			break;
		}
	}
}
function changeTinhtrang(){
	var editId = localStorage.getItem("editId");
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var tinhtrang=document.getElementById('tinhtrang').value;
	for(var i=0;i<billArray.length;i++){
		if(billArray[i].IDbill==editId){
			billArray[i].status=tinhtrang;
			break;
		}
	}
	localStorage.setItem('bill',JSON.stringify(billArray));
	localStorage.setItem('editId',0);
	showThongtinHoaDon(0);
	document.getElementById('formchitiet').style.display="none";
	document.getElementById('bgden').style.display="none";
	if(comfirm("Bạn đã thay đổi tình trạng đơn hàng"))
		billArray.splice(i, 1);
}
function MoSearchAdmin(index){
	if(document.getElementById('khungsearchadmin').style.display == 'block'){
		document.getElementById('khungsearchadmin').style.display = 'none';
		showThongtinHoaDon(0);
		document.getElementById('khungsearchadmin').value ="";
		document.getElementById('chonsearch').style.display = 'none';

	}
	else{
		document.getElementById('khungsearchadmin').style.display = 'block';
		document.getElementById('chonsearch').style.display = 'inline-block';
		if(localStorage.getItem('bill')===null){
			return false;
		}
		var productArray = JSON.parse(localStorage.getItem('bill'));
		var billArray = JSON.parse(localStorage.getItem('bill'));
		var bill = "";
		var khachhang = "";
		var ngaydathang = "";
		var tongtien = "";
		var tinhtrang = "";
		var chitiet = "";

		if (index < 0) {
			index = 0;
		}

		var sizeBill = 10;
		var totalPage = Math.ceil(billArray.length / sizeBill);
		var start = sizeBill*index;
		var end = start + sizeBill;
		if (end > billArray.length) {
			end = billArray.length;
		}

		for(var i = start; i<end;i++){
			bill = bill + '<div><h6>'+billArray[i].IDbill+'</h6></div>';
			khachhang= khachhang + '<div><h6>'+billArray[i].userId+'</h6></div>';
			ngaydathang = ngaydathang + '<div><h5>'+billArray[i].date+'</h5></div>';
			tongtien = tongtien + '<div><h5>'+quydoi(billArray[i].totalprice)+'</h5></div>';
			if(billArray[i].status=='Chưa xử lý')
				tinhtrang = tinhtrang + '<div><h6 style="color: red">'+"Chưa xử lý"+'</h6></div>';
			else
				tinhtrang = tinhtrang + '<div><h6 style="color: green">'+"Đã xử lý"+'</h6></div>';
			chitiet = chitiet + '<div class="chucnangbill"><button onclick="showBill('+billArray[i].IDbill+')">'+"Xem chi tiết"+'</button></div>';
		}
		var pagingHtml = '';
		for (var i = 0; i < totalPage; i++) {
			var abc = i + 1;
			pagingHtml += '<div id="phantrang" onclick="nextPage('+ i +');">'+abc+'</div>'
		}
		document.getElementById('phantrang').innerHTML='';
		document.getElementById('idbill').innerHTML='';
		document.getElementById('idkhachhang').innerHTML='';
		document.getElementById('ngaydathang').innerHTML='';
		document.getElementById('tongtien').innerHTML='';
		document.getElementById('tinhtrangbill').innerHTML='';
		document.getElementById('chitietbill').innerHTML='';

		}	
}
function searching(){
	var productsearch = document.getElementById('khungsearchadmin').value.toLowerCase();
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var bill = "";
	var khachhang = "";
	var ngaydathang = "";
	var tongtien = "";
	var tinhtrang = "";
	var chitiet = "";
	var kt=0;
	var chonsearch = document.getElementById("chonsearch").value;
	for(var i = 0; i<billArray.length; i++){
		if(chonsearch == "idbill"){
			if (billArray[i].IDbill==productsearch  && productsearch != '') {
					bill = bill + '<div><h6>'+billArray[i].IDbill+'</h6></div>';
					khachhang= khachhang + '<div><h6>'+billArray[i].userId+'</h6></div>';
					ngaydathang = ngaydathang + '<div><h5>'+billArray[i].date+'</h5></div>';
					tongtien = tongtien + '<div><h5>'+quydoi(billArray[i].totalprice)+'</h5></div>';
					if(billArray[i].status=='Chưa xử lý')
						tinhtrang = tinhtrang + '<div><h6 style="color: red">'+"Chưa xử lý"+'</h6></div>';
					else
						tinhtrang = tinhtrang + '<div><h6 style="color: green">'+"Đã xử lý"+'</h6></div>';
					chitiet = chitiet + '<div class="chucnangbill"><button onclick="showBill('+billArray[i].IDbill+')">'+"Xem chi tiết"+'</button></div>';
				
			}
		}
		
		if(chonsearch == "iduser"){
			if (billArray[i].userId ==productsearch  && productsearch != '') {
					bill = bill + '<div><h6>'+billArray[i].IDbill+'</h6></div>';
					khachhang= khachhang + '<div><h6>'+billArray[i].userId+'</h6></div>';
					ngaydathang = ngaydathang + '<div><h5>'+billArray[i].date+'</h5></div>';
					tongtien = tongtien + '<div><h5>'+quydoi(billArray[i].totalprice)+'</h5></div>';
					if(billArray[i].status=='Chưa xử lý')
						tinhtrang = tinhtrang + '<div><h6 style="color: red">'+"Chưa xử lý"+'</h6></div>';
					else
						tinhtrang = tinhtrang + '<div><h6 style="color: green">'+"Đã xử lý"+'</h6></div>';
					chitiet = chitiet + '<div class="chucnangbill"><button onclick="showBill('+billArray[i].IDbill+')">'+"Xem chi tiết"+'</button></div>';
					kt++;
			}
		}

		if(chonsearch == "tinhtrang"){
			if (billArray[i].status.toLowerCase().search(productsearch) != -1  && productsearch != '') {
					bill = bill + '<div><h6>'+billArray[i].IDbill+'</h6></div>';
					khachhang= khachhang + '<div><h6>'+billArray[i].userId+'</h6></div>';
					ngaydathang = ngaydathang + '<div><h5>'+billArray[i].date+'</h5></div>';
					tongtien = tongtien + '<div><h5>'+quydoi(billArray[i].totalprice)+'</h5></div>';
					if(billArray[i].status=='Chưa xử lý')
						tinhtrang = tinhtrang + '<div><h6 style="color: red">'+"Chưa xử lý"+'</h6></div>';
					else
						tinhtrang = tinhtrang + '<div><h6 style="color: green">'+"Đã xử lý"+'</h6></div>';
					chitiet = chitiet + '<div class="chucnangbill"><button onclick="showBill('+billArray[i].IDbill+')">'+"Xem chi tiết"+'</button></div>';
					kt++;
			}
		}
		if(chonsearch == "tongtien"){
			if (billArray[i].totalprice <= productsearch  && productsearch != '') {
					bill = bill + '<div><h6>'+billArray[i].IDbill+'</h6></div>';
					khachhang= khachhang + '<div><h6>'+billArray[i].userId+'</h6></div>';
					ngaydathang = ngaydathang + '<div><h5>'+billArray[i].date+'</h5></div>';
					tongtien = tongtien + '<div><h5>'+quydoi(billArray[i].totalprice)+'</h5></div>';
					if(billArray[i].status=='Chưa xử lý')
						tinhtrang = tinhtrang + '<div><h6 style="color: red">'+"Chưa xử lý"+'</h6></div>';
					else
						tinhtrang = tinhtrang + '<div><h6 style="color: green">'+"Đã xử lý"+'</h6></div>';
					chitiet = chitiet + '<div class="chucnangbill"><button onclick="showBill('+billArray[i].IDbill+')">'+"Xem chi tiết"+'</button></div>';
					kt++;
			}
		}
		if(chonsearch == "ngaydat"){
			if (billArray[i].date.toLowerCase().search(productsearch) != -1  && productsearch != '') {
					bill = bill + '<div><h6>'+billArray[i].IDbill+'</h6></div>';
					khachhang= khachhang + '<div><h6>'+billArray[i].userId+'</h6></div>';
					ngaydathang = ngaydathang + '<div><h5>'+billArray[i].date+'</h5></div>';
					tongtien = tongtien + '<div><h5>'+quydoi(billArray[i].totalprice)+'</h5></div>';
					if(billArray[i].status=='Chưa xử lý')
						tinhtrang = tinhtrang + '<div><h6 style="color: red">'+"Chưa xử lý"+'</h6></div>';
					else
						tinhtrang = tinhtrang + '<div><h6 style="color: green">'+"Đã xử lý"+'</h6></div>';
					chitiet = chitiet + '<div class="chucnangbill"><button onclick="showBill('+billArray[i].IDbill+')">'+"Xem chi tiết"+'</button></div>';
					kt++;
			}
		}
		
		
		if(chonsearch =="all"){
			if(billArray[i].totalprice <= productsearch || billArray[i].status.toLowerCase().search(productsearch) != -1||billArray[i].userId ==productsearch || billArray[i].IDbill==productsearch || billArray[i].date.toLowerCase().search(productsearch) != -1  && productsearch != ''){
					bill = bill + '<div><h6>'+billArray[i].IDbill+'</h6></div>';
					khachhang= khachhang + '<div><h6>'+billArray[i].userId+'</h6></div>';
					ngaydathang = ngaydathang + '<div><h5>'+billArray[i].date+'</h5></div>';
					tongtien = tongtien + '<div><h5>'+quydoi(billArray[i].totalprice)+'</h5></div>';
					if(billArray[i].status=='Chưa xử lý')
						tinhtrang = tinhtrang + '<div><h6 style="color: red">'+"Chưa xử lý"+'</h6></div>';
					else
						tinhtrang = tinhtrang + '<div><h6 style="color: green">'+"Đã xử lý"+'</h6></div>';
					chitiet = chitiet + '<div class="chucnangbill"><button onclick="showBill('+billArray[i].IDbill+')">'+"Xem chi tiết"+'</button></div>';
					kt++;
			}
		}



		if(kt==10)
			break;
			
			document.getElementById('idbill').innerHTML=bill;
			document.getElementById('idkhachhang').innerHTML=khachhang;
			document.getElementById('ngaydathang').innerHTML=ngaydathang;
			document.getElementById('tongtien').innerHTML=tongtien;
			document.getElementById('tinhtrangbill').innerHTML=tinhtrang;
			document.getElementById('chitietbill').innerHTML=chitiet;
	}
}
