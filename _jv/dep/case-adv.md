---
layout: relation
title: 'case:adv'
shortdef: 'case marking to form adverbs'
udver: '2'
---

This deprel is a special class of [case](). While deprel 'case' is usually used for ADP as a nominal dependent, for this subtype, ADP can be a dependent of ADJ/VERB and together with its parent, they form adverbs.

In Javanese grammar, we can use syntax ADP + ADJ/VERB/NOUN to form adverbs.
Since we can not use deprel 'case' for ADP + ADJ/VERB, we propose the use of subtype 'case:adv'. 
This construction is similar with adverbs in Indonesian.

In this following example, _kanthi kapisah_ "separately" is an adverb to _manggihaken_ "discovered".

~~~ sdparse
kanthi kapisah manggihaken timbangan puntir \n separately discovered torsional scales
case:adv(kapisah, kanthi)
advcl(manggihaken, kapisah)
advmod(discovered, separately)
~~~


<!-- Interlanguage links updated Pá kvě 14 11:08:53 CEST 2021 -->
