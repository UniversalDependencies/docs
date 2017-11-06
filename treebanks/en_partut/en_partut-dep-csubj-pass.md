---
layout: base
title:  'Statistics of csubj:pass in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-csubj.html">csubj</a></tt>.

6 nodes (0%) are attached to their parents as `csubj:pass`.

6 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.66666666666667.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-VERB.html">VERB</a></tt> (5; 83% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:pass	color:blue
1	It	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	aux	_	_
3	noted	note	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
4	that	that	SCONJ	CS	_	7	mark	_	_
5	some	some	DET	DI	PronType=Ind	6	det	_	_
6	countries	country	NOUN	S	Number=Plur	7	nsubj	_	_
7	showed	show	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	3	csubj:pass	_	_
8	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	10	det	_	_
9	low	low	ADJ	A	Degree=Pos	10	amod	_	_
10	level	level	NOUN	S	Number=Sing	7	obj	_	_
11	of	of	ADP	E	_	12	case	_	_
12	participation	participation	NOUN	S	Number=Sing	10	nmod	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	7	punct	_	_
14	among	among	ADP	E	_	15	case	_	_
15	them	they	PRON	PE	Number=Plur|Person=3|PronType=Prs	7	obl	_	_
16	some	some	PRON	PI	PronType=Ind	15	nmod	_	_
17	of	of	ADP	E	_	21	case	_	_
18	the	the	DET	RD	Definite=Def|PronType=Art	21	det	_	_
19	euro	euro	NOUN	S	Number=Sing	20	nmod	_	_
20	area	area	NOUN	S	Number=Sing	21	nmod	_	_
21	countries	country	NOUN	S	Number=Plur	16	nmod	_	SpaceAfter=No
22	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 56	bgColor:blue
# visual-style 56	fgColor:white
# visual-style 50	bgColor:blue
# visual-style 50	fgColor:white
# visual-style 50 56 csubj:pass	color:blue
1	In	in	ADP	E	_	2	case	_	_
2	line	line	NOUN	S	Number=Sing	50	obl	_	_
3	with	with	ADP	E	_	4	case	_	_
4	Article	article	NOUN	S	Number=Sing	2	nmod	_	_
5	13	13	NUM	N	NumType=Card	4	nummod	_	_
6	of	of	ADP	E	_	8	case	_	_
7	Council	Council	PROPN	SP	_	8	nmod	_	_
8	Decision	Decision	PROPN	SP	_	5	nmod	_	_
9	of	of	ADP	E	_	10	case	_	_
10	17	17	NUM	N	NumType=Card	8	obl	_	_
11	December	December	PROPN	SP	_	10	flat	_	_
12	2001	2001	NUM	N	NumType=Card	10	flat	_	_
13	establishing	establish	VERB	V	Tense=Pres|VerbForm=Part	4	acl	_	_
14	an	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	20	det	_	_
15	exchange	exchange	NOUN	S	Number=Sing	20	nmod	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	17	punct	_	_
17	assistance	assistance	NOUN	S	Number=Sing	15	conj	_	_
18	and	and	CCONJ	CC	_	19	cc	_	_
19	training	training	NOUN	S	Number=Sing	15	conj	_	_
20	programme	programme	NOUN	S	Number=Sing	13	obj	_	_
21	for	for	ADP	E	_	23	case	_	_
22	the	the	DET	RD	Definite=Def|PronType=Art	23	det	_	_
23	protection	protection	NOUN	S	Number=Sing	20	nmod	_	_
24	of	of	ADP	E	_	26	case	_	_
25	the	the	DET	RD	Definite=Def|PronType=Art	26	det	_	_
26	euro	euro	NOUN	S	Number=Sing	23	nmod	_	_
27	against	against	ADP	E	_	28	case	_	_
28	counterfeiting	counterfeiting	NOUN	S	Number=Sing	23	nmod	_	_
29	(	(	PUNCT	FB	_	34	punct	_	SpaceAfter=No
30	the	the	DET	RD	Definite=Def|PronType=Art	34	det	_	_
31	‘	‘	PUNCT	FF	_	32	punct	_	_
32	Pericles	Pericles	PROPN	SP	_	34	compound	_	SpaceAfter=No
33	’	’	PUNCT	FF	_	32	punct	_	_
34	programme	programme	NOUN	S	Number=Sing	20	nmod	_	SpaceAfter=No
35	)	)	PUNCT	FB	_	34	punct	_	_
36	and	and	CCONJ	CC	_	37	cc	_	_
37	based	base	VERB	V	Tense=Past|VerbForm=Part	13	conj	_	_
38	on	on	ADP	E	_	42	case	_	_
39	the	the	DET	RD	Definite=Def|PronType=Art	42	det	_	_
40	Pericles	Pericles	PROPN	SP	_	41	nmod	_	_
41	evaluation	evaluation	NOUN	S	Number=Sing	42	nmod	_	_
42	report	report	NOUN	S	Number=Sing	37	obl	_	_
43	of	of	ADP	E	_	44	case	_	_
44	30	30	NUM	N	NumType=Card	42	nmod	_	_
45	November	November	PROPN	SP	_	44	flat	_	_
46	2004	2004	NUM	N	NumType=Card	44	flat	_	SpaceAfter=No
47	,	,	PUNCT	FF	_	2	punct	_	_
48	it	it	PRON	PE	Number=Sing|Person=3|PronType=Prs	50	expl	_	_
49	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	50	aux	_	_
50	proposed	propose	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
51	that	that	SCONJ	CS	_	56	mark	_	_
52	the	the	DET	RD	Definite=Def|PronType=Art	54	det	_	_
53	Council	Council	PROPN	SP	_	54	nmod	_	_
54	decision	decision	NOUN	S	Number=Sing	56	nsubj	_	_
55	be	be	AUX	V	Mood=Sub|Person=3|Tense=Pres|VerbForm=Fin	56	cop	_	_
56	extended	extended	ADJ	A	Degree=Pos	50	csubj:pass	_	_
57	and	and	CCONJ	CC	_	58	cc	_	_
58	amended	amend	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	50	conj	_	SpaceAfter=No
59	.	.	PUNCT	FS	_	50	punct	_	_

~~~


