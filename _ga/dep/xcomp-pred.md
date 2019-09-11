---
layout: relation
title:  'xcomp:pred'
shortdef : 'predicate'
udver: '2'
---

We extend the label `xcomp` as a UD Irish subtype `xcomp:pred` to mark predicates of the substantive verb _bí_ (be), which can have predicate arguments in the form of adverbial, adjectival and prepositional phrases.
Note that this differs from Irish ([cop]()) constructions. 

### Examples

_Bhí sé <b>dochreidte</b> go raibh sé fós beo_ `It was <b>unbelieveable</b> that he was still alive'

#### Adjectival Predicate
~~~ sdparse
Bhí sé dochreidte go raibh sé fós beo \n Was it unbelieveable that was he still alive
xcomp:pred(Bhí, dochreidte)
~~~

#### PP Predicate


_Bhí teas ollmhór <b>ann</b>_ `It was very hot <b>there</b>'

~~~ sdparse
Bhí teas ollmhór ann \n Was heat great in_it 
xcomp:pred(Bhí, ann)
~~~

Note that the head of the prepositional phrase is the noun.

_Tá duine eile <b>i_mbun</b> peannaireachta_ `Someone else is <b>in charge of</b> writing'

~~~ sdparse
Tá duine eile i_mbun peannaireachta \n Is someone else in_charge_of writing 
xcomp:pred(Tá, peannaireachta)
case(peannaireachta, i_mbun)
~~~


#### Adverbial Predicate

_Tá Meryl Streep go <b>hiontach</b> sa scannán sin_ `Meryl Streep is <b>wonderful</b> in that movie'

~~~ sdparse
Tá Meryl Streep go hiontach sa scannán sin \n Is Meryl Streep [] wonderful in movie that
xcomp:pred(Tá, hiontach)
~~~







