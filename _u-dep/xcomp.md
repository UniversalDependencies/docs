---
layout: base
title: 'xcomp'
shortdef: 'open clausal complement'
---

## `{{ page.title }}`: {{ page.shortdef }}

An open clausal complement (`xcomp`) of a verb or an adjective is a
predicative or clausal complement without its own subject. The
reference of the subject is necessarily determined by an argument
external to the xcomp (normally by the object of the next higher
clause, if there is one, or else by the subject of the next higher
clause). These complements are always non-finite, and they are
complements (arguments of the higher verb or adjective) rather than
adjuncts/modifiers, such as a purpose clause. The name `xcomp` is
borrowed from Lexical-Functional Grammar.

~~~ sdparse
He says that you like to swim
xcomp(like, swim)
~~~

~~~ sdparse
Sue asked George to respond to her offer
xcomp(asked, respond)
~~~

~~~ sdparse
I consider him a fool
xcomp(consider, fool)
~~~

~~~ sdparse
I consider him honest
xcomp(consider, honest)
~~~

Note that the above condition “without its own subject” does not mean that a 
clause is `xcomp` just because its subject is not _overt._ The subject must be inherited from a higher clause, that is, there should be no available interpretation where the subject of the lower clause may be distinct
from the subject of the upper clause.
Pro-drop languages have clauses where the subject is not present as a separate word,
yet it is inherently present (and often deducible from the form of the verb)
and it does not depend on arguments from a higher clause.
Thus in neither of the following two Czech examples there is any overt subject,
yet only the second example contains an `xcomp`.

~~~ sdparse
Píšu , protože jsem to slíbil . \n I-write , because I-have it promised .
advcl(Píšu, slíbil)
advcl(I-write, promised)
~~~

~~~ sdparse
Slíbil jsem psát . \n Promised I-have to-write .
xcomp(Slíbil, psát)
xcomp(Promised, to-write)
~~~

### Secondary Predicates

The `xcomp` relation is also used in constructions that are known as _secondary predicates._
Examples:

* _She declared the cake beautiful._
* _She declared the cake a success._

We could paraphrase the sentence using a subordinate clause: _She declared that the cake was beautiful._
There are two predicates mixed in one clause: 1. she declared something, and 2. the cake was beautiful (according to her opinion).
The secondary predicate will be attached to the main predicate as an `xcomp`:

~~~ sdparse
She declared the cake beautiful .
nsubj(declared, She)
dobj(declared, cake)
xcomp(declared, beautiful)
~~~

In the enhanced representation, there is an additional subject link showing the secondary predication:

~~~ sdparse
She declared the cake beautiful .
nsubj(declared, She)
dobj(declared, cake)
xcomp(declared, beautiful)
nsubj(beautiful, cake)
~~~

A Czech example:

~~~ sdparse
jmenovat někoho generálem \n to-appoint someone as-a-general
dobj(jmenovat, někoho)
xcomp(jmenovat, generálem)
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
and the relation will be [acl]() instead of `xcomp`:

~~~ sdparse
She entered the room sad .
dobj(entered, room)
acl(She, sad)
~~~

~~~ sdparse
He painted the model naked .
dobj(painted, model)
acl(model, naked)
~~~

If the nominal head is missing, the secondary predicate must be attached as
[advcl]() of the verbal predicate, even though it is an [adjective](../pos/ADJ.html),
not an [adverb](../pos/ADV.html):

~~~ sdparse
Vstoupila do místnosti smutná . \n She-entered to room sad .
advcl(Vstoupila, smutná)
advcl(She-entered, sad)
~~~

For resultatives, however, we uniformly use `xcomp`:

~~~ sdparse
He painted the house blue .
dobj(painted, house)
xcomp(painted, blue)
~~~

~~~ sdparse
He talked himself hoarse .
dobj(talked, himself)
xcomp(talked, hoarse)
~~~

One may argue that what we call complement here is actually optional.
To justify the analysis in LFG terms, we say that the verb acquires a new
subcategorization frame by application of a lexical rule, and that frame
includes an `xcomp`.

