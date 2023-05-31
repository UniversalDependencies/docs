---
layout: base
title:  'Nominals'
permalink: u/overview/nominal-syntax.html
udver: '2'
---

# Nominals

The UD annotation assumes the nominal, or noun phrase, as one of the basic structures that we expect to find in all languages. A nominal minimally consists of a noun, proper noun or pronoun.

~~~ sdparse
hon såg filmen . \n she saw the-film
obj(såg, filmen)
~~~
~~~ sdparse
hon såg Batman \n she saw Batman
obj(såg, Batman)
~~~
~~~ sdparse
hon såg den \n she saw it
obj(såg, den)
~~~

## Modifier Dependents

A nominal head does not take any core arguments but may be associated with different types of modifiers:

1. An `nmod` is a nominal phrase modifying the head of another nominal phrase, with or without a special case marker. Treebanks may optionally use `nmod:poss` to distinguish non-adpositional possessives.
2. An `appos` is a nominal phrase that follows the head of another nominal phrase and stands in a co-reference or other equivalence relation to it.
3. An `amod` is an adjective modifying the head of a nominal phrase.
4. A `nummod` is a numeral modifying the head of a nominal phrase.
5. An `acl` is a clause modifying the head of a nominal phrase, with the relative clause `acl:relcl` as an important subtype.

~~~ sdparse
the office of the Chair
nmod(office-2, Chair-5)
~~~

~~~ sdparse
the Chair 's office
nmod:poss(office-4, Chair-2)
~~~

~~~ sdparse
Sam , the manager
appos(Sam, manager)
~~~

~~~ sdparse
Sam eats red meat
amod(meat, red)
~~~

~~~ sdparse
Sam spent forty dollars
nummod(dollars, forty)
~~~

~~~ sdparse
Sam spent everything he had
acl:relcl(everything, had)
~~~

~~~ sdparse
Sam spent everything that he had
acl:relcl(everything, had)
obj(had, that)
~~~

## Function Word Dependents

Nominals may also contain the following typical function word dependents:

* Determiners attach to the head of the nominal with the `det` relation.
* Adpositions attach to the head of the nominal with the `case` relation.
* Classifiers attach to a numeral or possessive with the `clf` relation.

~~~ sdparse
the Chair 's office
det(Chair-2, the-1)
nmod(office-4, Chair-2)
case(Chair-2, 's-3)
~~~

~~~ sdparse
the office of the Chair
det(office-2, the-1)
nmod(office-2, Chair-5)
case(Chair-5, of-3)
det(Chair-5, the-4)
~~~

~~~sdparse
sān gè xuéshēng \n three clf student
nummod(xuéshēng, sān)
clf(sān, gè)
~~~
