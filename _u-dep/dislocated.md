---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for fronted or postposed elements
that do not fulfill the usual core grammatical relations of a
sentence. These elements often appear to be in the periphery of the sentence, and may be separated off with a comma intonation.

It is used for fronted elements that introduce the topic of a sentence, as in the following Japanese and Greek examples. The dislocated element attaches to the head of the clause to which it belongs:

~~~ sdparse
象 は 鼻 が 長い \n zoo wa hana ga naga-i \n elephant TOPIC nose SUBJ long-PRES
dislocated(長い-5, 象-1)
~~~

~~~ sdparse
to jani ton kserume poli kala \n the John-Acc him know-1pl very well 
dislocated(kserume, jani)
~~~

However, it would not be used for a topic-marked noun that is also the subject of the sentence; this would be an [nsubj]().

It is also used for postposed elements. The dislocated elements attach to the same governor as the dependent that they double for. Right dislocated elements are frequent in spoken languages. French and Greek examples follow.

~~~ sdparse
Il faut pas la manger , la plasticine \n It must not it eat , the playdough
obj(manger, la-4)
dislocated(manger, plasticine)
obj(eat, it-13)
dislocated(eat, playdough)
~~~

~~~ sdparse
ton kserume oli mas edho poli kala, to jani 
dislocated(kserume, jani)
~~~
