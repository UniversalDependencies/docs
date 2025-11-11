---
layout: base
title:  'Statistics of parataxis in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `parataxis`

This relation is universal.

41 nodes (0%) are attached to their parents as `parataxis`.

27 instances of `parataxis` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.73170731707317.

The following 11 pairs of parts of speech are connected with `parataxis`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (21; 51% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (5; 12% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (3; 7% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (2; 5% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NUM.html">NUM</a></tt> (2; 5% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 parataxis	color:blue
1	It	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	8	nsubj:pass	_	_
2	will	will	AUX	VM	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	5	punct	_	_
4	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
5	hope	hope	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	parataxis	_	SpaceAfter=No
6	,	,	PUNCT	FF	_	5	punct	_	_
7	be	be	AUX	VA	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	8	aux:pass	_	_
8	examined	examine	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
9	in	in	ADP	E	_	12	case	_	_
10	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	12	det	_	_
11	positive	positive	ADJ	A	Degree=Pos	12	amod	_	_
12	light	light	NOUN	S	Number=Sing	8	obl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 parataxis	color:blue
1	"	"	PUNCT	FB	_	4	punct	_	SpaceAfter=No
2	Realism	Realism	PROPN	SP	_	4	nsubj	_	_
3	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
4	nothing	nothing	NOUN	S	Number=Sing	0	root	_	_
5	if	if	SCONJ	CS	_	7	mark	_	_
6	not	not	PART	PART	Polarity=Neg	7	advmod	_	_
7	urban	urban	ADJ	A	Degree=Pos	4	advcl	_	SpaceAfter=No
8	"	"	PUNCT	FB	_	4	punct	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	4	punct	_	_
10	notes	note	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	_
11	critic	critic	NOUN	S	Number=Sing	12	nmod:desc	_	_
12	Peter	Peter	PROPN	SP	_	10	nsubj	_	_
13	Brooks	Brooks	PROPN	SP	_	12	flat	_	SpaceAfter=No
14	;	;	PUNCT	FC	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 15 parataxis	color:blue
1	And	and	CCONJ	CC	_	9	cc	_	SpaceAfter=No
2	,	,	PUNCT	FF	_	9	punct	_	_
3	in	in	ADP	E	_	4	case	_	_
4	1999	1999	NUM	N	NumType=Card	9	obl	_	_
5	Europol	Europol	PROPN	SP	_	7	nmod:poss	_	SpaceAfter=No
6	’s	's	PART	PART	_	7	case	_	_
7	mandate	mandate	NOUN	S	Number=Sing	9	nsubj:pass	_	_
8	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	_
9	extended	extend	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
10	to	to	PART	PART	_	11	mark	_	_
11	include	include	VERB	V	VerbForm=Inf	9	advcl	_	_
12	money	money	NOUN	S	Number=Sing	13	obj	_	_
13	counterfeiting	counterfeiting	NOUN	S	Number=Sing	11	obj	_	_
14	[	[	PUNCT	FB	_	15	punct	_	SpaceAfter=No
15	4	4	NUM	N	NumType=Card	9	parataxis	_	SpaceAfter=No
16	]	]	PUNCT	FB	_	15	punct	_	SpaceAfter=No
17	.	.	PUNCT	FS	_	9	punct	_	_

~~~


