// Crear una clase Libro que contenga los siguientes atributos: ✅

//     • ISBN ✅
//     • Titulo ✅
//     • Autor ✅
//     • Número de páginas ✅

// Crear sus respectivos métodos get y set correspondientes para cada atributo. ✅

// Crear el método toString() para mostrar la información relativa al libro con el siguiente formato: ✅

//     “El libro con ISBN creado por el autor tiene páginas” ✅

// En el fichero main: ✅
//     Crear 2 objetos Libro (los valores que se quieran) y mostrarlos por pantalla. ✅

// Por último, indicar cuál de los 2 tiene más páginas. ✅

class Libro{
    //ATRIBUTOS.
        private ISBN : number;
        private titulo : string;
        private autor : string;
        private numPaginas : number;
    //CONSTRUCTOR.
        constructor(newISBN : number, newTitulo : string, newAutor : string, newNumPaginas : number) {
            this.ISBN = newISBN;
            this.titulo = newTitulo;
            this.autor = newAutor;
            this.numPaginas = newNumPaginas;
        }
    //MÉTODOS.
        //GET.
            getISBN() : number{
                return this.ISBN;
            }

            getTitulo() : string{
                return this.titulo;
            }

            getAutor() : string{
                return this.autor;
            }

            getNumPaginas() : number{
                return this.numPaginas;
            }
        //SET.
            setISBN(valor : number) : void{
                this.ISBN = valor;
            }

            setTitulo(valor : string) : void{
                this.titulo = valor;
            }

            setAutor(valor : string) : void{
                this.autor = valor;
            }

            setNumPaginas(valor : number) : void{
                this.numPaginas = valor;
            }
        //TOSTRING.
            mostrarInfo() : void{
                console.log(`El libro ${this.titulo} con ISBN: ${this.ISBN} creado por ${this.autor} tiene ${this.numPaginas} páginas.`)
            }
        //COMPARACIÓN.
            compNumPaginas(x : Libro){
                if(this.numPaginas < x.numPaginas){
                    console.log(`${x.titulo} tiene más páginas que ${this.titulo}.`)
                }else if(this.numPaginas > x.numPaginas){
                    console.log(`${this.titulo} tiene más páginas que ${x.titulo}.`)
                }else{
                    console.log("Tienen el mismo número de páginas.")
                }
            }
}