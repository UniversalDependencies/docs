---
layout: relation
title: 'acl:cmpr'
shortdef: 'adnominal comparative clause'
udver: '2'
---

The `cmpr` subtype is of semantic nature and is used to point out comparative constructions unitarily: [`advcl:cmpr`](la-dep/advcl-cmpr) for comparative adverbial clauses, [`obl:cmpr`](la-dep/obl-cmpr) for comparative oblique arguments, and `acl:cmpr` for comparative adnominal clauses.

[Adnominal clauses](la-dep/acl) with a comparative meaning usually appear in correlation with a mark of [degree](la-feat/Degree) or contrast (e.g. a [contrastive](la-feat/PronType#Con) determiner or a [negation](la-dep/advmod-neg)) carried by a modifying element, most commonly an [adjective](la-pos/ADJ). Such degree or contrast is intended to be a property of the whole noun phrase headed by the modified element, and so the comparative clause has to be represented as a dependent of this head, analogously to what happens for any other correlative construction, and comparative ones involving two predications in particular ([`advcl:cmpr`](la-dep/advcl-cmpr)). Letting the correlated phrase depend on the introductory element would in fact more often than not create a non-projective subtree which would be hardly justified by the naturalness of the construction, or its frequence. 

Otherwise, comparative clauses in adnominal form show similar tendencies as adverbial ones. The possible ellipsis of the predicate can be usually related to a modifying adjective marked for degree, seen as the head of a copular predicate (see example below) and whose repetition is avoided. The admissibility of a given explicit-making of an ellipsis in relation to the degree-carrying element and/or the predicate of the main clause plays a role in determining if the comparative clause is adverbial (at a matrix clause level) or in fact adnominal (at a noun phrase level). In other words, the attachment of a comparative clause is established on semantic grounds as much as, if not even more, than morphosyntactic ones.

 Other adnominal clauses exhibiting a [relative element](la-feat/PronType#Rel) fulfilling a role as argument or modifier, even if it is correlating with another element in the matrix clause, are still annotated as relative clauses ([`acl:relcl`](la-dep/acl-relcl)): the morphosyntactic distinction takes precedence over the semantic one (see example below). We note that not all comparative clauses of adnominal type can be traced back to a relative construction, which becomes rarer with time.

In the following examples, the passages in the translations corresponding to comparative clauses are boldfaced. 

~~~ sdparse
Et quamvis ad voluptatem nostram sive nostre sensualitatis quietem in terris amenior locus quam Florentia non existat ... \n And as-much-as to enjoyment our as-well of-sensibility calm in lands more-pleasant place than Florence not exist ...
acl:cmpr(locus,Florentia)
mark(Florentia,quam)
amod(locus,amenior)
nsubj(existat,locus)
acl:cmpr(place,Florence)
mark(Florence,than)
amod(place,more-pleasant)
nsubj(exist,place)
~~~

'And although for my own enjoyment (or rather for the satisfaction of my own desire), there is no more agreeable place on earth **than Florence**...' (*De vulgari eloquentia*, UDante)

* The original sentence uses the verb *existo* (< *exsisto*) 'to exist', so that this is no copular clause as appears from the translation, and *locus* 'place' is a nominal subject. The extended comparative clause is to be intended as *quam Florentia [amena] est* 'than Florence is [agreeable]', reprising the graded *amenior*, from *amenus* (< *amoenus*) 'pleasant'.
* The fact that *existo* cannot be intended to correspond to the elided predicate in the comparative clause (the comparison is made on terms of agreeableness, not existence, which would not make sense semantically either) determines this as an adnominal clause of the graded noun phrase, and not as an adverbial of the matrix clause.

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

* Here the demonstrative [determiner](la-pos/DET) *tantus* 'that much/many' sets up the scene for its relative correlate *quantus* 'as much/many', which stands alone implying an (elided) *letitiam* and acts as an object in (the completive clause of) the comparitive clause: therefore, this is a relative clause linked to the head of the noun phrase modified by *tanta*, i.e. *letitia* (< *laetitia*). We label it as `acl:relcl` and not `acl:cmpr`.
* The determination of the clause as adnominal rather than adverbial (and tied to the matrix clause predicate *perfuderunt*) follows from *letitia* 'joy', and not *perfundo* 'to drench', being the common link explicitated by the relative element (here a determiner).





<!-- Interlanguage links updated St lis 3 20:58:34 CET 2021 -->
