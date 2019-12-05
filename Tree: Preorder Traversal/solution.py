def preOrder(root):
    stack = [root]
    if len(stack) == 0:
        return
    answer = ""
    while len(stack) > 0:
        current = stack.pop()
        if current.right != None:
            stack.append(current.right)
        if current.left != None:
            stack.append(current.left)
        answer = answer + str(current.info) + " "
    answer = answer[0 : (len(answer) - 1)]
    print(answer)

class Node:
    def __init__(self, info): 
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

class BinarySearchTree:
    def __init__(self): 
        self.root = None

    def create(self, val):  
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root
         
            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

tree = Node(1)
tree.right = Node(2)
tree.right.right = Node(5)
tree.right.right.left = Node(3)
tree.right.right.left.right = Node(4)
tree.right.right.right = Node(6)
preOrder(tree)
