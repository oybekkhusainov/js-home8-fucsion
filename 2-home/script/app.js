function arr(value, index, array) {
        return array.indexOf(value) === index;
      }
      let a = ['a', 3, 'a','b','b', 4, '1'];
      let result = a.filter(arr);
      
      document.write(result);
    
    