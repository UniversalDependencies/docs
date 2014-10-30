---
layout: entry
title: 'dislocated'
shortdef: 'dislocated elements'
---

The `dislocated` relation is used for fronted or postposed elements
that do not fulfill the usual core grammatical relations of a
sentence.

It is used for fronted elements that introduce the topic of a sentence, as in the following Japanese example. The dislocated element attaches to the head of the clause to which they belong:

~~~ sdparse
象 は 鼻 が 長い \n zoo wa hana ga naga-i \n elephant TOPIC nose SUBJ long-PRES
dislocated(長い-5, 象-1)
~~~

However, it would not be used for a topic-marked noun that is also the subject of the sentence; this would be an [nsubj]().

It is also used for postposed elements. The dislocated elements attach to the same governor as the dependent that they double for. Right dislocated elements are frequent in spoken languages: e.g., French:

~~~ sdparse
Il faut pas la manger , la plasticine \n It must not it eat , the playdough
dobj(manger, la-4)
dislocated(manger, plasticine)
dobj(eat, it-13)
dislocated(must, playdough)
~~~
