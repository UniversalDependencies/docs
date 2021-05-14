---
layout: relation
title: 'advcl:pred'
shortdef: 'adverbial secondary predication'
udver: '2'
---

The `pred` subrelation aims at unitarily representing the phenomenon of **secondary predications** (also "conjoined participles", it. *participio congiunto*, "double nominative/accusative", "subject/object complements", "adverbial appositions", "depictives", and so on) in its different realisations. 

In a sense, secondary predications are reminding of the phenomenon of [ablativus absolutus](la-dep/advcl-abs), in that they are embedded predications by means of bare nominal elements (including [nominal verbal forms](la-feat/VerbForm)), but with the crucial difference that they are co-referent to an argument of the clause, most of the time the [subject](la-dep/nsubj) or the [object](la-dep/obj) (but not limited to them). This has as a consequence that the involved noun/adjective/participle/... agrees, if applicable, in [case](la-feat/Case) (and of course [number](la-feat/Number) and [gender](la-feat/Gender)) with the predicated element (so most of the time in the nominative or accusative). A [verbal](la-pos/VERB) secondary predicate not infrequently has its own arguments, which take the expected cases for their roles. 

The difference between adverbial and "core" (cf. [`xcomp:pred`](la-dep/xcomp-pred)) secondary predication is mostly of foregrounding: adverbial secondary predication is given as background information and thus distinct and subordinated to the main clause. It cannot be selected for [passivisation](la-feat/Voice), even if it refers to the object; this means that secondary predication of the object is not a [secondary object](la-dep/iobj) itself (i.e. a proper "double accusative"). If it refers to the subject, it is independent from the actual presence of an explicit subject (and even then, most of the times neither contiguous to it), so it cannot be made dependent from it. The adverbial predicate can also consist of a determiner, in which case it is sometimes called a "floating quantifier". It is observed that some terms have a preference for appearing or not appearing as secondary predications rather than as attributes (cf. Pinkster 1990, §8).

An adverbial secondary predication (like the *ablativus absolutus*) is underspecified in its type (temporal, concessive, and so on), and is different both from an [adnominal modifier](la-dep/acl) and an [adverbial](la-pos/ADV) element modifying the main predicate. For example (example from Pinkster 1990):

* *[Britanni] ex silvis rari propugnabant* 'The Britons made sorties from the woods in small groups' (*De Bello Gallico*, Caesar)

The [adjective](la-pos/ADJ) *rari*, from *rarus*, here 'scattered', predicates that <u>while</u> doing that, the Britons are scattered (temporal interpretation), whereas an adverbial use, e.g. *raro*, would imply that they <u>rarely</u> made sorties, and a use as an adnominal modifier would mean that the <u>scattered (few) Britons</u> made sorties, but neither is the meaning of the original sentence.

However, sometimes this difference may be very subtle, and the correct identification of an adverbial secondary predicate with respect to an adnominal modifier or an [apposition](la-dep/appos) may not be obvious.

In the following examples, the passages in the translations corresponding to adverbial secondary predications are boldfaced, and quite a variation in their renditions can be observed.

~~~ sdparse
Nec margaritas profliga prodigus apris , nec preme Castalias indigna veste sorores ; at , precor , ora cie que te distinguere possint carmine vatisono , sorti comunis utrique . \n Nor pearls cast lavish to-boars , nor press Castalian undeign robe sisters ; but , I-pray , mouths stir which you distinguish they-may with-poetry diviner-sounding , to-sort common either .
advcl:pred(profliga,prodigus)
advcl:pred(cieo,communis)
obl(communis,sorti)
det(sorti,utrique)
advcl:pred(cast,lavish)
advcl:pred(stir,common)
obl(common,to-sort)
det(to-sort,either)
~~~

'Cast not **in prodigality** thy pearls before the swine, nor load the Castalian sisters with a garb unworthy of them; but I pray thee summon utterance which may out-single thee, with bard-like song **common to either lot**.' (*Eclogues* I, UDante; secondary predication of the subject)

~~~ sdparse
Non ne dulcissimas veritates potero speculari ubique sub celo , ni prius inglorium , ymo ignominiosum populo Florentino , civitati me reddam ? \n Not maybe sweetest truths will-I-be-able to-observe anywhere under sky , when-not before inglorious , even ignominious to-people Florentine , to-city me-ACC I-will-give-back ?advcl:pred(reddam,inglorium)
conj(inglorium,ignominiosum)
advmod:emph(ignominiosum,ymo)
obj(reddam,me)
advcl:pred(I-will-give-back,inglorious)
conj(inglorious,ignominious)
advmod:emph(ignominious,even)
obj(I-will-give-back,me-ACC)
~~~

'Can I not under any sky contemplate the most precious truths, without I first return to Florence, **disgraced, nay dishonoured**, in the eyes of my fellow citizens?' (*Letters* XII, UDante; secondary predication of the object)


~~~ sdparse
vobis patres conscripti singulis et egi et agam gratias \n to-ye fathers enrolled single and I-have-moved and I-will-move thanks
advcl:pred(egi,singulis)
conj(egi,agam)
obl:arg(egi,vobis)
advcl:pred(I-have-moved,single)
conj(I-have-moved,I-will-move)
obl:arg(I-have-moved,to-ye)
~~~

'You, members of the Senate, I have thanked **separately**, and will do so again.' (*Post reditum in Senatu*, Cicero; secondary predication of the oblique)


###References

* Pinkster, H. (1990). *Latin syntax and semantics*, Routledge.
<!-- Interlanguage links updated Pá kvě 14 11:08:46 CEST 2021 -->
