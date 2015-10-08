---
layout: base
title:  'Language-specific features'
---

# Language-specific features

In addition to the <a href="u/feat/index.html">universal set of features</a>,
it is desirable to recognize word features that are particular
to one language or a small group of related languages.
We also include here features that are not language-specific but rather treebank-specific.
They encode something that could occur in many languages but only a few treebanks choose to tag it
(for example, whether a word is an abbreviation).

These features are not part of the core universal set
but if they appear in more than one language,
they should be encoded in all the languages identically.

For the universal features, there may be additional language-specific values that are not (yet) defined at the universal level.

Features that have brackets in their name (such as `Gender[psor]`) are <a href="u/overview/feat-layers.html">layered features</a>.
It means that a feature applies more than once to a word, in layers. The layer is indicated in the brackets.
Layered features are clones of existing non-layered universal or language-specific features.
They have their own language-specific documentation that describes what is the meaning of the layer,
how the list of values is modified for the layer (if at all),
and provides layer-specific examples.

The universal features are mostly derived from the
<a href="http://ufal.mff.cuni.cz/interset">Interset Project</a>
(<a href="http://ufal.mff.cuni.cz/~zeman/publikace/2008-02/tagdrivers-marrakech-styl-lrec.pdf">Zeman, 2008</a>).
Interset contains additional features that have not yet been adopted as
universal features. However, they may be used, if necessary, as part of the
"language-specific extensions" to the universal features.

There are automatically generated approximate
<a href="tagset-conversion/">conversion tables</a>
from existing tagsets of various languages to the universal part-of-speech tags and universal + language-specific features.

## Abbr
* [Arabic values](ar-feat/Abbr): Yes
* [Czech values](cs-feat/Abbr): Yes
* [Estonian values](et-feat/Abbr): Yes
* [Finnish values](fi-feat/Abbr): Yes
* [Slovenian values](sl-feat/Abbr): Yes
* [Interset](ext-feat/Abbr): Yes


## AdpType
* [Ancient Greek values](grc-feat/AdpType): Prep
* [Arabic values](ar-feat/AdpType): Prep
* [Czech values](cs-feat/AdpType): Prep, Voc, Comprep
* [Estonian values](et-feat/AdpType): Prep, Post
* [Latin values](la-feat/AdpType): Prep
* [Interset](ext-feat/AdpType): Prep, Post, Circ, Voc

## AdvType
* [Interset](ext-feat/AdvType): Man, Loc, Tim, Deg, Cau, Mod, Sta, Ex, Adadj

## ConjType
* [Czech values](cs-feat/ConjType): Oper
* [Interset](ext-feat/ConjType): Comp, Oper

## Connegative
* [Finnish values](fi-feat/Connegative): Yes

## Derivation
* [Finnish values](fi-feat/Derivation): Minen, Sti, Inen, Lainen, Ja, Ton, Vs, Ttain, Ttaa

## Echo
* [Interset](ext-feat/Echo): Rdp, Ech

## Foreign
* [Arabic values](ar-feat/Foreign): Foreign
* [Czech values](cs-feat/Foreign): Foreign, Fscript, Tscript
* [Finnish values](fi-feat/Foreign): Foreign, Fscript
* [Slovenian values](sl-feat/Foreign): Yes
* [Interset](ext-feat/Foreign): Foreign, Fscript, Tscript

## Gender[dat]
* [Basque values](ext-feat/ErgDatGender): Masc, Fem
* [Interset](ext-feat/ErgDatGender): Masc, Fem

## Gender[erg]
* [Basque values](ext-feat/ErgDatGender): Masc, Fem
* [Interset](ext-feat/ErgDatGender): Masc, Fem

## Gender[psor]
* <a href="cs/feat/Gender-psor.html">Czech values</a>: Masc, Fem
* [Slovenian values](sl-feat/Gender-psor): Masc, Fem, Neut
* [Interset](ext-feat/PossGender): Masc, Fem

## Hyph
* [Czech values](cs-feat/Hyph): Yes
* [Interset](ext-feat/Hyph): Yes

## InfForm
* [Finnish values](fi-feat/InfForm): 1, 2, 3

## NameType
* [Czech values](cs-feat/NameType): Geo, Prs, Giv, Sur, Nat, Com, Pro, Oth
* [Estonian values](et-feat/NameType): Nat
* [Interset](ext-feat/NameType): Geo, Prs, Giv, Sur, Nat, Com, Pro, Oth

## NounType
* [Interset](ext-feat/NounType): Com, Prop, Class

## Number[abs]
* [Basque values](ext-feat/AbsErgDatNumber): Sing, Plur
* [Interset](ext-feat/AbsErgDatNumber): Sing, Plur

## Number[dat]
* [Basque values](ext-feat/AbsErgDatNumber): Sing, Plur
* [Interset](ext-feat/AbsErgDatNumber): Sing, Plur

## Number[erg]
* [Basque values](ext-feat/AbsErgDatNumber): Sing, Plur
* [Interset](ext-feat/AbsErgDatNumber): Sing, Plur

## Number[psee]
* [Interset](ext-feat/PossedNumber): Sing, Plur

## Number[psor]
* <a href="cs/feat/Number-psor.html">Czech values</a>: Sing, Plur
* <a href="fi/feat/Number-psor.html">Finnish values</a>: Sing, Plur
* [Slovenian values](sl-feat/Number-psor): Sing, Dual, Plur
* [Interset](ext-feat/PossNumber): Sing, Plur

## NumForm
* [Arabic values](ar-feat/NumForm): Digit, Word
* [Czech values](cs-feat/NumForm): Digit, Roman, Word
* [Estonian values](et-feat/NumForm): Digit, Word
* [Slovenian values](sl-feat/NumForm): Digit, Roman, Word
* [Interset](ext-feat/NumForm): Digit, Roman, Word

## NumValue
* [Arabic values](ar-feat/NumValue): 1, 2, 3
* [Czech values](cs-feat/NumValue): 1, 2, 3
* [Interset](ext-feat/NumValue): 1, 2, 3

## PartForm
* [Finnish values](fi-feat/PartForm): Pres, Past, Agt, Neg

## PartType
* [Interset](ext-feat/PartType): Mod, Emp, Res, Inf, Vbp

## Person[abs]
* [Basque values](ext-feat/AbsErgDatPerson): 1, 2, 3
* [Interset](ext-feat/AbsErgDatPerson): 1, 2, 3

## Person[dat]
* [Basque values](ext-feat/AbsErgDatPerson): 1, 2, 3
* [Interset](ext-feat/AbsErgDatPerson): 1, 2, 3

## Person[erg]
* [Basque values](ext-feat/AbsErgDatPerson): 1, 2, 3
* [Interset](ext-feat/AbsErgDatPerson): 1, 2, 3

## Person[psor]
* <a href="fi/feat/Person-psor.html">Finnish values</a>: 1, 2, 3
* [Interset](ext-feat/PossPerson): 1, 2, 3

## Polite
* [Basque values](ext-feat/Polite): Inf, Pol
* [Interset](ext-feat/Polite): Inf, Pol

## Polite[abs]
* [Basque values](ext-feat/AbsErgDatPolite): Inf, Pol
* [Interset](ext-feat/AbsErgDatPolite): Inf, Pol

## Polite[erg]
* [Basque values](ext-feat/AbsErgDatPolite): Inf, Pol
* [Interset](ext-feat/AbsErgDatPolite): Inf, Pol

## Polite[dat]
* [Basque values](ext-feat/AbsErgDatPolite): Inf, Pol
* [Interset](ext-feat/AbsErgDatPolite): Inf, Pol

## Prefix
* [Interset](ext-feat/Prefix): Yes

## PrepCase
* [Czech values](cs-feat/PrepCase): Npr, Pre
* [Interset](ext-feat/PrepCase): Npr, Pre

## PunctSide
* [Interset](ext-feat/PunctSide): Ini, Fin

## PunctType
* [Estonian values](et-feat/PunctType): Comm, Excl, Peri, Qest
* [Interset](ext-feat/PunctType): Peri, Qest, Excl, Quot, Brck, Comm, Colo, Semi, Dash

## Style
* [Czech values](cs-feat/Style): Arch, Rare, Poet, Norm, Coll, Vrnc, Slng, Expr, Derg, Vulg
* [Finnish values](fi-feat/Style): Arch, Coll
* [Interset](ext-feat/Style): Arch, Rare, Poet, Norm, Coll, Vrnc, Slng, Expr, Derg, Vulg

## Subcat
* [Interset](ext-feat/Subcat): Intr, Trans

## Typo
* [Finnish values](fi-feat/Typo): Yes
* [Interset](ext-feat/Typo): Yes

## Variant
* [Czech values](cs-feat/Variant): Short
* [Slovenian values](sl-feat/Variant): Bound, Short

## VerbType
* [Estonian values](et-feat/VerbType): Mod
* [Interset](ext-feat/VerbType): Aux, Cop, Mod, Light



# Additional language-specific values for universal features

The following features are included in the <a href="u/feat/index.html">universal set</a>, but some values are missing there:

## Degree
* [u-feat/Degree]()` = Dim`: diminutive (used for nouns e.g. in Dutch: _stoeltje, huisje, nippertje_)

## PronType
* [u-feat/PronType]()` = Exc`: exclamative pronoun or determiner. It expresses the speaker's surprise towards the modified noun, e.g. _what_ in _<b>What</b> a surprise!_ In many languages, exclamative determiners are recruited from the set of interrogative determiners. Therefore, not all tagsets distinguish them. For instance, they are distinguished in Spanish (es::conll2009), Catalan (ca::conll2009), Italian (it::isdt) and Persian (fa::conll).
* `PronType = Clit`: used for clitic pronouns in Italian, e.g. _<b>Si</b> è rotto_ "It has broken"

## Tense
* [u-feat/Tense]()` = Aor`: aorist (as opposed to `Past`) in Ancient Greek.

## VerbForm
* [u-feat/VerbForm]()` = Gdv`: gerundive (as opposed to the gerund) in [la-feat/VerbForm](Latin).

## Voice
* [u-feat/Voice]()` = Mid`: middle voice in [grc-feat/Voice](Ancient Greek). (The mediopassive voice can be expressed as `Voice=Mid,Pass`.)
* `Voice = Int`: intensive voice/aspect (the PIEL binyan) in Hebrew.
