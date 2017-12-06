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

"Intrinsically impersonal verbs" encompasses a more general category of verbs, not only 0-place predicates but also 1-place predicates, that typically take an expletive pronoun as their subject, without any parallelism to a construction with a full subject. This is the case in French for the deficient verb "falloir" (be necessary). In the current French treebanks, all preverbal explective "il" clitics are treated as plain subjects (nsubj).

~~~ sdparse
il faut 3 nouveaux recrutements \n it is-necessary 3 new recruitments
~~~

~~~ sdparse
* 3 nouveaux recrutements faut
~~~

**Joakim:** Could you add the dependencies to this example? In particular, what relation is assigned to "recrutements"?

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

The clause can also be infinitival. For instance in French the extraposition is particularly frequent for the subject of a copula+adjective construction:

~~~ sdparse
Il est parfois difficile de rester calme \n It is sometimes difficult to stay calm
~~~

~~~ sdparse
Il est possible que Paul soit déjà parti \n It is possible that Paul be already gone
~~~

The same type of construction is found in Finnish, but only Finnish-FTB uses `expl`. In the original Finnish treebank the expletive appears to be labeled `nsubj` and the clause `ccomp`. Perhaps this is a competing analysis.

## Object Expletives

Expletives in object position have been assumed in (at least) two types of constructions:

1. Extraposed complement clauses
2. Inherent reflexives

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

## Right dislocation (?)

(marie: for French the extraposed complement clause is better and more generally described as right dislocation, of either a subject or a complement clause, with a coreferential indefinite pronoun "ça". The left dislocation is also possible, but it seems it has different prosodic properties, suggesting that the dislocated element is not part of the clause.

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
Il les a cassées ses lunettes Paul \n He them-fem-acc has broken his sunglasses Paul
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
  * В дискусията, предполагам, ще се засегнат важни въпроси. (expletive "се" is a reflexive pronoun, transl. "In the discussion, I suppose, will affect important issues".)

### Croatian
  * Seb Bytyci, izvršni ravnatelj Instituta za balkansku politiku, slaže se s time. (expletive "se" is a reflexive pronoun, transl. "Seb Bytyci, executive director of the Institute for Balkan Policy, agrees.")

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

* UD_French: The `expl` relation is used for extraposition (or right dislocation) and inherent reflexives. In addition, it is used for cases where a subject is realized both by a full noun phrase and a (clitic) pronoun (as an alternative to using `dislocated`). It is also used for the word "que" in some constructions. However, it does not appear to be used for impersonal subjects.
* UD_French-Sequoia: The `expl` relation seems to be used primarily for "double subjects" and inherent reflexives.
* UD_French-ParTUT: The `expl` relation is used for impersonal subjects and inherent reflexives.
* UD_French-Spoken: The `expl` relation is not used at all.
* UD_French-PUD: The `expl` relation seems to be overused and is found also in cases where a pronoun is clearly referential (perhaps as a result of automatic parsing without full manual validation).

### Galician
  * Ás cinco remátase de traballar. (expletive clitic "-se", transl. "At five it is over to work")

### German
  * Die Party ist vorbei, heißt es nun. (expletive "es", transl. "The party is over, it is now said")

### Greek
  * Πιστεύω ότι είναι δίκαιο να το αναγνωρίσουμε αυτό. (expletive "το", transl. "I believe it is fair to recognize this.")

### Italian
The `expl` relation is used exclusively with clitic pronouns (Clitic=Yes). In a
majority of cases the clitic pronoun is in 3rd person, but also found
in 1st and 2nd person, both singular and plural. The `expl`relation is subtyped: `expl:impers` for the impersonal construction and `expl:pass`for impersonal passives.
The expletive relation is used in the following constructions:
* impersonal construction
* impersonal passive
* existential sentences
* inherent reflexives, these are often enclitic

### Norwegian
  * Det var veldig positivt at han klarte å senke tiden sin (expletive "Det", transl. "It was very positive that he managed to lower his time")

### Portuguese
  * Na confusão que se segue, parte um primeiro tiro [...] (expletive "se", transl. "In the confusion that follows, a first shot [...]") 
  
### Romanian
  * Dar asemenea lucruri nu le știai decât din zvonuri vagi. (expletive "le", transl. "But you knew such things only from vague rumors.")
  
### Russian
  * Или это снег таял на груди? (expletive "это", transl. "Or was it snow melting on his chest?")

### Slovenian
  * V takšnem primeru se lahko bolnikovo stanje celo poslabša. (expletive "se", transl. "In this case, the patient's condition may even deteriorate.")

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
