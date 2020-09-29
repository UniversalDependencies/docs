---
layout: relation
title: 'obl'
shortdef: 'oblique argument or adjunct'
udver: '2'
---

The `obl` relation is used for oblique nominal arguments and adjuncts of verbs.

The token marked `obl` is a noun (or head of a noun phrase) functioning as a non-core (oblique) argument or adjunct. The `obl` token can provide locational, temporal or other adverbial information, and may be an adjunct as well. 

Examples:

~~~ sdparse
ⲡ/DET ⲇⲓⲁⲃⲟⲗⲟⲥ/NOUN ⲟⲩⲏϩ/VERB ⲛϩⲏⲧ/ADP ⲕ/PRON \n The Devil dwells inside you

obl(ⲟⲩⲏϩ,ⲕ)
case(ⲕ,ⲛϩⲏⲧ)
~~~

~~~ sdparse
ⲡⲉϫⲁ/VERB ϥ/PRON ⲛⲁ/ADP ⲥ/PRON \n He said to her

obl(ⲡⲉϫⲁ,ⲥ)
case(ⲥ,ⲛⲁ)
nsubj(ⲡⲉϫⲁ,ϥ)
~~~

Note that `obl` includes prepositional objects of verbs of perception, such as the object of 'hear' or 'see', which is prepositional in Coptic:

~~~ sdparse
ⲁⲣ/PRON ⲥⲱⲧⲙ/VERB ⲉⲣⲟ/ADP ⲓ/PRON \n You have heard me

nsubj(ⲥⲱⲧⲙ, ⲁⲣ)
obl(ⲥⲱⲧⲙ, ⲓ)
case(ⲓ, ⲉⲣⲟ)
~~~

Prepositional objects are always `obl` and never marked as `obj`, unless they are marked by the object marker ⲛ in one of the durative tenses, according to Jernstedt's Law. 
<!-- Interlanguage links updated Út zář 29 20:43:25 CEST 2020 -->
