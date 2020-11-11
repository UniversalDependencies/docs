---
layout: base
title:  'Statistics of csubj:pass in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-csubj.html">csubj</a></tt>.

24 nodes (0%) are attached to their parents as `csubj:pass`.

24 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.25.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (20; 83% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 csubj:pass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	wordform=il
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	_	_
3	décidé	décider	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	que	que	SCONJ	_	_	11	mark	_	_
5	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	6	det	_	SpaceAfter=No
6	exécution	exécution	NOUN	_	Gender=Fem|Number=Sing	11	nsubj:pass	_	_
7	de	de	ADP	_	_	9	case	_	_
8	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	sentence	sentence	NOUN	_	Gender=Fem|Number=Sing	6	nmod	_	_
10	soit	être	AUX	_	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	aux:pass	_	_
11	différé	différer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|Typo=Yes|VerbForm=Part	3	csubj:pass	_	CorrectGender=Fem|wordform=différée
12	après	après	ADP	_	_	14	case	_	_
13	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	14	det	_	SpaceAfter=No
14	ouverture	ouverture	NOUN	_	Gender=Fem|Number=Sing	11	obl:mod	_	_
15	de	de	ADP	_	_	17	case	_	_
16	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	17	det	_	_
17	États	état	NOUN	_	Gender=Masc|Number=Plur	14	nmod	_	SpaceAfter=No|wordform=états
18	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 csubj:pass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	wordform=il
2	fut	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	4	aux:pass	_	_
3	alors	alors	ADV	_	_	4	advmod	_	_
4	décidé	décider	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	qu'	que	SCONJ	_	_	13	mark	_	SpaceAfter=No
6	à	à	ADP	_	_	8	case	_	_
7	l'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	8	det	_	SpaceAfter=No
8	avenir	avenir	NOUN	_	Gender=Masc|Number=Sing	13	obl:mod	_	SpaceAfter=No
9	,	,	PUNCT	_	_	8	punct	_	_
10	ce	ce	PRON	_	Gender=Masc|Person=3|PronType=Dem	13	expl:subj	_	_
11	serait	être	AUX	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	trompette	trompette	NOUN	_	Gender=Fem|Number=Sing	4	csubj:pass	_	_
14	qui	qui	PRON	_	PronType=Rel	15	nsubj	_	_
15	convoquerait	convoquer	VERB	_	Mood=Cnd|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	advcl:cleft	_	_
16	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	17	det	_	_
17	compétiteurs	compétiteur	NOUN	_	Gender=Masc|Number=Plur	15	obj	_	SpaceAfter=No
18	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 csubj:pass	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	wordform=il
2	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
3	été	être	AUX	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	aux:pass	_	_
4	démontré	démontrer	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	que	que	SCONJ	_	_	9	mark	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	centrosaure	centrosaure	NOUN	_	Gender=Masc|Number=Sing	9	nsubj	_	_
8	était	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	cop	_	_
9	capable	capable	ADJ	_	Gender=Masc|Number=Sing	4	csubj:pass	_	_
10	de	de	ADP	_	_	12	mark	_	_
11	se	se	PRON	_	Person=3|PronType=Prs	12	dep:comp	_	_
12	tenir	tenir	VERB	_	VerbForm=Inf	9	xcomp:obl	_	_
13	debout	debout	ADV	_	_	12	advmod	_	_
14	sur	sur	ADP	_	_	16	case	_	_
15	deux	deux	NUM	_	Number=Plur	16	nummod	_	_
16	pattes	patte	NOUN	_	Gender=Fem|Number=Plur	12	obl:mod	_	SpaceAfter=No
17	,	,	PUNCT	_	_	25	punct	_	_
18	mais	mais	CCONJ	_	_	25	cc	_	_
19	à	à	ADP	_	_	21	case	_	_
20	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	21	det	_	_
21	jour	jour	NOUN	_	Gender=Masc|Number=Sing	25	obl:mod	_	SpaceAfter=No
22	,	,	PUNCT	_	_	21	punct	_	_
23	personne	personne	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Neg	25	nsubj	_	_
24	ne	ne	ADV	_	Polarity=Neg	25	advmod	_	_
25	sait	savoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	conj	_	_
26	exactement	exactement	ADV	_	_	25	advmod	_	_
27	comment	comment	ADV	_	_	25	advmod	_	SpaceAfter=No
28	.	.	PUNCT	_	_	4	punct	_	_

~~~


