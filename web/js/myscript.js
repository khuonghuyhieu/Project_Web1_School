
window.onload = function () {	
	createAdmin();
	createProduct();
	showFullProduct(0);
	checklogin();
	activebtn();

}


function dnhap(){
	document.getElementById('form').style.display='block';
	document.getElementById('bgden').style.display='block';
}
function TatForm(){
	document.getElementById('form').style.display='none';
	document.getElementById('bgden').style.display='none';
	document.getElementById('tuyendung').style.display='none';
	
}

function MoTuyenDung(){
	document.getElementById('tuyendung').style.display='block';
	document.getElementById('bgden').style.display='block';
}
function TatTuyenDung(){
	document.getElementById('tuyendung').style.display='none';
	document.getElementById('bgden').style.display='none';
}
var i = 0;
function changeImg(){
	
	var images=['./images/xe/slide11.jpg','./images/xe/slide1.jpg','./images/xe/slide2.jpg','images/xe/slide4.jpg','images/xe/slide5.jpg','images/xe/slide6.jpg','images/xe/slide7.jpg','images/xe/slide8.jpg','images/xe/slide9.jpg'];
    document.getElementById('img').src = images[i];
    i++;
    if(i == images.length)
    	i = 0;
   
}

setInterval(changeImg,3000);
var u = 0;
function changeImg1(){
	
	var images=['./images/xe/slide9.jpg','./images/xe/slide8.jpg','./images/xe/slide7.jpg','./images/xe/slide6.jpg','./images/xe/slide5.jpg','./images/xe/slide4.jpg','./images/xe/slide2.jpg','images/xe/slide1.jpg','images/xe/slide11.jpg'];
    document.getElementById('img').src = images[u];
    u++;
    if(u == images.length)
    	u = 0;
   
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
			{productId:111, brand:'honda',loai:'xe số',img:'wave.jpg', name:'Wave Alpha 110cc', price:17790000},
			{productId:112, brand:'honda',loai:'xe số',img:'rsx.png', name:'Wave RSX FI', price:21690000},
			{productId:113, brand:'honda',loai:'xe số',img:'blade.png', name:'Blade', price:18800000},
			{productId:114, brand:'honda',loai:'xe số',img:'cup.png', name:'Super Cub C125', price:84990000},
			{productId:115, brand:'honda',loai:'xe số',img:'future125.png', name:'Future 125 FI', price:30190000},
			{productId:116, brand:'honda',loai:'tay ga',img:'ab125-150.png', name:'Air Blade 125/150', price:41190000 },
			{productId:117, brand:'honda',loai:'tay ga',img:'lead125fi.png', name:'Lead 125 FI', price:38290000},
			{productId:118, brand:'honda',loai:'tay ga',img:'pcx125- pcx150.png', name:'PCX 125 - PCX 150', price:56490000},
			{productId:119, brand:'honda',loai:'tay ga',img:'pcxHybrid.png', name:'PCX Hybrid', price:89990000 },
			{productId:120, brand:'honda',loai:'tay ga',img:'sh125i_150i.png', name:'SH 125i/150i', price:70990000 },
			{productId:121, brand:'honda',loai:'tay ga',img:'sh300iabs.jpg', name:'SH300i ABS', price:276490000},
			{productId:122, brand:'honda',loai:'tay ga',img:'shmode125.png', name:'Sh Mode 125', price:53890000 },
			{productId:123, brand:'honda',loai:'tay ga',img:'vision.png', name:'Vision', price:29990000},

			{productId:124, brand:'honda',loai:'tay côn',img:'cb150r.png', name:'CB150R Exmotion', price:105000000},
			{productId:125, brand:'honda',loai:'tay côn',img:'monkey.png', name:'Monkey', price:84990000},
			{productId:126, brand:'honda',loai:'tay côn',img:'msx125.png', name:'MSX125', price:49990000},
			{productId:127, brand:'honda',loai:'tay côn',img:'winnerX.png', name:'Winner X', price:45990000},

			{productId:128, brand:'honda',loai:'mô-tô',img:'cb1000r.png', name:'CB1000R', price:468000000},
			{productId:129, brand:'honda',loai:'mô-tô',img:'cb500f.png', name:'CB500F', price:178990000},
			{productId:130, brand:'honda',loai:'mô-tô',img:'cb500x.png', name:'CB500X', price:187990000},
			{productId:131, brand:'honda',loai:'mô-tô',img:'cb650r.png', name:'CB650R', price:245990000},
			{productId:132, brand:'honda',loai:'mô-tô',img:'CBR1000RR-R Fireblade.png', name:'CBR90RR-R Fireblade', price:949000000},
			{productId:133, brand:'honda',loai:'mô-tô',img:'CBR1000RR-R Fireblade SP.png', name:'CBR100RR-R Fireblade SP', price:1049000000},
			{productId:134, brand:'honda',loai:'mô-tô',img:'cbr500r.png', name:'CBR500R', price:186990000},
			{productId:135, brand:'honda',loai:'mô-tô',img:'cbr650r.png', name:'CBR650R', price:253990000},
			{productId:136, brand:'honda',loai:'mô-tô',img:'goldwing.png', name:'Goldwing', price:1200000000},
			{productId:137, brand:'honda',loai:'mô-tô',img:'rebel300.png', name:'Rebel 300', price: 125000000},
			{productId:138, brand:'honda',loai:'mô-tô',img:'rebel_500.png', name:'Rebel 550', price:220000000}			
		];
		localStorage.setItem('product',JSON.stringify(productArray));
	}
}
function showFullProduct(index){
	if(localStorage.getItem('product')===null){
		return false;
	}
	var productArray = JSON.parse(localStorage.getItem('product'));
	var s ="";
	if (index < 0) {
		index = 0;
	}

	var sizeProduct = 12;
	var totalPage = Math.ceil(productArray.length / sizeProduct);
	var start = sizeProduct*index;
	var end = start + sizeProduct;
	if (end > productArray.length){
		end = productArray.length;
	}

	for(var i = start; i<end;i++){
		s = s + '<div class="col_4"><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten" value="">'+
		productArray[i].name+'</h4>'+'<p id="gia" value="">'+quydoi(productArray[i].price)+'</p>'+
		'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
		+"Xem chi tiết"+'</p></div>';
	}
	var pagingHtml = '';
	for (var i = 0; i < totalPage; i++) {
		var abc = i + 1;
		pagingHtml += '<div id="phantrang" onclick="nextPage('+ i +');">'+abc+'</div>'
	}
	document.getElementById('row').innerHTML=s;
	document.getElementById('phantrang').innerHTML=pagingHtml;

	
}

function nextPage(index){
	showFullProduct(index);
}

function showXeso(){
	if(localStorage.getItem('product')===null){
		return false;
	}
	var productArray = JSON.parse(localStorage.getItem('product'));
	var s = "";
	for(var i=0; i<productArray.length;i++){
		if(productArray[i].loai == 'xe số'){
			s = s + '<div class="col_4" ><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
		productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
		'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
		+"Xem chi tiết"+'</p></div>';
		}
	}
	document.getElementById('phantrang').style.display='none';
	document.getElementById('row').innerHTML=s;
}
function showXeTayGa(){
	if(localStorage.getItem('product')===null){
		return false;
	}
	var productArray = JSON.parse(localStorage.getItem('product'));
	var s = "";
	for(var i=0; i<productArray.length;i++){
		if(productArray[i].loai == 'tay ga'){
			s = s + '<div class="col_4"><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
		productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
		'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
		+"Xem chi tiết"+'</p></div>';
		}
	}
	document.getElementById('phantrang').style.display='none';
	document.getElementById('row').innerHTML=s;
}
function showXeTayCon(){
	if(localStorage.getItem('product')===null){
		return false;
	}
	var productArray = JSON.parse(localStorage.getItem('product'));
	var s = "";
	for(var i=0; i<productArray.length;i++){
		if(productArray[i].loai == 'tay côn'){
			s = s + '<div class="col_4" ><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
		productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
		'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
		+"Xem chi tiết"+'</p></div>';
		}
	}
	document.getElementById('phantrang').style.display='none';
	document.getElementById('row').innerHTML=s;
}
function showXeMoTo(){
	if(localStorage.getItem('product')===null){
		return false;
	}
	var productArray = JSON.parse(localStorage.getItem('product'));
	var s = "";
	for(var i=0; i<productArray.length;i++){
		if(productArray[i].loai == 'mô-tô'){
			s = s + '<div class="col_4"><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
		productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
		'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
		+"Xem chi tiết"+'</p></div>';
		}
	}
	document.getElementById('phantrang').style.display='none';
	document.getElementById('row').innerHTML=s;
}
function activebtn(){
	var btnContainer = document.getElementById("chiasanpham");
            var btns = btnContainer.getElementsByClassName("sp-btn");
            for (var i = 0; i < btns.length; i++) {
                btns[i].addEventListener("click", function() {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
              });
            }
}



function TatSearch(){
	var khungsearch = document.getElementById('khungsearch').style.display = 'none';
	document.getElementById('ThanhSearch').value = '';
	var s = "";
	document.getElementById('searchresult').innerHTML = s;
	document.getElementById('priceform').value = "";
	document.getElementById('priceto').value = "";
	document.getElementById('loaixe').value = "all";

}
function MoSearch(){
	var khungsearch = document.getElementById('khungsearch').style.display = 'block';

}
function searchnangcao(){
	if(document.getElementById('loaixe').style.display=="inline-block"&&document.getElementById('priceform').style.display=="inline-block"&&document.getElementById('priceto').style.display=="inline-block"&&document.getElementById('ngancachsearh').style.display=="inline-block"&&document.getElementById('baosearchnangcao').style.display=="block"){
		document.getElementById('loaixe').style.display="none";
		document.getElementById('priceform').style.display="none";
		document.getElementById('priceto').style.display="none";
		document.getElementById('ngancachsearh').style.display="none";
		document.getElementById('baosearchnangcao').style.display="none";
		document.getElementById('ThanhSearch').value = "";
		document.getElementById('searchresult').innerHTML = "";
		document.getElementById('ThanhSearch').disabled = false;	
	}
	else{
		document.getElementById('ThanhSearch').value = "";
		document.getElementById('searchresult').innerHTML = "";
		document.getElementById('ThanhSearch').disabled = true;	
		document.getElementById('loaixe').value = "all";
		document.getElementById('priceform').value = "";
		document.getElementById('priceto').value = "";
		document.getElementById('loaixe').style.display="inline-block";
		document.getElementById('priceform').style.display="inline-block";
		document.getElementById('priceto').style.display="inline-block";
		document.getElementById('ngancachsearh').style.display="inline-block";
		document.getElementById('baosearchnangcao').style.display="block";	
	}
}
function search(){
	var productsearch = document.getElementById('ThanhSearch').value.toLowerCase();
	var productArray = JSON.parse(localStorage.getItem('product'));
	var s='';
		for(var i = 0; i<productArray.length; i++){
			if (productArray[i].name.toLowerCase().search(productsearch) != -1  && productsearch != '') {
				s = s + '<div class="card" ><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
				productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
				'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
				+"Xem chi tiết"+'</p></div>';
			}
		}

		
	var loaisearch = document.getElementById('loaixe').value;
	var priceform = document.getElementById('priceform').value;
	var priceto = document.getElementById('priceto').value;	
			if (loaisearch=='all') { 
				for(var i = 0; i<productArray.length; i++){				
					if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].price>=priceform && productArray[i].price<=priceto) {
						s = s + '<div class="card"><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
						productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
						'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
						+"Xem chi tiết"+'</p></div>';
				}
				}
			}

			else if(loaisearch =='XeSo'){
				for(var i = 0; i<productArray.length; i++){
					if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='xe số' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
						s = s + '<div class="card"><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
						productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
						'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
						+"Xem chi tiết"+'</p></div>';
					}
				}

			}
			
			else if(loaisearch =='XeTayGa'){
				for(var i = 0; i<productArray.length; i++){
					if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='tay ga' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
						s = s + '<div class="card"><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
						productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
						'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
						+"Xem chi tiết"+'</p></div>';
					}
				}
			}
			else if(loaisearch =='XeCon'){
				for(var i = 0; i<productArray.length; i++){
					if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='tay côn' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
						s = s + '<div class="card" ><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
						productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
						'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
						+"Xem chi tiết"+'</p></div>';
					}
				}
			}
			else if(loaisearch =='XeMoTo'){
				for(var i = 0; i<productArray.length; i++){
					if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='mô-tô' &&productArray[i].price>=priceform && productArray[i].price<=priceto) {
						s = s + '<div class="card" ><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
						productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
						'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
						+"Xem chi tiết"+'</p></div>';
					}
				}
			}
			else
				s = '';

			if(priceform == "" && priceto == ""){
				if(loaisearch =='XeSo'){
					for(var i = 0; i<productArray.length; i++){
						if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='xe số') {
							s = s + '<div class="card" ><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
							productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
							'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
							+"Xem chi tiết"+'</p></div>';
						}
					}
				}
				else if(loaisearch =='XeTayGa'){
					for(var i = 0; i<productArray.length; i++){
						if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='tay ga' ) {
							s = s + '<div class="card"><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
							productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
							'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
							+"Xem chi tiết"+'</p></div>';
						}
					}
				}
				else if(loaisearch =='XeCon'){
					for(var i = 0; i<productArray.length; i++){
						if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='tay côn' ) {
							s = s + '<div class="card" ><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
							productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
							'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
							+"Xem chi tiết"+'</p></div>';
						}
					}
			}
				else if(loaisearch =='XeMoTo'){
					for(var i = 0; i<productArray.length; i++){
						if (productArray[i].name.toLowerCase().search(productsearch) != -1 && productArray[i].loai=='mô-tô') {
							s = s + '<div class="card"><img src="./images/xe/'+productArray[i].img+'"><h4 id="ten">'+
							productArray[i].name+'</h4>'+'<p id="gia">'+quydoi(productArray[i].price)+'</p>'+
							'<p class="xemchitiet" onclick="showDetail('+productArray[i].productId+');">'
							+"Xem chi tiết"+'</p></div>';
						}
					}

			}


			}

	document.getElementById('searchresult').innerHTML = s;	
}

function showDetail(productid){
	var p= document.getElementById('product-info').style.display='block';
	if(localStorage.getItem('product')===null){
		return false;
	}
	var productArray = JSON.parse(localStorage.getItem('product'));
	var s = "";
	for(var i=0; i<productArray.length;i++){
		if(productArray[i].productId==productid){
			s = '<div id="info-left"><img src="./images/xe/'+productArray[i].img+
			'"></div><div id="dauX" onclick="closeDetail();">'+"X"+
			'</div><div id="info-right"><h3 id="ten" value="">'+productArray[i].name+'</h3><h3>'+
			quydoi(productArray[i].price)+'</p><h3>'+"Số lượng"+
			'</h3><button class="quantitydown" onClick="quantitydown()">'+"-"+
			'</button><input type="text" id="quantity" value="1"><button class="quantityup" onClick="quantityup()">'+
			"+"+'</button></div><div class="in-cart" id="cart-button" onclick="inCart('+productArray[i].productId+');"><button onclick="closeDetail();">'+"Thêm vào giỏ"+'</button></div>'
		}
	}
	document.getElementById('info-detail').innerHTML=s;
}

function closeDetail(){
	document.getElementById('product-info').style.display='none';
}

function quantityup(){

	document.getElementById('quantity').value++;
}

function quantitydown(){
	if(document.getElementById('quantity').value > 1){
		document.getElementById('quantity').value--;
	}
}
function inCart(id){
	var cartArray=[];
	var productArray = JSON.parse(localStorage.getItem('product'));
	var cart = JSON.parse(localStorage.getItem('cart'));
	var soluong = document.getElementById('quantity').value;
	 var productitem = [];
	 var s=0;
	for(var i=0; i<productArray.length;i++){
		if(productArray[i].productId==id)
			productitem = productArray[i];
		

	}

	 var tongtien = parseInt(productitem.price* soluong) ;
	if(localStorage.getItem('cart')===null){
		productitem.soluong = Number(soluong);
		productitem.tongtien = tongtien;
		cartArray.push(productitem);
		localStorage.setItem('cart',JSON.stringify(cartArray));			
	}
	else{
		var cartArray = JSON.parse(localStorage.getItem('cart'));
		productitem.soluong = Number(soluong);
		productitem.tongtien = tongtien;
		var kt=0;
		for(var i=0; i<cartArray.length;i++){
			if(cartArray[i].productId == id){
				cartArray[i].soluong += Number(soluong);
				cartArray[i].tongtien += tongtien;
		 		cartArray.push(cartArray[i]);
				localStorage.setItem('cart',JSON.stringify(cartArray));
				for (var i = 0; i < cartArray.length; i++) {
					if(cartArray[i].productId==id){
						cartArray.splice(i,1) ;
						break;
				}
			}	
			localStorage.setItem('cart',JSON.stringify(cartArray));
			kt++;
			break;	
			}
		}
		if(kt==0){
			productitem.soluong = Number(soluong);
			productitem.tongtien = tongtien;
			cartArray.push(productitem);
			localStorage.setItem('cart',JSON.stringify(cartArray));
		}
	}
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
			s = '<li id="tendangnhap" onclick="chinhsua();">'+user.username+'</li>'+
				'<ul><li><button id="nutadmin" onClick="window.location.href=\'./admin/admin.html\'"><i class="fa fa-wrench"></i></button></i>'+
				'<li id="dangxuat" onclick="logout(\'index.html\');">LOGOUT</li></ul>';
				document.getElementById('hinhdangnhap').style.display = 'none';
				document.getElementById('giohang').style.display = 'none';		
		}else{
			s = '<li id="tendangnhap" onclick="chinhsua1();">'+user.username+'</li>'+
				'<ul><li id="dangxuat" onclick="logout(\'index.html\');">LOGOUT</li></ul>';
				document.getElementById('hinhdangnhap').style.display = 'none';	
		}
		document.getElementById('test1' ).innerHTML = s;
	}
}


