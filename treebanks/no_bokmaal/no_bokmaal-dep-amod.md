---
layout: base
title:  'Statistics of amod in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `amod`

This relation is universal.

13929 nodes (4%) are attached to their parents as `amod`.

13515 instances of `amod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22679302175318.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (13542; 97% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (232; 2% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (92; 1% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (35; 0% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (19; 0% instances), <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (8; 0% instances), <tt><a href="no_bokmaal-pos-X.html">X</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	ble	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	rene	ren	ADJ	_	Degree=Pos|Number=Plur	4	amod	_	_
4	ord	ord	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	xcomp	_	SpaceAfter=No
5	:	$:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	Et	en	DET	_	Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
2	klarere	klar	ADJ	_	Degree=Cmp	3	amod	_	_
3	Høyre	Høyre	PROPN	_	_	0	root	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Solveig	Solveig	PROPN	_	Gender=Fem	3	nsubj	_	_
2	Rogstad	Rogstad	PROPN	_	_	1	flat:name	_	_
3	ble	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	nest	nest	ADV	_	_	5	advmod	_	_
5	beste	god	ADJ	_	Definite=Def|Degree=Sup	6	amod	_	_
6	norske	norsk	ADJ	_	Degree=Pos|Number=Plur	3	xcomp	_	SpaceAfter=No
7	,	$,	PUNCT	_	_	9	punct	_	_
8	på	på	ADP	_	_	9	case	_	_
9	ellevteplass	ellevteplass	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	SpaceAfter=No
10	.	$.	PUNCT	_	_	3	punct	_	_

~~~


