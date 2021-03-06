function init(config) {  

	var url = config.u;
	var col = config.c || MKON.LAYOUT.defaultCol;
	var row = config.r || MKON.LAYOUT.defaultRow;
	var meta = config.m || '';
	var width = config.w;
	var height = config.h;

	var id = MKON.FNC.randomString(5)	
	// var req = ['v.lightValue', 'lght'];
	var com = ['f.gear'];
	var req = ['v.gearValue'];

	// register a new module
	var mod = new MKON.module('GEAR', 'Button', id, req, 

	function() {   

		var t = $('#'+this.id);

		var d = MKON.CONTENT.getVariable(req);	
	
		if (d == 'True') {
			t.find('.button').removeClass('gray');
		
		} else {
			t.find('.button').addClass('gray');
	
		}
	
	} );

	// content for insertion to gridster
	var content =   '<li id="' + id + '" data-com="' + com + '" class="command" data-row="1" data-col="1" data-link="' + url + '" data-sizex="1" data-sizey="1">\
					<div class="options"><div class="remove"><i class="fa fa-times"></i></div></div>\
					<div class="content blank"><a class="button lightText large square blue" data-defaultClass="blue" ref="javascript:void(0);">GEAR</div></li>';

	content = { html: content, x:1, y:1, col: col, row: row };

	MKON.CONTENT.addModule(mod, content);

	MKON.CONTENT.addHook(id, 'g', function() { MKON.COMMS.command(com[0]); });

}