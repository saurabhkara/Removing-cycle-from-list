console.log("Working");

function List(value) {
  this.value = value;
  this.next = null;
}

const list1 = new List(10);
const list2 = new List(20);
const list3 = new List(30);

list1.next = list2;
list2.next = list3;
list3.next = list1;

function breakCycle(obj) {
  let storage = new WeakSet([obj]);

  function helper(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          if (storage.has(obj[key])) {
            obj[key] = null;
            break;
          } else {
            storage.add(obj[key]);
            helper(obj[key]);
          }
        }
      }
    }
  }
  helper(obj);
}
breakCycle(list1);
console.log(list1);
