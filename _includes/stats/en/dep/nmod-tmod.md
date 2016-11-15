

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:npmod](), [nmod:poss]().

1027 nodes (0%) are attached to their parents as `nmod:tmod`.

888 instances of `nmod:tmod` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.65920155793574.

The following 27 pairs of parts of speech are connected with `nmod:tmod`: [en-pos/VERB]()-[en-pos/NOUN]() (499; 49% instances), [en-pos/NUM]()-[en-pos/NOUN]() (188; 18% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (82; 8% instances), [en-pos/VERB]()-[en-pos/PROPN]() (54; 5% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (42; 4% instances), [en-pos/PROPN]()-[en-pos/NUM]() (34; 3% instances), [en-pos/NOUN]()-[en-pos/PROPN]() (32; 3% instances), [en-pos/ADV]()-[en-pos/NOUN]() (28; 3% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (13; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (11; 1% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (10; 1% instances), [en-pos/NUM]()-[en-pos/NUM]() (9; 1% instances), [en-pos/NOUN]()-[en-pos/NUM]() (6; 1% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (2; 0% instances), [en-pos/ADV]()-[en-pos/NUM]() (2; 0% instances), [en-pos/AUX]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/VERB]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/ADV]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/NUM]() (1; 0% instances), [en-pos/ADV]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SYM]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/X]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/X]()-[en-pos/NUM]() (1; 0% instances), [en-pos/X]()-[en-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod:tmod	color:blue
1	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	aux	_	_
3	going	go	VERB	VBG	VerbForm=Ger	0	root	_	_
4	out	out	ADV	RB	_	3	advmod	_	_
5	tonight	tonight	NOUN	NN	Number=Sing	3	nmod:tmod	_	_
6	to	to	PART	TO	_	8	mark	_	_
7	get	get	VERB	VB	VerbForm=Inf	8	aux	_	_
8	wasted	wasted	ADJ	JJ	Degree=Pos	3	advcl	_	_
9	if	if	SCONJ	IN	_	12	mark	_	_
10	anyone	anyone	PRON	NN	Number=Sing	12	nsubj	_	_
11	is	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
12	interested	interested	ADJ	JJ	Degree=Pos	3	advcl	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:tmod	color:blue
1	02/13/2001	02/13/2001	NUM	CD	NumType=Card	0	root	_	_
2	08:02	08:02	NUM	CD	NumType=Card	3	nummod	_	_
3	PM	pm	NOUN	NN	Number=Sing	1	nmod:tmod	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:tmod	color:blue
1	Game	game	NOUN	NN	Number=Sing	0	root	_	_
2	tonight	tonight	NOUN	NN	Number=Sing	1	nmod:tmod	_	_
3	at	at	ADP	IN	_	4	case	_	_
4	7	7	NUM	CD	NumType=Card	1	nmod	_	SpaceAfter=No
5	,	,	PUNCT	,	_	1	punct	_	_
6	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	SpaceAfter=No
7	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	time	time	NOUN	NN	Number=Sing	1	parataxis	_	_
9	to	to	PART	TO	_	10	mark	_	_
10	kick	kick	VERB	VB	VerbForm=Inf	8	acl	_	_
11	some	some	DET	DT	_	12	det	_	_
12	ass	ass	NOUN	NN	Number=Sing	10	dobj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is a language-specific subtype of [nmod]().
There are also 2 other language-specific subtypes of `nmod`: [nmod:npmod](), [nmod:poss]().

289 nodes (0%) are attached to their parents as `nmod:tmod`.

170 instances of `nmod:tmod` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.9757785467128.

The following 13 pairs of parts of speech are connected with `nmod:tmod`: [en-pos/VERB]()-[en-pos/NOUN]() (218; 75% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (17; 6% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (16; 6% instances), [en-pos/VERB]()-[en-pos/PROPN]() (11; 4% instances), [en-pos/ADV]()-[en-pos/NOUN]() (8; 3% instances), [en-pos/VERB]()-[en-pos/NUM]() (6; 2% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (3; 1% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (3; 1% instances), [en-pos/VERB]()-[en-pos/ADV]() (3; 1% instances), [en-pos/ADP]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/AUX]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/DET]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:tmod	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBD	_	0	root	_	_
3	_	_	DET	DT	_	4	det	_	_
4	_	_	NOUN	NNS	_	2	dobj	_	_
5	_	_	CONJ	CC	_	2	cc	_	_
6	_	_	PRON	PRP	_	8	nsubj	_	_
7	_	_	AUX	MD	_	8	aux	_	_
8	_	_	VERB	VB	_	2	conj	_	_
9	_	_	PRON	PRP	_	8	dobj	_	_
10	_	_	ADP	IN	_	11	case	_	_
11	_	_	PRON	PRP	_	8	nmod	_	_
12	_	_	ADV	WRB	_	14	mark	_	_
13	_	_	PRON	PRP	_	14	nsubj	_	_
14	_	_	VERB	VBP	_	8	advcl	_	_
15	_	_	ADJ	JJ	_	16	amod	_	_
16	_	_	NOUN	NN	_	14	nmod:tmod	_	_

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 nmod:tmod	color:blue
1	_	_	PRON	PRP	_	2	nsubj	_	_
2	_	_	VERB	VBP	_	0	root	_	_
3	_	_	SCONJ	IN	_	14	mark	_	_
4	_	_	ADV	RB	_	5	advmod	_	_
5	_	_	ADJ	JJR	_	7	amod	_	_
6	_	_	ADJ	JJ	_	7	amod	_	_
7	_	_	NOUN	NNS	_	14	nsubj	_	_
8	_	_	ADP	IN	_	9	case	_	_
9	_	_	NOUN	NNS	_	7	nmod	_	_
10	_	_	CONJ	CC	_	9	cc	_	_
11	_	_	NOUN	NNS	_	9	conj	_	_
12	_	_	AUX	MD	_	14	aux	_	_
13	_	_	VERB	VB	_	14	cop	_	_
14	_	_	ADJ	JJ	_	2	ccomp	_	_
15	_	_	ADJ	JJ	_	16	amod	_	_
16	_	_	NOUN	NN	_	14	nmod:tmod	_	_
17	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nmod:tmod	color:blue
1	_	_	NOUN	NN	_	0	root	_	_
2	_	_	DET	DT	_	3	det	_	_
3	_	_	NOUN	NN	_	1	nmod:tmod	_	_
4	_	_	DET	DT	_	5	det	_	_
5	_	_	NOUN	NNS	_	12	nsubj	_	_
6	_	_	PUNCT	,	_	5	punct	_	_
7	_	_	DET	WDT	_	10	dobj	_	_
8	_	_	PRON	PRP	_	10	nsubj	_	_
9	_	_	AUX	VBD	_	10	aux	_	_
10	_	_	VERB	VBN	_	5	acl:relcl	_	_
11	_	_	VERB	VBD	_	12	cop	_	_
12	_	_	ADJ	JJ	_	1	parataxis	_	_
13	_	_	CONJ	CC	_	12	cc	_	_
14	_	_	PRON	EX	_	15	expl	_	_
15	_	_	VERB	VBD	_	12	conj	_	_
16	_	_	DET	DT	_	17	det	_	_
17	_	_	NOUN	NN	_	15	nsubj	_	_
18	_	_	ADP	IN	_	19	case	_	_
19	_	_	NOUN	NN	_	17	nmod	_	_
20	_	_	ADP	IN	_	22	case	_	_
21	_	_	DET	DT	_	22	det	_	_
22	_	_	NOUN	NN	_	15	nmod	_	_

~~~


