

class Usuarios {
    
    constructor() {
        this.personas= []
    }

    agregarPersona(id, nombre, sala){
        let persona= {id, nombre, sala} //id: id, nombre: nombre
        this.personas.push(persona)

        return this.personas
    }

    getPersona(id){
        let persona= this.personas.filter(persona => persona.id=== id) [0]; //quiero la 1era posicion, ya que filter devuelve un arreglo

        return persona
    }

    getPersonas(){
        return this.personas
    }

    getPersonasPorSala(sala){
        let personasSala= this.personas.filter(persona => persona.sala===sala)
        return personasSala
    }

    borrarPersona(id){ //reemplaza el arreglo eliminando la persona
        let personaBorrada= this.getPersona(id)
        
        this.personas= this.personas.filter(persona=> { 
            return persona.id !== id
        })

        return personaBorrada
    }

}

module.exports = {
    Usuarios
}