const pro = new Promise((resolve, reject) => {

  const innerPro = new Promise((r, reject) => {
    setTimeout(() => {
      r(1);
    });
    console.log(2);
    r(3);
  });
    
    resolve(4);
    
    innerPro.then((res) => console.log(res));
    
  console.log("yideng");
});

// pro.then((res) => console.log(res));

console.log("end");

