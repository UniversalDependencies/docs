---
layout: relation
title: 'amod:nmlz'
shortdef: 'adjectival nominalization'
udver: '2'
---

Chintang has two nominalizers: *=go* and *=kha*. These enclitics derive a nominal base from another form, which can be almost arbitrary. They are annotated as a type of "empty" nominal, functionally similar to English *one*. The nominalizer serves as the head of the nominalized structure, with the nominalized element modifying it.

Depending on the syntactic category of the nominalized element, different dependency relations are used between the nominalizer (the head) and the root of the nominalized scope: [acl:nmlz](), [advmod:nmlz](), `amod:nmlz`, [det:nmlz](), or [nmod:nmlz](). In each case, the chosen dependency corresponds to the relation that the same type of modifier would have with a [NOUN]() if it were modifying it directly, with the subtype `:nmlz` indicating that the relation involves nominalizations

When the scope of the nominalization is an adjective, the dependency used is `amod:nmlz`.

~~~ sdparse
Mi khabe heptade . \n Small NMLZ.LOC he_got_caught .
amod:nmlz(khabe, Mi)
amod:nmlz(NMLZ.LOC, Small)
obj(heptade, khabe)
obj(he_got_caught, NMLZ.LOC)
~~~