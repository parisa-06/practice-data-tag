        var tagname = document.getElementById('demo');
        console.log(tagname);
        var name = tagname.getAttribute('data-name');
        console.log(name);
        tagname.innerHTML = name;
        var test = tagname.setAttribute('data-name', 'Hero');
        
        
       