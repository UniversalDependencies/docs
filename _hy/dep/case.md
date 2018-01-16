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
այս իշխանությունների երեսից/NOUN \n these authorities-' fault
case(իշխանությունների, երեսից)
det(իշխանությունների, այս)
case(authorities-', fault)
det(authorities-', these)
~~~

~~~ sdparse
ավանդույթի համաձայն/ADV \n according-to the-tradition 
case(ավանդույթի, համաձայն)
case(the-tradition, according-to)
~~~

~~~ sdparse
չնայած/ADV պարտավորություններին \n despite obligations
case(պարտավորություններին, չնայած)
case(obligations, despite)
~~~

~~~ sdparse
երկրաշարժից հետո/ADV \n after the-earthquake
case(երկրաշարժից, հետո)
case(the-earthquake, after)
~~~
