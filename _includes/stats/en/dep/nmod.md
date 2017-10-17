

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.
There are 3 language-specific subtypes of `nmod`: [nmod:npmod](), [nmod:poss](), [nmod:tmod]().

7727 nodes (3%) are attached to their parents as `nmod`.

7634 instances of `nmod` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.48220525430309.

The following 59 pairs of parts of speech are connected with `nmod`: [en-pos/NOUN]()-[en-pos/NOUN]() (4606; 60% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (1395; 18% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (330; 4% instances), [en-pos/NOUN]()-[en-pos/PRON]() (221; 3% instances), [en-pos/DET]()-[en-pos/NOUN]() (132; 2% instances), [en-pos/NUM]()-[en-pos/NOUN]() (122; 2% instances), [en-pos/NUM]()-[en-pos/NUM]() (110; 1% instances), [en-pos/PRON]()-[en-pos/NOUN]() (98; 1% instances), [en-pos/NOUN]()-[en-pos/NUM]() (97; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (89; 1% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (53; 1% instances), [en-pos/DET]()-[en-pos/PRON]() (42; 1% instances), [en-pos/SYM]()-[en-pos/NOUN]() (40; 1% instances), [en-pos/PROPN]()-[en-pos/NUM]() (36; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (33; 0% instances), [en-pos/NUM]()-[en-pos/PRON]() (32; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (29; 0% instances), [en-pos/NOUN]()-[en-pos/SYM]() (27; 0% instances), [en-pos/NOUN]()-[en-pos/ADP]() (25; 0% instances), [en-pos/NUM]()-[en-pos/ADV]() (23; 0% instances), [en-pos/PRON]()-[en-pos/PROPN]() (23; 0% instances), [en-pos/PRON]()-[en-pos/PRON]() (22; 0% instances), [en-pos/ADJ]()-[en-pos/PRON]() (20; 0% instances), [en-pos/NOUN]()-[en-pos/DET]() (20; 0% instances), [en-pos/NUM]()-[en-pos/PROPN]() (12; 0% instances), [en-pos/NOUN]()-[en-pos/X]() (8; 0% instances), [en-pos/NUM]()-[en-pos/ADJ]() (6; 0% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (5; 0% instances), [en-pos/ADP]()-[en-pos/NOUN]() (5; 0% instances), [en-pos/DET]()-[en-pos/ADJ]() (5; 0% instances), [en-pos/DET]()-[en-pos/PROPN]() (5; 0% instances), [en-pos/PRON]()-[en-pos/NUM]() (4; 0% instances), [en-pos/PROPN]()-[en-pos/PRON]() (4; 0% instances), [en-pos/SYM]()-[en-pos/SYM]() (4; 0% instances), [en-pos/DET]()-[en-pos/ADV]() (3; 0% instances), [en-pos/DET]()-[en-pos/NUM]() (3; 0% instances), [en-pos/NUM]()-[en-pos/SYM]() (3; 0% instances), [en-pos/PRON]()-[en-pos/ADJ]() (3; 0% instances), [en-pos/PRON]()-[en-pos/ADP]() (3; 0% instances), [en-pos/PROPN]()-[en-pos/ADV]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/INTJ]() (2; 0% instances), [en-pos/NUM]()-[en-pos/DET]() (2; 0% instances), [en-pos/PRON]()-[en-pos/ADV]() (2; 0% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/SYM]()-[en-pos/ADV]() (2; 0% instances), [en-pos/X]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/ADV]()-[en-pos/PRON]() (1; 0% instances), [en-pos/ADV]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/DET]()-[en-pos/DET]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/SCONJ]() (1; 0% instances), [en-pos/NUM]()-[en-pos/ADP]() (1; 0% instances), [en-pos/PRON]()-[en-pos/DET]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/PUNCT]() (1; 0% instances), [en-pos/SYM]()-[en-pos/DET]() (1; 0% instances), [en-pos/SYM]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/X]()-[en-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 nmod	color:blue
1	When	when	ADV	WRB	PronType=Int	3	mark	_	_
2	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
3	saw	see	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	11	advcl	_	_
4	a	a	DET	DT	Definite=Ind|PronType=Art	5	det	_	_
5	cartoon	cartoon	NOUN	NN	Number=Sing	3	obj	_	_
6	of	of	ADP	IN	_	8	case	_	_
7	their	they	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	prophet	prophet	NOUN	NN	Number=Sing	5	nmod	_	SpaceAfter=No
9	,	,	PUNCT	,	_	11	punct	_	_
10	people	people	NOUN	NNS	Number=Plur	11	nsubj	_	_
11	had	have	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
12	to	to	PART	TO	_	13	mark	_	_
13	die	die	VERB	VB	VerbForm=Inf	11	xcomp	_	SpaceAfter=No
14	.	.	PUNCT	.	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	_	_
2	case	case	NOUN	NN	Number=Sing	5	nsubj	_	_
3	against	against	ADP	IN	_	4	case	_	_
4	Iran	Iran	PROPN	NNP	Number=Sing	2	nmod	_	_
5	has	have	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	7	det	_	_
7	feeling	feeling	NOUN	NN	Number=Sing	5	obj	_	_
8	of	of	ADP	IN	_	10	case	_	_
9	Déjà	déjà	X	FW	Foreign=Yes	10	compound	_	_
10	vu	vu	X	FW	Foreign=Yes	7	nmod	_	SpaceAfter=No
11	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	spoke	speak	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	to	to	ADP	IN	_	4	case	_	_
4	Bruce	Bruce	PROPN	NNP	Number=Sing	2	obl	_	_
5	Garcey	Garcey	PROPN	NNP	Number=Sing	4	flat	_	_
6	at	at	ADP	IN	_	7	case	_	_
7	NiMo	NiMo	PROPN	NNP	Number=Sing	4	nmod	_	_
8	regarding	regard	VERB	VBG	VerbForm=Ger	10	case	_	_
9	their	they	PRON	PRP$	Number=Plur|Person=3|Poss=Yes|PronType=Prs	10	nmod:poss	_	_
10	RFP	rfp	NOUN	NN	Number=Sing	2	obl	_	SpaceAfter=No
11	.	.	PUNCT	.	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.
There are 3 language-specific subtypes of `nmod`: [nmod:npmod](), [nmod:poss](), [nmod:tmod]().

7137 nodes (8%) are attached to their parents as `nmod`.

6222 instances of `nmod` (87%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.65980103685022.

The following 62 pairs of parts of speech are connected with `nmod`: [en-pos/VERB]()-[en-pos/NOUN]() (2884; 40% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (1752; 25% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (471; 7% instances), [en-pos/VERB]()-[en-pos/PRON]() (412; 6% instances), [en-pos/VERB]()-[en-pos/PROPN]() (286; 4% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (228; 3% instances), [en-pos/NOUN]()-[en-pos/PRON]() (194; 3% instances), [en-pos/ADJ]()-[en-pos/PRON]() (130; 2% instances), [en-pos/VERB]()-[en-pos/NUM]() (108; 2% instances), [en-pos/NUM]()-[en-pos/NOUN]() (70; 1% instances), [en-pos/ADV]()-[en-pos/DET]() (62; 1% instances), [en-pos/VERB]()-[en-pos/ADP]() (49; 1% instances), [en-pos/VERB]()-[en-pos/DET]() (47; 1% instances), [en-pos/PRON]()-[en-pos/NOUN]() (45; 1% instances), [en-pos/ADV]()-[en-pos/NOUN]() (42; 1% instances), [en-pos/VERB]()-[en-pos/ADV]() (28; 0% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (27; 0% instances), [en-pos/VERB]()-[en-pos/ADJ]() (26; 0% instances), [en-pos/DET]()-[en-pos/PRON]() (24; 0% instances), [en-pos/DET]()-[en-pos/NOUN]() (23; 0% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (18; 0% instances), [en-pos/ADJ]()-[en-pos/DET]() (17; 0% instances), [en-pos/NOUN]()-[en-pos/NUM]() (16; 0% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (16; 0% instances), [en-pos/NOUN]()-[en-pos/DET]() (15; 0% instances), [en-pos/ADV]()-[en-pos/PRON]() (12; 0% instances), [en-pos/PRON]()-[en-pos/PRON]() (11; 0% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (8; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (8; 0% instances), [en-pos/ADJ]()-[en-pos/ADP]() (7; 0% instances), [en-pos/ADJ]()-[en-pos/ADV]() (7; 0% instances), [en-pos/ADJ]()-[en-pos/NUM]() (7; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (7; 0% instances), [en-pos/NOUN]()-[en-pos/VERB]() (6; 0% instances), [en-pos/NUM]()-[en-pos/PRON]() (6; 0% instances), [en-pos/SYM]()-[en-pos/NOUN]() (6; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (5; 0% instances), [en-pos/ADV]()-[en-pos/PROPN]() (5; 0% instances), [en-pos/NOUN]()-[en-pos/ADP]() (5; 0% instances), [en-pos/NOUN]()-[en-pos/SYM]() (5; 0% instances), [en-pos/VERB]()-[en-pos/PART]() (5; 0% instances), [en-pos/NUM]()-[en-pos/NUM]() (4; 0% instances), [en-pos/NUM]()-[en-pos/ADV]() (3; 0% instances), [en-pos/NUM]()-[en-pos/PROPN]() (3; 0% instances), [en-pos/PROPN]()-[en-pos/NUM]() (3; 0% instances), [en-pos/PROPN]()-[en-pos/PRON]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/VERB]() (2; 0% instances), [en-pos/ADV]()-[en-pos/VERB]() (2; 0% instances), [en-pos/NUM]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/PRON]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/PRON]()-[en-pos/DET]() (2; 0% instances), [en-pos/ADP]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/ADV]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADV]()-[en-pos/ADP]() (1; 0% instances), [en-pos/ADV]()-[en-pos/NUM]() (1; 0% instances), [en-pos/INTJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/NUM]()-[en-pos/ADP]() (1; 0% instances), [en-pos/PRON]()-[en-pos/NUM]() (1; 0% instances), [en-pos/PRON]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/SYM]() (1; 0% instances), [en-pos/SYM]()-[en-pos/SYM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 nmod	color:blue
1	_	_	SCONJ	IN	_	4	mark	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	NOUN	NN	_	4	nsubj	_	_
4	_	_	VERB	VBD	_	7	advcl	_	_
5	_	_	PUNCT	,	_	7	punct	_	_
6	_	_	PRON	PRP	_	7	nsubj	_	_
7	_	_	VERB	VBD	_	0	root	_	_
8	_	_	DET	DT	_	9	det	_	_
9	_	_	NOUN	NN	_	7	dobj	_	_
10	_	_	ADP	IN	_	11	case	_	_
11	_	_	NOUN	NNS	_	7	nmod	_	_
12	_	_	CONJ	CC	_	7	cc	_	_
13	_	_	PRON	PRP	_	14	nsubj	_	_
14	_	_	VERB	VBD	_	7	conj	_	_
15	_	_	DET	DT	_	16	det	_	_
16	_	_	NOUN	NNS	_	14	dobj	_	_
17	_	_	ADP	IN	_	18	case	_	_
18	_	_	NOUN	NNS	_	14	nmod	_	_
19	_	_	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 16 nmod	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	NOUN	NN	_	6	nmod	_	_
4	_	_	PUNCT	,	_	6	punct	_	_
5	_	_	PRON	PRP	_	6	nsubj	_	_
6	_	_	VERB	VBD	_	0	root	_	_
7	_	_	ADP	IN	_	8	case	_	_
8	_	_	NOUN	NN	_	6	nmod	_	_
9	_	_	ADV	RB	_	8	advmod	_	_
10	_	_	PUNCT	-LRB-	_	11	punct	_	_
11	_	_	CONJ	CC	_	8	cc	_	_
12	_	_	NOUN	NN	_	8	conj	_	_
13	_	_	ADP	IN	_	16	case	_	_
14	_	_	DET	PRP$	_	16	nmod:poss	_	_
15	_	_	ADJ	JJ	_	16	amod	_	_
16	_	_	NOUN	NN	_	12	nmod	_	_
17	_	_	PUNCT	-RRB-	_	12	punct	_	_
18	_	_	PUNCT	:	_	6	punct	_	_
19	_	_	AUX	VBP	_	21	aux	_	_
20	_	_	PRON	PRP	_	21	nsubj	_	_
21	_	_	VERB	VB	_	6	parataxis	_	_
22	_	_	PRON	NN	_	23	nsubj	_	_
23	_	_	VERB	VBP	_	21	ccomp	_	_
24	_	_	PRON	PRP	_	23	iobj	_	_
25	_	_	ADP	RP	_	23	compound:prt	_	_
26	_	_	PRON	NN	_	23	dobj	_	_
27	_	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 19 24 nmod	color:blue
1	_	_	ADP	IN	_	3	case	_	_
2	_	_	DET	PRP$	_	3	nmod:poss	_	_
3	_	_	NOUN	NNS	_	9	nmod	_	_
4	_	_	ADP	IN	_	6	case	_	_
5	_	_	DET	DT	_	6	det	_	_
6	_	_	NOUN	NN	_	3	nmod	_	_
7	_	_	PRON	PRP	_	9	nsubj	_	_
8	_	_	AUX	MD	_	9	aux	_	_
9	_	_	VERB	VB	_	0	root	_	_
10	_	_	PART	TO	_	11	mark	_	_
11	_	_	VERB	VB	_	9	xcomp	_	_
12	_	_	ADP	IN	_	15	case	_	_
13	_	_	DET	DT	_	15	det	_	_
14	_	_	NOUN	NN	_	15	compound	_	_
15	_	_	NOUN	NN	_	11	nmod	_	_
16	_	_	SCONJ	IN	_	19	mark	_	_
17	_	_	PRON	PRP	_	19	nsubj	_	_
18	_	_	VERB	VBZ	_	19	cop	_	_
19	_	_	ADJ	JJR	_	9	advcl	_	_
20	_	_	SCONJ	IN	_	24	mark	_	_
21	_	_	VERB	VBG	_	24	cop	_	_
22	_	_	ADP	IN	_	24	case	_	_
23	_	_	DET	DT	_	24	det	_	_
24	_	_	NOUN	NN	_	19	nmod	_	_
25	_	_	CONJ	CC	_	19	cc	_	_
26	_	_	SCONJ	IN	_	28	mark	_	_
27	_	_	PRON	PRP	_	28	nsubj	_	_
28	_	_	VERB	VBP	_	19	conj	_	_
29	_	_	ADV	RBR	_	30	advmod	_	_
30	_	_	ADJ	JJ	_	28	advmod	_	_
31	_	_	PUNCT	.	_	9	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is universal.
There are 1 language-specific subtypes of `nmod`: [nmod:poss]().

2710 nodes (4%) are attached to their parents as `nmod`.

2590 instances of `nmod` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.24354243542435.

The following 35 pairs of parts of speech are connected with `nmod`: [en-pos/NOUN]()-[en-pos/NOUN]() (1739; 64% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (216; 8% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (209; 8% instances), [en-pos/NOUN]()-[en-pos/PRON]() (113; 4% instances), [en-pos/PRON]()-[en-pos/NOUN]() (97; 4% instances), [en-pos/PRON]()-[en-pos/PRON]() (53; 2% instances), [en-pos/ADV]()-[en-pos/NOUN]() (44; 2% instances), [en-pos/ADJ]()-[en-pos/PRON]() (40; 1% instances), [en-pos/NUM]()-[en-pos/NOUN]() (40; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (33; 1% instances), [en-pos/ADP]()-[en-pos/NOUN]() (28; 1% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (22; 1% instances), [en-pos/PROPN]()-[en-pos/PRON]() (10; 0% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (8; 0% instances), [en-pos/ADV]()-[en-pos/PROPN]() (7; 0% instances), [en-pos/ADV]()-[en-pos/PRON]() (6; 0% instances), [en-pos/NOUN]()-[en-pos/ADP]() (5; 0% instances), [en-pos/PRON]()-[en-pos/PROPN]() (5; 0% instances), [en-pos/ADP]()-[en-pos/PRON]() (4; 0% instances), [en-pos/ADP]()-[en-pos/PROPN]() (4; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (3; 0% instances), [en-pos/NUM]()-[en-pos/PRON]() (3; 0% instances), [en-pos/NUM]()-[en-pos/PROPN]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/ADP]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/NUM]() (2; 0% instances), [en-pos/PUNCT]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/X]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/ADP]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/CCONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/INTJ]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/PART]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 nmod	color:blue
1	Some	_	PRON	IND	_	8	nsubj	_	_
2	of	_	ADP	_	_	4	case	_	_
3	the	_	DET	DEF	_	4	det	_	_
4	hyperlinks	_	NOUN	PL-NOM	_	1	nmod	_	_
5	in	_	ADP	_	_	7	case	_	_
6	this	_	DET	DEM-SG	_	7	det	_	_
7	topic	_	NOUN	SG-NOM	_	4	nmod	_	_
8	go	_	VERB	PRES	_	0	root	_	_
9	to	_	ADP	_	_	11	case	_	_
10	the	_	DET	DEF	_	11	det	_	_
11	Web	_	NOUN	SG-NOM	_	8	obl	_	SpaceAfter=No
12	.	_	PUNCT	Period	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
1	Additional	_	ADJ	POS	_	2	amod	_	_
2	information	_	NOUN	SG-NOM	_	7	nsubj:pass	_	_
3	about	_	ADP	_	_	4	case	_	_
4	XML	_	PROPN	SG-NOM	_	2	nmod	_	_
5	can	_	AUX	PRES-AUX	_	7	aux	_	_
6	be	_	AUX	INF	_	7	aux	_	_
7	found	_	VERB	PASS	_	0	root	_	_
8	on	_	ADP	_	_	11	case	_	_
9	the	_	DET	DEF	_	11	det	_	_
10	web	_	NOUN	SG-NOM	_	11	compound	_	_
11	site	_	NOUN	SG-NOM	_	7	obl	_	SpaceAfter=No
12	.	_	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nmod	color:blue
1	Immobile	_	ADJ	POS	_	8	advmod	_	_
2	among	_	ADP	_	_	5	case	_	_
3	the	_	DET	DEF	_	5	det	_	_
4	moving	_	ADJ	ING	_	5	amod	_	_
5	crowd	_	NOUN	SG-NOM	_	1	nmod	_	SpaceAfter=No
6	,	_	PUNCT	Comma	_	8	punct	_	_
7	he	_	PRON	PERS-P3SG-NOM	_	8	nsubj	_	_
8	stood	_	VERB	PAST	_	0	root	_	_
9	there	_	ADV	_	_	8	advmod	_	_
10	and	_	CCONJ	_	_	11	cc	_	_
11	watched	_	VERB	PAST	_	8	conj	_	SpaceAfter=No
12	.	_	PUNCT	Period	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is universal.
There are 3 language-specific subtypes of `nmod`: [nmod:npmod](), [nmod:poss](), [nmod:tmod]().

3435 nodes (9%) are attached to their parents as `nmod`.

2136 instances of `nmod` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.83901018922853.

The following 35 pairs of parts of speech are connected with `nmod`: [en-pos/NOUN]()-[en-pos/NOUN]() (2420; 70% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (643; 19% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (55; 2% instances), [en-pos/NOUN]()-[en-pos/PRON]() (54; 2% instances), [en-pos/PRON]()-[en-pos/NOUN]() (51; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (51; 1% instances), [en-pos/NUM]()-[en-pos/NOUN]() (32; 1% instances), [en-pos/NUM]()-[en-pos/PROPN]() (19; 1% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (18; 1% instances), [en-pos/PRON]()-[en-pos/PRON]() (18; 1% instances), [en-pos/NOUN]()-[en-pos/X]() (14; 0% instances), [en-pos/NOUN]()-[en-pos/SYM]() (10; 0% instances), [en-pos/SYM]()-[en-pos/NOUN]() (7; 0% instances), [en-pos/NOUN]()-[en-pos/DET]() (6; 0% instances), [en-pos/PRON]()-[en-pos/PROPN]() (6; 0% instances), [en-pos/DET]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/ADP]() (3; 0% instances), [en-pos/PROPN]()-[en-pos/PRON]() (3; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/AUX]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/PROPN]()-[en-pos/SYM]() (2; 0% instances), [en-pos/X]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/DET]()-[en-pos/PRON]() (1; 0% instances), [en-pos/INTJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/VERB]() (1; 0% instances), [en-pos/PRON]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/X]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/PRON]() (1; 0% instances), [en-pos/VERB]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/X]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/X]()-[en-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod	color:blue
1	2	2	NUM	N	NumType=Card	5	nummod	_	SpaceAfter=No
2	.	.	PUNCT	FF	_	1	punct	_	_
3	Fair	fair	ADJ	A	Degree=Pos	4	amod	_	_
4	Use	use	NOUN	S	Number=Sing	5	nmod	_	_
5	Rights	right	NOUN	S	Number=Plur	0	root	_	SpaceAfter=No
6	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod	color:blue
1	(	(	PUNCT	FB	_	2	punct	_	SpaceAfter=No
2	Applause	applause	NOUN	S	Number=Sing	0	root	_	_
3	from	from	ADP	E	_	6	case	_	_
4	the	the	DET	RD	Definite=Def|PronType=Art	6	det	_	_
5	PSE	Pse	PROPN	SP	_	6	nmod	_	_
6	Group	group	NOUN	S	Number=Sing	2	nmod	_	SpaceAfter=No
7	)	)	PUNCT	FB	_	2	punct	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	Promote	promote	VERB	V	Mood=Imp|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
2	your	you	DET	AP	Poss=Yes|PronType=Prs	4	nmod:poss	_	_
3	Facebook	Facebook	PROPN	SP	_	4	nmod	_	_
4	Page	Page	PROPN	SP	_	1	obj	_	_
5	or	or	CCONJ	CC	_	6	cc	_	_
6	website	website	NOUN	S	Number=Sing	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	_	_

~~~


