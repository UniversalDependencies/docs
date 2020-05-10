---
layout: base
title:  'Statistics of amod in UD_French-GSD'
udver: '2'
---

## Treebank Statistics: UD_French-GSD: Relations: `amod`

This relation is universal.

20292 nodes (5%) are attached to their parents as `amod`.

14191 instances of `amod` (70%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.25261186674552.

The following 16 pairs of parts of speech are connected with `amod`: <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (19443; 96% instances), <tt><a href="fr_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (647; 3% instances), <tt><a href="fr_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (62; 0% instances), <tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (50; 0% instances), <tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (42; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (13; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt> (9; 0% instances), <tt><a href="fr_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt> (5; 0% instances), <tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="fr_gsd-pos-X.html">X</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="fr_gsd-pos-ADP.html">ADP</a></tt>-<tt><a href="fr_gsd-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_gsd-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 amod	color:blue
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
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	wordform=le
2	dialecte	dialecte	NOUN	_	Gender=Masc|Number=Sing	6	nsubj	_	_
3	local	local	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	_
4	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	un	un	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	dérivé	dérivé	NOUN	_	Gender=Masc|Number=Sing	0	root	_	_
7	de	de	ADP	_	_	9	case	_	_
8	le	le	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Basque	Basque	PROPN	_	_	6	nmod	_	_
10	occidental	occidental	ADJ	_	Gender=Masc|Number=Sing	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Tout	tout	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	wordform=tout
2	cela	cela	PRON	_	Number=Sing|PronType=Dem	4	nsubj	_	_
3	est	être	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	présent	présent	ADJ	_	Gender=Masc|Number=Sing	0	root	_	_
5	dans	dans	ADP	_	_	7	case	_	_
6	sa	son	DET	_	Gender=Fem|Number=Sing|Poss=Yes|PronType=Prs	7	det	_	_
7	passion	passion	NOUN	_	Gender=Fem|Number=Sing	4	obl:mod	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


