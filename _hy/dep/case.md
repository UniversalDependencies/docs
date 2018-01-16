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

~~~ sdparse
գինետան մոտով.Ins \n by the-tavern.Dat
case(գինետան, մոտով.Ins)
case(the-tavern.Dat, by)
~~~

Currently, we also use `case` for some other case-marking elements treated as separate syntactic words (derived from a closed set of nouns, adjectivs/participles or adverbs). 
These elements (traditionally called “adpositional words”) are treated as dependents of the noun or clause they attach to or introduce. They will have additional features.

~~~ sdparse
այս իշխանությունների.Dat երեսից/NOUN \n these authorities-' fault
case(իշխանությունների.Dat, երեսից)
det(իշխանությունների.Dat, այս)
case(authorities-', fault)
det(authorities-', these)
~~~

~~~ sdparse
ավանդույթի.Dat համաձայն/ADV \n according-to the-tradition 
case(ավանդույթի.Dat, համաձայն)
case(the-tradition, according-to)
~~~

~~~ sdparse
չնայած/ADV պարտավորություններին.Dat \n despite obligations
case(պարտավորություններին.Dat, չնայած)
case(obligations, despite)
~~~

~~~ sdparse
երկրաշարժից.Abl հետո/ADV \n after the-earthquake
case(երկրաշարժից.Abl, հետո)
case(the-earthquake, after)
~~~
