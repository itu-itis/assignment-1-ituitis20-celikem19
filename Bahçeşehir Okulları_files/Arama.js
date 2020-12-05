// JavaScript Document

 $(function () {
          /*  $("#datepickerstart").datepicker({
                showOn: "button",
                buttonImage: "/tr/images/calendar.png",
                buttonImageOnly: true,
                changeMonth: true,
                changeYear: true,
                dateFormat: "dd/mm/yy",
                altField: "#hdndatepickerstart",
                altFormat: "yymmdd"
            });


            $("#datepickerend").datepicker({
                showOn: "button",
                buttonImage: "/tr/images/calendar.png",
                buttonImageOnly: true,
                changeMonth: true,
                changeYear: true,
                dateFormat: "dd/mm/yy",
                altField: "#hdndatepickerend",
                altFormat: "yymmdd"
            });*/

           $('.buttonSearchBox').click(function (event) {
                event.preventDefault();
		RunSearchBox();

            });
			
			
			
			$('.buttonSearchBox1').click(function (event) {
                event.preventDefault();
		RunSearchBox1();

            });


            $('#btnClear').click(function (event) {
                event.preventDefault();
                $('.txtKeyword').val('');
                $("#datepickerstart").datepicker('setDate', null);
                $('#hdndatepickerstart').val('');
                $("#datepickerend").datepicker('setDate', null);
                $('#hdndatepickerend').val('');

            });
			
			
			
			$('#btnClear1').click(function (event) {
                event.preventDefault();
                $('.txtKeyword1').val('');
                $("#datepickerstart").datepicker('setDate', null);
                $('#hdndatepickerstart').val('');
                $("#datepickerend").datepicker('setDate', null);
                $('#hdndatepickerend').val('');

            });

            var strKeywordTemp = getQSParameterByName('Kyw');
            if (strKeywordTemp != 'undefined' || strKeywordTemp != '') {
                $('#txtKeyword').val(strKeywordTemp);
            }

            var strStartDateTemp = getQSParameterByName('SD');
            if (strStartDateTemp != 'undefined' && strStartDateTemp != '') {
                $("#datepickerstart").datepicker('setDate', GetDateFromQSParameter(strStartDateTemp));
                $('#hdndatepickerstart').val(strStartDateTemp);
            }

            var strEndDateTemp = getQSParameterByName('ED');
            if (strEndDateTemp != 'undefined' && strEndDateTemp != '') {
                $("#datepickerend").datepicker('setDate', GetDateFromQSParameter(strEndDateTemp));
                $('#hdndatepickerend').val(strEndDateTemp);
            }


        });

	function RunSearchBox()
	{

                var strKeyword = $('.txtKeyword').val();
                if (strKeyword == 'undefined')
                    strKeyword = ''

                var strStartDate = $('#hdndatepickerstart').val();
                if (strStartDate == 'undefined')
                    strStartDate = ''

                var strEndDate = $('#hdndatepickerend').val();
                if (strEndDate == 'undefined')
                    strEndDate = ''

                //alert(strKeyword);
                //alert(strStartDate);
                //alert(strEndDate);
                var arrTemp = document.URL.split('?');
		if(strKeyword != '' || strStartDate !='' || strEndDate !='')
		{	
                	if (arrTemp.length == 0) {
                    		window.location.href = '/tr/arama/arama/arama/231/2061/0?Kyw=' + encodeURIComponent(strKeyword);
                	}
                	else {
                    		window.location.href = '/tr/arama/arama/arama/231/2061/0?Kyw=' + encodeURIComponent(strKeyword);
                	}
		}
	}
	
	
	
	
	
	
	
	
	
	
	function RunSearchBox1()
	{

                var strKeyword = $('.txtKeyword1').val();
                if (strKeyword == 'undefined')
                    strKeyword = ''

                var strStartDate = $('#hdndatepickerstart').val();
                if (strStartDate == 'undefined')
                    strStartDate = ''

                var strEndDate = $('#hdndatepickerend').val();
                if (strEndDate == 'undefined')
                    strEndDate = ''

                //alert(strKeyword);
                //alert(strStartDate);
                //alert(strEndDate);
                var arrTemp = document.URL.split('?');
		if(strKeyword != '' || strStartDate !='' || strEndDate !='')
		{	
                	if (arrTemp.length == 0) {
                    		window.location.href = '/arama/arama/arama/1/0/0?Kyw=' + encodeURIComponent(strKeyword);
                	}
                	else {
                    		window.location.href = '/arama/arama/arama/1/0/0?Kyw=' + encodeURIComponent(strKeyword);
                	}
		}
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

    	function checkEnterSearchBox(e) {
			
		
        	var characterCode;

        	if (e && e.which) {
           		 e = e;
            		characterCode = e.which;
        	}

        	else {
            		e = event;
            		characterCode = e.keyCode;
        	}


        	if (characterCode == 13) {
				e.preventDefault();
			RunSearchBox();
            	}

    	}

        function getQSParameterByName(name) {
            name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
            var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
            return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        }

        function GetDateFromQSParameter(strDate) {
            var strYear = strDate.substring(0, 4);
            var strMonth = strDate.substring(4, 6);
            strMonth = eval(strMonth)-1;
            var strDay = strDate.substring(6, 8);
            return new Date(strYear, strMonth, strDay);
        }
                 