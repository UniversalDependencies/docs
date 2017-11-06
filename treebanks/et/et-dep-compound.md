---
layout: base
title:  'Statistics of compound in UD_Estonian'
udver: '2'
---

## Treebank Statistics: UD_Estonian: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="et-dep-compound-prt.html">compound:prt</a></tt>.

57 nodes (0%) are attached to their parents as `compound`.

42 instances of `compound` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.15789473684211.

The following 6 pairs of parts of speech are connected with `compound`: <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (45; 79% instances), <tt><a href="et-pos-VERB.html">VERB</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (6; 11% instances), <tt><a href="et-pos-NOUN.html">NOUN</a></tt>-<tt><a href="et-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="et-pos-AUX.html">AUX</a></tt>-<tt><a href="et-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="et-pos-NUM.html">NUM</a></tt>-<tt><a href="et-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="et-pos-SYM.html">SYM</a></tt>-<tt><a href="et-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Paul	Paul	PROPN	S	Case=Nom|Number=Sing	7	nsubj:cop	_	_
2	Indrikson	Indrikson	PROPN	S	Case=Nom|Number=Sing	1	flat	_	_
3	oli	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
4	juba	juba	ADV	D	_	7	advmod	_	_
5	kolmekümne	kolm_kümmend	NUM	N	Case=Gen|Number=Sing|NumForm=Letter|NumType=Card	6	compound	_	_
6	kahe	kaks	NUM	N	Case=Gen|Number=Sing|NumForm=Letter|NumType=Card	7	nummod	_	_
7	aastane	aastane	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Z	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Uurijad	uurija	NOUN	S	Case=Nom|Number=Plur	2	nsubj	_	_
2	sõitsid	sõitma	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
3	minema	minema	VERB	V	Case=All|VerbForm=Sup|Voice=Act	2	compound	_	SpaceAfter=No
4	.	.	PUNCT	Z	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 compound	color:blue
1	Ehkki	ehkki	SCONJ	J	_	5	mark	_	_
2	tööandja	töö_andja	NOUN	S	Case=Gen|Number=Sing	5	nmod	_	_
3	-	-	PUNCT	Z	_	4	punct	_	_
4	töövõtja	töö_võtja	NOUN	S	Case=Gen|Number=Sing	2	compound	_	_
5	suhetel	suhe	NOUN	S	Case=Ade|Number=Plur	15	advcl	_	_
6	on	olema	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
7	võrreldes	võrdlema	VERB	V	VerbForm=Ger	5	advcl	_	_
8	omanikevaheliste	omanik+e_vaheline	ADJ	A	Case=Gen|Degree=Pos|Number=Plur	9	amod	_	_
9	suhetega	suhe	NOUN	S	Case=Com|Number=Plur	7	obl	_	_
10	mitmeid	mitu	PRON	P	Case=Par|Number=Plur|PronType=Tot	11	det	_	_
11	erinevusi	erinevus	NOUN	S	Case=Par|Number=Plur	5	nsubj:cop	_	SpaceAfter=No
12	,	,	PUNCT	Z	_	5	punct	_	_
13	võib	võima	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux	_	_
14	siin	siin	ADV	D	_	15	advmod	_	_
15	näha	nägema	VERB	V	VerbForm=Inf	0	root	_	_
16	ka	ka	ADV	D	_	17	advmod	_	_
17	analoogiat	analoogia	NOUN	S	Case=Par|Number=Sing	15	obj	_	SpaceAfter=No
18	.	.	PUNCT	Z	_	15	punct	_	_

~~~


