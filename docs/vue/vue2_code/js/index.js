import { Watcher } from "./Watcher.js";
import { Observer } from "./Observer.js";
console.log(require("./Watcher"));
const data = {
  name: "join",
  pwd: "123456",
  arr: [1, 2, 3],
  obj: {
    childName: "test",
  },
};
new Watcher(data, "name", (newValue) => {
  console.log("检测到数据变化 " + newValue);
});
data.name = "set";
console.log(data);
