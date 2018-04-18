---
layout: base
title:  'Statistics of xcomp in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `xcomp`

This relation is universal.

973 nodes (1%) are attached to their parents as `xcomp`.

917 instances of `xcomp` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.61870503597122.

The following 23 pairs of parts of speech are connected with `xcomp`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (473; 49% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (213; 22% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (90; 9% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (85; 9% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (23; 2% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (17; 2% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (15; 2% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (9; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (9; 1% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (6; 1% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (5; 1% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Nikica	Nikica	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	_
2	može	moći	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	da	da	SCONJ	_	_	4	mark	_	_
4	pojede	pojesti	VERB	_	Number=Sing|Person=3|Tense=Pres	2	xcomp	_	_
5	50	50	NUM	_	NumType=Card	6	nummod:gov	_	_
6	kilograma	kilogram	NOUN	_	Case=Gen|Gender=Masc|Number=Plur	4	obl	_	_
7	hleba	hleb	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	6	nmod	_	_
8	dnevno	dnevno	ADV	_	Degree=Pos	4	advmod	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 xcomp	color:blue
1	Počevši	početi	ADV	_	VerbForm=Part	9	xcomp	_	_
2	od	od	ADP	_	Case=Gen	4	case	_	_
3	1.	1.	NUM	_	NumType=Ord	4	nummod	_	_
4	januara	januar	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	1	obl	_	_
5	na	na	ADP	_	Case=Acc	6	case	_	_
6	robu	roba	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	9	obl	_	_
7	će	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	9	aux	_	_
8	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	9	compound	_	_
9	plaćati	plaćati	VERB	_	VerbForm=Inf	0	root	_	_
10	PDV	PDV	PROPN	_	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	To	taj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
2	se	sebe	PRON	_	Case=Acc|Number=Sing|Reflex=Yes	3	compound	_	_
3	može	moći	VERB	_	Number=Sing|Person=3|Tense=Pres	0	root	_	_
4	smatrati	smatrati	VERB	_	VerbForm=Inf	3	xcomp	_	_
5	uspešnom	uspešan	ADJ	_	Case=Ins|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	6	amod	_	_
6	fazom	faza	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	4	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


