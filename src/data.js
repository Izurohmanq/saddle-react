import Montana from "../src/assets/images/montana.jpg"
import postman from "../src/assets/images/postman.jpg"
import brownco from "../src/assets/images/brownco.jpg"
import cust1 from "../src/assets/images/motor1.jpeg"
import cust2 from "../src/assets/images/motor2.jpeg"
import cust3 from "../src/assets/images/motor3.jpeg"
import cust4 from "../src/assets/images/motor4.jpeg"
import cust5 from "../src/assets/images/motor5.jpeg"
import cust6 from "../src/assets/images/motor6.jpeg"

class Product {
    constructor(id, image, judul, desc, bahan, harga) {
        this.id = id
        this.image = image
        this.judul = judul
        this.desc = desc
        this.bahan = bahan
        this.harga = harga
    }

}

class CustPhotos {
    constructor(cust_img){
        this.cust_img = cust_img
    }
}

const dataProduct = [
    new Product(1, Montana, 'Montana', 'Bahan cordura Jansport Lapis busa tebal heavy oz Lapis fooring anti air. 1 kantong seleting utama 3 belt loop kaitan ke rangka / behel dan shock breaker Dimensi: 22cm x 10cm 15cm', 'Cordura', 'Rp100.000'),
    new Product(2, brownco, 'Brownco','Bahan cordura Jansport Lapis busa tebal heavy oz Lapis fooring anti air. 1 kantong seleting utama 3 belt loop kaitan ke rangka / behel dan shock breaker Dimensi: 22cm x 10cm 15cm', 'Cordura', 'Rp125.000'),
    new Product(3, postman, 'Postman','Bahan cordura Jansport Lapis busa tebal heavy oz Lapis fooring anti air. 2 kantong seleting utama 3 belt loop kaitan ke rangka / behel dan shock breaker Dimensi: 27cm x 12cm 17cm', 'Cordura', 'Rp125.000')
]

const dataPhoto = [
    new CustPhotos(cust1),
    new CustPhotos(cust2),
    new CustPhotos(cust3),
    new CustPhotos(cust4),
    new CustPhotos(cust5),
    new CustPhotos(cust6),
]

export { dataProduct, dataPhoto }