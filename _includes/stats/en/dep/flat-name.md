

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is a language-specific subtype of [flat]().
There are also 1 other language-specific subtypes of `flat`: [flat:foreign]().

313 nodes (1%) are attached to their parents as `flat:name`.

312 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.35143769968051.

The following 5 pairs of parts of speech are connected with `flat:name`: [en-pos/PROPN]()-[en-pos/PROPN]() (307; 98% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (2; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (2; 1% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat:name	color:blue
1	This	this	PRON	PD	Number=Sing|PronType=Dem	4	nsubj	_	_
2	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	4	det	_	_
4	shot	shot	NOUN	S	Number=Sing	0	root	_	_
5	of	of	ADP	E	_	6	case	_	_
6	Cannery	Cannery	PROPN	SP	_	4	nmod	_	_
7	Row	Row	PROPN	SP	_	6	flat:name	_	_
8	in	in	ADP	E	_	9	case	_	_
9	1932	1932	NUM	N	NumType=Card	4	nummod	_	SpaceAfter=No
10	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 flat:name	color:blue
1	Anyone	anyone	PRON	PE	Number=Sing|Person=3|PronType=Prs	6	nsubj	_	_
2	who	who	PRON	PR	PronType=Rel	3	nsubj	_	_
3	doubts	doubt	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	acl:relcl	_	_
4	that	that	PRON	PD	Number=Sing|PronType=Dem	3	obj	_	_
5	should	shall	AUX	VM	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
6	review	review	VERB	V	VerbForm=Inf	0	root	_	_
7	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	9	det	_	_
8	recent	recent	ADJ	A	Degree=Pos	9	amod	_	_
9	letter	letter	NOUN	S	Number=Sing	6	obj	_	_
10	orchestrated	orchestrate	VERB	V	Tense=Past|VerbForm=Part	9	acl	_	_
11	by	by	ADP	E	_	15	case	_	_
12	the	the	DET	RD	Definite=Def|PronType=Art	15	det	_	_
13	Bretton	Bretton	PROPN	SP	_	15	nmod	_	_
14	Woods	Woods	PROPN	SP	_	15	flat:name	_	_
15	Committee	committee	NOUN	S	Number=Sing	10	obl:agent	_	SpaceAfter=No
16	,	,	PUNCT	FF	_	9	punct	_	_
17	addressed	address	VERB	V	Tense=Past|VerbForm=Part	9	acl	_	_
18	to	to	ADP	E	_	20	case	_	_
19	Congressional	congressional	ADJ	A	Degree=Pos	20	amod	_	_
20	leaders	leader	NOUN	S	Number=Plur	17	obl	_	_
21	on	on	ADP	E	_	22	case	_	_
22	behalf	behalf	NOUN	S	Number=Sing	17	obl	_	_
23	of	of	ADP	E	_	26	case	_	_
24	an	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	26	det	_	_
25	impressive	impressive	ADJ	A	Degree=Pos	26	amod	_	_
26	array	array	NOUN	S	Number=Sing	22	nmod	_	_
27	of	of	ADP	E	_	33	case	_	_
28	former	former	ADJ	A	Degree=Pos	29	amod	_	_
29	Republican	republican	ADJ	A	Degree=Pos	32	amod	_	_
30	and	and	CCONJ	CC	_	31	cc	_	_
31	Democratic	democratic	ADJ	A	Degree=Pos	29	conj	_	_
32	cabinet	cabinet	NOUN	S	Number=Sing	33	nmod	_	_
33	secretaries	secretary	NOUN	S	Number=Plur	26	nmod	_	SpaceAfter=No
34	.	.	PUNCT	FS	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 flat:name	color:blue
1	his	his	DET	AP	Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	Captain	Captain	PROPN	SP	_	12	nsubj	_	_
3	Ahab	Ahab	PROPN	SP	_	2	nmod	_	_
4	in	in	ADP	E	_	5	case	_	_
5	Moby	Moby	PROPN	SP	_	2	nmod	_	SpaceAfter=No
6	-	-	PUNCT	FF	_	5	punct	_	SpaceAfter=No
7	Dick	dick	NOUN	S	Number=Sing	5	flat:name	_	_
8	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
9	a	a	DET	RI	Definite=Ind|Number=Sing|PronType=Art	12	det	_	_
10	classic	classic	ADJ	A	Degree=Pos	12	amod	_	_
11	tragic	tragic	ADJ	A	Degree=Pos	12	amod	_	_
12	hero	hero	NOUN	S	Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
13	,	,	PUNCT	FF	_	12	punct	_	_
14	inspired	inspire	VERB	V	Tense=Past|VerbForm=Part	12	acl	_	_
15	by	by	ADP	E	_	16	case	_	_
16	King	King	PROPN	SP	_	14	obl:agent	_	_
17	Lear	Lear	PROPN	SP	_	16	flat	_	SpaceAfter=No
18	.	.	PUNCT	FS	_	12	punct	_	_

~~~


