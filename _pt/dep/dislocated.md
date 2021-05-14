---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for fronted or postposed elements
that do not fulfill the usual core grammatical relations of a
sentence. These elements often appear to be in the periphery of the sentence, and may be separated off with a comma intonation.

It is used for fronted elements that introduce the topic of a sentence. The dislocated element attaches to the head of the clause to which it belongs:


~~~ sdparse
Quantos artistas , quer estrangeiros quer nacionais , a festa de toiros tem motivado.
dislocated(motivado, artistas)
~~~

However, it would not be used for a topic-marked noun that is also the subject of the sentence; this would be an [nsubj]().

It is also used for postposed elements. The dislocated elements attach to the same governor as the dependent that they double for. Right dislocated elements are frequent in spoken languages.

~~~ sdparse
O fado , esse , ficou aquém.
dislocated(ficou, esse)
~~~

<!-- Interlanguage links updated Pá kvě 14 11:09:03 CEST 2021 -->
