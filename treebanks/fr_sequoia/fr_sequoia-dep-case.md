---
layout: base
title:  'Statistics of case in UD_French-Sequoia'
udver: '2'
---

## Treebank Statistics: UD_French-Sequoia: Relations: `case`

This relation is universal.

10341 nodes (15%) are attached to their parents as `case`.

10340 instances of `case` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.71637172420462.

The following 14 pairs of parts of speech are connected with `case`: <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (8520; 82% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (1257; 12% instances), <tt><a href="fr_sequoia-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (205; 2% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (158; 2% instances), <tt><a href="fr_sequoia-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (63; 1% instances), <tt><a href="fr_sequoia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (39; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (31; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt> (29; 0% instances), <tt><a href="fr_sequoia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (18; 0% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (10; 0% instances), <tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_sequoia-pos-SCONJ.html">SCONJ</a></tt> (5; 0% instances), <tt><a href="fr_sequoia-pos-X.html">X</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="fr_sequoia-pos-DET.html">DET</a></tt>-<tt><a href="fr_sequoia-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_sequoia-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_sequoia-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 case	color:blue
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
11	30	30	NUM	_	NumType=Card	10	nmod	_	_
12	à	à	ADP	_	_	14	case	_	_
13	18	18	NUM	_	NumType=Card	14	nummod	_	SpaceAfter=No
14	h	h	NOUN	_	_	10	obl:arg	_	SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 case	color:blue
1	L'	le	DET	_	Definite=Def|Number=Sing|PronType=Art	2	det	_	SpaceAfter=No
2	EBM	EBM	PROPN	_	Number=Sing	4	nsubj	_	_
3	s'	soi	PRON	_	Person=3|PronType=Prs|Reflex=Yes	4	expl:pv	_	SpaceAfter=No
4	inclina	incliner	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	devant	devant	ADP	_	_	6	case	_	_
6	Joeuf	Joeuf	PROPN	_	Gender=Masc|Number=Sing	4	obl:mod	_	_
7	par	par	ADP	_	_	8	case	_	_
8	70-61	70-61	NOUN	_	NumType=Card	4	obl:mod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 case	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	procès	procès	NOUN	_	Gender=Masc|Number=Sing	3	nsubj	_	_
3	a	avoir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
4	lieu	lieu	NOUN	_	Gender=Masc|Number=Sing	3	obj	_	_
5	à	à	ADP	_	_	6	case	_	_
6	Brazzaville	Brazzaville	PROPN	_	Gender=Masc|Number=Sing	3	obl:arg	_	_
7	en	en	ADP	_	_	8	case	_	_
8	2005	2005	NUM	_	NumType=Card	3	obl:mod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


