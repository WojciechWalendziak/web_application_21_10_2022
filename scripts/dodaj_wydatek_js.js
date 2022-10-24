
  window.onload = function current_date()
  {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; 
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    } 
        
    today = mm + '/' + dd + '/' + yyyy;
    document.getElementById("date").setAttribute("placeholder", today);
  }
  function get_selected_field()
  {
		let selected_value = document.getElementById("category");
		selected_value = selected_value.value;
		return selected_value;
  }
  function close_modal()
  {
		let modal = document.getElementById("myModal");
		modal.style.display = "none";
	}
  function add_new_category ()
  {
    let selected_category = get_selected_field();
    if(selected_category == "inne")
    {
      let modal = document.getElementById("myModal");
			modal.style.display = "block";
    }
  }