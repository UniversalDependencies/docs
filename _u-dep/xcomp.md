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
clause). This is often referred to as *obligatory control*. 
These complements are always non-finite, and they are
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
You look great
xcomp(look, great)
~~~

~~~ sdparse
I started to work there yesterday
xcomp(started, work)
~~~

~~~ sdparse
I consider him a fool
xcomp(consider, fool)
~~~

~~~ sdparse
I consider him honest
xcomp(consider, honest)
~~~

~~~ sdparse
We expect them to change their minds
xcomp(expect, change)
~~~

Note that the above condition “without its own subject” does not mean that a 
clause is an `xcomp` just because its subject is not _overt._ The subject must be necessarily inherited from a fixed position in the higher clause. That is, there should be no available interpretation where the subject of the lower clause may be distinct
from the specified role of the upper clause. In cases where the missing subject may or must be distinct from a fixed role in the higher clause, `ccomp` should be used instead, as below.  This includes cases of arbitrary subjects and anaphoric control.

~~~ sdparse
The boss said to start digging
ccomp(said, start)
~~~

Pro-drop languages have clauses where the subject is not present as a separate word,
yet it is inherently present (and often deducible from the form of the verb)
and it does not depend on arguments from a higher clause.
Thus in neither of the following two Czech examples is there any overt subject,
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

The `xcomp` relation is also used in constructions that are known as _secondary predicates_ or _predicatives_.
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

Huddleston and Pullum (2002) “The Cambridge Grammar of the English Language”, chapter 4 section 5.3, divide predicatives into obligatory and optional predicatives, which can be either depictives ore resultatives, and which can appear in an intransitive or transitive clause, giving eight possibilities:

* He looked fantastic [obligatory, depictive, intransitive host]
* She kept Kim warm [obligatory, depictive, transitive host]
* The boss became angry [obligatory, resultative, intransitive host]
* This made me furious [obligatory, resultative, transitive host]
* He died young [optional, depictive, intransitive host]
* He at the steak almost raw [optional, depictive, transitive host]
* The pond froze solid [optional, resultative, intransitive host]
* He painted the house blue [optional, resultative, transitive host]

In UD, obligatory predicatives are always treated as `xcomp`. In most cases, as well as an adjective depictive, you can use a verbal or nominal predicate in the same position (e.g., _He looked [an idiot]_; _This made me [seethe with anger]_). Optional depictives are analyzed as adjuncts, and made the [acl]() of the nominal that they semantically modify (if one is present, otherwise they become an [advcl](), as above). The remaining, most subtle case is optional resultatives. For these, 
we uniformly use `xcomp`:

~~~ sdparse
He painted the house blue .
dobj(painted, house)
xcomp(painted, blue)
~~~

Even though the resultative is optional here, one may argue that it is still a complement (an argument) of the higher verb
(he is painting something blue), in a way that is not true of depictives. Such an analysis of optional depictives as core arguments is adopted for English by Huddleston and Pullum (p. 262). In LFG terms, we would say that the verb has acquired a new
subcategorization frame by application of a lexical rule, and that this frame
includes an additional `xcomp` argument. Such an analysis is buttressed by the fact that intransitive verbs can also form similar resultatives by gaining a new subcategorization which adds both a `dobj` and an `xcomp`, as in the example below.

~~~ sdparse
The dog barked the neighbors awake .
dobj(barked, neighbors)
xcomp(barked, awake)
~~~


