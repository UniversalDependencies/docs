---
layout: base
title:  'Statistics of ccomp in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `ccomp`

This relation is universal.

174 nodes (1%) are attached to their parents as `ccomp`.

168 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.63793103448276.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (142; 82% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (12; 7% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Disons	_	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Tense=Pres	0	root	_	_
2	seulement	_	ADV	RB	_	1	advmod	_	_
3	qu’	_	ADP	IN	_	5	mark	_	OrigForm=qu'|SpaceAfter=No
4	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	a	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	ccomp	_	_
6	tort	_	NOUN	NN	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	.	_	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Je	_	PRON	PRP	Number=Sing|Person=1	2	nsubj	_	_
2	crois	_	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	qu’	_	ADP	IN	_	6	mark	_	OrigForm=qu'|SpaceAfter=No
4	il	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	6	expl:subj	_	_
5	est	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	6	cop	_	_
6	juste	_	ADJ	JJ	Gender=Masc|Number=Sing	2	ccomp	_	_
7	de	_	ADP	IN	_	8	mark	_	_
8	dire	_	VERB	VB	_	6	csubj	_	_
9	que	_	SCONJ	IN	_	13	mark	_	_
10	Rocco	_	PROPN	NNP	Gender=Masc|Number=Sing	13	nsubj	_	_
11	Catalano	_	PROPN	NNP	Gender=Masc|Number=Sing	10	flat:name	_	_
12	ne	_	ADV	RB	Polarity=Neg	13	advmod	_	_
13	vit	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	8	ccomp	_	_
14	que	_	ADV	RB	_	13	advmod	_	_
15	pour	_	ADP	IN	_	17	case	_	_
16	le	_	DET	DT	Gender=Masc|Number=Sing	17	det	_	_
17	style	_	NOUN	NN	Gender=Masc|Number=Sing	13	obl	_	_
18	rétro	_	ADJ	JJ	Gender=Masc|Number=Sing	17	amod	_	SpaceAfter=No
19	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 ccomp	color:blue
1	Les	_	DET	DT	Gender=Fem|Number=Plur	2	det	_	_
2	traces	_	NOUN	NN	Gender=Fem|Number=Plur	9	nsubj	_	_
3	de	_	ADP	IN	_	4	case	_	_
4	sang	_	NOUN	NN	Gender=Masc|Number=Sing	2	nmod	_	_
5	sur	_	ADP	IN	_	7	case	_	_
6	les	_	DET	DT	Gender=Masc|Number=Plur	7	det	_	_
7	vêtements	_	NOUN	NN	Gender=Masc|Number=Plur	2	nmod	_	_
8	étaient	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp	9	cop	_	_
9	telles	_	ADJ	JJ	Gender=Fem|Number=Plur	0	root	_	_
10	qu'	_	ADP	IN	_	14	mark	_	SpaceAfter=No
11	elles	_	PRON	PRP	Gender=Fem|Number=Plur|Person=3	14	nsubj:pass	_	_
12	avaient	_	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp	14	aux:tense	_	_
13	été	_	AUX	VBN	Gender=Masc|Number=Sing	14	aux:pass	_	_
14	décrites	_	VERB	VBN	Gender=Fem|Number=Plur	9	ccomp	_	_
15	dans	_	ADP	IN	_	17	case	_	_
16	les	_	DET	DT	Gender=Masc|Number=Plur	17	det	_	_
17	bulletins	_	NOUN	NN	Gender=Masc|Number=Plur	14	obl	_	_
18	d'	_	ADP	IN	_	19	case	_	SpaceAfter=No
19	information	_	NOUN	NN	Gender=Fem|Number=Sing	17	nmod	_	_
20	de	de	ADP	INDT	_	22	case	_	_
21	le	le	DET	_	Gender=Masc|Number=Sing	22	det	_	_
22	jour	_	NOUN	NN	Gender=Masc|Number=Sing	17	nmod	_	_
23	de	de	ADP	INDT	_	25	case	_	_
24	le	le	DET	_	Gender=Masc|Number=Sing	25	det	_	_
25	meurtre	_	NOUN	NN	Gender=Masc|Number=Sing	22	nmod	_	SpaceAfter=No
26	.	_	PUNCT	.	_	9	punct	_	_

~~~


