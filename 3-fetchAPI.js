//* ===========================================================
//*                          3- FETCH API
//*=============================================================

//? Dis kaynaklardan veri getirmek icin kullanilan basit bir arabirimdir.
//? Ag istekleri yapmamizi ve cevaplari yonetebilmemize olanak saglar.
//? Javascript ortaminda en cok kullanilan Asenkron islem orneklerinin basinda
//? gelmektedir.

//? fetch() fonksiyonu veri getirmek istediginiz kaynagin yolunu gosteren zorunlu
//? bir parametre almaktadir ve bu istegin cevabini gosteren bir Promise dondurmektedir.


// fetch() dafult get istedğinde bulunur!

fetch('https://api.github.com/user')
.then((res)=> {
    if(!res.ok){
        throw new Error(`Something went wrong: ${res.status}`);
    }
    return res.json();
})
.then((data)=> updateDom(data))
.catch((err)=> console.log(err));

const updateDom =(data)=>{
    const userdiv =document.querySelector('.users');
    data.forEach(()=>{
        const {login, avatar_url, html_url}= user;
        userdiv.innerHTML+= `<h2 class="text-warning">NAME:${user.login}</h2>
        <img src=${avatar_url}
    `;
});
};
