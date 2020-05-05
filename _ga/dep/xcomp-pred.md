---
layout: relation
title:  'xcomp:pred'
shortdef : 'predicate'
udver: '2'
---

We extend the label `xcomp` as a UD Irish subtype `xcomp:pred` to mark predicates of the substantive verb _bí_ (to be), which can have predicate arguments in the form of adverbial, adjectival and prepositional phrases and for cases where a secondary predicate occurs.
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

a bhí ina dhiaidh sin ina <b>T.D.</b> `who was later a <b>T.D.</b>'
~~~ sdparse
a bhí ina dhiaidh sin ina T.D. \n who was in_its after a T.D. 
xcomp:pred(bhí, T.D.)
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

#### Secondary Predicate

This label is also used for secondary predicates, i.e. where two predicates occur within one clause. 

_Shín mé amach díreach romham í agus <b>fuair</b> mé an áit <b>folamh</b>_ `I stretched it out in front of me and <b>found</b> the place <b>empty</b>'

~~~ sdparse
Shín mé amach díreach romham í agus fuair mé an áit folamh \n Stretched I out straight in_front_of_me it and found I the place empty 
xcomp:pred(fuair, folamh)
~~~

Note that the secondaury predicate can also attach to the verbal noun of verbs other than the substantive verb _bí_ (to be)

D'fhéadfadh imreoir nó dhó seal a chaitheamh <b>díomhaoin</b> ón imirt dá bharr. `Some players could spend <b>a while</b> off the pitch because of it'

~~~ sdparse
D'fhéadfadh imreoir nó dhó seal a chaitheamh <b>díomhaoin</b> ón imirt dá bharr. \n Could a_player or two a_while to spending idle from playing to_its reason.
xcomp:pred(chaitheamh, díomhaoin)
~~~


