---
layout: relation
title: 'advcl'
shortdef: 'adverbial clause modifier'
udver: '2'
---

An adverbial subordinate clause (e.g. a clause answering the question why? How? Where? When? or a conditional, etc.), usually introduced by a subordinating conjunction or auxiliary (ⲉⲡⲉⲓⲇⲏ, ⲉⲣϣⲁⲛ), or a circumstantial converter (ⲉ/ⲉⲣⲉ).

Example:

~~~ sdparse
ⲉⲛⲉ/CONJ ⲟⲩ/DET ⲙⲟⲛⲁⲭⲟⲥ/NOUN ⲛⲁⲙⲉ/ADV ⲡⲉ/AUX ⲛⲉ/AUX ϥ/PRON ⲛⲁ/AUX ⲣ/VERB ϣⲟⲙⲧ/NUM ⲙ/ADP ⲫⲟⲛⲟⲥ/NOUN \n ...if he were truly a monk, would he have committed three murders?

advcl(ⲣ,ⲙⲟⲛⲁⲭⲟⲥ)
~~~

Rarely, we may also see a subordinate clause governed by a preposition, in which case the preposition is governed by the head of the clause and labeled `mark`, not `case`, even if there is also a second conjunction with a `mark` label.

Example:

~~~ sdparse
ⲙⲛ/VERB ϣⲏⲣⲉ/NOUN ... ⲉⲧⲃⲉ/ADP ϫⲉ/CONJ ⲁ/AUX ⲩ/PRON ⲡⲱⲧ/VERB \n There are no children ... because (lit. for that) they have fled.

advcl(ⲙⲛ, ⲡⲱⲧ)
mark(ⲡⲱⲧ, ⲉⲧⲃⲉ)
mark(ⲡⲱⲧ, ϫⲉ)
~~~

This analysis keeps a parallel structure with a similar clause without the preposition (e.g. only with ϫⲉ to mean ‘because’).
<!-- Interlanguage links updated Pá kvě 14 11:08:45 CEST 2021 -->
