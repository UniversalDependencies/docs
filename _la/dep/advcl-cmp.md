---
layout: relation
title: 'advcl:cmp'
shortdef: 'comparative clause'
udver: '2'
---

The `cmp` subtype is of semantic nature and is used to point out the **standards of comparison** in comparative constructions unitarily: `advcl:cmp` for comparative adverbial clauses, [`obl:cmp`](la-dep/obl-cmp) for comparative oblique arguments.

[Adverbial clauses](la-dep/advcl) with the function of standards of comparisons are by far the most common strategy for comparative constructions in Latin. They are treated as dependents of the predicate in the main clause, which may or may not be modified by adverbial elements expressing some form of [degree](la-feat/Degree) (including equivalence and similarity) or contrast (like e.g. [negation](la-feat/Polarity)). Comparative clauses are [finite](la-feat/VerbForm) and can be expressed in the indicative or subjunctive [mood](la-feat/Mood), according to the type and plausibility of the comparison. They are introduced by (subordinating) [conjunctions](la-pos/SCONJ), which can be specialized (like *quam*) or polysemous (like *ut*, which also has, among others, final uses).

In a way similar to [co-ordinations](la-dep/conj), comparative clauses are often seen to exhibit predicate **ellipsis** to quite a notable extent. This comes from the fact that the comparison often works by varying some arguments with respect to the main clause, while simultaneously being based on the same predicate: this repetition is tendentially avoided, and so elliptical clauses arise. This has as a consequence that many comparative clauses appear just as bare nominals introduced by a conjunctional element (like *quam* or *ut*), but they are still marked by means of `advcl`: on the one hand to keep the parallelism with (not rare) "full-predicate" comparative clauses, and on the other hand, more importantly, to recognize that there always subsists the potential for a non-elliptical construction. The last point is supported by the fact that the remaining nominal element always follows the same case as the corresponding elements in the main clause. This kind of ellipsis can also equivalently appear in the main clause for the same reasons. We observe that proper [nominal comparative constructions](la-feat/obl-cmp) use a different strategy, and are rarer.

Comparative conjunctions are often derived from [relative](la-feat/PronType) stems, which, for comparative clauses of equivalence or similarity, are often matched in the main clause by correlated (usually demonstrative) terms: a typical example is the conjunction *quam* (originally 'how much') matched to the adverb *tam* 'so much'. These elements can become [univerbated](la-feat/Compound) to form new conjunctions (e.g. *tamquam*). Such cases are still preferably treated as subordinations (rather than co-ordinations). In general, a comparative adverbial clause can appear without the need of such a correlated term, or any term of degree at all.

In the following examples, the passages in the translations corresponding to comparative clauses are boldfaced.

~~~ sdparse
Pater ergo filio praecipit ut subiecto sibi secundum humanam naturam . \n Father then to-son orders like to-subject to-self according-to human nature . 
advcl:cmp(praecipit,subiecto)
mark(subiecto,ut)
obl:arg(subiecto,sibi)
obl(subiecto,naturam)
advcl:cmp(orders,to-subject)
mark(to-subject,like)
obl:arg(to-subject,to-self)
obl(to-subject,nature)
~~~

'For, all these things are suitable to the Son **inasmuch as He is subject to the Father**.' (*Summa contra Gentiles*, ITTB; rather free translation)

'The Father, then, gives orders to His Son as to one who is subject to Himself according to the human nature.' (more literal translation)

* Ellipsis of *praecipit* 'gives orders' in the comparative clause.

~~~ sdparse
Preterea , sicut Ecclesia suum habet fundamentum , sic et Imperium suum . \n Further , like Church its-own has foundation , so also Empire its-own .
advcl:cmp(Imperium,habet)
mark(habet,sicut)
advcl:cmp(Empire,has)
mark(has,like)
~~~

'Moreover, **just as the church has its foundation**, so too the empire [has] its own.' (*De Monarchia*, UDante)

* Ellipsis of *habet* 'has' in the main clause.

~~~ sdparse
In quantum de res ipsam abere videris , in tantum inde ipsam duodecimam portionem ad ipsam ecclesiam sancti Simeonis relaxare debes . \n In how-much of thing same to-have you-are-seen , in that-much thence same twelfth part to same church saint of-Simeon yield you-will-have-to .
advcl:cmp(debes, videris)
mark(videris,In)
fixed(In-1,quantum)
advmod(debes,in-9)
fixed(in-9,tantum)
advcl:cmp(you-will-have-to, you-are-seen)
mark(videyou-are-seenris,In-24)
fixed(In-24,how-much)
advmod(you-will-have-to,in-32)
fixed(in-32,that-much)
~~~

'**[According to] how many such things you are seen to own**, you will have to yield the twelfth part thereof to the church of St. Simeon.' (LLCT)

* Correlation of the [fixed](la-dep/fixed) expressions *in quantum* 'inasmuch' (acting as the comparative conjunction formed on the basis of the relative element *quantum*) with *in tantum* '(in) that much'.

~~~ sdparse
Hi tibi silvestres capreas , hi tergora lincum orbiculata ferent , tuus ut Melibeus amabat . \n These to-you of-wood roes , these backs of-lynxes circular they-will-bring , your like Moelibeus was-loving . 
advcl:cmp(ferent,amabat)
mark(amabat,ut)
advcl:cmp(they-will-bring,was-loving)
mark(was-loving,like)
~~~

'They shall bring woodland roes to thee and spotted hides
of lynxes, **as was thy Melibœus' wont**.' (*Eclogues* II, UDante)

~~~ sdparse
Et quamvis ad voluptatem nostram sive nostre sensualitatis quietem in terris amenior locus quam Florentia non existat ... \n And as-much-as to enjoyment our as-well of-sensibility calm in lands more-pleasant place than Florence not exist ...
advcl:cmp(amenior,Florentia)
mark(Florentia,quam)
amod(locus,amenior)
nsubj(existat,locus)
advcl:cmp(more-pleasant,Florence)
mark(Florence,than)
amod(place,more-pleasant)
nsubj(exist,place)
~~~

'And although for my own enjoyment (or rather for the satisfaction of my own desire), there is no more agreeable place on earth **than Florence**...' (*De vulgari eloquentia*, UDante)

* The extended comparative clause is to be intended as *quam Florentia [amena] est* 'than Florence is [agreeable]', reprising the graded *amenior*, from *amenus* (< *amoenus*) 'pleasant'. The connection is made to the lexical head of the phrase showing degree, and not to its modified head or to a possible functiona lelement carrying [degree](la-feat/Degree).
* The fact that *existo* cannot be intended to correspond to the elided predicate in the comparative clause (the comparison is made on terms of agreeableness, not existence, which would not make sense semantically either) determines this as a subordinate clause of the graded adjectival phrase (thus `advcl` and not `obl`), and not as an adverbial of the matrix clause.

~~~ sdparse
... subito mentes nostras tanta letitia perfuderunt , quantam nemo valeret seu verbo seu cogitatione metiri . \n immediately minds our so-much from-joy they-drenched , as-much no-one would-be-able or from-word or from-thought to-be-measured 
acl:relcl(letitia,valeret)
obj(metiri,quantam)
xcomp(valeret,metiri)
obl:arg(perfuderunt,letitia)
det(letitia,tanta)
acl:relcl(from-joy,would-be-able)
obj(to-be-measured,as-much)
xcomp(would-be-able,to-be-measured)
obl:arg(they-drenched,from-joy)
det(from-joy,so-much)

~~~

'... forthwith filled our minds with joy so exceeding great **that by none could it be measured either in word or in thought**.' (*Letters*, UDante)

* Here the demonstrative [determiner](la-pos/DET) *tantus* 'that much/many' sets up the scene for its relative correlate *quantus* 'as much/many', which stands alone implying an (elided) *letitiam* and acts as an object in (the completive clause of) the comparitive clause: therefore, this is a relative clause linked to the head of the noun phrase modified by *tanta*, i.e. *letitia* (< *laetitia*). We label it as `acl:relcl` and not as a possible `acl:cmp` (previously used).
* The determination of the clause as adnominal rather than adverbial (and tied to the matrix clause predicate *perfuderunt*) follows from *letitia* 'joy', and not *perfundo* 'to drench', being the common link explicitated by the relative element (here a determiner).



