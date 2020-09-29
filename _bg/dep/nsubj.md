---
layout: relation
title: 'nsubj'
shortdef: 'nominal subject'
udver: '2'
---

A nominal subject is a nominal phrase which is the syntactic subject of a clause;
in Bulgarian, the phrase is condsidered to be in nominative (in spite of the fact that nouns in Bulgarian do not have declension) .
(See [csubj]() for when the subject is clausal.
See [nsubj:pass]() and [csubj:pass]() for when the subject is not the proto-agent argument due to valence changing operations.)
The governor of the `nsubj` relation might not always be a verb: when
the verb is a copular verb, the root of the clause is the complement
of the copular verb, which can be an adjective or noun.

~~~ sdparse
В небето наизскачаха звезди . \n In-sky-the dashed stars .
nsubj(наизскачаха, звезди)
nsubj(dashed, stars)
~~~

~~~ sdparse
Лепо беше хубаво момче . \n Lepo was a-pretty boy .
nsubj(момче, Лепо)
nsubj(boy, Lepo)
~~~

<!-- Interlanguage links updated Út zář 29 18:41:28 CEST 2020 -->
