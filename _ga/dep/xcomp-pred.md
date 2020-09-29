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

_Tá aibítir iaraiglifeach na hÉigipte <b>léirithe</b> ar clé._ The Egyptian hieroglyphic alphabet is <b>shown</b> to the left.

~~~ sdparse
Tá aibítir iaraiglifeach na hÉigipte léirithe ar clé. \n Is alphabet hieroglyphic of_the Egypt shown on left.
xcomp:pred(Tá, léirithe)
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

Note that the secondary predicate can also attach either to the verbal noun of verbs other than the substantive verb _bí_ (to be) or to a noun. 

_D'fhéadfadh imreoir nó dhó seal a chaitheamh <b>díomhaoin</b> ón imirt dá bharr._ `Some players could spend <b>a while</b> off the pitch because of it'

~~~ sdparse
D'fhéadfadh imreoir nó dhó seal a chaitheamh díomhaoin ón imirt dá bharr. \n Could a_player or two a_while to spending idle from playing to_its reason.
xcomp:pred(chaitheamh, díomhaoin)
~~~

In the case of an adjectival secondary predicate attaching to a noun, note that the adjective in question does not agree with the noun in terms of gender or number.

_Bhí Monte Carlo faoi fhurú, an áit <b>beo</b> le Sasanaigh._ `Monte Carlo was a hive of activity, the place <b>teeming</b> with English people'

~~~ sdparse
Bhí Monte Carlo faoi fhurú, an áit beo le Sasanaigh. \n Was Monte Carlo under activity, the place alive with English_people.
xcomp:pred( áit, beo)
~~~

<!-- Interlanguage links updated Út zář 29 20:43:29 CEST 2020 -->
