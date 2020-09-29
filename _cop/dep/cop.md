---
layout: relation
title: 'cop'
udver: '2'
shortdef: 'copula'
---

This label marks the copula forms ⲡⲉ, ⲧⲉ, ⲛⲉ. Note that the copula is not the root of a copula predication, but rather a dependent of the lexical predicate, usually a noun preceding the copula, but sometimes a verb (especially with preterit conversion, followed by the ‘optional’ copula). Both cases are illustrated below.

~~~ sdparse
ⲛⲉⲓ/DET ⲣⲱⲙⲉ/NOUN ϩⲉⲛ/DET ⲓⲟⲩⲇⲁⲓ/NOUN ⲛⲉ/AUX \n These men are Jews. 

cop(ⲓⲟⲩⲇⲁⲓ, ⲛⲉ)
det(ⲓⲟⲩⲇⲁⲓ, ϩⲉⲛ)
nsubj(ⲓⲟⲩⲇⲁⲓ, ⲣⲱⲙⲉ)
det(ⲣⲱⲙⲉ, ⲛⲉⲓ)
~~~

~~~ sdparse
ϩⲁⲙⲟⲓ/CONJ ⲟⲛ/ADV ⲛⲉ/AUX ϣⲁ/AUX ⲧⲉⲧⲛ/PRON ϭⲱ/VERB ⲛ/ADP ⲧⲉⲓ/DET ϩⲉ/NOUN ⲡⲉ/AUX \n Oh, would that you would stop in this way! 

discourse(ϭⲱ, ϩⲁⲙⲟⲓ)
advmod(ϭⲱ,ⲟⲛ)
mark(ϭⲱ,ⲛⲉ)
aux(ϭⲱ,ϣⲁ)
nsubj(ϭⲱ,ⲧⲉⲧⲛ)
cop(ϭⲱ,ⲡⲉ)
nmod(ϭⲱ,ϩⲉ)
det(ϩⲉ, ⲧⲉⲓ)
case(ϩⲉ, ⲛ)
~~~

Also note that in nominal sentences, the subject is `nsubj` to the predicate, not to the copula. This is also true when the subject follows the copula, as shown below.

~~~ sdparse
ⲛⲧⲟⲕ/PRON ⲡⲉ/AUX ⲧⲉⲩ/DET ϩⲉⲗⲡⲓⲥ/NOUN \n Their hope is you (lit. 'it's you, their hope')

cop(ⲛⲧⲟⲕ, ⲡⲉ)
nsubj(ⲛⲧⲟⲕ, ϩⲉⲗⲡⲓⲥ)
det(ϩⲉⲗⲡⲓⲥ, ⲧⲉⲩ)
~~~


<!-- Interlanguage links updated Út zář 29 18:41:15 CEST 2020 -->
