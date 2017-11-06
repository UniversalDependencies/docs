---
layout: base
title:  'Statistics of compound:prt in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-compound.html">compound</a></tt>.

102 nodes (0%) are attached to their parents as `compound:prt`.

100 instances of `compound:prt` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.06862745098039.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADP.html">ADP</a></tt> (85; 83% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADV.html">ADV</a></tt> (13; 13% instances), <tt><a href="en_partut-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_partut-pos-ADP.html">ADP</a></tt> (2; 2% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	Sunlight	sunlight	NOUN	S	Number=Sing	3	nsubj:pass	_	_
2	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux:pass	_	_
3	cut	cut	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
4	off	off	ADP	E	_	3	compound:prt	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	8	punct	_	_
6	and	and	CCONJ	CC	_	8	cc	_	_
7	fungi	fungi	NOUN	S	Number=Plur	8	nsubj	_	_
8	inherited	inherit	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	3	conj	_	_
9	the	the	DET	RD	Definite=Def|PronType=Art	10	det	_	_
10	Earth	earth	NOUN	S	Number=Sing	8	obj	_	SpaceAfter=No
11	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:prt	color:blue
1	As	as	SCONJ	CS	_	3	mark	_	_
2	it	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	turns	turn	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	advcl	_	_
4	out	out	ADV	B	_	3	compound:prt	_	SpaceAfter=No
5	,	,	PUNCT	FF	_	3	punct	_	_
6	there	there	ADV	B	_	7	expl	_	_
7	is	be	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
8	some	some	DET	DI	PronType=Ind	9	det	_	_
9	truth	truth	NOUN	S	Number=Sing	7	nsubj	_	_
10	in	in	ADP	E	_	12	case	_	_
11	both	both	DET	DI	PronType=Ind	12	det	_	_
12	perspectives	perspective	NOUN	S	Number=Plur	7	obl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound:prt	color:blue
1	Saintsbury	Saintsbury	PROPN	SP	_	2	nsubj	_	_
2	points	point	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	out	out	ADP	E	_	4	compound:prt	_	_
4	that	that	SCONJ	CS	_	9	mark	_	_
5	"	"	PUNCT	FB	_	9	punct	_	SpaceAfter=No
6	Cœlebs	Cœlebs	PROPN	SP	_	9	nsubj	_	_
7	can	can	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	9	aux	_	_
8	not	not	PART	PART	Polarity=Neg	7	advmod	_	_
9	talk	talk	VERB	V	VerbForm=Inf	2	ccomp	_	_
10	of	of	ADP	E	_	12	case	_	_
11	[	[	PUNCT	FB	_	12	punct	_	SpaceAfter=No
12	marriage	marriage	NOUN	S	Number=Sing	9	obl	_	SpaceAfter=No
13	]	]	PUNCT	FB	_	12	punct	_	_
14	with	with	ADP	E	_	16	case	_	_
15	much	much	ADJ	A	Degree=Pos	16	amod	_	_
16	authority	authority	NOUN	S	Number=Sing	9	obl	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	2	punct	_	_

~~~


