---
layout: base
title:  'Statistics of root in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `root`

This relation is universal.

16341 nodes (4%) are attached to their parents as `root`.

16341 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.42353589131632.

The following 13 pairs of parts of speech are connected with `root`: -<tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt> (11991; 73% instances), -<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (2881; 18% instances), -<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (982; 6% instances), -<tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt> (178; 1% instances), -<tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt> (169; 1% instances), -<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (48; 0% instances), -<tt><a href="fr_gsd-pos-INTJ.html">INTJ</a></tt> (29; 0% instances), -<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (20; 0% instances), -<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (14; 0% instances), -<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (12; 0% instances), -<tt><a href="fr_gsd-pos-X.html">X</a></tt> (11; 0% instances), -<tt><a href="fr_gsd-pos-AUX.html">AUX</a></tt> (3; 0% instances), -<tt><a href="fr_gsd-pos-DET.html">DET</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Mais	mais	CCONJ	_	_	3	cc	_	wordform=mais
2	comment	comment	ADV	_	_	3	advmod	_	_
3	faire	faire	VERB	_	VerbForm=Inf	0	root	_	_
4	dans	dans	ADP	_	_	6	case	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	contexte	contexte	NOUN	_	Gender=Masc|Number=Sing	3	obl:mod	_	_
7	structurellement	structurellement	ADV	_	_	8	advmod	_	_
8	raciste	raciste	ADJ	_	Gender=Masc|Number=Sing	6	amod	_	_
9	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
1	C'	ce	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	9	nsubj	_	SpaceAfter=No|wordform=c'
2	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
3	véritablement	véritablement	ADV	_	_	9	advmod	_	_
4	pour	pour	ADP	_	_	7	case	_	_
5	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	futur	futur	ADJ	_	Gender=Masc|Number=Sing	7	amod	_	_
7	baptisé	baptiser	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	9	obl:mod	_	_
8	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	changement	changement	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
10	de	de	ADP	_	_	11	case	_	_
11	cap	cap	NOUN	_	Gender=Masc|Number=Sing	9	nmod	_	SpaceAfter=No
12	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Il	il	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	wordform=il
2	ne	ne	ADV	_	Polarity=Neg	4	advmod	_	_
3	sera	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	4	cop	_	_
4	présent	présent	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	que	que	ADV	_	_	10	advmod	_	_
6	durant	durant	ADP	_	_	10	case	_	_
7	les	le	DET	_	Definite=Def|Number=Plur|PronType=Art	10	det	_	_
8	10	10	NUM	_	Number=Plur	10	nummod	_	_
9	premières	premier	ADJ	_	Gender=Fem|Number=Plur	10	amod	_	_
10	parties	partie	NOUN	_	Gender=Fem|Number=Plur	4	obl:mod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	4	punct	_	_

~~~


