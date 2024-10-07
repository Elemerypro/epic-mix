let Input=document.querySelector('.input');
let AddButtton=document.querySelector('addbutton');
let AddLsist=document.querySelector('addlist');

let items=[];

if (localStorage.getItem('items')==null){
    items=[]
}else{
    items = JSON.parse(localStorage.getItem('items'))
    display()

}
function addList(){
    let item={
        Input:Input.value
    }

    items.push(item)
    localStorage.setItem('items', JSON.stringify(items))

    console.log(items);
    clearInput()
    display()
}

function clearInput(){
        Input.value=null

}


function display(){
    let cartona=''
    for(let i=0;i<items.length;i++){
        cartona+=`
            <div class="col-12 mx-auto my-1 d-flex justify-content-between w-100 items" >
                    <ul class="addedlist ">
                        <li class="text-white fw-bold">Item:${items[i].Input}</li>

                    </ul>
                    <button class="removebutton" onclick="removeItem(${i})"><i class="fa-solid fa-x"></i></button>
                </div>
        `
    }

    document.querySelector('.list').innerHTML=cartona;
}

function removeItem(deletedindex){
    items.splice(deletedindex,1);
    display()
    console.log(deletedindex);
    localStorage.setItem('items', JSON.stringify(items))

    
}