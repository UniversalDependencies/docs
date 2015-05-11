---
layout: relation
title:  'nmod:prep'
shortdef : 'prepositional pronouns'
---

`nmod:prep`, used for prepositional pronouns, is a UD Irish subtype of the [nmod]() relation: 

16 of the most common Irish simple prepositions can be inflected to mark pronominal objects. These are referred to as pronominal prepositions or prepositional pronouns. In the UD scheme, we regard these as playing nominal modifier roles instead of prepositional modifier roles. We introduce the language-specific label `nmod:prep` so as not to lose information regarding the presence of the preposition.

Examples: _agam_ "at me"; _leis_ "with him", _uainn_ "from us"
 
~~~ sdparse
D'inis mé di \n I told her
nmod:prep(D'inis, di)
~~~

~~~ sdparse
Is dóigh leis go bhfuil páirtíocht acu lena chéile \n He believes that they have a partnership together
nmod:prep(dóigh, leis)
nmod:prep(bhfuil, acu)
~~~

~~~ sdparse
Níl fhios agam \n I don't now
nmod:prep(Níl,agam)
~~~
