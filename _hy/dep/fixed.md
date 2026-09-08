---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is one of the three relations for multiword expressions (MWEs) (the other two being [flat]() and [compound]()). It is used for certain fixed grammaticized expressions that behave like function words or short adverbials.

Note that these expressions do not have any internal syntactic structure (except from a historical perspective) and that the structural annotation is in principle arbitrary. The leftmost word is the head and all the other words are attached as its `fixed` modifiers.

~~~ sdparse
ի դեպ \n by the way
fixed(ի, դեպ)
fixed(by, the-way)
~~~

~~~ sdparse
ամեն ոք \n everyone
fixed(ամեն, ոք)
fixed(every, one)
~~~

~~~ sdparse
որտեղ որ է \n wherever
fixed(որտեղ, որ)
fixed(որտեղ, է)
fixed(where, is)
fixed(where, ever)
~~~

~~~ sdparse
երբ որ է \n whenever 
fixed(երբ, որ)
fixed(երբ, է)
fixed(when, is)
fixed(when, ever)
~~~

The [ExtPos]() feature should be specified on the first word of the fixed expression to indicate the UPOS that the expression would have were it a single word. This indicates what external dependency relations the expression is compatible with.

~~~ sdparse
ինչպես [ExtPos=CCONJ] նաև \n as well as
fixed(ինչպես, նաև)
fixed(as-well, as)
~~~

~~~ sdparse
ի [ExtPos=ADV] վերուստ \n from above
fixed(ի, վերուստ)
~~~
<!-- Interlanguage links updated Út 30. června 2026, 11:00:08 CEST -->
