---
layout: base
title:  'Statistics of aux in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="en_partut-dep-aux-pass.html">aux:pass</a></tt>.

1246 nodes (3%) are attached to their parents as `aux`.

1238 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.78491171749599.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (1147; 92% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (58; 5% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (34; 3% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-DET.html">DET</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-NUM.html">NUM</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="en_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Mr	mister	NOUN	S	Number=Sing	7	vocative	_	_
2	Berenguer	Berenguer	PROPN	SP	_	1	flat	_	_
3	Fuster	Fuster	PROPN	SP	_	1	flat	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	1	punct	_	_
5	we	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	7	nsubj	_	_
6	shall	shall	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
7	check	check	VERB	V	VerbForm=Inf	0	root	_	_
8	all	all	PRON	PE	Number=Sing|Person=3|PronType=Prs	7	obj	_	_
9	this	this	PRON	PD	Number=Sing|PronType=Dem	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 aux	color:blue
1	Mr	mister	NOUN	S	Number=Sing	10	vocative	_	_
2	Cox	Cox	PROPN	SP	_	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	4	punct	_	_
4	Mr	mister	NOUN	S	Number=Sing	1	conj	_	_
5	Hänsch	Hänsch	PROPN	SP	_	4	flat	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	1	punct	_	_
7	would	will	AUX	VM	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	10	aux	_	_
8	this	this	PRON	PD	Number=Sing|PronType=Dem	10	nsubj	_	_
9	be	be	AUX	V	VerbForm=Inf	10	cop	_	_
10	acceptable	acceptable	ADJ	A	Degree=Pos	0	root	_	_
11	to	to	ADP	E	_	12	case	_	_
12	you	you	PRON	PE	Person=2|PronType=Prs	10	obl	_	SpaceAfter=No
13	?	?	PUNCT	FS	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 aux	color:blue
1	Transport	transport	NOUN	S	Number=Sing	2	nmod	_	_
2	safety	safety	NOUN	S	Number=Sing	8	nsubj	_	_
3	has	have	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
4	sadly	sadly	ADV	B	_	8	advmod	_	_
5	been	be	AUX	V	Tense=Past|VerbForm=Part	8	cop	_	_
6	in	in	ADP	E	_	8	case	_	_
7	the	the	DET	RD	Definite=Def|PronType=Art	8	det	_	_
8	news	news	NOUN	S	Number=Sing	0	root	_	_
9	recently	recently	ADV	B	_	8	advmod	_	SpaceAfter=No
10	:	:	PUNCT	FC	_	8	punct	_	_

~~~


