class product {
    constructor(photo, type, dec, cost, price, sale, href, quan) {
        this.photo = photo;
        this.type = type;
        this.dec = dec;
        this.cost = cost;
        this.price = price;
        this.sale = sale
        this.href = href
        this.quan = quan

    }
}
let tb = document.getElementById('products')
let products = [
    new product("http://aomua.maugiaodien.com/wp-content/uploads/2017/08/o-tu-dong-chong-uv-tan-2-lop-007.jpg", "Ô TỰ ĐỘNG NAM", "Ô tự động cán da 2 lớp tán cao cấp cho doanh nhân", 500000, 430000, 7, "http://aomua.maugiaodien.com/cua-hang/o-tu-dong-can-da-2-lop-tan-cao-cap-cho-doanh-nhan/", 1),
    new product("http://aomua.maugiaodien.com/wp-content/uploads/2017/08/t_________ng_10_nan_B586_m__u_n__u2.jpg", "Ô TỰ ĐỘNG NAM", "Ô tự động 10 nan cao cấp cho doanh nhân B586", 450000, 420000, 7, "http://aomua.maugiaodien.com/cua-hang/o-tu-dong-10-nan-cao-cap-cho-doanh-nhan-b586/", 1),
    new product("http://aomua.maugiaodien.com/wp-content/uploads/2017/08/o-tu-dong-lotosblume-can-go-den1-1.jpg", "Ô TỰ ĐỘNG NAM", "Ô tự động Lotosblume cán gỗ màu đen", 450000, 400000, 11, "http://aomua.maugiaodien.com/cua-hang/o-tu-dong-lotosblume-can-go-mau-den-2/", 1),
    new product("http://aomua.maugiaodien.com/wp-content/uploads/2017/08/o-gap-nguoc-tu-dong-01.jpg", "Ô TỰ ĐỘNG NAM", "Ô gấp ngược tự động không hoa văn ngày mưa", 750000, 560000, 5, "http://aomua.maugiaodien.com/cua-hang/o-gap-nguoc-tu-dong-cao-cap-cho-doanh-nhan/", 1),
    new product("http://aomua.maugiaodien.com/wp-content/uploads/2017/08/o-tu-dong-mercedes-benz-mau-den1.jpg", "Ô TỰ ĐỘNG NAM", "Bất ngờ với công năng của ô dù loại to MERCEDES-BENZ", 630000, 580000, 8, "http://aomua.maugiaodien.com/cua-hang/o-tu-dong-mercedes-benz-mau-den-cho-nam/", 1),
    new product("http://aomua.maugiaodien.com/wp-content/uploads/2017/08/o-tu-dong-lotosblume-can-go-den02.jpg", "Ô TỰ ĐỘNG NAM", "Ô tự động LOTOSBLUME cán gỗ màu đen", 600000, 580000, 5, "http://aomua.maugiaodien.com/cua-hang/o-tu-dong-lotosblume-can-go-mau-den/", 2),
    new product("http://aomua.maugiaodien.com/wp-content/uploads/2017/08/o-tu-dong-chong-lat-dep-02.jpg", "Ô TỰ ĐỘNG NAM", "Ô golf tự động chống lật rechar sang trọng", 450000, 400000, 11, "http://aomua.maugiaodien.com/cua-hang/o-tu-dong-chong-lat-rechar/", 1),
    new product("http://aomua.maugiaodien.com/wp-content/uploads/2017/08/123.jpg", "Ô TỰ ĐỘNG NAM", "Ô tự động mercedes-benz màu xanh lựa chọn hoàn hảo cho bạn", 560000, 450000, 10, "http://aomua.maugiaodien.com/cua-hang/o-tu-dong-mercedes-benz-mau-xanh/", 1)
]
//  tb.innerHTML+='<div><img class="photo" src="http://aomua.maugiaodien.com/wp-content/uploads/2017/08/banner69-e1607875478509.jpg" alt=""></div>'
for (let i = 0; i < products.length; i++) {
    console.log(i.photo)
    tb.innerHTML += `
                
                <div class="product" >
                    <img class="photo-product" src="${products[i].photo}" alt="">
                    <p class="type">${products[i].type}</p>
                    <p class="dec">${products[i].dec}</p>
                    <div>
                        <span class="cost"><del>${formatCurrency(products[i].cost)}</del></span>
                        <span class="price">${formatCurrency(products[i].price)}</span>
                        
                    </div>
                    <div class="onsale">
                        <span class="sale">-${products[i].sale}%</span>
                    </div>
                    <div>
                        <button  type="button" onclick="addpr(${i})">
                            
                            <span>Thêm Vào Giỏ Hàng</span>
                        </button>
                    </div>       
                </div>
        `

}

function formatCurrency(number) {
    return number.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
}
let cart = [
    //     new product("http://aomua.maugiaodien.com/wp-content/uploads/2017/08/o-tu-dong-chong-uv-tan-2-lop-007.jpg","Ô TỰ ĐỘNG NAM","Ô tự động cán da 2 lớp tán cao cấp cho doanh nhân",453000,500000,7,"http://aomua.maugiaodien.com/cua-hang/o-tu-dong-can-da-2-lop-tan-cao-cap-cho-doanh-nhan/" ),
    //     new product("http://aomua.maugiaodien.com/wp-content/uploads/2017/08/t_________ng_10_nan_B586_m__u_n__u2.jpg","Ô TỰ ĐỘNG NAM","Ô tự động 10 nan cao cấp cho doanh nhân B586",450000,420000,7,"http://aomua.maugiaodien.com/cua-hang/o-tu-dong-10-nan-cao-cap-cho-doanh-nhan-b586/"  ),
];
function show() {
    let sp = "";
    for (let i = 0; i < cart.length; i++) {
        sp += `
            <div class="cart">
                <div class="cart-sp" style="display: flex;">
                    <img src="${cart[i].photo}" alt="">
                    <p>${cart[i].dec}</p>
                </div>
                <div class="cart-pr">
                    <p style="color: red "><del style="color: black ;font-size:13px  "> ${formatCurrency(cart[i].cost)}</del>  ${formatCurrency(cart[i].price)}</p>
            
                    <p style="display: flex;">
                        <button onclick="tru(${i})" style="margin-left :30px">-</button>
                        <input type="number" readonly class="sl" value="${cart[i].quan}" width=20px>
                        <button onclick="cong(${i})">+</button>
                    </p>
                    <p style="color: red  ">${formatCurrency(cart[i].price * cart[i].quan)}</p>   
                    <p>
                    <button onclick="buy(${i})"> Mua hàng</button>
                    <button onclick="del(${i})">xoá</button>
                    
                    </p>
                    
                </div>
            </div>`


    }

    document.getElementById('cart').innerHTML = sp
}

function addpr(i) {
    if (cart.indexOf(products[i]) != -1) {
        products[i].quan += 1
    } else {
        products[i].quan = 1
        cart.push(products[i])
    }
    document.getElementById('cart').innerHTML = ""
    show()
}

function del(i) {
    cart.splice(i, 1)
    document.getElementById('cart').innerHTML = ""
    show()
}
function tru(i) {
    cart[i].quan -= 1;
    if (cart[i].quan < 0) {
        if (confirm('bạn có muốn xoá sản phẩm ra khỏi giỏ hàng không') == true) {
            del(i);
        } else {
            cart[i].quan = 0
        }
    }
    document.getElementById('cart').innerHTML = ""
    show()
}
function cong(i) {
    cart[i].quan += 1;
    document.getElementById('cart').innerHTML = ""
    show()
}
function buy(i) {
    document.getElementById('dec').value = cart[i].dec
    document.getElementById('soluong').value = cart[i].quan
    document.getElementById('dongia').value = cart[i].price
    document.getElementById('thanhtien').value = cart[i].quan * cart[i].price
    document.getElementById('form-buy').style.display = "block"

}
function cancel() {
    document.getElementById('form-buy').style.display = "none"
}
