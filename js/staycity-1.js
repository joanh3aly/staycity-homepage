  /* Nav */   
  function flagsDropdown() {
    /* Previous version using getElementById
    document.getElementById("flagDropdown").classList.toggle("show");
    */
    var flagClass = document.getElementsByClassName("flagDropdown");
    flagClass[0].setAttribute("id", "showFlags");
  }
  
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
      /* Previous version using getElementById
      var flagDropdown = document.getElementById("flagDropdown");
      if (flagDropdown[0].classList.contains('show')) {
        flagDropdown[0].classList.remove('show');
      }
      */
      var flagDropdown = document.getElementsByClassName("flagDropdown");
      var id = document.getElementById("showFlags");
      if (id != null){
        id.removeAttribute("id");
      }
    }
  };

  /* Dropdown lists */
  function configureDropDownLists(ddl1,ddl2) {    
    if (ddl1.value == "Mauritius") {
      document.getElementById('paradise').selected = true;
    } 
    if (ddl1.value == "Maldives") {
      document.getElementById('moofushi').selected = true;
    }
  }

  /* Buttons */
  function book(x) {
    var one = document.getElementsByClassName('book')[0];
    var two = document.getElementsByClassName('book')[1];
    var three = document.getElementsByClassName('book')[2];
    if (x == one) {
      window.open('https://www.staycity.com/booking-results.php?location=MALDIVES%20MOOFUSHI&selectedRoom=STANDARD-VILLA&checkin=2018-07-11&checkout=2018-07-18');
    }
    if (x == two) {
      window.open('https://www.staycity.com/booking-results.php?location=MALDIVES%20MOOFUSHI&selectedRoom=WATER-VILLA&checkin=2018-07-11&checkout=2018-07-18');
    }
    if (x == three) {
      window.open('https://www.staycity.com/booking-results.php?location=MALDIVES%20MOOFUSHI&selectedRoom=LUXURY-WATER-VILLA&checkin=2018-07-11&checkout=2018-07-18');
    }
  }