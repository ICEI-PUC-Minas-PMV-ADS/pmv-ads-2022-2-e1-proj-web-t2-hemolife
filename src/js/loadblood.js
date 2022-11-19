window.onload = function () {
    //seta valor inicial caso não tenha dado no localStorage
    if (localStorage.getItem("hemoNivel1") === null) {
        localStorage.setItem('hemoNivel1', '3');
    }
    if (localStorage.getItem("hemoNivel2") === null) {
        localStorage.setItem('hemoNivel2', '2');
    }
    if (localStorage.getItem("hemoNivel3") === null) {
        localStorage.setItem('hemoNivel3', '3');
    }
    if (localStorage.getItem("hemoNivel4") === null) {
        localStorage.setItem('hemoNivel4', '2');
    }
    if (localStorage.getItem("hemoNivel5") === null) {
        localStorage.setItem('hemoNivel5', '3');
    }
    if (localStorage.getItem("hemoNivel6") === null) {
        localStorage.setItem('hemoNivel6', '2');
    }
    if (localStorage.getItem("hemoNivel7") === null) {
        localStorage.setItem('hemoNivel7', '2');
    }
    if (localStorage.getItem("hemoNivel8") === null) {
        localStorage.setItem('hemoNivel8', '1');
    }
    //nivel01
    var nivel01 = localStorage.getItem('hemoNivel1')
    bloodType1 = document.getElementById("blood01");
    if (nivel01 === '1') {
        bloodType1.classList.remove("blood02");
        bloodType1.classList.add("blood01");
    }
    if (nivel01 === '2') {
        bloodType1.classList.remove("blood01");
        bloodType1.classList.remove("blood03");
        bloodType1.classList.add("blood02");
    }
    if (nivel01 === '3') {
        bloodType1.classList.remove("blood02");
        bloodType1.classList.add("blood03");
    };
    

    //nivel02
    var nivel02 = localStorage.getItem('hemoNivel2')
    bloodType2 = document.getElementById("blood02");
    if (nivel02 === '1') {
        bloodType2.classList.remove("blood02");
        bloodType2.classList.add("blood01");
    }
    if (nivel02 === '2') {
        bloodType2.classList.remove("blood01");
        bloodType2.classList.remove("blood03");
        bloodType2.classList.add("blood02");
    }
    if (nivel02 === '3') {
        bloodType2.classList.remove("blood02");
        bloodType2.classList.add("blood03");
    };

    //nivel03
    var nivel03 = localStorage.getItem('hemoNivel3')
    bloodType3 = document.getElementById("blood03");
    if (nivel03 === '1') {
        bloodType3.classList.remove("blood02");
        bloodType3.classList.add("blood01");
    }
    if (nivel03 === '2') {
        bloodType3.classList.remove("blood01");
        bloodType3.classList.remove("blood03");
        bloodType3.classList.add("blood02");
    }
    if (nivel03 === '3') {
        bloodType3.classList.remove("blood02");
        bloodType3.classList.add("blood03");
    };

    //nivel04
    var nivel04 = localStorage.getItem('hemoNivel4')
    bloodType4 = document.getElementById("blood04");
    if (nivel04 === '1') {
        bloodType4.classList.remove("blood02");
        bloodType4.classList.add("blood01");
    }
    if (nivel04 === '2') {
        bloodType4.classList.remove("blood01");
        bloodType4.classList.remove("blood03");
        bloodType4.classList.add("blood02");
    }
    if (nivel04 === '3') {
        bloodType4.classList.remove("blood02");
        bloodType4.classList.add("blood03");
    };


    //nivel05
    var nivel05 = localStorage.getItem('hemoNivel5')
    bloodType5 = document.getElementById("blood05");
    if (nivel05 === '1') {
        bloodType5.classList.remove("blood02");
        bloodType5.classList.add("blood01");
    }
    if (nivel05 === '2') {
        bloodType5.classList.remove("blood01");
        bloodType5.classList.remove("blood03");
        bloodType5.classList.add("blood02");
    }
    if (nivel05 === '3') {
        bloodType5.classList.remove("blood02");
        bloodType5.classList.add("blood03");
    };

    //nivel06
    var nivel06 = localStorage.getItem('hemoNivel6')
    bloodType6 = document.getElementById("blood06");
    if (nivel06 === '1') {
        bloodType6.classList.remove("blood02");
        bloodType6.classList.add("blood01");
    }
    if (nivel06 === '2') {
        bloodType6.classList.remove("blood01");
        bloodType6.classList.remove("blood03");
        bloodType6.classList.add("blood02");
    }
    if (nivel06 === '3') {
        bloodType6.classList.remove("blood02");
        bloodType6.classList.add("blood03");
    };
    //nivel07
    var nivel07 = localStorage.getItem('hemoNivel7')
    bloodType7 = document.getElementById("blood07");
    if (nivel07 === '1') {
        bloodType7.classList.remove("blood02");
        bloodType7.classList.add("blood01");
    }
    if (nivel07 === '2') {
        bloodType7.classList.remove("blood01");
        bloodType7.classList.remove("blood03");
        bloodType7.classList.add("blood02");
    }
    if (nivel07 === '3') {
        bloodType7.classList.remove("blood02");
        bloodType7.classList.add("blood03");
    };
    //nivel 08
    var nivel08 = localStorage.getItem('hemoNivel8')
    bloodType8 = document.getElementById("blood08");
    if (nivel08 === '1') {
        bloodType8.classList.remove("blood02");
        bloodType8.classList.add("blood01");
    }
    if (nivel08 === '2') {
        bloodType8.classList.remove("blood01");
        bloodType8.classList.remove("blood03");
        bloodType8.classList.add("blood02");
    }
    if (nivel08 === '3') {
        bloodType8.classList.remove("blood02");
        bloodType8.classList.add("blood03");
    };
}