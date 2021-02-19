 export class Emitter {
    constructor() {
        this.listeners={}

    }

    emit(event,...args){
        if(!Array.isArray(this.listeners[event])){
            return false
        }
        this.listeners[event].forEach(listener=>{
            listener(...args)
        })
        return true
    }

    subscribe(event,fn){
        this.listeners[event]=this.listeners[event]||[]
        this.listeners[event].push(fn)
        return ()=>{
            this.listeners[event]=this.listeners[event].filter(listener=>listener!==fn)
        }
    }



}


// EXAMPLE
// const emitter=new Emitter()
// const unsub=emitter.subscribe('mikhail',data=> console.log('Sub:',data))
//
// emitter.emit('mikhail',42)
//
//  setTimeout(()=>{
//      emitter.emit('mikhail','after 2 sec')
//  },2000)
//  setTimeout(()=>{
//     unsub()
//  },3000)
//
//  setTimeout(()=>{
//      emitter.emit('mikhail','after 4 sec')
//  },4000)