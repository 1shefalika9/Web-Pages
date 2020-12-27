/*billingFunction()-It is responsible for setting and clearing the fields in Billing Info*/

function billingFunction(){
	if (document.getElementById("same").checked) {
		var name = document.getElementById("shippingName").value;
		var zip = document.getElementById("shippingZip").value;
		document.getElementById('billingName').setAttribute('value',name);
		document.getElementById('billingZip').setAttribute('value',zip);
	}
	else{
		document.getElementById('billingName').setAttribute('value',"");
		document.getElementById('billingZip').setAttribute('value',"");
	}
}