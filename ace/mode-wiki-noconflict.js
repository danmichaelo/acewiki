

ace.define('ace/mode/wiki', function(require, exports, module) {

  var oop = require("ace/lib/oop");
  var TextMode = require("ace/mode/text").Mode;
  var Tokenizer = require("ace/tokenizer").Tokenizer;
  var WikiHighlightRules = require("ace/mode/wiki_highlight_rules").WikiHighlightRules;

  var Mode = function() {
     this.$tokenizer = new Tokenizer(new WikiHighlightRules().getRules());
  };
  oop.inherits(Mode, TextMode);
  
  exports.Mode = Mode;
});



ace.define('ace/mode/wiki_highlight_rules', function(require, exports, module) {

  var oop = require("ace/lib/oop");
  var TextHighlightRules = require("ace/mode/text_highlight_rules").TextHighlightRules;

  var WikiHighlightRules = function() {

    // regexp must not have capturing parentheses
    // regexps are ordered -> the first match is used
    this.$rules = {
        start : [
            /*{
                // Curly and square braces
                token : "lparen",
                regex : "[[({]"
            }, {
                // Curly and square braces
                token : "rparen",
                regex : "[\\])}]"
            }, 
             {
                // Templates {{ ... }}
                token : "template",
                regex : "{{[^}]*}}"
            },*/
            {
                token : "comment",
                merge : true,
                regex : "<\\!--",
                next : "comment"
            }, {
                token : "comment",
                regex : "<nowiki>",
                merge : true,
                next : "nowiki"
            }, {
                // External links [ ... ]
                token : "externallink",
                regex : "\\[[^\\[\\]]*\\]"
            }, { // headings
                token: "markup.heading.1",
                regex: "^==.*==\\s*$"
            }, {
                token : "meta.tag",
                regex : "<ref.*?/>",
            }, {
                token : "meta.tag",
                regex : "<ref.*?>",
                merge : true,
                next : "ref"
            }, {
                token : "table",
                merge : true,
                regex : "{\\|",
                next : "table"
            }, {
                token : "template",
                merge : true,
                regex : "{{",
                next : "template"
            }, {
                // Wikilinks {{ ... }}
                token : "wikilinkbraces",
                regex : "\\[\\[",
                next : "wikilink"
            }],
        ref : [
         {
                token : "meta.tag",
                regex : ".*</ref>",
                next : "start"
            }, {
                token : "meta.tag",
                merge : true,
                regex : ".+"
            }],
        wikilink : [
         {
                token : "wikilinkbraces",
                regex : "\\]\\]",
                next : "start"
            }, {
                token : "wikilink",
                merge : true,
                regex : "[^\\]]+"
            }],
        comment : [ 
            {
                token : "comment",
                regex : ".*?-->",
                next : "start"
            }, {
                token : "comment",
                merge : true,
                regex : ".+"
            }],
        nowiki : [ 
            {
                token : "comment",
                regex : ".*?</nowiki>",
                next : "start"
            }, {
                token : "comment",
                merge : true,
                regex : ".+"
            }],
        table : [ 
            {
                token : "table",
                regex : ".*?\\|}",
                next : "start"
            }, {
                token : "table",
                merge : true,
                regex : ".+"
            }], 
        template : [ 
            {
                token : "template.sub",
                merge : true,
                regex : "{{",
                next : "subtemplate"
            }, {
                token : "template",
                regex : "}}",
                next : "start"
            }, {
                token : "template",
                merge : true,
                regex : "[^{}]+"
            }],
        subtemplate : [ 
            {
                token : "template.sub",
                regex : ".*?}}",
                next : "template"
            }, {
                token : "template.sub",
                merge : true,
                regex : ".+"
            }]
    };

  }

  oop.inherits(WikiHighlightRules, TextHighlightRules);
  exports.WikiHighlightRules = WikiHighlightRules;
});
