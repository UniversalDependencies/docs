---
layout: relation
title: 'xcomp'
shortdef: 'open clausal complement'
udver: '2'
---

An open clausal complement (`xcomp`) of a verb or an adjective is a
predicative or clausal complement without its own subject. The
reference of the subject is necessarily determined by an argument
external to the xcomp (normally by the subject of the next higher
clause). This is often referred to as *obligatory control*. 
These complements are always non-finite, and they are
complements (arguments of the higher verb or adjective) rather than
adjuncts/modifiers, such as a purpose clause. The name `xcomp` is
borrowed from Lexical-Functional Grammar.

~~~ sdparse
Хочешь плавать ? \n Do-you-want to-swim ?
xcomp(Хочешь, плавать)
xcomp(Do-you-want, to-swim)
~~~

~~~ sdparse
Я начал там работать вчера . \n I started there to-work yesterday .
xcomp(начал, работать)
xcomp(started, to-work)
~~~

Note that the above condition “without its own subject” does not mean that a 
clause is an `xcomp` just because its subject is not _overt._
The subject must be necessarily inherited from a fixed position in the higher clause.
That is, there should be no available interpretation where the subject of the lower clause may be distinct
from the specified role of the upper clause.
In cases where the missing subject may or must be distinct from a fixed role in the higher clause,
[ccomp]() should be used instead, as below.  This includes cases of arbitrary subjects and anaphoric control.

~~~ sdparse
Начальник приказал выкопать ров . \n Boss ordered to-dig ditch .
ccomp(приказал, выкопать)
ccomp(ordered, to-dig)
~~~

Pro-drop languages have clauses where the subject is not present as a separate word,
yet it is inherently present (and often deducible from the form of the verb)
and it does not depend on arguments from a higher clause.
Thus in neither of the following two Russian examples is there any overt subject,
yet only the second example contains an `xcomp`.

~~~ sdparse
Пишу , потому что я это обещал . \n I-write , because that I-have it promised .
advcl(Пишу, обещал)
advcl(I-write, promised)
~~~

~~~ sdparse
Я обещал писать . \n I have-promised to-write .
xcomp(обещал, писать)
xcomp(have-promised, to-write)
~~~

Verbs that attach core arguments that are often expressed as nouns, adjectives and other nominals, mostly in instrumental and sometimes nominative case, include: **являться** “be“, **становиться**/**стать** “became“, **оказаться** “turn up“, **остаться** “remain“, **служить** “serve (as)“, **работать** “work, be employed (as)“. The transitive verbs such as **назвать** “call“, **объявить** “declare“, **считать** “consider“, **назначить** “appoint“ have secondary predicates as its third valency.

### Secondary Predicates

The `xcomp` relation is also used in constructions that assign secondary predicates such as depictive.

* _Она объявила пирог красивым._ “She declared the cake beautiful.“
* _Она объявила пирог шедевром._ “She declared the cake a masterpiece.“

We could paraphrase the sentence using a subordinate clause: _She declared that the cake was beautiful._
There are two predicates mixed in one clause: 1. she declared something, and 2. the cake was beautiful (according to her opinion).
The secondary predicate will be attached to the main predicate as an `xcomp`:

~~~ sdparse
Она объявила пирог красивым . \n She declared the cake beautiful .
nsubj(объявила, Она)
nsubj(declared, She)
obj(объявила, пирог)
obj(declared, cake)
xcomp(объявила, красивым)
xcomp(declared, beautiful)
~~~

In the enhanced representation, there is an additional subject link showing the secondary predication:

~~~ sdparse
Она объявила пирог красивым . \n She declared the cake beautiful .
nsubj(объявила, Она)
nsubj(declared, She)
obj(объявила, пирог)
obj(declared, cake)
xcomp(declared, beautiful)
xcomp(объявила, красивым)
nsubj(красивым, пирог)
nsubj(beautiful, cake)
~~~

Remember that `xcomp` is used for core arguments of clausal predicates
so it will not be used for other instances of secondary predication.
For instance, in _She entered the room sad_ we also have a double predication
(she entered the room; she was sad).
But _sad_ is not a core argument of _enter:_ leaving it out will neither affect grammaticality
nor significantly alter the meaning of the verb.
On the other hand, leaving out _beautiful_ in _she declared the cake beautiful_
will either render the sentence ungrammatical or lead to a different interpretation of _declared._

The result is that in _She entered the room sad,_ _sad_ will depend on _She_
and the relation will be [acl]() instead of `xcomp`.

<!-- Interlanguage links updated Pá kvě 14 11:09:23 CEST 2021 -->
