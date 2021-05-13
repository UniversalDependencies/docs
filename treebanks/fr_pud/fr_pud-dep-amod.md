---
layout: base
title:  'Statistics of amod in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `amod`

This relation is universal.

1394 nodes (6%) are attached to their parents as `amod`.

959 instances of `amod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.21879483500717.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1358; 97% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (30; 2% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 amod	color:blue
1	Peut-être	peut-être	ADV	RB	_	8	advmod	_	wordform=peut-être
2	que	que	ADP	IN	_	1	fixed	_	_
3	le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
4	code	code	NOUN	NN	Gender=Masc|Number=Sing	8	nsubj	_	_
5	vestimentaire	vestimentaire	ADJ	JJ	Gender=Masc|Number=Sing	4	amod	_	_
6	était	être	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	cop	_	_
7	trop	trop	ADV	RB	_	8	advmod	_	_
8	strict	strict	ADJ	JJ	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 10 amod	color:blue
1	Et	et	CCONJ	CC	_	6	cc	_	wordform=et
2	bien	bien	ADV	RB	_	6	advmod	_	_
3	sûr	sûr	ADJ	JJ	Gender=Masc|Number=Sing	2	fixed	_	_
4	il	il	PRON	PRP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	expl:subj	_	_
5	y	y	PRON	PRP	Person=3|PronType=Prs	6	expl:comp	_	_
6	a	avoir	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
7	Bob	Bob	PROPN	NNP	Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
8	,	,	PUNCT	,	_	10	punct	_	_
9	toujours	toujours	ADV	RB	_	10	advmod	_	_
10	divertissant	divertissant	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 15 amod	color:blue
1	Le	le	DET	DT	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	temps	temps	NOUN	NN	Gender=Masc|Number=Sing	10	nsubj	_	_
3	de	de	ADP	IN	_	4	case	_	_
4	prestation	prestation	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	_
5	effective	effectif	ADJ	JJ	Gender=Fem|Number=Sing	4	amod	_	_
6	de	de	ADP	IN	_	9	case	_	_
7	cette	ce	DET	DT	Gender=Fem|Number=Sing	9	det	_	_
8	première	premier	ADJ	JJ	Gender=Fem|Number=Sing	9	amod	_	_
9	heure	heure	NOUN	NN	Gender=Fem|Number=Sing	2	nmod	_	_
10	sera	être	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	0	root	_	_
11	ainsi	ainsi	ADV	RB	_	10	advmod	_	_
12	à	à	ADP	INDT	_	14	case	_	_
13	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	moins	moins	ADV	RBR	_	15	advmod	_	_
15	égal	égal	ADJ	JJ	Gender=Masc|Number=Sing	10	amod	_	_
16	à	à	ADP	IN	_	18	case	_	_
17	45	45	NUM	CD	_	18	nummod	_	_
18	minutes	minute	NOUN	NN	Gender=Fem|Number=Plur	15	obl	_	SpaceAfter=No
19	.	.	PUNCT	.	_	10	punct	_	_

~~~


