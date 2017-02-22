

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:poss](), [nmod:tmod]().

156 nodes (0%) are attached to their parents as `nmod:npmod`.

107 instances of `nmod:npmod` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.67948717948718.

The following 20 pairs of parts of speech are connected with `nmod:npmod`: [en-pos/NOUN]()-[en-pos/NOUN]() (67; 43% instances), [en-pos/NOUN]()-[en-pos/PRON]() (21; 13% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (17; 11% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (9; 6% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (5; 3% instances), [en-pos/NOUN]()-[en-pos/SYM]() (5; 3% instances), [en-pos/NUM]()-[en-pos/NOUN]() (5; 3% instances), [en-pos/PROPN]()-[en-pos/PRON]() (5; 3% instances), [en-pos/NUM]()-[en-pos/PROPN]() (3; 2% instances), [en-pos/PRON]()-[en-pos/PRON]() (3; 2% instances), [en-pos/PROPN]()-[en-pos/NUM]() (3; 2% instances), [en-pos/SYM]()-[en-pos/NOUN]() (3; 2% instances), [en-pos/NOUN]()-[en-pos/DET]() (2; 1% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (2; 1% instances), [en-pos/NOUN]()-[en-pos/NUM]() (1; 1% instances), [en-pos/PRON]()-[en-pos/DET]() (1; 1% instances), [en-pos/PRON]()-[en-pos/NUM]() (1; 1% instances), [en-pos/PROPN]()-[en-pos/ADV]() (1; 1% instances), [en-pos/SYM]()-[en-pos/DET]() (1; 1% instances), [en-pos/X]()-[en-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:npmod	color:blue
1	We	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	go	go	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	over	over	ADV	RB	_	2	advmod	_	_
4	about	about	ADV	RB	_	5	advmod	_	_
5	5	5	NUM	CD	NumType=Card	6	nummod	_	_
6	times	time	NOUN	NNS	Number=Plur	2	obl:tmod	_	_
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	_	_
8	year	year	NOUN	NN	Number=Sing	6	nmod:npmod	_	SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:npmod	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	test	test	NOUN	NN	Number=Sing	5	nsubj	_	_
3	itself	itself	PRON	PRP	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nmod:npmod	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	what	what	PRON	WP	PronType=Int	0	root	_	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
7	called	call	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	5	acl:relcl	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	10	det	_	_
9	substitution	substitution	NOUN	NN	Number=Sing	10	compound	_	_
10	test	test	NOUN	NN	Number=Sing	7	xcomp	_	SpaceAfter=No
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:npmod	color:blue
1	Web	web	NOUN	NN	Number=Sing	2	obl:npmod	_	_
2	posted	post	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
3	at	at	ADP	IN	_	6	case	_	SpaceAfter=No
4	:	:	PUNCT	:	_	6	punct	_	_
5	3:29	3:29	NUM	CD	NumType=Card	6	nummod	_	_
6	p.m.	p.m.	NOUN	NN	Number=Sing	2	obl	_	_
7	EST	EST	PROPN	NNP	Number=Sing	6	nmod:npmod	_	_
8	(	(	PUNCT	-LRB-	_	9	punct	_	SpaceAfter=No
9	2029	2029	NUM	CD	NumType=Card	6	appos	_	_
10	GMT	GMT	PROPN	NNP	Number=Sing	9	nmod:npmod	_	SpaceAfter=No
11	)	)	PUNCT	-RRB-	_	9	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:poss](), [nmod:tmod]().

179 nodes (0%) are attached to their parents as `nmod:npmod`.

118 instances of `nmod:npmod` (66%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.59217877094972.

The following 17 pairs of parts of speech are connected with `nmod:npmod`: [en-pos/ADV]()-[en-pos/NOUN]() (59; 33% instances), [en-pos/VERB]()-[en-pos/NOUN]() (51; 28% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (27; 15% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (16; 9% instances), [en-pos/VERB]()-[en-pos/ADJ]() (6; 3% instances), [en-pos/NOUN]()-[en-pos/PRON]() (5; 3% instances), [en-pos/VERB]()-[en-pos/PROPN]() (3; 2% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (2; 1% instances), [en-pos/VERB]()-[en-pos/PRON]() (2; 1% instances), [en-pos/ADP]()-[en-pos/NOUN]() (1; 1% instances), [en-pos/ADV]()-[en-pos/NUM]() (1; 1% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (1; 1% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (1; 1% instances), [en-pos/PRON]()-[en-pos/NOUN]() (1; 1% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 1% instances), [en-pos/VERB]()-[en-pos/ADV]() (1; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:npmod	color:blue
1	_	_	DET	DT	_	2	det	_	_
2	_	_	NOUN	NNS	_	3	nmod:npmod	_	_
3	_	_	ADV	RB	_	6	advmod	_	_
4	_	_	DET	PRP$	_	5	nmod:poss	_	_
5	_	_	NOUN	NN	_	6	nsubj	_	_
6	_	_	VERB	VBD	_	0	root	_	_
7	_	_	DET	DT	_	9	det	_	_
8	_	_	ADJ	JJ	_	9	amod	_	_
9	_	_	NOUN	NN	_	6	dobj	_	_
10	_	_	ADP	IN	_	11	case	_	_
11	_	_	NOUN	NN	_	9	nmod	_	_
12	_	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 3 nmod:npmod	color:blue
1	_	_	CONJ	CC	_	13	cc	_	_
2	_	_	NUM	CD	_	3	nummod	_	_
3	_	_	NOUN	NN	_	13	nmod:npmod	_	_
4	_	_	SCONJ	IN	_	7	mark	_	_
5	_	_	PRON	PRP	_	7	nsubj	_	_
6	_	_	AUX	VBD	_	7	aux	_	_
7	_	_	VERB	VBG	_	13	advcl	_	_
8	_	_	ADV	RB	_	7	advmod	_	_
9	_	_	ADP	IN	_	11	case	_	_
10	_	_	DET	DT	_	11	det	_	_
11	_	_	NOUN	NN	_	7	nmod	_	_
12	_	_	PRON	PRP	_	13	nsubj	_	_
13	_	_	VERB	VBD	_	0	root	_	_
14	_	_	PROPN	NNP	_	13	dobj	_	_
15	_	_	ADP	IN	_	17	case	_	_
16	_	_	DET	DT	_	17	det	_	_
17	_	_	NOUN	NN	_	13	nmod	_	_
18	_	_	ADP	IN	_	21	case	_	_
19	_	_	DET	PRP$	_	21	nmod:poss	_	_
20	_	_	NOUN	NN	_	21	compound	_	_
21	_	_	NOUN	NN	_	17	nmod	_	_
22	_	_	VERB	VBG	_	13	advcl	_	_
23	_	_	ADP	IN	_	25	case	_	_
24	_	_	DET	PRP$	_	25	nmod:poss	_	_
25	_	_	NOUN	NN	_	22	dobj	_	_
26	_	_	PUNCT	.	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod:npmod	color:blue
1	_	_	DET	DT	_	3	det	_	_
2	_	_	ADJ	JJ	_	3	amod	_	_
3	_	_	NOUN	NN	_	8	nsubj	_	_
4	_	_	VERB	VBD	_	8	cop	_	_
5	_	_	ADV	RB	_	8	advmod	_	_
6	_	_	NUM	CD	_	7	nummod	_	_
7	_	_	NOUN	NN	_	8	nmod:npmod	_	_
8	_	_	ADJ	JJ	_	0	root	_	_
9	_	_	CONJ	CC	_	8	cc	_	_
10	_	_	ADP	IN	_	12	case	_	_
11	_	_	DET	DT	_	12	det	_	_
12	_	_	NOUN	NN	_	17	nmod	_	_
13	_	_	PUNCT	,	_	17	punct	_	_
14	_	_	PRON	PRP	_	17	expl	_	_
15	_	_	VERB	VBZ	_	17	cop	_	_
16	_	_	ADV	RB	_	17	advmod	_	_
17	_	_	ADJ	JJ	_	8	conj	_	_
18	_	_	PART	TO	_	19	mark	_	_
19	_	_	VERB	VB	_	17	csubj	_	_
20	_	_	DET	PRP$	_	21	nmod:poss	_	_
21	_	_	NOUN	NN	_	19	dobj	_	_
22	_	_	VERB	VBN	_	19	xcomp	_	_
23	_	_	VERB	VBG	_	19	xcomp	_	_
24	_	_	DET	DT	_	26	det	_	_
25	_	_	ADJ	JJ	_	26	amod	_	_
26	_	_	NOUN	NN	_	23	dobj	_	_
27	_	_	PUNCT	.	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:poss](), [nmod:tmod]().

10 nodes (0%) are attached to their parents as `nmod:npmod`.

10 instances of `nmod:npmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.3.

The following 3 pairs of parts of speech are connected with `nmod:npmod`: [en-pos/VERB]()-[en-pos/NOUN]() (7; 70% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (2; 20% instances), [en-pos/VERB]()-[en-pos/PROPN]() (1; 10% instances).


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
2	Bolin	Bolin	PROPN	SP	_	1	flat:name	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	1	punct	_	_
4	who	who	PRON	PR	PronType=Rel	7	nsubj	_	_
5	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	7	cop	_	_
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
36	were	be	AUX	VA	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	38	cop	_	_
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
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 29 nmod:npmod	color:blue
1	In	in	ADP	E	_	4	case	_	_
2	the	the	DET	RD	Definite=Def|PronType=Art	4	det	_	_
3	remarkable	remarkable	ADJ	A	Degree=Pos	4	amod	_	_
4	transformation	transformation	NOUN	S	Number=Sing	21	obl	_	_
5	of	of	ADP	E	_	9	case	_	_
6	Central	Central	PROPN	SP	_	9	nmod	_	_
7	Europe	Europe	PROPN	SP	_	6	flat:name	_	SpaceAfter=No
8	's	's	PART	PART	_	6	case	_	_
9	economies	economy	NOUN	S	Number=Plur	4	nmod	_	_
10	in	in	ADP	E	_	12	case	_	_
11	the	the	DET	RD	Definite=Def|PronType=Art	12	det	_	_
12	1990	1990	NUM	N	NumType=Card	4	nummod	_	SpaceAfter=No
13	'	'	X	X	_	12	case	_	SpaceAfter=No
14	s	s	X	X	_	13	goeswith	_	SpaceAfter=No
15	,	,	PUNCT	FF	_	4	punct	_	_
16	management	management	NOUN	S	Number=Sing	17	nmod	_	_
17	expertise	expertise	NOUN	S	Number=Sing	21	nsubj	_	_
18	and	and	CCONJ	CC	_	20	cc	_	_
19	market	market	NOUN	S	Number=Sing	20	nmod	_	_
20	access	access	NOUN	S	Number=Sing	17	conj	_	_
21	resulted	result	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
22	from	from	ADP	E	_	24	case	_	_
23	massive	massive	ADJ	A	Degree=Pos	24	amod	_	_
24	investments	investment	NOUN	S	Number=Plur	21	obl	_	_
25	by	by	ADP	E	_	32	case	_	_
26	German	German	ADJ	A	Degree=Pos	32	amod	_	_
27	and	and	CCONJ	CC	_	31	cc	_	_
28	other	other	ADJ	A	Degree=Pos	31	amod	_	_
29	EU	EU	PROPN	SP	_	31	nmod:npmod	_	SpaceAfter=No
30	-	-	PUNCT	FF	_	31	punct	_	SpaceAfter=No
31	based	based	VERB	V	Tense=Past|VerbForm=Part	26	conj	_	_
32	companies	company	NOUN	S	Number=Plur	24	nmod	_	SpaceAfter=No
33	,	,	PUNCT	FF	_	32	punct	_	_
34	which	which	PRON	PR	PronType=Rel	35	nsubj	_	_
35	integrated	integrated	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	32	acl:relcl	_	_
36	local	local	ADJ	A	Degree=Pos	37	amod	_	_
37	producers	producer	NOUN	S	Number=Plur	35	obj	_	_
38	into	into	ADP	E	_	42	case	_	_
39	their	their	DET	AP	Poss=Yes|PronType=Prs	42	nmod:poss	_	_
40	global	global	ADJ	A	Degree=Pos	42	amod	_	_
41	value	value	NOUN	S	Number=Sing	42	nmod	_	_
42	chains	chain	NOUN	S	Number=Plur	35	obl	_	SpaceAfter=No
43	.	.	PUNCT	FS	_	21	punct	_	_

~~~


