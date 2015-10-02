---
layout: base
title:  'Syntax'
permalink: cs/overview/specific-syntax.html
---

# Specific constructions

## Clausal structures

### Reflexive pronouns

Czech has a [reflexive](cs-feat/Reflex) personal pronoun that takes different forms in
different [cases](cs-feat/Case) and these forms differ from the normal, irreflexive pronouns:

<table>
<tr><td><strong>Case:</strong></td><td>Gen</td><td>Dat</td><td>Acc</td><td>Loc</td><td>Ins</td></tr>
<tr><td><strong>Clitic:</strong></td><td></td><td><i>si</i></td><td><i>se</i></td><td></td><td></td></tr>
<tr><td><strong>Full:</strong></td><td><i>sebe</i></td><td><i>sobě</i></td><td><i>sebe</i></td><td><i>sobě</i></td><td><i>sebou</i></td></tr>
</table>

The clitic forms _se, si_ are very frequent and serve various purposes.
Their default function is to represent object that is identical to the subject of the same
verb. The test is that they could be substituted by a normal personal pronoun.
Such instances are attached to the verb as [cs-dep/dobj]() or [cs-dep/iobj]().

* _Jan <b>se</b> bude bránit._ “Jan will defend himself.”
  (`dobj`; substitution is grammatical:
  _Jan <b>ho</b> bude bránit._ “Jan will defend him.”)
* _Barbora <b>si</b> přidělí osobního strážce._ “Barbora will assign herself a bodyguard.”
  (`iobj`; substitution is grammatical:
  _Barbora <b>jí</b> přidělí osobního strážce._ “Barbora will assign her a bodyguard.”)

~~~ sdparse
Jan se bude bránit . \n Jan himself will defend .
dobj(bránit, se)
dobj(defend, himself)
~~~

~~~ sdparse
Barbora si přidělí strážce . \n Barbora herself will-assign bodyguard .
iobj(přidělí, si)
iobj(will-assign, herself)
~~~

The Czech reflexive pronoun is also used in reciprocal actions where other languages use
a special reciprocal pronoun. These instances are still attached as `dobj` or `iobj`,
respectively:

* _Jan a Marie <b>se</b> políbili._ “Jan and Marie kissed each other.”
* _Jan a Marie <b>si</b> to řekli._ “Jan and Marie told that each other.”

~~~ sdparse
Jan a Marie se políbili . \n Jan and Marie each-other kissed .
dobj(políbili, se)
dobj(kissed, each-other)
~~~

If the reflexive pronoun can be substituted by another nominal but it is not a core argument
(object) of the verb, it will be attached as [cs-dep/nmod]().

~~~ sdparse
Zuzana si opřela kolo o zeď . \n Zuzana for-herself propped bike against wall .
nmod(opřela, si)
nmod(propped, for-herself)
~~~

The reflexive pronoun can be used to form a passive construction.
This is called reflexive passive; there is also the “normal” passive built with the passive
participle and the auxiliary verb _být_ “to be”.
Reflexive pronoun that forms a reflexive passive is attached as [cs-dep/auxpass:reflex]().

~~~ sdparse
To se řekne snadno . \n It is said easily .
auxpass:reflex(řekne, se)
auxpass:reflex(said, is)
~~~

There are inherently reflexive verbs, i.e. the verb always occurs with a reflexive
prounoun, and the pronoun cannot be replaced by a non-reflexive pronoun or any other nominal.

With these verbs, the reflexive pronoun is attached as [cs-dep/expl]().

~~~ sdparse
Martin se bojí zvířat . \n Martin REFLEX fears animals .
expl(bojí, se)
expl(fears, REFLEX)
~~~

If a reflexive verb (inherently or not) has been turned to a verbal noun, the reflexive
pronoun is attached to the noun as [cs-dep/nmod]():

~~~ sdparse
Jediným cílem je utvrzení se v pocitu , že … \n Only goal is strengthening oneself in feeling , that …
nmod(utvrzení, se)
nmod(strengthening, oneself)
~~~

Finally, the dative reflexive _si_ is sometimes used in situations where it is redundant.
Such instances are attached as [cs-dep/discourse]():

~~~ sdparse
Klaus si odsloužil 154 dnů . \n Klaus himself served-out 154 days .
discourse(odsloužil, si)
discourse(served-out, himself)
~~~

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

~~~ sdparse
více závisí na stavu linky než na rychlosti přístroje \n more depends on state of-line than on speed of-device
advmod(závisí, více)
advmod(depends, more)
dobj(závisí, stavu)
dobj(depends, state)
case(stavu, na-3)
case(state, on-13)
nmod(stavu, linky)
nmod(state, of-line)
nmod(více, rychlosti)
nmod(more, speed)
case(rychlosti, na-7)
case(speed, on-17)
case(rychlosti, než)
case(speed, than)
nmod(rychlosti, přístroje)
nmod(speed, of-device)
~~~

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

## Ellipsis

Ellipsis means that there is something missing in the sentence.
Something that has been omitted from the surface form, although it is understood by both the speaker and the listener.
Various phenomena can be classified as ellipsis;
the most important and difficult are those where the missing word has dependents.
Where do we attach these _orphans_ to?

Several different solutions can be found in treebanks.
One of them is to include an **empty node** (labeled `NULL`, `#Fantom` etc.) that represents the missing word.
Orphans are then attached to the empty node with their real dependency relation labels.
Such analysis would be linguistically adequate but it would violate our principle that dependencies exist
between real syntactic words. (It would also make parsing more difficult.)
We do not insert empty nodes.

If empty nodes are not an option, some treebanks attach all orphans to the **grandparent,**
i.e. to the parent of the missing parent node. Then they may

* keep the labels they would have if attached to the missing parent (but that would yield strange combinations of parts of speech and dependency relations)
* get a special label such as the `ExD` in Prague-style treebanks (it does not say much but at least it warns the user that this relation is not a normal dependency)
* combine both (in the Danish treebank, the original labels are surrounded by angle brackets to indicate that this is not the real parent; in the Ancient Greek and Latin treebanks, the labels on the path via missing node(s) are chained into one long label)

Another possibility is that one of the orphans gets **promoted** to the place of the missing parent
and the other orphans are attached to it.

We use a combination of approaches in the Czech UD. The only limitation is that we do not reconstruct nodes that
are not present in the surface sentence form.

If the head noun is missing from a noun phrase, i.e. there is just an adjective, possibly also a numeral or
a determiner, then one orphan is selected as the main dependent and it gets promoted:

~~~ sdparse
Zatímco mně zbylo pět malých zelených jablíček , Petra měla tři velká červená . \n While to-me remained five small green apples , Petra had three big red .
dobj(měla, červená)
dobj(had, red)
nummod(červená, tři)
nummod(red, three)
amod(červená, velká)
amod(red, big)
~~~

Note that Czech does not have promotion of auxiliaries like in English _I did not come but he did._
Occasionally _yes/no_ is used to construct similar sentences, as in
_Já jsem nepřišel, ale on ano._ lit. _I have not-come, but he yes._

We do not use promotion when a verb is missing and two or more arguments of the verb are present.
A frequent special case of this is coordination of clauses that share the same verb but only the
first occurrence of the verb is retained on the surface, while the other copies have been deleted
and only their dependents remain:
_Pavel si objednal hovězí a Markéta [si objednala] vepřové._
“Pavel ordered beef and Markéta [ordered] pork.”
Universal Dependencies annnotate such cases using the [cs-dep/remnant]() relation,
which enables reconstruction of the functions of the arguments,
without inserting an empty node for the missing verb:

~~~ sdparse
Pavel si objednal hovězí a Markéta vepřové . \n Pavel himself ordered beef and Markéta pork .
nsubj(objednal, Pavel-1)
nsubj(ordered, Pavel-10)
dobj(objednal, hovězí)
dobj(ordered, beef)
remnant(Pavel-1, Markéta-6)
remnant(Pavel-10, Markéta-15)
remnant(hovězí, vepřové)
remnant(beef, pork)
~~~

Sometimes a verb is missing but there is no coordination and no overt copy of the verb,
hence we cannot use the `remnant` analysis.
In particular, there are sentence-like segments that lack the main verb:
_A co na to [říká] MF?_
“And what [does] MF [say] to it?”

Since release 1.2 of the Czech UD treebank,
there is just one node with the `root` dependency relation in every
tree; when there are
multiple orphaned dependents at the top level of the tree,
the leftmost dependent is promoted to
the head (root) position and the other orphans are attached to it.

~~~ sdparse
ROOT A co na to MF ? \n ROOT And what to it MF ?
root(ROOT-1, A)
root(ROOT-9, And)
dobj(A, co)
dobj(And, what)
nmod(A, to-5)
nmod(And, it)
case(to-5, na)
case(it, to-12)
nsubj(A, MF-6)
nsubj(And, MF-14)
punct(A, ?-7)
punct(And, ?-15)
~~~
