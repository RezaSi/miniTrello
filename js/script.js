var myObj;

console.log(localStorage);

$('.ui input').bind("enterKey",function(e){
	var inputed = $("#input_name").val();
	$("#input_name").val("");
	$( '<div class="ui segment list-wrapper"><div class="ui header">لیست سوم </div><div class="ui divider"></div><div class="ui cards list-cards"><div class="ui segment form"><div class="field"><input type="text" placeholder="عنوان"></div><div class="field"><textarea rows="2"></textarea></div><button class="ui button">اضافه کردن</button></div></div></div>' ).insertBefore( "#newList" );

	$(".ui.segment.list-wrapper:nth-last-child(2)").find('.ui.header').text(inputed);

	var retrievedObject = localStorage.getItem('myObj2');
	myObj = JSON.parse(retrievedObject);

	if(!myObj) myObj = {"boards" : []};
	myObj['boards'].push({
		"title" : inputed,
		"cards" : []
	});
	//alert("wow");
	//console.log(myObj);
	localStorage.setItem('myObj2', JSON.stringify(myObj));

	//setUpdate();
});
$('.ui input').keyup(function(e){
	if(e.keyCode == 13)
		$(this).trigger("enterKey");
});

$("#board").on("click" , ".ui.button" , function(){
	var cardTitle = $(this).parent().find(".field:nth-child(1)").find(":input").val();
	var cardText = $(this).parent().find(".field:nth-child(2)").find(":input").val();

	$(this).parent().find(".field:nth-child(1)").find(":input").val("");
	$(this).parent().find(".field:nth-child(2)").find(":input").val("");
	
	$(this).parent().before('<div class="ui card"><div class="content"><div class="header">تست سوم</div></div><div class="content"><p>تست سوم برای مسابقه رهنما کالج</p></div></div>');
	$(this).parent().prev().find(".header").text(cardTitle);
	$(this).parent().prev().find("p").text(cardText);

	var retrievedObject = localStorage.getItem('myObj2');
	myObj = JSON.parse(retrievedObject);
	//console.log($(this).parent().parent().parent().index());
	myObj['boards'][$(this).parent().parent().parent().index()]['cards'].push({
		"title" : cardTitle,
		"text" : cardText
	});

	localStorage.setItem('myObj2', JSON.stringify(myObj));

	//setUpdate();
});

$(document).ready(function(){
	var data = {};
	
	/*$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
		url: '/getUpdate',
		success: function(data) {*/
			var retrievedObject = localStorage.getItem('myObj2');
			myObj = JSON.parse(retrievedObject);
			data = myObj;
			console.log(data);
			if(!data || !data.boards){}
			else{
				for(var i = 0 ; i < data.boards.length ; ++i){
					$( '<div class="ui segment list-wrapper"><div class="ui header">لیست سوم </div><div class="ui divider"></div><div class="ui cards list-cards"><div class="ui segment form"><div class="field"><input type="text" placeholder="عنوان"></div><div class="field"><textarea rows="2"></textarea></div><button class="ui button">اضافه کردن</button></div></div></div>' ).insertBefore( "#newList" );
					$(".ui.segment.list-wrapper:nth-last-child(2)").find('.ui.header').text(data.boards[i].title);
					for(var j = 0 ; j < data.boards[i].cards.length ; ++j){
						$(".ui.segment.list-wrapper:nth-last-child(2)").find(".ui.segment.form").before('<div class="ui card"><div class="content"><div class="header">تست سوم</div></div><div class="content"><p>تست سوم برای مسابقه رهنما کالج</p></div></div>');

						$(".ui.segment.list-wrapper:nth-last-child(2)").find(".ui.segment.form").prev().find(".header").text(data.boards[i].cards[j].title);
						$(".ui.segment.list-wrapper:nth-last-child(2)").find(".ui.segment.form").prev().find("p").text(data.boards[i].cards[j].text);
					}
				}
			}
		//}
	/*});*/
});

/*function setUpdate(){
	var data = myObj;
	//console.log(myObj);
	$.ajax({
		type: 'POST',
		data: JSON.stringify(data),
		contentType: 'application/json',
		url: '/setUpdate',
		success: function(data) {
			myObj = data;
			for(var i = 0 ; i < data.boards.length ; ++i){
				$( '<div class="ui segment list-wrapper"><div class="ui header">لیست سوم </div><div class="ui divider"></div><div class="ui cards list-cards"><div class="ui segment form"><div class="field"><input type="text" placeholder="عنوان"></div><div class="field"><textarea rows="2"></textarea></div><button class="ui button">اضافه کردن</button></div></div></div>' ).insertBefore( "#newList" );
				$(".ui.segment.list-wrapper:nth-last-child(2)").find('.ui.header').text(data.boards[i].title);
				for(var j = 0 ; j < data.boards[i].cards.length ; ++j){
					$(".ui.segment.list-wrapper:nth-last-child(2)").find(".ui.segment.form").before('<div class="ui card"><div class="content"><div class="header">تست سوم</div></div><div class="content"><p>تست سوم برای مسابقه رهنما کالج</p></div></div>');

					$(".ui.segment.list-wrapper:nth-last-child(2)").find(".ui.segment.form").prev().find(".header").text(data.boards[i].cards[j].title);
					$(".ui.segment.list-wrapper:nth-last-child(2)").find(".ui.segment.form").prev().find("p").text(data.boards[i].cards[j].text);
				}
			}
		}
	});
}*/
