---
layout: base
title:  'Universal Dependencies'
---

# Universal Dependencies

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
  <li class="ui-state-default"><a href="#language-eu">Basque</a></li>
  <li class="ui-state-default"><a href="#language-bg">Bulgarian</a></li>
  <li class="ui-state-default"><a href="#language-cs">Czech</a></li>
  <li class="ui-state-default"><a href="#language-en">English</a></li>
  <li class="ui-state-default"><a href="#language-fi">Finnish</a></li>
  <li class="ui-state-default"><a href="#language-fr">French</a></li>
  <li class="ui-state-default"><a href="#language-de">German</a></li>
  <li class="ui-state-default"><a href="#language-el">Greek</a></li>
  <li class="ui-state-default"><a href="#language-he">Hebrew</a></li>
  <li class="ui-state-default"><a href="#language-hu">Hungarian</a></li>
  <li class="ui-state-default"><a href="#language-ga">Irish</a></li>
  <li class="ui-state-default"><a href="#language-it">Italian</a></li>
  <li class="ui-state-default"><a href="#language-ja">Japanese</a></li>
  <li class="ui-state-default"><a href="#language-ko">Korean</a></li>
  <li class="ui-state-default"><a href="#language-fa">Persian</a></li>
  <li class="ui-state-default"><a href="#language-es">Spanish</a></li>
  <li class="ui-state-default"><a href="#language-sv">Swedish</a></li>
  <li class="ui-state-default"><a href="#language-zh">Chinese</a></li>
  <li class="ui-state-default"><a href="#language-other">...</a></li>
</ul>

<!-- "Universal" tab -->
<div id="language-u" markdown="1" class="ui-tabs-panel">
[Introduction to Universal Dependencies](introduction.html)

* [Tokenization](u/overview/tokenization.html)
* Morphology
  * [General principles](u/overview/morphology.html)
  * [Universal POS tags](u/pos/index.html) ([single document](u/pos/all.html))
  * [Universal features](u/feat/index.html) ([single document](u/feat/all.html))
  * [Language-specific features](ext-feat-index.html)
* Syntax
  * [General principles](u/overview/syntax.html)
  * [Specific constructions](u/overview/specific-syntax.html)
  * [Universal dependency relations](u/dep/index.html) ([single document](u/dep/all.html))
  * [Language-specific relations](ext-dep-index.html)

[CoNLL-U format](format.html)

<small>
This is the online documentation and example treebank for Universal
Dependencies, version 1 (2014-10-01).  We intend to treat version 1 as
stable for at least the next year, but we may subsequently make
further revisions based on experiences using it to treebank a range of
languages. If you plan to use the scheme yourself, please get in touch
so that we can avoid problems with conflicting versions.
</small>
</div>

<!-- "Basque" tab -->
<div id="language-eu" markdown="1" class="ui-tabs-hide">
{% include eu-status-table.html %}

[Introduction](eu/overview/introduction.html)

* [Tokenization](eu/overview/tokenization.html)
* Morphology
  * [General principles](eu/overview/morphology.html)
  * [Basque POS tags](eu/pos/index.html) ([single document](eu/pos/all.html))
  * [Basque features](eu/feat/index.html) ([single document](eu/feat/all.html))
* Syntax
  * [General principles](eu/overview/syntax.html)
  * [Specific constructions](eu/overview/specific-syntax.html)
  * [Basque dependency relations](eu/dep/index.html) ([single document](eu/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Bulgarian" tab -->
<div id="language-bg" markdown="1" class="ui-tabs-hide">
{% include bg-status-table.html %}

[Introduction](bg/overview/introduction.html)

* [Tokenization](bg/overview/tokenization.html)
* Morphology
  * [General principles](bg/overview/morphology.html)
  * [Bulgarian POS tags](bg/pos/index.html) ([single document](bg/pos/all.html))
  * [Bulgarian features](bg/feat/index.html) ([single document](bg/feat/all.html))
* Syntax
  * [General principles](bg/overview/syntax.html)
  * [Specific constructions](bg/overview/specific-syntax.html)
  * [Bulgarian dependency relations](bg/dep/index.html) ([single document](bg/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Czech" tab -->
<div id="language-cs" markdown="1" class="ui-tabs-hide">
{% include cs-status-table.html %}

[Introduction](cs/overview/introduction.html)

* [Tokenization](cs/overview/tokenization.html)
* Morphology
  * [General principles](cs/overview/morphology.html)
  * [Czech POS tags](cs/pos/index.html) ([single document](cs/pos/all.html))
  * [Czech features](cs/feat/index.html) ([single document](cs/feat/all.html))
* Syntax
  * [General principles](cs/overview/syntax.html)
  * [Specific constructions](cs/overview/specific-syntax.html)
  * [Czech dependency relations](cs/dep/index.html) ([single document](cs/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "English" tab -->
<div id="language-en" markdown="1" class="ui-tabs-hide">
{% include en-status-table.html %}

[Introduction](en/overview/introduction.html)

* [Tokenization](en/overview/tokenization.html)
* Morphology
  * [General principles](en/overview/morphology.html)
  * [English POS tags](en/pos/index.html) ([single document](en/pos/all.html))
  * [English features](en/feat/index.html) ([single document](en/feat/all.html))
* Syntax
  * [General principles](en/overview/syntax.html)
  * [Specific constructions](en/overview/specific-syntax.html)
  * [English relations](en/dep/index.html) ([single document](en/dep/all.html))

[CoNLL-U format](format.html)

<small>
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Finnish" tab -->
<div id="language-fi" markdown="1" class="ui-tabs-hide">
{% include fi-status-table.html %}

[Introduction](fi/overview/introduction.html)

* [Tokenization](fi/overview/tokenization.html)
* Morphology
  * [General principles](fi/overview/morphology.html)
  * [Finnish POS tags](fi/pos/index.html) ([single document](fi/pos/all.html))
  * [Finnish features](fi/feat/index.html) ([single document](fi/feat/all.html))
* Syntax
  * [General principles](fi/overview/syntax.html)
  * [Specific constructions](fi/overview/specific-syntax.html)
  * [Finnish relations](fi/dep/index.html) ([single document](fi/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "French" tab -->
<div id="language-fr" markdown="1" class="ui-tabs-hide">
{% include fr-status-table.html %}

[Introduction](fr/overview/introduction.html)

* [Tokenization](fr/overview/tokenization.html)
* Morphology
  * [General principles](fr/overview/morphology.html)
  * [French POS tags](fr/pos/index.html) ([single document](fr/pos/all.html))
  * [French features](fr/feat/index.html) ([single document](fr/feat/all.html))
* Syntax
  * [General principles](fr/overview/syntax.html)
  * [Specific constructions](fr/overview/specific-syntax.html)
  * [French dependency relations](fr/dep/index.html) ([single document](fr/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "German" tab -->
<div id="language-de" markdown="1" class="ui-tabs-hide">
{% include de-status-table.html %}

[Introduction](de/overview/introduction.html)

* [Tokenization](de/overview/tokenization.html)
* Morphology
  * [General principles](de/overview/morphology.html)
  * [German POS tags](de/pos/index.html) ([single document](de/pos/all.html))
  * [German features](de/feat/index.html) ([single document](de/feat/all.html))
* Syntax
  * [General principles](de/overview/syntax.html)
  * [Specific constructions](de/overview/specific-syntax.html)
  * [German dependency relations](de/dep/index.html) ([single document](de/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Greek" tab -->
<div id="language-el" markdown="1" class="ui-tabs-hide">
{% include el-status-table.html %}

[Introduction](el/overview/introduction.html)

* [Tokenization](el/overview/tokenization.html)
* Morphology
  * [General principles](el/overview/morphology.html)
  * [Greek POS tags](el/pos/index.html) ([single document](el/pos/all.html))
  * [Greek features](el/feat/index.html) ([single document](el/feat/all.html))
* Syntax
  * [General principles](el/overview/syntax.html)
  * [Specific constructions](el/overview/specific-syntax.html)
  * [Greek dependency relations](el/dep/index.html) ([single document](el/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Hebrew" tab -->
<div id="language-he" markdown="1" class="ui-tabs-hide">
{% include he-status-table.html %}

[Introduction](he/overview/introduction.html)

* [Tokenization](he/overview/tokenization.html)
* Morphology
  * [General principles](he/overview/morphology.html)
  * [Hebrew POS tags](he/pos/index.html) ([single document](he/pos/all.html))
  * [Hebrew features](he/feat/index.html) ([single document](he/feat/all.html))
* Syntax
  * [General principles](he/overview/syntax.html)
  * [Specific constructions](he/overview/specific-syntax.html)
  * [Hebrew dependency relations](he/dep/index.html) ([single document](he/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Hungarian" tab -->
<div id="language-hu" markdown="1" class="ui-tabs-hide">
{% include hu-status-table.html %}

[Introduction](hu/overview/introduction.html)

* [Tokenization](hu/overview/tokenization.html)
* Morphology
  * [General principles](hu/overview/morphology.html)
  * [Hungarian POS tags](hu/pos/index.html) ([single document](hu/pos/all.html))
  * [Hungarian features](hu/feat/index.html) ([single document](hu/feat/all.html))
* Syntax
  * [General principles](hu/overview/syntax.html)
  * [Specific constructions](hu/overview/specific-syntax.html)
  * [Hungarian dependency relations](hu/dep/index.html) ([single document](hu/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Irish" tab -->
<div id="language-ga" markdown="1" class="ui-tabs-hide">
{% include ga-status-table.html %}

[Introduction](ga/overview/introduction.html)

* [Tokenization](ga/overview/tokenization.html)
* Morphology
  * [General principles](ga/overview/morphology.html)
  * [Irish POS tags](ga/pos/index.html) ([single document](ga/pos/all.html))
  * [Irish features](ga/feat/index.html) ([single document](ga/feat/all.html))
* Syntax
  * [General principles](ga/overview/syntax.html)
  * [Specific constructions](ga/overview/specific-syntax.html)
  * [Irish dependency relations](ga/dep/index.html) ([single document](ga/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Italian" tab -->
<div id="language-it" markdown="1" class="ui-tabs-hide">
{% include it-status-table.html %}

[Introduction](it/overview/introduction.html)

* [Tokenization](it/overview/tokenization.html)
* Morphology
  * [General principles](it/overview/morphology.html)
  * [Italian POS tags](it/pos/index.html) ([single document](it/pos/all.html))
  * [Italian features](it/feat/index.html) ([single document](it/feat/all.html))
* Syntax
  * [General principles](it/overview/syntax.html)
  * [Specific constructions](it/overview/specific-syntax.html)
  * [Italian dependency relations](it/dep/index.html) ([single document](it/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Japanese" tab -->
<div id="language-ja" markdown="1" class="ui-tabs-hide">
{% include ja-status-table.html %}

[Introduction](ja/overview/introduction.html)

* [Tokenization](ja/overview/tokenization.html)
* Morphology
  * [General principles](ja/overview/morphology.html)
  * [Japanese POS tags](ja/pos/index.html) ([single document](ja/pos/all.html))
  * [Japanese features](ja/feat/index.html) ([single document](ja/feat/all.html))
* Syntax
  * [General principles](ja/overview/syntax.html)
  * [Specific constructions](ja/overview/specific-syntax.html)
  * [Japanese dependency relations](ja/dep/index.html) ([single document](ja/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Korean" tab -->
<div id="language-ko" markdown="1" class="ui-tabs-hide">
{% include ko-status-table.html %}

[Introduction](ko/overview/introduction.html)

* [Tokenization](ko/overview/tokenization.html)
* Morphology
  * [General principles](ko/overview/morphology.html)
  * [Korean POS tags](ko/pos/index.html) ([single document](ko/pos/all.html))
  * [Korean features](ko/feat/index.html) ([single document](ko/feat/all.html))
* Syntax
  * [General principles](ko/overview/syntax.html)
  * [Specific constructions](ko/overview/specific-syntax.html)
  * [Korean dependency relations](ko/dep/index.html) ([single document](ko/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Persian" tab -->
<div id="language-fa" markdown="1" class="ui-tabs-hide">
{% include fa-status-table.html %}

[Introduction](fa/overview/introduction.html)

* [Tokenization](fa/overview/tokenization.html)
* Morphology
  * [General principles](fa/overview/morphology.html)
  * [Persian POS tags](fa/pos/index.html) ([single document](fa/pos/all.html))
  * [Persian features](fa/feat/index.html) ([single document](fa/feat/all.html))
* Syntax
  * [General principles](fa/overview/syntax.html)
  * [Specific constructions](fa/overview/specific-syntax.html)
  * [Persian dependency relations](fa/dep/index.html) ([single document](fa/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Spanish" tab -->
<div id="language-es" markdown="1" class="ui-tabs-hide">
{% include es-status-table.html %}

[Introduction](es/overview/introduction.html)

* [Tokenization](es/overview/tokenization.html)
* Morphology
  * [General principles](es/overview/morphology.html)
  * [Spanish POS tags](es/pos/index.html) ([single document](es/pos/all.html))
  * [Spanish features](es/feat/index.html) ([single document](es/feat/all.html))
* Syntax
  * [General principles](es/overview/syntax.html)
  * [Specific constructions](es/overview/specific-syntax.html)
  * [Spanish dependency relations](es/dep/index.html) ([single document](es/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Swedish" tab -->
<div id="language-sv" markdown="1" class="ui-tabs-hide">
{% include sv-status-table.html %}

[Introduction](sv/overview/introduction.html)

* [Tokenization](sv/overview/tokenization.html)
* Morphology
  * [General principles](sv/overview/morphology.html)
  * [Swedish POS tags](sv/pos/index.html) ([single document](sv/pos/all.html))
  * [Swedish features](sv/feat/index.html) ([single document](sv/feat/all.html))
* Syntax
  * [General principles](sv/overview/syntax.html)
  * [Specific constructions](sv/overview/specific-syntax.html)
  * [Swedish relations](sv/dep/index.html) ([single document](sv/dep/all.html))

[CoNLL-U format](format.html)

<small>
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- "Chinese" tab -->
<div id="language-zh" markdown="1" class="ui-tabs-hide">
{% include zh-status-table.html %}

[Introduction](zh/overview/introduction.html)

* [Tokenization](zh/overview/tokenization.html)
* Morphology
  * [General principles](zh/overview/morphology.html)
  * [Chinese POS tags](zh/pos/index.html) ([single document](zh/pos/all.html))
  * [Chinese features](zh/feat/index.html) ([single document](zh/feat/all.html))
* Syntax
  * [General principles](zh/overview/syntax.html)
  * [Specific constructions](zh/overview/specific-syntax.html)
  * [Chinese dependency relations](zh/dep/index.html) ([single document](zh/dep/all.html))

[CoNLL-U format](format.html)

<small> 
This is part of the language-specific documentation for Universal
Dependencies. <strong>Language-specific guidlines are currently under
revision and should not be considered final.</strong> Our goal is to
have a stable version of this part of the documentation by 2015-01-01.
</small>
</div>

<!-- new tab template -->
<!-- <div id="language-LC" markdown="1" class="ui-tabs-hide"> -->
<!-- [Introduction](LC/overview/introduction.html) -->
<!-- -->
<!-- * [Tokenization](LC/overview/tokenization.html) -->
<!-- * Morphology -->
<!--   * [General principles](LC/overview/morphology.html) -->
<!--   * [POS tags](LC/pos/index.html) ([single document](LC/pos/all.html)) -->
<!--   * [features](LC/feat/index.html) ([single document](LC/feat/all.html)) -->
<!--   * POS tags: TODO -->
<!--   * Features: TODO -->
<!-- * Syntax -->
<!--   * [General principles](LC/overview/syntax.html) -->
<!--   * [Specific constructions](LC/overview/specific-syntax.html) -->
<!--   * [Relations](LC/dep/index.html) ([single document](LC/dep/all.html)) -->
<!-- [CoNLL-U format](format.html) -->
<!-- -->
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

[Introduction](template/overview/introduction.html)

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

[How to contribute](contributing.html)
