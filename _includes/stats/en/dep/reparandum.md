

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

37 nodes (0%) are attached to their parents as `reparandum`.

31 instances of `reparandum` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.91891891891892.

The following 19 pairs of parts of speech are connected with `reparandum`: [en-pos/VERB]()-[en-pos/VERB]() (6; 16% instances), [en-pos/NOUN]()-[en-pos/DET]() (5; 14% instances), [en-pos/VERB]()-[en-pos/DET]() (4; 11% instances), [en-pos/VERB]()-[en-pos/PRON]() (4; 11% instances), [en-pos/ADJ]()-[en-pos/DET]() (2; 5% instances), [en-pos/PROPN]()-[en-pos/PROPN]() (2; 5% instances), [en-pos/VERB]()-[en-pos/ADP]() (2; 5% instances), [en-pos/ADJ]()-[en-pos/ADP]() (1; 3% instances), [en-pos/ADJ]()-[en-pos/X]() (1; 3% instances), [en-pos/NOUN]()-[en-pos/CONJ]() (1; 3% instances), [en-pos/NUM]()-[en-pos/NUM]() (1; 3% instances), [en-pos/NUM]()-[en-pos/SYM]() (1; 3% instances), [en-pos/PRON]()-[en-pos/DET]() (1; 3% instances), [en-pos/PROPN]()-[en-pos/DET]() (1; 3% instances), [en-pos/VERB]()-[en-pos/AUX]() (1; 3% instances), [en-pos/VERB]()-[en-pos/NOUN]() (1; 3% instances), [en-pos/VERB]()-[en-pos/NUM]() (1; 3% instances), [en-pos/VERB]()-[en-pos/PART]() (1; 3% instances), [en-pos/VERB]()-[en-pos/SCONJ]() (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 reparandum	color:blue
1	it	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	reparandum	_	SpaceAfter=No
2	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	reparandum	_	_
3	did	do	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	aux	_	_
4	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	5	nsubj	_	_
5	watch	watch	VERB	VB	VerbForm=Inf	0	root	_	_
6	your	you	PRON	PRP$	Person=2|Poss=Yes|PronType=Prs	7	nmod:poss	_	_
7	girl	girl	NOUN	NN	Number=Sing	5	dobj	_	_
8	on	on	ADP	IN	_	9	case	_	_
9	tv	tv	NOUN	NN	Number=Sing	5	nmod	_	_
10	last	last	ADJ	JJ	Degree=Pos	11	amod	_	_
11	night	night	NOUN	NN	Number=Sing	5	nmod:tmod	_	SpaceAfter=No
12	?	?	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 12 reparandum	color:blue
1	put	put	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
3	heater	heater	NOUN	NN	Number=Sing	1	dobj	_	_
4	on	on	ADP	IN	_	6	case	_	_
5	the	the	DET	DT	Definite=Def|PronType=Art	6	det	_	_
6	snake	snake	NOUN	NN	Number=Sing	1	nmod	_	_
7	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
8	will	will	AUX	MD	VerbForm=Fin	9	aux	_	_
9	love	love	VERB	VB	VerbForm=Inf	1	parataxis	_	_
10	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	9	dobj	_	_
11	and	and	CONJ	CC	_	1	cc	_	_
12	the	the	DET	DT	Definite=Def|PronType=Art	15	reparandum	_	_
13	the	the	DET	DT	Definite=Def|PronType=Art	15	det	_	_
14	next	next	ADJ	JJ	Degree=Pos	15	amod	_	_
15	day	day	NOUN	NN	Number=Sing	18	nmod:tmod	_	_
16	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	18	nsubj	_	_
17	will	will	AUX	MD	VerbForm=Fin	18	aux	_	_
18	have	have	VERB	VB	VerbForm=Inf	1	conj	_	_
19	dinner	dinner	NOUN	NN	Number=Sing	18	dobj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 reparandum	color:blue
1	It	it	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	SpaceAfter=No
2	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	helpful	helpful	ADJ	JJ	Degree=Pos	0	root	_	_
4	to	to	PART	TO	_	5	mark	_	_
5	know	know	VERB	VB	VerbForm=Inf	3	csubj	_	_
6	a	a	DET	DT	Definite=Ind|PronType=Art	5	reparandum	_	_
7	quite	quite	DET	PDT	_	9	det:predet	_	_
8	a	a	DET	DT	Definite=Ind|PronType=Art	9	det	_	_
9	bit	bit	NOUN	NN	Number=Sing	5	dobj	_	_
10	about	about	ADP	IN	_	12	case	_	_
11	bull	bull	NOUN	NN	Number=Sing	12	compound	_	_
12	fighting	fighting	NOUN	NN	Number=Sing	9	nmod	_	SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

4 nodes (0%) are attached to their parents as `reparandum`.

4 instances of `reparandum` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 3 pairs of parts of speech are connected with `reparandum`: [en-pos/NOUN]()-[en-pos/VERB]() (2; 50% instances), [en-pos/ADJ]()-[en-pos/VERB]() (1; 25% instances), [en-pos/VERB]()-[en-pos/VERB]() (1; 25% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 reparandum	color:blue
1	_	_	PRON	PRP	_	5	nsubj	_	_
2	_	_	VERB	VBD	_	5	cop	_	_
3	_	_	ADV	RB	_	5	advmod	_	_
4	_	_	ADV	RB	_	5	advmod	_	_
5	_	_	ADJ	JJ	_	0	root	_	_
6	_	_	SCONJ	IN	_	18	mark	_	_
7	_	_	DET	DT	_	8	det	_	_
8	_	_	NOUN	NN	_	18	nsubj	_	_
9	_	_	PRON	PRP	_	10	nsubj	_	_
10	_	_	VERB	VBP	_	8	reparandum	_	_
11	_	_	ADJ	JJ	_	12	amod	_	_
12	_	_	NOUN	NN	_	10	dobj	_	_
13	_	_	DET	WDT	_	14	nsubj	_	_
14	_	_	VERB	VBD	_	8	acl:relcl	_	_
15	_	_	PRON	PRP	_	17	nsubj	_	_
16	_	_	PART	TO	_	17	mark	_	_
17	_	_	VERB	VB	_	14	ccomp	_	_
18	_	_	VERB	VBD	_	5	advcl	_	_
19	_	_	PART	TO	_	20	mark	_	_
20	_	_	VERB	VB	_	18	ccomp	_	_
21	_	_	PROPN	NNP	_	20	dobj	_	_
22	_	_	PROPN	NNP	_	21	name	_	_
23	_	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 19 reparandum	color:blue
1	_	_	CONJ	CC	_	3	cc	_	_
2	_	_	PRON	PRP	_	3	nsubj	_	_
3	_	_	VERB	VBD	_	0	root	_	_
4	_	_	DET	DT	_	3	dobj	_	_
5	_	_	ADP	IN	_	7	case	_	_
6	_	_	DET	DT	_	7	det	_	_
7	_	_	NOUN	NN	_	3	nmod	_	_
8	_	_	ADV	RB	_	3	advmod	_	_
9	_	_	PUNCT	,	_	3	punct	_	_
10	_	_	SCONJ	IN	_	19	mark	_	_
11	_	_	PRON	PRP	_	12	nsubj	_	_
12	_	_	VERB	VBZ	_	19	advcl	_	_
13	_	_	NOUN	NN	_	12	dobj	_	_
14	_	_	ADP	IN	_	16	case	_	_
15	_	_	DET	DT	_	16	det	_	_
16	_	_	NOUN	NN	_	12	nmod	_	_
17	_	_	PRON	PRP	_	19	nsubj	_	_
18	_	_	AUX	MD	_	19	aux	_	_
19	_	_	VERB	VB	_	3	reparandum	_	_
20	_	_	ADP	IN	_	21	case	_	_
21	_	_	NOUN	NN	_	19	nmod	_	_
22	_	_	AUX	VBG	_	23	auxpass	_	_
23	_	_	VERB	VBG	_	21	acl	_	_
24	_	_	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 reparandum	color:blue
1	_	_	PRON	PRP	_	3	nsubj	_	_
2	_	_	VERB	VBZ	_	3	cop	_	_
3	_	_	ADJ	JJ	_	0	root	_	_
4	_	_	PUNCT	,	_	3	punct	_	_
5	_	_	PRON	PRP	_	6	nsubj	_	_
6	_	_	VERB	VBP	_	3	reparandum	_	_
7	_	_	PUNCT	``	_	8	punct	_	_
8	_	_	ADJ	JJ	_	10	amod	_	_
9	_	_	PUNCT	''	_	8	punct	_	_
10	_	_	NOUN	NNS	_	6	dobj	_	_
11	_	_	SCONJ	IN	_	13	mark	_	_
12	_	_	PRON	PRP	_	13	nsubj	_	_
13	_	_	VERB	VBP	_	3	advcl	_	_
14	_	_	ADJ	JJR	_	15	amod	_	_
15	_	_	NOUN	NN	_	13	dobj	_	_
16	_	_	PART	TO	_	17	mark	_	_
17	_	_	VERB	VB	_	15	acl	_	_
18	_	_	NOUN	NN	_	17	dobj	_	_
19	_	_	DET	WDT	_	21	nsubjpass	_	_
20	_	_	AUX	VBZ	_	21	auxpass	_	_
21	_	_	VERB	VBN	_	18	acl:relcl	_	_
22	_	_	CONJ	CC	_	13	cc	_	_
23	_	_	SCONJ	IN	_	25	mark	_	_
24	_	_	PRON	PRP	_	25	nsubj	_	_
25	_	_	VERB	VBP	_	13	conj	_	_
26	_	_	PART	TO	_	27	mark	_	_
27	_	_	VERB	VB	_	25	xcomp	_	_
28	_	_	ADV	RB	_	29	advmod	_	_
29	_	_	NUM	CD	_	30	nummod	_	_
30	_	_	NOUN	NNS	_	27	dobj	_	_
31	_	_	ADP	IN	_	33	case	_	_
32	_	_	PUNCT	''	_	33	punct	_	_
33	_	_	NOUN	NN	_	27	nmod	_	_
34	_	_	PUNCT	''	_	13	punct	_	_
35	_	_	CONJ	CC	_	13	cc	_	_
36	_	_	PRON	PRP	_	38	nsubj	_	_
37	_	_	VERB	VBZ	_	38	cop	_	_
38	_	_	ADJ	JJ	_	13	conj	_	_
39	_	_	ADP	IN	_	41	case	_	_
40	_	_	NUM	CD	_	41	nummod	_	_
41	_	_	NOUN	NNS	_	38	nmod	_	_
42	_	_	PUNCT	.	_	3	punct	_	_

~~~


