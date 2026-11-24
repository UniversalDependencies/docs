---
layout: base
title:  'Statistics of nsubj:outer in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="fr_parisstories-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="fr_parisstories-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_parisstories-dep-nsubj-pass.html">nsubj:pass</a></tt>.

25 nodes (0%) are attached to their parents as `nsubj:outer`.

25 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.6.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (19; 76% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (4; 16% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_parisstories-pos-PRON.html">PRON</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj:outer	color:blue
1	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	HasSpokenGender=OnlySingExceptWithLiaison
2	sujet	sujet	NOUN	_	Gender=Masc|Number=Sing	5	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	nsubj:outer	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
4	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	5	cop	_	_
5	peut	pouvoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	Exponence[Person]=Absent
6	-on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	5	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
7	se	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	8	obj	_	Exponence[Person]=Inherent
8	mettre	mettre	VERB	_	VerbForm=Inf	5	xcomp	_	Subject=SubjRaising
9	à	à	ADP	_	_	11	case	_	_
10	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	HasSpokenGender=OnlySingExceptWithLiaison
11	place	place	NOUN	_	Gender=Fem|Number=Sing	8	obl:arg	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
12	d'	de	ADP	_	_	13	case	_	SpaceAfter=No
13	autrui	autrui	PRON	_	Number=Sing|Person=3|PronType=Ind	11	nmod	_	Exponence[Person]=Inherent
14	?	?	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 1 nsubj:outer	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	nsubj:outer	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
3	que	que	SCONJ	_	_	15	mark	_	SpaceAfter=No
4	,	,	PUNCT	_	_	15	punct	_	_
5	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	6	det	_	HasSpokenGender=OnlySingExceptWithLiaison
6	caisse	caisse	NOUN	_	Gender=Fem|Number=Sing	15	dislocated:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	où	où	ADV	_	PronType=Rel	9	advmod	_	_
8	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	9	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
9	travaille	travailler	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	Exponence[Number]=Absent|Exponence[Person]=Absent|SpaceAfter=No
10	,	,	PUNCT	_	_	6	punct	_	_
11	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	15	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
12	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	15	cop	_	_
13	vraiment	vraiment	ADV	_	_	15	advmod	_	_
14	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	15	det	_	LiaisonAfter=Yes
15	endroit	endroit	NOUN	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes
16	minuscule	minuscule	ADJ	_	Gender=Masc|Number=Sing	15	amod	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
17	.	.	PUNCT	_	_	15	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:outer	color:blue
1	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	bizarre	bizarre	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=No|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
4	,	,	PUNCT	_	_	9	punct	_	_
5	parce	parce	ADV	_	ExtPos=SCONJ	9	mark	_	Idiom=Yes
6	que	que	SCONJ	_	_	5	fixed	_	InIdiom=Yes
7	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	nsubj:outer	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
9	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	3	advcl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison
10	que	que	SCONJ	_	_	14	reparandum	_	_
11	qu'	que	SCONJ	_	_	14	mark	_	SpaceAfter=No
12	il	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	Exponence[Person]=Inherent
13	nous	nous	PRON	_	Case=Dat|Emph=No|Number=Plur|Person=1|PronType=Prs	14	iobj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent
14	arrive	arriver	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	csubj	_	Exponence[Number]=Absent|Exponence[Person]=Absent
15	toujours	toujours	ADV	_	_	14	advmod	_	_
16	des	un	DET	_	Definite=Ind|Number=Plur|PronType=Art	17	det	_	_
17	galères	galère	NOUN	_	Gender=Fem|Number=Plur	14	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
18	quand	quand	SCONJ	_	_	22	mark	_	_
19	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	22	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
20	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	22	cop	_	_
21	en	en	ADP	_	_	22	case	_	_
22	voyage	voyage	NOUN	_	Gender=Masc|Number=Sing	14	advcl	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|SpaceAfter=No
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


