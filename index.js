//store the products array in localstorage as "products"

function pumadetails(t,d,p,i){
    this.type=t;
    this.desc=d;
    this.price=p;
    this.image=i;
}

function pumaData(e){
    e.preventDefault();
    let form=document.getElementById("products");
    let image=form.image.value;
    let type=form.type.value;
    let desc=form.desc.value;
    let price=form.price.value;
    

    let puma1= new pumadetails(type,desc,price,image);

    let data=JSON.parse(localStorage.getItem("products"))||[];

    data.push(puma1);
    
    localStorage.setItem("products",JSON.stringify(data));
    console.log(puma1);

    window.location.href="inventory.html";

}
