---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The `compound` relation is one of three relations for multiword expressions (MWEs) (the other two being [fixed]() and [flat]()). It is used for noun compounds like the following:

~~~ sdparse
ambiance chalet \n
compound(ambiance, chalet)
~~~

~~~ sdparse
début décembre  \n beginning (of) December
compound(début, décembre)
~~~

Here are some examples from FrenchSpoken:

~~~ sdparse
alors vote sanction ou pas \n so sanction vote or not
compound(vote,sanction)
~~~

~~~ sdparse
ce serveur américain est une sorte de club VIP réservé à la jet set \n this american server is a kind of VIP club only for the jet set
compound(jet,set)
~~~

~~~ sdparse
elle voit le garçon pâtissier \n she can see the young pastry chef
compound(garçon,pâtissier)
~~~

N.B.: noun compounds must not be confused with apposed nominal modifiers, which are annotated with the [nmod:appos]() relation in the FrenchSpoken corpus.

