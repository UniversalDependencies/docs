---
layout: relation
title: 'compound:redup'
shortdef: 'reduplicated compound'
udver: '2'
---

The [compound:redup]() dependency (reduplicated compounds) is a subtype of the [compound]() dependency that models a range of reduplicated forms.
Reduplication is a common process, especially with adverbs and adjectives and typically involves two identical words although some morpho-phonological alternations  are possible.
Usually, the head is the last word. The [compound:redup]() dependency is traced in Pomak:  

~~~ sdparse
adín sítan sítan dožd letǽšo  
lit: a soft soft rain was raining
"a very soft rain was raining" 
compound:redup(sítan, sítan)
~~~

It also appears in loans from Turkish:

~~~ sdparse
déteno javáš javáš narášte
lit: the child slowly slowly grows up
"the child grows up very slowly"
compound:redup (javáš, javáš)
~~~
