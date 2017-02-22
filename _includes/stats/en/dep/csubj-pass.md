

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [csubj]().

5 nodes (0%) are attached to their parents as `csubj:pass`.

3 instances of `csubj:pass` (60%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.8.

The following 2 pairs of parts of speech are connected with `csubj:pass`: [en-pos/VERB]()-[en-pos/VERB]() (4; 80% instances), [en-pos/VERB]()-[en-pos/NOUN]() (1; 20% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 csubj:pass	color:blue
1	What	what	PRON	WP	PronType=Int	2	nsubj	_	_
2	followed	follow	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	csubj:pass	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
4	next	next	ADJ	JJ	Degree=Pos	5	amod	_	_
5	day	day	NOUN	NN	Number=Sing	2	obl:tmod	_	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
7	considered	consider	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
8	by	by	ADP	IN	_	10	case	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	10	det	_	_
10	governor	governor	PROPN	NNP	Number=Sing	7	obl	_	_
11	and	and	CCONJ	CC	_	12	cc	_	_
12	Dunn	Dunn	PROPN	NNP	Number=Sing	10	conj	_	_
13	to	to	PART	TO	_	17	mark	_	_
14	be	be	AUX	VB	VerbForm=Inf	17	cop	_	_
15	the	the	DET	DT	Definite=Def|PronType=Art	17	det	_	_
16	pivotal	pivotal	ADJ	JJ	Degree=Pos	17	amod	_	_
17	moment	moment	NOUN	NN	Number=Sing	7	xcomp	_	_
18	of	of	ADP	IN	_	21	case	_	_
19	the	the	DET	DT	Definite=Def|PronType=Art	21	det	_	_
20	energy	energy	NOUN	NN	Number=Sing	21	compound	_	_
21	crisis	crisis	NOUN	NN	Number=Sing	17	nmod	_	SpaceAfter=No
22	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 csubj:pass	color:blue
1	Finally	finally	ADV	RB	_	6	advmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	6	punct	_	_
3	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
4	must	must	AUX	MD	VerbForm=Fin	6	aux	_	_
5	be	be	AUX	VB	VerbForm=Inf	6	aux:pass	_	_
6	said	say	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
7	that	that	SCONJ	IN	_	12	mark	_	_
8	Stuart	Stuart	PROPN	NNP	Number=Sing	12	nsubj	_	_
9	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
10	a	a	DET	DT	Definite=Ind|PronType=Art	12	det	_	_
11	fantastic	fantastic	ADJ	JJ	Degree=Pos	12	amod	_	_
12	person	person	NOUN	NN	Number=Sing	6	csubj:pass	_	_
13	to	to	PART	TO	_	14	mark	_	_
14	work	work	VERB	VB	VerbForm=Inf	12	acl	_	_
15	with	with	ADP	IN	_	14	obl	_	SpaceAfter=No
16	,	,	PUNCT	,	_	14	punct	_	_
17	because	because	ADP	IN	_	21	case	_	_
18	of	of	ADP	IN	_	17	fixed	_	_
19	his	he	PRON	PRP$	Gender=Masc|Number=Sing|Person=3|Poss=Yes|PronType=Prs	21	nmod:poss	_	_
20	solid	solid	ADJ	JJ	Degree=Pos	21	amod	_	_
21	strategies	strategy	NOUN	NNS	Number=Plur	14	obl	_	_
22	and	and	CCONJ	CC	_	32	cc	_	_
23	equally	equally	ADV	RB	_	32	advmod	_	_
24	as	as	ADP	IN	_	25	case	_	_
25	importantly	importantly	ADV	RB	_	23	obl	_	_
26	because	because	SCONJ	IN	_	32	mark	_	_
27	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	32	nsubj	_	_
28	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	32	cop	_	_
29	a	a	DET	DT	Definite=Ind|PronType=Art	32	det	_	_
30	genuinely	genuinely	ADV	RB	_	31	advmod	_	_
31	good	good	ADJ	JJ	Degree=Pos	32	amod	_	_
32	person	person	NOUN	NN	Number=Sing	21	conj	_	_
33	and	and	CCONJ	CC	_	36	cc	_	_
34	a	a	DET	DT	Definite=Ind|PronType=Art	36	det	_	_
35	great	great	ADJ	JJ	Degree=Pos	36	amod	_	_
36	communicator	communicator	NOUN	NN	Number=Sing	32	conj	_	SpaceAfter=No
37	.	.	PUNCT	.	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is a language-specific subtype of [csubj]().

6 nodes (0%) are attached to their parents as `csubj:pass`.

4 instances of `csubj:pass` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.33333333333333.

The following 1 pairs of parts of speech are connected with `csubj:pass`: [en-pos/VERB]()-[en-pos/VERB]() (6; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 csubj:pass	color:blue
1	A	_	DET	IND-SG	_	3	det	_	_
2	further	_	ADJ	CMP	_	3	amod	_	_
3	point	_	NOUN	SG-NOM	_	0	root	_	_
4	was	_	AUX	PAST	_	3	cop	_	_
5	how	_	ADV	WH	_	10	mark	_	_
6	private	_	ADJ	POS	_	7	amod	_	_
7	copying	_	VERB	ING	_	10	csubj:pass	_	_
8	should	_	AUX	PAST-AUX	_	10	aux	_	_
9	be	_	AUX	INF	_	10	aux	_	_
10	regulated	_	VERB	PASS	_	3	csubj	_	_
11	in	_	ADP	_	_	14	case	_	_
12	the	_	DET	DEF	_	14	det	_	_
13	digital	_	ADJ	POS	_	14	amod	_	_
14	environment	_	NOUN	SG-NOM	_	10	obl	_	SpaceAfter=No
15	.	_	PUNCT	Period	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is a language-specific subtype of [csubj]().

3 nodes (0%) are attached to their parents as `csubj:pass`.

3 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.33333333333333.

The following 1 pairs of parts of speech are connected with `csubj:pass`: [en-pos/VERB]()-[en-pos/VERB]() (3; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 csubj:pass	color:blue
1	Given	give	VERB	V	Tense=Past|VerbForm=Part	20	advcl	_	_
2	that	that	SCONJ	CS	_	7	mark	_	_
3	financial	financial	ADJ	A	Degree=Pos	4	amod	_	_
4	institutions	institution	NOUN	S	Number=Plur	7	nsubj	_	_
5	had	have	AUX	VA	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	7	aux	_	_
6	been	be	AUX	VA	Tense=Past|VerbForm=Part	7	aux	_	_
7	attracting	attract	VERB	V	VerbForm=Ger	1	csubj:pass	_	_
8	the	the	DET	RD	Definite=Def|PronType=Art	9	det	_	_
9	best	best	ADJ	A	Degree=Sup	7	obj	_	_
10	and	and	CCONJ	CC	_	11	cc	_	_
11	brightest	brightest	ADJ	A	Degree=Sup	9	conj	_	_
12	from	from	ADP	E	_	15	case	_	_
13	around	around	ADP	E	_	12	fixed	_	_
14	the	the	DET	RD	Definite=Def|PronType=Art	15	det	_	_
15	world	world	NOUN	S	Number=Sing	7	obl	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	1	punct	_	_
17	one	one	PRON	PE	Number=Sing|Person=3|PronType=Prs	20	nsubj	_	_
18	would	will	AUX	VM	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	20	aux	_	_
19	have	have	AUX	VA	VerbForm=Inf	20	aux	_	_
20	expected	expect	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
21	nothing	nothing	PRON	PI	Number=Sing|PronType=Ind	20	obj	_	_
22	less	less	ADV	B	Degree=Cmp	21	advmod	_	SpaceAfter=No
23	.	.	PUNCT	FS	_	20	punct	_	_

~~~


