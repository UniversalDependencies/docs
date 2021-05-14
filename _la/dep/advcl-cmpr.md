---
layout: relation
title: 'advcl:cmpr'
shortdef: 'comparative clause'
udver: '2'
---

The `cmpr` subtype is used to point out comparative constructions unitarily: `advcl:pred` for comparative (adverbial) clauses and [`obl:cmpr`](la-dep/obl-cmpr) for comparative oblique arguments.

[Adverbial clauses](la-dep/advcl) with a comparative function are by far the most common strategy for comparative constructions in Latin. They are treated as dependents of the predicate in the main clause, which may or may not be modified by adverbial elements expressing some form of [degree](la-feat/Degree) (including equivalence and similarity) or contrast (like e.g. [negation](la-feat/Polarity)). Comparative clauses are [finite](la-feat/VerbForm) and can be expressed in the indicative or subjunctive [mood](la-feat/Mood), according to the type and plausibility of the comparison. They are introduced by (subordinating) [conjunctions](la-pos/SCONJ), which can be specialized (like *quam*) or polysemous (like *ut*, which also has, among others, final uses); a conjunction in this context is in any case marked with the `Cmpr` value of the feature [`ConjType`](la-feat/ConjType).

In a way similar to [co-ordinations](la-dep/conj), comparative clauses are often seen to exhibit predicate **ellipsis** to quite a notable extent. This comes from the fact that the comparison often works by varying some arguments with respect to the main clause, while simultaneously being based on the same predicate: this repetition is tendentially avoided, and so elliptical clauses arise. This has as a consequence that many comparative clauses appear just as bare nominals introduced by a conjunctional element (like *quam* or *ut*), but they are still marked by means of `advcl`: on the one hand to keep the parallelism with (not rare) "full-predicate" comparative clauses, and on the other hand, more importantly, to recognize that there always subsists the potential for a non-elliptical construction. The last point is supported by the fact that the remaining nominal element always follows the same case as the corresponding elements in the main clause. This kind of ellipsis can also equivalently appear in the main clause for thesam reasons. We observe that proper [nominal comparative constructions](la-feat/obl-cmpr) use a different strategy, and are rarer.

Comparative conjunctions are often derived from [relative](la-feat/PronType) stems, which, for comparative clauses of equivalence or similarity, are often matched in the main clause by correlated (usually demonstrative) terms: a typical example is the conjunction *quam* (originally 'how much') matched to the adverb *tam* 'so much'. These elements can become [univerbated](la-feat/Compound) to form new conjunctions (e.g. *tamquam*). Such cases are still preferably treated as subordinations. In general, a comparative adverbial clause can appear without the need of such a correlated term, or any term of degree at all.

In the following examples, the passages in the translations corresponding to comparative clauses are boldfaced.

~~~ sdparse
Pater ergo filio praecipit ut subiecto sibi secundum humanam naturam . \n Father then to-son orders like to-subject to-self according-to human nature . 
advcl:cmpr(praecipit,subiecto)
mark(subiecto,ut)
obl:arg(subiecto,sibi)
obl(subiecto,naturam)
advcl:cmpr(orders,to-subject)
mark(to-subject,like)
obl:arg(to-subject,to-self)
obl(to-subject,nature)
~~~

'For, all these things are suitable to the Son **inasmuch as He is subject to the Father**.' (*Summa contra Gentiles*, ITTB; rather free translation)

'The Father, then, gives orders to His Son as to one who is subject to Himself according to the human nature.' (more literal translation)

* Ellipsis of *praecipit* 'gives orders' in the comparative clause.

~~~ sdparse
Preterea , sicut Ecclesia suum habet fundamentum , sic et Imperium suum . \n Further , like Church its-own has foundation , so also Empire its-own .
advcl:cmpr(Imperium,habet)
mark(habet,sicut)
advcl:cmpr(Empire,has)
mark(has,like)
~~~

'Moreover, **just as the church has its foundation**, so too the empire [has] its own.' (*De Monarchia*, UDante)

* Ellipsis of *habet* 'has' in the main clause.

~~~ sdparse
In quantum de res ipsam abere videris , in tantum inde ipsam duodecimam portionem ad ipsam ecclesiam sancti Simeonis relaxare debes . \n In how-much of thing same to-have you-are-seen , in that-much thence same twelfth part to same church saint of-Simeon yield you-will-have-to .
advcl:cmpr(debes, videris)
mark(videris,In)
fixed(In-1,quantum)
advmod(debes,in-9)
fixed(in-9,tantum)
advcl:cmpr(you-will-have-to, you-are-seen)
mark(videyou-are-seenris,In-24)
fixed(In-24,how-much)
advmod(you-will-have-to,in-32)
fixed(in-32,that-much)
~~~

'**[According to] how many such things you are seen to own**, you will have to yield the twelfth part thereof to the church of St. Simeon.' (LLCT)

* Correlation of the [fixed](la-dep/fixed) expressions *in quantum* 'inasmuch' (acting as the comparative conjunction formed on the basis of the relative element *quantum*) with *in tantum* '(in) that much'.

~~~ sdparse
Hi tibi silvestres capreas , hi tergora lincum orbiculata ferent , tuus ut Melibeus amabat . \n These to-you of-wood roes , these backs of-lynxes circular they-will-bring , your like Moelibeus was-loving . 
advcl:cmpr(ferent,amabat)
mark(amabat,ut)
advcl:cmpr(they-will-bring,was-loving)
mark(was-loving,like)
~~~

'They shall bring woodland roes to thee and spotted hides
of lynxes, **as was thy Melibœus' wont**.' (*Eclogues* II, UDante)















<!-- Interlanguage links updated Pá kvě 14 11:08:46 CEST 2021 -->
