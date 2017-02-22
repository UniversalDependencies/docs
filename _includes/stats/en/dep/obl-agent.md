

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is a language-specific subtype of [obl]().

90 nodes (0%) are attached to their parents as `obl:agent`.

89 instances of `obl:agent` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.78888888888889.

The following 7 pairs of parts of speech are connected with `obl:agent`: [en-pos/VERB]()-[en-pos/NOUN]() (55; 61% instances), [en-pos/VERB]()-[en-pos/PROPN]() (16; 18% instances), [en-pos/VERB]()-[en-pos/PRON]() (9; 10% instances), [en-pos/NUM]()-[en-pos/PROPN]() (4; 4% instances), [en-pos/VERB]()-[en-pos/VERB]() (3; 3% instances), [en-pos/ADV]()-[en-pos/NOUN]() (2; 2% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:agent	color:blue
1	Food	_	NOUN	SG-NOM	_	3	nsubj:pass	_	_
2	was	_	AUX	PAST	_	3	aux	_	_
3	cooked	_	VERB	PASS	_	0	root	_	_
4	by	_	ADP	_	_	6	case	_	_
5	many	_	ADJ	POS	_	6	amod	_	_
6	hands	_	NOUN	PL-NOM	_	3	obl:agent	_	SpaceAfter=No
7	.	_	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 obl:agent	color:blue
1	That	_	PRON	DEM-SG	_	4	nsubj:pass	_	_
2	was	_	AUX	PAST	_	4	aux	_	_
3	also	_	ADV	_	_	4	advmod	_	_
4	mentioned	_	VERB	PASS	_	0	root	_	_
5	by	_	ADP	_	_	10	case	_	_
6	Mrs	_	NOUN	SG-NOM	_	7	compound	_	_
7	Oomen-Ruijten	_	PROPN	SG-NOM	_	10	compound	_	_
8	and	_	CCONJ	_	_	9	cc	_	_
9	Mrs	_	NOUN	SG-NOM	_	7	conj	_	_
10	Glase	_	PROPN	SG-NOM	_	4	obl:agent	_	SpaceAfter=No
11	.	_	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:agent	color:blue
1	John	_	PROPN	SG-NOM	_	3	nsubj:pass	_	_
2	was	_	AUX	PAST	_	3	aux	_	_
3	delighted	_	VERB	PASS	_	0	root	_	_
4	by	_	ADP	_	_	5	case	_	_
5	this	_	PRON	DEM-SG	_	3	obl:agent	_	SpaceAfter=No
6	.	_	PUNCT	Period	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is a language-specific subtype of [obl]().

117 nodes (0%) are attached to their parents as `obl:agent`.

117 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.79487179487179.

The following 3 pairs of parts of speech are connected with `obl:agent`: [en-pos/VERB]()-[en-pos/NOUN]() (101; 86% instances), [en-pos/VERB]()-[en-pos/PROPN]() (15; 13% instances), [en-pos/VERB]()-[en-pos/PRON]() (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	The	the	DET	RD	Definite=Def|PronType=Art	2	det	_	_
2	work	work	NOUN	S	Number=Sing	4	nsubj:pass	_	_
3	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	protected	protect	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
5	by	by	ADP	E	_	6	case	_	_
6	copyright	copyright	NOUN	S	Number=Sing	4	obl:agent	_	_
7	and	and	CCONJ	CC	_	12	cc	_	SpaceAfter=No
8	/	/	PUNCT	FF	_	9	punct	_	SpaceAfter=No
9	or	or	CCONJ	CC	_	7	conj	_	_
10	other	other	ADJ	A	Degree=Pos	12	amod	_	_
11	applicable	applicable	ADJ	A	Degree=Pos	12	amod	_	_
12	law	law	NOUN	S	Number=Sing	6	conj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Gustave	Gustave	PROPN	SP	_	6	nsubj:pass	_	_
2	Flaubert	Flaubert	PROPN	SP	_	1	flat:name	_	_
3	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
4	also	also	ADV	B	_	6	advmod	_	_
5	substantially	substantially	ADV	B	_	6	advmod	_	_
6	influenced	influence	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
7	by	by	ADP	E	_	8	case	_	_
8	Balzac	Balzac	PROPN	SP	_	6	obl:agent	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 39	bgColor:blue
# visual-style 39	fgColor:white
# visual-style 37	bgColor:blue
# visual-style 37	fgColor:white
# visual-style 37 39 obl:agent	color:blue
1	Few	few	ADJ	A	Degree=Pos	2	amod	_	_
2	records	record	NOUN	S	Number=Plur	8	nsubj	_	_
3	of	of	ADP	E	_	7	case	_	_
4	Shakespeare	Shakespeare	PROPN	SP	_	7	nmod	_	SpaceAfter=No
5	's	's	PART	PART	_	4	case	_	_
6	private	private	ADJ	A	Degree=Pos	7	amod	_	_
7	life	life	NOUN	S	Number=Sing	2	nmod	_	_
8	survive	survive	VERB	V	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
9	,	,	PUNCT	FF	_	13	punct	_	_
10	and	and	CCONJ	CC	_	13	cc	_	_
11	there	there	ADV	B	_	13	expl	_	_
12	has	have	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	13	aux	_	_
13	been	be	VERB	V	Tense=Past|VerbForm=Part	8	conj	_	_
14	considerable	considerable	ADJ	A	Degree=Pos	15	amod	_	_
15	speculation	speculation	NOUN	S	Number=Sing	13	nsubj	_	_
16	about	about	ADP	E	_	18	case	_	_
17	such	such	DET	DD	PronType=Dem	18	det	_	_
18	matters	matter	NOUN	S	Number=Plur	15	nmod	_	_
19	as	as	ADP	E	_	22	case	_	_
20	his	his	DET	AP	Poss=Yes|PronType=Prs	22	nmod:poss	_	_
21	physical	physical	ADJ	A	Degree=Pos	22	amod	_	_
22	appearance	appearance	NOUN	S	Number=Sing	18	nmod	_	SpaceAfter=No
23	,	,	PUNCT	FF	_	24	punct	_	_
24	sexuality	sexuality	NOUN	S	Number=Sing	22	conj	_	SpaceAfter=No
25	,	,	PUNCT	FF	_	27	punct	_	_
26	religious	religious	ADJ	A	Degree=Pos	27	amod	_	_
27	beliefs	belief	NOUN	S	Number=Plur	22	conj	_	SpaceAfter=No
28	,	,	PUNCT	FF	_	37	punct	_	_
29	and	and	CCONJ	CC	_	37	cc	_	_
30	whether	whether	SCONJ	CS	_	37	mark	_	_
31	the	the	DET	RD	Definite=Def|PronType=Art	32	det	_	_
32	works	work	NOUN	S	Number=Plur	37	nsubj:pass	_	_
33	attributed	attribute	VERB	V	Tense=Past|VerbForm=Part	32	acl	_	_
34	to	to	ADP	E	_	35	case	_	_
35	him	he	PRON	PE	Gender=Masc|Number=Sing|Person=3|PronType=Prs	33	obl	_	_
36	were	be	AUX	VA	Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	37	aux:pass	_	_
37	written	write	VERB	V	Tense=Past|VerbForm=Part	18	conj	_	_
38	by	by	ADP	E	_	39	case	_	_
39	others	other	PRON	PI	Number=Plur|PronType=Ind	37	obl:agent	_	SpaceAfter=No
40	.	.	PUNCT	FS	_	8	punct	_	_

~~~


