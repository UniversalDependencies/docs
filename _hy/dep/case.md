---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Armenian uses a combination of oblique morphological cases and adpositions to express semantic case. They are treated as dependents of the noun they attach to. The relation between the noun and the adposition is labeled `case`.

~~~ sdparse
դեպի գյուղ \n to the-village.Nom
case(գյուղ, դեպի)
case(the-village.Nom, to)
~~~

~~~ sdparse
գյուղի համար \n for the-village.Dat
case(գյուղի, համար)
case(the-village.Dat, for)
~~~

Currently, we also use `case` for some other case-marking elements treated as separate syntactic words (a closed set of nouns, adjectivs/participles or adverbs). These elements (traditionally known as “adpositional words”) are treated as dependents of the noun or clause they attach to or introduce. They may be tagged according to their basic use. (See [ADP]() for details.)

~~~ sdparse
այս իշխանությունների.Dat երեսից/NOUN \n these authorities-' fault
case(իշխանությունների.Dat, երեսից)
det(իշխանությունների.Dat, այս)
case(authorities-', fault)
det(authorities-', these)
~~~

~~~ sdparse
միջազգային չափանիշներին.Dat համապատասխան/ADJ \n corresponding-to the-international criteria 
case(ավանդույթի.Dat, համաձայն)
case(the-tradition, according-to)
amod(չափանիշներին, միջազգային)
amod(criteria, the-international)
~~~

~~~ sdparse
չնայած/ADJ պարտավորություններին.Dat \n despite obligations
case(պարտավորություններին.Dat, չնայած)
case(obligations, despite)
~~~

~~~ sdparse
երկրաշարժից.Abl հետո/ADV \n after the-earthquake
case(երկրաշարժից.Abl, հետո)
case(the-earthquake, after)
~~~

Some inflected postpositions / localizers (traditionally known as “improper adpositions”), are labeled with [case:loc]() instead.
