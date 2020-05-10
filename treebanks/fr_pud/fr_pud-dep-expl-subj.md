---
layout: base
title:  'Statistics of expl:subj in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `expl:subj`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `expl`: <tt><a href="fr_pud-dep-expl-comp.html">expl:comp</a></tt>.

83 nodes (0%) are attached to their parents as `expl:subj`.

82 instances of `expl:subj` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.04819277108434.

The following 3 pairs of parts of speech are connected with `expl:subj`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (62; 75% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (20; 24% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 expl:subj	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	3	expl:subj	_	wordform=il
2	y	y	PRON	PRP	Person=3	3	expl:comp	_	_
3	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	encore	encore	ADV	RB	_	3	advmod	_	_
5	des	un	DET	DT	Gender=Fem|Number=Plur	6	det	_	_
6	questions	question	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
7	qui	qui	PRON	WP	Gender=Fem|Number=Plur	8	nsubj	_	_
8	demeurent	demeurer	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	6	acl:relcl	_	_
9	sans	sans	ADP	IN	_	10	case	_	_
10	réponse	réponse	NOUN	NN	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 expl:subj	color:blue
1	Sinon	sinon	ADV	RB	_	10	discourse	_	SpaceAfter=No|wordform=sinon
2	,	,	PUNCT	,	_	1	punct	_	_
3	ce	ce	DET	DT	Gender=Masc|Number=Sing	4	det	_	_
4	tarif	tarif	NOUN	NN	Gender=Masc|Number=Sing	10	nsubj	_	_
5	normal	normal	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
6	ou	ou	CCONJ	CC	_	7	cc	_	_
7	prépayé	prépayé	ADJ	JJ	Gender=Masc|Number=Sing	5	conj	_	_
8	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	cop	_	SpaceAfter=No
9	-il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	10	expl:subj	_	_
10	cher	cher	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	_
11	?	?	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 expl:subj	color:blue
1	Depuis	depuis	ADP	IN	_	3	case	_	wordform=depuis
2	l'	le	DET	DT	Gender=Masc|Number=Sing	3	det	_	SpaceAfter=No
3	empereur	empereur	NOUN	NN	Gender=Masc|Number=Sing	8	obl	_	_
4	Meiji	Meiji	PROPN	NNP	Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No
5	,	,	PUNCT	,	_	3	punct	_	_
6	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	8	expl:subj	_	_
7	était	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
8	coutume	coutume	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
9	d'	de	ADP	IN	_	10	case	_	SpaceAfter=No
10	avoir	avoir	VERB	VB	VerbForm=Inf	8	xcomp	_	_
11	un	un	DET	DT	Gender=Masc|Number=Sing	12	det	_	_
12	empereur	empereur	NOUN	NN	Gender=Masc|Number=Sing	10	obj	_	_
13	par	par	ADP	IN	_	14	case	_	_
14	époque	époque	NOUN	NN	Gender=Fem|Number=Sing	10	obl	_	_
15	et	et	CCONJ	CC	_	17	cc	_	_
16	de	de	ADP	IN	_	17	case	_	_
17	renommer	renommer	VERB	VB	VerbForm=Inf	10	conj	_	_
18	chaque	chaque	ADJ	JJ	Gender=Masc|Number=Sing	19	amod	_	_
19	empereur	empereur	NOUN	NN	Gender=Masc|Number=Sing	17	obj	_	_
20	après	après	ADP	IN	_	22	case	_	_
21	sa	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	22	det	_	_
22	mort	mort	NOUN	NN	Gender=Fem|Number=Sing	17	obl	_	_
23	en	en	ADP	IN	_	24	mark	_	_
24	utilisant	utiliser	VERB	VBG	Tense=Pres|VerbForm=Part	17	advcl	_	_
25	le	le	DET	DT	Gender=Masc|Number=Sing	26	det	_	_
26	nom	nom	NOUN	NN	Gender=Masc|Number=Sing	24	obj	_	_
27	de	de	ADP	IN	_	29	case	_	_
28	l'	le	DET	DT	Gender=Fem|Number=Sing	29	det	_	SpaceAfter=No
29	époque	époque	NOUN	NN	Gender=Fem|Number=Sing	26	nmod	_	_
30	pendant	pendant	ADP	IN	_	31	case	_	_
31	laquelle	lequel	PRON	WP	Gender=Fem|Number=Sing	34	obl	_	_
32	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	34	nsubj	_	_
33	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	34	aux:tense	_	_
34	régné	régner	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	29	acl:relcl	_	SpaceAfter=No
35	.	.	PUNCT	.	_	8	punct	_	_

~~~


