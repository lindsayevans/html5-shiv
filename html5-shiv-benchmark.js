var methods = {

// Original: http://html5shiv.googlecode.com/svn/trunk/html5.js
original: function(){var e = "abbr,article,aside,audio,canvas,details,figcaption,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,summary,time,video".split(','),i=e.length;while(i--){document.createElement(e[i])}},

// Updated original
original2: function(){'abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video'.replace(/\w+/g,function(n){document.createElement(n)})},

// 1: String.split to native array
array_literal: function(){var e=['abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'],i=e.length;while(i--){document.createElement(e[i])}},

array_constructor: function(){var e=new Array('abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'),i=e.length;while(i--){document.createElement(e[i])}},

// 2: caching document object
caching_document: function(){var e=['abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'],i=e.length,d=document;while(i--){d.createElement(e[i])}},

// 3: static array length
static_array_length: function(){var e=['abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'],i=21,d=document;while(i--)d.createElement(e[i]);},

array_constructor_static_array_length: function(){var e=new Array('abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'),i=21,d=document;while(i--)d.createElement(e[i]);},

array_constructor_static_array_length_nocache: function(){var e=new Array('abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'),i=21;while(i--)document.createElement(e[i]);}

};

/*

document.write('<h2>Byte size:</h2><dl>');
for(var name in methods){
    document.write('<dt>'+name+'</dt><dd>'+methods[name].toString().replace(' ', '').length+' bytes</dd>');
}
document.write('</dl>');
/ */

document.write('<h2>Benchmarks:</h2>');

var bm = new Benchmark(
  methods,
  {
    responders: 'Perlish',
    iterations:  -2,
    cooldown:    1000
  }

);
// */

