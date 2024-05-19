var input = document.querySelector('input');
var pos1 = document.querySelector('.pos1');
var pos2 = document.querySelector('.pos2');
var pos3 = document.querySelector('.pos3');
var pos4 = document.querySelector('.pos4');
var pos5 = document.querySelector('.pos5');
var tbody = document.querySelector('.tbody');
var carry = document.querySelectorAll('.carry');
var mid = document.querySelectorAll('.mid');
var off = document.querySelectorAll('.off');
var supp4 = document.querySelectorAll('.supp4');
var supp5 = document.querySelectorAll('.supp5');
var tr = Array.from(tbody.getElementsByTagName('tr'))

carry.forEach(carries =>{
    carries.addEventListener('click',()=>{
        window.location.href = "https://dota2protracker.com/cheatsheets/pos-1"
    })
})

mid.forEach(middleners =>{
    middleners.addEventListener('click',()=>{
        window.location.href = "https://dota2protracker.com/cheatsheets/pos-2"
    })
})
off.forEach(offlainers =>{
    offlainers.addEventListener("click",()=>{
        window.location.href = "https://dota2protracker.com/cheatsheets/pos-3"
    })
})

supp4.forEach(supports4 =>{
    supports4.addEventListener('click',()=>{
        window.location.href = "https://dota2protracker.com/cheatsheets/pos-4"
    })
})

supp5.forEach(supports5 =>{
    supports5.addEventListener("click",()=>{
        window.location.href = "https://dota2protracker.com/cheatsheets/pos-5" 
    })
})


pos1.addEventListener('click',()=>{
    const rows = Array.from(tbody.querySelectorAll('#pos1'))
    rows.reverse().forEach(row =>{
        tbody.prepend(row)                    // Сортирует так как я хотел(филтер можно сказать)
    })
})

pos2.addEventListener('click',()=>{
    const rows = Array.from(tbody.querySelectorAll('#pos2'))
    rows.reverse().forEach(row =>{
        tbody.prepend(row)
    })
})

pos3.addEventListener('click',()=>{
    const rows = Array.from(tbody.querySelectorAll('#pos3'))
    rows.reverse().forEach(row =>{
        tbody.prepend(row)
    })
})
pos4.addEventListener('click',()=>{
    const rows = Array.from(tbody.querySelectorAll('#pos4'))
    rows.reverse().forEach(row =>{
        tbody.prepend(row)
    })
})
pos5.addEventListener('click',()=>{
    const rows = Array.from(tbody.querySelectorAll('#pos5'))
    rows.reverse().forEach(row =>{
        tbody.prepend(row)
    })
})



