---
layout: relation
title: 'ccomp'
shortdef: 'clausal complement'
udver: '2'
---

Marks a complement clause, e.g. an object clause to a verb of saying (said that: …., saw that: …). The dependency goes from the main clause predicate to the subordinate clause predicate. Markers like ϫⲉ are governed by the `mark` function (see `mark`).

~~~ sdparse
ⲏ/CONJ ϯ/PRON ⲥⲟⲟⲩⲛ/VERB ⲁⲛ/ADV ⲙⲡⲁⲧ/AUX ⲓ/PRON ϫⲟⲟⲩ/VERB ⲥⲟⲩ/PRON ϫⲉ/CONJ ⲕ/PRON ⲛⲁ/AUX ⲡⲁϩ/VERB ⲟⲩ/PRON \n Don't I know, before I have sent them, that you will tear them up? 

cc(ⲥⲟⲟⲩⲛ, ⲏ)
nsubj(ⲥⲟⲟⲩⲛ, ϯ)
advmod(ⲥⲟⲟⲩⲛ, ⲁⲛ)
ccomp(ⲥⲟⲟⲩⲛ, ⲡⲁϩ)
mark(ⲡⲁϩ, ϫⲉ)
nsubj(ⲡⲁϩ, ⲕ)
aux(ⲡⲁϩ, ⲛⲁ)
obj(ⲡⲁϩ, ⲟⲩ)
~~~

Note how the verb "know" (ⲥⲟⲟⲩⲛ) is the source of `ccomp`, and the subordinate clause main verb, "tear" (ⲡⲁϩ), is the target. 
<!-- Interlanguage links updated Pá kvě 14 11:08:54 CEST 2021 -->
