onmessage = (e) => {
  postMessage("收到啦: " + e.data);
  let myWorker = new Worker("./worker1.js");
  // close();
  myWorker.postMessage(2);
  myWorker.onmessage = (e) => {
    console.log(e.data);
  };
};
