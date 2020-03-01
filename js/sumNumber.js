// 5->4->3>1
// 6->4->2->2
// 11853

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

class sumLinkedList{

    constructor(){
        this.root=null;
    }

    append(data){
        var newNode=new Node(data);
            if(this.root == null){
                this.root=newNode;
            }else{
                this.addData(this.root,newNode);
            }

    }

    addData(node,newNode){
        var endNode=node;
        while(node.next !=null){
                node=node.next;
                //console.log(node.data);
        }
        node.next=newNode;
    }

}
 class SumOfTwoNumber{

     constructor(node1,node2){
         this.node1=this.reverse(node1.root);
         this.node2=this.reverse(node2.root);
     }
     reverse(nodeData){
        var newNode=nodeData;
        var newNode1=new Node(newNode.data)
        this.newroot=newNode1;
        newNode=newNode.next;
//5->4->3->2->1
        while(newNode !=null){
               let n= new Node(newNode.data);
               n.next=this.newroot;
               this.newroot=n;
               newNode=newNode.next;
          }
        return this.newroot; 
     }
     sum(){
       let newNode1=this.node1;
       let newNode2=this.node2;
       let counter=0;
       while(counter<5){
           counter++;
           console.log(newNode1.data);
           newNode1=newNode1.next
       }
        
       

     }
     
 }
var link1=new sumLinkedList();
var link2=new sumLinkedList();
link1.append(5);
link1.append(4);
link1.append(3);
link1.append(2);
link1.append(1);

link2.append(70);
link2.append(2);
link2.append(6);
link2.append(4);
link2.append(5);


//console.log(link1);
//console.log(link2);

let doSum=new SumOfTwoNumber(link1,link2);
doSum.sum();
//console.log(doSum);

