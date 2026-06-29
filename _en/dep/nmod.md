---
layout: relation
title:  'nmod'
shortdef : 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for a nominal dependent of another nominal, except in cases where the dependent modifies a predication. (A nominal is any expression headed by a word tagged [NOUN](), [PRON]() or [PROPN](), or some elliptical version of such an expression.)

In English, plain `nmod` applies to __prepositionally-marked__ dependents of nominals (the preposition itself attaches as [case]()):

~~~ sdparse
toys for children
nmod(toys, children)
case(children, for)
~~~

~~~ sdparse
some of the toys
nmod(some, toys)
case(toys, of)
det(toys, the)
~~~

The subtype [nmod:poss]() applies to nominals with possessive (genitive) marking instead of a preposition:

~~~ sdparse
my office
nmod:poss(office, my)
~~~

The possessive can alternate with the preposition *of*, in which case only the relation label differs:

~~~ sdparse
the president 's office
det(president, the-1)
nmod:poss(office-4, president)
case(president, 's-3)
~~~

~~~ sdparse
the office of the president
det(office-2, the-1)
nmod(office-2, president)
case(president, of-3)
det(president, the-4)
~~~

Prepositionless, non-possessive nominals functioning as titles or other modifiers of a name
are tagged with the subtyped relation [nmod:desc]():

~~~ sdparse
Professor/NOUN Charles/PROPN J./PROPN Fillmore/PROPN , Ph.D./PROPN
nmod:desc(Charles, Professor)
flat(Charles, J.)
flat(Charles, Fillmore)
nmod:desc(Charles, Ph.D.)
~~~

Other prepositionless, non-possessive nominals serving as adnominal modifiers
are tagged with the subtyped relation [nmod:unmarked]():

~~~ sdparse
IBM earned $ 5 a share
nmod:unmarked($, share)
~~~

~~~ sdparse
five days before the funeral
nummod(days-2, five-1)
nmod:unmarked(funeral-5, days-2)
case(funeral-5, before-3)
det(funeral-5, the-4)
~~~

### Subtypes in English

- [nmod:desc]()
- [nmod:poss]()
- [nmod:unmarked]()

### See also

- [appos]()
- [compound]()
- [obl]()

<!-- Interlanguage links updated Po 29. června 2026, 17:01:01 CEST -->
