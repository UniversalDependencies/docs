---
layout: base
title: 'cop'
shortdef: 'copula'
---

## `{{ page.title }}`: {{ page.shortdef }}

A copula is the relation between the complement of a copular verb and
the copular verb *to be* (only).  (We normally take a copula as a dependent of its
complement.)

~~~ sdparse
Bill is an honest man
cop(man, is)
~~~

~~~ sdparse
Ivan is the best dancer
nsubj(dancer-5, Ivan-1)
cop(dancer-5, is-2)
det(dancer-5, the-3)
amod(dancer-5, best-4)
~~~

The copula *be* is not treated as the
head of a clause, but rather the dependent of a lexical predicate, as exemplified above.

Such an analysis is motivated by the fact that many languages
often or always lack an overt copula in such constructions, as in the
the following Russian example:

~~~ sdparse
Ivan lučšij tancor \n Ivan best dancer
nsubj(tancor, Ivan)
amod(tancor, lučšij)
~~~

In informal English, this may also arise.

~~~ sdparse
Email usually free if you have Wifi.
nsubj(free, Email)
~~~

A parallel can also be drawn to so-called raising-to-object or small clause constructions in English.
Under the basic analysis proposed for SD, the predicate complement is
not linked to its subject argument, but in the enhanced representation
(see below), the linkage is then parallel to the treatment in a zero
copula language:

~~~ sdparse
I judge Ivan the best dancer
nsubj(judge-2, I-1)
dobj(judge-2, Ivan-3)
xcomp(judge-2, dancer-6)
det(dancer-6, the-4)
amod(dancer-6, best-5)
nsubj(dancer-6, Ivan-3)
~~~

Additionally, ccomp is used with copulas. Only in this case, the structure is different, and we take the form of *be* as a head:

~~~ sdparse
The important thing is to keep calm .
ccomp(is, keep)
nsubj(is, thing)
~~~

~~~ sdparse
The problem is that this has never been tried .
ccomp(is, tried)
nsubj(is, problem)
~~~

If we took the main verb as the head, it would have two subjects, which would be unworkable. Examples like the above *could* be analyzed reversed with the initial noun phrase as the predicate, but in addition to this seeming undesirable, it would fail to be a solution if there were a clause on both sides of *be*, such as in: *(For us) to not attempt to solve the problem is (for us) to acknowledge defeat*.
