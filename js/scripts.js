function showDescription(descript){
	$("#description").html("Description: " + descript);
}

function hideDescription(){
	$("#description").html("");
}

function validate(){
	var today = new Date();
	var input = $("#dob").val();
	var inputDate = new Date(input);

	var zip = $("#zip").val();
	var zipLength = zip.length;
	if(phoneLength != 5 || isNaN(phone)){
		alert("Invalid Zip code");
	}
}