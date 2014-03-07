function init(startCol, startRow, url) {

	var id = MKON.FNC.randomString(5)	
	var req = ['v.rcsValue'];
	var com = ['f.rcs'];

	// register a new module
	var mod = new MKON.module('RCS', 'Button', id, req,

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
	var content =   '<li id="' + id + '" data-com="' + com + '" data-row="1" data-col="1" data-link="' + url + '" data-sizex="1" data-sizey="1">\
					<div class="options"><div class="remove"><i class="fa fa-times"></i></div></div>\
					<div class="content blank"><a class="button lightText large square green" data-defaultClass="green" href="javascript:void(0);">RCS</a></div></li>';

	content = { html: content, x:1, y:1, col: startCol, row: startRow };

	MKON.CONTENT.addModule(mod, content);

	MKON.CONTENT.addHook(id, 'r', function() { MKON.COMMS.command(com[0]); });
	//updateAPIString();
}

