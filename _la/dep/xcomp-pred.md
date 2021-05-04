---
layout: relation
title: 'xcomp:pred'
shortdef: 'core secondary predication'
udver: '2'
---

The `pred` subrelation aims at unitarily representing the phenomenon of **secondary predications** (also "conjoined participles", it. *participio congiunto*, "double nominative/accusative", "subject/object complements", "adverbial appositions", "depictives", and so on) in its different realisations. 

Contrary to adverbial secondary predications (see [`advcl:pred`](la-dep/advcl-pred)), "core" or "complemental" secondary predications are foregrounded (and therefore not subordinated) and can be seen as forming an extension of the main predicate, in a similar way to [closed](la-dep/xcomp) (e.g. of modal verbs, *possum <u>facere</u>* 'I can do') or [open](la-dep/ccomp) (e.g. verbs of saying, *dico <u>te hoc facere</u>* 'I say that you do that') clausal complements. They are nearly always referring to the object of the main sentence or, equivalently, to the subject in passive constructions (e.g. with *videor* 'I seem', lit. 'I am seen'). Core secondary predications are not so much predicating something about their referent as describing a result, state or judgment implied by the predicate in which the referents are involved. Like for their adverbial versions,  these secondary predications cannot be selected for [passivisation](la-feat/Voice) and are distinct from [secondary objects](la-dep/iobj).

This subrelation overlaps for the most part with the complements of so-called "copular verbs". Being nominal in form (including [participles](la-feat/VerbForm) and the likes), they are formally set apart from other clausal complements, like those of modal verbs, which are usually expressed by [finite or infinitival](la-feat/VerbForm) clauses. Copular and modal verbs are always treated as [verbs](la-pos/VERB) which can govern complements and not as [auxiliaries](la-pos/AUX), since they still are fully lexical elements.

It is true that the identification of a secondary predication as [adverbial](la-dep/advcl-pred) rather than core, being both formally identical (bare nominal predications), is not always straightforward, and much depends on the semantics of the main predicate.

In the following examples, the passages in the translations corresponding to core secondary predications are boldfaced. The corresponding main predicate is underlined.

~~~ sdparse
verbum caro factum est \n word flesh made is
xcomp:pred(factum,caro)
nsubj(factum,verbum)
xcomp:pred(made,flesh)
nsubj(word,made)
~~~

'The word <u>has been made</u> **flesh**' (*Summa contra Gentiles* citing John 1:14, ITTB)

~~~ sdparse
Huius quidem preconium , facta modernorum exsuperans , tanquam veri existentia latius arbitrabar aliquando superfluum . \n Of-this indeed public-cry , facts of-moderns surpassing , as-much-as of-true existence more-broadly I-was-deeming somewhat excessive .
xcomp:pred(arbitrabar,superfluum)
obj(arbitrabar,preconium)
xcomp:pred(I-was-deeming,excessive)
obj(I-was-deeming,public-cry)
~~~

'The report whereof, overtopping all deeds of recent times, I erstwhile <u>did deem</u> **extravagant**, as going beyond the appearence of truth.' (*Letters* XIII, UDante)

~~~ sdparse
Et hii sunt quos Poeta Eneidorum sexto Dei dilectos et ab ardente virtute sublimatos ad ethera deorum que filios vocat , quanquam figurate loquatur . \n And these are whom Poet of-Aeneid in-sixth of-God beloved and by ardent virtue elevated to skies of-gods and sons calls , although figuratively speaks .
xcomp:pred(vocat,dilectos)
nmod(dilectos,Dei)
conj(dilectos,sublimatos)
obl:agent(sublimatos,virtute)
obl:arg(sublimatos,ethera)
conj(dilectos,filios)
nmod(filios,deorum)
obj(vocat,quos)

xcomp:pred(calls,beloved)
nmod(beloved,of-God)
conj(beloved,elevated)
obl:agent(elevated,virtue)
obl:arg(elevated,skies)
conj(beloved,sons)
nmod(sons,of-gods)
obj(calls,whom)
~~~

'And those who succeed are those whom the author of the Aeneid, in the sixth book, <u>calls</u> **God's beloved, raised to the heavens by their ardent virtue and made the children of God** - ­though he is speaking figuratively.' (*De Vulgari Eloquentia*, UDante)

