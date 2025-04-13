---
layout: base
title:  'Statistics of nmod:unmarked in UD_English-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_English-ParTUT: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="en_partut-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_partut-dep-nmod-poss.html">nmod:poss</a></tt>.

16 nodes (0%) are attached to their parents as `nmod:unmarked`.

16 instances of `nmod:unmarked` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25.

The following 5 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (7; 44% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (6; 38% instances), <tt><a href="en_partut-pos-ADV.html">ADV</a></tt>-<tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_partut-pos-ADJ.html">ADJ</a></tt> (1; 6% instances), <tt><a href="en_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="en_partut-pos-PROPN.html">PROPN</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nmod:unmarked	color:blue
1	Test	test	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	simple	simple	ADJ	A	Degree=Pos	3	amod	_	_
3	image	image	NOUN	S	Number=Sing	1	obj	_	_
4	and	and	CCONJ	CC	_	8	cc	_	_
5	text	text	NOUN	S	Number=Sing	7	nmod:unmarked	_	SpaceAfter=No
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:unmarked	color:blue
1	Today	today	NOUN	S	Number=Sing	3	nmod:unmarked	_	SpaceAfter=No
2	's	's	PART	PART	_	1	case	_	_
3	decision	decision	NOUN	S	Number=Sing	11	nsubj	_	_
4	not	not	PART	PART	Polarity=Neg	6	advmod	_	_
5	to	to	PART	PART	_	6	mark	_	_
6	renew	renew	VERB	V	VerbForm=Inf	3	acl	_	_
7	the	the	DET	RD	Definite=Def|PronType=Art	8	det	_	_
8	embargo	embargo	NOUN	S	Number=Sing	6	obj	_	_
9	is	be	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	extremely	extremely	ADV	B	_	11	advmod	_	_
11	dangerous	dangerous	ADJ	A	Degree=Pos	0	root	_	_
12	considering	consider	VERB	V	VerbForm=Ger	11	advcl	_	_
13	the	the	DET	RD	Definite=Def|PronType=Art	14	det	_	_
14	situation	situation	NOUN	S	Number=Sing	12	obj	_	_
15	there	there	ADV	B	_	14	advmod	_	SpaceAfter=No
16	.	.	PUNCT	FS	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 19 nmod:unmarked	color:blue
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
19	lot	lot	NOUN	S	Number=Sing	20	nmod:unmarked	_	_
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


