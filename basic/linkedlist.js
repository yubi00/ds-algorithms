class LinkedList {
    constructor() {
        this.head = null //first element of the list
        this.tail = null //last element of the list
    }

    append(value) {
        const newNode = { value: value, next: null }
        if( this.tail ) {
            this.tail.next = newNode
        } 
        this.tail = newNode
        if( !this.head ) {
            this.head = newNode
        }
    }

    prepend(value) {
        const newNode = { value: value, next: this.head }

        this.head = newNode
        if( !this.tail ) {
            this.tail = newNode
        }
    }

    delete(value) {
        if( !this.head ) {
            return
        }

        while (this.head && this.head.value === value) {
            this.head = this.head.next
        }

        let curNode = this.head 

        while(curNode.next) {
            if(curNode.next.value === value) {
                curNode.next = curNode.next.next
            } else {
                curNode = curNode.next
            }
        }
        if (this.tail.value === value ) {
            this.tail = curNode
        }
    }

    insertAfter(value, afterValue) {
        const existingNode = this.find(afterValue)

        if(existingNode) {
            const newNode = { value: value, next: existingNode.next }
            existingNode.next = newNode
        }
    }

    find(value) {
        if(!this.head) {
            return
        }

        let curNode = this.head
        while(curNode) {
            if(curNode.value === value ) {
                return curNode;
            }
            curNode = curNode.next
        }

        return null
    }

    toArray() {
        const elements = []
        let curNode = this.head

        while(curNode) {
            elements.push(curNode)
            curNode = curNode.next
        }
        return elements

    }
}

const linkedlist1 = new LinkedList()
linkedlist1.append(1)
linkedlist1.append('hello there')
linkedlist1.append('hello')
linkedlist1.append(true)
linkedlist1.append('yubikhadka')
linkedlist1.append('hello there')
linkedlist1.append('yubi love buchu')
linkedlist1.append(3434)
linkedlist1.prepend('first value')
linkedlist1.delete('hello there')
linkedlist1.delete('first value')
linkedlist1.delete(3434)

console.log(linkedlist1.toArray())

console.log(linkedlist1.find('yubi love buchu'))
console.log(linkedlist1.find('hello there'))

linkedlist1.insertAfter('new vlaue after ', 'yubikhadka')
console.log(linkedlist1.toArray())