---
layout: base
title:  'Statistics of discourse in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `discourse`

This relation is universal.

11 nodes (0%) are attached to their parents as `discourse`.

9 instances of `discourse` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.90909090909091.

The following 8 pairs of parts of speech are connected with `discourse`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-INTJ.html">INTJ</a></tt> (3; 27% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (2; 18% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-INTJ.html">INTJ</a></tt> (1; 9% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (1; 9% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (1; 9% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 9% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (1; 9% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 discourse	color:blue
1	We	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	know	know	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	_
3	that	that	PRON	PD	PronType=Dem	2	obj	_	SpaceAfter=No
4	,	,	PUNCT	FF	_	2	punct	_	_
5	right	right	INTJ	_	_	2	discourse	_	SpaceAfter=No
6	?	?	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 discourse	color:blue
1	And	and	CCONJ	CC	_	3	cc	_	_
2	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
3	remember	remember	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	there	there	ADV	B	_	3	advmod	_	_
5	sitting	sit	VERB	V	VerbForm=Ger	3	ccomp	_	_
6	at	at	ADP	E	_	8	case	_	_
7	my	my	DET	AP	Number=Sing|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	desk	desk	NOUN	S	Number=Sing	5	obl	_	_
9	thinking	think	VERB	V	VerbForm=Ger	5	advcl	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	9	punct	_	_
11	"	"	PUNCT	FB	_	15	punct	_	SpaceAfter=No
12	Well	well	ADV	B	_	15	discourse	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	15	punct	_	_
14	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	15	nsubj	_	_
15	know	know	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	9	parataxis	_	_
16	this	this	PRON	PD	Number=Sing|PronType=Dem	15	obj	_	SpaceAfter=No
17	"	"	PUNCT	FB	_	15	punct	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 1 discourse	color:blue
1	Yes	yes	INTJ	_	_	16	discourse	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	1	punct	_	_
3	being	be	AUX	V	Number=Sing|Tense=Pres|VerbForm=Part	5	cop	_	_
4	better	better	ADV	B	_	5	advmod	_	_
5	connected	connect	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	16	csubj	_	_
6	with	with	ADP	E	_	8	case	_	_
7	each	each	DET	DI	PronType=Ind	8	det	_	_
8	other	other	ADJ	A	Degree=Pos	5	obl	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	5	punct	_	_
10	through	through	ADP	E	_	11	case	_	_
11	Facebook	Facebook	PROPN	SP	_	5	obl	_	_
12	or	or	CCONJ	CC	_	13	cc	_	_
13	Twitter	Twitter	PROPN	SP	_	11	conj	_	SpaceAfter=No
14	,	,	PUNCT	FF	_	5	punct	_	_
15	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	_
16	valuable	valuable	ADJ	A	Degree=Pos	0	root	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	16	punct	_	_

~~~


