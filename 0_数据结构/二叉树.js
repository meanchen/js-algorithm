      //定义节点
      class Node {
        constructor(data) {
          this.root = this //根节点
          this.data = data //当前数据
          this.left = null //左子树
          this.right = null //右子树
        }
      }
      //创建二叉树搜索树
      class BinarySearchTree {
        constructor() {
          this.root = null
        }
        //插入节点
        insert(data) {
          const newNode = new Node(data)
          const insertNode = (node, newNode) => {
            //新加入值小于node节点
            if (newNode.data < node.data) {
              //向左子树插入
              if (node.left === null) {
                node.left = newNode
              } else {
                insertNode(node.left, newNode)
              }
            } else {
              //向右子树插入
              if (node.right === null) {
                node.right = newNode
              } else {
                insertNode(node.right, newNode)
              }
            }
          }
          //根节点
          if (!this.root) {
            this.root = newNode
          } else {
            insertNode(this.root, newNode)
          }
        }
        //前序遍历----根-左-右
        preOrder() {
          let arr = []
          const preOrderNode = (node) => {
            if (node !== null) {
              arr.push(node.data)
              preOrderNode(node.left)
              preOrderNode(node.right)
            }
          }
          preOrderNode(this.root)
          return arr
        }
        //中序遍历  -- 左-根-右
        inOrder() {
          let arr = []
          const inOrderNode = (node) => {
            if (node !== null) {
              inOrderNode(node.left)
              arr.push(node.data)
              inOrderNode(node.right)
            }
          }
          inOrderNode(this.root)
          return arr
        }
        //后序遍历   ---左-右-根
        postOrder() {
          let arr = []
          const postOrderNode = (node) => {
            if (node !== null) {
              postOrderNode(node.left)
              postOrderNode(node.right)
              arr.push(node.data)
            }
          }
          postOrderNode(this.root)
          return arr
        }
        //最小值----在左树上最左的点
        getMin(node) {
          const minNode = (node) => {
            return node ? (node.left ? minNode(node.left) : node) : null
          }
          return minNode(node || this.root)
        }
        //最大值----在右树上最右的点
        getMax(node) {
          const maxNode = (node) => {
            return node ? (node.right ? maxNode(node.right) : node) : null
          }
          return maxNode(node || this.root)
        }
        //查找特定值
        find(data) {
          const findNode = (node, data) => {
            if (node === null) return false
            if (node.data === data) return node
            // 没有的话继续迭代，判断：小值的话继续找左树，大值的话继续找右树
            return findNode(data < node.data ? node.left : node.right, data)
          }
          return findNode(this.root, data)
        }
        remove(data) {
            // 找1
          const removeNode = (node, data) => {
            if (this.find(data) === false) {
              return null
            }
            // 若小于，左树找
            if (data < node.data) {
              node.left = removeNode(node.left, data)
              return node
            //   若大于， 右树找
            } else if (data> node.data) {
              node.right = removeNode(node.right, data)
              return node
            } else {
              // 键等于 node.data
              // 第一种情况---删除子节点
              if (node.left == null && node.right == null) {
                node = null
                return node
              }
              // 第二种情况---- 删除的结点有右树
              if (node.left == null) {
                node = node.right
                return node
                // 删除的结点有左树
              } else if (node.right == null) {
                node = node.left
                return node
              }
              // 第三种情况----删除的结点左右树都有
              const temp = this.minNode(node.right)
              node.data = temp.data
              node.right = removeNode(node.right, temp.data)
              return node
            }
          }
          return removeNode(this.root, data)
        }
      }

      //调用
      const tree = new BinarySearchTree()
      tree.insert(11)
      tree.insert(7)
      tree.insert(5)
      tree.insert(3)
      tree.insert(9)
      tree.insert(8)
      tree.insert(1)
      tree.insert(10)
      tree.insert(13)
      tree.insert(12)
      tree.insert(14)
      tree.insert(20)

      console.log(tree)
      console.log(tree.remove(120));// null
      console.log(tree)
      console.log('前序遍历', tree.preOrder())
      console.log('中序遍历', tree.inOrder())
      console.log('后序遍历', tree.postOrder())
      console.log('最小值', tree.getMin())
      console.log('最大值', tree.getMax())
      console.log('查找特定值', tree.find(10));