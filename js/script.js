let addButton = document.querySelector("#liveToastBtn")
// addButton.addEventListener('click', formSubmit)-gerek kalmadi





//form nesnesi seciliyor, submit olunca formSubmit fonksyonu calisiyor.
let form = document.querySelector("#formInput")
form.addEventListener('submit', formSubmit)
function formSubmit(event) { 
    event.preventDefault()
} //default islemi engelledik ve simdi formdaki veriyi adres cubuguna gitmeden gizlice alip isleyebiliriz. 
 





const inputBox = document.querySelector("#inputText") //formdaki input nesnesini sectik
const ulDOM = document.querySelector("#list")// formdaki ul nesnesini sectik






let addWarningToast = document.querySelector('#toastWarning') // toastWarning bildirimi icin htmlden id sini sectik
let addliveToast = document.querySelector('#liveToast') // liveToast bildirimi icin htmlden id sini sectik

let toastWarningGoster = () => {
    let warnShow = new bootstrap.Toast(addWarningToast)
    warnShow.show()
}//fonk. cagrilinca ekranda warningToast bildirimini gosteren fonsiyonu ekledik
let liveToastGoster = () => {
    let liveShow = new bootstrap.Toast(addliveToast)
    liveShow.show()
}//fonk. cagrilinca ekranda liveToast bildirimini gosteren fonsiyonu ekledik

/* "new" anahtar kelimesi ile bu şablonda bir obje oluşturabiliriz.
const ali = new Insan("ali",21);
console.log(ali.yas);// 21
Böylece artık "ali" isminde bir objemiz hazırlanmış oldu. Peki bu fonksiyon yöntemini kullanarak bir obje hazırladığımızı düşünelim. Bu objeye sonradan ekstra bir fonksiyon eklemek istersek? Kafanız karışmasın fonksiyon kurucu yardımıyla hazırladığımız bir sınıf var ve bu Sınıfı kullanarak "new" anahtar kelimesiyle bir obje oluşturduk. 
*/



function getLocalStorage() {
    list.innerHTML = localStorage.getItem("toDO")} // LocalStorage a kayitli bilgileri getir ekrana


//

console.log(inputBox);
function newElement() {
    if ((inputBox.value === "") || (inputBox.value.length <= 1 )) {//input bossa ya da bosluk bırakilmissa bildirim goster fonk.u calisir
        toastWarningGoster();
    }else {
        
        let li = document.createElement('li')
        li.innerHTML = inputBox.value;
        ulDOM.appendChild(li)

        let btn = document.createElement("button")
        btn.innerHTML = "x"
        btn.classList.add('close')
        li.appendChild(btn)

        liveToastGoster();//inputa veri girildiyse bildirim goster fonk.u calisir

    }
    inputBox.value = "" //inputu temizle
    addLocalStorage() //fonksiyonu cagir
}




function addLocalStorage () {
    localStorage.setItem("toDo", list.innerHTML)
}// LocalStorage'a toDo key'i ile bilgileri kaydet




//https://www.w3schools.com/jsref/event_target.asp
//ul icinde li ustunde click olayı olursa fonks. calissin
ulDOM.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        addLocalStorage() //localStorage'a eklensin
        //olayın meydana geldiği öğenin adi "li" ise checked classi calissin ya da dursun
        //toggle:acma-kapatma eylemi-tıklama-geri tıklama
        //https://www.w3schools.com/jsref/prop_element_classlist.asp
    } else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove(); // ust ogeyi silsin 
        addLocalStorage()//localStorage'a eklensin
        //https://www.w3schools.com/jsref/prop_node_parentelement.asp
    }
}, false);
        
        
