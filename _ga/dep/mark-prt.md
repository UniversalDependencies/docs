---
layout: relation
title:  'mark:prt'
shortdef : 'particle'
udver: '2'
---

The UD Irish subtype `mark:prt' is used for the various particles in Irish, including:

* adverbial particle: _go_
* quantifier particle: _a_
* cleft particle: _a_
* verb particles: _d'_, _a_, and the complementisers _go_, _nach_, _nár_, _gur_, _gurbh_, 
* comparative and superlative particles: _is_, _níos_
* days of the week particle: _Dé_
* to differentiate between the subordinate marker _ach_ in different structures 
* the pleonastic conjunction _ná_ which introduces the predicate of a copular phrase


### Examples

#### Adverbial particle

_Níor tháinig sé <b>go</b> fóill_ `He has not arrived yet'
~~~ sdparse
Níor tháinig sé go fóill \n NEG arrived he PART yet
mark:prt(fóill, go)
~~~ 

#### Quantifier particle

_Ar <b>a</b> seacht a chlog_ `At seven o' clock'

~~~ sdparse
Ar a seacht a chlog \n At PART seven o' clock
mark:prt(seacht, a)
~~~

_Roinn <b>a</b>_ 2 `Division 2'

~~~ sdparse
Roinn a 2 \n Division PART 2
mark:prt(2, a)
~~~

#### Cleft particle

_Is leabhar <b>a </b>thug sí dom_ `It is a book that she gave me'

~~~ sdparse
Is leabhar a thug sí dom \n Is book PART gave she to_me
mark:prt(thug, a)
~~~


#### Verb particles

_Nuair <b>a</b> tógadh na scadáin ar bord_ `When the herring were brought onboard'

~~~ sdparse
Nuair a tógadh na scadáin ar bord \n When PART was_brought the herring on board
mark:prt(tógadh, a)
~~~

_<b>D'</b> inis tú dom_ `You told me'

~~~ sdparse
D' inis tú dom \n PART told you to_me
mark:prt(inis, D')
~~~

Note that the verb particle '_a_' is labelled `mark:prt`in instances like those shown below where the interrogative pronoun is raised to `root` level.

_Cé <b>a</b> labhair?_ `Who spoke?

~~~ sdparse
ROOT Cé a labhair ? \n ROOT Who with_it the house ?
root(ROOT, labhair)
nsubj(labhair, Cé)
mark:prt(labhair, a)
~~~

_Cé leis <b>a</b> dtiocfaidh a rá go bhfuil…_ `Who can <b>say</b> that...

~~~ sdparse
ROOT Cé leis a dtiocfaidh a rá go bhfuil ? \n ROOT Who with_it [] will_come to say that is ?
root(ROOT, dtiocfaidh)
obl(dtiocfaidh, Cé)
obl:prep(Cé, leis)
mark:prt(dtiocfaidh, a)
~~~

#### Complementiser

_Is dóigh liom <b>go</b> raibh siad ann_ `I believe they were there'

~~~ sdparse
Is dóigh liom go raibh siad ann \n Is belief to_me PART were they there
mark:prt(raibh, go)
~~~

#### Superlative particle

_Ba í an difríocht <b>is</b> suntasaí_ `It was the most remarkable difference'

~~~ sdparse
Ba í an difríocht is suntasaí \n Was it the difference most remarkable
mark:prt(suntasaí, is)
~~~

#### Pleonastic conjunction

The pleonastic conjunction _ná_ allows for the re-ordering of the copula-predicate-subject structure as it introduces the predicate in a copular phrase, as shown in the example below. In cases like these, _ná_ is labelled `mark:prt`.

_Ba é an t-ainm a bhí ar an stail <b>ná</b> an 'Darling Arabian'._ 'The name of the stallion was 'The Darling Arabian'.'

~~~ sdparse
ROOT Ba é an t-ainm a bhí ar an stail ná an 'Darling Arabian'. \n ROOT COP(past) it the name that was on the stallion [CONJ] the 'Darling Arabian'.
mark:prt('Darling, ná)
cop('Darling, Ba)
root(ROOT, 'Darling)
nsubj('Darling, t-ainm)
nmod(t-ainm,  é)
acl:relcl(t-ainm, bhí)
~~~

#### ACH

mark:prt was specifically chosen instead of mark to differentiate between the instances where it meant "only" and the subordinate clause "ach" (but).

_Níl fágtha den seandream <b>ach</b> an Ceannaire, Mary Harney_ 'The leader, Mary Harney, is the <b>only</b> remaining leader of the former group

~~~ sdparse
Níl fágtha den seandream ach an Ceannaire, Mary Harney \n Not left of_the old_group only the Leader, Mary Harney
mark:prt(Ceannaire, , ach)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:26 CEST 2020 -->
