---
layout: base
title:  'Statistics of det in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `det`

This relation is universal.

10374 nodes (15%) are attached to their parents as `det`.

10374 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.08829766724504.

The following 9 pairs of parts of speech are connected with `det`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (9624; 93% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (513; 5% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (93; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (63; 1% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (37; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (36; 0% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (5; 0% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	Ouverture	ouverture	NOUN	_	Gender=Fem|Number=Sing	0	root	_	_
2	tous	tout	ADJ	_	Gender=Masc|Number=Plur	4	amod	_	_
3	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	4	det	_	_
4	jours	jour	NOUN	_	Gender=Masc|Number=Plur	1	nmod	_	_
5	sauf	sauf	ADP	_	_	7	case	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	lundi	lundi	NOUN	_	Gender=Masc|Number=Sing	4	nmod	_	_
8	de	de	ADP	_	_	10	case	_	_
9	14	14	NUM	_	NumType=Card	10	nummod	_	SpaceAfter=No
10	h	h	NOUN	_	_	1	nmod	_	SpaceAfter=No
11	30	30	NUM	_	NumType=Card	10	nummod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	18	18	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
14	h	h	NOUN	_	_	10	nmod	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	EBM	EBM	PROPN	_	Number=Sing	4	nsubj	_	_
3	s'	se	PRON	_	Person=3|Reflex=Yes	4	expl:comp	_	SpaceAfter=No
4	inclina	incliner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	devant	devant	ADP	_	_	6	case	_	_
6	Joeuf	Joeuf	PROPN	_	Gender=Masc|Number=Sing	4	obl:mod	_	_
7	par	par	ADP	_	_	8	case	_	_
8	70-61	70-61	NOUN	_	NumType=Card	4	obl:mod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	14	14	NUM	_	NumType=Card	8	obl:mod	_	_
3	juillet	juillet	NOUN	_	Gender=Masc|Number=Sing	2	nmod	_	_
4	2006	2006	NUM	_	NumType=Card	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	_	_	8	punct	_	_
6	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	tribunal	tribunal	NOUN	_	Gender=Masc|Number=Sing	8	nsubj	_	_
8	rend	rendre	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
9	sa	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes	10	det	_	_
10	décision	décision	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	8	punct	_	_

~~~


