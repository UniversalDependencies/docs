---
layout: base
title: 'Tagset conversion tables'
---

## Tagset conversion tables to universal tags and features

**Disclaimer:**
The UD tags have substantive definitions and are not simply equivalence classes of the part-of-speech (POS) tags of
language-particular treebanks. That is, the situation is different from the pure equivalence class approach used in
the original 2011 Google Universal POS Tags work. Some tags can only be mapped correctly if we also know the lemma
or the syntactic context. As a concrete example, we now distinguish adpositions (`ADP`) from subordinating conjunctions (`SCONJ`).
This distinction is not available in the Penn Treebank English POS tag set (where both are IN), and for words that
can be used in either role, the correct UD POS tag can only be
recovered by looking at the syntactic context in which the word appears. Such information is not used in the
mappings made available here.
These conversion tables were generated automatically via <a href="http://ufal.mff.cuni.cz/interset">Interset</a>.
It uses only tags (+ features) as input; therefore the result is only an approximation of correct UD tags.
Thus both the tables and  the applications of them to POS-tagged text will likely require manual postprocessing
in order to provide accurate and complete UD information.
Nevertheless, in practice, most tags in most languages can still be mapped correctly without
such use of syntactic content of morphological analysis, and hence this automatic conversion can be quite useful.

* <a href="ar-padt-uposf.html">ar::padt</a> (Arabic)
* <a href="ar-conll-uposf.html">ar::conll</a> (Arabic)
* <a href="ar-conll2007-uposf.html">ar::conll2007</a> (Arabic)
* <a href="bg-conll-uposf.html">bg::conll</a> (Bulgarian)
* <a href="bn-conll-uposf.html">bn::conll</a> (Bengali)
* <a href="ca-conll2009-uposf.html">ca::conll2009</a> (Catalan)
* <a href="cs-pdt-uposf.html">cs::pdt</a> (Czech)
* <a href="cs-conll-uposf.html">cs::conll</a> (Czech)
* <a href="cs-ajka-uposf.html">cs::ajka</a> (Czech)
* <a href="cs-multext-uposf.html">cs::multext</a> (Czech)
* <a href="da-conll-uposf.html">da::conll</a> (Danish)
* <a href="de-conll2009-uposf.html">de::conll2009</a> (German)
* <a href="de-smor-uposf.html">de::smor</a> (German)
* <a href="de-stts-uposf.html">de::stts</a> (German)
* <a href="el-conll-uposf.html">el::conll</a> (Greek)
* <a href="en-penn-uposf.html">en::penn</a> (English) (see also the Tsurgeon converter on the <a href="../en/overview/morphology.html">English POS and Morphology page</a>)
* <a href="es-conll2009-uposf.html">es::conll2009</a> (Spanish)
* <a href="et-puudepank-uposf.html">et::puudepank</a> (Estonian)
* <a href="eu-conll-uposf.html">eu::conll</a> (Basque)
* <a href="fa-conll-uposf.html">fa::conll</a> (Persian)
* <a href="fi-turku-uposf.html">fi::turku</a> (Finnish)
* <a href="grc-conll-uposf.html">grc::conll</a> (Ancient Greek)
* <a href="he-conll-uposf.html">he::conll</a> (Hebrew)
* <a href="hi-conll-uposf.html">hi::conll</a> (Hindi)
* <a href="hr-multext-uposf.html">hr::multext</a> (Croatian)
* <a href="hu-conll-uposf.html">hu::conll</a> (Hungarian)
* <a href="it-conll-uposf.html">it::conll</a> (Italian)
* <a href="it-isdt-uposf.html">it::isdt</a> (Italian)
* <a href="ja-conll-uposf.html">ja::conll</a> (Japanese)
* <a href="ja-ipadic-uposf.html">ja::ipadic</a> (Japanese)
* <a href="la-conll-uposf.html">la::conll</a> (Latin)
* <a href="nl-conll-uposf.html">nl::conll</a> (Dutch)
* <a href="nl-cgn-uposf.html">nl::cgn</a> (Dutch)
* <a href="pl-ipipan-uposf.html">pl::ipipan</a> (Polish)
* <a href="pt-cintil-uposf.html">pt::cintil</a> (Portuguese)
* <a href="pt-conll-uposf.html">pt::conll</a> (Portuguese)
* <a href="ro-rdt-uposf.html">ro::rdt</a> (Romanian)
* <a href="ru-syntagrus-uposf.html">ru::syntagrus</a> (Russian)
* <a href="sk-snk-uposf.html">sk::snk</a> (Slovak)
* <a href="sl-conll-uposf.html">sl::conll</a> (Slovenian)
* <a href="sl-multext-uposf.html">sl::multext</a> (Slovenian)
* <a href="sv-mamba-uposf.html">sv::mamba</a> (Swedish)
* <a href="sv-parole-uposf.html">sv::parole</a> (Swedish)
* <a href="sv-suc-uposf.html">sv::suc</a> (Swedish)
* <a href="ta-tamiltb-uposf.html">ta::tamiltb</a> (Tamil)
* <a href="te-conll-uposf.html">te::conll</a> (Telugu)
* <a href="tr-conll-uposf.html">tr::conll</a> (Turkish)
* <a href="zh-conll-uposf.html">zh::conll</a> (Chinese)
