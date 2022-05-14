---
layout: feature
title: 'NumType'
shortdef: 'numeral type'
udver: '2'
---

## NumType

Some languages (especially Slavic) have a complex system of [numerals](../../u/pos/NUM). 
<!--For example, in the school grammar of Czech, the main part of speech is "numeral", it includes almost everything 
where counting is involved and there are various subtypes. It also includes interrogative, relative, indefinite and demonstrative words 
referring to numbers (words like *kolik / how many, tolik / so many, několik / some, a few),* so at the same time we may have a non-empty 
value of [PronType](PronType.html).  (In English, these words are called quantifiers and they are considered a subgroup of 
[determiners](../../u/pos/DET).)-->

In Pomak, the feature `NumType` is assigned to the following parts of speech:

### <a name="Card">`Card`</a>: cardinal number or corresponding interrogative / relative / indefinite / demonstrative word
-[u-pos/NUM](../../u/pos/NUM.html): these are the so-called cardinal numerals

#### Examples

- *annó / bir* "ένα", *dve / ikí* "δύο", *tri / üč* "τρία", *čétri / dørt* "τέσσερα", *beš * "πέντε", *altý* "έξι", *jedí* "επτά",
*ellí* "πενήντα", *jus* "εκατό" *bin* "χίλια"

### <a name="Ord">`Ord`</a>: ordinal number or corresponding interrogative / relative / indefinite / demonstrative word

-[u-pos/ADJ](../../u/pos/ADJ.html): these are the so-calledordinal numerals

#### Examples

- *pórvyj* / birinǧí* "πρώτος", *ikinǧí* "δεύτερος", *üčünǧǘ* "τρίτος", *dørdünǧǘ* "τέταρτος", *bešinǧí* "πέμπτος", *altynǧí* "έκτος", *jedinǧí* "έβδομος", *ellinǧí* "πεντηκοστός", *juzünǧǘ* "εκατοστός", *bininǧí* "χιλιοστός"

### <a name="Mult">`Mult`</a>: multiplicative numeral or corresponding interrogative / relative / indefinite / demonstrative word

-[u-pos/ADV](../../u/pos/ADV.html): these are the so-called ordinal and multiplicative numerals

#### Examples

- *annóš* "μια φορά", *dvaš* "δυο φορές / δις", *triš* "τρεις φορές / τρις", *čétriš "τέσσερις φορές / τετράκις"*, *beš keré(t)* "πεντάκις", *altý keré(t)* "εξάκις", *jedí keré(t)* "επτάκις", *ellí keré(t)* "πενήντα φορές", *jus keré(t)* "εκατό φορές", *bin keré(t)* "χίλιες φορές"

<!-- Interlanguage links updated So kvě 14 19:02:27 CEST 2022 -->
