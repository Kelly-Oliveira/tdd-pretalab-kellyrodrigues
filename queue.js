class Queue {
  elements
  constructor(){
    this.elements = []
  }
  
  size(){
    return this.elements.length
  }

  add(item){
    return this.elements.push(item)
  }

  peek(){
    return this.elements.unshift()
  }

  dequeue(item){
    return this.elements.shift(item)
  }
}

module.exports = Queue