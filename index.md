---
layout: base
title:  'Universal Dependencies'
---

# Universal Dependencies

[Introduction to Universal Dependencies](introduction.html)

This is the online documentation and example bank for Universal
Dependencies. **Please note that these guidlines are currently
under revision and should not be considered final.** Our goal is to have a stable version 1 release by 2014-09-30.

<!-- 
     The following <div> is the top-level element for the index page
     tabs. To add a new tab (e.g. for Swedish), first add a link to
     the <ul> (e.g. <li><a href="#language-sv">Swedish</a></li>), and
     then add a <div> with the tab content below, with the same ID as
     the link (e.g. <div id="language-sv" markdown="1">[...]</div>").
 -->
<div class="jquery-ui-tabs ui-tabs ui-widget ui-widget-content ui-corner-all">

<!-- links to per-language sections, shown as tab labels -->
<ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
  <li class="ui-state-default"><a href="#language-u">Universal</a></li>
  <li class="ui-state-default"><a href="#language-en">English</a></li>
  <li class="ui-state-default"><a href="#language-fi">Finnish</a></li>
  <li class="ui-state-default"><a href="#language-other">...</a></li>
</ul>

<!-- "Universal" tab -->
<div id="language-u" markdown="1" class="ui-tabs-panel">
* [Tokenization](tokenization.html)
* Morphology
  * [General principles](morphology.html)
  * [Universal POS tags](ud-pos-index.html) ([single document](ud-pos-all.html))
  * [Universal features](ud-feat-index.html) ([single document](ud-feat-all.html))
  * [Extended features](ext-feat-index.html) (summary of language-specific extensions)
* Syntax
  * [General principles](structure.html)
  * [Universal relations](ud-dep-index.html) ([single document](ud-dep-all.html))
* [CoNLL-U format](format.html)
</div>

<!-- "English" tab -->
<div id="language-en" markdown="1" class="ui-tabs-hide">
* Tokenization: TODO
* Morphology
  * General principles: TODO
  * English POS tags: TODO
  * English features: TODO
* Syntax
  * General principles: TODO
  * [English relations](en-dep-index.html) ([single document](en-dep-all.html))
* [CoNLL-U format](format.html)
</div>

<!-- "Finnish" tab -->
<div id="language-fi" markdown="1" class="ui-tabs-hide">
* Tokenization: TODO
* Morphology
  * General principles: TODO
  * Finnish POS tags: TODO
  * Finnish features: TODO
* Syntax
  * General principles: TODO
  * [Finnish relations](fi-dep-index.html) ([single document](fi-dep-all.html))
* [CoNLL-U format](format.html)
</div>

<div id="language-other" markdown="1" class="ui-tabs-hide">
More languages to come.
</div>

</div>

----------------------------------------

[How to contribute](contributing.html)
