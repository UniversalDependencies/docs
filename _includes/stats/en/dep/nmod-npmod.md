

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:poss](), [nmod:tmod]().

721 nodes (0%) are attached to their parents as `nmod:npmod`.

457 instances of `nmod:npmod` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.24410540915395.

The following 43 pairs of parts of speech are connected with `nmod:npmod`: [en-pos/VERB]()-[en-pos/NOUN]() (164; 23% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (135; 19% instances), [en-pos/ADV]()-[en-pos/NOUN]() (130; 18% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (73; 10% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (23; 3% instances), [en-pos/NOUN]()-[en-pos/PRON]() (21; 3% instances), [en-pos/VERB]()-[en-pos/PROPN]() (21; 3% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (19; 3% instances), [en-pos/ADJ]()-[en-pos/SYM]() (15; 2% instances), [en-pos/VERB]()-[en-pos/PRON]() (13; 2% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (10; 1% instances), [en-pos/ADV]()-[en-pos/ADJ]() (9; 1% instances), [en-pos/NUM]()-[en-pos/NOUN]() (8; 1% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (6; 1% instances), [en-pos/NOUN]()-[en-pos/SYM]() (6; 1% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (6; 1% instances), [en-pos/VERB]()-[en-pos/ADJ]() (6; 1% instances), [en-pos/NUM]()-[en-pos/PROPN]() (5; 1% instances), [en-pos/PROPN]()-[en-pos/PRON]() (5; 1% instances), [en-pos/SYM]()-[en-pos/NOUN]() (4; 1% instances), [en-pos/VERB]()-[en-pos/ADV]() (4; 1% instances), [en-pos/VERB]()-[en-pos/DET]() (4; 1% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (3; 0% instances), [en-pos/PRON]()-[en-pos/PRON]() (3; 0% instances), [en-pos/PROPN]()-[en-pos/NUM]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/PRON]() (2; 0% instances), [en-pos/ADV]()-[en-pos/SYM]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/DET]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/NUM]() (2; 0% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (2; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (2; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADV]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/NUM]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/X]() (1; 0% instances), [en-pos/DET]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/PRON]()-[en-pos/DET]() (1; 0% instances), [en-pos/PRON]()-[en-pos/NUM]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/ADV]() (1; 0% instances), [en-pos/SYM]()-[en-pos/DET]() (1; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/X]() (1; 0% instances), [en-pos/X]()-[en-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:npmod	color:blue
1	Do	do	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
2	people	people	NOUN	NNS	Number=Plur	6	nsubj	_	_
3	Bare	bare	ADJ	JJ	Degree=Pos	5	amod	_	SpaceAfter=No
4	-	-	PUNCT	HYPH	_	5	punct	_	SpaceAfter=No
5	knuckle	knuckle	NOUN	NN	Number=Sing	6	nmod:npmod	_	_
6	box	box	VERB	VB	VerbForm=Inf	0	root	_	_
7	in	in	ADP	IN	_	8	case	_	_
8	Ireland	Ireland	PROPN	NNP	Number=Sing	6	nmod	_	SpaceAfter=No
9	?	?	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:npmod	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	also	also	ADV	RB	_	3	advmod	_	_
3	do	do	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	banners	banner	NOUN	NNS	Number=Plur	3	dobj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	4	punct	_	_
6	billboards	billboard	NOUN	NNS	Number=Plur	4	conj	_	_
7	and	and	CONJ	CC	_	4	cc	_	_
8	lots	lot	NOUN	NNS	Number=Plur	9	nmod:npmod	_	_
9	more	more	ADJ	JJR	Degree=Cmp	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:npmod	color:blue
1	Four	four	NUM	CD	NumType=Card	2	nummod	_	_
2	months	month	NOUN	NNS	Number=Plur	3	nmod:npmod	_	_
3	later	later	ADV	RB	_	7	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubjpass	_	_
6	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	auxpass	_	_
7	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:poss](), [nmod:tmod]().

196 nodes (0%) are attached to their parents as `nmod:npmod`.

127 instances of `nmod:npmod` (65%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.61734693877551.

The following 19 pairs of parts of speech are connected with `nmod:npmod`: [en-pos/ADV]()-[en-pos/NOUN]() (65; 33% instances), [en-pos/VERB]()-[en-pos/NOUN]() (58; 30% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (27; 14% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (17; 9% instances), [en-pos/NOUN]()-[en-pos/PRON]() (6; 3% instances), [en-pos/VERB]()-[en-pos/ADJ]() (6; 3% instances), [en-pos/VERB]()-[en-pos/PROPN]() (3; 2% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (2; 1% instances), [en-pos/VERB]()-[en-pos/PRON]() (2; 1% instances), [en-pos/ADP]()-[en-pos/NOUN]() (1; 1% instances), [en-pos/ADV]()-[en-pos/NUM]() (1; 1% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (1; 1% instances), [en-pos/NOUN]()-[en-pos/DET]() (1; 1% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (1; 1% instances), [en-pos/PRON]()-[en-pos/NOUN]() (1; 1% instances), [en-pos/PROPN]()-[en-pos/PRON]() (1; 1% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 1% instances), [en-pos/VERB]()-[en-pos/ADV]() (1; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (1; 1% instances).


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


