---
layout: base
title:  'Statistics of nummod in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `nummod`

This relation is universal.

2299 nodes (1%) are attached to their parents as `nummod`.

2292 instances of `nummod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.18051326663767.

The following 7 pairs of parts of speech are connected with `nummod`: <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (2197; 96% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (61; 3% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (20; 1% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (15; 1% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nummod	color:blue
1	NATO	NATO	NOUN	_	Abbr=Yes	3	nsubj	_	_
2	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	fått	få	VERB	_	VerbForm=Part	0	root	_	_
4	to	to	NUM	_	Number=Plur|NumType=Card	6	nummod	_	_
5	nye	ny	ADJ	_	Degree=Pos|Number=Plur	6	amod	_	_
6	medlemsland	medlemsland	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	3	obj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
1	To	to	NUM	_	Number=Plur|NumType=Card	2	nummod	_	_
2	kontoransatte	kontoransatt	ADJ	_	Degree=Pos|Number=Plur	6	nsubj	_	_
3	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	6	cop	_	_
4	også	også	ADV	_	_	6	advmod	_	_
5	til	til	ADP	_	_	6	case	_	_
6	stede	stede	NOUN	_	_	0	root	_	_
7	.	$.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nummod	color:blue
1	Og	og	CCONJ	_	_	5	cc	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
3	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	ikke	ikke	PART	_	Polarity=Neg	5	advmod	_	_
5	gjort	gjøre	VERB	_	VerbForm=Part	0	root	_	_
6	i	i	ADP	_	_	7	case	_	_
7	løpet	løp	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	5	obl	_	_
8	av	av	ADP	_	_	10	case	_	_
9	én	én	NUM	_	Gender=Masc|Number=Sing|NumType=Card	10	nummod	_	_
10	Færderseilas	Færderseilas	PROPN	_	_	7	nmod	_	_
11	,	$,	PUNCT	_	_	12	punct	_	_
12	sier	si	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	parataxis	_	_
13	Nilsson	Nilsson	PROPN	_	_	12	nsubj	_	_
14	.	$.	PUNCT	_	_	5	punct	_	_

~~~


