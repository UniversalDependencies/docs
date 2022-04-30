---
layout: relation
title: 'aux'
shortdef: 'auxiliary'
udver: '2'
# The filename "aux" is not allowed on Windows, so we redirect instead
# (see https://github.com/UniversalDependencies/docs/issues/20)
redirect_from: "cop/dep/aux.html"
---

The relation between a lexical verb and a conjugation base marks the base as aux to the verb, as shown below. This applies to all tripartite conjugation bases, but NOT to converters, which receive the `mark` label.

~~~ sdparse
ⲁ/AUX ⲩ/PRON ⲥⲟⲧⲡ/VERB ⲥ/PRON \n They chose her (or: she was chosen)
nsubj(ⲥⲟⲧⲡ, ⲩ)
aux(ⲥⲟⲧⲡ, ⲁ) 
dobj(ⲥⲟⲧⲡ, ⲥ)
~~~

Some other elements that are marked as aux include the future auxiliary ⲛⲁ (tagged FUT) and the potential verb ϣ ‘be able to’, which is marked as an auxiliary to the lexical verb that follows it. This should not be confused with the impersonal verb ϣϣⲉ ‘it is appropriate’, which is treated as a main verb governing an infinitive.

In indefinite durative tenses, the existential elements ⲟⲩⲛ/ⲙⲛ (ⲟⲩⲛ ⲣⲱⲙⲉ ⲥⲱⲧⲙ 'exists a man hearing' = 'a man is hearing', or negated with ⲙⲛ) are also considered auxiliaries:

~~~ sdparse
ⲟⲩⲛ/AUX ⲣⲱⲙⲉ/NOUN ⲥⲱⲧⲙ/VERB \n A man is hearing

nsubj(ⲥⲱⲧⲙ,ⲣⲱⲙⲉ)
aux(ⲥⲱⲧⲙ,ⲟⲩⲛ)

~~~

But in pure existential clauses, ⲟⲩⲛ/ⲙⲛ are considered roots

~~~ sdparse

ⲙⲛ/VERB ϭⲟⲙ/NOUN ⲙⲙⲟ/ADP ⲩ/PRON \n No power exists for them

nsubj(ⲙⲛ,ϭⲟⲙ)
obl(ⲙⲛ,ⲩ)
case(ⲩ,ⲙⲙⲟ)

~~~

Presentative ⲉⲓⲥ in similar constructions is not considered an auxiliary or predicate, but is analyzed as `advmod` (see [Special Constructions](https://universaldependencies.org/cop/specific-syntax.html))
<!-- Interlanguage links updated St lis 3 20:58:39 CET 2021 -->
