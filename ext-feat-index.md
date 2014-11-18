---
layout: base
title:  'Language-specific features'
---

# Language-specific features

## Interset features that are not part of this standard

The universal features are mostly derived from the
<a href="http://ufal.mff.cuni.cz/interset">Interset Project</a>
(<a href="http://ufal.mff.cuni.cz/~zeman/publikace/2008-02/tagdrivers-marrakech-styl-lrec.pdf">Zeman, 2008</a>).
Interset contains additional features that have not yet been adopted as
universal features. However, they may be used, if necessary, as part of the
"language-specific extensions" to the universal features.

The following Interset features are currently not part of the standard:

* <a href="u/ext-feat/Abbr.html">Abbr</a>
* <a href="u/ext-feat/AdpType.html">AdpType</a>
* <a href="u/ext-feat/AdvType.html">AdvType</a>
* <a href="u/ext-feat/ConjType.html">ConjType</a>
* <a href="u/ext-feat/Echo.html">Echo</a>
* <a href="u/ext-feat/Foreign.html">Foreign</a>
* <a href="u/ext-feat/Hyph.html">Hyph</a>
* <a href="u/ext-feat/NameType.html">NameType</a>
* <a href="u/ext-feat/NounType.html">NounType</a>
* <a href="u/ext-feat/NumForm.html">NumForm</a>
* <a href="u/ext-feat/NumValue.html">NumValue</a>
* <a href="u/ext-feat/PartType.html">PartType</a>
* <a href="u/ext-feat/Politeness.html">Politeness</a>
* <a href="u/ext-feat/PrepCase.html">PrepCase</a>
* <a href="u/ext-feat/PunctSide.html">PunctSide</a>
* <a href="u/ext-feat/PunctType.html">PunctType</a>
* <a href="u/ext-feat/Style.html">Style</a>
* <a href="u/ext-feat/Typo.html">Typo</a>
* <a href="u/ext-feat/VerbType.html">VerbType</a>

The following Interset features are not used under their Interset names but they are included
through the
<a href="http://universaldependencies.github.io/docs/u/overview/feat-layers.html">layered feature scheme</a>:

* <a href="u/ext-feat/PossedNumber.html">PossedNumber</a> = `Number[psee]`
* <a href="u/ext-feat/PossGender.html">PossGender</a> = `Gender[psor]`
* <a href="u/ext-feat/PossNumber.html">PossNumber</a> = `Number[psor]`
* <a href="u/ext-feat/PossPerson.html">PossPerson</a> = `Person[psor]`

The following features are included in the universal standard, but some values are missing there:

* `PronType=Exc` … exclamative pronoun or determiner. It expresses the speaker's surprise towards the modified noun, e.g. _what_ in _<b>What</b> a surprise!_ In many languages, exclamative determiners are recruited from the set of interrogative determiners. Therefore, not all tagsets distinguish them. For instance, they are distinguished in Spanish (es::conll2009), Catalan (ca::conll2009) and Persian (fa::conll).

There are automatically generated approximate
<a href="tagset-conversion/">conversion tables</a>
from existing tagsets of various languages to the universal part-of-speech tags and features.
