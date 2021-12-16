---
layout: relation
title: 'fixed'
shortdef: 'fixed multiword expression'
udver: '2'
---

The `fixed` relation is one of the three relations for multiword expressions (MWEs) (the other two being [flat]() and [compound]()). It is used for certain fixed grammaticized expressions that behave like function words or short adverbials.

Note, that these expressions do not have any internal syntactic structure (except from a historical perspective) and that the structural annotation is in principle arbitrary. The leftmost word is the head and all the other words are attached as its `fixed` modifiers.

~~~ sdparse
ի դեպ \n by the-way
fixed(ի, դեպ)
fixed(by, the-way)
~~~

~~~ sdparse
ամեն ոք \n every one
fixed(ամեն, ոք)
fixed(every, one)
~~~

~~~ sdparse
որտեղ որ է \n where is ever
fixed(որտեղ, որ)
fixed(որտեղ, է)
fixed(where, is)
fixed(where, ever)
~~~

~~~ sdparse
երբ որ է \n when is ever 
fixed(երբ, որ)
fixed(երբ, է)
fixed(when, is)
fixed(when, ever)
~~~

~~~ sdparse
ինչպես նաև \n as-well as
fixed(ինչպես, նաև)
fixed(as-well, as)
~~~

~~~ sdparse
ի վերուստ \n
fixed(ի, վերուստ)
~~~
<!-- Interlanguage links updated St lis 3 20:58:53 CET 2021 -->
