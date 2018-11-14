let library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
    ]

for (let i = 0; i < library.length; i++){
    let book = "'" + library[i].title + "'" + " by " + library[i].author + ".";
    if (library[i].readingStatus) {
    document.getElementById("read").innerHTML +=    "Already read " + book + "<br> ";
    } else {
    document.getElementById("read").innerHTML += "You still need to read " + book;
    }
   }
   