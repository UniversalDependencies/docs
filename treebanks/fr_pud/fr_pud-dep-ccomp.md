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

The following 9 pairs of parts of speech are connected with `ccomp`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (142; 82% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (12; 7% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Disons	dire	VERB	VBC	Mood=Imp|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	wordform=disons
2	seulement	seulement	ADV	RB	_	1	advmod	_	_
3	qu’	que	ADP	IN	_	5	mark	_	SpaceAfter=No|wordform=qu'
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
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
1	Je	il	PRON	PRP	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	wordform=je
2	crois	croire	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
3	qu’	que	ADP	IN	_	6	mark	_	SpaceAfter=No|wordform=qu'
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	expl:subj	_	_
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
16	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	style	style	NOUN	NN	Gender=Masc|Number=Sing	13	obl	_	_
18	rétro	rétro	ADJ	JJ	Gender=Masc|Number=Sing	17	amod	_	SpaceAfter=No
19	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	wordform=il
2	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:tense	_	_
3	apparemment	apparemment	ADV	RB	_	4	advmod	_	_
4	dit	dire	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
5	que	que	SCONJ	IN	_	9	mark	_	_
6	c’	ce	PRON	PDEM	PronType=Dem	9	nsubj	_	SpaceAfter=No|wordform=c'
7	était	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	9	cop	_	_
8	un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	processus	processus	NOUN	NN	Gender=Masc|Number=Sing	4	ccomp	_	_
10	politique	politique	ADJ	JJ	Gender=Masc|Number=Sing	9	amod	_	_
11	et	et	CCONJ	CC	_	15	cc	_	_
12	qu’	que	ADP	IN	_	15	mark	_	SpaceAfter=No|wordform=qu'
13	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	_
14	avait	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	15	aux:tense	_	_
15	décidé	décider	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	conj	_	_
16	de	de	ADP	IN	_	20	mark	_	_
17	ne	ne	ADV	RB	Polarity=Neg	20	advmod	_	_
18	pas	pas	ADV	RB	Polarity=Neg	20	advmod	_	_
19	être	être	AUX	VB	VerbForm=Inf	20	cop	_	_
20	présent	présent	ADJ	JJ	Gender=Masc|Number=Sing	15	xcomp	_	SpaceAfter=No
21	.	.	PUNCT	.	_	4	punct	_	_

~~~


