---
layout: relation
title: 'obl'
shortdef: 'oblique nominal'
udver: '2'
---

The `obl` relation is used for a nominal (noun, pronoun, noun phrase) functioning as a non-core (oblique) argument or 
adjunct. This means that it functionally corresponds to an adverbial attaching to a verb, adjective or adverb.

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

This stands in contrast with [nmod]() for nominals functioning as **adnominal** dependents.

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

`obl` is also used for the agent of a passive verb:

~~~ sdparse
The cat was chased by the dog
nsubj:pass(chased, cat)
obl(chased, dog)
case(dog, by)
~~~

Plain `obl` requires a preposition in English. For prepositionless nominals functioning adverbially, see [obl:unmarked]().
<!-- Interlanguage links updated Ne 5. května 2024, 18:21:34 CEST -->
