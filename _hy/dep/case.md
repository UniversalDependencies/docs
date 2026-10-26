---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Armenian uses a combination of oblique morphological cases and adpositions to express semantic case. Adpositions are treated as dependents of the nouns they attach to. The relation between the noun and the adposition is labeled `case`.

~~~ sdparse
դեպի/ADP գյուղ/NOUN[Case=Nom] \n to the-village
case(գյուղ, դեպի)
case(the-village, to)
~~~

~~~ sdparse
գյուղի/NOUN[Case=Dat] համար/ADP \n for the-village
case(գյուղի, համար)
case(the-village, for)
~~~

We also use `case` for certain case-marking elements that are treated as separate syntactic words and historically derive from a closed set of nouns, adjectives/participles, or adverbs. These elements, traditionally known as “adpositional words”, are treated as dependents of the noun or clause they attach to or introduce and are tagged [ADP](). When they retain their basic lexical function rather than functioning as adpositions, they are tagged and annotated according to that function.

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
<!-- Interlanguage links updated Út 30. června 2026, 10:59:44 CEST -->
