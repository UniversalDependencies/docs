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
* <a href="u/ext-feat/Polite.html">Polite</a>
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
* AbsPerson = `Person[abs]`
* ErgPerson = `Person[erg]`
* DatPerson = `Person[dat]`
* AbsNumber = `Number[abs]`
* ErgNumber = `Number[erg]`
* DatNumber = `Number[dat]`
* AbsPolite = `Polite[abs]`
* ErgPolite = `Polite[erg]`
* DatPolite = `Polite[dat]`
* ErgGender = `Gender[erg]`
* DatGender = `Gender[dat]`

The following features are included in the universal standard, but some values are missing there:

* <a href="u/feat/PronType.html"><tt>PronType</tt></a>`=Exc` … exclamative pronoun or determiner. It expresses the speaker's surprise towards the modified noun, e.g. _what_ in _<b>What</b> a surprise!_ In many languages, exclamative determiners are recruited from the set of interrogative determiners. Therefore, not all tagsets distinguish them. For instance, they are distinguished in Spanish (es::conll2009), Catalan (ca::conll2009) and Persian (fa::conll).
* New value 'opt' of the feature 'mood': optative mood in Ancient Greek and Turkish, to express wishes:
  "May you have a long life!" "If only I were rich!"
* New value 'des' of the feature 'mood': desiderative mood in Turkish: "He wants to come."
* New value 'nec' of the feature 'mood': necessitative mood in Turkish: "He must come. He should come."
* New value 'mid' of the feature 'voice': middle voice in Ancient Greek. (The mediopassive voice can be expressed as 'mid|pass'.)
* New value 'rcp' of the feature 'voice': reciprocal (Turkish "kar&#305;şt&#305;", "tutuştular")
* New value 'cau' of the feature 'voice': causative (Turkish "kar&#305;şt&#305;r&#305;yor" ("is confusing"))
* New value 'int' of the feature 'voice': intensive voice/aspect (the PIEL binyan) in Hebrew.

There are automatically generated approximate
<a href="tagset-conversion/">conversion tables</a>
from existing tagsets of various languages to the universal part-of-speech tags and features.
