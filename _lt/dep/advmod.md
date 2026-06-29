---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is an adverb or adverbial phrase that serves to modify a predicate or a modifier word (an adjective or another adverb).

An adverb modifying a verb:

~~~ sdparse
Tu gražiai dainuoji . \n You sing beautifully .
advmod(dainuoji, gražiai)
advmod(sing, beautifully)
~~~

An adverb modifying an adjective:

~~~ sdparse
Tu esi labai gražus . \n You are very beautiful .
advmod(gražus, labai)
advmod(beautiful, very)
~~~

An adverb modifying another adverb:

~~~ sdparse
Tu dainuoji labai gražiai . \n You sing very beautifully .
advmod(gražiai, labai)
advmod(beautifully, very)
~~~

Note that the words _kur, kada, kiek (where, when, how many/much)_ are also adverbs.

~~~ sdparse
Kur tu vaikščiojai ? \n Where were-you walking ?
advmod(vaikščiojai, Kur)
advmod(walking, Where)
~~~
<!-- Interlanguage links updated Po 29. června 2026, 17:43:18 CEST -->
