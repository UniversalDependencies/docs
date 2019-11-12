---
layout: base
title:  'Statistics of parataxis in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `parataxis`

This relation is universal.

36 nodes (0%) are attached to their parents as `parataxis`.

22 instances of `parataxis` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.5.

The following 9 pairs of parts of speech are connected with `parataxis`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (21; 58% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (5; 14% instances), <tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 6% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (2; 6% instances), <tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_partut-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-AUX.html">AUX</a></tt> (1; 3% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


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
11	critic	critic	NOUN	S	Number=Sing	10	nsubj	_	_
12	Peter	Peter	PROPN	SP	_	11	nmod	_	_
13	Brooks	Brooks	PROPN	SP	_	12	flat	_	SpaceAfter=No
14	;	;	PUNCT	FC	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 9 parataxis	color:blue
1	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
2	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
3	Balzac	Balzac	PROPN	SP	_	5	nmod	_	SpaceAfter=No
4	's	's	PART	PART	_	3	case	_	_
5	characters	character	NOUN	S	Number=Plur	14	nsubj	_	SpaceAfter=No
6	"	"	PUNCT	FB	_	5	punct	_	SpaceAfter=No
7	,	,	PUNCT	FF	_	5	punct	_	_
8	Robb	Robb	PROPN	SP	_	9	nsubj	_	_
9	notes	note	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	14	parataxis	_	SpaceAfter=No
10	,	,	PUNCT	FF	_	9	punct	_	_
11	"	"	PUNCT	FB	_	14	punct	_	SpaceAfter=No
12	were	be	AUX	V	Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin	14	cop	_	_
13	as	as	ADV	B	_	14	advmod	_	_
14	real	real	ADJ	A	Degree=Pos	0	root	_	_
15	to	to	ADP	E	_	16	case	_	_
16	him	he	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	obl	_	_
17	as	as	ADV	B	_	21	advmod	_	_
18	if	if	SCONJ	CS	_	21	mark	_	_
19	he	he	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	21	nsubj	_	_
20	were	be	AUX	VA	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	21	aux	_	_
21	observing	observing	VERB	V	VerbForm=Ger	14	advcl	_	_
22	them	they	PRON	PE	Number=Plur|Person=3|PronType=Prs	21	obj	_	_
23	in	in	ADP	E	_	26	case	_	_
24	the	the	DET	RD	Definite=Def|PronType=Art	26	det	_	_
25	outside	outside	ADJ	A	Degree=Pos	26	amod	_	_
26	world	world	NOUN	S	Number=Sing	21	obl	_	SpaceAfter=No
27	.	.	PUNCT	FS	_	14	punct	_	_

~~~


