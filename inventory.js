function append(){

    let data=JSON.parse(localStorage.getItem("products"))||[];

    let all_products=document.getElementById("all_products");

    all_products.innerHTML=null;

    data.forEach(function (el,index){

        let div=document.createElement("div");

        let img=document.createElement("img");
        img.src=el.image;

        let t=document.createElement("p");
        t.innerText=el.type;

        let d=document.createElement("p");
        d.innerText=el.desc;

        let p=document.createElement("p");
        p.innerText=el.price;

        

        let btn=document.createElement("button");
        btn.innerText="Remove";

        btn.addEventListener("click",function(){remove(index)});

        div.append(img,d,p,t,btn);
        all_products.append(div);
    });
}
append();

function remove(index){
    let data=JSON.parse(localStorage.getItem("products"))||[];

    let newData=data.filter(function(el,i){
        if(i === index)
        {
            let garbage=JSON.parse(localStorage.getItem("garbage"))||[];
            garbage.push(el);
            localStorage.setItem("garbage",JSON.stringify(garbage));

        }
        else{
            return i !== index;
        }
    });

    localStorage.setItem("products",JSON.stringify(newData));
    append();


}