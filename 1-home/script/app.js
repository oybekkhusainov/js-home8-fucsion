function dabl(raqam) {
        let dig = raqam.toString().split('');
        
        dig.sort(function(a, b) {
            return b - a;
        });
        
        let result = parseInt(dig.join(''));
        
        return result;
    }
    document.write(dabl(123));
    