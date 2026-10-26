---
layout: base
title:  'Statistics of csubj in UD_French-ParisStories'
udver: '2'
---

## Treebank Statistics: UD_French-ParisStories: Relations: `csubj`

This relation is universal.

16 nodes (0%) are attached to their parents as `csubj`.

16 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.25.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (10; 63% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt> (2; 13% instances), <tt><a href="fr_parisstories-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-ADV.html">ADV</a></tt> (1; 6% instances), <tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_parisstories-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 csubj	color:blue
1	donc	donc	ADV	_	_	5	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	5	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	0	root	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison
6	qu'	que	SCONJ	_	_	10	mark	_	SpaceAfter=No
7	on	on	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Sing|Person=3|PronType=Ind	10	nsubj	_	Exponence[Gender]=Absent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
8	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux:tense	_	_
9	toujours	toujours	ADV	_	_	10	advmod	_	_
10	resté	rester	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	5	csubj	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
11	là-dessus	là	ADV	_	_	10	advmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 csubj	color:blue
1	mais	mais	CCONJ	_	_	6	cc	_	_
2	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	6	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
4	aussi	aussi	ADV	_	_	6	advmod	_	_
5	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	det	_	HasSpokenGender=OnlySingExceptWithLiaison
6	gens	gens	NOUN	_	Gender=Masc|Number=Plur	0	root	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
7	là-bas	là-bas	ADV	_	_	6	advmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	donc	donc	ADV	_	_	12	cc	_	_
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	6	conj	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison
13	qu'	que	SCONJ	_	_	17	mark	_	SpaceAfter=No
14	ils	lui	PRON	_	Case=Nom|Emph=No|Gender=Masc|Number=Plur|Person=3|PronType=Prs	17	nsubj	_	Exponence[Person]=Inherent
15	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
16	très	très	ADV	_	_	17	advmod	_	_
17	ouverts	ouvert	ADJ	_	Gender=Masc|Number=Plur	12	csubj	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
18	,	,	PUNCT	_	_	20	punct	_	_
19	très	très	ADV	_	_	20	advmod	_	_
20	gentils	gentil	ADJ	_	Gender=Masc|Number=Plur	17	conj	_	Exponence[Number]=Absent|HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|SpaceAfter=No
21	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 17 csubj	color:blue
1	et	et	CCONJ	_	_	3	cc	_	_
2	ça	ça	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent
3	mettait	mettre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	Exponence[Number]=Absent|Exponence[Person]=Absent
4	vraiment	vraiment	ADV	_	_	3	advmod	_	_
5	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	bonne	bon	ADJ	_	Gender=Fem|Number=Sing	7	amod	_	HasSpokenGender=YesExceptSingWithLiaison|HasSpokenNumber=OnlyWithLiaison|LiaisonAfter=Yes
7	ambiance	ambiance	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent|LiaisonPossibleBefore=Yes|SpaceAfter=No
8	,	,	PUNCT	_	_	12	punct	_	_
9	et	et	CCONJ	_	_	12	cc	_	_
10	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	12	expl:subj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
11	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	vrai	vrai	ADJ	_	Gender=Masc|Number=Sing	3	conj	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|HasSpokenGender=NotInThisDialect|HasSpokenNumber=OnlyWithLiaison
13	que	que	SCONJ	_	_	17	mark	_	_
14	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	17	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
15	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	17	cop	_	_
16	quelque	quelque	DET	_	Number=Sing|PronType=Ind	17	det	_	Exponence[Number]=Inherent
17	chose	chose	NOUN	_	Gender=Fem|Number=Sing	12	csubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
18	que	que	PRON	_	PronType=Rel	21	obj	_	_
19	j'	moi	PRON	_	Case=Nom|Emph=No|Number=Sing|Person=1|PronType=Prs	21	nsubj	_	Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
20	ai	avoir	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	21	aux:tense	_	_
21	adoré	adorer	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part|Voice=Act	17	acl:relcl	_	Exponence[Gender]=Absent|Exponence[Number]=Absent|PastPartHasSpokenGender=NotInThisDialect|Tense[denom]=Past
22	là-bas	là-bas	ADV	_	_	21	advmod	_	SpaceAfter=No
23	,	,	PUNCT	_	_	31	punct	_	_
24	c'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	31	nsubj:outer	_	Exponence[Gender]=Inherent|Exponence[Number]=Inherent|Exponence[Person]=Inherent|SpaceAfter=No
25	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	31	cop	_	_
26	que	que	SCONJ	_	_	31	mark	_	_
27	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	28	det	_	HasSpokenGender=OnlySingExceptWithLiaison
28	gens	gens	NOUN	_	Gender=Masc|Number=Plur	31	nsubj	_	Exponence[Gender]=Inherent|Exponence[Number]=Absent
29	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	31	aux:pass	_	_
30	vraiment	vraiment	ADV	_	_	31	advmod	_	_
31	ouverts	ouvrir	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	17	conj	_	Exponence[Number]=Absent|PastPartHasSpokenGender=Yes|SpaceAfter=No|Tense[denom]=Past
32	.	.	PUNCT	_	_	3	punct	_	_

~~~


