---
layout: base
title:  'Statistics of obl:arg in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="fr_pud-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="fr_pud-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="fr_pud-dep-obl-mod.html">obl:mod</a></tt>.

80 nodes (0%) are attached to their parents as `obl:arg`.

80 instances of `obl:arg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.25.

The following 11 pairs of parts of speech are connected with `obl:arg`: <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (43; 54% instances), <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (14; 18% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (5; 6% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-SYM.html">SYM</a></tt> (5; 6% instances), <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (4; 5% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (3; 4% instances), <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_pud-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-DET.html">DET</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 obl:arg	color:blue
1	L'	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No|wordform=l'
2	équipage	équipage	NOUN	NN	Gender=Masc|Number=Sing	6	nsubj	_	_
3	de	de	ADP	INDT	_	5	case	_	_
4	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	navire	navire	NOUN	NN	Gender=Masc|Number=Sing	2	nmod	_	_
6	comporte	comporter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	plus	plus	ADV	RBR	ExtPos=PRON	6	obj	_	_
8	de	de	ADP	IN	_	10	case	_	_
9	330	330	NUM	CD	_	10	nummod	_	_
10	membres	membre	NOUN	NN	Gender=Masc|Number=Plur	7	obl:arg	_	SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 obl:arg	color:blue
1	Vega	Vega	PROPN	NNP	Gender=Fem|Number=Sing	2	nsubj	_	_
2	suggèrait	suggérer	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
3	que	que	SCONJ	IN	_	6	mark	_	_
4	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	plupart	plupart	NOUN	NN	Gender=Fem|Number=Sing	6	nsubj	_	_
6	ignoreraient	ignorer	VERB	VBC	Mood=Cnd|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
7	son	son	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Person[psor]=3|Poss=Yes|PronType=Prs	8	det	_	_
8	histoire	histoire	NOUN	NN	Gender=Fem|Number=Sing	6	obj	_	_
9	à	à	ADP	IN	ExtPos=ADV	6	advmod	_	_
10	cause	cause	NOUN	NN	Gender=Fem|Number=Sing	9	fixed	_	_
11	de	de	ADP	IN	_	13	case	_	_
12	leur	son	DET	DTP$	Gender=Masc|Number=Sing|Number[psor]=Plur|Person=3|Person[psor]=3|Poss=Yes|PronType=Prs	13	det	_	_
13	âge	âge	NOUN	NN	Gender=Masc|Number=Sing	9	obl:arg	_	SpaceAfter=No
14	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 27 obl:arg	color:blue
1	La	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	wordform=la
2	Blindleia	Blindleia	PROPN	NNP	Gender=Fem|Number=Sing	5	nsubj	_	_
3	est	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	une	un	DET	DT	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	voie	voie	NOUN	NN	Gender=Fem|Number=Sing	0	root	_	_
6	naviguable	naviguable	ADJ	JJ	Gender=Fem|Number=Sing	5	amod	_	_
7	entourée	entourer	VERB	VBN	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	5	acl	_	_
8	de	de	ADP	IN	_	9	case	_	_
9	récifs	récif	NOUN	NN	Gender=Masc|Number=Plur	7	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	qui	qui	PRON	WP	PronType=Rel	12	nsubj	_	_
12	débute	débuter	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
13	près	près	ADV	RB	_	12	obl	_	_
14	de	de	ADP	IN	_	15	case	_	_
15	Kristiansand	Kristiansand	PROPN	NNP	Number=Sing	13	obl:arg	_	_
16	à	à	ADP	INDT	_	18	case	_	_
17	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
18	sud	sud	NOUN	NN	Gender=Masc|Number=Sing	12	obl	_	_
19	de	de	ADP	IN	_	21	case	_	_
20	la	le	DET	DT	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	Norvège	Norvège	PROPN	NNP	Gender=Fem|Number=Sing	18	nmod	_	_
22	et	et	CCONJ	CC	_	24	cc	_	_
23	s'	se	PRON	PRP	Person=3|PronType=Prs	24	obj	_	SpaceAfter=No
24	étend	étendre	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	conj	_	_
25	au-delà	au-delà	ADV	INDT	_	24	advmod	_	_
26	de	de	ADP	IN	_	27	case	_	_
27	Lillesand	Lillesand	PROPN	NNP	Number=Sing	25	obl:arg	_	SpaceAfter=No
28	.	.	PUNCT	.	_	5	punct	_	_

~~~


