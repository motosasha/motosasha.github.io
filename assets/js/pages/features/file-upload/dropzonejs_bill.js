"use strict";
// Class definition

var KTDropzone = function () {
	var dropzoneBill = function () {
		var id = '#dropzone_bill';
		
		var previewNode = $(id + " .dropzone-item");
		previewNode.id = "";
		var previewTemplate = previewNode.parent('.dropzone-items').html();
		previewNode.remove();
		
		var dropzoneBill = new Dropzone(id, {
			url: "https://example.com/scripts/example.php",
			maxFiles: 1,
			maxFilesize: 1,
			previewTemplate: previewTemplate,
			previewsContainer: id + " .dropzone-items",
			clickable: id + " .dropzone-select"
		});
		dropzoneBill.on("addedfile", function(file) {
			$(document).find( id + ' .dropzone-item').css('display', '');
		});
		dropzoneBill.on("totaluploadprogress", function(progress) {
			$( id + " .progress-bar").css('width', progress + "%");
		});
		
		dropzoneBill.on("sending", function(file) {
			$( id + " .progress-bar").css('opacity', "1");
		});
		dropzoneBill.on("complete", function(progress) {
			var thisProgressBar = id + " .dz-complete";
			setTimeout(function(){
				$( thisProgressBar + " .progress-bar, " + thisProgressBar + " .progress").css('opacity', '0');
			}, 300)
		});
	}
	
	return {
		init: function() {
			dropzoneBill()
		}
	};
}();

KTUtil.ready(function() {
	KTDropzone.init();
});

//# sourceMappingURL=dropzonejs_bill.js.map
