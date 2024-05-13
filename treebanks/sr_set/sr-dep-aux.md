---
layout: base
title:  'Statistics of aux in UD_Serbian'
udver: '2'
---

## Treebank Statistics: UD_Serbian: Relations: `aux`

This relation is universal.

4101 nodes (5%) are attached to their parents as `aux`.

2776 instances of `aux` (68%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87564008778347.

The following 14 pairs of parts of speech are connected with `aux`: <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (3177; 77% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (709; 17% instances), <tt><a href="sr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (125; 3% instances), <tt><a href="sr-pos-AUX.html">AUX</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (49; 1% instances), <tt><a href="sr-pos-ADV.html">ADV</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (12; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-VERB.html">VERB</a></tt> (8; 0% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="sr-pos-NUM.html">NUM</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="sr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (4; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="sr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sr-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sr-pos-PRON.html">PRON</a></tt>-<tt><a href="sr-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sr-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sr-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sr-pos-VERB.html">VERB</a></tt>-<tt><a href="sr-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Druga	drugi	NUM	_	Case=Nom|Gender=Fem|Number=Sing|NumType=Ord	2	nummod	_	_
2	dvojica	dvojica	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	_
3	su	biti	AUX	_	Number=Plur|Person=3|Tense=Pres	4	aux	_	_
4	rekli	reći	VERB	_	Gender=Masc|Number=Plur|VerbForm=Part	0	root	_	_
5	da	da	SCONJ	_	_	7	mark	_	_
6	neće	hteti	AUX	_	Number=Sing|Person=3|Tense=Pres	7	aux	_	_
7	prisustvovati	prisustvovati	VERB	_	VerbForm=Inf	4	ccomp	_	SpaceAfter=No
8	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 aux	color:blue
1	Međutim	međutim	ADV	_	Degree=Pos	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	sastanak	sastanak	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	6	nsubj	_	_
4	nikada	nikada	ADV	_	Degree=Pos	6	advmod	_	_
5	nije	biti	AUX	_	Number=Sing|Person=3|Tense=Pres	6	aux	_	_
6	održan	održati	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|VerbForm=Part	0	root	_	SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
2	Kada	kada	ADV	_	Degree=Pos	5	mark	_	_
3	bih	biti	AUX	_	Number=Sing|Person=1|Tense=Past	5	aux	_	_
4	danas	danas	ADV	_	Degree=Pos	5	advmod	_	_
5	podneo	podneti	VERB	_	Gender=Masc|Number=Sing|VerbForm=Part	10	advcl	_	_
6	ostavku	ostavka	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
7	to	taj	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	10	nsubj	_	_
8	bi	biti	AUX	_	Number=Sing|Person=3|Tense=Past	10	aux	_	_
9	bio	biti	AUX	_	Gender=Masc|Number=Sing|VerbForm=Part	10	cop	_	_
10	znak	znak	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
11	slabosti	slabost	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	10	nmod	_	SpaceAfter=No
12	"	"	PUNCT	_	_	10	punct	_	SpaceAfter=No
13	.	.	PUNCT	_	_	10	punct	_	_

~~~


