---
layout: base
title:  'Other Constructions'
permalink: u/overview/specific-syntax.html
---

# Other Constructions

This document contains detailed discussion of particular linguistic constructions that fall outside (or cut across) the main categories of simple clause, complex clauses, and nominal phrases.

## Coordination

* Coordination: currently described under [u-dep/conj]()


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

We then say that the first _as_ is an independent modifier in the comparative, modifying something in the X phrase, in part because the following _as Y_ is fairly optional:

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
amod(flour, much)
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

We take the _as Y_ clause as a dependent of the content-word whose degree is being assessed (here _often_). We take its head to be the head of the clause, here _heard_.  An initially plausible alternative analysis would be to make the clausal dependent headed by _as_ a dependent of the comparative modifier _as_, _more_, or _less_, and indeed this is the analysis which Huddleston and Pullum (2002) argue for in English. However, there are several reasons to doubt this analysis.  One is the general principles of UD in favoring content words as heads. A second argument is motivated by a desire for crosslinguistic adequacy: in languages such as Finnish and Japanese, this functional element is not present.

~~~ sdparse
“Y” より “X” が 面白い 。 \n Y than X NOM interesting .
nsubj(面白い, “X”)
case(“X”, が)
case(“Y”, より)
nmod(面白い, “Y”)
punct(面白い, 。)
~~~

Since the first _as_ is a functional element, the dependent can be understood to modify the whole phrase _as often_, and therefore is attached to the head of that phrase. Additionally, it might be noted that comparatives without a comparative word occur in certain varieties of English. For example in Indian English you find usages such as _So don't worry if you think that you have a girl-friend, who is intelligent than you._ One further argument from morphological comparatives is discussed below.

The same basic analysis is given for inequality scalar comparatives, with _more_ or _less_ or a comparative adjective and _than_, parallel to the two uses of _as_ above, except that _more_ can also directly modify a noun, and _more_ is then taken to have the [u-dep/amod]() relation to the noun.  In this case, we take the comparative complement as directly depending on _more_, roughly seeing it as elliptical for _more numerous_.  In general, the comparative complement always depends on an adjective or adverb, and is usually an [advcl]() except when it is directly analyzed as an [nmod]() (as discussed at the end of this section).

~~~ sdparse
more problems than you thought of last week
amod(problems, more)
advcl(more, thought)
mark(thought, than)
~~~

~~~ sdparse
more important than you thought
advmod(important, more)
advcl(important, thought)
mark(thought, than)
~~~

~~~ sdparse
more rapidly than you thought
advmod(rapidly, more)
advcl(rapidly, thought)
~~~

~~~ sdparse
a more difficult problem than you thought
advmod(difficult, more)
amod(problem, difficult)
advcl(difficult, thought)
~~~

In addition to crosslinguistic adequacy, we can see here another possible advantage of not attaching the _than_ clause to _more_: This analysis then means that the dependency structure is more parallel between cases with a periphrastic comparative like _more intelligent_ and a morphological comparative like _taller_ (even though in bound morpheme cases, the _-er_ could be argued to be the comparative head).

~~~ sdparse
smarter than you thought
advcl(smarter, thought)
mark(thought, than)
~~~

~~~ sdparse
fiksumpi kuin luulit \n smarter than you_thought
advcl(fiksumpi, luulit)
mark(luulit, kuin)
~~~

~~~ sdparse
a smarter boy than you thought
amod(boy, smarter)
advcl(smarter, thought)
mark(thought, than)
~~~

If the head is ellided, then the functional element can be promoted.

~~~ sdparse
Wheat raises blood sugar even more than sugar does .
advcl(more, does)
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

### _More than_ as a multi-word expression

In certain contexts the comparative complement combines both the action or adjective that is being compared
and the quantity it is compared to:

* _more than 90 percent (= over 90 percent)_
* _more than likely_
* _Home prices have more than doubled in the past decade._

In these cases we consider _more than_ to be a multi-word expression because the two words are inseparable.
One cannot say _*more percent than 90._

~~~ sdparse
That is more than likely .
nsubj(likely, That)
cop(likely, is)
advmod(likely, more)
mwe(more, than)
punct(likely, .-6)
~~~

If the expression modifies a counted noun phrase, it attaches directly to the modified number:

~~~ sdparse
more than two years ago
nummod(years, two)
mwe(more, than)
advmod(two, more)
~~~

If there is no number (because the indefinite article functions as the number “one”), it attaches directly to the head noun:

~~~ sdparse
more than a year ago
det(year, a)
mwe(more, than)
advmod(year, more)
~~~

## Multiword Expressions


## Loose Joining Relations and Clause-External Elements

* Direct and reported speech: currently described under [u-dep/parataxis]()

### Feedback words

In a sentence starting with a feedback word such as _yes_ or _no_ and continuing with a main clause, we take the predicate of the main clause to be the root of the sentence and attach the feedback word to this predicate with a [discourse]() relation:

~~~ sdparse
yes , we should apply for membership .
discourse(apply, yes)
~~~

However, when the feedback is expressed by a full clause instead of a feedback word, the predicate of this clause is taken as the root and the predicate of the following clause is attached with a [parataxis]() relation:

~~~ sdparse
I agree , we should apply for membership .
parataxis(agree, apply)
~~~
