---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Middle Armenian uses a combination of inflected words (morphological cases) and adpositions to express semantic case. They are treated as dependents of the noun they attach to. The relation between the noun and the adposition is labeled `case`.

~~~ sdparse
ի/ADP կռիւ/NOUN[Case=Nom] \n in the-battle
case(կռիւ, ի)
case(the-battle, in)
~~~

~~~ sdparse
սիսռան/NOUN[Case=Dat] չաք/ADP \n the size-of a chickpea
case(սիսռան, չաք)
case(chickpea, size-of)
~~~

Currently, we also use `case` for some other case-marking elements treated as separate syntactic words (derived from a closed set of nouns, adjectives/participles or adverbs). These elements (traditionally known as “adpositional words”) are 
treated as dependents of the noun or clause they attach to or introduce. They are still tagged [ADP](). Some of them may be tagged and annotated according to their basic use.

~~~ sdparse
երկրաշարժից/NOUN[Case=Abl] հետո/ADP \n after the-earthquake
case(երկրաշարժից, հետո)
case(the-earthquake, after)
~~~

~~~ sdparse
այս/DET իշխանությունների/NOUN[Case=Dat] երեսից/NOUN[Case=Abl] \n these authorities-' fault
nmod:poss(երեսից, իշխանությունների)
det(իշխանությունների, այս)
nmod:poss(fault, authorities-')
det(authorities-', these)
~~~

~~~ sdparse
միջազգային/ADJ չափանիշներին/NOUN[Case=Dat] համապատասխան/ADV \n corresponding-to the-international criteria 
obl(համապատասխան, չափանիշներին)
amod(չափանիշներին, միջազգային)
obl(corresponding-to, criteria)
amod(criteria, the-international)
~~~

~~~ sdparse
չնայած/VERB պարտավորություններին/NOUN[Case=Dat] \n despite obligations
obj(չնայած, պարտավորություններին)
obj(despite, obligations)
~~~

Some inflected postpositions / localizers (traditionally known as “improper adpositions”), are labeled with [case:loc]() instead.
<!-- Interlanguage links updated St 12. listopadu 2025, 09:21:22 CET -->
