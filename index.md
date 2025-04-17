---
layout: home
title: 'Universal Dependencies'
udver: '2'
---

# <img class="logo" src="logos/logo-ud.png" width="32px"> Universal Dependencies

Universal Dependencies (UD) is a framework for consistent annotation of grammar
(parts of speech, morphological features, and syntactic dependencies) across different human languages. UD is
an open community effort with over 600 contributors producing over 200 treebanks in over 150 languages.
If you are new to UD, you should start by reading the first part of the Short Introduction and then browsing the annotation guidelines.

<table><tr>
 <th><h3>💡&nbsp;Understanding&nbsp;UD</h3></th>
 <th><h3>🔍&nbsp;Using UD</h3></th>
 <th><h3>🔨&nbsp;Contributing&nbsp;to&nbsp;UD</h3></th>
</tr><tr>
 <td><a href="introduction.html">Short introduction to UD</a></td>
 <td><a href="query.html">Query UD treebanks online</a></td>
 <td><a href="contribute.html">How to contribute to UD</a></td>
</tr>
<tr>
  <td rowspan="2"><a href="guidelines.html">Annotation guidelines</a><br/>
  &nbsp;&nbsp;&nbsp;&nbsp; <a href="u/pos/index.html">UPOS tags</a> ▪ <a href="u/feat/index.html">feats</a> ▪ <a href="u/dep/index.html">deprels</a> ▪ <a href="format.html">CoNLL-U format</a></td>
  <td rowspan="2">Download UD treebanks: <a href="download.html">all releases</a><br/>
                  ☞ <a href="http://hdl.handle.net/11234/1-5787">Release 2.15</a> <small>(November 15, 2024)</small></td>
  <td><a href="changes.html">Changes to the UD guidelines</a></td>
</tr>
<tr>
  <td><a href="https://lists.uu.se/sympa/info/lingfil-ud">UD mailing list</a></td>
</tr>
<tr>
  <td><a href="events.html">Tutorials and events</a></td>
  <td><a href="tools.html">Tools for working with UD</a></td>
  <td><a href="https://github.com/universaldependencies/docs/issues">Guidelines issue tracker</a></td>
</tr>
<tr>
<th colspan="3"><h3>🚀 Projects related to UD</h3></th></tr>
<tr><td colspan="3">
 <a href="https://surfacesyntacticud.github.io/">SUD: Surface Syntactic Universal Dependencies</a> ▪
 <a href="https://ufal.mff.cuni.cz/deep-universal-dependencies">Deep Universal Dependencies</a> ▪
 <a href="https://universalpropositions.github.io/">Universal PropBank</a> ▪
 <a href="https://ufal.mff.cuni.cz/corefud">CorefUD: Coreference in Universal Dependencies</a> ▪
 <a href="https://www.universalner.org/">UNER: Universal Named Entity Recognition</a> ▪
 <a href="https://umr4nlp.github.io/web/">UMR: Uniform Meaning Representation</a> ▪
 <a href="https://unimorph.github.io/">UniMorph</a> ▪
 <a href="https://lindat.mff.cuni.cz/services/teitok-live/udmorph/">UDMorph</a> ▪
 <a href="https://ufal.mff.cuni.cz/universal-derivations">UDer: Universal Derivations</a> ▪
 <a href="https://gitlab.com/parseme/corpora/-/wikis/home">PARSEME: Multiword expressions</a> ▪
 <a href="https://unidive.lisn.upsaclay.fr/doku.php?id=start">UniDive COST Action</a>
</td></tr>
</table>

## Current UD Languages

<small>Information about language families (and genera for families with multiple branches) is mostly taken from
[WALS Online](http://wals.info) (IE = Indo-European).</small>

<div id="accordion" class="jquery-ui-accordion">
{% include at_glance.html %}
</div>

<small>Disclaimer: Our use of flags to symbolise languages is only intended as a visual enhancement of the website and should not be interpreted as a political statement in any way.</small>

## Possible Future Extensions

People have expressed interest in providing annotated data for the following languages but no
valid data has been provided so far.

<div id="accordion" class="jquery-ui-accordion">
{% include at_glance_sapling.html %}
</div>

<small>Disclaimer: Our use of flags to symbolise languages is only intended as a visual enhancement of the website and should not be interpreted as a political statement in any way.</small>

## Retired Treebanks

The following treebanks have been part of one or more UD releases in the past but they are no
longer maintained and they have been excluded from the most recent release.

<div id="accordion" class="jquery-ui-accordion">
{% include at_glance_retired.html %}
</div>

<small>Disclaimer: Our use of flags to symbolise languages is only intended as a visual enhancement of the website and should not be interpreted as a political statement in any way.</small>
