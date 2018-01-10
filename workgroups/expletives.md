---
layout: base
title:  'Working Group on Expletives'
udver: '2'
---

# Working Group on Expletives

As a tentative definition of expletives, we can characterize them as pro-forms (typically third person pronouns or locative pro-adverbs) that occur in core argument positions but are non-referential (and therefore not assigned a semantic role). There are two main issues regarding expletives in UD:

1. In which constructions are expletives found?
2. Should expletives be treated as core arguments or not?

Below we first review the range of constructions where expletives have been claimed to exist and then discuss the relation between expletives and core arguments. 

## Subject Expletives

Expletives in subject position have traditionally been postulated in (at least) three types of constructions:

1. Weather verbs and more generally "intrinsically impersonal verbs"
2. Existential sentences
3. Extraposition of clausal subjects

### Weather verbs (and more generally "intrinsically impersonal verbs")
Weather verbs are 0-place predicates like "rain" and "snow", which typically take an expletive pronoun as their subject in languages that do not allow pro-drop. In this case, the predicate never assigns a semantic role to its subject and there is no other potential argument in the clause. The Swedish and Norwegian UD treebanks currently use `expl` for the subject of weather verbs, while Dutch uses `nsubj`.

~~~ sdparse
det regnar \n it rains
expl(regnar, det)
~~~
~~~ sdparse
het regent \n it rains
nsubj(regent, het)
~~~

"Intrinsically impersonal verbs" encompasses a more general category of verbs, not only 0-place predicates but also 1-place predicates, that typically take an expletive pronoun as their subject, without any parallelism to a construction with a full subject. This is the case in French for the deficient verb "falloir" (be necessary), which has one semantic argument, realized as a direct object. In the current French treebanks, all preverbal explective "il" clitics are treated as plain subjects (nsubj).

~~~ sdparse
il faut 3 nouveaux recrutements \n it is-necessary 3 new recruitments
nsubj(faut, il)
obj(faut,recrutements)
~~~

~~~ sdparse
* 3 nouveaux recrutements faut
~~~

**Joakim:** Could you add the dependencies to this example? In particular, what relation is assigned to "recrutements"?

It seems that Dutch has a few comparable cases as well (i.e. non-wheather verbs that nevertheless can only have ´het' as subject:

~~~ sdparse
het ontbreekt aan een langere speler \n it lacks of a longer player
nsubj(ontbreekt,het)
obl(ontbreekt,speler)
~~~
~~~ sdparse
het gaat hen voor de wind \n it goes them for the wind (well)
nsubj(gaat,het)
iobj(gaat,hen)
obl(gaat,wind)
~~~
~~~ sdparse
nog slechter verging het Ehlvest
nsubj(slechter,het)
iobj(slechter,Ehlvest)
cop(slechter,verging)
~~~

Finnish is a partial pro-drop language, where subject pronouns can be dropped in the first and second person, but not the third. However, weather verbs do not take overt subjects except optionally in spoken language.

~~~ sdparse
nyt (se) taas sataa \n now (it) again rains
~~~

The Finnish-FTB treebank regularly annotates "se" as `expl`, but the original Finnish treebank consistently uses `nsubj`.

### Existential sentences

Existential sentences (sometimes called presentation sentences) are sentences that involve an intransitive verb and an indefinite noun phrase that is interpreted as the logical subject of the verb but does not occur in the canonical subject position, which is instead filled by an expletive. 

~~~ sdparse
en katt sitter på mattan \n a cat sits on the mat
nsubj(sitter, katt)
obl(sitter, mattan)
~~~
~~~ sdparse
det sitter en katt på mattan \n it sits a cat on the mat
expl(sitter, det)
nsubj(sitter, katt)
obl(sitter, mattan)
~~~

The Swedish and Norwegian UD treebanks treat the dummy pronoun as an expletive and analyzes the indefinite noun phrase as `nsubj` to capture the parallelism to the simple intransitive sentence. However, there are good arguments that the indefinite noun phrase syntactically behaves as an object in the second sentence. The Dutch UD treebank also treats the indefinite noun phrase as `nsubj` (and it seems to behave like a subject in Dutch) but analyzes the putative expletive as `advmod` (which is a pronominal adverb similar to English "there"). 

~~~ sdparse
er is overal grote armoede \n there is everywhere great poverty
advmod(is,er)
nsubj(is,armoede)
~~~
~~~ sdparse
er bestaan echter allerlei hindernissen \n there exist however various obstacles
advmod(bestaan,er)
nsubj(bestaan,hindernissen)
~~~
~~~ sdparse
er vindt regelmatig overleg plaats \n there takes regularly meetings place
advmod(vindt,er)
nsubj(vindt,overleg)
compound:prt(vindt,plaats)
~~~
~~~ sdparse
er ontstaan overal nieuwe diensten \n there appear everywhere new services
advmod(ontstaan,er)
nsubj(ontstaan,diensten)
~~~

For French, the traditionally called "impersonal construction" encompasses various cases of extraposed subjects, including indefinite noun phrases, possible for some intransitive verbs (those taking "être" as auxiliary, but not only). There too are arguments to view the postverbal indefinite NP as a direct object (in particular, it is pronominalized using the quantitative "en" clitic). 

~~~ sdparse
Trois candidats sont arrivés \n Three candidates are arrived
~~~
~~~ sdparse
Il est arrivé 3 candidats \n It is arrived 3 candidates
~~~
~~~ sdparse
Il en est arrivé trois \n It of-it is arrived three
~~~


~~~ sdparse
Quelques personnes nageaient dans le bassin quand l'alarme retentit \n A-few people were-swimming in the pool when the alarm sounded
~~~
~~~ sdparse
Il nageait quelques personnes dans le bassin ... \n it was-swimming a-few people in the pool ...
~~~

Finnish, despite being partial pro-drop, have obligatory expletives in constructions similar to these, often explained by reference to the topic-comment structure of the language. Here are some relevant examples:

~~~ sdparse
Lapsia leikkii kadulla \n children play in-street
~~~
~~~ sdparse
Kadulla leikkii lapsia \n in-street play children
~~~
~~~ sdparse
*Leikkii lapsia kadulla \n play children in-street
~~~
~~~ sdparse
Sitä leikkii lapsia kadulla \n EXP play children in-street
~~~

Again, Finnish-FTB uses `expl` but the original Finnish treebank does not.
__marie__: is there subject-verb agreement in these cases?

### Impersonal passive and medio-passive

French passives or medio-passives can occur with a pre-nominal subject (interpreted as the canonical object), or with a direct object and expletive "il" subject:

~~~ sdparse
Plus de 100 000 exemplaires ont été vendus \n More than 100 000 copies have been sold
~~~
~~~ sdparse
Il a été vendu plus de 100 000 exemplaires \ It has been sold more than 100 000 exemplaires
~~~
~~~ sdparse
Plus de 100 000 exemplaires se sont vendus \n More than 100 000 copies REFL are sold
~~~
~~~ sdparse
Il s'est vendu plus de 100 000 exemplaires \ It REFL is sold more than 100 000 exemplaires
~~~

Italian marks impersonal active and passive sentences by subtypes of the `expl` relation, `expl:impers` and `expl:pass`
~~~ sdparse
Ci si viene per riposarsi, curarsi, sarebbe quindi assurdo non approfittarne \n One comes to rest, to take care of oneself, so it would be absurd not to take advantage of it
expl:impers(viene,si)
~~~
~~~ sdparse
Se i cavalli ci sono si devono vedere \n If the horses are there, they must be seen
expl:pass(vedere, si)
~~~


### Extraposition of clausal subjects
Extraposition of clausal subjects exhibit a similar parallelism to simple clausal subjects:

~~~ sdparse
att hon kom förvånade mig \n that she came surprised me
csubj(förvånade, kom)
obj(förvånade, mig)
~~~
~~~ sdparse
det förvånade mig att hon kom \n it surprised me that she came
expl(förvånade, det)
csubj(förvånade, kom)
obj(förvånade, mig)
~~~

Swedish, Norwegian and Dutch all follow English in using `expl` for the expletive pronoun and `csubj` for the clause. English uses the same type of annotation for expletives with raising verbs, even though they have no parallel construction without the expletive.

~~~ sdparse
it seems that she came
csubj(seems, came)
expl(seems, it)
~~~
~~~ sdparse
* that she came seems
~~~

~~~ sdparse
het lukte Field om twee andere fabrikanten te vinden \n it succeeded Field to find 2 other manufacturers
csubj(lukte,vinden)
expl(lukte,het)
~~~

For French, the extraposition of a (finite or infinitival) subject clause occurs both impersonal construction (with an "il" nominative clitic) and in the more general right dislocation (with a "ça" pronoun, not necessarily subject, see below)

####French right dislocation of a subject clause ("il" not possible):
~~~ sdparse
Qu' elle vienne m' a surpris. \n The she came me-accusative has surprised.
~~~
~~~ sdparse
ça(*il) m' a surpris qu' elle vienne. \n it me-accusative has surprised that she came.
~~~

####French impersonal construction for a clausal subject (no expl for these cases in French treebanks):
~~~ sdparse
Il arrive que des candidats soient interrogés \n It occurs that some candidates be interrogated
nsubj(arrive, Il)
ccomp(arrive, interrogés)
~~~
~~~ sdparse
Il m' arrive parfois de dormir tard \n It me-dative occurs sometimes to sleep late
nsubj(arrive, Il)
xcomp(arrive, dormir)
~~~

In French the impersonal construction with clausal subject is particularly frequent for the subject of a copula+adjective construction:

~~~ sdparse
Il est parfois difficile de rester calme \n It is sometimes difficult to stay calm
~~~

~~~ sdparse
Il est possible que Paul soit déjà parti \n It is possible that Paul be already gone
~~~

The same type of construction is found in Finnish, but only Finnish-FTB uses `expl`. In the original Finnish treebank the expletive appears to be labeled `nsubj` and the clause `ccomp`. Perhaps this is a competing analysis.

## Object Expletives

Expletives in object position have been assumed in (at least) three types of constructions:

1. Extraposed complement clauses
2. Inherent reflexives
3. Verbs with an inherent expletive (object) argument

Extraposed complement clauses, with or without a corresponding expletive pronoun, typically occur together with a predicative `xcomp` as in the following examples.

~~~ sdparse
jag fann förvånande att hon kom \n I found surprising that she came
nsubj(fann, jag)
xcomp(fann, förvånande)
ccomp(fann, kom)
~~~
~~~ sdparse
jag fann det förvånande att hon kom \n I found it surprising that she came
nsubj(fann, jag)
expl(fann, det)
xcomp(fann, förvånande)
ccomp(fann, kom)
~~~

Inherent reflexives are verbs that can only be used with a reflexive pronoun in object position and do not occur as transitive verbs with ordinary objects. UD currently assumes that the reflexive pronoun in this case is non-referental and therefore should be analysed as an expletive.

~~~ sdparse
hon kände sig sjuk \n she felt herself sick
nsubj(kände, hon)
expl(kände, sig)
~~~
~~~ sdparse
*hon kände honom sjuk \n she felt him sick
~~~

Pullum and Postal argue that English has expletives in subcategorized positions (not counting the subject). They present evidence for expletive objects and expletive arguments of prepositions. Dutch has at least expletive objects as well (but does not currently mark these as such):
~~~ sdparse
Agalev doet het goed  \n Agalev does (it) well
nsubj(doet,Agalev)
obj(doet,het)
advmod(doet,goed)
~~~
~~~ sdparse
Men heeft het over hetzelfde \n One has it about the same -- One talks about the same
~~~
~~~ sdparse
Göring moest het opnemen tegen een groep Sopwidthjagers \n Göring had it compete agains a group hunters -- Göring had to battle with a group of hunters
~~~
~~~ sdparse
De brug begaf het \n The bridge collapsed it
~~~

## Right dislocation (≠ expletive?)

For French, cases with an extraposed complement clause and a in-situ "ça" pronoun are better and more generally described as right dislocation, of either a subject or a complement clause. (marie: I need to read some litterature here, I think there are several cases to distinguish, with or without prosodic pauses, but I don't see arguments to treat these cases with an expletive rather than the dislocated relation. 

~~~ sdparse
Qu'il parte m'a peiné \n That he left me-accusative has hurt
~~~

~~~ sdparse
ça m'a peiné qu'il parte \n It me-accusative has hurt that he left
~~~

~~~ sdparse
J'ai trouvé surprenant qu'il parte \n I found surprising that he left
~~~

~~~ sdparse
J'ai trouvé ça surprenant qu'il parte \n I found it surprising that he left
~~~

More generally, informal French allows dislocating any kind of argument, with appropriate clitics.

~~~ sdparse
Il les a cassées, ses lunettes, Paul \n He them-fem-acc has broken, his sunglasses, Paul
~~~


## Clitic doubling

For some languages, like Spanish or Greek, clitic pronouns can cooccur with the full noun phrase they refer to.

~~~ sdparse
Lo vimos a Juan \n Him we-saw (a) Juan
~~~

In French, this is possible for the nominative clitic, but in direct interrogative clauses only:
~~~ sdparse
Jean vient-il ? \n John comes-he ?
~~~



## Expletives and Core Arguments

Expletives typically behave like core arguments syntactically in that they satisfy many of the standard tests for subjecthood and objecthood. In some constructions (weather verbs, inherent reflexives), they are the only candidate for the given core argument relation and differ from a normal argument only in being non-referential and lacking a semantic role. In other constructions (existentials, extraposition of subject/complement clauses), the core argument properties are split between the expletive, which often satisfies most of the formal criteria, and a referential phrase that is assigned the semantic role normally associated with the core argument relation.

There are at least three possible ways of treating expletives in relation to core arguments:

1. Treat expletives as distinct from core arguments. In constructions where the expletive is the sole candidate for a given core argument relation, that relation is not used at all. In constructions where the core argument properties are split, the referential phrase is assigned the core argument relation. This is the approach taken in the current UD taxonomy and it implies that `nsubj` and `obj` are restricted to referential subjects and object, respectively. Thus, in existential sentences, the expletive is labeled `expl` and the logical subject is labeled `nsubj`. A modified version of this scheme would be to introduce subtypes of `expl` to indicate whether the expletive occurs in subject or object position.
2. Treat expletives as a subtype of core arguments but allow another referential phrase to instantiate the same core argument relation. In existential constructions, the expletive would then be assigned the relation `nsubj:expl` and the logical subject would still be labeled `nsubj`.
3. Treat expletives as a subtype of core argments and do not allow another referential phrase to instantiate the same core argument relation. In existential constructions, if the expletive is labeled `nsubj:expl`, the logical subject could no longer be labeled `nsubj`.

The following table summarizes the different relations that would be used for different constructions in the three different schemes.

| Construction | Scheme | Expletive | Referential |
| Weather verb | 1 | expl (expl:nsubj) | |
|  | 2 | nsubj:expl | |
|  | 3 | nsubj:expl | |
| Existential sentence | 1 | expl (expl:nsubj) | nsubj |
|  | 2 | nsubj:expl | nsubj |
|  | 3 | nsubj:expl | obj? |
| Extraposed clausal subject | 1 | expl (expl:nsubj) | csubj |
|  | 2 | nsubj:expl | csubj |
|  | 3 | nsubj:expl | ccomp |
| Extraposed complement clause | 1 | expl (expl:obj) | ccomp |
|  | 2 | obj:expl | ccomp |
|  | 3 | obj:expl | ccomp |
| Inherent reflexive | 1 | expl (expl:obj) | |
|  | 2 | obj:expl | |
|  | 3 | obj:expl | |


## Expletives in UD v2.1 treebanks

Out of 102 treebanks from 60 languages in UD version 2.1: 39 treebanks contain expletives (the expl relation)

Note: Czech is not listed since Czech ONLY uses expl with language-specific extension, expl:pv and expl:pass, and not expl as such (bug in extraction code here?). Please see:

  * http://universaldependencies.org/treebanks/cs/index.html#reflexive-verbs
  * http://universaldependencies.org/cs/dep/expl-pv.html
  * http://universaldependencies.org/cs/dep/expl-pass.html


The 39 treebanks are from the following 20 languages:
 * Arabic (only in the PUD treebank, influence from English?)
 * Bulgarian
 * Croatian
 * Danish
 * Dutch
 * English
 * Finnish (?)
 * French
 * Galician
 * German
 * Greek
 * Italian
 * Norwegian
 * Portuguese
 * Romanian
 * Russian (?)
 * Sanskrit (? only 1 instance)
 * Slovenian
 * Swedish
 * Ukrainian
 
 
[Statistics per treebank](http://folk.uio.no/liljao/expl-stats_v2.1.txt) (absolute expletive counts, total, and proportion of expletives out of all tokens)

## Examples and explanations

(Translations are provided by Google translate in many cases, feel free to correct if you know the language in question!)

### Arabic

8 occurrences of `expl` in UD Arabic-PUD. Not clear whether they are errors or not (under investigation).

### Bulgarian

There seem to be two cases, reflexive verbs and doubled clitics.

~~~ conllu
# visual-style	4	bgColor:lightgreen
# hittoken:	3	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	4	expl	_	_SpaceAfter=No
1	Аз	аз	PRON	Ppe-os1	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
2	тебе	аз	PRON	Ppelas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	4	obj	_	_
3	те	аз	PRON	Ppetas2	Case=Acc|Number=Sing|Person=2|PronType=Prs	4	expl	_	_
4	слушам	слушам	VERB	Vpitf-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
5	.	.	PUNCT	punct	_	4	punct	_	_ 
~~~ 

 * Аз тебе те слушам ("I hear you")

# visual-style	5	bgColor:lightgreen
# hittoken:	5	шегувам	шегувам-се	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	SpaceAfter=No
1	Каза	кажа	VERB	Vpptf-o3s	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	да	да	AUX	Tx	_	5	aux	_	_
3	не	не	PART	Tn	Polarity=Neg	5	advmod	_	_
4	се	се	PRON	Ppxta	Case=Acc|PronType=Prs|Reflex=Yes	5	expl	_	_
5	шегувам	шегувам-се	VERB	Vpiif-r1s	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	ccomp	_	SpaceAfter=No
6	.	.	PUNCT	punct	_	1	punct	_	_

 * Каза да не се шегувам  ("He told me not to joke")

### Croatian
  * Seb Bytyci, izvršni ravnatelj Instituta za balkansku politiku, slaže se s time. (expletive "se" is a reflexive pronoun, transl. "Seb Bytyci, executive director of the Institute for Balkan Policy, agrees.")
  
### Czech

#### Weather verbs
  * podívej se, ono (= personal pronoun, 3rd pers. sg. nom.) prší. Now: nsubj(prší,ono) or discourse(prší,ono) (no example found in PDT, depends on original annotation of ono in PDT)

#### Extraposition of Nominal Subjects
  * 'tam' (= there) always referential- Again, pers. pronoun (this time inflected, agreement with nsubj) can be used: Ona je ta kočka na podložce (a ne na křesle)' (she-nom.sg.fem. is that cat-nom.sg.fem on a-mat (and not on chair)'. Now: discourse (cannot be nsubj, since that would be 2nd subject).
  
#### Extraposition of Clausal Subjects
  * Czech is similar to Polish. It does not necessarily imply "extraposition" (which is not really an interesting notion in an FWO language). 
  * Examples: To, že je kočka na podložce, mě překvapuje (i.e. like the Polish example above), from PDT (and current deprel in UD): To.nsubj, že byl.acl díky OSN v New Yorku, bylo samozřejmě velkou výhodou.root . ('It.nsubj, that he-was.acl thanks-to UN in New York, was of-course big advantage.root .'); výhodou.root je to.nsubj, že šifrovat může.acl kdokoli ('advantage.root.case=instrumental is it(that).nsubj, that encrypt.xcomp.inf can.acl anyone'. As Adam says, it is too complicated to see why to use "to" here (discourse/information structure reasons, perhaps), since it is always syntactically OK to leave it out (perhaps an argument for making it "expl," because then the "acl" would be "csubj" with or without "to": Je evidentní.root, že lékař porušil.csubj řád ('Is clear.root, that doctor broke.csubj rules') as well as (after this change to "expl"): Je evidentní.root to.expl, že lékař porušil.csubj řád).

#### Raising Verbs
  * (a) ?[that the cat is on the mat]Y seems
  * (b) [it]X seems [that the cat is on the mat]Y
  * (c) [it]X seems [like the cat is on the mat]Y
  * (d) [the cat]Y1 seems [to be on the mat]Y2
  * In theory, (4a) is possible due to FWO, but no expl here. (4b) does not require it in Czech, but the personal pronoun in neuter ('ono') can be used here (even though not syntactically required) and perhaps expl would be the appropriate reprel. (4c) would best be exemplified with ono to vypadá, jako by kočka byla na rohožce) 'it.expl it.nsubj looks, like would cat were.advcl on the-mat'), where 'ono' (pers. pron 3rd pers neuter) can be used (not required) and it would best get expl, since 'to' (dem. pronoun 3rd pers. neuter, agreement with verb) is nsubj. Currently, the advcl (dependent of the verb 'looks') might actually now be getting xcomp (since in PDT, it is marked as complementation).

### Danish
  * Så skal der rafles om husholdningspengene. (expletive "der", transl. "So, there will be discussions about household money")

### Dutch
  * Overigens is het ook niet uitgesloten, dat het stichtingsbestuur van Sparta zelf ook wijzigingen zal ondergaan. (expletive "het", transl. "Moreover, it is also not excluded that the foundation of Sparta itself will undergo changes.")

### English
  * There has been talk that the night curfew might be implemented again. (expletive "there")

### Finnish

According to Holmberg and Nikanne (2002), Finnish has obligatory expletives in at least existential and extraposition constructions. However, the `expl` relation is only used in Finnish-FTB.

* Se oli paska homma, että Jyrki loppu. (Translation: It was a shit thing for Jyrki to end.)

~~~ conllu
# visual-style	1	bgColor:lightgreen
# hittoken:	1	Se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	8	expl	_	Alt=8_expl|Missed-Rel=phrm
1	Se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	8	expl	_	Alt=8_expl|Missed-Rel=phrm
2	oli	olla	AUX	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	_	_
3	paska	paska	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	4	amod	_	_
4	homma	homma	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	_
6	että	että	SCONJ	Pcle,CS	_	8	mark	_	_
7	Jyrki	jyrki	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	8	nsubj	_	_
8	loppu	loppua	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	csubj:cop	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~

### French

French exhibits all of the prototypical constructions including some special variants (as described above). The use of the `expl` relation does not seem quite consistent across treebanks. Here is a rough characterization:

* UD_French: The `expl` relation is used nominative clitic doubling (in interrogatives), frozen clitics in verbal MWE ( e.g. _l' emporter_ (to win)), _s' en aller_ (to leave)), cases of euphonic optional additions ("l'" in "l'on", "l'une"). extraposition (or right dislocation). It is also used for the word "que" used in the restrictive construction (ne V que). In addition, it is used for a few left or right dislocation cases where an argument is realized both by a full noun phrase and a (clitic) pronoun (as an alternative to using `dislocated`).  However, it does not appear to be used for impersonal subjects (non referential "il"). It is also massively used for the "se" reflexive pronoun, but the annotation for the "se" clitic uses both `expl` and `obj` visibly without consistency, for the various cases (inherent reflexive, true reflexive or reciprocal, medio-passive marker ...).
* UD_French-Sequoia: The `expl` relation is used primarily for inherent reflexives, se medio passive marker (relyong on manual classification of "se" clitics), nominative clitic doubling (in interrogatives), frozen clitics in verbal MWE ( e.g. _l' emporter_ (to win)), _s' en aller_ (to leave)). It is not used for impersonal subjects.
* UD_French-ParTUT: The `expl` relation is used for impersonal subjects (when alternating with non impersonal construction) and inherent reflexives.
* UD_French-Spoken: The `expl` relation is not used at all.
* UD_French-PUD: The `expl` relation seems to be overused and is found also in cases where a pronoun is clearly referential (perhaps as a result of automatic parsing without full manual validation).

### Galician
The `expl` relation is only used in Galician-TreeGal, never in Galician. The most frequen case involves the clitic -se in what I think are inherently reflexive verbs. 

~~~ conllu
# visual-style	4	bgColor:lightgreen
# hittoken:	5	se	se	PRON	Rao3aa	Clitic=Yes|Gender=Com|Person=3|PronType=Prs	4	expl	_	_
1	A	a	ADP	P	AdpType=Prep	3	case	_	_
2	as	o	DET	Ddfp	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
3	cinco	cinco	NUM	Ncnfp	Gender=Fem|Number=Plur|NumType=Card	4	obl	_	_
4	remata	rematar	VERB	Vpi30s	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	se	se	PRON	Rao3aa	Clitic=Yes|Gender=Com|Person=3|PronType=Prs	4	expl	_	_
6	de	de	ADP	P	AdpType=Prep	7	mark	_	_
7	traballar	traballar	VERB	V0f000	VerbForm=Inf	4	xcomp	_	SpaceAfter=No
8	"	"	PUNCT	Q"	_	4	punct	_	SpaceAfter=No
9	.	.	PUNCT	Q.	_	4	punct	_	_
~~~

It is also used for clitic doubling.

~~~ conllu
# visual-style	12	bgColor:lightgreen
# hittoken:	13	lle	lle	PRON	Rad3ms	Case=Dat|Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	expl	_	_
1	Os	o	DET	Ddmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	topónimos	topónimo	NOUN	Scmp	Gender=Masc|Number=Plur	3	nsubj	_	_
3	terán	ter	VERB	Vfi30p	Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Q,	_	3	punct	_	_
5	como	como	ADV	Wr	PronType=Rel	7	case	_	_
6	única	único	ADJ	A0fs	Gender=Fem|Number=Sing	7	amod	_	_
7	forma	forma	NOUN	Scfs	Gender=Fem|Number=Sing	3	obl	_	_
8	oficial	oficial	ADJ	A0fs	Gender=Fem|Number=Sing	7	amod	_	_
9	a	o	DET	Ddfs	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	galega	galego	ADJ	A0fs	Gender=Fem|Number=Sing	3	obj	_	_
11	e	e	CCONJ	Cc	_	12	cc	_	_
12	corresponderá	corresponder	VERB	Vfi30s	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	3	conj	_	_
13	lle	lle	PRON	Rad3ms	Case=Dat|Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	expl	_	_
14	a	a	ADP	P	AdpType=Prep	16	case	_	_
15	o	o	DET	Ddms	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	Goberno	Goberno	PROPN	Spms	Gender=Masc|Number=Sing	12	iobj	_	_
17	galego	galego	ADJ	A0ms	Gender=Masc|Number=Sing	16	amod	_	_
18	determinar	determinar	VERB	V0f000	VerbForm=Inf	12	xcomp	_	_
19	os	o	DET	Ddmp	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	nomes	nome	NOUN	Scmp	Gender=Masc|Number=Plur	18	obj	_	_
21	de	de	ADP	P	AdpType=Prep	22	case	_	_
22	lugar	lugar	NOUN	Scms	Gender=Masc|Number=Sing	20	nmod	_	SpaceAfter=No
23	.	.	PUNCT	Q.	_	3	punct	_	_
~~~

There is one example with two clitic pronouns both annotated with `expl`.

  * Non se lle cocía o pan en o corpo a Don Quixote 

### German
  * Die Party ist vorbei, heißt es nun. (expletive "es", transl. "The party is over, it is now said")

### Greek
All the examples involve a clitic pronoun doubling an object realized by a non-clitic pronoun or a full NP.
  * Πιστεύω ότι είναι δίκαιο να το αναγνωρίσουμε αυτό. (expletive "το", transl. "I believe it is fair to recognize this.")

~~~ conllu
# visual-style	2	bgColor:lightgreen
# hittoken: 6	το	εγώ	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
1	Πιστεύω	πιστεύω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ότι	ότι	SCONJ	SCONJ	_	4	mark	_	_
3	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	4	cop	_	_
4	δίκαιο	δίκαιο	ADV	ADV	_	1	ccomp	_	_
5	να	να	PART	PART	_	7	aux	_	_
6	το	εγώ	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
7	αναγνωρίσουμε	αναγνωρίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	4	csubj	_	_
8	αυτό	αυτός	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Dem	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	PUNCT	_	1	punct	_	_
~~~

### Italian
The `expl` relation is used exclusively with clitic pronouns (Clitic=Yes). In a
majority of cases the clitic pronoun is in 3rd person, but also found
in 1st and 2nd person, both singular and plural. The `expl`relation is subtyped: `expl:impers` for the impersonal construction and `expl:pass`for impersonal passives.
The expletive relation is used (at least) in the following constructions:

* impersonal construction (active and passive): Ci si viene per riposarsi, curarsi, sarebbe quindi assurdo non approfittarne. (Transl.: One comes to rest, to take care of oneself, so it would be absurd not to take advantage of it.)
  
~~~ conllu
# visual-style	2	bgColor:lightgreen
# hittoken:	2	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	3	expl:impers	_	_
1	Ci	ci	PRON	PC	Clitic=Yes|PronType=Prs	3	expl	_	_
2	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	3	expl:impers	_	_
3	viene	venire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	per	per	ADP	E	_	5	mark	_	_
5-6	riposarsi	_	_	_	_	_	_	_	SpaceAfter=No
5	riposar	riposare	VERB	V	VerbForm=Inf	3	advcl	_	_
6	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	5	expl	_	_
7	,	,	PUNCT	FF	_	5	punct	_	_
8-9	curarsi	_	_	_	_	_	_	_	SpaceAfter=No
8	curar	curare	VERB	V	VerbForm=Inf	5	advcl	_	_
9	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	8	expl	_	_
10	,	,	PUNCT	FF	_	13	punct	_	_
11	sarebbe	essere	AUX	V	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	quindi	quindi	ADV	B	_	13	advmod	_	_
13	assurdo	assurdo	ADJ	A	Gender=Masc|Number=Sing	3	conj	_	_
14	non	non	ADV	BN	PronType=Neg	15	advmod	_	_
15-16	approfittarne	_	_	_	_	_	_	_	SpaceAfter=No
15	approfittar	approfittare	VERB	V	VerbForm=Inf	13	csubj	_	_
16	ne	ne	PRON	PC	Clitic=Yes|PronType=Prs	15	iobj	_	_
17	.	.	PUNCT	FS	_	3	punct	_	_

~~~

Una Fiesta per Vip Se i cavalli ci sono si devono vedere. (Transl.: A Fiesta for VIPs If the horses are there, they must be seen.)

~~~ conllu
# visual-style	10	bgColor:lightgreen
# hittoken:	10	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	12	expl:pass	_	_
1	Una	uno	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	Fiesta	Fiesta	PROPN	SP	_	12	obl	_	_
3	per	per	ADP	E	_	4	case	_	_
4	Vip	vip	NOUN	S	Gender=Masc	2	nmod	_	_
5	Se	se	SCONJ	CS	_	9	mark	_	_
6	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	7	det	_	_
7	cavalli	cavallo	NOUN	S	Gender=Masc|Number=Plur	9	nsubj	_	_
8	ci	ci	PRON	PC	Clitic=Yes|PronType=Prs	9	expl	_	_
9	sono	essere	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	advcl	_	_
10	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	12	expl:pass	_	_
11	devono	dovere	AUX	VM	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	aux	_	_
12	vedere	vedere	VERB	V	VerbForm=Inf	0	root	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	12	punct	_	_

~~~

* existential sentences: Ce n'era abbastanza per avvertire la magistratura. (Transl.: There was enough to warn the judiciary.)

~~~ conllu
# visual-style	1	bgColor:lightgreen
# hittoken:	1	Ce	ce	PRON	PC	Clitic=Yes|PronType=Prs	4	expl	_	_
1	Ce	ce	PRON	PC	Clitic=Yes|PronType=Prs	4	expl	_	_
2	n'	ne	PRON	PC	Clitic=Yes|PronType=Prs	4	iobj	_	SpaceAfter=No
3	era	essere	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	4	cop	_	_
4	abbastanza	abbastanza	ADV	B	_	0	root	_	_
5	per	per	ADP	E	_	6	mark	_	_
6	avvertire	avvertire	VERB	V	VerbForm=Inf	4	advcl	_	_
7	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	8	det	_	_
8	magistratura	magistratura	NOUN	S	Gender=Fem|Number=Sing	6	obj	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	4	punct	_	_

~~~

* Regular reflexives: Mansell e Prost si sono scambiati segni di reciproca stima. (Transl.: Mansell and Prost exchanged signs of mutual respect.)

~~~ conllu
# visual-style	4	bgColor:lightgreen
# hittoken:	4	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	6	expl	_	_
1	Mansell	Mansell	PROPN	SP	_	6	nsubj	_	_
2	e	e	CCONJ	CC	_	3	cc	_	_
3	Prost	Prost	PROPN	SP	_	1	conj	_	_
4	si	si	PRON	PC	Clitic=Yes|Person=3|PronType=Prs	6	expl	_	_
5	sono	essere	AUX	VA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	aux	_	_
6	scambiati	scambiare	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	0	root	_	_
7	segni	segno	NOUN	S	Gender=Masc|Number=Plur	6	obj	_	_
8	di	di	ADP	E	_	10	case	_	_
9	reciproca	reciproco	ADJ	A	Gender=Fem|Number=Sing	10	amod	_	_
10	stima	stima	NOUN	S	Gender=Fem|Number=Sing	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	6	punct	_	_

~~~


### Norwegian
In the Norwegian UD treebanks the `expl` relation is used for the following of the above constructions:

* Weather verbs: Nå begynner det å regne, sier han plutselig. (Transl.: Now it's beginning to rain, he said suddenly.)

~~~ conllu
# visual-style	4	bgColor:lightgreen
# hittoken:	4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
1	-	$-	PUNCT	_	_	3	punct	_	_
2	Nå	nå	ADV	_	_	3	advmod	_	_
3	begynner	begynne	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
5	å	å	PART	_	_	6	mark	_	_
6	regne	regne	VERB	_	VerbForm=Inf	3	xcomp	_	SpaceAfter=No
7	,	$,	PUNCT	_	_	3	punct	_	_
8	sier	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	parataxis	_	_
9	han	han	PRON	_	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
10	plutselig	plutselig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	8	advmod	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	3	punct	_	_

~~~

* Existential/presentational: Det kom en busslast med japanere til klosteret mens jeg sto der. (There came a bus-load of japanese while I stood there.)

~~~ conllu
# visual-style	1	bgColor:lightgreen
# hittoken:	1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	kom	komme	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	en	en	DET	_	Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	busslast	busslast	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	_
5	med	med	ADP	_	_	6	case	_	_
6	japanere	japaner	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	4	nmod	_	_
7	til	til	ADP	_	_	8	case	_	_
8	klosteret	kloster	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	2	obl	_	_
9	mens	mens	SCONJ	_	_	11	mark	_	_
10	jeg	jeg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	_	_
11	sto	stå	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	2	advcl	_	_
12	der	der	ADV	_	_	11	advmod	_	SpaceAfter=No
13	.	$.	PUNCT	_	_	2	punct	_	_

~~~

* Impersonal passives: Homofili handler bare om sex, sies det av og til. (Transl.: Homosexuality is only about sex, it is sometimes said.)

~~~ conllu
# visual-style	8	bgColor:lightgreen
# hittoken:	8	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
1	Homofili	homofili	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	nsubj	_	_
2	handler	handle	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	bare	bare	ADV	_	_	2	advmod	_	_
4	om	om	ADP	_	_	5	case	_	_
5	sex	sex	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	2	punct	_	_
7	sies	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	2	parataxis	_	_
8	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	7	expl	_	_
9	av	av	ADP	_	_	7	compound:prt	_	_
10	og	og	CCONJ	_	_	11	cc	_	_
11	til	til	ADP	_	_	9	conj	_	SpaceAfter=No
12	.	$.	PUNCT	_	_	2	punct	_	_

~~~

* Extraposed clausal subjects: Då er det viktig å ha eit godt brød å smøre matpakke av. (Transl.: Then it is important to have good bread to make lunch from.)

~~~ conllu
# visual-style	3	bgColor:lightgreen
# hittoken:	3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
1	Då	då	ADV	_	_	4	advmod	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	viktig	viktig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
5	å	å	PART	_	_	6	mark	_	_
6	ha	ha	VERB	_	VerbForm=Inf	4	csubj	_	_
7	eit	ein	DET	_	Gender=Neut|Number=Sing|PronType=Art	9	det	_	_
8	godt	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	9	amod	_	_
9	brød	brød	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	6	obj	_	_
10	å	å	PART	_	_	11	mark	_	_
11	smøre	smøre	VERB	_	VerbForm=Inf	9	acl	_	_
12	matpakke	matpakke	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	11	obj	_	_
13	av	av	ADP	_	_	12	nmod	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	4	punct	_	_

~~~

* Extraposed complement clauses: Det var Harald Zwart som på 1990-tallet fant det helt nødvendig å mobbe norsk film. (It was Harald Zwart who in the 1990s found it completely necessary to make fun of Norwegian film.)

~~~ conllu
# visual-style	9	bgColor:lightgreen
# hittoken:	9	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	_	_
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	Harald	Harald	PROPN	_	Gender=Masc	0	root	_	_
4	Zwart	Zwart	PROPN	_	_	3	flat:name	_	_
5	som	som	PRON	_	PronType=Rel	8	nsubj	_	_
6	på	på	ADP	_	_	7	case	_	_
7	1990-tallet	1990-tall	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	8	obl	_	_
8	fant	finne	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	acl:relcl	_	_
9	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	expl	_	_
10	helt	hel	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	11	advmod	_	_
11	nødvendig	nødvendig	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	8	xcomp	_	_
12	å	å	PART	_	_	13	mark	_	_
13	mobbe	mobbe	VERB	_	VerbForm=Inf	8	xcomp	_	_
14	norsk	norsk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	15	amod	_	_
15	film	film	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	13	obj	_	SpaceAfter=No
16	.	$.	PUNCT	_	_	3	punct	_	_

~~~


### Portuguese
The `expl` relation is only found in UD_Portuguese (not Portuguese-BR) and it is used exclusively for the pronoun "se".

[Natalia Silveira's dissertation](https://nlp.stanford.edu/~manning/dissertations/Silveira-Natalia-dissertation-augmented.pdf)
discusses use of the SE-clitic in Romance ("se" in French, Portuguese
and Spanish, "si" in Italian). The SE-clitic is apparently used for a range of different
constructions, which prove difficult to unify.  Silveira discusses the
following constructions:

* true reflexive: have a transitive counterpart
* inherent reflexive: have no transitive counterpart, additional arguments realized as obliques
* inchoative se (break): alternate with transitive counterpart, no reciprocal reading
* passive/middle se: cannot take an agent phrase
* impersonal se: no overt subject, present argument does not trigger agreement

Silveira presents data from the 1.2 treebanks (where the Portuguese,
Spanish and French treebanks did not make use of the expl relation at all for
se). 
In the 2.1 version of the Portuguese treebank, `expl` is used for "se" and always co-occurs with a verb which bears the feature "se-passive". This is somewhat misleading because these are often not actually passive constructions. 

Examples (some are taken from Silveira, marked as such):

* true reflexive (from Silveira): Gravações acústicas se encaixam com o nosso tipo de som. (Transl.: Sound recordings fit with our type of sound.) 

~~~ conllu
# visual-style	3	bgColor:lightgreen
# hittoken:	3	se	se	PRON	PERS|F|3P|ACC|@ACC>-PASS	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	4	expl	_	_
1	Gravações	gravação	NOUN	<np-idf>|N|F|P|@SUBJ>	Gender=Fem|Number=Plur	4	nsubj	_	_
2	acústicas	acústico	ADJ	ADJ|F|P|@N<	Gender=Fem|Number=Plur	1	amod	_	_
3	se	se	PRON	PERS|F|3P|ACC|@ACC>-PASS	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	4	expl	_	_
4	encaixam	encaixar	VERB	<mv>|<se-passive>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	com	com	ADP	PRP|@<PIV	_	8	case	_	_
6	o	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
7	nosso	nosso	DET	<poss>|DET|M|S|@>N	Gender=Masc|Number=Sing|PronType=Prs	8	det	_	_
8	tipo	tipo	NOUN	<meta>|<np-def>|N|M|S|@P<	Gender=Masc|Number=Sing	4	obl	_	_
9	de	de	ADP	PRP|@N<	_	10	case	_	_
10	som	som	NOUN	<np-idf>|N|M|S|@P<	Gender=Masc|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	PU|@PU	_	4	punct	_	_

~~~

* inherent reflexive: O deputado se aproximou. (Transl.: The deputy approached.)

~~~ conllu
# visual-style	3	bgColor:lightgreen
# hittoken:	3	se	se	PRON	PERS|M|3S|ACC|@ACC>-PASS	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
1	O	o	DET	<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	deputado	deputado	NOUN	<np-def>|N|M|S|@SUBJ>	Gender=Masc|Number=Sing	4	nsubj	_	_
3	se	se	PRON	PERS|M|3S|ACC|@ACC>-PASS	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl	_	_
4	aproximou	aproximar	VERB	<mv>|<se-passive>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
5	.	.	PUNCT	PU|@PU	_	4	punct	_	_

~~~

* inchoative: E, mesmo ao cair da folha, 1994 tornou-se um ano de alegria. (Transl.: And even as it fell from the leaf, 1994 became a year of joy.)

~~~ conllu
# visual-style	13	bgColor:lightgreen
# hittoken:	13	se	se	PRON	PERS|M|3S|ACC|@<ACC-PASS	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	expl	_	_
1	E	e	CCONJ	KC|@CO	_	12	cc	_	SpaceAfter=No
2	,	,	PUNCT	PU|@PU	_	6	punct	_	_
3	mesmo	mesmo	ADV	<quant>|ADV|@>A	_	6	advmod	_	_
4-5	ao	_	_	_	_	_	_	_	_
4	a	a	ADP	<sam->|PRP|@ADVL>	_	6	mark	_	_
5	o	o	DET	<-sam>|<artd>|ART|M|S|@>N	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	cair	cair	VERB	<mv>|V|INF|@ICL-P<	VerbForm=Inf	12	advcl	_	_
7-8	da	_	_	_	_	_	_	_	_
7	de	de	ADP	<sam->|PRP|@<ADVL	_	9	case	_	_
8	a	o	DET	<-sam>|<artd>|ART|F|S|@>N	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	folha	folha	NOUN	<np-def>|N|F|S|@P<	Gender=Fem|Number=Sing	6	obl	_	SpaceAfter=No
10	,	,	PUNCT	PU|@PU	_	6	punct	_	_
11	1994	1994	NUM	<year>|<card>|<date>|NUM|M|S|@SUBJ>	NumType=Card	12	nsubj	_	_
12-13	tornou-se	_	_	_	_	_	_	_	_
12	tornou	tornar	VERB	<mv>|<hyphen>|<se-passive>|V|PS|3S|IND|@FS-STA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
13	se	se	PRON	PERS|M|3S|ACC|@<ACC-PASS	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	expl	_	_
14	um	um	NUM	<card>|NUM|M|S|@>N	NumType=Card	15	nummod	_	_
15	ano	ano	NOUN	<np-def>|N|M|S|@<OC	Gender=Masc|Number=Sing	12	xcomp	_	_
16	de	de	ADP	PRP|@N<	_	17	case	_	_
17	alegria	alegria	NOUN	<np-idf>|N|F|S|@P<	Gender=Fem|Number=Sing	15	nmod	_	SpaceAfter=No
18	.	.	PUNCT	PU|@PU	_	12	punct	_	_

~~~

* passive/middle (from Silveira): E aí colocam-se novas dúvidas: (Transl.: And then there are new doubts:)

~~~ conllu
# visual-style	4	bgColor:lightgreen
# hittoken:	4	se	se	PRON	PERS|F|3P|ACC|@<ACC-PASS	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	3	expl	_	_
1	E	e	CCONJ	KC|@CO	_	3	cc	_	_
2	aí	aí	ADV	<kc>|ADV|@ADVL>	_	3	advmod	_	_
3-4	colocam-se	_	_	_	_	_	_	_	_
3	colocam	colocar	VERB	<mv>|V|PR|3P|IND|@FS-STA	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	se	se	PRON	PERS|F|3P|ACC|@<ACC-PASS	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	3	expl	_	_
5	novas	novo	ADJ	ADJ|F|P|@>N	Gender=Fem|Number=Plur	6	amod	_	_
6	dúvidas	dúvida	NOUN	<np-idf>|N|F|P|@<SUBJ	Gender=Fem|Number=Plur	3	nsubj	_	SpaceAfter=No
7	:	:	PUNCT	PU|@PU	_	3	punct	_	_

~~~

* impersonal: Pense-se em Kingsley Amis, Malcolm Bradbury e Albert Finney. (Transl.: Think of Kingsley Amis, Malcolm Bradbury and Albert Finney.)

~~~ conllu
# visual-style	2	bgColor:lightgreen
# hittoken:	2	se	se	PRON	PERS|M/F|3S/P|ACC|@VOC	Case=Acc|Gender=Unsp|PronType=Prs	1	expl	_	SUBJ_INDEF
1-2	Pense-se	_	_	_	_	_	_	_	_
1	Pense	pensar	VERB	<mv>|V|PR|3S|SUBJ|@FS-STA	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	se	se	PRON	PERS|M/F|3S/P|ACC|@VOC	Case=Acc|Gender=Unsp|PronType=Prs	1	expl	_	SUBJ_INDEF
3	em	em	ADP	PRP|@<PIV	_	4	case	_	_
4	Kingsley	Kingsley	PROPN	_	Gender=Unsp|Number=Sing	1	obl	_	MWE=Kingsley_Amis|MWEPOS=PROPN
5	Amis	Amis	PROPN	_	Number=Sing	4	flat:name	_	SpaceAfter=No
6	,	,	PUNCT	PU|@PU	_	1	punct	_	_
7	Malcolm	Malcolm	PROPN	_	Gender=Masc|Number=Sing	4	conj	_	MWE=Malcolm_Bradbury|MWEPOS=PROPN
8	Bradbury	Bradbury	PROPN	_	Number=Sing	7	flat:name	_	_
9	e	e	CCONJ	<co-prparg>|KC|@CO	_	10	cc	_	_
10	Albert	Albert	PROPN	_	Gender=Masc|Number=Sing	4	conj	_	MWE=Albert_Finney|MWEPOS=PROPN
11	Finney	Finney	PROPN	_	Number=Sing	10	flat:name	_	SpaceAfter=No
12	.	.	PUNCT	PU|@PU	_	1	punct	_	_

~~~


### Romanian
  * Dar asemenea lucruri nu le știai decât din zvonuri vagi. (expletive "le", transl. "But you knew such things only from vague rumors.")
  
### Russian
  * Или это снег таял на груди? (expletive "это", transl. "Or was it snow melting on his chest?")

### Slovenian
(**Preliminary**)
The `expl` relation is used exclusively for the reflexive pronoun "se/si". It is used at least for the following:

* inherent reflexive: Skozi steno slišim, kako se zabavajo. (Transl.: I hear through the wall how they have fun.)

~~~ conllu
# visual-style	6	bgColor:lightgreen
# hittoken:	6	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	7	expl	_	Dep=7|Rel=PPart
1	Skozi	skozi	ADP	Sa	Case=Acc	2	case	_	Dep=2|Rel=Atr
2	steno	stena	NOUN	Ncfsa	Case=Acc|Gender=Fem|Number=Sing	3	obl	_	Dep=3|Rel=AdvM
3	slišim	slišati	VERB	Vmbr1s	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|Dep=0|Rel=Root
4	,	,	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root
5	kako	kako	ADV	Rgp	Degree=Pos	7	advmod	_	Dep=7|Rel=Conj
6	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	7	expl	_	Dep=7|Rel=PPart
7	zabavajo	zabavati	VERB	Vmpr3p	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	3	ccomp	_	SpaceAfter=No|Dep=3|Rel=Obj
8	.	.	PUNCT	Z	_	3	punct	_	Dep=0|Rel=Root

~~~

* passive/impersonal: V normalnem besednjaku se pozitivna diskriminacija označuje kot privilegij. (Transl.: In the normal vocabulary, positive discrimination is marked as a privilege.)

~~~ conllu
# visual-style	4	bgColor:lightgreen
# hittoken:	4	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	7	expl	_	Dep=7|Rel=PPart
1	V	v	ADP	Sl	Case=Loc	3	case	_	Dep=3|Rel=Atr
2	normalnem	normalen	ADJ	Agpmsl	Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	3	amod	_	Dep=3|Rel=Atr
3	besednjaku	besednjak	NOUN	Ncmsl	Case=Loc|Gender=Masc|Number=Sing	7	obl	_	Dep=7|Rel=AdvO
4	se	se	PRON	Px------y	PronType=Prs|Reflex=Yes|Variant=Short	7	expl	_	Dep=7|Rel=PPart
5	pozitivna	pozitiven	ADJ	Agpfsn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	Dep=6|Rel=Atr
6	diskriminacija	diskriminacija	NOUN	Ncfsn	Case=Nom|Gender=Fem|Number=Sing	7	nsubj	_	Dep=7|Rel=Sb
7	označuje	označevati	VERB	Vmpr3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Dep=0|Rel=Root
8	kot	kot	SCONJ	Cs	_	9	case	_	Dep=9|Rel=Conj
9	privilegij	privilegij	NOUN	Ncmsn	Case=Nom|Gender=Masc|Number=Sing	7	obl	_	SpaceAfter=No|Dep=7|Rel=AdvM
10	.	.	PUNCT	Z	_	7	punct	_	Dep=0|Rel=Root 

~~~


### Swedish

Swedish has all five prototypical constructions described above (and exemplified below). However, the `expl` relation is not used for inherent reflexives in any of the Swedish treebanks (see example 810 from UD_Swedish-LinES below).

* UD_Swedish-LinES: Det regnade, och folk började småhuttra ute på verandan och drog sig långsamt in. (Translation: It was raining, and people started to tremble out on the veranda and slowly went inside.)

~~~ conllu
# visual-style	1	bgColor:lightgreen
# hittoken:	1	Det	det	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
1	Det	det	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	expl	_	_
2	regnade	regna	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	2	punct	_	_
4	och	och	CCONJ	_	_	6	cc	_	_
5	folk	folk	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	6	nsubj	_	_
6	började	börja	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
7	småhuttra	småhuttra	VERB	INF-ACT	VerbForm=Inf|Voice=Act	6	xcomp	_	_
8	ute	ute	ADV	_	_	10	advmod	_	_
9	på	på	ADP	_	_	10	case	_	_
10	verandan	veranda	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl	_	_
11	och	och	CCONJ	_	_	12	cc	_	_
12	drog	dra	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
13	sig	sig	PRON	RFL-ACC	Case=Acc|Definite=Def|PronType=Prs	12	obj	_	_
14	långsamt	långsam	ADV	_	_	12	advmod	_	_
15	in	in	ADV	_	_	12	advmod	_	SpaceAfter=No
16	.	.	PUNCT	Period	_	2	punct	_	_

~~~
    
* UD_Swedish-LinES: Det finns en fråga som är mycket viktigare än checken, sa han. (Translation: There is a question that is much more important than the check, he said.)

~~~ conllu
# visual-style	4	bgColor:lightgreen
# hittoken:	4	det	det	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	6	expl	_	_
1	Men	men	CCONJ	_	_	11	cc	_	_
2	även	även	ADV	_	_	6	mark	_	_
3	om	om	SCONJ	_	_	2	fixed	_	_
4	det	det	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	6	expl	_	_
5	vore	vara	AUX	CNJ	Mood=Sub|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
6	fel	fel	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	11	advcl	_	_
7	på	på	ADP	_	_	9	case	_	_
8	min	jag	PRON	P1SG-GEN-SG	Case=Gen|Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	telefon	telefon	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	6	obl	_	_
10	så	så	PART	_	_	11	discourse	_	_
11	hjälper	hjälpa	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
12	inte	inte	PART	NEG	_	11	advmod	_	_
13	det	det	PRON	PERS-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	11	nsubj	_	_
14	oss	vi	PRON	PERS-P1PL-ACC	Case=Acc|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	11	obj	_	_
15	med	med	ADP	_	_	18	case	_	_
16	det	det	DET	SG-DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	18	det	_	_
17	verkliga	verklig	ADJ	POS-DEF	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	18	amod	_	_
18	problemet	problem	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	11	obl	_	SpaceAfter=No
19	.	.	PUNCT	Period	_	11	punct	_	_

~~~

* UD_Swedish-PUD: Det är rimligt att säga att Rocco Catalano arbetar, lever och andas retro. (Translation: It is reasonable to say that Rocco Catalano works, lives and breathes retro.)

~~~ conllu
# visual-style	1	bgColor:lightgreen
# hittoken:	1	Det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	expl	_	_
1	Det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	3	expl	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	rimligt	rimlig	ADJ	JJ|POS|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	att	att	PART	IE	_	5	mark	_	_
5	säga	säga	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	3	csubj	_	_
6	att	att	SCONJ	SN	_	9	mark	_	_
7	Rocco	Rocco	PROPN	PM|NOM	Case=Nom	9	nsubj	_	_
8	Catalano	Catalano	PROPN	PM|NOM	Case=Nom	7	flat:name	_	_
9	arbetar	arbeta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	ccomp	_	SpaceAfter=No
10	,	,	PUNCT	MID	_	11	punct	_	_
11	lever	leva	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	conj	_	_
12	och	och	CCONJ	KN	_	13	cc	_	_
13	andas	andas	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	9	conj	_	_
14	retro	retro	ADJ	JJ|POS|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Pos	9	obj	_	SpaceAfter=No
15	.	.	PUNCT	MAD	_	3	punct	_	_

~~~
    
* UD_Swedish-PUD: Till sist måste vi göra det lättare för folk att rapportera misstänkta säkerhetsluckor och skadliga e-postmeddelanden. (Translation: Finally, we must make it easier for people to report suspected security gaps and harmful emails.)

~~~ conllu
# visual-style	6	bgColor:lightgreen
# hittoken:	6	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	5	expl	_	_
1	Till	till	ADP	PP	_	2	case	_	_
2	sist	sist	ADV	AB|SUV	Degree=Sup	5	advmod	_	_
3	måste	måste	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
4	vi	vi	PRON	PN|UTR|PLU|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Plur	5	nsubj	_	_
5	göra	göra	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
6	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	5	expl	_	_
7	lättare	lätt	ADJ	JJ|KOM|UTR/NEU|SIN/PLU|IND/DEF|NOM	Case=Nom|Degree=Cmp	5	xcomp	_	_
8	för	för	ADP	PP	_	9	case	_	_
9	folk	folk	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	5	obl	_	_
10	att	att	PART	IE	_	11	mark	_	_
11	rapportera	rapportera	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	5	ccomp	_	_
12	misstänkta	misstänkt	ADJ	PC|PRF|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Number=Plur|Tense=Past|VerbForm=Part	13	amod	_	_
13	säkerhetsluckor	säkerhetslucka	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	11	obj	_	_
14	och	och	CCONJ	KN	_	16	cc	_	_
15	skadliga	skadlig	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	16	amod	_	_
16	e-postmeddelanden	e-postmeddelande	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	13	conj	_	SpaceAfter=No
17	.	.	PUNCT	MAD	_	5	punct	_	_

~~~

* UD_Swedish-LinES: Herr kommissionär, det visade sig att USA föraktar förhandlingar. (Translation: Mister commissioner, it turned out that the USA despises negotiations.)

~~~ conllu
# visual-style	4	bgColor:lightgreen
# hittoken:	4	det	det	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	expl	_	_
1	Herr	herr	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nmod	_	_
2	kommissionär	kommissionär	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	vocative	_	SpaceAfter=No
3	,	,	PUNCT	Comma	_	2	punct	_	_
4	det	det	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	expl	_	_
5	visade	visa	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	sig	sig	PRON	RFL-ACC	Case=Acc|Definite=Def|PronType=Prs	5	obj	_	_
7	att	att	SCONJ	_	_	9	mark	_	_
8	USA	USA	PROPN	SG-NOM	Case=Nom|Number=Sing	9	nsubj	_	_
9	föraktar	förakta	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	csubj	_	_
10	förhandlingar	förhandling	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	9	obj	_	SpaceAfter=No
11	.	.	PUNCT	Period	_	5	punct	_	_

~~~

### Ukrainian
  * Залишити слід на папері — це був вирішальний крок. (expletive "це", transl. "Leave the mark on paper - it was a decisive step.")

## References

Anders Holmberg and Urpo Nikkane. [Expletives, Subjects and Topics in Finnish](http://www.zacharski.org/papers/ghz/Expletives_subjects_and_topics.pdf). In 
Peter Svenonius (ed.) *Subjects, expletives, and the EPP*. Oxford University Press. 2002.
