---
layout: base
title:  'Syntax'
permalink: u/overview/specific-syntax.html
---

# Specific constructions

This section will contain detailed discussion of particular linguistic constructions of interest, covering best practices for how to annotate them cross-linguistically. It is still a work in progress.  At the moment, you can also see:

* Coordination: currently described under [u-dep/conj]()
* Direct and reported speech: currently described under [u-dep/parataxis]()

## Elements of a clause

### Secondary predicates

A clause can contain a _secondary predication_ or _predicative_. The most common case is with adjectives, although the same effect can sometimes be achieved with a predicative noun or preposition-marked phrase.

* _She declared the cake **beautiful**._
* _She declared the cake **a success**._
* _She entered the room **sad**._
* _She hammered the metal **flat**._

There are two predicates in such sentences, the main predicate and an additional one, such as *the cake* being *beatiful* or *She* being *sad*.

Huddleston and Pullum (2002) “The Cambridge Grammar of the English Language”, chapter 4 section 5.3, divide predicatives into obligatory and optional predicatives, which can be either depictives or resultatives, and which can appear in an intransitive or transitive clause, giving eight possibilities:

* _He looked **fantastic**._ [obligatory, depictive, intransitive host]
* _She kept Kim **warm**._ [obligatory, depictive, transitive host]
* _The boss became **angry**._ [obligatory, resultative, intransitive host]
* _This made me **furious**._ [obligatory, resultative, transitive host]
* _He died **young**._ [optional, depictive, intransitive host]
* _He ate the steak **almost raw**._ [optional, depictive, transitive host]
* _The pond froze **solid**._ [optional, resultative, intransitive host]
* _He painted the house **blue**._ [optional, resultative, transitive host]

In UD, obligatory predicatives are always treated as an `xcomp`: The secondary predicate is attached as an `xcomp` of the main predicate. In most cases, as well as an adjective depictive, you can use a verbal or nominal predicate in the same position (e.g., _He looked [an idiot]_; _This made me [seethe with anger]_). 

~~~ sdparse
She declared the cake beautiful .
nsubj(declared, She)
dobj(declared, cake)
xcomp(declared, beautiful)
~~~

In the enhanced representation, there is an additional subject link showing the secondary predication, which is obligatorily a particular role in the higher clause:

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

The relation `xcomp` is used for core arguments of clausal predicates,
so it will not be used for some other instances of secondary predication.
Optional depictives are analyzed as adjuncts, and made the [acl]() of the nominal that they semantically modify (if one is present). 

For instance, in _She entered the room sad_ we also have a double predication
(she entered the room; she was sad).
But _sad_ is not a core argument of _enter:_ leaving it out will neither affect grammaticality
nor significantly alter the meaning of the verb.
On the other hand, leaving out _beautiful_ in _She declared the cake beautiful_
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
not an [adverb](../pos/ADV.html). There is a second predication and the adjective heads the predication (just like in *She is sad*) and in this case there are simply no other words expressing this second predication:

~~~ sdparse
Vstoupila do místnosti smutná . \n She-entered to room sad .
advcl(Vstoupila, smutná)
advcl(She-entered, sad)
~~~

The remaining, most subtle case is optional resultatives. For these, 
we uniformly use `xcomp`:

~~~ sdparse
He painted the house blue .
dobj(painted, house)
xcomp(painted, blue)
~~~

Even though the resultative is optional here, one may argue that it is still a complement (an argument) of the higher verb
(he is painting something blue), in a way that is not true of depictives. Such an analysis of optional depictives as core arguments is adopted for English by Huddleston and Pullum (p. 262). In LFG terms, we would say that the verb has acquired a new
subcategorization frame by application of a lexical rule, and that this frame
includes an additional `xcomp` argument. Such an analysis is buttressed by the fact that normally intransitive verbs like _to bark_ can also form similar resultatives by gaining a new subcategorization which adds both a `dobj` and an `xcomp`, as in the example below.

~~~ sdparse
The dog barked the neighbors awake .
dobj(barked, neighbors)
xcomp(barked, awake)
~~~

## Elements of a nominal

## Adjectival and adverbial constructions

### Comparatives

The syntax of comparative constructions poses various challenges for linguistic theory.  For English, many of these are discussed in Bresnan (1973) and Huddleston and Pullum (2002, chapter 13). We give a discussion of equality comparisons (_That car is as big as mine_) and inequality scalar comparisons (_Sue is taller than Jim_).

In constructions of the form _as X as Y_ or _the same X as Y_, X and
Y can be of a range of syntactic types, leading to surface forms such as those exemplified below:

* _Commitment is as important as a player’s talent._
* _Get the cash to him as soon as possible._
* _I put in as much flour as the recipe called for._

We note that the head of the whole construction appears to be the head of the X phrase. We can simply say:

*  _Commitment is important._ 
*  _Get the cash to him soon._
*  _I put in flour._

We then say that the first _as_ is the main part of the comparative, modifying something in the X phrase, in part because the _as Y_ is fairly optional:

* _Commitment is (just) as important._
* _?Get the cash to him (just) as soon._
* _I put in (just) as much flour._

However, this first _as_ may not modify the head of X, it may modify an existing modifier of the head of X. Its role is adverbial ([u-dep/advmod]()) consistent with other kinds of degree modification:

~~~ sdparse
Commitment is as important as a player ’s talent .
advmod(important, as-3)
~~~

~~~ sdparse
I put in as much flour as the recipe called for .
advmod(much, as-4)
~~~

We then take the complement of the comparative as an oblique dependent of the first part. It is clear that the material in the complement _as Y_ can be clausal. It is also usually optional, as indicated above. For that reason, we usually make the complement an [u-dep/advcl](), with the second _as_ analyzed as a mark.  That gives us:

~~~ sdparse
I do n't hear from my brother as often as I previously heard from him .
nsubj(hear, I-1)
aux(hear, do)
neg(hear, n't)
case(brother, from-5)
det(brother, my)
nmod(hear, brother)
advmod(often, as-8)
advmod(hear, often)
mark(heard, as-10)
nsubj(heard, I-11)
advmod(heard, previously)
advcl(often, heard)
case(him, from-14)
nmod(heard, him)
punct(hear, .)
~~~

The same basic analysis is given for inequality scalar comparatives, with _more_ or a comparative adjective and _than_, parallel to the two uses of _as_ above, except that _more_ can also directly modify a noun, and is then taken to have the [u-dep/amod]() relation to the noun.

~~~ sdparse
more sausages than you bought last week
amod(sausages, more)
advcl(sausages, bought)
mark(bought, than)
~~~

~~~ sdparse
more important than you thought
advmod(important, more)
advcl(important, thought)
mark(thought, than)
~~~

If the comparative form becomes a single word, then the comparative complement depends on that word:

~~~ sdparse
smarter than you thought
advcl(smarter, thought)
mark(thought, than)
~~~

~~~ sdparse
a smarter boy than you thought
amod(boy, smarter)
advcl(smarter, thought)
mark(thought, than)
~~~

Very commonly the complement clause in a comparative undergoes various amounts of partial reduction or ellipsis, sometimes to a quite extreme extent:

~~~ sdparse
I put in as much flour as the recipe called for .
nsubj(put, I)
compound(put, in)
advmod(much, as-4)
amod(flour, much)
dobj(put, flour)
mark(called, as-7)
det(recipe, the)
nsubj(called, recipe)
advcl(much, called)
nmod(called, for)
punct(put, .)
~~~

~~~ sdparse
He plays better drunk than sober
nsubj(plays, He)
advmod(plays, better)
acl(He, drunk)
mark(sober, than)
advcl(better, sober)
~~~

In general, we treat whatever remnant that remains as still an [u-dep/advcl](), as above. 

However, a limiting case of this is that only a nominal is present:

* _as important as a player 's talent_
* _more important than a player 's talent_

The analysis in this case is unclear: Should the comparative complement still be analyzed as an extremely reduced complement clause or analyzed as simply a nominal modifier? There are arguments for both positions. For English, there is a long discussion of the arguments in section 2.2 of chapter 13 of Huddleston and Pullum (2002). We err on the side of minimizing the postulation of unobserved structure and opt to treat these cases as just an oblique nominal complement:

~~~ sdparse
as important as a player 's talent
advmod(important, as-1)
case(talent, as-3)
nmod(important, talent)
~~~

~~~ sdparse
more important than a player 's talent
advmod(important, more)
case(talent, than)
nmod(important, talent)
~~~
