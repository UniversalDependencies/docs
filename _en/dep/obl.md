---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for a nominal dependent of a verbal, adjectival or adverbial expression or a nominal predication, with the nominal dependent functioning as a non-core (oblique) argument or modifier. (A nominal is any expression headed by a word tagged [NOUN](), [PRON]() or [PROPN](), or some elliptical version of such an expression.)

In English, `obl` provides a uniform analysis for __prepositionally marked nominals__ functioning adverbially, i.e. attaching at the level of a clause, 
adjective phrase, or adverb phrase (whether as argument or adjunct). The preposition attaches as [case]() within the nominal:

~~~ sdparse
They will arrive on Friday
obl(arrive, Friday)
case(Friday, on)
~~~

~~~ sdparse
Refer to our brochure for more information
obl(Refer, brochure)
case(brochure, to)
~~~

~~~ sdparse
people afraid/ADJ of sharks
amod(people, afraid)
obl(afraid, sharks)
case(sharks, of)
~~~

~~~ sdparse
Unfortunately/ADV for you , all the food is gone
advmod(gone, Unfortunately)
obl(Unfortunately, you)
case(you, for)
~~~

Note that, in English, `obl` is used for prepositional phrases even in constructions like the prepositional dative (contrast the double object construction with [iobj]()):

~~~ sdparse
give the children the toys
obj(give, toys)
iobj(give, children)
~~~

~~~ sdparse
give the toys to the children
obj(give, toys)
obl(give, children)
case(children, to)
~~~

`obl` is also used for the agent of a passive verb. Some treebanks distinguish the subtype [obl:agent]():

~~~ sdparse
The cat was chased by the dog
nsubj:pass(chased, cat)
obl:agent(chased, dog)
case(dog, by)
~~~

Plain `obl` requires a preposition in English. For prepositionless nominals functioning adverbially, see [obl:unmarked]().

The `obl` relation contrasts with the [nmod]() relation when the head is a nominal. Compare:

~~~ sdparse
we prefer lilies to daisies
obl(prefer-2, daisies-5)
~~~
~~~ sdparse
a preference for lilies
nmod(preference-2, lilies-4)
~~~

<!-- Interlanguage links updated Út 30. června 2026, 11:00:30 CEST -->
