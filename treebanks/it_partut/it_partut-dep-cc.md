---
layout: base
title:  'Statistics of cc in UD_Italian-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ParTUT: Relations: `cc`

This relation is universal.

1684 nodes (3%) are attached to their parents as `cc`.

1678 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.70724465558195.

The following 14 pairs of parts of speech are connected with `cc`: <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (798; 47% instances), <tt><a href="it_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (499; 30% instances), <tt><a href="it_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (198; 12% instances), <tt><a href="it_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (98; 6% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (40; 2% instances), <tt><a href="it_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (23; 1% instances), <tt><a href="it_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (12; 1% instances), <tt><a href="it_partut-pos-DET.html">DET</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (6; 0% instances), <tt><a href="it_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_partut-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="it_partut-pos-SYM.html">SYM</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (3; 0% instances), <tt><a href="it_partut-pos-ADP.html">ADP</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-AUX.html">AUX</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="it_partut-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="it_partut-pos-X.html">X</a></tt>-<tt><a href="it_partut-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Ma	ma	CCONJ	CC	_	5	cc	_	_
2	questi	questo	PRON	PD	Gender=Masc|Number=Plur|PronType=Dem	5	nsubj	_	_
3	sono	essere	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	essenzialmente	essenzialmente	ADV	B	_	5	advmod	_	_
5	stomaco	stomaco	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
6	e	e	CCONJ	CC	_	7	cc	_	_
7	polmoni	polmone	NOUN	S	Gender=Masc|Number=Plur	5	conj	_	_
8	esternalizzati	esternalizzare	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	7	acl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cc	color:blue
1	E	e	CCONJ	CC	_	4	cc	_	_
2	francamente	francamente	ADV	B	_	4	advmod	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	affronto	affrontare	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
5	un	uno	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
6	grande	grande	ADJ	A	Number=Sing	7	amod	_	_
7	ostacolo	ostacolo	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
8	:	:	PUNCT	FC	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 cc	color:blue
1	Credo	credere	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	che	che	SCONJ	CS	_	5	mark	_	_
3	dovremmo	dovere	AUX	VM	Mood=Cnd|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	aux	_	_
4	essere	essere	AUX	V	VerbForm=Inf	5	cop	_	_
5	capaci	capace	ADJ	A	Number=Plur	1	ccomp	_	_
6	di	di	ADP	E	_	7	mark	_	_
7	dir	dire	VERB	V	VerbForm=Inf	5	advcl	_	_
8	lo	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	chiaro	chiaro	ADJ	A	Gender=Masc|Number=Sing	7	advmod	_	_
10	e	e	CCONJ	CC	_	11	cc	_	_
11	forte	forte	ADJ	A	Number=Sing	9	conj	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	1	punct	_	_

~~~


