(()=>{

/**PASOS 1: CREAMOS EL AJAX o instanciamos o la variable   */    
const xhr =new XMLHttpRequest();

/**PASOS 2: buscamos el id en el html   */    
$xhr = document.getElementById("xhr");

/**PASOS 3: Creamos el fragmento donde ira nuestros datos  */    
$fragmento = document.createDocumentFragment();




/**PASOS 4: Creamos el evento a realizar    */ 
  

xhr.addEventListener("readystatechange",(e) =>{
    if(xhr.readyState !== 4)return;
    if (xhr.status >= 200 && xhr.status < 300) {
       // console.log("Exito de conexion")
        console.log(xhr.responseText);// la pagina en la consola
       // $xhr.innerHTML = xhr.responseText;// anexo a el html la pagina
        let json=JSON.parse(xhr.responseText);
        console.log(json);
        json.forEach((el) => {
            const $li = document.createElement("li");
            $li.innerHTML=`${el.name} -- ${el.email} -- ${el.phone}`;
            $fragmento.appendChild($li);

        });
        $xhr.appendChild($fragmento)
    }else{console.log("!!Error de conexion ")}

console.log(xhr);

})
/**PASOS 5: usamo el metodos y loque queremos abrir o usar    */     
xhr.open("GET","https://jsonplaceholder.typicode.com/users");
/**PASOS 6:enviamos     */     
xhr.send();

})();


//xhr.addEventListener(
/**Eventos : onabort onerrot onload onloadend onprogress 
 * readystatecahnge ontimemout  status  statustext
 * status= 404 no nos sirve
parse=convierte de json a javascript
 * 
 *  */