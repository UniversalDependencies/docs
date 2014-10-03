---
layout: base
title:  'Universal Dependencies'
---

# Universal Dependencies

[Introduction to Universal Dependencies](introduction.html)


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
  <li class="ui-state-default"><a href="#language-sv">Swedish</a></li>
  <li class="ui-state-default"><a href="#language-other">...</a></li>
</ul>

<!-- "Universal" tab -->
<div id="language-u" markdown="1" class="ui-tabs-panel">
* [Tokenization](u/overview/tokenization.html)
* Morphology
  * [General principles](u/overview/morphology.html)
  * [Universal POS tags](u/pos/index.html) ([single document](u/pos/all.html))
  * [Universal features](u/feat/index.html) ([single document](u/feat/all.html))
  * [Language-specific features](ext-feat-index.html)
* Syntax
  * [General principles](u/overview/syntax.html)
  * [Universal relations](u/dep/index.html) ([single document](u/dep/all.html))
  * [Language-specific relations](ext-dep-index.html)
* [CoNLL-U format](format.html)

<small>This is the online documentation and example bank for Universal Dependencies, version 1 (2014-10-01).
 We intend to treat version 1 as stable for at least the next year, 
 but we may subsequently make further revisions based on experiences using it to treebank 
 a range of languages. If you plan to use the scheme yourself, please get in touch so
 that we can avoid problems with conflicting versions.</small>

</div>

<!-- "English" tab -->
<div id="language-en" markdown="1" class="ui-tabs-hide">
* [Tokenization](en/overview/tokenization.html)
* Morphology
  * [General principles](en/overview/morphology.html)
  * [English POS tags](en/pos/index.html) ([single document](en/pos/all.html))
  * [English features](en/feat/index.html) ([single document](en/feat/all.html))
* Syntax
  * [General principles](en/overview/syntax.html)
  * [English relations](en/dep/index.html) ([single document](en/dep/all.html))

<small>
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>

</div>

<!-- "Finnish" tab -->
<div id="language-fi" markdown="1" class="ui-tabs-hide">
* [Tokenization](fi/overview/tokenization.html)
* Morphology
  * [General principles](fi/overview/morphology.html)
  * [Finnish POS tags](fi/pos/index.html) ([single document](fi/pos/all.html))
  * [Finnish features](fi/feat/index.html) ([single document](fi/feat/all.html))
* Syntax
  * [General principles](fi/overview/syntax.html)
  * [Finnish relations](fi/dep/index.html) ([single document](fi/dep/all.html))

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>

</div>

<!-- "Swedish" tab -->
<div id="language-sv" markdown="1" class="ui-tabs-hide">
**Note**: the following are empty templates only, content to follow soon.

* [Tokenization](sv/overview/tokenization.html)
* Morphology
  * [General principles](sv/overview/morphology.html)
  * [Swedish POS tags](sv/pos/index.html) ([single document](sv/pos/all.html))
  * [Swedish features](sv/feat/index.html) ([single document](sv/feat/all.html))
* Syntax
  * [General principles](sv/overview/syntax.html)
  * [Swedish relations](sv/dep/index.html) ([single document](sv/dep/all.html))

<small>
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>

</div>

<!-- new tab template -->
<!-- <div id="language-LC" markdown="1" class="ui-tabs-hide"> -->
<!-- * [Tokenization](LC/overview/tokenization.html) -->
<!-- * Morphology -->
<!--   * [General principles](LC/overview/morphology.html) -->
<!--   * [POS tags](LC/pos/index.html) ([single document](LC/pos/all.html)) -->
<!--   * [features](LC/feat/index.html) ([single document](LC/feat/all.html)) -->
<!--   * POS tags: TODO -->
<!--   * Features: TODO -->
<!-- * Syntax -->
<!--   * [General principles](LC/overview/syntax.html) -->
<!--   * [Relations](LC/dep/index.html) ([single document](LC/dep/all.html)) -->
<!-- <small>  -->
<!-- This is part of the language-specific documentation for Universal -->
<!-- Dependencies. <strong>Language-specific guidlines are currently under -->
<!-- revision and should not be considered final.</strong> Our goal is to -->
<!-- have a stable version of this part of the documentation by 2015-01-01. -->
<!-- </small> -->
<!-- </div> -->

<div id="language-other" markdown="1" class="ui-tabs-hide">
More languages to come.

The following are empty templates for language-specific documentation.
(Please ignore these.)

* [Tokenization](template/overview/tokenization.html)
* Morphology
  * [General principles](template/overview/morphology.html)
  * [Universal POS tags](template/pos/index.html) ([single document](template/pos/all.html))
  * [Universal features](template/feat/index.html) ([single document](template/feat/all.html))
* Syntax
  * [General principles](template/overview/syntax.html)
  * [Universal relations](template/dep/index.html) ([single document](template/dep/all.html))
</div>

</div>

----------------------------------------

[CoNLL-U format](format.html)

----------------------------------------

[How to contribute](contributing.html)
