import "./Dep.js";
import "./Watcher.js";
import { Observer } from "./Observer.js";

const data = {
  name: "join",
  pwd: "123456",
  arr: [1, 2, 3],
  obj: {
    childName: "test",
  },
};
new Observer(data);
// data.name = "set_join";
console.log(data);
setTimeout(() => {
  data.name = "set_join";
  setTimeout(() => {
    console.log(data.name);
    data.name = "set_join";
  }, 1000);
}, 1000);
