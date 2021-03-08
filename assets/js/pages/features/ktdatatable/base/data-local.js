'use strict';
// Class definition

var KTDatatableDataLocal = function() {
    // Private functions

    // demo initializer
    var userTable = function() {
        var userTableJSONArray = JSON.parse('[' +
            '{"Place": "Администратор", "Fio": "Иван Иванов Иваныч", "Email": "amail@mail.ru", "Phone": "8 (950) 123-45-67", "Date": "23.02.2020", "Status": 1, "Actions": null},\n' +
            '{"Place": "Оператор", "Fio": "Ермаков Август Артемович", "Email": "bmail@mail.ru", "Phone": "8 (950) 123-45-68", "Date": "16.03.2020", "Status": 1,  "Actions": null},\n' +
            '{"Place": "Оператор", "Fio": "Лебедев Кассиан Львович", "Email": "cmail@mail.ru", "Phone": "8 (950) 123-45-69", "Date": "01.04.2020", "Status": 2,  "Actions": null},\n' +
            '{"Place": "Оператор", "Fio": "Тихонов Давид Ярославович", "Email": "dmail@mail.ru", "Phone": "8 (950) 123-45-70", "Date": "27.05.2020", "Status": 2, "Actions": null},\n' +
            '{"Place": "Оператор", "Fio": "Марков Гордий Григорьевич", "Email": "email@mail.ru", "Phone": "8 (950) 123-45-71", "Date": "18.06.2020", "Status": 2, "Actions": null},\n' +
            '{"Place": "Оператор", "Fio": "Крылов Лев Ярославович", "Email": "fmail@mail.ru", "Phone": "8 (950) 123-45-72", "Date": "12.07.2020", "Status": 1, "Actions": null},\n' +
            '{"Place": "Оператор", "Fio": "Александров Емельян Авдеевич", "Email": "hmail@mail.ru", "Phone": "8 (950) 123-45-73", "Date": "21.08.2020", "Status": 2, "Actions": null},\n' +
            '{"Place": "Оператор", "Fio": "Филатов Альфред Авдеевич", "Email": "imail@mail.ru", "Phone": "8 (950) 123-45-74", "Date": "02.09.2020", "Status": 1, "Actions": null},\n' +
            '{"Place": "Оператор", "Fio": "Наумов Захар Антонович", "Email": "jmail@mail.ru", "Phone": "8 (950) 123-45-75", "Date": "18.10.2020", "Status": 1, "Actions": null},\n' +
            '{"Place": "Оператор", "Fio": "Кудряшов Алан Авксентьевич", "Email": "kmail@mail.ru", "Phone": "8 (950) 123-45-76", "Date": "01.11.2020", "Status": 2, "Actions": null},\n' +
            '{"Place": "Оператор", "Fio": "Шилов Адам Викторович", "Email": "lmail@mail.ru", "Phone": "8 (950) 123-45-77", "Date": "06.12.2020", "Status": 2, "Actions": null}]');

        var datatable = $('#userTable').KTDatatable({
            data: {
                type: 'local',
                source: userTableJSONArray,
                pageSize: 10,
            },
            layout: {
                scroll: false,
                footer: false
            },
            sortable: true,
            pagination: true,
            search: {
                input: $('#kt_userTable_search_query'),
                key: 'generalSearch'
            },

            columns: [
                {
                    field: 'Fio',
                    title: 'ФИО',
                },
                {
                    field: 'Status',
                    title: 'Статус',
                    width: 120,
                    template: function (row) {
                        var status = {
                            1: {
                                'title': 'Активен',
                                'class': ' label-light-success'
                            },
                            2: {
                                'title': 'Приостановлен',
                                'class': ' label-light-danger'
                            }
                        };
                        return '<span class="label font-weight-bold label-lg ' + status[row.Status].class + ' label-inline">' + status[row.Status].title + '</span>';
                    },
                },
                {
                    field: 'Place',
                    title: 'Должность'
                },
                {
                    field: 'Email',
                    title: 'Email',
                    width: 120,
                },
                {
                    field: 'Phone',
                    title: 'Телефон',
                    width: 120,
                },
                {
                    field: 'Date',
                    title: 'Дата добавления',
                    type: 'date',
                    format: 'DD.MM.YYYY',
                },
                {
                    field: 'Actions',
                    title: '',
                    sortable: false,
                    width: 32,
                    overflow: 'visible',
                    autoHide: false,
                    template: function () {
                        return '\
                            <div class="dropdown dropdown-inline">\
                                <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
                                    <span class="svg-icon svg-icon-md">\
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                                <rect x="0" y="0" width="24" height="24"/>\
                                                <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
                                            </g>\
                                        </svg>\
                                    </span>\
                                </a>\
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
                                    <ul class="navi flex-column navi-hover py-2">\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="la la-edit text-primary"></i></span>\
                                                <span class="navi-text">Редактировать</span>\
                                            </a>\
                                        </li>\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="la la-exchange text-success"></i></span>\
                                                <span class="navi-text">Приостановить/возобновить</span>\
                                            </a>\
                                        </li>\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="la la-lock text-warning"></i></span>\
                                                <span class="navi-text">Сбросить пароль</span>\
                                            </a>\
                                        </li>\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="la la-trash-o text-danger"></i></span>\
                                                <span class="navi-text">Удалить</span>\
                                            </a>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                        ';
                    },
                }
            ],
        });

        $('#kt_userTable_search_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });

        $('#kt_userTable_search_status').selectpicker();
    };
    
    var subTable = function() {
        var userTableJSONArray = JSON.parse('[' +
            '{"Name": "ООО «Альфа»", "Inn": "12345678912", "Actions": null},\n' +
            '{"Name": "ООО «Бета»", "Inn": "25964125632", "Actions": null},\n' +
            '{"Name": "ОАО «Рога и Копыта»", "Inn": "32165498732", "Actions": null}]');
        
        var datatable = $('#subTable').KTDatatable({
            data: {
                type: 'local',
                source: userTableJSONArray,
                pageSize: 10,
            },
            layout: {
                scroll: false,
                footer: false
            },
            sortable: true,
            pagination: true,
            search: {
                input: $('#kt_subTable_search_query'),
                key: 'generalSearch'
            },
            columns: [
                {
                    field: 'Name',
                    title: 'Наименование',
                    width: 160,
                },
                {
                    field: 'Inn',
                    title: 'ИНН',
                    width: 160,
                },
                {
                    field: 'Actions',
                    title: '',
                    sortable: false,
                    width: 32,
                    overflow: 'visible',
                    autoHide: false,
                    template: function () {
                        return '\
                            <div class="dropdown dropdown-inline">\
                                <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
                                    <span class="svg-icon svg-icon-md">\
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                                <rect x="0" y="0" width="24" height="24"/>\
                                                <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
                                            </g>\
                                        </svg>\
                                    </span>\
                                </a>\
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
                                    <ul class="navi flex-column navi-hover py-2">\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="la la-lock text-warning"></i></span>\
                                                <span class="navi-text">Сбросить пароль</span>\
                                            </a>\
                                        </li>\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="la la-unlink text-danger"></i></span>\
                                                <span class="navi-text">Отвязать</span>\
                                            </a>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                        ';
                    },
                }
            ],
        });
        
        $('#kt_subTable_search_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });
        
        $('#kt_subTable_search_status').selectpicker();
    };
    
    var clientsTable = function() {
        var userClientsJSONArray = JSON.parse('[' +
            '{"RecordID": 1, "Org": "ЗевсМейстер", "regDate": "31.01.2020 12:15", "Inn": "123456789012", "Region": "Республика Татарстан", "Time": "16:03", "Operator": "Белозёрова Венера Викторовна", "Comment": "Сложно сказать, почему акционеры крупнейших компаний неоднозначны и будут разоблачены.", "Actions": null},\n' +
            '{"RecordID": 2, "Org": "АльбаСтрим", "regDate": "13.02.2020 13:15", "Inn": "123456789013", "Region": "Московская область", "Time": "12:03", "Operator": "Андреева Кристина Ивановна", "Comment": "Кстати, некоторые особенности внутренней политики лишь добавляют фракционных разногласий и разоблачены!", "Actions": null},\n' +
            '{"RecordID": 3, "Org": "ЭйрАльянс", "regDate": "24.03.2021 14:15", "Inn": "123456789014", "Region": "Иркутской области", "Time": "11:03", "Operator": "Пономарёва Руслана Никитевна", "Comment": "Современные технологии достигли такого уровня, что базовый вектор развития позволяет выполнить важные задания по разработке дальнейших направлений развития.", "Actions": null},\n' +
            '{"RecordID": 4, "Org": "ВысотаЭксперт", "regDate": "05.01.2020 15:15", "Inn": "123456789015", "Region": "Пермский край", "Time": "16:03", "Operator": "Андреева Кристина Ивановна", "Comment": "В рамках спецификации современных стандартов, сделанные на базе интернет-аналитики выводы объективно рассмотрены соответствующими инстанциями!", "Actions": null},\n' +
            '{"RecordID": 5, "Org": "ЭкоМедиа", "regDate": "12.11.2021 16:15", "Inn": "123456789016", "Region": "Красноярскому край", "Time": "14:03", "Operator": "Белозёрова Венера Викторовна", "Comment": "Мы вынуждены отталкиваться от того, что высокое качество позиционных исследований способствует подготовке и реализации экономической целесообразности принимаемых решений.", "Actions": null},\n' +
            '{"RecordID": 6, "Org": "Скатактион", "regDate": "16.07.2020 17:15", "Inn": "123456789017", "Region": "Камчатский край", "Time": "10:03", "Operator": "Пономарёва Руслана Никитевна", "Comment": "Есть над чем задуматься: акционеры крупнейших компаний неоднозначны и будут превращены в посмешище, хотя само их существование приносит несомненную пользу обществу.", "Actions": null},\n' +
            '{"RecordID": 7, "Org": "СилаСпутник", "regDate": "02.05.2021 18:15", "Inn": "123456789018", "Region": "Забайкальский край", "Time": "12:03", "Operator": "Кабанова Капитолина Агафоновна", "Comment": "Мы вынуждены отталкиваться от того, что синтетическое тестирование предопределяет высокую востребованность инновационных методов управления процессами.", "Actions": null},\n' +
            '{"RecordID": 8, "Org": "СоколЭлемент", "regDate": "15.01.2020 19:15", "Inn": "123456789019", "Region": "Республика Крым", "Time": "22:03", "Operator": "Пономарёва Руслана Никитевна", "Comment": "Значимость этих проблем настолько очевидна, что консультация с широким активом является качественно новой ступенью экономической целесообразности принимаемых решений!", "Actions": null},\n' +
            '{"RecordID": 9, "Org": "ЕвроБагира", "regDate": "08.08.2020 20:15", "Inn": "123456789020", "Region": "Тверская область", "Time": "08:03", "Operator": "Белозёрова Венера Викторовна", "Comment": "Приятно, граждане, наблюдать, как элементы политического процесса заблокированы в рамках своих собственных рациональных ограничений!", "Actions": null},\n' +
            '{"RecordID": 10, "Org": "Армадамодерн", "regDate": "01.05.2021 21:15", "Inn": "123456789021", "Region": "Еврейская автономная область", "Time": "12:03", "Operator": "Белозёрова Венера Викторовна", "Comment": "Но тщательные исследования конкурентов описаны максимально подробно.", "Actions": null},\n' +
            '{"RecordID": 11, "Org": "Триадавиктори", "regDate": "29.02.2021 22:15", "Inn": "123456789022", "Region": "Тульская область", "Time": "11:03", "Operator": "Кабанова Капитолина Агафоновна", "Comment": "Безусловно, укрепление и развитие внутренней структуры является качественно новой ступенью распределения внутренних резервов и ресурсов.", "Actions": null}]');
        
        var datatable = $('#kt_clientsTable').KTDatatable({
            data: {
                type: 'local',
                source: userClientsJSONArray,
                pageSize: 10,
            },
            layout: {
                scroll: false,
                footer: false
            },
            sortable: true,
            pagination: true,
            search: {
                input: $('#kt_clientsTable_search_query'),
                key: 'generalSearch'
            },
            
            columns: [
                {
                    field: 'RecordID',
                    width: 20
                },
                {
                    field: 'regDate',
                    title: 'Дата добавления',
                    type: 'date',
                    format: 'DD.MM.YYYY HH:MM',
                },
                {
                    field: 'Org',
                    title: 'Организация',
                    template: function(row) {
                        return '<span class="d-block font-weight-bolder">' + row.Org + '</span><span class="font-size-sm">' + row.Inn + '</span>';
                    },
                },
                {
                    field: 'regionTime',
                    title: 'Регион и время клиента',
                    template: function(row) {
                        return '<span class="d-block font-weight-bolder">' + row.Region + '</span><span class="font-size-sm">' + row.Time + '</span>';
                    },
                },
                {
                    field: 'Operator',
                    title: 'Оператор',
                },
                {
                    field: 'Comment',
                    title: 'Комментарий',
                },
                {
                    field: 'Actions',
                    title: '',
                    sortable: false,
                    width: 32,
                    overflow: 'visible',
                    autoHide: false,
                    template: function () {
                        return '\
                            <div class="dropdown dropdown-inline">\
                                <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
                                    <span class="svg-icon svg-icon-md">\
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                                <rect x="0" y="0" width="24" height="24"/>\
                                                <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
                                            </g>\
                                        </svg>\
                                    </span>\
                                </a>\
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
                                    <ul class="navi flex-column navi-hover py-2">\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link" data-toggle="modal" data-target="#openModal">\
                                                <span class="navi-icon"><i class="la la-window-maximize text-primary"></i></span>\
                                                <span class="navi-text">Открыть</span>\
                                            </a>\
                                        </li>\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="la la-vcard text-success"></i></span>\
                                                <span class="navi-text">Карточка компании</span>\
                                            </a>\
                                        </li>\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="la la-edit text-warning"></i></span>\
                                                <span class="navi-text">Создать заявку</span>\
                                            </a>\
                                        </li>\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link" data-toggle="modal" data-target="#comment">\
                                                <span class="navi-icon"><i class="la la-comment-o text-info"></i></span>\
                                                <span class="navi-text">Комментарий</span>\
                                            </a>\
                                        </li>\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link" data-toggle="modal" data-target="#changeUnderwriter">\
                                                <span class="navi-icon"><i class="la la-exchange text-info"></i></span>\
                                                <span class="navi-text">Сменить оператора</span>\
                                            </a>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                        ';
                    },
                }
            ],
        });
        
        $('#kt_clientsTable_search_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });
        
        $('#kt_clientsTable_search_status').selectpicker();
    };
    
    var requestsTable = function() {
        var requestsTableJSONArray = JSON.parse('[' +
            '{"ID": "001", "Client": "Шилов Адам Викторович", "Status": [5, 2, 3], "BGsum": "1 200 321,20 ₽", "BGterm": "01.12.2022", "BGtype": "На участие", "purchaseNum": "123456789012345678901", "CreateDate": "22.01.2021", "ChangeDate": "22.01.2021", "Manager": "Белозёрова Венера Викторовна", "Comment": "Как принято считать, базовые сценарии поведения пользователей и по сей день остаются уделом либералов, которые жаждут быть разоблачены", "Actions": null},\n' +
            '{"ID": "002", "Client": "Соболев Тимур Ефимович", "Status": [5, 2, 3], "BGsum": "1 200 321,20 ₽", "BGterm": "01.12.2022", "BGtype": "На исполнение", "purchaseNum": "123456789012345678901", "CreateDate": "23.01.2021", "ChangeDate": "22.01.2021", "Manager": "Ковалёва Илона Константиновна", "Comment": "А ещё диаграммы связей, которые представляют собой яркий пример континентально-европейского типа политической культуры, будут указаны как претенденты на роль ключевых факторов.", "Actions": null},\n' +
            '{"ID": "003", "Client": "Овчинников Дмитрий Миронович", "Status": [5, 2, 3], "BGsum": "1 200 321,20 ₽", "BGterm": "01.12.2022", "BGtype": "На возврат аванса", "purchaseNum": "123456789012345678901", "CreateDate": "05.02.2021", "ChangeDate": "22.01.2021", "Manager": "Романова Цветана Платоновна", "Comment": "В целом, конечно, укрепление и развитие внутренней структуры предоставляет широкие возможности для своевременного выполнения сверхзадачи.", "Actions": null},\n' +
            '{"ID": "004", "Client": "Сергеев Аввакум Адольфович", "Status": [5, 2, 3], "BGsum": "1 200 321,20 ₽", "BGterm": "01.12.2022", "BGtype": "На гарантийные обязательства", "purchaseNum": "123456789012345678901", "CreateDate": "18/02/2021", "ChangeDate": "22.01.2021", "Manager": "Ковалёва Илона Константиновна", "Comment": "Также как начало повседневной работы по формированию позиции создаёт предпосылки для новых предложений.", "Actions": null},\n' +
            '{"ID": "005", "Client": "Нестеров Иосиф Серапионович", "Status": [5, 2, 3], "BGsum": "1 200 321,20 ₽", "BGterm": "01.12.2022", "BGtype": "Коммерческая БГ", "purchaseNum": "123456789012345678901", "CreateDate": "24.02.2021", "ChangeDate": "22.01.2021", "Manager": "Романова Цветана Платоновна", "Comment": "С учётом сложившейся международной обстановки, глубокий уровень погружения представляет собой интересный эксперимент проверки соответствующих условий активизации.", "Actions": null},\n' +
            '{"ID": "011", "Client": "Логинов Вальтер Олегович", "Status": [5, 2, 3], "BGsum": "1 200 321,20 ₽", "BGterm": "11.12.2022", "BGtype": "На исполнение", "purchaseNum": "123456789012345678901", "CreateDate": "29.05.2021", "ChangeDate": "23.01.2021", "Manager": "Веселова Элеонора Дмитрьевна", "Comment": "Некоторые особенности внутренней политики призывают нас к новым свершениям, которые, в свою очередь, должны быть представлены в исключительно положительном свете.", "Actions": null}]');
        
        var datatable = $('#kt_requestsTable').KTDatatable({
            data: {
                type: 'local',
                source: requestsTableJSONArray,
                pageSize: 10,
            },
            layout: {
                scroll: false,
                footer: false
            },
            sortable: true,
            pagination: true,
            search: {
                input: $('#kt_requestsTable_search_query'),
                key: 'generalSearch'
            },
            
            columns: [
                {
                    field: 'ID',
                    title: '№ заявки',
                },
                {
                    field: 'Client',
                    title: 'Клиент/Победитель',
                    template: function (row) {
                        return '<a class="text-dark-75 font-weight-bolder text-hover-primary" href="#">' + row.Client + '</a>';
                    }
                },
                {
                    field: 'Status',
                    title: 'Статус',
                    width: 80,
                    template: function (row) {
                        return '<div class="cursor-pointer" data-toggle="modal" data-target="#requesInfo"><span class="label label-sm label-rounded label-info" title="Подано заявлений">' + row.Status[0] + '</span> | <span class="label label-sm label-rounded label-success" title="Одобрено заявлений">' + row.Status[1] + '</span> / <span class="label label-sm label-rounded label-danger" title="Отказано">' + row.Status[2] + '</span></div>';
                    },
                },
                {
                    field: 'BGsum',
                    title: 'Сумма БГ',
                    width: 120,
                },
                {
                    field: 'BGterm',
                    title: 'Срок БГ',
                    format: 'DD.MM.YYYY',
                    width: 80,
                },
                {
                    field: 'BGtype',
                    title: 'Тип БГ',
                },
                {
                    field: 'purchaseNum',
                    title: 'Номер закупки',
                    width: 160,
                    template: function (row) {
                        return '<span class="font-size-sm text-nowrap">' + row.purchaseNum + '</span>';
                    }
                },
                {
                    field: 'CreateDate',
                    title: 'Дата создания',
                    format: 'DD.MM.YYYY',
                    width: 100,
                },
                {
                    field: 'ChangeDate',
                    title: 'Дата изменения статуса',
                    format: 'DD.MM.YYYY',
                    width: 100,
                },
                {
                    field: 'Comment',
                    title: 'Комментарий',
                    template: function (row) {
                        return '<span class="font-size-sm">' + row.Comment + '</span>';
                    }
                },
                {
                    field: 'Manager',
                    title: 'Менеджер',
                },
                {
                    field: 'Actions',
                    title: '',
                    sortable: false,
                    width: 32,
                    overflow: 'visible',
                    autoHide: false,
                    template: function () {
                        return '\
                            <div class="dropdown dropdown-inline">\
                                <a href="javascript:;" class="btn btn-sm btn-clean btn-icon" data-toggle="dropdown">\
                                    <span class="svg-icon svg-icon-md">\
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" version="1.1">\
                                            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\
                                                <rect x="0" y="0" width="24" height="24"/>\
                                                <path d="M5,8.6862915 L5,5 L8.6862915,5 L11.5857864,2.10050506 L14.4852814,5 L19,5 L19,9.51471863 L21.4852814,12 L19,14.4852814 L19,19 L14.4852814,19 L11.5857864,21.8994949 L8.6862915,19 L5,19 L5,15.3137085 L1.6862915,12 L5,8.6862915 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z" fill="#000000"/>\
                                            </g>\
                                        </svg>\
                                    </span>\
                                </a>\
                                <div class="dropdown-menu dropdown-menu-sm dropdown-menu-right">\
                                    <ul class="navi flex-column navi-hover py-2">\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="la la-door-open text-primary"></i></span>\
                                                <span class="navi-text">Открыть</span>\
                                            </a>\
                                        </li>\
                                        <li class="navi-item">\
                                            <a href="#" class="navi-link">\
                                                <span class="navi-icon"><i class="la la-gear text-success"></i></span>\
                                                <span class="navi-text">Управлять ценой</span>\
                                            </a>\
                                        </li>\
                                    </ul>\
                                </div>\
                            </div>\
                        ';
                    },
                }
            ],
        });
        
        $('#kt_reviewsTable_search_status').on('change', function() {
            datatable.search($(this).val().toLowerCase(), 'Status');
        });
        
        $('#kt_reviewsTable_search_status').selectpicker();
    };

    return {
        init: function() {
            userTable();
            subTable();
            clientsTable();
            requestsTable();
        },
    };
}();

jQuery(document).ready(function() {
    KTDatatableDataLocal.init();
});

//# sourceMappingURL=data-local.js.map
