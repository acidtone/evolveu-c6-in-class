const a = function(){
  const x = 1;
  b();
}

const b = function() {
  const x = 2;

}

const x = null;
a();