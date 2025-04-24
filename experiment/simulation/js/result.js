function result() {

	timerMasterJson.connection = $("#counter").text();
	console.log(timerMasterJson);

	$("#validate").prop("hidden", true);
	$("#report").prop("hidden", false);
	$("#Header").html("<center><span >Instrumentation index sheet</span></center>");

	htm = ''

		+ '<!-- Animation Section -->'
		+ '<div class="row">'
		+ '<div class="col-md-2">'
		+ '</div>'
		+ ' <div class="col-md-8">'
		+ '   <div class="box">'
		+ '     <h5 class="section-title sectionStyle">Enter MIS No.: <input type="number" id="nameInput" class="ml-4"></h5>'
		+ '     <div class="animation-container">'

		+ '           <div class="col-md-12">'
		+ '				<div class="box">'
		+ '				  <h5 class="section-title sectionStyle">Placement of Field Instruments</h5>'
		+ '				  <div class="table-container">'
		+ '					<table style="border-style: solid;" >'
		+ '					  <tr class="trStyle">'
		+ '						<th>Expected</th>'
		+ '						<th>Actual</th>'
		+ '						<th>Total Time</th>'
		+ '					  </tr>'
		+ '					  <tr>'
		+ '						  <td><b class="correct">1</b></td>'
		+ '                       <td><b class="wrong">' + resultJson.validateCount + '</b></td>'
		+ '                       <td><b class="wrong">' + timerMasterJson.connection + '</b></td>'
		+ '					  </tr>'
		+ '					</table>'
		+ '				  </div>'
		+ '				</div>'
		+ '			  </div>'

		+ '     </div>'
		+ '   </div>'
		+ ' </div>'
		+ '</div>'
		+ '<div class="col-md-2">'
		+ '</div>'
		+ '</div>'
		
		
	//     +'<!-- Animation Section Timer Json-->'
	//    +'<div class="row">'
	//    +' <div class="col-md-12">'
	//    +'   <div class="box">'
	////    +'     <h5 class="section-title sectionStyle" >Total Time</h5>'
	//    +'     <div class="animation-container">'
	//           
	//    +'           <div class="col-md-12">'
	//    +'				<div class="box">'
	//    +'				  <h5 class="section-title sectionStyle">Total Time</h5>'
	//    +'				  <div class="table-container">'
	//    +'					<table style="border-style: solid;" >'
	//    +'					  <tr>'
	//    +'                       <td><b class="wrong">'+timerMasterJson.connection+'</b></td>'
	//    +'					  </tr>'
	//    +'					</table>'
	//    +'				  </div>'
	//    +'				</div>'
	//    +'			  </div>'
	//
	//          
	//    +'     </div>'
	//    +'   </div>'
	//    +' </div>'
	//    +'</div>'
	//    +'</div>'
	//    +'</div>'

	$("#result-div").html(htm);


	//    $("#diagram").html("");
	//				htm1 = `
	//                <img src='images/finalPnid.png' class='img-fluid'
	//                     style='display: block; margin: 10px auto; width: 100%; max-width: 1200px;'>      
	//`;
	//    $("#diagram").html(htm1);

	$("#btnNext").click(function() {
		console.log('indexsheet');
		indexsheet();

	});

$(document).ready(function() {
  // Restore value from localStorage when page loads
  const savedName = localStorage.getItem("username");
  if (savedName) {
    $('#nameInput').val(savedName);
  }

  // Save input on change
  $('#nameInput').on('input', function() {
    localStorage.setItem("username", $(this).val());
  });
});

}


function downloadImg() {

	console.log("click triggred");

	const button = document.getElementById("report");
	button.hidden = true;

	html2canvas(document.querySelector("#main-div"), {
		useCORS: true,
		allowTaint: false,
		backgroundColor: null
	}).then(canvas => {
		let link = document.createElement('a');
		link.download = 'Instr_Index_sheet.png';
		link.href = canvas.toDataURL("image/png");
		link.click();
		$("#btnNext").prop("hidden", false);
	}).catch(err => {
		console.error("Screenshot failed:", err);
	}).finally(() => {
		button.hidden = true;
	});
}


