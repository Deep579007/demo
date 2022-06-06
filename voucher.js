let array = JSON.parse(localStorage.getItem('user'));

document.getElementById('wallet_balance').innerText=array;

async function searchVouchers(){
    try{
        const res = await fetch(`https://masai-vouchers-api.herokuapp.com/api/vouchers`);

        let data = await res.json();

        let voucher = data.Search;

        append(voucher_list);
    }
    catch(err){
        console.log(err);
    }
}

function append(data){
    document.getElementById('voucher_list').innerHTML=null;

    data.forEach(ele =>{

        let box = document.createElement('div');

        let imgbox = document.createElement('div');

        let img = document.createElement('img');
        img.src = ele.image;
        Imgbox.append(img);

        let name = document.createElement('p');
        name.innerText= ele.name;

        let price = document.createElement('p');
        price.innerText= ele.price;
        
        let btn = document.createElement('button');
        btn.innerText ="Buy";

        btn.addEventListener('click',function(){

            addData(ele);
            
        })
        btn.setAttribute("class","voucher")

        box.append(img,name,price,btn);

        document.getElementById('voucher_list').append(box);



    });
}

function addData(ele){
    let arr=[];
    localStorage.setItem('user',JSON.stringify(arr));
    
    window.location.href ='purchase.html';

}

async function main(){
    let data = await searchVouchers();
    if(data == undefined){
        return false;
    }
    append(data);
}

// let array = JSON.parse(localStorage.getItem('user'));
// let put= document.querySelector('#wallet_balance').innerHTML= array.wallet;
// let down=document.querySelector('#voucher_list');
// let bottom= JSON.parse(localStorage.getItem('purchase'))||[];

// let newfunction=async()=>{
//     try{
//         let url=`https://masai-vouchers-api.herokuapp.com/api/vouchers`;
//         let datain= await fetch(url);
//         let dataout = await datain.json();
//         appendhere(dataout[0].vouchers);
//     }
//     catch(error){
//         console.log(error);
//     }
// }
// newfunction();

// let appendhere=(data)=>{
//     data.forEach((ele,index)=>{
           
//         let create= document.createElement("div");
//         create.setAttribute("class","voucher");

//         let one = document.createElement("img");
//         one.src=ele.image;

//         let two = document.createElement("h2");
//         two.innerText=ele.name;

//         let third = document.createElement("p");
//         third.innerText=ele.price;

//         let btn = document.createElement("button");
//         btn.innerText="Buy";
//         btn.setAttribute("class","buy_voucher");
//         btn.addEventListener("click",function(){
//             callfunction(ele);
//         })
//         create.append(one,two,third,btn);

//         put.append(create);

//     });
// }

// let callfunction=(ele)=>{
//     bottom.push(ele);
//     localStorage.setItem("purchase",JSON.stringify(bottom));
//     let bag=array.wallet;
//     let money=ele.price;
//     let paisa=bag-money;
//     console.log(paisa);
//     window.location.reload();
// }