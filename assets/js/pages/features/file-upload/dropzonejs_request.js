"use strict";
// Class definition

var KTDropzone = function () {
	var dropzoneNewFile = function () {
		$('#newFile').dropzone({
			url: "https://example.com/scripts/example.php",
			maxFiles: 1,
			maxFilesize: 10,
			addRemoveLinks: true,
			acceptedFiles: "application/pdf,.docx",
		});
	}
	
	return {
		init: function() {
			dropzoneNewFile()
		}
	};
}();

KTUtil.ready(function() {
	KTDropzone.init();
});

//# sourceMappingURL=dropzonejs_request.js.map
