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
<div class="jquery-ui-tabs ui-tabs ui-widget ui-widget-content ui-corner-all"
     style="min-width:1000px">

<!-- links to per-language sections, shown as tab labels -->
<ul class="ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all">
  <li class="ui-state-default"><a href="#language-u">Universal</a></li>
  <li class="ui-state-default"><a style="color:gray" href="#language-am">Amharic</a></li>
  <li class="ui-state-default"><a style="color:gray" href="#language-grc">Ancient Greek</a></li>
  <li class="ui-state-default"><a href="#language-eu">Basque</a></li>
  <li class="ui-state-default"><a href="#language-bg">Bulgarian</a></li>
  <li class="ui-state-default"><a style="color:gray" href="#language-ca">Catalan</a></li>
  <li class="ui-state-default"><a style="color:gray" href="#language-zh">Chinese</a></li>
  <li class="ui-state-default"><a href="#language-hr">Croatian</a></li>
  <li class="ui-state-default"><a href="#language-cs">Czech</a></li>
  <li class="ui-state-default"><a href="#language-da">Danish</a></li>
  <li class="ui-state-default"><a href="#language-en">English</a></li>
  <li class="ui-state-default"><a href="#language-fi">Finnish</a></li>
  <li class="ui-state-default"><a href="#language-fr">French</a></li>
  <li class="ui-state-default"><a href="#language-de">German</a></li>
  <li class="ui-state-default"><a href="#language-el">Greek</a></li>
  <li class="ui-state-default"><a href="#language-he">Hebrew</a></li>
  <li class="ui-state-default"><a style="color:gray" href="#language-hi">Hindi</a></li>
  <li class="ui-state-default"><a href="#language-hu">Hungarian</a></li>
  <li class="ui-state-default"><a href="#language-id">Indonesian</a></li>
  <li class="ui-state-default"><a href="#language-ga">Irish</a></li>
  <li class="ui-state-default"><a href="#language-it">Italian</a></li>
  <li class="ui-state-default"><a style="color:gray" href="#language-la">Latin</a></li>
  <li class="ui-state-default"><a style="color:gray" href="#language-ja">Japanese</a></li>
  <li class="ui-state-default"><a style="color:gray" href="#language-ko">Korean</a></li>
  <li class="ui-state-default"><a href="#language-fa">Persian</a></li>
  <li class="ui-state-default"><a style="color:gray" href="#language-ro">Romanian</a></li>
  <li class="ui-state-default"><a style="color:gray" href="#language-sl">Slovenian</a></li>
  <li class="ui-state-default"><a href="#language-es">Spanish</a></li>
  <li class="ui-state-default"><a href="#language-sv">Swedish</a></li>
  <li class="ui-state-default"><a href="#language-other">...</a></li>
</ul>

<!-- "Universal" tab -->
<div id="language-u" markdown="1" class="ui-tabs-panel">
[Introduction to Universal Dependencies](introduction.html) <span style='background-color:yellow'>New to UD? Start here!</span>

* [Tokenization](u/overview/tokenization.html)
* Morphology
  * [General principles](u/overview/morphology.html)
  * [Universal POS tags](u/pos/index.html) ([single document](u/pos/all.html))
  * [Universal features](u/feat/index.html) ([single document](u/feat/all.html))
  * [Language-specific features](ext-feat-index.html)
  * [Conversion from other tagsets](tagset-conversion/index.html)
* Syntax
  * [General principles](u/overview/syntax.html)
  * [Specific constructions](u/overview/specific-syntax.html)
  * [Universal dependency relations](u/dep/index.html) ([single document](u/dep/all.html))
  * [Language-specific relations](ext-dep-index.html)

* [CoNLL-U format](format.html)

* <strong>Download</strong> the treebanks from the LINDAT/CLARIN repository
  * Version 1.1 treebanks <a href="http://hdl.handle.net/11234/LRT-1478">http://hdl.handle.net/11234/LRT-1478</a>. Released May 15, 2015. <span style='background-color:yellow'>Note: English data in the release were corrected on May 26, 2015. If you have downloaded the data before this date, please re-download.</span>
  * Version 1.0 treebanks are archived at http://hdl.handle.net/11234/1-1464. Released Jan 15, 2015.


<small>
This is the online documentation for Universal
Dependencies, version 1 (2014-10-01).  We intend to treat version 1 as
stable for at least the next year, but we may subsequently make
further revisions based on experiences using it to treebank a range of
languages. If you plan to use the scheme yourself, please get in touch
so that we can avoid problems with conflicting versions.
</small>

<small>
The next release (v1.2) is scheduled for November 15, 2015. The plan is to
have regular treebank releases every six months.
</small>

<small>
If you want to receive news about Universal Dependencies, you can subscribe to
the [UD mailing list](http://stp.lingfil.uu.se/mailman/listinfo/ud).
See also the [list of open issues](issues.html) for the [Uppsala meeting](uppsala.html).
</div>

<!-- "Amharic" tab -->
<div id="language-am" markdown="1" class="ui-tabs-hide">
{% include am-status-table.html %}

[Introduction](am/overview/introduction.html)

* [Tokenization](am/overview/tokenization.html)
* Morphology
  * [General principles](am/overview/morphology.html)
  * [Amharic POS tags](am/pos/index.html) ([single document](am/pos/all.html))
  * [Amharic features](am/feat/index.html) ([single document](am/feat/all.html))
* Syntax
  * [General principles](am/overview/syntax.html)
  * [Specific constructions](am/overview/specific-syntax.html)
  * [Amharic dependency relations](am/dep/index.html) ([single document](am/dep/all.html))

[CoNLL-U format](format.html)

</div>

<!-- "Ancient Greek" tab -->
<div id="language-grc" markdown="1" class="ui-tabs-hide">
{% include grc-status-table.html %}

[Introduction](grc/overview/introduction.html)

* [Tokenization](grc/overview/tokenization.html)
* Morphology
  * [General principles](grc/overview/morphology.html)
  * [Ancient Greek POS tags](grc/pos/index.html) ([single document](grc/pos/all.html))
  * [Ancient Greek features](grc/feat/index.html) ([single document](grc/feat/all.html))
* Syntax
  * [General principles](grc/overview/syntax.html)
  * [Specific constructions](grc/overview/specific-syntax.html)
  * [Ancient Greek dependency relations](grc/dep/index.html) ([single document](grc/dep/all.html))

[CoNLL-U format](format.html)

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

</div>

<!-- "Catalan" tab -->
<div id="language-ca" markdown="1" class="ui-tabs-hide">
{% include ca-status-table.html %}

[Introduction](ca/overview/introduction.html)

* [Tokenization](ca/overview/tokenization.html)
* Morphology
  * [General principles](ca/overview/morphology.html)
  * [Catalan POS tags](ca/pos/index.html) ([single document](ca/pos/all.html))
  * [Catalan features](ca/feat/index.html) ([single document](ca/feat/all.html))
* Syntax
  * [General principles](ca/overview/syntax.html)
  * [Specific constructions](ca/overview/specific-syntax.html)
  * [Catalan dependency relations](ca/dep/index.html) ([single document](ca/dep/all.html))

[CoNLL-U format](format.html)

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

</div>

<!-- "Croatian" tab -->
<div id="language-hr" markdown="1" class="ui-tabs-hide">
{% include hr-status-table.html %}

[Introduction](hr/overview/introduction.html)

* [Tokenization](hr/overview/tokenization.html)
* Morphology
  * [General principles](hr/overview/morphology.html)
  * [Croatian POS tags](hr/pos/index.html) ([single document](hr/pos/all.html))
  * [Croatian features](hr/feat/index.html) ([single document](hr/feat/all.html))
* Syntax
  * [General principles](hr/overview/syntax.html)
  * [Specific constructions](hr/overview/specific-syntax.html)
  * [Croatian dependency relations](hr/dep/index.html) ([single document](hr/dep/all.html))

[CoNLL-U format](format.html)

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

[CoNLL-U format](format.html) and Czech [MISC extensions](cs/overview/format.html)

</div>

<!-- "Danish" tab -->
<div id="language-da" markdown="1" class="ui-tabs-hide">
{% include da-status-table.html %}

[Introduction](da/overview/introduction.html)

* [Tokenization](da/overview/tokenization.html)
* Morphology
  * [General principles](da/overview/morphology.html)
  * [Danish POS tags](da/pos/index.html) ([single document](da/pos/all.html))
  * [Danish features](da/feat/index.html) ([single document](da/feat/all.html))
* Syntax
  * [General principles](da/overview/syntax.html)
  * [Specific constructions](da/overview/specific-syntax.html)
  * [Danish dependency relations](da/dep/index.html) ([single document](da/dep/all.html))

[CoNLL-U format](format.html)

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

</div>

<!-- "Hindi" tab -->
<div id="language-hi" markdown="1" class="ui-tabs-hide">
{% include hi-status-table.html %}

[Introduction](hi/overview/introduction.html)

* [Tokenization](hi/overview/tokenization.html)
* Morphology
  * [General principles](hi/overview/morphology.html)
  * [Hindi POS tags](hi/pos/index.html) ([single document](hi/pos/all.html))
  * [Hindi features](hi/feat/index.html) ([single document](hi/feat/all.html))
* Syntax
  * [General principles](hi/overview/syntax.html)
  * [Specific constructions](hi/overview/specific-syntax.html)
  * [Hindi dependency relations](hi/dep/index.html) ([single document](hi/dep/all.html))

[CoNLL-U format](format.html)

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

</div>

<!-- "Indonesian" tab -->
<div id="language-id" markdown="1" class="ui-tabs-hide">
{% include id-status-table.html %}

[Introduction](id/overview/introduction.html)

* [Tokenization](id/overview/tokenization.html)
* Morphology
  * [General principles](id/overview/morphology.html)
  * [Indonesian POS tags](id/pos/index.html) ([single document](id/pos/all.html))
  * [Indonesian features](id/feat/index.html) ([single document](id/feat/all.html))
* Syntax
  * [General principles](id/overview/syntax.html)
  * [Specific constructions](id/overview/specific-syntax.html)
  * [Indonesian dependency relations](id/dep/index.html) ([single document](id/dep/all.html))

[CoNLL-U format](format.html)

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

</div>

<!-- "Latin" tab -->
<div id="language-la" markdown="1" class="ui-tabs-hide">
{% include la-status-table.html %}

[Introduction](la/overview/introduction.html)

* [Tokenization](la/overview/tokenization.html)
* Morphology
  * [General principles](la/overview/morphology.html)
  * [Latin POS tags](la/pos/index.html) ([single document](la/pos/all.html))
  * [Latin features](la/feat/index.html) ([single document](la/feat/all.html))
* Syntax
  * [General principles](la/overview/syntax.html)
  * [Specific constructions](la/overview/specific-syntax.html)
  * [Latin dependency relations](la/dep/index.html) ([single document](la/dep/all.html))

[CoNLL-U format](format.html)

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

</div>

<!-- "Romanian" tab -->
<div id="language-ro" markdown="1" class="ui-tabs-hide">
{% include ro-status-table.html %}

[Introduction](ro/overview/introduction.html)

* [Tokenization](ro/overview/tokenization.html)
* Morphology
  * [General principles](ro/overview/morphology.html)
  * [Romanian POS tags](ro/pos/index.html) ([single document](ro/pos/all.html))
  * [Romanian features](ro/feat/index.html) ([single document](ro/feat/all.html))
* Syntax
  * [General principles](ro/overview/syntax.html)
  * [Specific constructions](ro/overview/specific-syntax.html)
  * [Romanian dependency relations](ro/dep/index.html) ([single document](ro/dep/all.html))

[CoNLL-U format](format.html)

</div>

<!-- "Slovenian" tab -->
<div id="language-sl" markdown="1" class="ui-tabs-hide">
{% include sl-status-table.html %}

[Introduction](sl/overview/introduction.html)

* [Tokenization](sl/overview/tokenization.html)
* Morphology
  * [General principles](sl/overview/morphology.html)
  * [Slovenian POS tags](sl/pos/index.html) ([single document](sl/pos/all.html))
  * [Slovenian features](sl/feat/index.html) ([single document](sl/feat/all.html))
* Syntax
  * [General principles](sl/overview/syntax.html)
  * [Specific constructions](sl/overview/specific-syntax.html)
  * [Slovenian dependency relations](sl/dep/index.html) ([single document](sl/dep/all.html))

[CoNLL-U format](format.html)

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
