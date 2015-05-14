---
layout: relation
title:  'csubj:cleft'
shortdef : 'relative clause modifier'
---

Irish cleft constructions use a copula and are analysed in line with other copular construction: COP PRED SUBJ 
In contrast to English, Irish clefts are much less restrictive with regards to the type of element that can be fronted: Nouns, prepositional phrases, adverbial phrases, adjectives and verbal nouns. 

Nominal fronting
_Is leabhar a thug sí dom_ 'It is a book that she gave me'

~~~ sdparse
Is leabhar a thug sí dom \n is book [] gave she to_me
csubj:cleft(Is, thug)
cop(leabhar, Is)
~~~



Adverbial fronting
_Is laistigh de bhliain a déanfar é_ 'It is within a year that it will be done'

~~~ sdparse
Is laistigh de bhliain a déanfar é \n is within a year [] will_be_done it
csubj:cleft(Is, déanfar)
cop(laistigh, Is)
~~~


Prepositional phrase fronting
_Is sa pháirc a chonaic mé é_ 'It is in the park that I saw him'

~~~ sdparse
Is sa pháirc a chonaic mé é \n is in_the park [] saw I him
csubj:cleft(Is, chonaic)
cop(pháirc, Is)
~~~

