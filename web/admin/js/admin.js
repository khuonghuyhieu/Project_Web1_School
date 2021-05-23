var myVar = setInterval(myTimer, 1000); 
function myTimer() {
  	var d = new Date();
  	var t = d.toLocaleTimeString();
  	document.getElementById("time").innerHTML=t;
}
window.onload=function(){
	createProduct();	
	showThongtinSanPham(0);
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

function showThongtinSanPham(index){
	if(localStorage.getItem('product')===null){
		return false;
	}
	var productArray = JSON.parse(localStorage.getItem('product'));
	var id = "";
	var img = "";
	var ten = "";
	var loai = "";
	var gia = "";
	var chucnang = "";

	if (index < 0) {
		index = 0;
	}

	var sizeProduct =8;
	var totalPage = Math.ceil(productArray.length / sizeProduct);
	var start = sizeProduct*index;
	var end = start + sizeProduct;
	if (end > productArray.length) {
		end = productArray.length;
	}

	for(var i = start; i<end;i++){
		id = id + '<div><h1>'+productArray[i].productId+'</h1></div>';
		img = img + '<div class="col_4"><img src="./images/xe/'+productArray[i].img+'"></div>';
		ten = ten + '<div><h2>'+productArray[i].name+'</h2></div>';
		loai = loai + '<div><h1>'+productArray[i].loai+'</h1></div>';
		gia = gia + '<div><h5>'+quydoi(productArray[i].price)+'</h5></div>';
		chucnang = chucnang + '<div class="chucnang"><button onclick="deleteProduct('+productArray[i].productId+')">'+"Xóa"+'</button><button onclick="repairProduct('+productArray[i].productId+')">'+"Sửa"+'</button></div>'
	}
	var pagingHtml = '';
	for (var i = 0; i < totalPage; i++) {
		var abc = i + 1;
		pagingHtml += '<div id="phantrang" onclick="nextPage('+ i +');">'+abc+'</div>'
	}
	document.getElementById('phantrang').innerHTML=pagingHtml;
	document.getElementById('idsp').innerHTML=id;
	document.getElementById('imgsp').innerHTML=img;
	document.getElementById('tensp').innerHTML=ten;
	document.getElementById('loaisp').innerHTML=loai;
	document.getElementById('giasp').innerHTML=gia;
	document.getElementById('chucnangsp').innerHTML=chucnang;
}


function nextPage(index){
	showThongtinSanPham(index);
}
function MoThemSp(){
	document.getElementById('formthem').style.display='block';
	document.getElementById('bgden').style.display='block';
}
function TatForm(){
	document.getElementById('formsua').style.display='none';
	document.getElementById('bgden').style.display='none';
	document.getElementById('formthem').style.display='none';
}
function ktrakitudatbiet(value){
   var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
   if(format.test(value)){
  		return true;
	} else {
  		return false;
	}


}
document.getElementById('formthemsp').addEventListener('submit', addProduct);
function addProduct(x){
	x.preventDefault();
	var productArray = JSON.parse(localStorage.getItem('product'));
	var ten = document.getElementById("name1").value;
	var loai = document.getElementById("loai").value;
	var gia = document.getElementById("price1").value;
	var anh = document.getElementById("img1").value;
	var fileAnh =anh.split("\\");
	var thuonghieu = document.getElementById("brand1").value;
	var flag = true;
	if(!ten){
		document.getElementById('errortensp').style.display = 'block';
		flag = false;
	}else{	
		if(ten.length<10){
			document.getElementById('errortensp').style.display = 'block';
			document.getElementById('errortensp').innerHTML = 'Tên sản phẩm phải trên 10 ký tự';
			flag = false;
		}else {
				document.getElementById('errortensp').style.display = 'none';
		}
		
	}
	if(ktrakitudatbiet(ten)==true){
		document.getElementById('errortensp').style.display = 'block';
		document.getElementById('errortensp').innerHTML = 'Tên sản phẩm không chứa ký tự đặt biệt!';
		flag = false;
	}
	if(!thuonghieu){
		document.getElementById('errorhieusp').style.display = 'block';
		flag = false;
	}else{	
		if(ten.length<10){
			document.getElementById('errorhieusp').style.display = 'block';
			document.getElementById('errorhieusp').innerHTML = 'Tên sản phẩm phải trên 10 ký tự';
			flag = false;
		}else {
				document.getElementById('errorhieusp').style.display = 'none';
		}
		
	}
	if(!gia){
			document.getElementById('errorgiasp').style.display = 'block';
			flag = false;
		}else{
			if(isNaN(Number(gia))){
				document.getElementById('errorgiasp').style.display = 'block';
				document.getElementById('errorgiasp').innerHTML = 'Giá không hợp lệ';
				flag = false;
			}else{
				if(Number(gia)<1000000){
					document.getElementById('errorgiasp').style.display = 'block';
					document.getElementById('errorgiasp').innerHTML = 'Giá không được bé hơn 1 trệu';
					flag = false;
				}else{
					document.getElementById('errorgiasp').style.display = 'none';
				}
			}
		}
		if(!anh){
			document.getElementById('errorhinhsp').style.display = 'block';
			flag = false;
		}else {
			document.getElementById('errorhinhsp').style.display = 'none';
		}
		
		
	if(flag == false){
		return false;
	}


	var product={productId:productArray[productArray.length -1].productId + 1, brand:thuonghieu,
		loai:loai,img:fileAnh[2], name:ten, price:Number(gia)};
	productArray.push(product);
	localStorage.setItem('product',JSON.stringify(productArray));
	showThongtinSanPham(0);
	window.location.reload(true);
	TatForm();
}

function deleteProduct(id){
	var productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId==id)
			if(confirm('Bạn có muốn xóa sản phẩm này?'))
				productArray.splice(i, 1);
	}
	localStorage.setItem('product',JSON.stringify(productArray));
	showThongtinSanPham(0)
}
function repairProduct(id){
	document.getElementById('formsua').style.display='block';
	document.getElementById('bgden').style.display='block';
	var productArray = JSON.parse(localStorage.getItem('product'));
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId==id) {
			document.getElementById("name").value = productArray[i].name;
			document.getElementById("brand").value = productArray[i].brand;
			document.getElementById("price").value = productArray[i].price;
			document.getElementById("loai1").value = productArray[i].loai;
			localStorage.setItem('editId',id);
			break;
		}
	}
}

function saveProduct(){
	var productLocal = localStorage.getItem("product");
	var editId = localStorage.getItem("editId");
	var productArray = JSON.parse(productLocal);
	var ten = document.getElementById("name").value;
	var loai = document.getElementById("loai").value;
	var gia = document.getElementById("price").value;
	var anh = document.getElementById("img").value;
	var fileAnh = anh.split("\\");
	var thuonghieu = document.getElementById("brand").value;
	for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId==editId){
			productArray[i].name = ten;
			productArray[i].loai = loai;
			productArray[i].brand = thuonghieu;
			productArray[i].price = gia;
			if(fileAnh[2]==null)
				productArray[i].img = productArray[i].img;
			else
				productArray[i].img = fileAnh[2];
			break;
		}
	}
	localStorage.setItem('product',JSON.stringify(productArray));
	localStorage.setItem('editId',0);
	showThongtinSanPham(0);
	TatForm();

}
function MoSearchAdmin(index){
	if(document.getElementById('khungsearchadmin').style.display == 'block'){
		document.getElementById('khungsearchadmin').style.display = 'none';
		showThongtinSanPham(0);
		document.getElementById('khungsearchadmin').value ="";
		document.getElementById('chonsearch').style.display = 'none';

	}
	else{
		document.getElementById('khungsearchadmin').style.display = 'block';
		document.getElementById('chonsearch').style.display = 'inline-block';
		if(localStorage.getItem('product')===null){
			return false;
		}
		var productArray = JSON.parse(localStorage.getItem('product'));
		var id = "";
		var img = "";
		var ten = "";
		var loai = "";
		var gia = "";
		var chucnang = "";

		if (index < 0) {
			index = 0;
		}

		var sizeProduct = 8;
		var totalPage = Math.ceil(productArray.length / sizeProduct);
		var start = sizeProduct*index;
		var end = start + sizeProduct;
		if (end > productArray.length) {
			end = productArray.length;
		}

		for(var i = start; i<end;i++){
			id = id + '<div><h1>'+productArray[i].productId+'</h1></div>';
			img = img + '<div class="col_4"><img src="./images/xe/'+productArray[i].img+'"></div>';
			ten = ten + '<div><h2>'+productArray[i].name+'</h2></div>';
			loai = loai + '<div><h1>'+productArray[i].loai+'</h1></div>';
			gia = gia + '<div><h5>'+quydoi(productArray[i].price)+'</h5></div>';
			chucnang = chucnang + '<div class="chucnang"><button onclick="deleteProduct('+productArray[i].productId+')">'+"Xóa"+'</button><button onclick="repairProduct('+productArray[i].productId+')">'+"Sửa"+'</button></div>'
		}
		var pagingHtml = '';
		for (var i = 0; i < totalPage; i++) {
			var abc = i + 1;
			pagingHtml += '<div id="phantrang" onclick="nextPage('+ i +');">'+abc+'</div>'
		}
		document.getElementById('phantrang').innerHTML='';
		document.getElementById('idsp').innerHTML='';
		document.getElementById('imgsp').innerHTML='';
		document.getElementById('tensp').innerHTML='';
		document.getElementById('loaisp').innerHTML='';
		document.getElementById('giasp').innerHTML='';
		document.getElementById('chucnangsp').innerHTML='';

	}	
}

function searching(){
	var productsearch = document.getElementById('khungsearchadmin').value.toLowerCase();
	var productArray = JSON.parse(localStorage.getItem('product'));
	var id = "";
	var img = "";
	var ten = "";
	var loai = "";
	var gia = "";
	var chucnang = "";
	var kt=0;
	var chonsearch = document.getElementById("chonsearch").value;
	for(var i = 0; i<productArray.length; i++){
		if(chonsearch == "ten"){
			if (productArray[i].name.toLowerCase().search(productsearch) != -1  && productsearch != '') {
					id = id + '<div><h1>'+productArray[i].productId+'</h1></div>';
					img = img + '<div class="col_4"><img src="./images/xe/'+productArray[i].img+'"></div>';
					ten = ten + '<div><h2>'+productArray[i].name+'</h2></div>';
					loai = loai + '<div><h1>'+productArray[i].loai+'</h1></div>';
					gia = gia + '<div><h5>'+quydoi(productArray[i].price)+'</h5></div>';
					chucnang = chucnang + '<div class="chucnang"><button onclick="deleteProduct('+productArray[i].productId+')">'+"Xóa"+'</button><button onclick="repairProduct('+productArray[i].productId+')">'+"Sửa"+'</button></div>'
					kt++;
				}
		}
		if(chonsearch == "id"){	
			if (productArray[i].productId == productsearch  && productsearch != '') {
					id = id + '<div><h1>'+productArray[i].productId+'</h1></div>';
					img = img + '<div class="col_4"><img src="./images/xe/'+productArray[i].img+'"></div>';
					ten = ten + '<div><h2>'+productArray[i].name+'</h2></div>';
					loai = loai + '<div><h1>'+productArray[i].loai+'</h1></div>';
					gia = gia + '<div><h5>'+quydoi(productArray[i].price)+'</h5></div>';
					chucnang = chucnang + '<div class="chucnang"><button onclick="deleteProduct('+productArray[i].productId+')">'+"Xóa"+'</button><button onclick="repairProduct('+productArray[i].productId+')">'+"Sửa"+'</button></div>'
					kt++;

				}
		}
		if(chonsearch == "gia"){
			if (productArray[i].price <= productsearch  && productsearch != '') {
					id = id + '<div><h1>'+productArray[i].productId+'</h1></div>';
					img = img + '<div class="col_4"><img src="./images/xe/'+productArray[i].img+'"></div>';
					ten = ten + '<div><h2>'+productArray[i].name+'</h2></div>';
					loai = loai + '<div><h1>'+productArray[i].loai+'</h1></div>';
					gia = gia + '<div><h5>'+quydoi(productArray[i].price)+'</h5></div>';
					chucnang = chucnang + '<div class="chucnang"><button onclick="deleteProduct('+productArray[i].productId+')">'+"Xóa"+'</button><button onclick="repairProduct('+productArray[i].productId+')">'+"Sửa"+'</button></div>';
					kt++;

				}
			}
		if(chonsearch == "loai"){
			if (productArray[i].loai.toLowerCase().search(productsearch) != -1  && productsearch != '') {
					id = id + '<div><h1>'+productArray[i].productId+'</h1></div>';
					img = img + '<div class="col_4"><img src="./images/xe/'+productArray[i].img+'"></div>';
					ten = ten + '<div><h2>'+productArray[i].name+'</h2></div>';
					loai = loai + '<div><h1>'+productArray[i].loai+'</h1></div>';
					gia = gia + '<div><h5>'+quydoi(productArray[i].price)+'</h5></div>';
					chucnang = chucnang + '<div class="chucnang"><button onclick="deleteProduct('+productArray[i].productId+')">'+"Xóa"+'</button><button onclick="repairProduct('+productArray[i].productId+')">'+"Sửa"+'</button></div>';
					kt++;

				}
			}
		if(chonsearch == "all"){
			if (productArray[i].name.toLowerCase().search(productsearch) != -1 || productArray[i].productId == productsearch || productArray[i].price <= productsearch || productArray[i].loai.toLowerCase().search(productsearch) != -1  && productsearch != ''){
					id = id + '<div><h1>'+productArray[i].productId+'</h1></div>';
					img = img + '<div class="col_4"><img src="./images/xe/'+productArray[i].img+'"></div>';
					ten = ten + '<div><h2>'+productArray[i].name+'</h2></div>';
					loai = loai + '<div><h1>'+productArray[i].loai+'</h1></div>';
					gia = gia + '<div><h5>'+quydoi(productArray[i].price)+'</h5></div>';
					chucnang = chucnang + '<div class="chucnang"><button onclick="deleteProduct('+productArray[i].productId+')">'+"Xóa"+'</button><button onclick="repairProduct('+productArray[i].productId+')">'+"Sửa"+'</button></div>';
					kt++;

			}
		}			
		if(kt==10)
			break;



			document.getElementById('idsp').innerHTML=id;
			document.getElementById('imgsp').innerHTML=img;
			document.getElementById('tensp').innerHTML=ten;
			document.getElementById('loaisp').innerHTML=loai;
			document.getElementById('giasp').innerHTML=gia;
			document.getElementById('chucnangsp').innerHTML=chucnang;
		}
	}

