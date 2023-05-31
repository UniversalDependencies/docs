---
layout: base
title:  'Statistics of obl:mod in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `obl:mod`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="fr_pud-dep-obl-agent.html">obl:agent</a></tt>.

101 nodes (0%) are attached to their parents as `obl:mod`.

58 instances of `obl:mod` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.99009900990099.

The following 10 pairs of parts of speech are connected with `obl:mod`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (33; 33% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (21; 21% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (18; 18% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (12; 12% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (7; 7% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADV.html">ADV</a></tt> (3; 3% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 obl:mod	color:blue
1	Guitariste	guitariste	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	wordform=guitariste
2	passionné	passionner	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	acl	_	SpaceAfter=No
3	,	,	PUNCT	,	_	4	punct	_	_
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	1	appos	_	_
5	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:tense	_	_
6	participé	participer	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
7	à	à	ADP	IN	_	9	case	_	_
8	un	un	DET	DT	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	concert	concert	NOUN	NN	Gender=Masc|Number=Sing	6	obl	_	_
10	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
11	même	même	ADJ	JJ	Gender=Fem|Number=Sing	12	amod	_	_
12	année	année	NOUN	NN	Gender=Fem|Number=Sing	6	obl:mod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 10 obl:mod	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	expl:subj	_	wordform=il
2	s'	se	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	SpaceAfter=No
3	agit	agir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	de	de	ADP	IN	_	7	case	_	_
5	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
6	seule	seul	ADJ	JJ	Gender=Fem|Number=Sing	7	amod	_	_
7	région	région	NOUN	NN	Gender=Fem|Number=Sing	3	obl	_	_
8	d'	de	ADP	IN	_	9	case	_	SpaceAfter=No
9	Alaska	Alaska	PROPN	NNP	Gender=Masc|Number=Sing	7	nmod	_	_
10	où	où	PRON	WP	PronType=Rel	16	obl:mod	_	_
11	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	12	det	_	_
12	température	température	NOUN	NN	Gender=Fem|Number=Sing	16	nsubj	_	_
13	moyenne	moyen	ADJ	JJ	Gender=Fem|Number=Sing	12	amod	_	_
14	de	de	ADP	IN	_	15	case	_	_
15	jour	jour	NOUN	NN	Gender=Masc|Number=Sing	12	nmod	_	_
16	dépasse	dépasser	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	acl:relcl	_	_
17	0	0	NUM	CD	_	18	nummod	_	SpaceAfter=No
18	°	°	SYM	SYM	_	16	obj	_	SpaceAfter=No
19	C	C	SYM	SYM	_	18	nmod	_	wordform=c
20	en	en	ADP	IN	_	21	case	_	_
21	hiver	hiver	NOUN	NN	Gender=Masc|Number=Sing	16	obl	_	SpaceAfter=No
22	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 obl:mod	color:blue
1	Il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	wordform=il
2	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:tense	_	_
3	terminé	terminer	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
4	ses	son	DET	DTP$	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=3|Person[psor]=3|Poss=Yes|PronType=Prs	5	det	_	_
5	études	étude	NOUN	NN	Gender=Fem|Number=Plur	3	obj	_	_
6	et	et	CCONJ	CC	_	8	cc	_	_
7	a	avoir	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux:tense	_	_
8	obtenu	obtenir	VERB	VBN	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	3	conj	_	_
9	sa	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Poss=Yes|PronType=Prs	10	det	_	_
10	maitrise	maitrise	NOUN	NN	Gender=Fem|Number=Sing	8	obj	_	_
11	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	21	21	NUM	CD	_	3	obl:mod	_	_
13	avril	avril	NOUN	NNP	Gender=Masc|Number=Sing	12	nmod	_	_
14	1882	1882	NUM	CD	_	13	nmod	_	SpaceAfter=No
15	.	.	PUNCT	.	_	3	punct	_	_

~~~


