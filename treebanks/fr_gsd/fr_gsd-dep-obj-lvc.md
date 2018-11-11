---
layout: base
title:  'Statistics of obj:lvc in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `obj:lvc`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="fr_gsd-dep-obj-agent.html">obj:agent</a></tt>.

6 nodes (0%) are attached to their parents as `obj:lvc`.

6 instances of `obj:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `obj:lvc`: <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (5; 83% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 obj:lvc	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	honoraires	honoraire	NOUN	_	Gender=Masc|Number=Plur	4	nsubj	_	_
3	sont	être	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	corrects	correct	ADJ	_	Gender=Masc|Number=Plur	0	root	_	_
5	et	et	CCONJ	_	_	6	cc	_	_
6	abordables	abordable	ADJ	_	Gender=Masc|Number=Plur	4	conj	_	_
7	et	et	CCONJ	_	_	10	cc	_	_
8	il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
9	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	fait	faire	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	4	conj	_	_
11	preuve	preuve	NOUN	_	Gender=Fem|Number=Sing	10	obj:lvc	_	_
12	d'	de	ADP	_	_	15	case	_	SpaceAfter=No
13	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
14	grande	grand	ADJ	_	Gender=Fem|Number=Sing	15	amod	_	_
15	capacité	capacité	NOUN	_	Gender=Fem|Number=Sing	10	obl:arg	_	_
16	d'	de	ADP	_	_	17	case	_	SpaceAfter=No
17	écoute	écoute	NOUN	_	Gender=Fem|Number=Sing	15	nmod	_	_
18	et	et	CCONJ	_	_	20	cc	_	_
19	d'	de	ADP	_	_	20	case	_	SpaceAfter=No
20	analyse	analyse	NOUN	_	Gender=Fem|Number=Sing	17	conj	_	_
21	de	de	ADP	_	_	23	case	_	_
22	nos	son	DET	_	Gender=Fem|Number=Plur|Poss=Yes|PronType=Prs	23	det	_	_
23	difficultés	difficulté	NOUN	_	Gender=Fem|Number=Plur	20	nmod	_	_

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
21	,	,	PUNCT	_	_	32	punct	_	_
22	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	23	det	_	_
23	roi	roi	NOUN	_	Gender=Masc|Number=Sing	32	nsubj	_	_
24	de	de	ADP	_	_	26	case	_	_
25	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	26	det	_	_
26	pays	pays	NOUN	_	Gender=Masc|Number=Sing	23	nmod	_	SpaceAfter=No
27	,	,	PUNCT	_	_	26	punct	_	_
28	Harald	Harald	PROPN	_	_	26	appos	_	_
29	V	V	NUM	_	_	28	compound	_	SpaceAfter=No
30	,	,	PUNCT	_	_	32	punct	_	_
31	a	avoir	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	aux	_	_
32	reçu	recevoir	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
33	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	34	det	_	_
34	siennes	sien	PRON	_	Gender=Fem|Number=Plur	32	obj	_	_
35	mardi	mardi	NOUN	_	Gender=Masc|Number=Sing	32	obl	_	SpaceAfter=No
36	.	.	PUNCT	_	_	32	punct	_	_

~~~


