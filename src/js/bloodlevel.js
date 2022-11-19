window.addEventListener('load', function () {
  //Nivel 01
  var rangeslider1 = document.getElementById("sliderRange1");
  var bloodType1 = document.getElementById("blood01");
  nivel01 = window.localStorage.getItem('hemoNivel1')
  rangeslider1.addEventListener('input', function () {
    nivel01 = document.getElementById("sliderRange1").value
    localStorage.setItem('hemoNivel1', JSON.parse(nivel01));
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
  });
  //Nivel 02
  var rangeslider2 = document.getElementById("sliderRange2");
  var bloodType2 = document.getElementById("blood02");
  nivel02 = window.localStorage.getItem('hemoNivel2')
  rangeslider2.addEventListener('input', function () {
    nivel02 = document.getElementById("sliderRange2").value
    localStorage.setItem('hemoNivel2', JSON.parse(nivel02));
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
  });
  //Nivel 03
  var rangeslider3 = document.getElementById("sliderRange3");
  var bloodType3 = document.getElementById("blood03");
  nivel03 = window.localStorage.getItem('hemoNivel3')
  rangeslider3.addEventListener('input', function () {
    nivel03 = document.getElementById("sliderRange3").value
    localStorage.setItem('hemoNivel3', JSON.parse(nivel03));
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
  });
  //Nivel 04
  var rangeslider4 = document.getElementById("sliderRange4");
  var bloodType4 = document.getElementById("blood04");
  nivel04 = window.localStorage.getItem('hemoNivel4')
  rangeslider4.addEventListener('input', function () {
    nivel04 = document.getElementById("sliderRange4").value
    localStorage.setItem('hemoNivel4', JSON.parse(nivel04));
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
  });
  //Nivel 05
  var rangeslider5 = document.getElementById("sliderRange5");
  var bloodType5 = document.getElementById("blood05");
  nivel05 = window.localStorage.getItem('hemoNivel5')
  rangeslider5.addEventListener('input', function () {
    nivel05 = document.getElementById("sliderRange5").value
    localStorage.setItem('hemoNivel5', JSON.parse(nivel05));
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
  });
  //Nivel 06
  var rangeslider6 = document.getElementById("sliderRange6");
  var bloodType6 = document.getElementById("blood06");
  nivel06 = window.localStorage.getItem('hemoNivel6')
  rangeslider6.addEventListener('input', function () {
    nivel06 = document.getElementById("sliderRange6").value
    localStorage.setItem('hemoNivel6', JSON.parse(nivel06));
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
  });
  //Nivel 07
  var rangeslider7 = document.getElementById("sliderRange7");
  var bloodType7 = document.getElementById("blood07");
  nivel07 = window.localStorage.getItem('hemoNivel7')
  rangeslider7.addEventListener('input', function () {
    nivel07 = document.getElementById("sliderRange7").value
    localStorage.setItem('hemoNivel7', JSON.parse(nivel07));
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
  });
  //Nivel 08
  var rangeslider8 = document.getElementById("sliderRange8");
  var bloodType8 = document.getElementById("blood08");
  nivel08 = window.localStorage.getItem('hemoNivel8')
  rangeslider8.addEventListener('input', function () {
    nivel08 = document.getElementById("sliderRange8").value
    localStorage.setItem('hemoNivel8', JSON.parse(nivel08));
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
  });
});