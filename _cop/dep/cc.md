---
layout: relation
title: 'cc'
shortdef: 'coordinating conjunction'
udver: '2'
---

The label for coordinating conjunctions. These are usually ⲁⲩⲱ ‘and’ between clauses and ⲙⲛ ‘and, with’ between phrases, but could also be ϩⲓ in the sense ‘X upon Y’ or ⲏ ‘or’. If the sense is not coordinating (e.g. ⲙⲛ to mean ‘with’), cc should not be used, but nmod as with a regular preposition. 

The coordinated conjuncts themselves, with the label `conj` are marked left to right, with the first coordinate dominating all subsequent conjuncts and receiving the incoming grammatical relations. The reasoning is that to retrieve the function of any coordinate, we can check its parent’s function, even without knowing how many coordinates there are (X and Y and Z and …). The coordinating conjunction, `cc`, is governed right to left, by the closest conjunct following it. This makes it easy to connect a sentence initial 'and'.

Example:

~~~ sdparse
ϩⲛ/ADP ⲙ/DET ⲙⲛⲧⲁⲡⲓⲥⲧⲟⲥ/NOUN ,/PUNCT ⲙⲛ/ADP ⲙⲛⲧⲁⲕⲁⲑⲁⲣⲧⲟⲥ/NOUN ⲛⲓⲙ/PRON \n In faithlessness and every impurity

case(ⲙⲛⲧⲁⲡⲓⲥⲧⲟⲥ, ϩⲛ)
det(ⲙⲛⲧⲁⲡⲓⲥⲧⲟⲥ, ⲙ)
cc(ⲙⲛⲧⲁⲕⲁⲑⲁⲣⲧⲟⲥ, ⲙⲛ)
conj(ⲙⲛⲧⲁⲡⲓⲥⲧⲟⲥ, ⲙⲛⲧⲁⲕⲁⲑⲁⲣⲧⲟⲥ)
det(ⲙⲛⲧⲁⲕⲁⲑⲁⲣⲧⲟⲥ, ⲛⲓⲙ)
~~~

Note that the function of ⲙⲛⲧⲁⲡⲓⲥⲧⲟⲥ ‘faithlessness’ is `nmod`. To recover the function of ⲙⲛⲧⲁⲕⲁⲑⲁⲣⲧⲟⲥ ‘impurity’, we can look at ‘faithlessness’, its immediate parent and establish that ‘impurity’ is also `nmod`. Also note that the word ⲙⲛ ‘and’ is ambiguous with the meaning of comitative ‘with’ (e.g. go somewhere with someone). When used in the latter way, it is not labeled cc + conj but rather nmod + case, as with all other prepositions.

Clause initial ‘and’ or ‘but’ is connected to the root of the clause, pointing backwards as usual, as in this example:

~~~ sdparse
ⲏ/CONJ ϯ/PRON ⲥⲟⲟⲩⲛ/VERB ⲁⲛ/ADV \n Or don't I know? 

cc(ⲥⲟⲟⲩⲛ, ⲏ)
nsubj(ⲥⲟⲟⲩⲛ, ϯ)
advmod(ⲥⲟⲟⲩⲛ, ⲁⲛ)
~~~

In this case, the word ⲏ ‘or’ is pointed to from the following conjunct ‘know’ with the usual function, `cc`, even though there is no `conj`.
<!-- Interlanguage links updated Út zář 29 20:31:45 CEST 2020 -->
