console.log('Welcome Jio');

// Write code to print mirror image of a tree?

class Node{
   data=null;
    left=null;
    right=null;
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }

    
}

class MirrorTree{
    constructor(){
        this.root=null;
    }

    insert(data){
        var newNode=new Node(data);

        if(this.root == null){
            this.root=newNode;
        }else{
            this.insertNewNode(this.root,newNode);
        }
    }

    insertNewNode(node,newNode){
        if(newNode.data < node.data){
            if(node.left==null){
                node.left=newNode;
            }else{
                this.insertNewNode(node.left,newNode);
            }
        }else{
            if(node.right == null){
                node.right=newNode;
            }else{
                this.insertNewNode(node.right,newNode);
            }
        }
    }

    mirrorDisplay(){
        //var newNode=new Node(this.root.data);
        //newNode=this.root;
           // this.mirrorDisplayPattern(this.root);
    }

    mirrorDisplayPattern(node){
        //console.log('node data is comming',node);
         if(node == null){
             return ;
         }else{
             var left=this.mirrorDisplayPattern(node.left);
             console.log(left);
             var right=this.mirrorDisplayPattern(node.right);
             console.log(right);
             newNode.left=right;
             newNode.right=left;
         }           
    }
    toPrintInorder(order){
            this.inOrder(this.root);
    }
    toPrintPostorder(order){
        console.log('*******************');
        this.postOrder(this.root);
}
toPrintPreorder(order){
    console.log('*******************');
    this.preOrder(this.root);
}
    inOrder(node){
        if(node == null){
            return;
        }
        this.inOrder(node.left);
        console.log(node.data);
        this.inOrder(node.right);
    }
    postOrder(node){
        if(node == null){
            return;
        }
        this.inOrder(node.left);
        this.inOrder(node.right);
        console.log(node.data);
    }
    preOrder(node){
        if(node == null){
            return;
        }
        console.log(node.data);
        this.inOrder(node.left);
        this.inOrder(node.right);
       
    }
    toPrintMirror(){
        this.toPrintMirror(this.root);
    }

    toPrintMirror(node){
        if(node==null){
            return;
        }

        var newNode=new Node(node.data);
        newNode.right=this.toPrintMirror(node.left);
        newNode.left=this.toPrintMirror(node.right);
    }
}

var bst=new MirrorTree();
bst.insert(12);
bst.insert(1);
bst.insert(2);
bst.insert(8);
bst.insert(9);
console.log(bst);
bst.toPrintInorder();
bst.toPrintPostorder();
bst.toPrintPreorder();
/*
            5                                   5
        4       6
    3                       =>              6       4
1                                           3     1
*/

console.log(bst);
