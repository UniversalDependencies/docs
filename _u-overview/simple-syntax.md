---
layout: base
title:  'Simple Clauses'
permalink: u/overview/simple-syntax.html
udver: '2'
---

# Simple Clauses

The UD annotation assumes the clause as one of the basic structures that we expect to find in all languages. A simple clause minimally consists of a predicate together with its core argument dependents, but may be extended with oblique modifiers. Core arguments are typically nominals, while oblique modifiers are either (oblique) nominals or adverbial modifiers. (In [complex clauses](complex-syntax.html), both core arguments and oblique modifiers can also be realized as subordinate clauses.) Finally, the predicate may be associated with function words that express different types of grammatical information such as tense, mood, aspect, voice, evidentiality, or type of subordination. 

## Intransitive and Transitive Clauses

In most clauses, the predicate takes the form of a verb, which may be intransitive or transitive.

~~~ sdparse
she left
nsubj(left, she)
~~~
~~~ sdparse
she left a note
nsubj(left, she)
obj(left, note)
~~~

An intransitive verb takes a single argument (usually referred to as S in the literature on linguistic typology) with the [u-dep/nsubj]() relation. A transitive verb in addition takes an argument with the [u-dep/obj]() relation. When deciding which relation to use with which argument in a transitive clause, the [u-dep/nsubj()] relation should be used with the argument that most resembles the proto-agent (often called A in linguistic typology) and that satisfies additional language-internal criteria for subjecthood based on case-marking, agreement and/or linear position with respect to the predicate. The [u-dep/obj]() relation should be used for the argument that most resembles the proto-patient (often called O or P in linguistic typology) and that satisfies relevant language-internal criteria. Note that, while case-marking (whether morphological or analytic) can provide important evidence in specific languages, case alignment should not be used to decide the assignment of core argument roles. Thus, in ergative languages, the patient-like argument of a transitive verb (O/P) will take the the [u-dep/obj]() relation despite the fact that it carries the same case marking as the [u-dep/nsubj]() argument (S) of an intranstive verb.

Some languages allow extended transitive clauses, where more than two dependents are realized as core arguments. The additional core arguments then receive the [u-dep/iobj]() relation (for "indirect object"), while the [u-dep/obj]() relation 
is reserved for the argument most patient-like non-subject argument. The criterion for deciding whether an additional dependent is a core argument is whether it has the typical encoding of a core argument with respect to case-marking, agreement and word order. For example, the English double object construction qualifies as an extended transitive clause because all three nominals appear without prepositions:

~~~ sdparse
she left him a note
nsubj(left, she)
obj(left, note)
iobj(left, him)
~~~

By contrast, the alternative construction where the recipient role is realized by a prepositional phrase is _not_ an extended transitive by our criteria, and the third participant should therefore be annotated as oblique in this case.

~~~ sdparse
she left a note to him
nsubj(left, she)
obj(left, note)
obl(left, him)
~~~

It follows that the semantic role cannot (by itself) be used to determine whether a dependent is core or not, nor can its status as an obligatory dependent. UD does not make a distinction between (obligatory) arguments and (optional) adjuncts, and oblique dependents can be either arguments or adjuncts. 

Note, finally, that not all languages allow extended transitives (and some do only in connection with special valency-changing operations such as applicatives). Hence, the [u-dep/iobj]() relation will not be used in all languages.

## Nonverbal Clauses

A nonverbal predicate (nominal or adjective) takes a single argument with the [u-dep/nsubj]() relation.
The core argument relation is the same regardless of whether there is an overt copula linking the predicate
to the subject or not.

~~~ sdparse
she is Jane
nsubj(Jane, she)
~~~
~~~ sdparse
она моя мать \n she my mother
nsubj(мать, она)
nsubj(mother, she)
~~~
~~~ sdparse
she is happy
nsubj(happy, she)
~~~

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

COMING SOON: Special relations are used for vocatives ([vocative]()), dislocated dependents ([dislocated]()), and expletives ([expl]()).

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

COMING SOON: Other valency-changing operations.

