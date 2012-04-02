/**
 * MediaWiki:Gadget-aceWikiEditor.js
 * 2012 Dan Michael Heggø <danmichaelo+wikipedia @ gmail.com>
 * 
 * Forked from MediaWiki:Gadget-codeeditor.js
 * (c) 2011 Brion Vibber <brion @ pobox.com>
 * GPLv2 or later
 *
 * Syntax highlighting for editing wikimarkup.
 * Uses embedded Ajax.org Cloud9 Editor: http://ace.ajax.org/
 *
 * Browsers tested:
 * - Firefox 11.0 / Mac
 * - Chrome 18.0.1025.142 / Mac
 *
 * Browsers tested with issues:
 * - Opera 12.00 alpha / Mac: copy / paste doesn't work
 * - Safari: renders ok, but for some funny reason you can't type "}"
 *   Same problem at http://ace.ajax.org/build/kitchen-sink.html 
 * 
 * Browsers not tested:
 * - IE 8.0.6001.18702 / Win XP: Problems have been reported with
 *   Brion's CodeEditor, so problems should be expected!
 *
 * Known issues:
 * - serious problems with right-to-left scripts and perhaps other complex scripts. 
 * - 'discard your changes?' check on tab close doesn't trigger
 * - ties into WikiEditor, so doesn't work on classic toolbar
 * - copy/paste not available from context menu (Firefox, Chrome on Linux -- kbd & main menu commands ok)
 * - accessibility: tab/shift-tab are overridden. is there a consistent alternative for keyboard-reliant users?
 * - accessibility: accesskey on the original textarea needs to be moved over or otherwise handled
 * - cursor/scroll position not maintained over previews/show changes
 *
 */

$( document ).ready( function() {
	// Add code editor module

	if ($.wikiEditor !== undefined) {
	    // no support for old editor, so we should not load 
	    $( '#wpTextbox1' ).wikiEditor( 'addModule', 'aceWikiEditor' );
	}
	
} );
