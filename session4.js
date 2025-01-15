// Stacks, Queues, Linked Lists and related operations.

// Implement the stack using the array. 
class stack {
    #_stack;
    constructor(size = +Infinity) {
        this.#_stack = [];
        this._size = size;
        this.top = -1;
    }
    
    #isFull() { 
        return this.top + 1 === this._size;
    }

    #isEmpty() { 
        return this.top === -1;
    }

    push(value) {
        if (this.#isFull()) { 
            throw new Error("Stack Overflow")
        }
        this.#_stack[++this.top] = value;
        return value;
    }
    
    pop() { 
        if (this.#isEmpty()) { 
            throw new Error("Stack Underflow");
        }
        const poppedValue = this.#_stack[this.top];
        this.#_stack[this.top--] = undefined;
        return poppedValue
    }

    peek() { 
        if (this.#isEmpty()) { 
            throw new Error("Stack is empty");
        }
        
        return this.#_stack[this.top]
    }

    // const Stack = new Stack(5);
//     console.log(Stack.push(10));
// console.log(Stack.push(20));
// console.log(Stack.peek());
// console.log(Stack.pop());
    

}

//! Reverse a string using a stack.
function reverse(str) { 
    const stack = [];
    for (let i = 0; i < str.length; i++) { 
        stack.push(str[i]);
    }
    const reversed = [];
    while (stack.length) { 
        reversed.push(stack.pop())
    }
    return reversed.join("")
}
console.log(reverse("hello"));
console.log(reverse("hello world"));
console.log(reverse("Ganishwar"));

// Check for balanced parentheses in an expression.
function checkBalanced(str) {
    const stack = [];
    for (let ind = 0; ind < str.length; ind++) { 
        if (str[ind] === "(" || str[ind] === "[" || str[ind] === "{") { 
            stack.push(str[ind]);
        } else if (str[ind] === ")" || str[ind] === "]" || str[ind] === "}") {
            if (stack.length === 0) return false;
            const top = stack.pop();
            if (top == "(" && str[ind] != ")") return false;
            if (top == "[" && str[ind] != "]") return false;
            if (top == "{" && str[ind] != "}") return false;    
        }
    }
    return stack.length === 0;
    
}

console.log(checkBalanced("({)}(})()}"));
console.log(checkBalanced("{[a+b]*(x+y)}"));

// ! Insert a node at the beginning of a linked list.
class Node { 
    constructor(data) { 
        this.data = data;
        this.next = null;
    }
} 

class LinkedList { 
    constructor() { 
        this.list = null;
    }

    insertNode(value, insertFirst = true) { 
        if (insertFirst) this.insertAtFirst(value);
        else this.insertAtLast(value);
    }

    insertAtFirst(value) { 
        const newNode = new Node(value);
        newNode.next = this.list;
        this.list = newNode;
    }
    insertAtLast(value) { 
        if (this.list == null) {
            this.list = new Node(value);
        } else { 
            let temp = this.list;
            while (temp.next != null) { 
                temp = temp.next;
            }
            temp.next = new Node(value);
        }
    }

    deleteLastNode() {
        if (this.list == null)
            return -1;
    } else if(this.list.next == null) { 
    this.list = null;
} else { 
    let temp = this.list;
    while (temp.next.next != null) { 
        temp = temp.next;
    }
}

middleElement() {
    let slow = this.list;
    let fast = this.list;
    while (fast != null && fast.next != null) { 
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow?.data;  
}
    
dedectCycle() {
    if (this.list == null) return false;
    let slow = this.list;
    let fast = this.list;
    do {
        slow = slow.next;
        fast = fast.next.next;
    } while (slow != fast && fast != null && fast.next != null);
    return slow == fast;
}
makeCycle() { 
    let temp = this.list;
    let x = null;
    while (temp.next != null) { 
        if (Math.random() < 0.3) {
            x = temp;
        }
        temp = temp.next
}
    temp.next = x;
    return x;
}

print() {
    const data = [];
    let temp = this.list;
    while (temp) { 
        data.push(temp.data);
        temp = temp.nxt;
    }
    console.log(data.join(" -> "));
}
} 




