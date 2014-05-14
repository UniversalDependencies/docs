---
layout: base
title:  'Finnish grammatical relations'
---


## adpos (adposition)

The dependency type `adpos` is used for the adposition in pre- and postpositional phrases. In the Finnish-specific SD scheme, the head of an adpositional phrase is the nominal, not the adposition, so as to analyze adpositional phrases similarly to nominal modifiers without an adposition. (Such nominal modifiers are frequent in Finnish, as cases are often used for the same purpose as adpositions.) To the same end, the type `adpos` is used in combination with the type `nommod`, which is also used for nominal modifiers when no adposition is present (see Section \ref{sec-nommod}).


<!-- fname:adpos.pdf -->
<div class="sd-parse">
Talo sijaitsee mäen takana . \n House is_located hill behind .
nsubj(sijaitsee-2, Talo-1)
nommod(sijaitsee-2, mäen-3)
adpos(mäen-3, takana-4)
punct(sijaitsee-2, .-5)
</div>


## advcl (adverbial clause modifier)

*Adverbial clause modifiers* (`advcl`) are subordinate clauses that are not complements. Also non-complement infinite or temporal clauses(**lauseenvastike*, see for instance \cite[\S 876]{isk*} are marked as `advcl`. If there is a subordinating conjunction present, it is marked with the dependency type `mark` (see Section \ref{sec-mark}).


<!-- fname:advcl.pdf -->
<div class="sd-parse">
Kun äiti tuli kotiin , isä keitti kahvia . \n When mother came home , father made coffee .
mark(tuli-3, Kun-1)
nsubj(tuli-3, äiti-2)
nommod(tuli-3, kotiin-4)
punct(tuli-3, ,-5)
nsubj(keitti-7, isä-6)
advcl(keitti-7, tuli-3)
dobj(keitti-7, kahvia-8)
punct(keitti-7, .-9)
</div>


## advmod (adverb modifier) <a name="sec-advmod"></a>

The dependency type `advmod` is used for *adverb modifiers* of verbs, nominals and adverbs alike.


<!-- fname:advmod_verb.pdf -->
<div class="sd-parse">
Hän käveli kotiin hitaasti . \n He walked home slowly .
nsubj(käveli-2, Hän-1)
nommod(käveli-2, kotiin-3)
advmod(käveli-2, hitaasti-4)
punct(käveli-2, .-5)
</div>



<!-- fname:advmod_noun.pdf -->
<div class="sd-parse">
Minä otin kaapista myös vasaran . \n I took from_closet also hammer .
nsubj(otin-2, Minä-1)
nommod(otin-2, kaapista-3)
dobj(otin-2, vasaran-5)
advmod(vasaran-5, myös-4)
punct(otin-2, .-6)
</div>


## acomp (adjectival complement)

The dependency type `acomp` is used for adjectival complements of verbs, except for predicatives.


## amod (adjectival modifier)

Nouns may take adjectival modifiers, which are marked with the dependency type `amod`. It is also possible for an adjective to take another adjective as a modifier.(*These adjectival modifiers are generally expressed with *-ly* adverbs in English.*


<!-- fname:amod_noun.pdf -->
<div class="sd-parse">
Tien vieressä on suuri kivi . \n Road next_to is large rock .
nommod(on-3, Tien-1)
adpos(Tien-1, vieressä-2)
nsubj(on-3, kivi-5)
amod(kivi-5, suuri-4)
punct(on-3, .-6)
</div>



<!-- fname:amod_adjective.pdf -->
<div class="sd-parse">
poikkeuksellisen suuri kivi \n exceptional(ly) large rock
amod(suuri-2, poikkeuksellisen-1)
amod(kivi-3, suuri-2)
</div>


## appos (apposition) <a name="sec-appos"></a>

An *apposition* (`appos`) is a grammaticalized, paradigmatic addition (usually a noun phrase), which has the same referent as its head word, and the same grammatical function \cite[\S 1059]{isk}. Also structures with a *supporting noun* \cite[\S 567]{isk} are considered appositional. Appositional structures and the closely related *appellation modifiers* are discussed in detail in Section \ref{sec-appos-vs-nn}.


<!-- fname:appos1.pdf -->
<div class="sd-parse">
Professori , Matti Tamminen , luennoi tänään . \n The_professor , Matti Tamminen , lectures today .
appos(Professori-1, Tamminen-4)
punct(Tamminen-4, ,-2)
punct(Tamminen-4, ,-5)
name(Tamminen-4, Matti-3)
nsubj(luennoi-6, Professori-1)
advmod(luennoi-6, tänään-7)
punct(luennoi-6, .-8)
</div>



<!-- fname:appos2.pdf -->
<div class="sd-parse">
Kirjassa Putkinotko on mielenkiintoinen juoni . \n In_the_book Putkinotko is interesting plot .
appos(Kirjassa-1, Putkinotko-2)
nommod(on-3, Kirjassa-1)
nsubj(on-3, juoni-5)
amod(juoni-5, mielenkiintoinen-4)
punct(on-3, .-6)
</div>


## aux (auxiliary) <a name="sec-aux"></a>

In TDT, only a closed list of verbs can act as auxiliaries, including the main modal verbs \cite[\S 1562]{isk} and in addition the verbs *olla* (*to be*) and *aikoa (\emph{to be going to*)}. The full list of auxiliaries in TDT is thus as follows:


+ täytyä (must)
+ pitää (have to)
+ tarvita (need)
+ joutua (have to)
+ voida (be able to, can)
+ saattaa (may)
+ taitaa (be+probably, may)
+ mahtaa (be+probably, may)
+ olla (be)
+ aikoa (be going to)



<!-- fname:aux.pdf -->
<div class="sd-parse">
Hän saattoi lähteä jo . \n He may(impf.) leave already .
nsubj(lähteä-3, Hän-1)
aux(lähteä-3, saattoi-2)
advmod(lähteä-3, jo-4)
punct(lähteä-3, .-5)
</div>


## auxpass (passive auxiliary)

The only *passive auxiliary* (`auxpass`) in Finnish is *olla* (*to be*). An auxiliary is only considered a passive auxiliary if the main verb is in passive, not if only the auxiliary is in passive. In the latter case the auxiliary is marked as a non-passive auxiliary, `aux`. The distinction between the passive voice and the zeroth person is discussed in Section \ref{pass-vs-0th}.


<!-- fname:auxpass1.pdf -->
<div class="sd-parse">
Suunnitelmaan on tehty muutoksia . \n Into_the_plan have_been made changes .
nommod(tehty-3, Suunnitelmaan-1)
auxpass(tehty-3, on-2)
dobj(tehty-3, muutoksia-4)
punct(tehty-3, .-5)
</div>



<!-- fname:auxpass2.pdf -->
<div class="sd-parse">
Suunnitelmaan voidaan tehdä muutoksia . \n Into_the_plan can_be made(1st_inf.) changes .
nommod(tehdä-3, Suunnitelmaan-1)
aux(tehdä-3, voidaan-2)
dobj(tehdä-3, muutoksia-4)
punct(tehdä-3, .-5)
</div>


## cc (coordinating conjunction) <a name="sec-cc"></a>

*Coordinating conjunctions* are marked as dependents of the first coordinated element, and the dependency type used is `cc`. Coordinating conjunctions are a closed class of words, and the main conjunctions are as follows:


+ ja (and)
+ sekä (and)
+ sekä... että (both... and)
+ -kä (attached to negation words, nor)
+ eli (a.k.a.)
+ tai (or)
+ vai (or, in a question context)
+ joko... tai (either... or)
+ mutta (but)
+ vaan (but, in a negative context)


In addition, certain less frequent words or combinations of words are marked as coordinating conjunctions in TDT, namely:


+ \&
+ elikkä (colloquial version of *eli*, a.k.a)
+ ja / tai (and / or)
+ ja toisaalta (and on the other hand)
+ kuin (as/like)
+ kuin myös (as also)
+ kuten (like also)
+ milloin... milloin (when... when)
+ mitä... sitä (the... the)
+ niin... kuin (as well as)
+ niin kuin (like)
+ paitsi että (except that)(*a two-part *preconjunction*, see Section \ref{sec-preconj*}
+ paitsi... myös (not only... but also)
+ saati (let alone)
+ saati että (let alone that)
+ saatikka (let alone)
+ samoin kuin ("the same way as")
+ siinä missä ("as much as")
+ sitä... mitä (the... the)
+ sitä mukaa... mitä (a version of *the... the*)
+ sun muuta (et cetera)
+ toisaalta... ja/mutta toisaalta (on the one hand... and/but on the other hand)
+ toisaalta... toisaalta (on the one hand... on the other hand)
+ vaikka (although)(*also a subordinating conjunction*
+ vuoroin... ja vuoroin (in turn... and in turn)
+ vuoroin... vuoroin (in turn... in turn)
+ yhtä lailla... kuin (+kin) (as well as (also))
+ ym. (etc.)


Coordinating conjunctions that consist of parts separated by coordinated elements are marked so that the first part is marked with the type `preconj` (see Section \ref{sec-preconj}) and the second part with `cc` in the regular fashion. Adjacent parts of conjunctions are joined together with the most general dependency type `dep` (Section \ref{sec-dep}), the rightmost word being the head.


<!-- fname:cc1.pdf -->
<div class="sd-parse">
kirjat , kynät ja viivottimet \n books , pencils and rulers
conj(kirjat-1, kynät-3)
punct(kirjat-1, ,-2)
cc(kirjat-1, ja-4)
conj(kirjat-1, viivottimet-5)
</div>



<!-- fname:cc2.pdf -->
<div class="sd-parse">
toisaalta kynät , toisaalta viivottimet \n on_the_one_hand pencils , on_the_other_hand rulers
preconj(kynät-2, toisaalta-1)
punct(kynät-2, ,-3)
cc(kynät-2, toisaalta-4)
conj(kynät-2, viivottimet-5)
</div>



<!-- fname:cc3.pdf -->
<div class="sd-parse">
kynät ja / tai viivottimet \n pencils and / or rulers
cc(kynät-1, tai-4)
dep(tai-4, /-3)
dep(/-3, ja-2)
conj(kynät-1, viivottimet-5)
</div>


## ccomp (clausal complement) <a name="sec-ccomp"></a>

*Clausal complements* that have a subject different from that of the main clause(*Note that a clausal complement need not have a subject present at all; the clause could be, for instance, passive.* are marked with the dependency type `ccomp`. The governor is most commonly, although not always, the main verb or predicative of the main clause, and the dependent is the main verb or predicative of the dependent clause. The clausal complement can also modify a word other than a verb, most often a noun or pronoun. Most commonly clausal complements are *että*-clauses. Distinguishing different verbal dependents, including different clausal complements, is discussed more closely in Section \ref{sec-verbal}.


<!-- fname:ccomp1.pdf -->
<div class="sd-parse">
Sanoin hänelle , että vesi kiehuu . \n I_said to_him , that water boils .
nommod(Sanoin-1, hänelle-2)
ccomp(Sanoin-1, kiehuu-6)
punct(kiehuu-6, ,-3)
complm(kiehuu-6, että-4)
nsubj(kiehuu-6, vesi-5)
punct(Sanoin-1, .-7)
</div>



<!-- fname:ccomp2.pdf -->
<div class="sd-parse">
Se , että naapurin koira haukkui kovasti , suututti äitiä . \n It , that neighbor's dog barked loudly , made_angry mother .
ccomp(Se-1, haukkui-6)
punct(haukkui-6, ,-2)
punct(haukkui-6, ,-8)
poss(koira-5, naapurin-4)
nsubj(haukkui-6, koira-5)
advmod(haukkui-6, kovasti-7)
nsubj(suututti-9, Se-1)
dobj(suututti-9, äitiä-10)
punct(suututti-9, .-11)
</div>


## compar (comparative)

The dependency type `compar` is used in comparative constructions, most often involving adjectives in the comparative form. The head of the `compar` dependency is the comparative wordform, and the dependent is the compared element. Annotating comparative and superlative structures is described in Section \ref{sec-comparatives}.


<!-- fname:compar.pdf -->
<div class="sd-parse">
parempi kuin eilinen näytelmä \n better than yesterday's(adj.) play
compar(parempi-1, näytelmä-4)
comparator(näytelmä-4, kuin-2)
amod(näytelmä-4, eilinen-3)
</div>


## comparator (comparative conjunction) <a name="sec-comparator"></a>

The *comparative conjunction* (most commonly *kuin*, which corresponds roughly to *than* and *as* in English) is marked with the dependency type `comparator`. The head of the dependency is the element being compared.


<!-- fname:comparator.pdf -->
<div class="sd-parse">
enemmän kuin haluaisin \n more than I_would_want
comparator(enemmän-1, haluaisin-3)
comparator(haluaisin-3, kuin-2)
</div>


## complm (complementizer) <a name="sec-complm"></a>

The *complementizer* (*complm*) appears in most clausal complements, and the head of the dependency is the main verb of the subordinate clause. The only complementizer in Finnish is *että* (*that*).


<!-- fname:complm.pdf -->
<div class="sd-parse">
Sanoin , että hän voi tulla . \n I_said , that he can come .
ccomp(Sanoin-1, tulla-6)
punct(tulla-6, ,-2)
complm(tulla-6, että-3)
nsubj(tulla-6, hän-4)
aux(tulla-6, voi-5)
punct(Sanoin-1, .-7)
</div>


## conj (coordinated element)

The SD scheme marks coordination so that the first coordinated element acts as the head, and the rest of the elements in the coordination, as well as the coordinating conjunction, depend on it. *Coordinated elements* are marked with the dependency type `conj`.


<!-- fname:conj.pdf -->
<div class="sd-parse">
maitoa , leipää ja voita \n milk , bread and butter
punct(maitoa-1, ,-2)
conj(maitoa-1, leipää-3)
cc(maitoa-1, ja-4)
conj(maitoa-1, voita-5)
</div>


## cop (copula)

Copular clauses receive a special treatment in the SD scheme. The predicative acts as the head word of the clause, and the copular verb depends on it using a `cop` (*copula*) dependency. The only copular verb in Finnish is *olla* \cite[\S 891]{isk}. Distinguishing copular structures from other constructs as well as recognizing the subject and the predicative is discussed in Section \ref{sec-copulas}.


<!-- fname:cop.pdf -->
<div class="sd-parse">
Huivi oli punainen . \n The_scarf was red .
nsubj-cop(punainen-3, Huivi-1)
cop(punainen-3, oli-2)
punct(punainen-3, .-4)
</div>


## csubj (clausal subject)

A *clausal subject* (*csubj*) is a clause that acts as the subject of another clause.


<!-- fname:csubj.pdf -->
<div class="sd-parse">
Hänen aikomuksenaan oli mennä ulos . \n His intention(essive) was to_go out .
poss(aikomuksenaan-2, Hänen-1)
nommod(oli-3, aikomuksenaan-2)
csubj(oli-3, mennä-4)
advmod(mennä-4, ulos-5)
punct(oli-3, .-6)
</div>


## csubj-cop (clausal copular subject)

A *clausal copular subject* (`csubj-cop`) is a clause that acts as the subject of another, copular clause. As in all copular clauses, the predicative acts as the head of the clause and hence it is also the governor of the copular subject. The distinction between clauses acting as the copular subject of another clause and so called necessive structures is discussed in Section \ref{sec-necessives}.


<!-- fname:csubj-cop.pdf -->
<div class="sd-parse">
Oli hauskaa käydä teatterissa . \n Was fun to_go to_theatre .
cop(hauskaa-2, Oli-1)
csubj-cop(hauskaa-2, käydä-3)
nommod(käydä-3, teatterissa-4)
punct(hauskaa-2, .-5)
</div>


## dep (dependent) <a name="sec-dep"></a>

The name of the dependency type `dep` stands for *dependent*. It is the most general dependency type in SD, and it is meant to be used when no other, more specific dependency type applies. In TDT, the type `dep` is mostly used in idiomatic two-word expressions. There are also some fixed three-word expressions in the treebank.


<!-- fname:dep.pdf -->
<div class="sd-parse">
Itse asiassa hän tuli jo eilen . \n As_a matter_of_fact he came already yesterday .
dep(asiassa-2, Itse-1)
advmod(tuli-4, asiassa-2)
nsubj(tuli-4, hän-3)
advmod(tuli-4, eilen-6)
advmod(eilen-6, jo-5)
punct(tuli-4, .-7)
</div>


The following expressions are considered idiomatic, and their parts are to be combined with the dependency type `dep` in TDT. Note that this is not intended to be a closed list, but rather a list of examples encountered while annotating TDT. The two-part expressions that fall into the categories of coordinating and subordinating conjunctions are omitted here, and instead listed in Sections \ref{sec-cc} and \ref{sec-mark}, respectively. Due to the idiomatic nature of these two-part expressions, the translations may on occasion not be very natural.

### Adverbs:


+ aika lailla (quite some)
+ aina vain (forever and ever)
+ aivan kuin (just like)
+ alun alkaen (from the beginning, originally)
+ alun perin (originally)
+ ennen aikojaan (prematurely)
+ ennen kaikkea (first and foremost)
+ ennen muuta (first and foremost)
+ ennen pitkää (before long)
+ entä jos (what if)
+ heti perään (right after)
+ hyvissä ajoin (on time, in good time)
+ ihan vaan (only)
+ ikään kuin (kind of)
+ ilman muuta (of course)
+ itse asiassa (as a matter of fact, in fact)
+ ja niin edelleen (and so on)
+ jonkin verran (some, to some extent)
+ jossain määrin, siinä määrin, missä määrin (some, to some extent, to that extent)
+ kaiken aikaa (all the time)
+ kaiken kaikkiaan (all in all)
+ kaikin puolin (in all ways)
+ kerta kaikkiaan (completely, once and for all)
+ loppujen lopuksi (in the end)
+ muun muassa (among others)
+ miten niin (how so)
+ missä sattuu, mistä sattuu, minne sattuu (wherever)
+ mitä jos (what if)
+ niin ikään (also)
+ niin kuin (like)
+ niin sanotusti (so to say)
+ noin vain (just like that)
+ no kun (well)
+ no niin (alright)
+ näillä näkymin (with the current knowledge)
+ näin ollen (this being so)
+ pikku hiljaa (little by little)
+ pilvin pimein (plenty of)
+ piri pintaan (full)
+ päällisin puolin (from the surface of it)
+ saman tien (at once)
+ saman verran (the same amount)
+ sen koom(m)in (since then)
+ sen suuremmin (any more than that)
+ sen kun vaan (go ahead)
+ sen verran (that amount)
+ siellä täällä (here and there)
+ siinä sivussa (on the side)
+ silloin tällöin (every now and then)
+ sillä aikaa (meanwhile)
+ sitä mukaa ("accordingly")
+ sitä paitsi (besides)
+ sivumennen sanoen (by the way)
+ summa summarum (all in all)
+ suuna päänä (headfirst)
+ suurin piirtein (just about)
+ ties vaikka (who knows)
+ toisin sanoen (in other words)
+ tuon tuosta (all the time)
+ tuosta vain (just like that)
+ tämän tästä (all the time)
+ vähän kuin (a bit like)
+ yhtä aikaa (at the same time)
+ yhtä kaikki (all the same)
+ yhtä paljon (the same amount, as much)
+ yleisesti ottaen (generally speaking)


### Adjectives:


+ niin kutsuttu (so called)
+ niin sanottu (so called)


### Adpositions:


+ lukuun ottamatta (disregarding)


### Determiners:


+ itse kukin (each)
+ joka ainoa (each and every one)


### Interjections:


+ ai ai (oh oh, tut tut)
+ ai niin (oh yeah)
+ ei jumalauta (goddammit)
+ ei vitsit (oh dear)
+ hei hei (hey hey, bye bye)
+ hip hip hurraa (hip hip hooray)
+ hitto vie (dammit)
+ jep jep (yep yep)
+ kas kummaa (surprise surprise)
+ mitä vittua (what the fuck)
+ no joo (well yeah)
+ piru vie (dammit)
+ totta kai (of course)
+ voi että (oh dear)
+ voi po(i)jat (oh boy)


### Nominals:


+ missä ikinä (wherever)


### Other: (the POS may vary)


+ mikä tahansa (whichever, whatever)
+ mikä vain (whichever, whatever)


## det (determiner)

There are no definite or indefinite articles in the Finnish language, but there are other determiners (see for instance \cite[\S 1409]{isk}). In TDT, mostly pronouns are marked as *determiners* (`det`), because numerals, which can also be analyzed as determiner-like, are marked as *numeral modifiers* (`num, see Section \ref{sec-num`}), and genitive modifiers, also determiner-like, are marked with `poss` (Section \ref{sec-poss}).


<!-- fname:det.pdf -->
<div class="sd-parse">
Kaikki miehet pudistivat päätään . \n All men shook their_head .
det(miehet-2, Kaikki-1)
nsubj(pudistivat-3, miehet-2)
dobj(pudistivat-3, päätään-4)
punct(pudistivat-3, .-5)
</div>


## dobj (direct object)

The dependency type `dobj` is used for (nominal) direct objects of the verb.


<!-- fname:dobj1.pdf -->
<div class="sd-parse">
Hän sulki oven . \n He closed the_door .
nsubj(sulki-2, Hän-1)
dobj(sulki-2, oven-3)
punct(sulki-2, .-4)
</div>


As in Finnish a passive clause does not have a subject, and what in English would be considered the passive subject, is in Finnish the direct object, the type `nsubjpass` is not used in TDT, but the type `dobj` is used instead.


<!-- fname:dobj2.pdf -->
<div class="sd-parse">
Päätös tehtiin marraskuussa . \n The_decision was_made in_November .
dobj(tehtiin-2, Päätös-1)
nommod(tehtiin-2, marraskuussa-3)
punct(tehtiin-2, .-4)
</div>


Fine distinctions in special cases of subjects, objects and object-cased amount adverbials are discussed in Section \ref{sec-subj-obj}.

## gobj (genitive object) <a name="sec-gobj"></a>

Certain nouns, those which have been directly derived from a verb or otherwise have a verb counterpart, can take an object in Finnish. These objects closely resemble more general genitive modifiers (`poss`, see Section \ref{sec-poss}).


<!-- fname:gobj.pdf -->
<div class="sd-parse">
Perunan viljely oli tuolloin harvinaista . \n Potato growing(N) was then rare .
gobj(viljely-2, Perunan-1)
nsubj-cop(harvinaista-5, viljely-2)
cop(harvinaista-5, oli-3)
advmod(harvinaista-5, tuolloin-4)
punct(harvinaista-5, .-6)
</div>


## gsubj <a name="sec-gsubj"></a>

*Genitive subjects* are subject-like arguments taken by a noun. This is in parallel to genitive objects (`gobj`, see Section \ref{sec-gobj}). %% (*Due to genitive subjects being For further discussion on subjects and objects of nouns, see Section \ref{sec-gsubj-gobj*.


<!-- fname:gsubj.pdf -->
<div class="sd-parse">
maljakon särkyminen \n vase(gen.) breaking
gsubj(särkyminen-2, maljakon-1)
</div>


## iccomp (infinite clausal complement) <a name="sec-iccomp"></a>

The dependency type `iccomp`, which stands for *infinite clausal complement*, is a subtype of `ccomp` (*clausal complement*). It is used for clausal complements where the complement clause has a different subject from that of the governing clause and is infinite, i.e.\ where the verb is an infinitive or a participle. The differences between types of verbal dependents, such as `iccomp`, are thoroughly discussed in Section \ref{sec-verbal}.


<!-- fname:iccomp.pdf -->
<div class="sd-parse">
Sain hänet itkemään . \n I_made him cry .
iccomp(Sain-1, itkemään-3)
nsubj(itkemään-3, hänet-2)
punct(Sain-1, .-4)
</div>


## infmod (infinitive modifier)

The dependency type `infmod` is used for infinitives that modify a nominal or a noun phrase.


<!-- fname:infmod.pdf -->
<div class="sd-parse">
Minulla oli lupa mennä ulos . \n I had permission to_go out .
nommod(oli-2, Minulla-1)
nsubj(oli-2, lupa-3)
infmod(lupa-3, mennä-4)
advmod(mennä-4, ulos-5)
punct(oli-2, .-6)
</div>


## intj (interjection)

*Interjections* are typically exclamations or wordlike entities. They are attached to the main verb or predicative of the sentence with the `intj` dependency type.


<!-- fname:intj1.pdf -->
<div class="sd-parse">
Hei , tule auttamaan ! \n Hey , come to_help !
intj(tule-3, Hei-1)
punct(Hei-1, ,-2)
xcomp(tule-3, auttamaan-4)
punct(tule-3, !-5)
</div>



<!-- fname:intj2.pdf -->
<div class="sd-parse">
Hmm ... Mitähän tuohon sanoisi ? \n Umm ... What to_that to_say ?
intj(sanoisi-5, Hmm-1)
punct(Hmm-1, ...-2)
dobj(sanoisi-5, Mitähän-3)
nommod(sanoisi-5, tuohon-4)
punct(sanoisi-5, ?-6)
</div>


## mark (marker) <a name="sec-mark"></a>

A *marker* (`mark`) is the subordinating conjunction in a non-complement subordinate clause.


<!-- fname:mark.pdf -->
<div class="sd-parse">
Kun tulin kotiin , jätin avaimen pöydälle . \n When I_came home , I_left key on_table .
mark(tulin-2, Kun-1)
nommod(tulin-2, kotiin-3)
punct(tulin-2, ,-4)
advcl(jätin-5, tulin-2)
dobj(jätin-5, avaimen-6)
nommod(jätin-5, pöydälle-7)
punct(jätin-5, .-8)
</div>


The main subordinating conjunctions in TDT are:


+ että (that)
+ jotta (so that)
+ koska (because)
+ kun (when)
+ jos (if)
+ vaikka (even though)
+ kunnes (until)
+ kuin (as, than)


Note that the conjunction *että* (usually) starts a complement clause, in which case it is marked as a complementizer (`complm`, see Section \ref{sec-complm}). On a similar note, the conjunction *kuin* also has several uses. In addition to a subordinating conjunction, it can also serve as an adverb modifier (see Section \ref{sec-advmod}) as well as a comparative conjunction (Section \ref{sec-comparator}).

In addition to the basic subordinating conjunctions, the following words or word combinations can be considered subordinating conjunctions in TDT. Not all of these expressions have a direct counterpart in English, and thus the translations are approximate.


+ ennenkuin (before)
+ jahka (as soon as)
+ jos kohta (even if)
+ kun taas (whereas)
+ kuten (like, as)
+ mikäli (if)
+ mitä nyt (only)
+ muuten (otherwise)
+ niin (so)
+ niinkuin/niinku (like, standard and colloquial version)
+ paitsi (except)
+ paitsi että (except that)
+ paitsi jos (except if)
+ sikäli kuin (if)
+ sillä (because)
+ sitten kun (then when)
+ vähän kuin (a bit like)


## name (multi-word named entity) <a name="sec-name"></a>

Multi-word named entities are marked using the dependency type `name`. The rightmost word of the named entity is considered the head, and the leftmost word is the dependent. If there are more than two words, these are not marked in any way, as the `name` dependency can be expanded automatically if needed.

There are two different cases in which the dependency type appears. If the multi-word named entity does not have an obvious internal syntactic structure, as is the case with for instance names of people (*Matti Virtanen*) or cities (*New York City*), only the `name` dependency is used.

If the named entity has an obvious internal structure, as is often the case in names of books and movies for instance, this structure is marked as well, and the `name` dependency is placed on top of this structure, despite it being extraneous in the tree. In these cases, the head of the internal structure, not the rightmost word of the named entity, is considered to be the true syntactic head. It is possible for the user of the treebank to choose their preferred analysis for these cases according to need, and automatically discard the alternative analysis.


<!-- fname:name.pdf -->
<div class="sd-parse">
Jumalat juhlivat öisin on Donna Tarttin esikoisteos . \n Gods celebrate by_night is Donna Tartt's first_work .
nsubj(juhlivat-2, Jumalat-1)
nommod(juhlivat-2, öisin-3)
name(öisin-3, Jumalat-1)
nsubj-cop(esikoisteos-7, juhlivat-2)
cop(esikoisteos-7, on-4)
punct(esikoisteos-7, .-8)
name(Tarttin-6, Donna-5)
poss(esikoisteos-7, Tarttin-6)
</div>


## neg (negation marker)

In Finnish, negation is marked using the verb *ei*, which is used as an auxiliary. This means that the *negation marker* (`neg`) is a subtype of `aux` (see Section \ref{sec-aux}). The most commonly negated elements are verbs and verb phrases, but occasional exceptions in verbless constructions are allowed.

If a conjunction or adverb has been merged together with *ei*, as in for instance *ettei* (*että+ei*, *that+not*) or *miksei* (*miksi+ei*, *why+not*), then the word is marked as a conjunction or an adverb rather than a negation verb. However, *eikä (and+not)*, when it appears alone and not coordinating another clause or phrase, is still marked as `neg`.


<!-- fname:neg.pdf -->
<div class="sd-parse">
Hän ei sanonut mitään . \n He didn't say anything .
nsubj(sanonut-3, Hän-1)
neg(sanonut-3, ei-2)
dobj(sanonut-3, mitään-4)
punct(sanonut-3, .-5)
</div>


## nn (noun compound modifier) <a name="sec-nn"></a>

The dependency type `nn`, which stands for *noun compound modifier* has two basic uses in the Finnish SD scheme. The first use involves actual compounds. In Finnish, compounds are generally written as a single word, but for instance some compounds involving foreign words or proper names are written separately using a dash, and in written Finnish, erroneously writing compounds as two words is a common mistake. Both of these cases are marked using `nn`.


<!-- fname:nn_foreign.pdf -->
<div class="sd-parse">
Da Vinci -merkkinen luomiväri \n Da Vinci -make eyeshadow
name(Vinci-2, Da-1)
nn(-merkkinen-3, Vinci-2)
amod(luomiväri-4, -merkkinen-3)
</div>



<!-- fname:nn_error.pdf -->
<div class="sd-parse">
Ruoka pöytä notkui herkkuja . \n Food table was_full_of goodies .
nn(pöytä-2, Ruoka-1)
nsubj(notkui-3, pöytä-2)
dobj(notkui-3, herkkuja-4)
punct(notkui-3, .-5)
</div>


The second use of the type `nn` is to mark *appellation modifiers*, which are modifying, non-inflecting noun phrases that generally express profession, rank, position, assignment or other such classifiable property \cite[\S 1062]{isk}. The phenomenon is closely related to that of *apposition*, and the distinction between the two is described in Section \ref{sec-appos-vs-nn}.


<!-- fname:nn_appellation.pdf -->
<div class="sd-parse">
Professori Matti Tamminen pitää puheen . \n Professor Matti Tamminen gives a_speech .
nn(Tamminen-3, Professori-1)
name(Tamminen-3, Matti-2)
nsubj(pitää-4, Tamminen-3)
dobj(pitää-4, puheen-5)
punct(pitää-4, .-6)
</div>


## nommod (nominal modifier) <a name="sec-nommod"></a>

*Nominal modifiers* are inflected nominals which modify most commonly a verb or a noun phrase. They can occur alone or together with an adposition in an adpositional phrase. Both cases are analyzed similarly, as semantically nominal modifiers and adpositional phrases are similar.


<!-- fname:nommod_alone.pdf -->
<div class="sd-parse">
Maljakko oli pöydällä . \n The_vase was on_the_table .
nsubj(oli-2, Maljakko-1)
nommod(oli-2, pöydällä-3)
punct(oli-2, .-4)
</div>



<!-- fname:nommod_adpos.pdf -->
<div class="sd-parse">
Maljakko oli pöydän päällä . \n The_vase was table on_top_of .
nsubj(oli-2, Maljakko-1)
nommod(oli-2, pöydän-3)
adpos(pöydän-3, päällä-4)
punct(oli-2, .-5)
</div>


## nommod-own <a name="sec-omistus"></a>

In Finnish, there is no equivalent for the verb *have*. Rather, *having* is expressed using the verb *olla*, *to be*. For instance, the meaning of the sentence *I have a pen* would be expressed in Finnish by *Minulla on kynä*, literally *"At me is a pen"*. In TDT, these so called *possessive clauses*(*omistuslause* are analyzed as a subtype to *existential clauses*,(*eksistentiaalilause* making the thing had (*kynä* in the previous example) the subject. For more information on special cases of subjects, see Section \ref{sec-subj-obj}.

This kind of an analysis would naturally result in the *haver* being marked as a nominal modifier, *nommod*. However, as `nommod` is a very frequent dependency type that encodes many different meanings, the information that the clause is about having or owning would be lost. Therefore, the Finnish-specific SD scheme introduces a separate dependency type for nominal modifiers that encode owning, `nommod-own`. The governor of the dependency is the verb *olla*, and the dependent is the haver or owner, which is required to be in the *adessive* case. The haver must also be an animate being or a group of animate beings.


<!-- fname:omistus.pdf -->
<div class="sd-parse">
Matilla on uusi auto . \n At_Matti is new car .
nommod-own(on-2, Matilla-1)
nsubj(on-2, auto-4)
amod(auto-4, uusi-3)
punct(on-2, .-5)
</div>


## nsubj (nominal subject)

The dependency type `nsubj` marks nominal subjects of the non-copular clause. For thorough discussion of different types of subjects in Finnish, see Section \ref{sec-subj-obj}.


<!-- fname:nsubj_basic.pdf -->
<div class="sd-parse">
Eeva tuli töistä . \n Eeva came from_work .
nsubj(tuli-2, Eeva-1)
nommod(tuli-2, töistä-3)
punct(tuli-2, .-4)
</div>


## nsubj-cop (nominal copular subject)

The dependency type `nsubj-cop` is used for the nominal subject of a copular clause. The predicative is the head of the copular clause, and also the governor of the `nsubj-cop` dependency. Annotating copular clauses is discussed in Section \ref{sec-copulas}.


<!-- fname:nsubj-cop.pdf -->
<div class="sd-parse">
Matto on jo kuiva . \n The_mat is already dry .
nsubj-cop(kuiva-4, Matto-1)
cop(kuiva-4, on-2)
advmod(kuiva-4, jo-3)
punct(kuiva-4, .-5)
</div>


## num (numeral modifier) <a name="sec-num"></a>

*Numeral modifiers* of a noun or NP, including both cardinal and ordinal numbers, are marked with the `num` dependency type. This dependency type is used also with for instance years and program versions.


<!-- fname:num.pdf -->
<div class="sd-parse">
Laukku painoi 20 kiloa . \n Bag weighed 20 kilograms .
nsubj(painoi-2, Laukku-1)
dobj(painoi-2, kiloa-4)
num(kiloa-4, 20-3)
punct(painoi-2, .-5)
</div>



<!-- fname:num_year.pdf -->
<div class="sd-parse">
Tapasin hänet vuonna 1972 . \n I_met him in_the_year 1972 .
dobj(Tapasin-1, hänet-2)
nommod(Tapasin-1, vuonna-3)
num(vuonna-3, 1972-4)
punct(Tapasin-1, .-5)
</div>


## number (numerical expression)

Numerical expressions consisting of multiple tokens are annotated using the `number` dependency type. The last word of the numerical expression is the governor, and the number dependencies are chained. Special cases of numerical expressions are discussed in Section \ref{sec-numberspecial}.


<!-- fname:number.pdf -->
<div class="sd-parse">
Poikasia on yleensä 3 - 5 . \n Youngsters are usually 3 to 5 .
nsubj-cop(5-6, Poikasia-1)
cop(5-6, on-2)
advmod(5-6, yleensä-3)
number(--5, 3-4)
number(5-6, --5)
punct(5-6, .-7)
</div>


## parataxis (parataxis)

`Parataxis` dependencies mark two different phenomena. Firstly, they are used with certain implicit coordinations. These coordinations are recognized by two factors: there is no coordinating conjunction, and the independent clauses are separated by a colon, semicolon or a dash. As with explicit coordinations, the first element is the governor. Also parenthetical clauses can receive the `parataxis` dependency. If there is a coordinating conjunction present (regardless of punctuation) or if the clauses are separated by merely a comma, the coordination type `conj` is used.


<!-- fname:parataxis_coord.pdf -->
<div class="sd-parse">
Lapset leipoivat piparit ; äiti paistoi ne . \n The_children made the_cookies ; the_mother baked them .
nsubj(leipoivat-2, Lapset-1)
dobj(leipoivat-2, piparit-3)
punct(leipoivat-2, ;-4)
punct(leipoivat-2, .-8)
parataxis(leipoivat-2, paistoi-6)
nsubj(paistoi-6, äiti-5)
dobj(paistoi-6, ne-7)
</div>


`Parataxis` is also used for direct speech. The verb of saying(*or thinking, etc.* acts as the governor, and the main verb or predicative of the utterance is the dependent.


<!-- fname:parataxis_speech.pdf -->
<div class="sd-parse">
Tulen kotiin vasta myöhään , mies sanoi . \n I_will_come home only late , the_man said .
nommod(Tulen-1, kotiin-2)
advmod(Tulen-1, myöhään-4)
advmod(myöhään-4, vasta-3)
punct(Tulen-1, ,-5)
nsubj(sanoi-7, mies-6)
parataxis(sanoi-7, Tulen-1)
punct(sanoi-7, .-8)
</div>


## partmod (participal modifier)

The *participal modifier* (`partmod`) most commonly modifies a noun phrase. Note that the participle(*Also the MA-derivation is treated as a participle in TDT.* can take arguments, for instance a subject, just as any verb.


<!-- fname:partmod_NP.pdf -->
<div class="sd-parse">
Äidin leipoma kakku oli menestys . \n Mother baked_by cake was success .
nsubj(leipoma-2, Äidin-1)
partmod(kakku-3, leipoma-2)
nsubj-cop(menestys-5, kakku-3)
cop(menestys-5, oli-4)
punct(menestys-5, .-6)
</div>



<!-- fname:partmod_NP_2.pdf -->
<div class="sd-parse">
Saadut lahjat ilahduttivat lapsia . \n Received presents made_happy children .
partmod(lahjat-2, Saadut-1)
nsubj(ilahduttivat-3, lahjat-2)
dobj(ilahduttivat-3, lapsia-4)
punct(ilahduttivat-3, .-5)
</div>


Occasionally, participles can modify a verb as well. These uses include cases that are clearly modifiers, as well as some more complement-like situations. Note that in the complement-like cases of `partmod`, the complement is not a clause; otherwise it would be marked as an *infinite clausal complement* (see Section \ref{sec-iccomp}).


<!-- fname:partmod_VP_mod.pdf -->
<div class="sd-parse">
Huolestuneena juoksin hänen luokseen . \n Worried I_ran him to .
partmod(juoksin-2, Huolestuneena-1)
nommod(juoksin-2, hänen-3)
adpos(hänen-3, luokseen-4)
punct(juoksin-2, .-5)
</div>



<!-- fname:partmod_VP_comp.pdf -->
<div class="sd-parse">
Ksylitoli osoittautui kariesta ehkäiseväksi . \n Xylitol turned_out karies preventing .
nsubj(osoittautui-2, Ksylitoli-1)
partmod(osoittautui-2, ehkäiseväksi-4)
dobj(ehkäiseväksi-4, kariesta-3)
punct(osoittautui-2, .-5)
</div>


For more information on different verb-headed constructions as dependents, see Section \ref{sec-verbal}.

## poss (genitive modifier) <a name="sec-poss"></a>

The dependency type `poss` stands for *possessive* in the original SD scheme, but in TDT, it is used for genitive modifiers in general, which in Finnish often but not nearly always imply possession. There are two kinds of genitive modifiers that are not annotated using the general genitive modifier type: *the genitive object*, `gobj` (see Section \ref{sec-gobj}) and *the genitive subject*, `gsubj` (Section \ref{sec-gsubj}).


<!-- fname:poss1.pdf -->
<div class="sd-parse">
Matin penaali jäi kouluun . \n Matti's pencilcase was_left at_school .
poss(penaali-2, Matin-1)
nsubj(jäi-3, penaali-2)
nommod(jäi-3, kouluun-4)
punct(jäi-3, .-5)
</div>



<!-- fname:poss2.pdf -->
<div class="sd-parse">
Autossa on kahden litran moottori . \n In_the_car is two litre's engine .
nommod(on-2, Autossa-1)
nsubj(on-2, moottori-5)
punct(on-2, .-6)
poss(moottori-5, litran-4)
num(litran-4, kahden-3)
</div>


## preconj (preconjunction) <a name="sec-preconj"></a>

*Preconjunction* (`preconj`) marks the first part of those two-part coordinating conjunctions where the two parts are separated by coordinated elements.


<!-- fname:preconj.pdf -->
<div class="sd-parse">
sekä talo että piha \n both house and yard
preconj(talo-2, sekä-1)
cc(talo-2, että-3)
conj(talo-2, piha-4)
</div>


Such two-part coordinating conjunctions in TDT are:


+ joko... tai (either... or)
+ milloin... milloin (when... when)
+ mitä... sitä (the... the)
+ niin... kuin (as well as)
+ paitsi... myös (not only... but also)
+ sekä... että (both... and)
+ sitä... mitä (the... the)
+ sitä mukaa... mitä (a version of *the... the*)
+ toisaalta... ja toisaalta (on the one hand... and on the other hand)
+ toisaalta... mutta toisaalta (on the one hand... but on the other hand)
+ toisaalta... toisaalta (on the one hand... on the other hand)
+ vuoroin... vuoroin (in turn... in turn)
+ yhtä lailla... kuin (+kin) (as much... as also)


## prt (phrasal particle)

*Phrasal particles* (`prt`) are used in connection with *phrasal verbs*,(*partikkeliverbi, "particle verb" in Finnish grammar* where the particle is considered an integral part of the verb expression. The governor of the dependency is the verb, and the dependent is the phrasal particle.


<!-- fname:prt.pdf -->
<div class="sd-parse">
Kävi ilmi , että ehdotus oli hyvä . \n Turned out , that the_suggestion was good .
prt(Kävi-1, ilmi-2)
csubj(Kävi-1, hyvä-7)
punct(hyvä-7, ,-3)
complm(hyvä-7, että-4)
nsubj-cop(hyvä-7, ehdotus-5)
cop(hyvä-7, oli-6)
punct(hyvä-7, .-8)
</div>


Verb particles (see \cite[\S 455, \S 680]{isk}) are the only case where particles are distinguished from adverbs in TDT. This distinction can be made by the following rough rules. A word is a verbal particle if it, together with the verb, forms an expression that has a meaning that differs from the meaning of the verb alone, and if the word cannot be modified by an adverb.

For instance, *laittaa kiinni* (*make closed, close*) is not a phrasal verb, as *kiinni* can be modified.

*Laitoin oven kokonaan kiinni. (I closed the door entirely.)*

In contrast, *ottaa kiinni* (*catch*) is a phrasal verb, as it has a meaning distinct from the verb *ottaa* (*take*), and *kiinni* cannot be modified.

**Poliisi otti rosvon kokonaan kiinni. (*The police caught the robber entirely.)*

The following verb expressions are considered phrasal verbs in TDT:(*The list is not closed, but includes the phrasal verbs encountered in the corpus text. Also, due to the figurative meanings of many of these expressions, the English translations are approximate.*


+ ajaa takaa (chase)
+ antaa periksi (give up)
+ astua voimaan (become valid)
+ jäädä jälkeen (be left behind)
+ jäädä kiinni(*only in the sense "be caught", not in the sense "be stuck into something"* (be caught)
+ jäädä käteen(*The figurative reading only.* ("be left in one's hand", one is left with something)
+ jäädä väliin (be passed(*In the sense "I'll pass."*)
+ kiriä kiinni (close the distance)
+ kuroa kiinni (close the distance)
+ kutsua kokoon (summon)
+ kutsua koolle (summon)
+ käydä ilmi (come up)
+ käydä kateeksi (make jealous)
+ käydä läpi (go through)
+ käydä sääliksi (be pitied)
+ laskea alleen (wet one's pants)
+ lyödä laimin (neglect)
+ lyödä läpi (strike through)
+ nukkua pommiin (oversleep)
+ olla kaupan (be for sale)
+ olla meneillään (be happening)
+ olla tarpeen (be necessary)
+ olla tarvis (be necessary)
+ olla voimassa (be valid)
+ ottaa irti(*in expressions such as "ottaa ilo irti"* ("take sth out", make the most of)
+ ottaa kiinni (catch)
+ ottaa lukuun (take into account)
+ ottaa mukaan (take along)
+ ottaa selvää (find out)
+ ottaa vaari(n) (take advice)
+ ottaa vastaan (receive)
+ painaa päälle (push, stress on)
+ panna merkille (take note)
+ panna täytäntöön (put into action)
+ pidellä kiinni (hold on)
+ pitää kaupan (keep for sale)
+ pitää kiinni (hold on)
+ pitää voimassa (keep valid)
+ pitää yllä (maintain)
+ päästä käsiksi (get one's hands on)
+ päästä läpi (get through)
+ päästää irti (let go)
+ saada aikaan (get sth done)
+ saada aikaiseksi (get sth done)
+ saada kiinni (catch)
+ saada läpi (get sth through)
+ saada vireille (get sth started)
+ tulla mukaan (come along(*In the sense of "follow", not the social sense.*)
+ tulla tarpeen (become necessary)
+ tulla vastaan (come across)
+ tulla voimaan (become valid)


## punct (punctuation)

The dependency type `punct` is used to mark punctuation. The dependent is the punctuation symbol, and the governor is the element which the punctuation symbol delimits. For instance, with coordination, the first coordinated element is the head of all `punct` dependencies in the coordination, and with subordinate clauses, the head of the subordinate clause is the governor of the `punct`.


<!-- fname:punct_coord.pdf -->
<div class="sd-parse">
kerrostaloja , rivitaloja ja omakotitaloja \n blockhouses , rowhouses and one_family_houses
punct(kerrostaloja-1, ,-2)
conj(kerrostaloja-1, rivitaloja-3)
cc(kerrostaloja-1, ja-4)
conj(kerrostaloja-1, omakotitaloja-5)
</div>



<!-- fname:punct_subord.pdf -->
<div class="sd-parse">
Kotona oli hiljaista , kun hän palasi . \n At_home was quiet , when he returned .
advmod(oli-2, Kotona-1)
acomp(oli-2, hiljaista-3)
advcl(oli-2, palasi-7)
punct(palasi-7, ,-4)
punct(oli-2, .-8)
mark(palasi-7, kun-5)
nsubj(palasi-7, hän-6)
</div>


Attaching punctuation correctly is described more closely in Section \ref{sec-punctspecial}.

## quantmod (quantification modifier)

*Quantification modifiers* (`quantmod`) are quantifiers that modify a numerical expression. Certain adverbs(*and ad-adjectives, which are sometimes regarded a separate category from adverbs but treated identically in TDT* and few adjectives are allowed as quantifiers. Note that adverbs that describe the writer's attitude towards the quantity, such as *vain* (*only*), are not considered quantification modifiers, but regular adverb modifiers, although they modify the number. Some examples of words that can act as quantification modifiers include *noin* (*about*), vähintään (*at least*), *lähes* (*almost*) and *yli* (*over*).


<!-- fname:quantmod.pdf -->
<div class="sd-parse">
Alue oli suuruudeltaan noin kymmenen neliökilometriä . \n The_area was of_its_size about ten square_kilometres .
nsubj-cop(neliökilometriä-6, Alue-1)
cop(neliökilometriä-6, oli-2)
nommod(neliökilometriä-6, suuruudeltaan-3)
quantmod(kymmenen-5, noin-4)
num(neliökilometriä-6, kymmenen-5)
punct(neliökilometriä-6, .-7)
</div>


## rcmod (relative clause modifier)

A *relative clause modifier* (`rcmod`) marks relative clauses. The governor is the phrase or clause modified, most often a noun phrase but occasionally a full clause as well. The dependent is the main predicate of the relative clause.


<!-- fname:rcmod_NP.pdf -->
<div class="sd-parse">
Mies , jonka hän oli nähnyt eilen , oli taas ovella . \n The_man , whom he had seen yesterday , was again at_the_door .
rcmod(Mies-1, nähnyt-6)
punct(nähnyt-6, ,-2)
rel(nähnyt-6, jonka-3)
nsubj(nähnyt-6, hän-4)
aux(nähnyt-6, oli-5)
advmod(nähnyt-6, eilen-7)
punct(nähnyt-6, ,-8)
nsubj(oli-9, Mies-1)
advmod(oli-9, taas-10)
nommod(oli-9, ovella-11)
punct(oli-9, .-12)
</div>



<!-- fname:rcmod_clause.pdf -->
<div class="sd-parse">
Ovi kolahti auki , mikä säikäytti lapsen . \n The_door clanked open , which scared the_child .
nsubj(kolahti-2, Ovi-1)
advmod(kolahti-2, auki-3)
rcmod(kolahti-2, säikäytti-6)
punct(säikäytti-6, ,-4)
rel(säikäytti-6, mikä-5)
dobj(säikäytti-6, lapsen-7)
punct(kolahti-2, .-8)
</div>


## rel (relativizer) <a name="sec-rel"></a>

The *relativizer* (`rel`) is the head of the phrase containing the relative pronoun (or other relative word). Most often, but not always, this is the relative word itself. The governor of the dependency is the main predicate of the relative clause. Annotation of relative clauses is more closely examined in Section \ref{sec-relclauses}.


<!-- fname:rel_basic.pdf -->
<div class="sd-parse">
Auto , joka ohitti meidät , ajoi hyvin nopeasti . \n The_car , which passed us , drove very fast .
rcmod(Auto-1, ohitti-4)
punct(ohitti-4, ,-2)
rel(ohitti-4, joka-3)
dobj(ohitti-4, meidät-5)
punct(ohitti-4, ,-6)
nsubj(ajoi-7, Auto-1)
advmod(ajoi-7, nopeasti-9)
advmod(nopeasti-9, hyvin-8)
punct(ajoi-7, .-10)
</div>



<!-- fname:rel_phrase.pdf -->
<div class="sd-parse">
Nainen , jonka auto hajosi , pyysi apuamme . \n The_lady , whose car broke , asked_for our_help .
rcmod(Nainen-1, hajosi-5)
punct(hajosi-5, ,-2)
poss(auto-4, jonka-3)
rel(hajosi-5, auto-4)
punct(hajosi-5, ,-6)
nsubj(pyysi-7, Nainen-1)
dobj(pyysi-7, apuamme-8)
punct(pyysi-7, .-9)
</div>


## voc (vocative)

The dependency type `voc` is used for *vocatives*, that is, expressions where someone is being addressed. The governor of the dependency is the main predicate of the clause where the addressing occurs.


<!-- fname:voc.pdf -->
<div class="sd-parse">
Pekka , tulisitko tänne ? \n Pekka , would_you_come here ?
voc(tulisitko-3, Pekka-1)
punct(Pekka-1, ,-2)
advmod(tulisitko-3, tänne-4)
punct(tulisitko-3, ?-5)
</div>


## xcomp (open clausal complement) <a name="sec-xcomp"></a>

The dependency type `xcomp` is reserved for clausal complements which have an external subject, that is, whose subject is shared with the complemented verb (phenomenon also known as subject control). Note that the subject of the complementing clause must be the *subject* of the complemented verb, not any other sentence element.


<!-- fname:xcomp.pdf -->
<div class="sd-parse">
Hän alkoi hakata halkoja . \n He started chopping the_wood .
nsubj(alkoi-2, Hän-1)
xcomp(alkoi-2, hakata-3)
dobj(hakata-3, halkoja-4)
punct(alkoi-2, .-5)
</div>


Many of the complements with an external subject resemble cases that are analyzed as main verbs with auxiliaries. Both auxiliaries and `xcomp` complements share their subject with another verb, but only a closed list of verbs are analyzed as auxiliaries in TDT (see Section \ref{sec-aux}). Note also that in auxiliary cases the second verb is the governor, whereas with `xcomp` the first verb becomes governor (unless the word order is inverse).

## The null token <a name="sec-null"></a>

The *null token* is not a dependency type, but an extra token that is added into the sentence to represent a missing token. A null token is only added when the missing token is required in order to construct an analysis, that is, when it governs another token that is present in the sentence. Thus, for instance copulas and auxiliaries are not represented by null tokens when absent, because if they are absent, their dependents are as well. The null token is most commonly, but not always, a verb.

There are two basic uses for the null token in TDT. First, it is used in *fragments*: sentences or clauses with an omitted main predicate.


<!-- fname:null_fragment.pdf -->
<div class="sd-parse">
Presidentti *null* Kiinaan solmimaan sopimusta . \n The_president *null* to_China to_make a_deal .
nsubj(*null*-2, Presidentti-1)
nommod(*null*-2, Kiinaan-3)
xcomp(*null*-2, solmimaan-4)
dobj(solmimaan-4, sopimusta-5)
punct(*null*-2, .-6)
</div>


Second, the null token is used in *gapping*, a type of *ellipsis* where a head word has been omitted to avoid repetition. Gapping is the only type of ellipsis marked with null tokens, as according to the definition of a null token, only words required for constructing an analysis should be represented by one.


<!-- fname:null_ellipsis.pdf -->
<div class="sd-parse">
Matti tilasi jäätelön ja Pekka *null* leivoksen . \n Matti ordered ice_cream and Pekka *null* cake .
nsubj(tilasi-2, Matti-1)
dobj(tilasi-2, jäätelön-3)
cc(tilasi-2, ja-4)
conj(tilasi-2, *null*-6)
nsubj(*null*-6, Pekka-5)
dobj(*null*-6, leivoksen-7)
punct(tilasi-2, .-8)
</div>


