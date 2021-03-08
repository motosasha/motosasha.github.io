// Class definition
var KTBootstrapSelect = function() {
    var select = function() {
        $('#requestsEmployees').selectpicker({
            selectAllText: 'Выбрать всё',
            deselectAllText: 'Сбросить выбор',
            noneSelectedText: 'Не выбрано',
            noneResultsText: 'Нет совпадений {0}'
        });
        $('#clientSelect').selectpicker({
            noneSelectedText: 'Выберите клиента',
            noneResultsText: 'Нет совпадений {0}'
        });
    }
    return {
        init: function() {
            select();
        }
    };
}();

// Initialization
jQuery(document).ready(function() {
    KTBootstrapSelect.init();
});

//# sourceMappingURL=select.js.map
