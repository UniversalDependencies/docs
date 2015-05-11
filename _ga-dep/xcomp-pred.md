---
layout: relation
title:  'xcomp:pred'
shortdef : 'predicate'
---

We extend the label `xcomp' as a UD Irish subtype `xcomp:pred` to mark predicates of the substantive verb _bí_ (be), which can have predicate arguments in the form of adverbial, adjectival and prepositional phrases.
Note that this differs from Irish ([copula]()) constructions. 

#### Adjectival Predicate
~~~ sdparse
Bhí sé dochreidte go raibh sé fós beo \n It was unbelieveable that he was still alive
xcomp:pred(Bhí, dochreidte)
xcomp:pred(was, unbelieveable)
~~~

#### PP Predicate
Note that the head of the prepositional phrase is the noun.

~~~ sdparse
Tá duine eile i_mbun peannaireachta \n Someone else is in charge of writing
xcomp:pred(Tá, peannaireachta)
case(peannaireachta, i_mbun)
xcomp:pred(is, charge)
~~~


#### Adverbial Predicate
~~~ sdparse
Tá Mel Gibson go hiontach sa scannán sin \n Mel Gibson is wonderful in that movie
xcomp:pred(Tá, hiontach)
xcomp:pred(is, wonderful)
~~~







