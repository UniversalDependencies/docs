---
layout: base
title:  'Syntax'
permalink: cs/overview/specific-syntax.html
---

# Specific constructions

## Adjectival and adverbial constructions

### Comparatives

Unlike in English, most Czech adjectives and adverbs have morphological comparative and superlative forms (see the [cs-feat/Degree]() feature):
_chytrý_ “smart”, _chytřejší_ “smarter”, _nejchytřejší_ “smartest”. Periphrastic constructions such as English _more intelligent_
cannot be completely excluded but they are infrequent and often deemed poor style: _inteligentnější_ is preferred over _více inteligentní._
The exception is when the adjective or adverb applies less to the entity being compared than to the entity being compared to:
_méně inteligentní_ “less intelligent” is the only way of reversing the comparison.
Equality comparisons are also periphrastic.

* _Martin je <b>inteligentnější</b> než Vojta._ “Martin is <b>more intelligent</b> than Vojta.”
* _Vojta je <b>méně inteligentní</b> než Martin._ “Vojta is <b>less intelligent</b> than Martin.”
* _Vojta je <b>stejně inteligentní</b> jako Matěj._ “Vojta is <b>as intelligent</b> as Matěj.”
* _Martin je <b>nejinteligentnější</b> ze všech._ “Martin is <b>the most intelligent one</b> of them all.”

~~~ sdparse
Martin je inteligentnější než Vojta .
nsubj(inteligentnější, Martin)
cop(inteligentnější, je)
nmod(inteligentnější, Vojta)
case(Vojta, než)
punct(inteligentnější, .)
~~~

~~~ sdparse
Martin je nejinteligentnější ze všech .
nsubj(nejinteligentnější, Martin)
cop(nejinteligentnější, je)
nmod(nejinteligentnější, všech)
case(všech, ze)
punct(nejinteligentnější, .)
~~~

To keep the analyses of the morphological and the periphrastic cases parallel
(and also to keep the analyses parallel cross-linguistically),
in the periphrastic examples the entity comapared to modifies still the adjective and not the adverb:

~~~ sdparse
Vojta je méně inteligentní než Martin .
nsubj(inteligentní, Vojta)
cop(inteligentní, je)
advmod(inteligentní, méně)
nmod(inteligentní, Martin)
case(Martin, než)
punct(inteligentní, .)
~~~

If a property is compared to a clause, the clause is attached as [cs-dep/advcl]() instead of [cs-dep/nmod]()
and the conjunction _(než, jako)_ is attached to the subordinate clause as [cs-dep/mark]().

~~~ sdparse
Martin je inteligentnější , než jsme mysleli . \n Martin is more-intelligent , than we-have thought .
nsubj(inteligentnější, Martin-1)
cop(inteligentnější, je)
advcl(inteligentnější, mysleli)
punct(mysleli, ,-4)
mark(mysleli, než)
aux(mysleli, jsme)
punct(inteligentnější, .-8)
nsubj(more-intelligent, Martin-10)
cop(more-intelligent, is)
advcl(more-intelligent, thought)
punct(thought, ,-13)
mark(thought, than)
aux(thought, we-have)
punct(more-intelligent, .-17)
~~~



except that _more_ can also directly modify a noun, and _more_ is then taken to have the [u-dep/amod]() relation to the noun.  In this case, we take the comparative complement as directly depending on _more_, roughly seeing it as elliptical for _more numerous_.  In general, the comparative complement always depends on an adjective or adverb, and is usually an [advcl]() except when it is directly analyzed as an [nmod]() (as discussed at the end of this section).

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
