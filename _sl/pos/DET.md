---
layout: postag
title: 'DET'
shortdef: 'determiner'
---

### Definition

Determiners are words that modify nouns or noun phrases and express the reference of the noun phrase in context. That is, a determiner may indicate whether the noun is referring to a definite or indefinite element of a class, to a closer or more distant element, to an element belonging to a specified person or thing, to a particular number or quantity, etc.

The traditional grammar of Slovenian does not define determiners as a separate word class. Instead, words that perform the syntactic function of determiners are either categorizied as adverbs (_nekaj_ "some", _veliko_ "a lot of", _dovolj_ "enough of" etc.) or pronouns (_ta_ "this", _ves_ "all", _moj_ "my", _vsak_ "each" etc.), regardless of whether they are used as attributives (_<b>To</b>.`DET` besedilo je nerazumljivo._ "This text is incomprehensible.") or substantives (_<b>To</b>.`PRON` sem že slišal._ "I have heard this before.").  

#### Conversion from JOS

Since JOS morphosyntactic specifications do not distinguish substantive and attributive pronouns or quantifying and other adverbs, the conversion is done based on syntactic information. The pronouns modifying a noun are thus marked as `DET`, otherwise they are marked as [PRON](PRON). Similarly, the list of adverbs modifying a noun was manually validated to define a closed set of quantifying adverbs marked as `DET`. 

### Examples

* _njegov_ "his", _njen_ "her", _naš_ "our", _njihov_ "their"_, _moj_ "my"_, _vaš_ "your" etc. (JOS possessive pronouns)
* _ta_ "this", _tisti_ "that", _takšen_ "such", _tak_ "such"_, _tolikšen_ "so big" etc. (JOS demonstrative pronouns)
* _ves_ "all", _vsak_ "each", _oba_ "both", _vsakršen_ "any" (JOS general pronouns)
* _svoj_ "one's own" (JOS reflexive pronouns)
* _nekateri_ "some", _nek_ "some kind", _isti_ "identical", _enak_ "same", _mnog_ "many" (JOS indefinite pronouns)
* _kakšen_ "what kind", _kateri_ "what type", _čigav_ "whose" (JOS interrogative pronouns)
* _noben_ "no one", _nikakršen_ "no kind", _nič_ "nothing" (JOS negative pronouns)
* _kakršenkoli_ "any kind of", _katerikoli_ "any type of", _čigar_ "whose" (JOS relative pronouns)
* _nekaj_ "some", _več_ "more", _veliko_ "a lot of", _dovolj_ "enough of", _pol_ "half of", _malo_ "little of" (JOS adverbs)
<!-- Interlanguage links updated Čt lis 12 09:42:52 CET 2020 -->
