---
layout: relation
title: 'cop'
shortdef: 'copula'
udver: '2'
---



In Irish, there is a distinction between the substantive verb _bí_ `to be', which
inflects for tense, mood and person as per all Irish verbs -- and the copula _is_, which
only has two tensed forms - present/future and past/conditional.


_Bí_, as a verb, uses separate particles in negative and interrogative constructions. 
_Is_ (copula) uses its own forms in these constructions. For example: 

* ba (conditional/ past - positive)
* ar (past/ interrogative - positive)
* nach (present/ future - interrogative/ negative)
* ní (present/ future - negative)
 

The order of elements in a copular construction is usually as follows: 
<b>copula</b>, <b>predicate</b> (new or focussed information), and <b>subject</b>. See [root](https://universaldependencies.org/ga/dep/root.html) for further information on how the root is identified in a copular construction and examples of the copula-predicate-subject structure. 

`cop` is used to link the copula verb _is_ and its predicate. See [xcomp:pred]() to see how the verb _bí_ is linked to a predicate.

### Examples
#### Equative construction

_<b>Is</b> múinteoir é_  'He <b>is</b> a teacher'

~~~ sdparse
Is múinteoir é \n is teacher him
cop(múinteoir, Is)
~~~


#### Idiomatic expressions

_<b>Ba</b> mhaith liom gan fanacht_ 'I <b>would</b> not want to stay'

~~~ sdparse
Ba mhaith liom gan fanacht \n Be good with_me without staying
cop(mhaith, Ba)
~~~

#### Cleft constructions

_<b>Is</b> iad a bheidh ina gcomhaltaí de na coistí sin_ 'They <b>are</b> the ones who will be members of those committees'

~~~ sdparse
Is iad a bheidh ina gcomhaltaí de na coistí sin \n Is them who will_be in_their members of the committees those
cop(iad, Is)
~~~

####  Ownership constructions

_<b>An</b> leatsa é?_ '<b>Is</b> it yours?'

~~~ sdparse
An leatsa é ? \n Is with_you it ?
cop(leatsa, An)
~~~













