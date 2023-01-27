const Node = (value = null, next = null) => ({ value, next });

const LinkedList = () => {
  const list = Node();

  const head = () => list;

  const tail = () => {
    let currentNode = head();

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }

    return currentNode;
  };

  const append = (value) => {
    const lastNode = tail();
    lastNode.next = Node(value);
  };

  const prepend = (value) => {
    const firstNode = head();

    if (firstNode.value !== null) {
      firstNode.next = Node(firstNode.value, firstNode.next);
      firstNode.value = value;
    } else {
      firstNode.value = value;
    }
  };

  const size = () => {
    let currentNode = head();
    let currentIndex = 0;

    while (currentNode.next !== null) {
      currentIndex += 1;
      currentNode = currentNode.next;
    }

    return currentIndex + 1;
  };

  const at = (index) => {
    if (index > size() - 1 || index < 0) return `Invalid index. This function only accepts index from 0 to the current maximum of ${size() - 1}.`;

    let currentNode = head();
    let currentIndex = 0;

    while (currentIndex < index && currentNode !== null) {
      currentIndex += 1;
      currentNode = currentNode.next;
    }

    return currentNode;
  };

  const pop = () => {
    const penUltIndex = size() - 2;
    const penUltNode = at(penUltIndex);
    penUltNode.next = null;
  };

  const contains = (value) => {
    let currentNode = head();

    if (value === currentNode.value) return true;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      if (value === currentNode.value) return true;
    }

    return false;
  };

  const find = (value) => {
    let currentNode = head();
    let index = 0;

    if (value === currentNode.value) return index;

    while (currentNode.next !== null) {
      currentNode = currentNode.next;
      index += 1;
      if (value === currentNode.value) return index;
    }

    return null;
  };

  const toString = () => {
    let currentNode = head();
    let currentValue = '';

    while (currentNode.next !== null) {
      currentValue += `(${currentNode.value}) -> `;
      currentNode = currentNode.next;
    }
    currentValue += `(${currentNode.value}) -> null`;
    console.log(currentValue);
  };

  return {
    head,
    tail,
    append,
    prepend,
    size,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

// testing
const list1 = LinkedList();

// append - add to the end of the list
list1.append(0);
list1.append(1);
list1.append(2);
list1.append(3);

// prepend - add to the start of the list
list1.prepend(-1);

// toString - log the values in string
list1.toString();

// at - returns node at given index
const atTest0 = list1.at(0);
const atTest1 = list1.at(4);
const atTest2 = list1.at(5);
const atTest3 = list1.at(-1);

console.log({
  atTest0,
  atTest1,
  atTest2,
  atTest3,
});

// pop - remove the tail
list1.pop();
list1.toString();

// contains - returns true if value passed is in the list; false if it's not
const containsTest0 = list1.contains(-1);
const containsTest1 = list1.contains(2);
const containsTest2 = list1.contains(-2);
const containsTest3 = list1.contains(3);

console.log({
  containsTest0,
  containsTest1,
  containsTest2,
  containsTest3,
});

// find - returns the index of the node containing value; null if not found
const findTest0 = list1.find(-1);
const findTest1 = list1.find(2);
const findTest2 = list1.find(-2);
const findTest3 = list1.find(4);

console.log({
  findTest0,
  findTest1,
  findTest2,
  findTest3,
});

// test head, tail, size functions
console.log({
  head: list1.head(),
  tail: list1.tail(),
  size: list1.size(),
});
