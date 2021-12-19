---
layout: relation
title:  'acl:relcl'
shortdef : 'relative clause modifier'
udver: '2'
---

** UNDER REVISION **

A relative clause (RC) is a finite clause modifying some head (typically a noun) that is understood to fulfill some grammatical role in the RC. 
The head is said to be "extracted" from the RC.

In the Basic Dependencies representation, the main predicate of the RC attaches to the head as `acl:relcl`. 

In the [Enhanced Dependencies]() layer, there is an additional dependency in the opposite direction to indicate the role from which the head was "extracted".

~~~ sdparse
I saw the man you love
acl:relcl(man, love)
~~~

TODO: Add edeprels to examples

The RC may begin with a **relativizer** (*that*, *which*, *who*, or another WH-word); in some contexts (e.g., object relativization) the relativizer is optional. 
See [PronType=Rel](). 
The relativizer can be understood as an anaphor whose antecedent is the head of the relative clause.

Basic UD analyzes the relativizer, if present, as filling a role in the RC such as subject, object, or oblique (if nominal) or [mark]() (if an adverb).

In the Enhanced Dependencies layer, the relativizer instead attaches to its antecedent via the `ref` relation (as the antecedent is directly connected to a role in the RC).

~~~ sdparse
I saw the book which you bought
acl:relcl(book, bought)
obj(bought, which)
~~~

(A relative clause with no relativizer, like (1), is called a **reduced relative clause**. One with a relativizer, like (2), is called a **nonreduced relative clause**.)

Relativization can create unbounded dependency—an element can be extracted from several levels of embedding:

~~~ sdparse
I saw the book which you pretended to want to read
acl:relcl(book, pretended)
obj(read, which)
xcomp(pretended, want)
xcomp(want, read)
~~~

Semantically, relative clauses may be **specifying/restrictive** (helping to narrow a set of referents), or **ascriptive/nonrestrictive** (adding detail about a referent that has already been identified):

- Specifying
  * I rented the movie **which you bought** (as opposed to some other one).
- Ascriptive
  * I introduced myself to John, **who promptly forgot my name**.
  * I rented the movie, **which you bought** (as opposed to renting).
  * I tried to explain myself – **which was a bad idea**. [antecedent is a clause]

The specifying/ascriptive distinction does not affect the UD analysis: all RCs are analyzed with the `acl:relcl` relation, even if the anteceded is clausal:

~~~ sdparse
I tried to explain myself – which was a bad idea
acl:relcl(tried, idea)
nsubj(idea, which)
~~~

## Preposition Stranding and Prepositional Relatives

A preposition may be left "stranded" in the relative clause (its object corresponding to the head of the RC):

- The house **(that) you said you wanted to live _in_** is for sale.
  * Non-RC paraphrase: The house is on sale; you said you wanted to live _in_ that house.

The Basic UD analysis depends on whether it is a reduced or nonreduced RC. 
In a nonreduced RC, the relativizer is available to fill a role in the RC, and thus gets marked with 
the preposition (even if this contributes to the nonprojectivity of the tree):

~~~ sdparse
the house that you said you wanted to live in
acl:relcl(house, said)
ccomp(said, wanted)
xcomp(wanted, live)
obl(live, that)
case(that, in)
~~~

In a reduced RC, however, there is no nominal to fill the role in the RC, 
so the preposition gets promoted to the head of the phrase (similar to the treatment of [Ellipsis]()):

~~~ sdparse
the house you said you wanted to live in
acl:relcl(house, said)
ccomp(said, wanted)
xcomp(wanted, live)
obl(live, in)
~~~

TODO: prepositional relatives: the house in which you live; the king from whose crown we stole the jewel; I don't know in which house you live/from where you get the nerve

## Free Relatives

TODO: I don't know how old he is, how much money he has, or what car he drives.

<!-- Interlanguage links updated St lis 3 20:58:33 CET 2021 -->
