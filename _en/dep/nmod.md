---
layout: relation
title:  'nmod'
shortdef : 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal dependents of another noun or noun phrase and functionally corresponds to
an attribute, or genitive complement.

**New from v2:** The `nmod` relation was previously used also for nominal dependents of verbs, adjectives, and adverbs. These are now covered by the new [obl]() relation.

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

Prepositionless, non-possessive nominals serving as adnominal modifiers
are tagged with subtypes [nmod:tmod]() (temporal) or [nmod:npmod]() (other). See
the definitions of these relations.
<!-- Interlanguage links updated Po 6. listopadu 2023, 21:43:02 CET -->
