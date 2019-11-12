---
layout: base
title:  'Statistics of obj:lvc in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="fr_gsd-dep-obj-agent.html">obj:agent</a></tt>.

83 nodes (0%) are attached to their parents as `obj:lvc`.

83 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21686746987952.

The following 3 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (80; 96% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (2; 2% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj:lvc	color:blue
1	On	on	PRON	_	Gender=Masc|Number=Sing|Person=3	2	nsubj	_	_
2	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	droit	droit	NOUN	_	Gender=Masc|Number=Sing	2	obj:lvc	_	_
5	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
6	d'	de	ADP	_	_	8	mark	_	SpaceAfter=No
7	être	être	AUX	_	VerbForm=Inf	8	cop	_	_
8	contre	contre	ADP	_	_	2	xcomp	_	SpaceAfter=No
9	"	"	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 obj:lvc	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	3	det	_	_
2	deux	deux	NUM	_	_	3	nummod	_	_
3	ingénieurs	ingénieur	NOUN	_	Gender=Masc|Number=Plur	8	nsubj	_	_
4	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	6	advmod	_	EXTPOS=ADV|Type=MWE
5	plus	plus	ADV	_	_	4	fixed	_	_
6	rusés	rusé	ADJ	_	Gender=Masc|Number=Plur	3	amod	_	_
7	s'	se	PRON	_	Person=3|PronType=Prs	8	expl:comp	_	SpaceAfter=No
8	empressent	empresser	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	de	de	ADP	_	_	10	mark	_	_
10	contourner	contourner	VERB	_	VerbForm=Inf	8	xcomp	_	_
11	ce	ce	DET	_	Gender=Masc|Number=Sing|PronType=Dem	12	det	_	_
12	point	point	NOUN	_	Gender=Masc|Number=Sing	10	obj	_	_
13	de	de	ADP	_	_	15	case	_	_
14	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	règlement	règlement	NOUN	_	Gender=Masc|Number=Sing	12	nmod	_	_
16	en	en	ADP	_	_	17	mark	_	_
17	faisant	faire	VERB	_	Tense=Pres|VerbForm=Part	10	advcl	_	_
18	en	en	ADP	_	_	17	obj:lvc	_	EXTPOS=ADV|Type=MWE
19	sorte	sorte	NOUN	_	Gender=Fem|Number=Sing	18	fixed	_	_
20	que	que	SCONJ	_	_	23	mark	_	_
21	la	le	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	22	det	_	_
22	voiture	voiture	NOUN	_	Gender=Fem|Number=Sing	23	nsubj	_	_
23	respecte	respecter	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	ccomp	_	_
24	ces	ce	DET	_	Gender=Masc|Number=Plur|PronType=Dem	26	det	_	_
25	six	six	NUM	_	_	26	nummod	_	_
26	centimètres	centimètre	NOUN	_	Gender=Masc|Number=Plur	23	obj	_	_
27	à	à	ADP	_	_	29	case	_	_
28	l'	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	29	det	_	SpaceAfter=No
29	arrêt	arrêt	NOUN	_	Gender=Masc|Number=Sing	23	obl:mod	_	SpaceAfter=No
30	,	,	PUNCT	_	_	33	punct	_	_
31	pour	pour	ADP	_	_	33	case	_	_
32	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	33	det	_	_
33	contrôles	contrôle	NOUN	_	Gender=Masc|Number=Plur	29	nmod	_	_
34	techniques	technique	ADJ	_	Gender=Masc|Number=Plur	33	amod	_	SpaceAfter=No
35	,	,	PUNCT	_	_	39	punct	_	_
36	mais	mais	CCONJ	_	_	39	cc	_	_
37	pas	pas	ADV	_	_	39	advmod	_	_
38	en	en	ADP	_	_	39	case	_	_
39	course	course	NOUN	_	Gender=Fem|Number=Sing	29	conj	_	SpaceAfter=No
40	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obj:lvc	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	_
2	fameuses	fameux	ADJ	_	Gender=Fem|Number=Plur	3	amod	_	_
3	culottes	culotte	NOUN	_	Gender=Fem|Number=Plur	10	nsubj	_	_
4	de	de	ADP	_	_	6	case	_	_
5	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	joueurs	joueur	NOUN	_	Gender=Masc|Number=Plur	3	nmod	_	_
7	de	de	ADP	_	_	8	case	_	_
8	curling	curling	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
9	norvégiens	norvégien	ADJ	_	Gender=Masc|Number=Plur	6	amod	_	_
10	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	32	advcl	_	_
11	beau	beau	ADJ	_	Gender=Masc|Number=Sing	10	obj:lvc	_	_
12	être	être	AUX	_	VerbForm=Inf	14	cop	_	_
13	en	en	ADP	_	_	14	case	_	_
14	rupture	rupture	NOUN	_	Gender=Fem|Number=Sing	10	xcomp	_	_
15	de	de	ADP	_	_	16	case	_	_
16	stock	stock	NOUN	_	Gender=Masc|Number=Sing	14	nmod	_	_
17	tant	tant	ADV	_	_	20	advmod	_	_
18	elles	il	PRON	_	Gender=Fem|Number=Plur|Person=3|PronType=Prs	20	nsubj	_	_
19	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	20	cop	_	_
20	populaires	populaire	ADJ	_	Gender=Fem|Number=Plur	14	advcl	_	SpaceAfter=No
21	,	,	PUNCT	_	_	10	punct	_	_
22	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	roi	roi	NOUN	_	Gender=Masc|Number=Sing	32	nsubj	_	_
24	de	de	ADP	_	_	26	case	_	_
25	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	pays	pays	NOUN	_	Gender=Masc|Number=Sing	23	nmod	_	SpaceAfter=No
27	,	,	PUNCT	_	_	28	punct	_	_
28	Harald	Harald	PROPN	_	_	26	appos	_	_
29	V	V	NUM	_	_	28	nmod	_	SpaceAfter=No
30	,	,	PUNCT	_	_	23	punct	_	_
31	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	aux:tense	_	_
32	reçu	recevoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
33	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	34	det	_	_
34	siennes	sien	PRON	_	Gender=Fem|Number=Plur	32	obj	_	_
35	mardi	mardi	NOUN	_	Gender=Masc|Number=Sing	32	obl	_	SpaceAfter=No
36	.	.	PUNCT	_	_	32	punct	_	_

~~~


