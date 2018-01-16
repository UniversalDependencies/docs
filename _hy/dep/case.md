---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Armenian uses a combination of oblique morphological cases and adpositions to express semantic case. They are treated as dependents of the noun they attach to. The relation between the noun and the adposition is labeled `case`.

~~~ sdparse
դեպի գյուղ.Nom \n to the-village
case(գյուղ.Nom, դեպի)
case(the-village, to)
~~~

~~~ sdparse
գյուղի.Dat համար \n for the-village
case(գյուղի.Dat, համար)
case(the-village, for)
~~~

Currently, we also use `case` for some other case-marking elements treated as separate syntactic words (a closed set of nouns, adjectivs/participles or adverbs). These elements (traditionally known as “adpositional words”) are treated as dependents of the noun or clause they attach to or introduce. They may be tagged according to their basic use. (See [ADP]() for details.)

~~~ sdparse
այս իշխանությունների.Dat/NOUN երեսից/NOUN \n these authorities-' fault
case(իշխանությունների.Dat, երեսից)
det(իշխանությունների.Dat, այս)
case(authorities-', fault)
det(authorities-', these)
~~~

~~~ sdparse
միջազգային/ADJ չափանիշներին.Dat/NOUN համապատասխան/ADJ \n corresponding-to the-international criteria 
case(չափանիշներին.Dat, համապատասխան)
case(criteria, corresponding-to)
amod(չափանիշներին.Dat, միջազգային)
amod(criteria, the-international)
~~~

~~~ sdparse
չնայած/ADJ պարտավորություններին.Dat/NOUN \n despite obligations
case(պարտավորություններին.Dat, չնայած)
case(obligations, despite)
~~~

~~~ sdparse
երկրաշարժից.Abl/NOUN հետո/ADV \n after the-earthquake
case(երկրաշարժից.Abl, հետո)
case(the-earthquake, after)
~~~

Some inflected postpositions / localizers (traditionally known as “improper adpositions”), are labeled with [case:loc]() instead.
