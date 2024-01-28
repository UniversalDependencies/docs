---
layout: relation
title: 'discourse'
shortdef: 'discourse element'
udver: '2'
---

The `discourse` relation is used for interjections and other discourse particles and elements which are not clearly linked to the structure of the sentence, except in an expressive way. These include interjections (e.g. _oh_), fillers (e.g. _um_ 'uhm', _ah_), and discourse markers (_no_ 'well', _a ne_ 'right'). These discourse elements are attached to the head of the most relevant nearby clause (usually a predicate), even though they are normally not dependents of the predicates as such. 

#### discourse
~~~ sdparse
Oh , lepše od te si niste mogli izbrati  \n Oh, more-beautiful than this-one REFLEX you-not-aux-PAST could choose
discourse(mogli,Oh-1)
discourse(could,Oh-11)
~~~
~~~ sdparse
Tam so samo zamahnili z roko, češ , se bo že vrnila. \n There they-aux-PAST only waved their hand , as-if-to-say , REFLEX she-will still return .
discourse(zamahnili,češ)
discourse(waved,as-if-to-say)
~~~
~~~ sdparse
Tebi gre najbrž drugače, rdečečopek , kajne ? \n To-you it-goes probably differently , red-ponytail , right ?
discourse(gre,kajne)
discourse(it-goes, right)
~~~
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:42:50 CET -->
