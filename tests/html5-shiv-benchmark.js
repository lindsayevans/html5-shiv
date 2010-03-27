var methods = {

unrolled: function(){document.createElement('abbr');document.createElement('article');document.createElement('aside');document.createElement('audio');document.createElement('canvas');document.createElement('details');document.createElement('figcaption');document.createElement('figure');document.createElement('footer');document.createElement('header');document.createElement('hgroup');document.createElement('mark');document.createElement('menu');document.createElement('meter');document.createElement('nav');document.createElement('output');document.createElement('progress');document.createElement('section');document.createElement('summary');document.createElement('time');document.createElement('video')},

// Original: http://html5shiv.googlecode.com/svn/trunk/html5.js
original: function(){var e = "abbr,article,aside,audio,canvas,details,figcaption,figure,footer,header,hgroup,mark,menu,meter,nav,output,progress,section,summary,time,video".split(','),i=e.length;while(i--){document.createElement(e[i])}},

// Updated original
original2: function(){'abbr article aside audio canvas details figcaption figure footer header hgroup mark menu meter nav output progress section summary time video'.replace(/\w+/g,function(n){document.createElement(n)})},

array_literal: function(){var e=['abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'],i=e.length;while(i--){document.createElement(e[i])}},

array_constructor: function(){var e=new Array('abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'),i=e.length;while(i--){document.createElement(e[i])}},

caching_document: function(){var e=['abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'],i=e.length,d=document;while(i--){d.createElement(e[i])}},

static_array_length: function(){var e=['abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'],i=21,d=document;while(i--)d.createElement(e[i])},

array_constructor_static_array_length: function(){var e=new Array('abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'),i=21,d=document;while(i--)d.createElement(e[i])},

array_constructor_static_array_length_nocache: function(){var e=new Array('abbr','article','aside','audio','canvas','details','figcaption','figure','footer','header','hgroup','mark','menu','meter','nav','output','progress','section','summary','time','video'),i=21;while(i--)document.createElement(e[i])}

};

// *
document.write('<h2>Byte size:</h2><dl>');
for(var name in methods){
    document.write('<dt>'+name+'</dt><dd>'+methods[name].toString().replace(' ', '').replace('var','var ').replace('new','new ').length+' bytes</dd>');
}
document.write('</dl>');
// */

// *
document.write('<h2>Benchmarks:</h2>');

var bm = new Benchmark(
  methods,
  {
    responders: 'Perlish',
    iterations:  -10,
    cooldown:    30000
  }

);
// */

