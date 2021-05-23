window.onload = function(){
	createProduct();
	checklogin();
	showCartOrder();
}
function dnhap(){
	document.getElementById('form').style.display='block';
	document.getElementById('bgden').style.display='block';
	document.getElementById('hinhdangnhap').style.display='block';
}
function Tasho(){
	document.getElementById('form').style.display='none';
	document.getElementById('bgden').style.display='none';
	document.getElementById('hinhdangnhap').style.display='block';
}

function register1(){
    var x=document.getElementById("login");
    var y=document.getElementById("register");
    var z=document.getElementById("btn");   
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
}
function login1(){
    var x=document.getElementById("login");
    var y=document.getElementById("register");
    var z=document.getElementById("btn");   
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";
}
function quydoi(x) {

  return x.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' VND';
}
function createProduct(){
	if(localStorage.getItem('product')===null){
		var productArray = [
			{productId:10030, brand:'honda',loai:'xeso',img:'wave.jpg', name:'Wave Alpha 110cc', price:17790000},
			{productId:10031, brand:'honda',loai:'xeso',img:'rsx.png', name:'Wave RSX FI', price:21690000},
			{productId:10032, brand:'honda',loai:'xeso',img:'blade.png', name:'Blade', price:18800000},
			{productId:10033, brand:'honda',loai:'xeso',img:'cup.png', name:'Super Cub C125', price:84990000},
			{productId:10034, brand:'honda',loai:'xeso',img:'future125.png', name:'Future 125 FI', price:30190000},
			{productId:10035, brand:'honda',loai:'tayga',img:'ab125-150.png', name:'Air Blade 125/150', price:41190000 },
			{productId:10036, brand:'honda',loai:'tayga',img:'lead125fi.png', name:'Lead 125 FI', price:38290000},
			{productId:10037, brand:'honda',loai:'tayga',img:'pcx125- pcx150.png', name:'PCX 125 - PCX 150', price:56490000},
			{productId:10038, brand:'honda',loai:'tayga',img:'pcxHybrid.png', name:'PCX Hybrid', price:89990000 },
			{productId:10039, brand:'honda',loai:'tayga',img:'sh125i_150i.png', name:'SH 125i/150i', price:70990000 },
			{productId:10040, brand:'honda',loai:'tayga',img:'sh300iabs.jpg', name:'SH300i ABS', price:276490000},
			{productId:10041, brand:'honda',loai:'tayga',img:'shmode125.png', name:'Sh Mode 125', price:53890000 },
			{productId:10041, brand:'honda',loai:'tayga',img:'vision.png', name:'Vision', price:29990000},

			{productId:10042, brand:'honda',loai:'taycon',img:'cb150r.png', name:'CB150R Exmotion', price:105000000},
			{productId:10043, brand:'honda',loai:'taycon',img:'monkey.png', name:'Monkey', price:84990000},
			{productId:10044, brand:'honda',loai:'taycon',img:'msx125.png', name:'MSX125', price:49990000},
			{productId:10045, brand:'honda',loai:'taycon',img:'winnerX.png', name:'Winner X', price:45990000},

			{productId:10046, brand:'honda',loai:'moto',img:'cb1000r.png', name:'CB1000R', price:468000000},
			{productId:10047, brand:'honda',loai:'moto',img:'cb300r.png', name:'CB300R', price:140000000},
			{productId:10048, brand:'honda',loai:'moto',img:'cb500f.png', name:'CB500F', price:178990000},
			{productId:10049, brand:'honda',loai:'moto',img:'cb500x.png', name:'CB500X', price:187990000},
			{productId:10050, brand:'honda',loai:'moto',img:'cb650r.png', name:'CB650R', price:245990000},
			{productId:10051, brand:'honda',loai:'moto',img:'CBR1000RR-R Fireblade.png', name:'CBR90RR-R Fireblade', price:949000000},
			{productId:10052, brand:'honda',loai:'moto',img:'CBR1000RR-R Fireblade SP.png', name:'CBR100RR-R Fireblade SP', price:1049000000},
			{productId:10053, brand:'honda',loai:'moto',img:'cbr500r.png', name:'CBR500R', price:186990000},
			{productId:10054, brand:'honda',loai:'moto',img:'cbr650r.png', name:'CBR650R', price:253990000},
			{productId:10055, brand:'honda',loai:'moto',img:'goldwing.png', name:'Goldwing', price:1200000000},
			{productId:10056, brand:'honda',loai:'moto',img:'rebel300.png', name:'Rebel 300', price: 125000000},
			{productId:10057, brand:'honda',loai:'moto',img:'rebel500.png', name:'Rebel500', price:180000000},
			{productId:10058, brand:'honda',loai:'moto',img:'rebel_500.png', name:'Rebel 550', price:220000000}			
		];
		localStorage.setItem('product',JSON.stringify(productArray));
	}
}


 function showCartOrder(){

    if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
        var s ='<div class="item">'+"Chưa có sản phẩm nào"+'</div>';
        document.getElementById('cart-item').innerHTML=s;
		document.getElementById('money').innerHTML=0;
    } else{
		var cartArray=JSON.parse(localStorage.getItem('cart'));
		var totalprice=0;
        var s="";
        for(i=0;i<cartArray.length;i++){
            s+='<div class="text-detail">'+
                    '<h5 class="css-quantity" id="upDateQuantity">'+Number(cartArray[i].soluong)+'</h5>'+
                    '<h4 class="css-name">'+"&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"+cartArray[i].name+'</h4>'+
					'<p class="css-price" id="Suatongtien">'+quydoi(cartArray[i].tongtien)+"&nbsp;"+'</p>'+
				'</div>'+
				'<div class="icon-pen-delete">'+
					'<a href="#">'+
						'<img src="images/pay/icon-delete.png" onClick="deletecartitem('+cartArray[i].productId+')">'+
					'</a>'+
						'<img src="images/pay/icon-pen.png" onclick="SuaSanPham('+cartArray[i].productId+')">'+
				'</div>'+
				'<hr>';
			totalprice+=(cartArray[i].tongtien);

        }
    }
	document.getElementById('cart-item').innerHTML=s;
	document.getElementById('money').innerHTML=quydoi(totalprice);
}


function deletecartitem(id){
	var cartArrays = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArrays.length; i++) {
		if(cartArrays[i].productId==id){
			if(confirm("Bạn có muốn xóa đơn hàng không?"))
				cartArrays.splice(i,1) ;			
		}		
	}
	
	localStorage.setItem('cart',JSON.stringify(cartArrays));
	showCartOrder();
}
function xoatatcacart(){
	localStorage.removeItem('cart');
	showCartOrder();
}

function SuaSanPham(product1){
	var p= document.getElementById('product-info').style.display='block';
	if(localStorage.getItem('cart')===null){
		return false;
	}
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	var s = "";
	for(var i=0; i<cartArray.length;i++){
		if(cartArray[i].productId==product1){
			s = '<div id="info-left">'+
					'<img src="./images/xe/'+cartArray[i].img+'">'+
				'</div>'+
				'<div id="dauX" onclick="closeDetail();">'+"X"+'</div>'+
				'<div id="info-right">'+
					'<h1 id="ten" value="">'+quydoi(cartArray[i].price)+'</h1>'+
					'<h3>'+"Số lượng"+'</h3>'+
					'<button class="quantitydown" onclick="quantitydown2('+cartArray[i].productId+');">'+"-"+'</button>'+
					'<input type="text" id="quantity" value="'+cartArray[i].soluong+'">'+
					'<button class="quantityup" onclick="quantityup2('+cartArray[i].productId+');">'+"+"+'</button>'+
				'</div>'+
				'<a href="">'+
				'<div class="in-cart" id="cart-button" onclick="inCart('+cartArray[i].productId+')">'+
						'<button>'+"Thêm vào giỏ"+'</button>'+
				'</a>'+
				'</div>';
		}
	}
	document.getElementById('info-detail').innerHTML=s;
}
function closeDetail(){
	document.getElementById('product-info').style.display='none';
}

function quantitydown2(id){
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
			if(document.getElementById('quantity').value > 0){
				document.getElementById('quantity').value--;
			}
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartOrder();
}
function quantityup2(id){
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	for (var i = 0; i < cartArray.length; i++) {
		if(cartArray[i].productId==id){
			document.getElementById('quantity').value++;
		}
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartOrder();
}


function inCart(id1){
	var cartArray=JSON.parse(localStorage.getItem('cart'));
	var soluong=document.getElementById('quantity').value;
	var item=[];
	for(var i=0;i<cartArray.length;i++){
		if(cartArray[i].productId==id1){
			cartArray[i].soluong=Number(soluong);
			item=cartArray[i];
		}
	}
	var tongtien=parseInt(item.price*soluong);
	if(localStorage.getItem('cart')===null){
		item.tongtien=tongtien;
	}
	else{
		item.tongtien=tongtien;
	}
	localStorage.setItem('cart',JSON.stringify(cartArray));
	showCartOrder();
}
document.getElementById('formthongtinkh').addEventListener('submit', Order);
function Order(){
		if(localStorage.getItem('userlogin')===null){
			alert('Bạn phải đăng nhập để mua sản phẩm');
			dnhap();
			return false;
		}
		var ghichu = document.getElementById('ghichu').value;
		var diachi = document.getElementById('diachi').value;
		var sdt = document.getElementById('sdt').value;
		var nguoinhan = document.getElementById('nguoinhan').value;
		var flag = true;
		if(!diachi ){
		document.getElementById('errordiachi').style.display = 'block';
		flag = false;
		}else{	
		if(diachi.length<20){
			document.getElementById('errordiachi').style.display = 'block';
			document.getElementById('errordiachi').innerHTML = 'Địa chỉ nhà phải trên 20 ký tự !';
			flag = false;
		}else {
				document.getElementById('errordiachi').style.display = 'none';
		}
		
		}
		if(!sdt){
			document.getElementById('errorsdt').style.display = 'block';
			flag = false;
		}else{
			if(isNaN(Number(sdt))){
				document.getElementById('errorsdt').style.display = 'block';
				document.getElementById('errorsdt').innerHTML = 'Số điện thoại không hợp lệ';
				flag = false;
			}else{
				if(Number(sdt)<100000000 || Number(sdt)>999999999){
					document.getElementById('errorsdt').style.display = 'block';
					document.getElementById('errorsdt').innerHTML = 'Số điện thoại không đúng';
					flag = false;
				}else{
					document.getElementById('errorsdt').style.display = 'none';
				}
			}
		}
		if(!nguoinhan){
			document.getElementById('errorten').style.display = 'block';
			flag = false;
		}else{
			document.getElementById('errorten').style.display = 'none';
		}
		var chinhanh1=document.getElementById('ChiNhanh').value;
		if(!chinhanh1){
			document.getElementById('errorchinhanh').style.display = 'block';
			flag = false;
		}else{
			document.getElementById('errorchinhanh').style.display = 'none';
		}

		if(flag==false){
			return false;
		}

		var pay = document.getElementsByName("pay");
		for (var i = 0; i < pay.length; i++){
			if (pay[i].checked === true){
				pay=pay[i].value;
			}
		}
		var chinhanh=document.getElementById('ChiNhanh');
		for(var i=0;i<chinhanh.length;i++){
			if(chinhanh[i].selected){
				chinhanh=chinhanh[i].value;
			}
		}
		var info = '';
		var totalprice = 0;
		var tien;
		var soluong;
		if(localStorage.getItem('cart')===null || localStorage.getItem('cart')=='[]'){
			return false;
		}
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		var userlogin = JSON.parse(localStorage.getItem('userlogin'));
		for (var i = 0; i < cartArray.length; i++) {
				info+='+ Món thứ '+ (i+1) +' - '+ cartArray[i].soluong+' chiếc '+cartArray[i].name+'<br><br>';
				totalprice+=cartArray[i].soluong*cartArray[i].price;
				tien=cartArray[i].price;
				soluong=cartArray[i].soluong;
		}
		
		var date = new Date();
		var d = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
		if(localStorage.getItem('bill')===null){
			var billArray = [];
			var bill = {userId: userlogin.userId, IDbill: (billArray.length+1), info: info, totalprice: totalprice, date: d, pay: pay,chinhanh: chinhanh,diachi: diachi,sdt: sdt,nguoinhan: nguoinhan,ghichu: ghichu,tien:tien,soluong: soluong, status: 'Chưa xử lý'};
			billArray.push(bill);
			localStorage.setItem('bill', JSON.stringify(billArray));
		}
		else{
			var billArray = JSON.parse(localStorage.getItem('bill'));
			var bill = {userId: userlogin.userId, IDbill: (billArray.length+1), info: info, totalprice: totalprice, date: d,pay: pay,chinhanh: chinhanh ,diachi: diachi,sdt: sdt,nguoinhan: nguoinhan,ghichu: ghichu,tien: tien,soluong: soluong, status: 'Chưa xử lý'};
			billArray.push(bill);
			localStorage.setItem('bill', JSON.stringify(billArray));
		}	
		localStorage.removeItem('cart');
		showCartTable();
		return true;
}


function deletebillitem(id){
	var billArray = JSON.parse(localStorage.getItem('bill'));
	for (var i = 0; i < billArray.length; i++) {
		if(billArray[i].IDbill==id){
			if(confirm("Bạn có muốn xóa đơn hàng thứ "+id+" này không?"))
				billArray.splice(i,1);
		}
	}
	localStorage.setItem('bill',JSON.stringify(billArray));
	window.location.reload(true);
}
function showBill(){
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var cartArray = JSON.parse(localStorage.getItem('cart'));
	var userloginArray = JSON.parse(localStorage.getItem('userlogin'));
	var x="";	
	if(localStorage.getItem('userlogin')===null){
		alert("Bạn chưa đăng nhập, vui lòng đăng nhập để xem giỏ hàng!.Nhấn ok để đăng nhập.");
		dnhap();
		return false;
	}
	document.getElementById('bill-show').style.display='block';
	
	if(localStorage.getItem('bill')===null && localStorage.getItem('userlogin')!==null){
		var x1 ="";
		x1= '<div id="dauX2" onclick="closeBill();">'+"Đóng hóa đơn"+'</div>'+'<div style="text-align: center;font-size:20px;font-weight:bold;margin-top:50%;">'
		+"Hiện tại không có sản phẩm nào"+'</div>';	
		document.getElementById('detail-bill').innerHTML=x1;
	}

	if(cartArray  === '[]' && userloginArray !==null){
		var x2 ="";
		x2= '<div id="dauX2" onclick="closeBill();">'+"Đóng hóa đơn"+'</div>'+'<div style="text-align: center;font-size:20px;font-weight:bold;margin-top:50%;">'
		+"Hiện tại không có sản phẩm nào"+'</div>';	
		document.getElementById('detail-bill').innerHTML=x2;
	}

	if(billArray  === '[]' && userloginArray !==null){
		var x3 ="";
		x3= '<div id="dauX2" onclick="closeBill();">'+"Đóng hóa đơn"+'</div>'+'<div style="text-align: center;font-size:20px;font-weight:bold;margin-top:50%;">'
		+"Hiện tại không có sản phẩm nào"+'</div>';	
		document.getElementById('detail-bill').innerHTML=x3;
	}
	if(userloginArray != null){
			x= '<div id="dauX2" onclick="closeBill();">'+"Đóng hóa đơn"+'</div>'+'<div style="clear:both;"></div>'+
				'<div>'+
					'<h3 class="title-bill">'+"Thông Tin Hóa Đơn"+'</h3>'+
				'</div>';;
			for(var i=0;i<billArray.length;i++){
				if(billArray[i].userId == userloginArray.userId){
					if(billArray[i].status == "Chưa xử lý"){
							x= 	x + '<div id="bill-top">'+
									'<div id="dauX1" onClick="deletebillitem('+billArray[i].IDbill+')">'+"X"+'</div>'+
									'<hr>'+
								'</div>'+
								'<div class="bill-time">'+
									'<p class="id-bill">'+"Mã Hóa Đơn: "+ (billArray[i].IDbill) +'</p>'+
									'<p class="date-bill">'+"Ngày đặt hàng: "+billArray[i].date +'</p>'+
								'</div>'+
								'<div class="bill-item">'+
									'<h3 class="bill-item-text">'+"- Sản phẩm:"+'</h3>'+
									'<p class="bill-quantity">'+billArray[i].info+'</p>'+
									'<h3 class="bill-money">- Tổng tiền: '+quydoi(billArray[i].totalprice)+'</h3>'+
									'<h3>'+"- Hình thức thanh toán: "+billArray[i].pay+'</h3>'+
									'<h3>'+"- Tên người nhận: "+billArray[i].nguoinhan +'</h3>'+
									'<h3>'+"- Số điện thoại: "+billArray[i].sdt+'</h3>'+
									'<h3>'+"- Ghi chú: "+billArray[i].ghichu+'</h3>'+
									'<h3>'+"- Chi nhánh: "+billArray[i].chinhanh+'</h3>'+
									'<div class="tinhtrang">'+
										'<h3 class="text-history">'+"- Tình trạng: "+'</h3>'+
										'<h3 class="status-bill">'+billArray[i].status+'</h3>'+
									'</div>'+
								'</div>';
						}
					
				}
				
		}
		

	document.getElementById('detail-bill').innerHTML=x;
	}
}
function TatForm(){
	document.getElementById('form').style.display='none';
	document.getElementById('bgden').style.display='none';
	
}
function closeBill(){
	document.getElementById('bill-show').style.display='none';
}

function ktrakhoangtrang(value){
   return value.indexOf(' ') >= 0;
}
function ktrakitudatbiet(value){
   var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   if(format.test(value)){
  		return true;
	} else {
  		return false;
	}


}
function KtraEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

document.getElementById('login').addEventListener('submit', login);
document.getElementById('register').addEventListener('submit', createNewUser);
function createNewUser(x){
	x.preventDefault();
	var user=document.getElementById("usr").value;
	var pass=document.getElementById("mk").value;
	var repass = document.getElementById('mk1').value;
	var fullname = document.getElementById('hoten').value;
	var email = document.getElementById('email').value;
	var ngsinh = document.getElementById('ns').value;
	
	var userArray = JSON.parse(localStorage.getItem('user'));
	var flag = true;
	if(!fullname ){
		document.getElementById('errorhoten').style.display = 'block';
		flag = false;
	}else{	
		if(fullname.length<10){
			document.getElementById('errorhoten').style.display = 'block';
			document.getElementById('errorhoten').innerHTML = 'Tên tài khoản phải trên 10 ký tự!';
			flag = false;
		}else {
				document.getElementById('errorhoten').style.display = 'none';
		}
		
	}
	if(!email){
		document.getElementById('erroremail').style.display = 'block';
		flag = false;
	}else{
		
		document.getElementById('erroremail').style.display = 'none';
		
	}
	if(!user){
		document.getElementById('errorusr').style.display = 'block';
		flag = false;
	}else{
		if(user.length<10){
			document.getElementById('errorusr').style.display = 'block';
			document.getElementById('errorusr').innerHTML = 'Tên tài khoản phải trên 10 ký tự và viết liền!';
			flag = false;
		}else {
				document.getElementById('errorusr').style.display = 'none';
		}
	}
	if(!pass){
		document.getElementById('errormk').style.display = 'block';
		flag = false;
	}else{
		if(pass.length<8){
			document.getElementById('errormk').style.display = 'block';
			document.getElementById('errormk').innerHTML = 'Mật khẩu phải trên 8 ký tự';
			flag = false;
		}else {
			document.getElementById('errormk').style.display = 'none';
		}
	}
	if(repass != pass){
		document.getElementById('errormk1').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('errormk1').style.display = 'none';
	}
	if(!ngsinh){
		document.getElementById('errorngsinh').style.display = 'block';
		flag = false;
	}else{
		document.getElementById('errorngsinh').style.display = 'none';
	}
	
	if(ktrakhoangtrang(user)==true){
		document.getElementById('errorusr').style.display = 'block';
		document.getElementById('errorusr').innerHTML = 'Tên tài khoản không chứa khoảng chắn!';
		flag = false;
	}
	if(ktrakitudatbiet(user)==true){
		document.getElementById('errorusr').style.display = 'block';
		document.getElementById('errorusr').innerHTML = 'Tên tài khoản không chứa ký tự đặt biệt :!@#$%^&*...';
		flag = false;
	}

	if(user.length>20){
		document.getElementById('errorusr').style.display = 'block';
		document.getElementById('errorusr').innerHTML = 'Tên tài khoản quá dài!';
		flag = false;
	}
	if(ktrakhoangtrang(pass)==true){
		document.getElementById('errormk').style.display = 'block';
		document.getElementById('errormk').innerHTML = 'Mật khẩu không chứa khoảng chắn!';
		flag = false;
	}

	if(KtraEmail(email)==false){
		document.getElementById('erroremail').style.display = 'block';
		document.getElementById('erroremail').innerHTML = 'Email không hợp lệ!';
		flag = false;
	}else{
		document.getElementById('erroremail').style.display = 'none';
	}
	if(flag==false){
		return false;
	}

	for(var i=0;i<userArray.length;i++){
		if(user==userArray[i].username){
			document.getElementById('errorusr').style.display = 'block';
			document.getElementById('errorusr').innerHTML = 'Tên đăng nhập đã có người sử dụng';
			return false;
		}
	}

	var user = {userId:userArray[userArray.length -1].userId + 1 ,
		username: user, password: pass, fullname: fullname, gioitinh: 'nam', 
		email:email , ngaysinh: '2020-11-11', 
		quyen:'khach'};
	userArray.push(user);
	localStorage.setItem('user',JSON.stringify(userArray));
	TatForm();
	window.location.reload(true);
	
}
function createAdmin(){
	
	if(localStorage.getItem('user')==null){	
		var userArray = [];	
		var admin = {
		'userId': 1,
		'username': 'adminwebd1h3',
		'password': 'admin',
		'fullname': 'adminwebd1h3',
		'gioitinh':'nam', 
		email:'d1h3store@gmail.com',
		ngaysinh: '2020-11-11', 
		quyen:'admin'};
		userArray.push(admin);
		localStorage.setItem('user',JSON.stringify(userArray));
	}
}
function login(x){
	x.preventDefault();
	var username = document.getElementById('user').value;
	var password = document.getElementById('pass').value;
	var flag=true;
	if(!username){
		document.getElementById('erroruser').style.display = 'block';
		flag = false;
	}else {
		document.getElementById('erroruser').style.display = 'none';
	}
	if(!password){
		document.getElementById('errorpass').style.display = 'block';
		flag = false;
	}else {
		document.getElementById('errorpass').style.display = 'none';
	}
	if(flag==false){
		return false;
	}
	var userArray = JSON.parse(localStorage.getItem('user'));
	for(var i=0;i<userArray.length;i++){
		if(username==userArray[i].username){
			if(password==userArray[i].password){
				TatForm();
				localStorage.setItem('userlogin',JSON.stringify(userArray[i]));
				window.location.reload(true);
				return true;
			}
		}
	}
	document.getElementById('errorpass').style.display = 'block';
	document.getElementById('errorpass').innerHTML = 'Sai thông tin đăng nhập';
	return false;
}
function logout(x){
	localStorage.removeItem('userlogin');
	localStorage.removeItem('cart');
	location.href=x;
}

function chinhsua(){
	if(document.getElementById('nutadmin').style.display == 'block'&&document.getElementById('dangxuat').style.display == 'block'){
		document.getElementById('nutadmin').style.display = 'none';	
		document.getElementById('dangxuat').style.display = 'none';
	}
	else{
		document.getElementById('nutadmin').style.display = 'block';	
		document.getElementById('dangxuat').style.display = 'block';
	}
}
function chinhsua1(){
	if(document.getElementById('dangxuat').style.display == 'block'){		
		document.getElementById('dangxuat').style.display = 'none';
	}
	else{	
		document.getElementById('dangxuat').style.display = 'block';
	}
}

function checklogin(){
	if(localStorage.getItem('userlogin') !=null){
		var user = JSON.parse(localStorage.getItem('userlogin'));
		var s='';
		if(user.quyen=='admin'){
			alert("Bạn phải đăng nhập với quyền khách hàng!");
			localStorage.removeItem('userlogin');
			dnhap();
			return false;		
		}else{
			s = '<li id="tendangnhap" onclick="chinhsua1();">'+user.username+'</li>'+
				'<ul><li id="dangxuat" onclick="logout(\'index.html\');">LOGOUT</li></ul>';
				document.getElementById('hinhdangnhap').style.display = 'none';	
		}
		document.getElementById('test2' ).innerHTML = s;
	}
}

function showHistory(){
	var billArray = JSON.parse(localStorage.getItem('bill'));
	var userloginArray = JSON.parse(localStorage.getItem('userlogin'));
	var h="";	
	if(localStorage.getItem('userlogin')===null){
		alert("Bạn chưa đăng nhập, vui lòng đăng nhập để xem giỏ hàng!.Nhấn ok để đăng nhập.");
		dnhap();
		return false;
	}
	document.getElementById('history-cart').style.display='block';
	if(localStorage.getItem('bill')===null && localStorage.getItem('userlogin')!==null){
		var h1 ="";
		h1= '<div id="dauX3" onclick="closeHistory();">'+"Đóng lịch sử giao dịch"+'</div>'+'<div style="text-align: center;font-size:20px;font-weight:bold;margin-top:50%;">'
		+"Hiện tại bạn chưa có giao dịch nào !!"+'</div>';	
		document.getElementById('history-detail').innerHTML=h1;
	}
	if(billArray  === '[]' && userloginArray !==null){
		var h2 ="";
		h2= '<div id="dauX2" onclick="closeHistory();">'+"Đóng hóa đơn"+'</div>'+'<div style="text-align: center;font-size:20px;font-weight:bold;margin-top:50%;">'
		+"Hiện tại bạn chưa có giao dịch nào !!"+'</div>';	
		document.getElementById('history-detail').innerHTML=h1;
	}
	if(userloginArray != null){
		h= '<div id="dauX3" onclick="closeHistory();">'+"Đóng lịch sử giao dịch"+'</div>'+'<div style="clear:both;"></div>'+
			'<div class="title-history">'+
				'<h1 >'+"Lịch sử giao dịch"+'</h1>'+
			'</div>';
		for(var i=0;i<billArray.length;i++){
			if(billArray[i].userId == userloginArray.userId){
				if(billArray[i].status == "Đã xử lý"){
					h+= '<div class="history-top">'+
							'<hr>'+
						'</div>'+
						'<div class="history-time">'+
							'<p class="id-bill">'+"Mã Hóa Đơn: "+ (billArray[i].IDbill) +'</p>'+
							'<p class="date-bill">'+"Ngày đặt hàng: "+billArray[i].date +'</p>'+
						'</div>'+
						'<div class="history-item">'+
							'<h3 class="bill-item-text">'+"Sản phẩm:"+'</h3>'+
							'<p class="bill-quantity">'+billArray[i].info+'</p>'+
							'<h3 class="bill-money">Tổng tiền: '+quydoi(billArray[i].totalprice)+'</h3>'+
							'<h3>'+"Hình thức thanh toán: "+billArray[i].pay+'</h3>'+
						'</div>'+
						'<div class="tinhtrang">'+
							'<h3 class="text-history">'+"Tình trạng: "+'</h3>'+
							'<h3 class="status-history">'+billArray[i].status+'</h3>'+
						'</div>';
				}
			}
		}
		document.getElementById('history-detail').innerHTML=h;
	}
}


function closeHistory(){
	document.getElementById('history-cart').style.display='none';
}
