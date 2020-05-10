---
layout: base
title:  'Statistics of ccomp in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `ccomp`

This relation is universal.

173 nodes (1%) are attached to their parents as `ccomp`.

167 instances of `ccomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.65895953757225.

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (141; 82% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (12; 7% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (5; 3% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Disons	dire	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	wordform=disons
2	seulement	seulement	ADV	RB	_	1	advmod	_	_
3	qu’	que	ADP	IN	_	5	mark	_	SpaceAfter=No|wordform=qu'
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	5	nsubj	_	_
5	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
6	tort	tort	NOUN	NN	Gender=Masc|Number=Sing	5	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	Je	il	PRON	PRP	Number=Sing|Person=1	2	nsubj	_	wordform=je
2	crois	croire	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	qu’	que	ADP	IN	_	6	mark	_	SpaceAfter=No|wordform=qu'
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3	6	expl:subj	_	_
5	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	juste	juste	ADJ	JJ	Gender=Masc|Number=Sing	2	ccomp	_	_
7	de	de	ADP	IN	_	8	mark	_	_
8	dire	dire	VERB	VB	VerbForm=Inf	6	csubj	_	_
9	que	que	SCONJ	IN	_	13	mark	_	_
10	Rocco	Rocco	PROPN	NNP	Gender=Masc|Number=Sing	13	nsubj	_	_
11	Catalano	Catalano	PROPN	NNP	Gender=Masc|Number=Sing	10	flat:name	_	_
12	ne	ne	ADV	RB	Polarity=Neg	13	advmod	_	_
13	vit	vivre	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	ccomp	_	_
14	que	que	ADV	RB	_	13	advmod	_	_
15	pour	pour	ADP	IN	_	17	case	_	_
16	le	le	DET	DT	Gender=Masc|Number=Sing	17	det	_	_
17	style	style	NOUN	NN	Gender=Masc|Number=Sing	13	obl	_	_
18	rétro	rétro	ADJ	JJ	Gender=Masc|Number=Sing	17	amod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 14 ccomp	color:blue
1	Les	le	DET	DT	Gender=Fem|Number=Plur	2	det	_	wordform=les
2	traces	trace	NOUN	NN	Gender=Fem|Number=Plur	9	nsubj	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	sang	sang	NOUN	NN	Gender=Masc|Number=Sing	2	nmod	_	_
5	sur	sur	ADP	IN	_	7	case	_	_
6	les	le	DET	DT	Gender=Masc|Number=Plur	7	det	_	_
7	vêtements	vêtement	NOUN	NN	Gender=Masc|Number=Plur	2	nmod	_	_
8	étaient	être	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	9	cop	_	_
9	telles	tel	ADJ	JJ	Gender=Fem|Number=Plur	0	root	_	_
10	qu'	que	ADP	IN	_	14	mark	_	SpaceAfter=No
11	elles	il	PRON	PRP	Gender=Fem|Number=Plur|Person=3	14	nsubj:pass	_	_
12	avaient	avoir	AUX	VBC	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin	14	aux:tense	_	_
13	été	être	AUX	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	14	aux:pass	_	_
14	décrites	décrire	VERB	VBN	Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part	9	ccomp	_	_
15	dans	dans	ADP	IN	_	17	case	_	_
16	les	le	DET	DT	Gender=Masc|Number=Plur	17	det	_	_
17	bulletins	bulletin	NOUN	NN	Gender=Masc|Number=Plur	14	obl	_	_
18	d'	de	ADP	IN	_	19	case	_	SpaceAfter=No
19	information	information	NOUN	NN	Gender=Fem|Number=Sing	17	nmod	_	_
20	de	de	ADP	INDT	_	22	case	_	_
21	le	le	DET	_	Gender=Masc|Number=Sing	22	det	_	_
22	jour	jour	NOUN	NN	Gender=Masc|Number=Sing	17	nmod	_	_
23	de	de	ADP	INDT	_	25	case	_	_
24	le	le	DET	_	Gender=Masc|Number=Sing	25	det	_	_
25	meurtre	meurtre	NOUN	NN	Gender=Masc|Number=Sing	22	nmod	_	SpaceAfter=No
26	.	.	PUNCT	.	_	9	punct	_	_

~~~


