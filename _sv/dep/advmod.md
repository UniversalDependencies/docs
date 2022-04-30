---
layout: relation
title: 'advmod'
shortdef: 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) adverb or adverbial
phrase that serves to modify the meaning of the word.

~~~ sdparse
Det bör kraftigt understrykas \n It should be strongly emphasised
advmod(understrykas, kraftigt)
~~~

~~~ sdparse
mindre ofta \n less often
advmod(ofta, mindre)
~~~

The _advmod_ relation is also used (from v2) for negations (which carries a special feature Polarity=Neg):

~~~ sdparse
En social gemenskap existerar inte \n A social community doesn't exist
advmod(existerar, inte)
~~~

<!-- Interlanguage links updated St lis 3 20:58:36 CET 2021 -->
