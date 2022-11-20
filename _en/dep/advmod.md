---
layout: relation
title:  'advmod'
shortdef : 'adverbial modifier'
udver: '2'
---

An adverbial modifier of a word is a (non-clausal) adverb or adverbial
phrase (ADVP) that serves to modify the meaning of the word.

~~~ sdparse
Genetically modified food
advmod(modified, Genetically)
~~~

~~~ sdparse
less often
advmod(often, less)
~~~

~~~ sdparse
Where/ADV do/AUX you/PRON want/VERB to/ADP go/VERB later/ADV ?/PUNCT
advmod(go, Where)
advmod(go, later)
~~~

~~~ sdparse
This is where/ADV I lived when/ADV I was born
nsubj(where, This)
cop(where, is)
advcl:relcl(where, lived)
advcl(lived, born)
advmod(born, when)
~~~

~~~ sdparse
About 200 people came to the party
advmod(200, About)
~~~
<!-- Interlanguage links updated Po lis 14 15:35:05 CET 2022 -->
