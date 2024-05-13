---
layout: base
title:  'Statistics of xcomp:lvc in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `xcomp:lvc`

This relation is a language-specific subtype of <tt><a href="fr_gsd-dep-xcomp.html">xcomp</a></tt>.

2 nodes (0%) are attached to their parents as `xcomp:lvc`.

2 instances of `xcomp:lvc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `xcomp:lvc`: <tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp:lvc	color:blue
1	"	"	PUNCT	_	_	4	punct	_	SpaceAfter=No
2	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	wordform=il
3	n'	ne	ADV	_	Polarity=Neg	4	advmod	_	SpaceAfter=No
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	pas	pas	ADV	_	Polarity=Neg	4	advmod	_	_
6	question	question	NOUN	_	Gender=Fem|Number=Sing	4	xcomp:lvc	_	_
7	de	de	ADP	_	_	8	mark	_	_
8	laisser	laisser	VERB	_	VerbForm=Inf	4	csubj	_	_
9	perdurer	perdurer	VERB	_	VerbForm=Inf	8	xcomp	_	_
10	une	un	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	situation	situation	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	_
12	dans	dans	ADP	_	_	13	case	_	_
13	laquelle	lequel	PRON	_	Gender=Fem|Number=Sing|PronType=Rel	23	obl:mod	_	_
14	10	10	NUM	_	_	17	nummod	_	_
15	à	à	ADP	_	_	16	case	_	_
16	12	12	NUM	_	_	14	nmod	_	SpaceAfter=No
17	%	%	SYM	_	_	23	nsubj	_	EXTPOS=NOUN|Type=Conv
18	de	de	ADP	_	_	20	case	_	_
19	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	20	det	_	_
20	voyageurs	voyageur	NOUN	_	Gender=Masc|Number=Plur	17	nmod	_	_
21	ne	ne	ADV	_	Polarity=Neg	23	advmod	_	_
22	s'	se	PRON	_	Person=3|PronType=Prs	23	expl:comp	_	SpaceAfter=No
23	acquittent	acquitter	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	_
24	pas	pas	ADV	_	Polarity=Neg	23	advmod	_	_
25	de	de	ADP	_	_	27	case	_	_
26	leur	son	DET	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	27	det	_	_
27	billet	billet	NOUN	_	Gender=Masc|Number=Sing	23	obl:arg	_	SpaceAfter=No
28	"	"	PUNCT	_	_	4	punct	_	_
29	avertit	avertir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
30	aussi	aussi	ADV	_	_	29	advmod	_	_
31	Josiane	Josiane	PROPN	_	_	29	nsubj	_	_
32	Beaud	Beaud	PROPN	_	_	31	flat:name	_	SpaceAfter=No
33	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 xcomp:lvc	color:blue
1	Les	le	DET	_	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	_	wordform=les
2	fameuses	fameux	ADJ	_	Gender=Fem|Number=Plur	3	amod	_	_
3	culottes	culotte	NOUN	_	Gender=Fem|Number=Plur	10	nsubj	_	_
4	de	de	ADP	_	_	6	case	_	_
5	les	le	DET	_	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	6	det	_	_
6	joueurs	joueur	NOUN	_	Gender=Masc|Number=Plur	3	nmod	_	_
7	de	de	ADP	_	_	8	case	_	_
8	curling	curling	NOUN	_	Gender=Masc|Number=Sing	6	nmod	_	_
9	norvégiens	norvégien	ADJ	_	Gender=Masc|Number=Plur	6	amod	_	_
10	ont	avoir	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	32	advcl	_	_
11	beau	beau	ADJ	_	Gender=Masc|Number=Sing	10	xcomp:lvc	_	_
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


