---
layout: relation
title: 'orphan'
redirect_from: "cop/dep/remnant.html"
shortdef: 'orphan in ellipsis'
udver: '2'
---

This (relatively rarely used) function is required when ellipsis of a head word results in a promoted word taking a dependent whose function would be determined by the missing head. English examples for this relations are sentences such as:

Mary ate the cake, but John the cookies.

In this case, the absence of a second ‘ate’ forces us to consider two conflicting subjects and objects for the first ‘ate’. The solution is to connect John as `conj` to ate. To avoid treating 'cookies' as the object of 'John', the orphan relation is used instead. Coptic examples work using the same logic:

~~~ sdparse
ⲉⲣϣⲁⲛ/SCONJ ⲟⲩⲁ/NUM ϫⲟⲟ/VERB ⲥ/PRON ϫⲉ/SCONJ ⲁⲛⲟⲕ/PRON ⲙⲉⲛ/ADV ⲁⲛⲅ/PRON ⲡⲁ/PRON ⲡⲁⲩⲗⲟⲥ/PROPN . ⲕⲉ/DET ⲟⲩⲁ/NUM ⲇⲉ/ADV ϫⲉ/SCONJ ⲁⲛⲅ/PRON ⲡⲁ/PRON ⲁⲡⲟⲗⲗⲱ/PROPN \n if one says I am Paul's but another one [says] I am Apollo's

ccomp(ϫⲟⲟ, ⲡⲁ-9)
nmod(ⲡⲁ-9, ⲡⲁⲩⲗⲟⲥ)
conj(ϫⲟⲟ, ⲟⲩⲁ-13)
nsubj(ⲡⲁ-9, ⲁⲛⲅ-8)
orphan(ⲟⲩⲁ-13, ⲡⲁ-17)
nsubj(ⲡⲁ-17, ⲁⲛⲅ-16)
nmod(ⲡⲁ-17, ⲁⲡⲟⲗⲗⲱ)

~~~

The second 'says' is missing, meaning the subject 'another one' will be promoted to take its place. However attaching the complement clause of the missing 'say' as `ccomp` to 'another one' would be misleading. We therefore use the `orphan` relation.


<!-- Interlanguage links updated Čt lis 12 09:43:36 CET 2020 -->
