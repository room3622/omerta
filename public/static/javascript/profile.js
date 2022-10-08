function putStr( type )
{
	var target = document.getElementById( 'quote' );

	if ( target != null )
	{
		if ( typeof target.cursorPos != 'undefined' )
		{
			var cursorPos = target.cursorPos;
			cursorPos.text = det_replace(type, cursorPos.text);
		}
		else if ( typeof target.selectionStart != 'undefined' )
		{
			var sStart = target.selectionStart;
			var sEnd = target.selectionEnd;
			var text = det_replace(type, target.value.substr(sStart, sEnd));
			target.value = target.value.substr(0, sStart) + text + target.value.substr(sEnd, target.value.length);
			var nStart = sStart == sEnd ? sStart + text.length : sStart;
			var nEnd = sStart + text.length;
			target.setSelectionRange(nStart, nEnd);
		}
		else
		{
			target.value += det_replace(type,'');
		}
		target.focus();
		storeCursor(target);
	}
}
function det_replace(type, text)
{
	if (text != '')
	{
		switch (type)
		{
			case 'AND':
				text = text.replace(/(\w+)\s+/g, '$1 AND ');
				break;
			case 'OR':
				text = text.replace(/(\w+)\s+/g, '$1 OR ');
				break;
			case 'brackets':
				text = '('+text+')';
				break;
			case 'title':
				text = 'title:('+text+')';
				break;
			case 'start':
				text = 'start:('+text+')';
				break;
			default:
			text = type;
		}
	}
	else
	{
		switch (type)
		{
			case 'AND':
				text = ' AND ';
				break;
			case 'OR':
				text = ' OR ';
				break;
			case 'brackets':
				text = '()';
				break;
			case 'title':
				text = 'title:';
				break;
			case 'start':
				text = 'start:';
				break;
			default:
				text = type;
		}
	}
	return text;
}

var col=0;
function hide_row(tableid,rowid){
	var x=document.getElementById(tableid);
	var l=x.rows.length;
	while ( l-- > 0 ){
		var rid = x.rows[l].id;
		if(rowid==rid){
			x.rows[l].style.display = x.rows[l].style.display=='none' ? '' : 'none';
		}
	}
}
function hide_all(){
	col = (col == 0) ? 1 : 0;
	var c = document.getElementById('change');
	c.innerHTML = col == 1 ? 'Collapse settings' : 'Expand settings';
	hide_row('user', 'C1');
}

function Doprompt(action) {
	if (action == "url") {
		var thisURL = prompt("Enter the complete URL for the link you wish to add.", "http://");
		if (thisURL == null){return;}
		
		var thisTitle = prompt("Now enter the title of the web page you wish to reference.", "web page");
		if (thisTitle == null){return;}

		putStr("[url=" + thisURL + "]" + thisTitle + "[/url]");
		return;
	}
	if (action == "bold") {
		var thisBold = prompt("Enter the text that you wish to make bold.", "");
		if (thisBold == null){return;}
			putStr("[b]" + thisBold + "[/b]");
		return;
	}
	if (action == "underline") {
		var thisBold = prompt("Enter the text that you wish to make underlined.", "");
		if (thisBold == null){return;}
			putStr("[u]" + thisBold + "[/u]");
		return;
	}
	if (action == "center") {
		var thisBold = prompt("Enter the text that you wish to center.", "");
		if (thisBold == null){return;}
			putStr("[center]" + thisBold + "[/center]");
		return;
	}
	if (action == "italics") {
		var thisItal = prompt("Enter the text that you wish to italicize.", "");
		if (thisItal == null){return;}

		putStr("[i]" + thisItal + "[/i]");
		return;
	}
	if (action == "image") {
		var thisImage = prompt("Enter the complete URL for the image you wish to display.", "http://");
		if (thisImage == null){return;}
		putStr("[img]" + thisImage + "[/img]");
		return;
	}
	if (action == "quote") {
		putStr("[quote]  [/quote]");
		return;
	}
	if (action == "strike") {
		var thisBold = prompt("Enter the text that you wish to strike out.", "");
		if (thisBold == null){return;}
			putStr("[s]" + thisBold + "[/s]");
		return;
	}
	if (action == "sup") {
		var thisBold = prompt("Enter the text that you wish to superscript.", "");
		if (thisBold == null){return;}
			putStr("[sup]" + thisBold + "[/sup]");
		return;
	}
	if (action == "sub") {
		var thisBold = prompt("Enter the text that you wish to subscript.", "");
		if (thisBold == null){return;}
			putStr("[sub]" + thisBold + "[/sub]");
		return;
	}
	if (action == "size") {
		var thisText = prompt("Enter the text that you wish to use specified font-size for.","");
		if (thisText == null){return;}
		
		var thisSize = prompt("Now enter the size (an integer) you want.", "5");
		if (thisSize == null){return;}

		putStr("[size=" + thisSize + "]" + thisText + "[/size]");
		return;
	}
	if (action == "fly") {
		var thisText = prompt("Enter the text that you wish to let fly.","");
		if (thisText == null){return;}
		
		putStr("[fly]" + thisText + "[/fly]");
		return;
	}
	if (action == "color") {
		var thisText = prompt("Enter the text that you wish to colorize.","");
		if (thisText == null){return;}
		putStr("[color=" + document.tcp_test.input0.value + "]" + thisText + "[/color]");
		return;
	}
}
// Title: Tigra Color Picker
// URL: http://www.softcomplex.com/products/tigra_color_picker/
// Version: 1.1
// Date: 06/26/2003 (mm/dd/yyyy)
// Note: Permission given to use this script in ANY kind of applications if
//    header lines are left unchanged.
// Note: Script consists of two files: picker.js and picker.html

var TCP = new TColorPicker();

function TCPopup(field, palette) {
	this.field = field;
	this.initPalette = !palette || palette > 3 ? 0 : palette;
	var w = 194, h = 240,
	move = screen ? 
		',left=' + ((screen.width - w) >> 1) + ',top=' + ((screen.height - h) >> 1) : '', 
	o_colWindow = window.open('picker.html', null, "help=no,status=no,scrollbars=no,resizable=no" + move + ",width=" + w + ",height=" + h + ",dependent=yes", true);
	o_colWindow.opener = window;
	o_colWindow.focus();
}

function TCBuildCell (R, G, B, w, h) {
	return '<td bgcolor="#' + this.dec2hex((R << 16) + (G << 8) + B) + '"><a href="javascript:P.S(\'' + this.dec2hex((R << 16) + (G << 8) + B) + '\')" onmouseover="P.P(\'' + this.dec2hex((R << 16) + (G << 8) + B) + '\')"><img src="/static/images/game/generic/pixel.gif" width="' + w + '" height="' + h + '" border="0"></a></td>';
}

function TCSelect(c) {
	this.field.value = '#' + c.toUpperCase();
	this.win.close();
}

function TCPaint(c, b_noPref) {
	c = (b_noPref ? '' : '#') + c.toUpperCase();
	if (this.o_samp) 
		this.o_samp.innerHTML = '<font face=Tahoma size=2>' + c +' <font color=white>' + c + '</font></font>'
	if(this.doc.layers)
		this.sample.bgColor = c;
	else { 
		if (this.sample.backgroundColor != null) this.sample.backgroundColor = c;
		else if (this.sample.background != null) this.sample.background = c;
	}
}

function TCGenerateSafe() {
	var s = '';
	for (j = 0; j < 12; j ++) {
		s += "<tr>";
		for (k = 0; k < 3; k ++)
			for (i = 0; i <= 5; i ++)
				s += this.bldCell(k * 51 + (j % 2) * 51 * 3, Math.floor(j / 2) * 51, i * 51, 8, 10);
		s += "</tr>";
	}
	return s;
}

function TCGenerateWind() {
	var s = '';
	for (j = 0; j < 12; j ++) {
		s += "<tr>";
		for (k = 0; k < 3; k ++)
			for (i = 0; i <= 5; i++)
				s += this.bldCell(i * 51, k * 51 + (j % 2) * 51 * 3, Math.floor(j / 2) * 51, 8, 10);
		s += "</tr>";
	}
	return s	
}
function TCGenerateMac() {
	var s = '';
	var c = 0,n = 1;
	var r,g,b;
	for (j = 0; j < 15; j ++) {
		s += "<tr>";
		for (k = 0; k < 3; k ++)
			for (i = 0; i <= 5; i++){
				if(j<12){
				s += this.bldCell( 255-(Math.floor(j / 2) * 51), 255-(k * 51 + (j % 2) * 51 * 3),255-(i * 51), 8, 10);
				}else{
					if(n<=14){
						r = 255-(n * 17);
						g=b=0;
					}else if(n>14 && n<=28){
						g = 255-((n-14) * 17);
						r=b=0;
					}else if(n>28 && n<=42){
						b = 255-((n-28) * 17);
						r=g=0;
					}else{
						r=g=b=255-((n-42) * 17);
					}
					s += this.bldCell( r, g,b, 8, 10);
					n++;
				}
			}
		s += "</tr>";
	}
	return s;
}

function TCGenerateGray() {
	var s = '';
	for (j = 0; j <= 15; j ++) {
		s += "<tr>";
		for (k = 0; k <= 15; k ++) {
			g = Math.floor((k + j * 16) % 256);
			s += this.bldCell(g, g, g, 9, 7);
		}
		s += '</tr>';
	}
	return s
}

function TCDec2Hex(v) {
	v = v.toString(16);
	for(; v.length < 6; v = '0' + v);
	return v;
}

function TCChgMode(v) {
	for (var k in this.divs) this.hide(k);
	this.show(v);
}

function TColorPicker(field) {
	this.build0 = TCGenerateSafe;
	this.build1 = TCGenerateWind;
	this.build2 = TCGenerateGray;
	this.build3 = TCGenerateMac;
	this.show = document.layers ? 
		function (div) { this.divs[div].visibility = 'show' } :
		function (div) { this.divs[div].visibility = 'visible' };
	this.hide = document.layers ? 
		function (div) { this.divs[div].visibility = 'hide' } :
		function (div) { this.divs[div].visibility = 'hidden' };
	// event handlers
	this.C       = TCChgMode;
	this.S       = TCSelect;
	this.P       = TCPaint;
	this.popup   = TCPopup;
	this.draw    = TCDraw;
	this.dec2hex = TCDec2Hex;
	this.bldCell = TCBuildCell;
	this.divs = [];
}

function TCDraw(o_win, o_doc) {
	this.win = o_win;
	this.doc = o_doc;
	var 
	s_tag_openT  = o_doc.layers ? 
		'layer visibility=hidden top=54 left=5 width=182' : 
		'div style=visibility:hidden;position:absolute;left:6px;top:54px;width:182px;height:0',
	s_tag_openS  = o_doc.layers ? 'layer top=32 left=6' : 'div',
	s_tag_close  = o_doc.layers ? 'layer' : 'div'
		
	this.doc.write('<' + s_tag_openS + ' id=sam name=sam><table cellpadding=0 cellspacing=0 border=1 width=181 align=center class=bd><tr><td align=center height=18><div id="samp"><font face=Tahoma size=2>sample <font color=white>sample</font></font></div></td></tr></table></' + s_tag_close + '>');
	this.sample = o_doc.layers ? o_doc.layers['sam'] : 
		o_doc.getElementById ? o_doc.getElementById('sam').style : o_doc.all['sam'].style

	for (var k = 0; k < 4; k ++) {
		this.doc.write('<' + s_tag_openT + ' id="p' + k + '" name="p' + k + '"><table cellpadding=0 cellspacing=0 border=1 align=center>' + this['build' + k]() + '</table></' + s_tag_close + '>');
		this.divs[k] = o_doc.layers 
			? o_doc.layers['p' + k] : o_doc.all 
				? o_doc.all['p' + k].style : o_doc.getElementById('p' + k).style
	}
	if (!o_doc.layers && o_doc.body.innerHTML) 
		this.o_samp = o_doc.all 
			? o_doc.all.samp : o_doc.getElementById('samp');
	this.C(this.initPalette);
	if (this.field.value) this.P(this.field.value, true)
}
