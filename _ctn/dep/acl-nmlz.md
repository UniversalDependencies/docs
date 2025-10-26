---
layout: relation
title: 'acl:nmlz'
shortdef: 'clausal nominalization'
udver: '2'
---

Chintang has two nominalizers: *=go* and *=kha*. These enclitics derive a nominal base from another form, which can be almost arbitrary. They are annotated as a type of "empty" nominal, functionally similar to English *one*. The nominalizer serves as the head of the nominalized structure, with the nominalized element modifying it.

Depending on the syntactic category of the nominalized element, different dependency relations are used between the nominalizer (the head) and the root of the nominalized scope: `acl:nmlz`, [advmod:nmlz](), [amod:nmlz](), [det:nmlz](), or [nmod:nmlz](). In each case, the chosen dependency corresponds to the relation that the same type of modifier would have with a [NOUN]() if it were modifying it directly, with the subtype `:nmlz` indicating that the relation involves nominalization.

When the scope of the nominalization is a clause, the dependency used is `acl:nmlz`.

~~~ sdparse
Suno gosaŋa na kanimɨksɨlɨk ta siptandoko . \n Is_sour NMLZ.ERG TOP our_eye FOC closes.
acl:nmlz(gosaŋa, Suno)
acl:nmlz(NMLZ.ERG, Is_sour)
nsubj(siptandoko, gosaŋa)
nsubj(closes, NMLZ.ERG)
~~~