---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Armenian uses a combination of oblique morphological cases and adpositions to express semantic case. They are treated as dependents of the noun they attach to. The relation between the noun and the adposition is labeled `case`.

~~~ sdparse
դեպի գյուղ/NOUN[Case=Nom] \n to the-village
case(գյուղ, դեպի)
case(the-village, to)
~~~

~~~ sdparse
գյուղի/NOUN[Case=Dat] համար \n for the-village
case(գյուղի, համար)
case(the-village, for)
~~~

Currently, we also use `case` for some other case-marking elements treated as separate syntactic words (a closed set of nouns, adjectivs/participles or adverbs). These elements (traditionally known as “adpositional words”) are treated as dependents of the noun or clause they attach to or introduce. They may be tagged according to their basic use. (See [ADP]() for details.)

~~~ sdparse
այս/DET իշխանությունների/NOUN[Case=Dat] երեսից/NOUN \n these authorities-' fault
case(իշխանությունների, երեսից)
det(իշխանությունների, այս)
case(authorities-', fault)
det(authorities-', these)
~~~

~~~ sdparse
միջազգային/ADJ չափանիշներին/NOUN[Case=Dat] համապատասխան/ADJ \n corresponding-to the-international criteria 
case(չափանիշներին, համապատասխան)
amod(չափանիշներին, միջազգային)
case(criteria, corresponding-to)
amod(criteria, the-international)
~~~

~~~ sdparse
չնայած/ADJ պարտավորություններին/NOUN[Case=Dat] \n despite obligations
case(պարտավորություններին, չնայած)
case(obligations, despite)
~~~

~~~ sdparse
երկրաշարժից/NOUN[Case=Abl] հետո/ADV \n after the-earthquake
case(երկրաշարժից, հետո)
case(the-earthquake, after)
~~~

Some inflected postpositions / localizers (traditionally known as “improper adpositions”), are labeled with [case:loc]() instead.
