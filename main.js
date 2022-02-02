const Contenedor = require("./contenedor");

const objeto1 = {                                                                                                                                                    
    title: 'GPU 3060',                                                                                                                                 
    price: 260000,                                                                                                                                     
    thumbnail: 'https://www.nvidia.com/content/dam/en-zz/Solutions/geforce/news/geforce-rtx-3060-ti-out-december-2/nvidia-geforce-rtx-3060-ti-announcement-article-key-visual.jpg'                                                                                                                                             
  }

const objeto2 = {                                                                                                                                                    
    title: 'GPU 3070',                                                                                                                              
    price: 300000,                                                                                                                                     
    thumbnail: 'https://pcmrace.s3.amazonaws.com/2020/11/geforce-ampere-rtx-3070-og-image-1200x630-1.jpg'                                                                                                                                          
  }

const objeto3 = {                                                                                                                                                    
    title: 'GPU 3080',                                                                                                                          
    price: 340000,                                                                                                                                     
    thumbnail: 'https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/nvidia_geforce_rtx_3080_angle_1598979564701.jpg'                                                                                                                                          
  }

let cont = new Contenedor("productos");
cont.save(objeto1)
.then(id => console.log(`objeto con el id ${id} guardardo`))
.catch(e => console.log(e));
let cont2 = new Contenedor("productos")
cont2.save(objeto2)
.then(id => console.log(`objeto con el id ${id} guardardo`))
.catch(e => console.log(e));
let cont3 = new Contenedor("productos")
cont3.save(objeto3)
.then(id => console.log(`objeto con el id ${id} guardardo`))
.catch(e => console.log(e));

cont3.getAll()
.then(contenido => console.log(contenido))
.catch(e => console.log( "error en obtener todos" + e))

cont3.getById(2)
.then( contenido => console.log(contenido))
.catch(e => console.log("Error en buscar ese id" + e))