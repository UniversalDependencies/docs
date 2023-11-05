---
layout: relation
title: 'compound'
shortdef: 'compound'
udver: '2'
---

The compound relation is used to analyze compounds, that is, combinations of lexemes that morphosyntactically behave as single words. Commonly occurring cases are:

- Nominal compounds written as separate words, for example English _<b>apple juice</b>_.
- Particle verbs where the particle is realized as a separate word (which may alternate with affixed particles), for example Swedish _<b>byta ut</b>_ ('exchange'; cf. _<b>utbytt</b>_, 'exchanged'). The subtype [compound:prt]() is commonly used in this case.
- Serial verbs, for which the subtype [compound:svc]() is commonly used, as in this Nupe example [(Tallerman 2014)](https://doi.org/10.4324/9780429243592):

~~~ sdparse
Musa bé lá èbi \n Musa came took knife \n Musa came to take the knife
nsubj(bé, Musa)
compound:svc(bé, lá)
obj(bé, èbi)
~~~

Each language that uses `compound` should develop its own specific criteria based on morphosyntax (rather than lexicalization or semantic idiomaticity), though elsewhere the term “compound” may be used more broadly.

**See also:**
- [Two Nominals working group](/workgroups/newdoc/two_nominals.html).
- [Expletive reflexives](/u/dep/expl.html#reflexives)


## English Examples

~~~ sdparse
phone book
compound(book, phone)
~~~

~~~ sdparse
ice cream flavors
compound(cream, ice)
compound(flavors, cream)
~~~

~~~ sdparse
Sam took out a 3 million dollar loan
compound(loan, dollar)
~~~

~~~ sdparse
Sam took out a $ 3 million loan
compound(loan, $)
~~~

~~~ sdparse
put up
compound:prt(put, up)
~~~

### Not `compound`

Just because an expression is lexicalized or idiomatic does not mean `compound` applies.
In English, adjective-noun combinations, prepositional phrases, and light verb constructions are better described with other relations:

~~~ sdparse
hot dog
amod(dog, hot)
~~~

~~~ sdparse
the state of play
det(state, the)
nmod(state, play)
case(play, of)
~~~

~~~ sdparse
make a decision
obj(make, decision)
det(decision, a)
~~~


<!-- Interlanguage links updated Út 9. května 2023, 20:04:05 CEST -->
