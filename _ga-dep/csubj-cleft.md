---
layout: relation
title:  'csubj:cleft'
shortdef : 'relative clause modifier'
---

Irish cleft constructions use a copula and are analysed in line with other copular construction: COP PRED SUBJ. 
In contrast to English, Irish clefts are much less restrictive with regards to the type of element that can be fronted: nouns, prepositional phrases, adverbial phrases, adjectives and verbal nouns. 

### Examples

#### Nominal fronting ####

_Is leabhar a <b>thug</b> sí dom_ 'It is a book that she <b>gave</b> me'

~~~ sdparse
Is leabhar a thug sí dom \n is book [] gave she to_me
csubj:cleft(leabhar, thug)
cop(leabhar, Is)
~~~



#### Adverbial fronting ####

_Is laistigh de bhliain a <b>déanfar</b> é_ 'It is within a year that it <b>will be done</b>'

~~~ sdparse
Is laistigh de bhliain a déanfar é \n is within a year [] will_be_done it
csubj:cleft(laistigh, déanfar)
cop(laistigh, Is)
~~~


#### Prepositional phrase fronting ####

_Is sa pháirc a <b>chonaic</b> mé é_ 'It is in the park that I <b>saw</b> him'

~~~ sdparse
Is sa pháirc a chonaic mé é \n is in_the park [] saw I him
csubj:cleft(pháirc, chonaic)
cop(pháirc, Is)
~~~

