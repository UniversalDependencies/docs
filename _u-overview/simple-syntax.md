---
layout: base
title:  'Simple Clauses'
permalink: u/overview/simple-syntax.html
udver: '2'
---

# Simple Clauses

Simple clauses consist of a predicate together with its nominal core arguments (and may contain 
additional dependents of both the predicate and its arguments).

## Verbal Clauses

~~~ sdparse
she left
nsubj(left, she)
~~~
~~~ sdparse
she left a note
nsubj(left, she)
obj(left, note)
~~~
~~~ sdparse
she left him a note
nsubj(left, she)
obj(left, note)
iobj(left, him)
~~~

An intransitive verb takes a single argument with the [u-dep/nsubj]() relation.
A transitive verb in addition takes an argument with the [u-dep/obj]() relation.
A ditransitive verb further adds an argument with the [u-dep/iobj]() relation. 

Note that the assignment of core argument relations is independent of case marking (whether morphological or analytic). 
Thus, in ergative languages, the patient-like argument of a transitive verb will take the he [u-dep/obj]() relation 
despite the fact that it carries the same case marking as the [u-dep/nsubj]() argument of an intranstive verb.

## Nonverbal Clauses

~~~ sdparse
she is Jane
nsubj(Jane, she)
~~~
~~~ sdparse
she is happy
nsubj(happy, she)
~~~

A nonverbal predicate (nominal or adjective) takes a single argument with the [u-dep/nsubj]() relation.
The core argument relation is the same regardless of whether there is an overt copula linking the predicate
to the subject or not.

## Non-Core Dependents

In addition to the core arguments, a predicate may have additional dependents whose grammatical encoding differs 
from that of core arguments with respect to case marking, agreement and/or linear position in the clause. All such
dependents are said to be oblique, regardless of whether they can be considered as arguments in the semantic sense. 
The [obl]() relation is used for oblique nominals, and the [advmod]() relation is used for adverbial modifiers.

~~~ sdparse
she left a note on the table
nsubj(left, she)
obj(left, note)
obl(left, table)
~~~
~~~ sdparse
she left a note in the morning
nsubj(left, she)
obj(left, note)
obl(left, morning)
~~~
~~~ sdparse
she left from home
nsubj(left, she)
obl(left, home)
~~~
~~~ sdparse
she left suddenly
nsubj(left, she)
advmod(left, suddenly)
~~~

## Function Word Dependents

In addition to core and non-core dependents, the predicate of a clause may be modified by function words:

1. An `aux` modifies a verbal predicate by adding information relating to tense, aspect, mood, voice, or evidentiality.
2. A `cop` links a nonverbal predicate to its subject and may add information relating to tense, aspect, mood, voice, or evidentiality.
3. A `mark` indicates that the predicate heads a (specific type of) subordinate clause.

~~~ sdparse
she has left
nsubj(left, she)
aux(left, has)
~~~
~~~ sdparse
she is happy
nsubj(happy, she)
cop(happy, is)
~~~
~~~ sdparse
she has been happy
nsubj(happy, she)
cop(happy, been)
aux(happy, has)
~~~
~~~ sdparse
( she knows ) that it is raining
ccomp(knows, raining)
mark(raining, that)
~~~
~~~ sdparse
( she left ) because it was raining
advcl(left, raining)
mark(raining, because)
~~~

## Valency-Changing Operations

If passivization involves the promotion of an argument to subject position, then this argument can be 
annotated with a special subtype `nsubj:pass` to indicate that promotion has taken place. The subtype
`obl:agent` can be used to annotated the demoted subject (if present). 

~~~ sdparse
she left a note on the table
nsubj(left, she)
obj(left, note)
obl(left, table)
~~~
~~~ sdparse
a note was left on the table
nsubj:pass(left, note)
obl(left, table)
~~~
~~~ sdparse
a note was left by her on the table
nsubj:pass(left, note)
obl:agent(left, her)
obl(left, table)
~~~

<!--ADD OTHER VALENCY-CHANGING OPERATIONS-->

