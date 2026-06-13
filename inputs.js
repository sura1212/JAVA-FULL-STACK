 let greetings = ["Good Morning", "Good Afternoon", "Good Evening", "Good Night"];
    let num = 0;

    function greet_afternoon() {
      let textElement = document.getElementById("greet");
      textElement.innerText = greetings[num];
      num++;
      if (num > 3) { num = 0; }
    }

    function turn_on() {
      let light = document.getElementById("on");
      light.src = "turnon.jpg";
    }

    function turn_off() {
      let light = document.getElementById("on");
      light.src = "turnoff.jpg";
    }

    function change_color() {
      document.getElementById("cap").style.backgroundColor = "black";
    }