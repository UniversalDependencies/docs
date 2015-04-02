---
layout: base
title:  'Syntax'
permalink: cs/overview/specific-syntax.html
---

# Specific constructions

## Adjectival and adverbial constructions

### Comparatives (degree)

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

Very commonly the complement clause in a comparative undergoes various amounts of partial reduction or ellipsis, sometimes to a quite extreme extent.
In general, we treat whatever remnant that remains as still an [cs-dep/advcl](), as above.

~~~ sdparse
On hraje opilý lépe než střízlivý . \n He plays drunk better than sober .
nsubj(hraje, On)
advcl(hraje, opilý)
advmod(hraje, lépe)
advcl(lépe, střízlivý)
mark(střízlivý, než)
punct(hraje, .-7)
nsubj(plays, He)
advcl(plays, drunk)
advmod(plays, better)
advcl(better, sober)
mark(sober, than)
punct(plays, .-15)
~~~

The limiting case is that only a nominal is present; then we analyze it as an [cs-dep/nmod](), although one could see
_Martin is more intelligent than Vojta_ as a reduced expression of _Martin is more intelligent than how Vojta is intelligent._
We lean towards minimizing the postulation of unobserved structure and opt to treat these cases as just an oblique nominal complement.

### Comparatives (quantity)

In the periphrastic comparatives in the previous section, the words _více_ “more” and _méně_ “less”
are comparative forms of the [adverbs](cs-pos/ADV) _hodně/mnoho_ “much/many” and _málo_ “little”, respectively.
However, in other situations they combine directly with nouns and act as quantifiers
(termed _indefinite [numerals](cs-pos/NUM)_ in the Czech grammar but labeled [cs-pos/DET]() in accord with our definition).
They behave syntactically like high-value numerals (see [cs-dep/nummod]() for details)
and we attach them as [cs-dep/det:numgov]() or [cs-dep/det:nummod]().

* _třicet let_ “thirty years”
* _mnoho let_ “many years”
* _více let_ “more years [than average/usual/expected]”
* _více let, než jsme čekali_ “more years than we expected”
* _více než třicet let_ “more than thirty years”

~~~ sdparse
Dnes přišlo více chlapců , než jsme čekali . \n Today came more boys , than we-have expected .
advmod(přišlo, Dnes)
nsubj(přišlo, chlapců)
det:numgov(chlapců, více)
advcl(více, čekali)
mark(čekali, než)
aux(čekali, jsme)
punct(čekali, ,-5)
punct(přišlo, .-9)
advmod(came, Today)
nsubj(came, boys)
det:numgov(boys, more)
advcl(more, expected)
mark(expected, than)
aux(expected, we-have)
punct(expected, ,-15)
punct(came, .-19)
~~~

As with qualitative comparisons, we use `nmod` instead of `advcl` and `case` instead of `mark`
when the comparative complement is reduced to just a nominal:

~~~ sdparse
Petr má více peněz než Pavel . \n Petr has more money than Pavel .
nsubj(má, Petr-1)
nsubj(has, Petr-9)
dobj(má, peněz)
dobj(has, money)
det:numgov(peněz, více)
det:numgov(money, more)
nmod(více, Pavel-6)
nmod(more, Pavel-14)
case(Pavel-6, než)
case(Pavel-14, than)
punct(má, .-7)
punct(has, .-15)
~~~

* _Martin přečetl více knížek než Vojta._ “Martin has read more books than Vojta [has read].”
* _Martin přečetl více knížek než časopisů._ “Martin has read more books than [he has read] magazines.”

In certain contexts the comparative complement combines both the action or adjective that is being compared
and the quantity it is compared to:

* _více než 90 procent_ “more than 90 percent”
* _více než tříletá práce_ “more than three-years work”
* _více než pravděpodobné_ “more than likely”
* _Ceny domů se za posledních deset let více než zdvojnásobily._ “Home prices have more than doubled in the past decade.”

In these cases we consider _více než_ to be a multi-word expression because the two words are inseparable.
One cannot say _*více procent než 90_ (the word _procent_ can be pulled to the front but then it will skip the whole MWE,
as in _těch procent nebylo více než 90_ lit. _the percent were-not more than 90._)

~~~ sdparse
To je více než pravděpodobné . \n That is more than likely .
nsubj(pravděpodobné, To)
nsubj(likely, That)
cop(pravděpodobné, je)
cop(likely, is)
advmod(pravděpodobné, více)
advmod(likely, more)
mwe(více, než)
mwe(more, than)
punct(pravděpodobné, .-6)
punct(likely, .-13)
~~~
