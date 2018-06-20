---
layout: base
title:  'Statistics of nmod:npmod in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_partut-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_partut-dep-nmod-tmod.html">nmod:tmod</a></tt>.

12 nodes (0%) are attached to their parents as `nmod:npmod`.

12 instances of `nmod:npmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25.

The following 5 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (7; 58% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (2; 17% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:npmod	color:blue
1	Test	test	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	simple	simple	ADJ	A	Degree=Pos	3	amod	_	_
3	image	image	NOUN	S	Number=Sing	1	obj	_	_
4	and	and	CCONJ	CC	_	8	cc	_	_
5	text	text	NOUN	S	Number=Sing	7	nmod:npmod	_	SpaceAfter=No
6	-	-	PUNCT	FF	_	7	punct	_	SpaceAfter=No
7	based	based	VERB	V	Tense=Past|VerbForm=Part	8	amod	_	_
8	adverts	advert	NOUN	S	Number=Plur	3	conj	_	_
9	and	and	CCONJ	CC	_	10	cc	_	_
10	use	use	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	_
11	what	what	PRON	PR	Number=Sing|PronType=Rel	10	obj	_	_
12	works	work	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	acl:relcl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 44	bgColor:blue
# visual-style 44	fgColor:white
# visual-style 44 41 nmod:npmod	color:blue
1	Rolf	Rolf	PROPN	SP	_	18	nsubj	_	_
2	Bolin	Bolin	PROPN	SP	_	1	flat	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	who	who	PRON	PR	PronType=Rel	7	nsubj	_	_
5	was	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
6	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	7	det	_	_
7	professor	professor	NOUN	S	Number=Sing	1	acl:relcl	_	_
8	at	at	ADP	E	_	13	case	_	_
9	the	the	DET	RD	Definite=Def|PronType=Art	10	det	_	_
10	Hopkin	Hopkin	PROPN	SP	_	13	nmod	_	SpaceAfter=No
11	's	's	PART	PART	_	10	case	_	_
12	Marine	marine	ADJ	A	Degree=Pos	13	amod	_	_
13	Station	station	NOUN	S	Number=Sing	7	nmod	_	_
14	where	where	ADV	B	_	16	advmod	_	_
15	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	16	nsubj	_	_
16	work	work	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	acl:relcl	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	16	punct	_	_
18	wrote	write	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
19	in	in	ADP	E	_	21	case	_	_
20	the	the	DET	RD	Definite=Def|PronType=Art	21	det	_	_
21	1940s	1940s	NUM	N	NumType=Card	18	obl	_	_
22	that	that	SCONJ	CS	_	38	mark	_	_
23	"	"	PUNCT	FB	_	38	punct	_	SpaceAfter=No
24	The	the	DET	RD	Definite=Def|PronType=Art	25	det	_	_
25	fumes	fume	NOUN	S	Number=Plur	38	nsubj	_	_
26	from	from	ADP	E	_	28	case	_	_
27	the	the	DET	RD	Definite=Def|PronType=Art	28	det	_	_
28	scum	scum	NOUN	S	Number=Sing	25	nmod	_	_
29	floating	float	VERB	V	Number=Sing|Tense=Pres|VerbForm=Part	28	acl	_	_
30	on	on	ADP	E	_	32	case	_	_
31	the	the	DET	RD	Definite=Def|PronType=Art	32	det	_	_
32	inlets	inlet	NOUN	S	Number=Plur	29	obl	_	_
33	of	of	ADP	E	_	35	case	_	_
34	the	the	DET	RD	Definite=Def|PronType=Art	35	det	_	_
35	bay	bay	NOUN	S	Number=Sing	32	nmod	_	_
36	were	be	AUX	V	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	38	cop	_	_
37	so	so	ADV	B	_	38	advmod	_	_
38	bad	bad	ADV	B	_	18	ccomp	_	_
39	they	they	PRON	PE	Number=Plur|Person=3|PronType=Prs	40	nsubj	_	_
40	turned	turn	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	38	advcl	_	_
41	lead	lead	NOUN	S	Number=Sing	44	nmod:npmod	_	SpaceAfter=No
42	-	-	PUNCT	FF	_	43	punct	_	SpaceAfter=No
43	based	based	VERB	V	Tense=Past|VerbForm=Part	41	amod	_	_
44	paints	paint	NOUN	S	Number=Plur	45	nmod	_	_
45	black	black	NOUN	S	Number=Sing	40	obj	_	SpaceAfter=No
46	"	"	PUNCT	FB	_	38	punct	_	SpaceAfter=No
47	.	.	PUNCT	FS	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 nmod:npmod	color:blue
1	Following	follow	VERB	V	VerbForm=Ger	15	advcl	_	_
2	the	the	DET	RD	Definite=Def|PronType=Art	3	det	_	_
3	creation	creation	NOUN	S	Number=Sing	1	obj	_	_
4	of	of	ADP	E	_	6	case	_	_
5	the	the	DET	RD	Definite=Def|PronType=Art	6	det	_	_
6	IMF	IMF	PROPN	SP	_	3	nmod	_	_
7	in	in	ADP	E	_	8	case	_	_
8	1944	1944	NUM	N	NumType=Card	3	nummod	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	1	punct	_	_
10	many	many	ADJ	A	Degree=Pos	15	nsubj	_	_
11	of	of	ADP	E	_	14	case	_	_
12	the	the	DET	RD	Definite=Def|PronType=Art	14	det	_	_
13	same	same	ADJ	A	Degree=Pos	14	amod	_	_
14	decisions	decision	NOUN	S	Number=Plur	10	obl	_	_
15	became	become	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
16	routine	routine	ADJ	A	Degree=Pos	15	xcomp	_	SpaceAfter=No
17	,	,	PUNCT	FF	_	21	punct	_	_
18	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	19	det	_	_
19	lot	lot	NOUN	S	Number=Sing	20	nmod:npmod	_	_
20	less	less	ADV	B	Degree=Cmp	21	advmod	_	_
21	interesting	interesting	ADJ	A	Degree=Pos	16	conj	_	SpaceAfter=No
22	,	,	PUNCT	FF	_	25	punct	_	_
23	and	and	CCONJ	CC	_	25	cc	_	_
24	much	much	ADV	B	_	25	advmod	_	_
25	easier	easier	ADJ	A	Degree=Cmp	16	conj	_	_
26	to	to	PART	PART	_	27	mark	_	_
27	implement	implement	VERB	V	VerbForm=Inf	25	ccomp	_	SpaceAfter=No
28	.	.	PUNCT	FS	_	15	punct	_	_

~~~


