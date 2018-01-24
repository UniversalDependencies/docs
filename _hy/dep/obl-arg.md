---
layout: relation
title:  'obl:arg'
shortdef : 'oblique argument'
udver: '2'
---

The relation `obl:arg` is used for oblique arguments and distinguishes them from
adjuncts, which use the plain [obl]() relation. It is thus possible to preserve
the notion of _indirect object (objects of nature)_ as it is defined in the Armenian grammar.

Objects in Eastern Armenian can be bare noun phrases in all (nominative, dative, ablative, instrumental,
locative) cases, and prepositional phrases introduced by various adpositions. Most of these coding strategies are also used for
adjuncts (called _adverbial modifiers_ or _adjunct arguments_ in the Armenian grammar).
However, Universal Dependencies reserve the relation [obj]() (object) for the
core object, and exclude oblique arguments. In Eastern Armenian UD (like in Czech treebanks), we treat bare nominals as core arguments and prepositional phrases as
obliques. Within obliques, the `obl:arg` subtype is used for oblique arguments
(i.e., prepositional objects), and the plain [obl]() is used for typical adjuncts (such as specifications of time, location,
manner or instrument).

~~~ sdparse
Երեխաներին/NOUN[Case=Dat] նոր/ADJ հագուստ/NOUN[Case=Nom] գնեց/VERB ։ \n
obj(գնեց, հագուստ)
amod(հագուստ, նոր)
iobj(գնեց, Երեխաներին)
~~~

~~~ sdparse
Երեխաների/NOUN[Case=Dat] համար/ADP նոր/ADJ հագուստ/NOUN[Case=Nom] գնեց/VERB ։ \n
obj(գնեց, հագուստ)
amod(հագուստ, նոր)
obl:arg(գնեց, Երեխաների)
case(Երեխաների, համար)
~~~

~~~ sdparse
Նրա/DET խոսքերը/NOUN[Case=Nom] ազդեցություն/NOUN[Case=Nom] գործեցին/VERB պապի/NOUN[Case=Dat] վրա/ADP[Case=Nom] ։ \n His words had an-impression on grandfather .
nsubj(գործեցին, խոսքերը)
obl:arg(գործեցին, պապի)
obj(գործեցին, ազդեցություն)
case:loc(պապի, վրա)
nsubj(had, words)
obl:arg(had, grandfather)
obj(had, an-impression)
case:loc(grandfather, on)
~~~
