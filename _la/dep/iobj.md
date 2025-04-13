---
layout: relation
title: 'iobj'
shortdef: 'either nominal object of a ditransitive verb with neutral alignment'
udver: '2'
---

The use of the relation `iobj` in Latin is inevitably marginal, if present at all, since ditransitive [verbs](la-pos/VERB) with neutral alignment, i.e. verbs with three arguments two of which are expressed as core [objects](la-dep/obj) (= in the [accusative](la-feat/Case) case for Latin; see Malchukov 2013), represent a very limited, closed class consisting of: 

* *doceo* 'I teach'
* *celo* 'I hide from'
* *posco* 'I ask urgently'
* *flagito* 'I demand urgently'
* *rogo* 'I ask', 

and some of their derivates like *edoceo* 'I teach thouroughly' or *interrogo* 'I inquire'. There are other sparse, early attestations of verbs taking two objects, but some of them might be spurious, while they are generally strongly constrained in their realisation anyway (Bennett 1914, p. 247 ff.).

The Latin language is typologically peculiar in that the class of its neutrally aligned ditransitive verbs does not include *do* 'I give' and similar terms, which instead invariably follow an indirective alignment, i.e. the recipient is expressed as an oblique argument, most often a bare nominal in the [dative](la-feat/Case) case, while the theme is expressed as the core object. There are also verbs like *dono* 'I give as a present' with a secundative alignment, i.e. the recipient is expressed as the core object, while the theme is oblique, e.g. in the [ablative](la-feat/Case) case (where we can see an instrumental nuance). It seems so that Latin's neutrally aligned ditransitive verbs are restricted to those with a "maximal" asymmetry between the recipient and theme arguments (cf. Haspelmath 2015, §7): *doceo* is protoypical in this sense, since the recipient will almost invariably be an animate, specific referent, while the theme an inanimate, usually abstract entity; *celo* shares similar features as a verb of dispossession; *rogo*, *flagito* and *posco* might be regarded almost as opposites of 'give'-verbs where transitivity is high with respect to the theme, which is also mostly an abstract referent (often expressed as a [complement clause](la-dep/ccomp)) as opposed to the usually animate and specific recipient, and, further, we notice that *flagito* and *posco* both originally represent derived forms (respectively [diminutive](la-feat/Degree)/frequentative and [inchoative](la-feat/Aspect)) which give them a nuance of "urgence" and thus possibly heightened transitivity. All of these verbs also present indirective or secundative constructions, some of which can be seen as cases of lexical partitions (e.g. *doceo aliquem **de** aliqua re* 'I inform someone **about** something', instead of 'I teach'). Conversely, other verbs of asking like *peto* 'I ask (to get something)' and *quaero* 'I ask (to know something)' are always indirectively aligned, possibly because the spatial analogy is stronger for them, as substantiated by the recipient being introduced by the prepositions *ab* or *ex* 'from', and not by the dative case as for *do* (cf. again Haspelmath 2015, §7).

Some commented examples of these constructions follow.

~~~ sdparse
Miramur nos et pariter credimus osculatique mensam rogamus nocturnas ut suis se teneant dum redimus a cena \n We-wonder us and evenly we-believe kissed-and table we-ask nocturnal that to-its-own self that-they-keep while we-come-back from dinner
i?obj(rogamus,nocturnas)
ccomp(rogamus,teneant)
i?obj(we-ask,nocturnal)
ccomp(we-ask,that-they-keep)
~~~

'We were full of wonder and faith, and we kissed the table and prayed **the Night-riders** to **stay** at home as we returned from dinner.' (`Perseus phi0972.phi001.perseus-lat1.xml@782`, *Satyricon* 64.1, Petronius)

* The sentence is actually in the present tense. Here one of the two objects is clausal and, regularly for a clause with a [finite](la-feat/VerbForm) head (*teneant*; i.e. agreeing with subject in person and number, but not in case), it is introduced by a connector, a [subordinate conjunction](la-pos/SCONJ). It is questionable which relation between `obj` or `iobj` should be used here for the only nominal object argument (see note below).

~~~ sdparse
et docebat eos in parabolis multa et dicebat illis in doctrina sua \n and was-teaching them in parables many and was-saying to-those in doctrine his-own
i?obj(docebat,eos)
i?obj(docebat,multa)
obl(dicebat,illis)
i?obj(was-teaching,them)
i?obj(was-teaching,many)
obl(was-saying,to-those)
~~~

'And he taught **them** at length in parables, and in the course of his instruction he said **to them**' (`PROIEL 10478`, *Jerome's Vulgate* Mark 4)

* literally 'he was teaching them many things', where both *eos* 'them (m)' and *multa* 'many [things]' are in the accusative case. This can be compared to the different behaviour of the following *dicebat* 'was saying', which takes a dative *illis* 'to those' (instead of accusative *illos*).

~~~ sdparse
petia ipsa de terra in integrum mihi eas dedisti \n piece same off earth in integral to-me them you-have-given

obj(dedisti,eas)
obl(dedisti,mihi)
dislocated(dedisti,petia)
obj(you-have-given,them)
obl(you-have-given,to-me)
dislocated(you-have-given,piece)
~~~

'that same portion of land - you have given **me** **those** integrally' (`LLCT test-s26`)

* Sentence showing the indirective alignment of *do* 'I give' (here in a perfective form): *mihi* (from *ego* 'I') is in the dative case, and not in the accusative (*me*), like *eas*. Note: there is a topically dislocated argument, which is then reprised with an apparent mismatch re its [number](la-feat/Number) in the main clause (at least orthographically).  


For the aforementioned ditransitive verbs, we can indeed observe two arguments expressed in the accusative case, which in Latin is the necessary condition to being a core object (while not sufficient: an argument in the accusative is not always an object). As for [passivisation](la-feat/Voice), even if we recognise strong tendencies in favour of either one of the objects as the candidate for the passive subject, in principle both the recipient and the theme can be selected, so there is no truly "primary" nor "indirect" object, and the choice to which one to apply `iobj` is ultimately arbitrary and dictated by tradition: it often falls on the recipient as the "accusative of person", which however is the most often passivised argument, and so a more ideal candidate for `obj` (if this is intended to mean "primary"). In fact, simply allowing for the annotation of two `obj`s would be the most sensible solution (and this already happens when both an `obj` and a [`ccomp`](la-dep/ccomp)/[`xcomp`](la-dep/xcomp) relation are present at the same time). In passive constructions, the remaining object rarely stays as such, or its realisation is limited: it is usually expressed as an oblique argument, if at all, or constrained to a (neutral) pronominal element, and this is what can be observed in all other sporadic cases where a verb sports two actual objects (Bennett 1914, p. 247 ff.). A kind of grammatical split seems at work here (Napoli 2016; cf. Haspelmath 2015, §4).

Some more or less clearly assessable examples of passivisation of ditransitive constructions follow.

~~~ sdparse
huc venient qui te pervisere gliscent Parrhasii iuvenesque senes et carmina leti qui nova mirari cupiantque antiqua doceri \n hither they-will-come that you to-contemplate they-will-swell Parrhasians youngsters-and elders and songs merry those new to-behold that-they-long-and ancient to-be-taught
conj(iuvenesque,cupiantque)
nsubj(cupiantque,qui-13)
obj(doceri, antiqua)
xcomp(cupiantque,mirari)
conj(mirari,doceri)
e:xcomp(cupiantque,doceri)
e:nsubj(cupiantque,qui-13)
e:nsubj(doceri,qui-13)
conj(youngsters-and,that-they-long-and)
nsubj(that-they-long-and,those)
obj(to-be-taught, ancient)
xcomp(that-they-long-and,to-behold)
conj(to-behold,to-be-taught)
e:xcomp(that-they-long-and,to-be-taught)
e:nsubj(that-they-long-and,those)
e:nsubj(to-be-taught,those)
~~~

it. 'qua verranno desiderosi di conoscerti giovani e vecchi parrasii, e quelli che vorranno lieti ammirare i nuovi carmi e studiare gli antichi.'

eng. 'hither young and old Arcadians, desiring to know you, will come, and also those who will gladly long for beholding the new songs and studying the ancient ones.' (`UDante Egl-66`, *Eclogues* III 69, Dante Alighieri)

* Relation labels with `e:` make explicit the enhanced dependencies discussed below.
* Complex sentence where the second *qui* 'those, that, who' acts as a [double pronoun](la-dep/csubj-relcl) inside the free relative headed by *cupiant* 'they long', of which 1) it is subject and the internal head which 2) also acts as subject of the root *venient*. The verb *cupio* takes infinitive clauses as clausal complements with the same subject, so again *qui*; both *mirari* 'to behold' and *doceri* 'to be taught' are morphologically passive, but while the former is [deponent](https://github.com/UniversalDependencies/docs/issues/713), the second is not (the active form of the infinitve is *docere*), but still has an accusative argument which can only be an object. In the end, we can extrapolate the "transclause" *qui antiqua doceantur* 'who be taught ancient [songs]',  where the recipient is passivised and the theme is still expressed as an object. Poetic register might be a factor for the unusual construction at hand.

~~~ sdparse
Itaque cum in dogmatibus moralis negotii amicitiam adequari et salvari analogo doceatur ad retribuendum pro collatis beneficiis plus quam semel analogiam sequi mihi votivum est \n Therefore as in doctrines moral of-business friendship to-be-equalized and to-be-saved it-be-taught to being-retributed for-the-sake-of collected off-favours more than once analogy to-follow to-me vowed is
csubj:pass/ccomp(doceatur, adequari)
conj(adequari, salvari)
advcl(votivum, doceatur)
csubj:pass/ccomp(it-be-taught, to-be-equalized)
conj(to-be-equalized, to-be-saved)
advcl(vowed, it-be-taught)
~~~

'Therefore, since it is a doctrine of ethics that friendship is equalized and preserved by reciprocity, it is my wish to preserve due reciprocity in making a return for the bounty more than once conferred upon me.' (`UDante Epi-246`, *Letters* XIII 10, Dante Alighieri)

* Literally 'since (it) is taught that friendship be equalized' Here the reading can be ambiguous between an impersonal use of the predicate *doceo* 'I teach' with undetermined subject, in which the clause of *adequari* 'to be equalized' is still an object (and this is favoured by its subject *amicitiam* being in the accusative case like in a [clausal complement](la-dep/ccomp), and *doceatur* '(it) be taught' having singular [number](la-feat/Number)), or the passivisation of the theme, which might be the simplest analysis.


~~~ sdparse
et tamen circiter parte tertia ut postea perspectum est celata atque in oppido retenta portis patefactis eo die pace sunt usi \n and nevertheless around off-part third as after-that seen-through is hidden and in town kept off-doors opened that off-day off-peace are used
nsubj:pass(celata, parte)
conj(celata,retenta)
advcl:abs(usi,celata)
nsubj:pass(hidden, off-part)
conj(hidden,kept)
advcl:abs(used,hidden)
~~~

'and nevertheless having retained and concealed, as we afterward discovered, about a third part in the town, the gates were opened, and they enjoyed peace for that day.' (`PROIEL 53139`, *De Bello Gallico* 2.32.4, Caesar)

* Literally 'the third part being held back' Here it is the theme, in the nominative case *pars tertia* 'the third part', to become the passive subject of *celo* 'I hide', as seen from the gender and number agreement in the [embedded clause](la-dep/advcl-abs), and paralleled by the monotransitive *retineo* 'I hold back' in a passive form. Indeed, indexing in Latin only refers to the subject, and for an object we we would need the accusative form *partem tertiam*. The possible second object is omitted (but it might theoretically be expressed by an accusative *nos* 'us' or a prepositional phrase *a nobis* 'from us', or similar), if any can be postulated, as e.g. in a possible active equivalent *partem tertiam (nos) celaverunt*.


There are other cases in Latin where a verb shows two bare arguments in the accusative cases, but they are all distinct from ditransitive constructions: the most frequent cases are 1) when one of two arguments is a temporal or locative expression, and so an oblique argument, 2) when one of the arguments is a [secondary predication](la-dep/advcl-pred) of the object, and 3) when the verb is a so-called [copulative](la-dep/xcomp-pred) verb and qualifies the object in some way. In the first case, the apparent object cannot be the target of passivisation; in the latter two cases, the two arguments are coreferent, so the construction is different from a ditransitive one and, further, the secondary predication cannot be passivised. Still, in the latter case the treatment of the copular complement as `xcomp` might be seen as a particular case of double-object construction.

Latin does not seem  to have morphologically derived causative/benefactive verbs, instead relying on "biclausal" constructions making use of other lexical verbs, so that multiple objects there can always be described as depending on either verb. Many, if not all, Romance languages derived from Latin have eventually ousted those few neutrally aligned ditransitive constructions, replacing them regularly with indirective and, to a lesser extent, secundative ones (e.g. Italian *l'insegnante insegna matematica **ai** bambini* 'the teacher teaches mathematics **to** the children'). This has also been extended to periphrastic causatives, as e.g. in Italian *faccio leggere un libro **a** una mia amica* 'I make/let a friend of mine read a book', lit. 'I make read a book **to** a friend of mine', contrasted with possible Latin *amicam meam librum legere facio*, where we have the relations `obj(`*facio*`,`*amicam*`)`, `xcomp(`*facio*`,`*legere*`)`, `obj(`*legere*`,`*librum*`)`, i.e. the theme is an object, though of the subordinated verb (there could also be a parallel interpretation where *amicam meam librum legere* might be seen as an [accusativus cum infinitivo](la-dep/ccomp), and so as a whole as a clausal object of *facio* 'I make', where *amicam* is the subject).  

~~~ sdparse
magnificentia sua me sibi ab annosis temporibus sponte sua fecit esse subiectum \n magnificence own me to-self from old off-times off-free-will own he-has-made to-be subjected
nsubj(fecit, magnificentia)
obj(fecit, me-3)
aux:pass(subiectum, esse)
xcomp(fecit, subiectum)
nsubj(he-has-made, magnificence)
obj(he-has-made, me-16)
aux:pass(subjected, to-be)
xcomp(he-has-made, subjected)
~~~

'his nobility of soul for long years past, as he willed, made me his servant.' (`Udante Epi-13`, *Letters* II 1, Dante Alighieri)


Still, the contemporary presence of the two relations `obj` and [`xcomp`](la-dep/xcomp) might be seen as a special case of double object, even if the relation represented by `xcomp` here leans more towards a serial or [periphrastic](la-dep/aux) verb construction than an object in a canonical sense. 



### About terminology and 'indirect objects'

The use of the label "indirect", as opposed to "direct" or "primary", to label one of the objects in a construction like English *she teaches the students linguistics* is cause of confusion, since, formally speaking, it does not correspond to what is usually meant by "indirect object" in Latin and Romance languages. The latter is an argument (more precisely, a **complement** in a complement-adjunct distinction framework) of the verb in the **genitive, dative, ablative case or introduced by a preposition**; or equivalently, an argument which is not the subject of the clause and is not in the accusative case (temporal complements and similar are left outside of this discussion, since they are usually adjuncts). As mentioned before, the 'give'-type verbs in Latin are regularly indirectively aligned, so that the recipient will be an "indirect object" in the traditional sense, i.e. a complement expressed in the dative case. This terminology has been taken over directly into English with regard to the recipient, considering only its semantic role, while, however, English often expresses this argument in the exact same way as the "regular" object, i.e. as a bare nominal or a non-nominative pronominal form. Despite this labeling, there is no way to distinguish the two objects from each other from a formal point of view, and, moreover, what is traditionally labeled as indirect object behaves  more as a "regular" object than the theme (e.g. passivisation preferences).

This is therefore a case where the traditional use of a label is misleading in the universal context of UD and leads to false expectations, also being based more on semantic roles rather than on morphosyntax. Re-applied to Latin and Romance languages, it becomes synonimous of "dative argument", but these so-called "indirect objects" in Latin and filiated Romance languages are plain and simple oblique arguments by definition, since they are expressed in **oblique** (i.e. neither nominative nor accusative) cases, and there is no reason in this framework to label them as anything else than [obl](la-dep/obl), or [obl:arg](la-dep/obl-arg) if one wants to keep the complement-adjunct distinction. Further, they never share the behaviour of "direct objects", especially with regard to passivisation. The class of neutrally-aligned ditransitive verbs is residual in Latin, and has all but disappeared in the contemporary Romance languages.

A better terminological choice for this relation would be "second object" (`sobj`), or to simply dispense with such a distinction and use `obj` for both arguments in the constructions where two arguments are effectively both expressed as prototypical objects are.




### References

* Bennett, Charles Edwin. *Syntax of Early Latin: The Cases*. Vol. II. Boston, MA, USA: Allyn & Bacon, 1914. 
    * Available at `https://archive.org/details/SyntaxOfEarlyLatinV2`
* Haspelmath, Martin. "Ditransitive Constructions in the World's Languages." *Annual Review of Linguistics* 1, no. 1 (January 2015): 19-41.
* Malchukov, Andrej. "Alignment preferences in basic and derived ditransitives." In *Languages Across Boundaries - Studies in Memory of Anna Siewierska*, edited by Dik Bakker and Martin Haspelmath, 263-289. Berlin, Germany: De Gruyter Mouton, 2013.
* Napoli, Maria. "Latin verbs with double accusative and their passivization." *Pallas* (Toulouse, France) Études de linguistique latine I, no. 102 (2016).


<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:58 CET -->
