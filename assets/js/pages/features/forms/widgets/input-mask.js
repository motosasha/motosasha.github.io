// Class definition

var KTMask = function () {
    var inputMask = function () {
        $('.requests-sum').mask('000 000 000 000 000,00', {
            reverse: true
        });
    }

    return {
        init: function() {
            inputMask();
        }
    };
}();

jQuery(document).ready(function() {
    KTMask.init();
});
//# sourceMappingURL=input-mask.js.map
