---
layout: relation
title: 'advmod:nmlz'
shortdef: 'adverbial nominalization'
udver: '2'
---

Chintang has two nominalizers: *=go* and *=kha*. These enclitics derive a nominal base from another form, which can be almost arbitrary. They are annotated as a type of "empty" nominal, functionally similar to English *one*. The nominalizer serves as the head of the nominalized structure, with the nominalized element modifying it.

Depending on the syntactic category of the nominalized element, different dependency relations are used between the nominalizer (the head) and the root of the nominalized scope: [acl:nmlz](), `advmod:nmlz`, [amod:nmlz](), [det:nmlz](), or [nmod:nmlz](). In each case, the chosen dependency corresponds to the relation that the same type of modifier would have with a [NOUN]() if it were modifying it directly, with the subtype `:nmlz` indicating that the relation involves nominalization.

When the scope of the nominalization is an adverb, the dependency used is `advmod:nmlz`.

~~~ sdparse
To bhittra goce le uthatno . \n Up_there inside NMLZ.NSG RESTR they_appear .
det(goce, To)
det(NMLZ.NSG, Up_there)
advmod:nmlz(goce, bhittra)
advmod:nmlz(NMLZ.NSG, inside)
nsubj(uthatno, goce)
nsubj(they_appear, NMLZ.NSG)
advmod:emph(goce, le)
advmod:emph(NMLZ.NSG, RESTR)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:59:08 CEST -->
