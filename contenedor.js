const fs = require ("fs");

class Contenedor{
    static id = 0;
    static archivos = [];
    constructor(archivo){
        this.id = Contenedor.id;
        this.archivo = archivo;
    }

    async save(objeto){
        objeto.id = Contenedor.id;
        Contenedor.archivos.push(objeto);
        try{
            Contenedor.id++;
            await fs.promises.writeFile(`./${this.archivo}.txt`,JSON.stringify(Contenedor.archivos,null,2));
            return(objeto.id)
        }
        catch(e){
            throw(e)
        }
    }

    async getById(id){
        const productos = await this.getAll();
        const producto = productos.find(productos => productos.id === id);
        return producto;
    }
    async getAll(){
        try{
            const contenido = await fs.promises.readFile("./productos.txt","utf-8");
            return JSON.parse(contenido);
        }
        catch(e){
            throw e;
        }
    }

    async deleteById(id){
        const productos = await this.getAll();
        const filtrados = productos.filter(productos => productos.id != id);
        try{
            await fs.promises.writeFile("./productos.txt", JSON.stringify(filtrados,null,2));
        }
        catch (e){
            throw(e)
        }
    }
    async deleteAll(){
        try{
            await fs.promises.writeFile("./productos.txt", "")
        }
        catch (e){
            throw (e)
        }
    }
}

module.exports = Contenedor;