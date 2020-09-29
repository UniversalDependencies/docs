---
layout: relation
title: 'foreign'
shortdef: 'foreign words'
---

We use `foreign` to label sequences of foreign words. These are given
a linear analysis: the head is the first token in the foreign phrase.

`foreign` does not apply to words transliterated to the Greek script, 
loanwords or to foreign [names](flat). It applies to quoted foreign text 
incorporated in a sentence/discourse of the host language (unless we want 
to and know how to annotate the internal structure according 
to the syntax of the foreign language).

~~~ sdparse
Cogito ergo sum έλεγαν οι Λατίνοι . 
parataxis(έλεγαν, Cogito)
foreign(Cogito, ergo)
foreign(Cogito, sum)
~~~
<!-- Interlanguage links updated Út zář 29 20:43:19 CEST 2020 -->
