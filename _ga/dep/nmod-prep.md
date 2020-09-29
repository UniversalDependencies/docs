---
layout: relation
title:  'nmod:prep'
shortdef : 'prepositional pronouns'
udver: '2'
---

`nmod:prep`, used for prepositional pronouns, is a UD Irish subtype of the [nmod]() relation: 

16 of the most common Irish simple prepositions can be inflected to mark pronominal objects. These are referred to as pronominal prepositions or prepositional pronouns. We regard these as playing nominal modifier roles instead of prepositional modifier roles. We introduce the language-specific label `nmod:prep` so as not to lose information regarding the presence of the preposition.

### Examples
_agam_ "at me"; _leis_ "with him", _uainn_ "from us"
 
_D'inis mé <b>di</b>_ `I told her'
 
~~~ sdparse
D' inis mé di \n  [] told I to_her
nmod:prep(inis, di)
~~~

_Is dóigh <b>leis</b> go bhfuil páirtíocht <b>acu</b> lena chéile_ `He believes that they have a partnership together'

~~~ sdparse
Is dóigh leis go bhfuil páirtíocht acu lena chéile \n Is belief with_him that is partnership at_them with each_other
nmod:prep(dóigh, leis)
nmod:prep(bhfuil, acu)
~~~

_Níl fhios <b>agam</b>_ `I don't know'

~~~ sdparse
Níl fhios agam \n Is_not knowledge at_me
nmod:prep(Níl,agam)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:28 CEST 2020 -->
