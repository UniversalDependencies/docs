---
layout: relation
title:  'csubj:cleft'
shortdef : 'relative clause modifier'
udver: '2'
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

#### Adjective predicate fronting ####

_Is mó <b>atá</b> sí siúd ina ghá ná sinne anso._ 'She <b>is</b> needed here more than we are.'

~~~ sdparse
Is mó atá sí siúd ina ghá ná sinne anso. \n Is more that_is she [emph] in_its need than us_[emph] here.
csubj:cleft(mó, atá)
cop(mó, Is)
~~~

NOTE: In phrases where the adjectival predicate is fronted, the noun should still be treated as the predicate with the adjective demoted to adjectival modifier dependent on that noun/the head of the noun phrase.

_Is iomaí <b>seift</b> <b>atá</b> á lorg ag údaráis phoiblí ar fud an domhain..._ 'Public authorities all over the world are looking for ways to...'

~~~ sdparse
Is iomaí seift atá á lorg ag údaráis phoiblí ar fud an domhain \n Is many trick that_are at_her looking by authorities pub on whole of_the world 
csubj:cleft(seift, atá)
cop(seift, Is)
amod(seift, iomaí)
~~~
