# Helper to pull the ace goodies

.PHONY: all clean refresh

all: ace-git

ace-git:
	curl -o ace/ace-noconflict.js https://raw.github.com/ajaxorg/ace/master/build/src/ace-noconflict.js
