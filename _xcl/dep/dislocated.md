---
layout: relation
title:  'dislocated'
shortdef : 'dislocated elements'
udver: '2'
---

The `dislocated` relation is used for fronted or postposed elements that do not fulfil the usual core grammatical relations of a sentence. 
These elements often appear to be in the periphery of the sentence and may be separated off with a comma intonation.

It is used for fronted elements that introduce the topic of a sentence. In that case, the dislocated element is attached to the head of the clause to which it belongs:

~~~ sdparse
Կամ նոքա ութուտասանքն ՝ համարիք եթե նոքա պարտապա՞նք եղեն : \n Or those eighteen , think ye that they were sinners .
dislocated(պարտապա՞նք, նոքա)
~~~

in UD_Classical_Armenian-CAVaL, the `dislocated` relation is also used for fronted adpositions:

~~~ sdparse
Կամիմ զ վասն նոցա կշտամբութեան յարմարել զ բանս : \n I wish to insert the reason for reprehending them .
obj(յարմարել, բանս)
dilocated(բանս, զ)
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:52 CET -->
