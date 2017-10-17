

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

8261 nodes (4%) are attached to their parents as `mark`.

8257 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.48045030867934.

The following 54 pairs of parts of speech are connected with `mark`: [en-pos/VERB]()-[en-pos/PART]() (3430; 42% instances), [en-pos/VERB]()-[en-pos/SCONJ]() (3275; 40% instances), [en-pos/VERB]()-[en-pos/ADV]() (350; 4% instances), [en-pos/ADJ]()-[en-pos/SCONJ]() (349; 4% instances), [en-pos/NOUN]()-[en-pos/SCONJ]() (290; 4% instances), [en-pos/ADJ]()-[en-pos/PART]() (88; 1% instances), [en-pos/NOUN]()-[en-pos/PART]() (75; 1% instances), [en-pos/VERB]()-[en-pos/ADP]() (67; 1% instances), [en-pos/ADV]()-[en-pos/SCONJ]() (59; 1% instances), [en-pos/AUX]()-[en-pos/SCONJ]() (34; 0% instances), [en-pos/ADJ]()-[en-pos/ADV]() (33; 0% instances), [en-pos/PROPN]()-[en-pos/SCONJ]() (30; 0% instances), [en-pos/PRON]()-[en-pos/SCONJ]() (25; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (15; 0% instances), [en-pos/ADJ]()-[en-pos/DET]() (11; 0% instances), [en-pos/PART]()-[en-pos/SCONJ]() (11; 0% instances), [en-pos/NOUN]()-[en-pos/ADP]() (9; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (9; 0% instances), [en-pos/ADJ]()-[en-pos/ADP]() (7; 0% instances), [en-pos/ADV]()-[en-pos/ADV]() (7; 0% instances), [en-pos/ADV]()-[en-pos/DET]() (7; 0% instances), [en-pos/PROPN]()-[en-pos/PART]() (7; 0% instances), [en-pos/NUM]()-[en-pos/SCONJ]() (6; 0% instances), [en-pos/VERB]()-[en-pos/ADJ]() (6; 0% instances), [en-pos/PROPN]()-[en-pos/ADV]() (5; 0% instances), [en-pos/DET]()-[en-pos/SCONJ]() (4; 0% instances), [en-pos/INTJ]()-[en-pos/SCONJ]() (4; 0% instances), [en-pos/ADV]()-[en-pos/ADP]() (3; 0% instances), [en-pos/ADV]()-[en-pos/PART]() (3; 0% instances), [en-pos/PART]()-[en-pos/PART]() (3; 0% instances), [en-pos/PRON]()-[en-pos/PART]() (3; 0% instances), [en-pos/PROPN]()-[en-pos/ADP]() (3; 0% instances), [en-pos/VERB]()-[en-pos/CCONJ]() (3; 0% instances), [en-pos/VERB]()-[en-pos/DET]() (3; 0% instances), [en-pos/AUX]()-[en-pos/ADV]() (2; 0% instances), [en-pos/DET]()-[en-pos/PART]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/NUM]()-[en-pos/ADP]() (2; 0% instances), [en-pos/NUM]()-[en-pos/ADV]() (2; 0% instances), [en-pos/NUM]()-[en-pos/PART]() (2; 0% instances), [en-pos/SYM]()-[en-pos/SCONJ]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/ADP]()-[en-pos/PART]() (1; 0% instances), [en-pos/ADP]()-[en-pos/SCONJ]() (1; 0% instances), [en-pos/AUX]()-[en-pos/ADP]() (1; 0% instances), [en-pos/AUX]()-[en-pos/PART]() (1; 0% instances), [en-pos/DET]()-[en-pos/ADV]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/DET]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/VERB]() (1; 0% instances), [en-pos/PRON]()-[en-pos/ADP]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/SCONJ]() (1; 0% instances), [en-pos/SYM]()-[en-pos/PART]() (1; 0% instances), [en-pos/VERB]()-[en-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 mark	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 mark	color:blue
1	Now	now	ADV	RB	_	4	advmod	_	SpaceAfter=No
2	,	,	PUNCT	,	_	4	punct	_	_
3	people	people	NOUN	NNS	Number=Plur	4	nsubj	_	_
4	wonder	wonder	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	if	if	SCONJ	IN	_	9	mark	_	_
6	Google	Google	PROPN	NNP	Number=Sing	9	nsubj	_	_
7	can	can	AUX	MD	VerbForm=Fin	9	aux	_	_
8	even	even	ADV	RB	_	9	advmod	_	_
9	survive	survive	VERB	VB	VerbForm=Inf	4	ccomp	_	_
10	.	.	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 mark	color:blue
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ESL)

This relation is universal.

4593 nodes (5%) are attached to their parents as `mark`.

4588 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27846723274548.

The following 34 pairs of parts of speech are connected with `mark`: [en-pos/VERB]()-[en-pos/PART]() (2083; 45% instances), [en-pos/VERB]()-[en-pos/SCONJ]() (1710; 37% instances), [en-pos/ADJ]()-[en-pos/SCONJ]() (321; 7% instances), [en-pos/NOUN]()-[en-pos/SCONJ]() (156; 3% instances), [en-pos/VERB]()-[en-pos/ADV]() (122; 3% instances), [en-pos/ADJ]()-[en-pos/PART]() (33; 1% instances), [en-pos/NOUN]()-[en-pos/PART]() (33; 1% instances), [en-pos/VERB]()-[en-pos/ADP]() (30; 1% instances), [en-pos/ADJ]()-[en-pos/ADV]() (15; 0% instances), [en-pos/ADV]()-[en-pos/SCONJ]() (15; 0% instances), [en-pos/PROPN]()-[en-pos/SCONJ]() (14; 0% instances), [en-pos/PRON]()-[en-pos/SCONJ]() (9; 0% instances), [en-pos/AUX]()-[en-pos/SCONJ]() (8; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (8; 0% instances), [en-pos/NUM]()-[en-pos/SCONJ]() (7; 0% instances), [en-pos/ADV]()-[en-pos/PART]() (3; 0% instances), [en-pos/PROPN]()-[en-pos/ADV]() (3; 0% instances), [en-pos/PROPN]()-[en-pos/PART]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/DET]() (2; 0% instances), [en-pos/ADV]()-[en-pos/ADV]() (2; 0% instances), [en-pos/PRON]()-[en-pos/PART]() (2; 0% instances), [en-pos/VERB]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/AUX]()-[en-pos/PART]() (1; 0% instances), [en-pos/DET]()-[en-pos/SCONJ]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/ADP]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/DET]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/NUM]()-[en-pos/ADV]() (1; 0% instances), [en-pos/NUM]()-[en-pos/PART]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/ADP]() (1; 0% instances), [en-pos/VERB]()-[en-pos/DET]() (1; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (1; 0% instances), [en-pos/X]()-[en-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	_	_	PRON	EX	_	2	expl	_	_
2	_	_	VERB	VBZ	_	0	root	_	_
3	_	_	DET	DT	_	5	det	_	_
4	_	_	ADJ	JJ	_	5	amod	_	_
5	_	_	NOUN	NN	_	2	nsubj	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	_	5	acl	_	_
8	_	_	ADV	RB	_	7	advmod	_	_
9	_	_	SCONJ	IN	_	12	mark	_	_
10	_	_	DET	DT	_	11	det	_	_
11	_	_	NOUN	NNS	_	12	nsubj	_	_
12	_	_	VERB	VBP	_	2	advcl	_	_
13	_	_	PART	RB	_	12	neg	_	_
14	_	_	VERB	VB	_	12	xcomp	_	_
15	_	_	PRON	NN	_	14	dobj	_	_
16	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 9 mark	color:blue
1	_	_	PRON	EX	_	2	expl	_	_
2	_	_	VERB	VBZ	_	0	root	_	_
3	_	_	DET	DT	_	5	det	_	_
4	_	_	ADJ	JJ	_	5	amod	_	_
5	_	_	NOUN	NN	_	2	nsubj	_	_
6	_	_	PART	TO	_	7	mark	_	_
7	_	_	VERB	VB	_	5	acl	_	_
8	_	_	ADV	RB	_	7	advmod	_	_
9	_	_	SCONJ	IN	_	12	mark	_	_
10	_	_	DET	DT	_	11	det	_	_
11	_	_	NOUN	NNS	_	12	nsubj	_	_
12	_	_	VERB	VBP	_	2	advcl	_	_
13	_	_	PART	RB	_	12	neg	_	_
14	_	_	VERB	VB	_	12	xcomp	_	_
15	_	_	PRON	NN	_	14	dobj	_	_
16	_	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 mark	color:blue
1	_	_	CONJ	CC	_	3	cc	_	_
2	_	_	PRON	PRP	_	3	nsubj	_	_
3	_	_	NOUN	NN	_	0	root	_	_
4	_	_	PRON	DT	_	3	dobj	_	_
5	_	_	PUNCT	,	_	3	punct	_	_
6	_	_	SCONJ	IN	_	9	mark	_	_
7	_	_	PRON	PRP	_	9	expl	_	_
8	_	_	VERB	VBZ	_	9	cop	_	_
9	_	_	ADJ	JJR	_	3	advcl	_	_
10	_	_	PRON	NN	_	11	dobj	_	_
11	_	_	VERB	VBG	_	9	csubj	_	_
12	_	_	SCONJ	IN	_	13	mark	_	_
13	_	_	VERB	VBG	_	9	advcl	_	_
14	_	_	NOUN	NNS	_	13	dobj	_	_
15	_	_	ADP	IN	_	16	case	_	_
16	_	_	PRON	NN	_	13	nmod	_	_
17	_	_	PRON	WDT	_	18	nsubj	_	_
18	_	_	VERB	VB	_	16	acl:relcl	_	_
19	_	_	PRON	PRP	_	18	dobj	_	_
20	_	_	VERB	VB	_	18	xcomp	_	_
21	_	_	PRON	NN	_	20	dobj	_	_
22	_	_	PUNCT	.	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is universal.

2200 nodes (3%) are attached to their parents as `mark`.

2196 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.52454545454545.

The following 44 pairs of parts of speech are connected with `mark`: [en-pos/VERB]()-[en-pos/SCONJ]() (921; 42% instances), [en-pos/VERB]()-[en-pos/PART]() (873; 40% instances), [en-pos/ADJ]()-[en-pos/SCONJ]() (88; 4% instances), [en-pos/NOUN]()-[en-pos/SCONJ]() (65; 3% instances), [en-pos/AUX]()-[en-pos/SCONJ]() (59; 3% instances), [en-pos/VERB]()-[en-pos/PRON]() (21; 1% instances), [en-pos/ADJ]()-[en-pos/PART]() (18; 1% instances), [en-pos/NOUN]()-[en-pos/PART]() (18; 1% instances), [en-pos/VERB]()-[en-pos/ADP]() (18; 1% instances), [en-pos/VERB]()-[en-pos/ADV]() (15; 1% instances), [en-pos/SCONJ]()-[en-pos/ADV]() (14; 1% instances), [en-pos/SCONJ]()-[en-pos/SCONJ]() (14; 1% instances), [en-pos/PROPN]()-[en-pos/SCONJ]() (7; 0% instances), [en-pos/ADV]()-[en-pos/SCONJ]() (6; 0% instances), [en-pos/PRON]()-[en-pos/SCONJ]() (6; 0% instances), [en-pos/AUX]()-[en-pos/ADP]() (5; 0% instances), [en-pos/AUX]()-[en-pos/PRON]() (5; 0% instances), [en-pos/AUX]()-[en-pos/PART]() (4; 0% instances), [en-pos/DET]()-[en-pos/SCONJ]() (4; 0% instances), [en-pos/VERB]()-[en-pos/CCONJ]() (4; 0% instances), [en-pos/PART]()-[en-pos/SCONJ]() (3; 0% instances), [en-pos/VERB]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/PRON]() (2; 0% instances), [en-pos/AUX]()-[en-pos/ADV]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/ADP]() (2; 0% instances), [en-pos/PRON]()-[en-pos/PART]() (2; 0% instances), [en-pos/PROPN]()-[en-pos/ADP]() (2; 0% instances), [en-pos/PROPN]()-[en-pos/PART]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/CCONJ]() (1; 0% instances), [en-pos/ADP]()-[en-pos/ADV]() (1; 0% instances), [en-pos/ADP]()-[en-pos/SCONJ]() (1; 0% instances), [en-pos/ADV]()-[en-pos/PRON]() (1; 0% instances), [en-pos/AUX]()-[en-pos/CCONJ]() (1; 0% instances), [en-pos/DET]()-[en-pos/ADP]() (1; 0% instances), [en-pos/DET]()-[en-pos/PART]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/CCONJ]() (1; 0% instances), [en-pos/NUM]()-[en-pos/SCONJ]() (1; 0% instances), [en-pos/PART]()-[en-pos/ADP]() (1; 0% instances), [en-pos/PRON]()-[en-pos/ADP]() (1; 0% instances), [en-pos/PUNCT]()-[en-pos/PART]() (1; 0% instances), [en-pos/SYM]()-[en-pos/ADV]() (1; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Identifying	_	VERB	ING	_	0	root	_	_
2	filters	_	NOUN	PL-NOM	_	1	obj	_	_
3	that	_	SCONJ	REL	_	4	mark	_	_
4	are	_	VERB	PRES	_	2	acl:relcl	_	_
5	currently	_	ADV	_	_	4	advmod	_	_
6	in	_	ADP	_	_	7	case	_	_
7	effect	_	NOUN	SG-NOM	_	4	obl	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	Click	_	VERB	IMP	_	0	root	_	_
2	the	_	DET	DEF	_	4	det	_	_
3	blue	_	ADJ	POS	_	4	amod	_	_
4	arrow	_	NOUN	SG-NOM	_	1	obj	_	_
5	to	_	PART	_	_	6	mark	_	_
6	see	_	VERB	INF	_	4	acl	_	_
7	the	_	DET	DEF	_	8	det	_	_
8	filter	_	NOUN	SG-NOM	_	6	obj	_	_
9	that	_	SCONJ	REL	_	10	mark	_	_
10	is	_	VERB	PRES	_	8	acl:relcl	_	_
11	in	_	ADP	_	_	12	case	_	_
12	effect	_	NOUN	SG-NOM	_	10	obl	_	SpaceAfter=No
13	.	_	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 mark	color:blue
1	If	_	SCONJ	_	_	4	mark	_	_
2	that	_	PRON	DEM-SG	_	4	nsubj	_	SpaceAfter=No
3	's	_	AUX	PRES	_	4	cop	_	_
4	true	_	ADJ	POS	_	8	advmod	_	SpaceAfter=No
5	,	_	PUNCT	Comma	_	3	punct	_	_
6	then	_	ADV	_	_	8	advmod	_	_
7	there	_	PRON	EX	_	8	expl	_	SpaceAfter=No
8	's	_	VERB	PRES	_	0	root	_	_
9	no	_	DET	NEG	_	10	advmod	_	_
10	hope	_	NOUN	SG-NOM	_	8	nsubj	_	SpaceAfter=No
11	.	_	PUNCT	Period	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is universal.

1198 nodes (3%) are attached to their parents as `mark`.

1197 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.0559265442404.

The following 17 pairs of parts of speech are connected with `mark`: [en-pos/VERB]()-[en-pos/PART]() (492; 41% instances), [en-pos/VERB]()-[en-pos/SCONJ]() (407; 34% instances), [en-pos/VERB]()-[en-pos/ADP]() (150; 13% instances), [en-pos/ADJ]()-[en-pos/SCONJ]() (54; 5% instances), [en-pos/NOUN]()-[en-pos/SCONJ]() (50; 4% instances), [en-pos/VERB]()-[en-pos/ADV]() (11; 1% instances), [en-pos/ADJ]()-[en-pos/PART]() (10; 1% instances), [en-pos/NOUN]()-[en-pos/PART]() (7; 1% instances), [en-pos/ADJ]()-[en-pos/ADP]() (4; 0% instances), [en-pos/ADV]()-[en-pos/SCONJ]() (4; 0% instances), [en-pos/NOUN]()-[en-pos/ADP]() (2; 0% instances), [en-pos/NUM]()-[en-pos/SCONJ]() (2; 0% instances), [en-pos/DET]()-[en-pos/SCONJ]() (1; 0% instances), [en-pos/INTJ]()-[en-pos/SCONJ]() (1; 0% instances), [en-pos/NOUN]()-[en-pos/ADV]() (1; 0% instances), [en-pos/PRON]()-[en-pos/ADP]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 mark	color:blue
1	to	to	PART	PART	_	2	mark	_	_
2	create	create	VERB	V	VerbForm=Inf	0	root	_	_
3	and	and	CCONJ	CC	_	4	cc	_	_
4	reproduce	reproduce	VERB	V	VerbForm=Inf	2	conj	_	_
5	Derivative	derivative	ADJ	A	Degree=Pos	6	amod	_	_
6	Works	work	NOUN	S	Number=Plur	2	obj	_	SpaceAfter=No
7	;	;	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 mark	color:blue
1	the	the	DET	RD	Definite=Def|PronType=Art	2	det	_	_
2	title	title	NOUN	S	Number=Sing	0	root	_	_
3	of	of	ADP	E	_	5	case	_	_
4	the	the	DET	RD	Definite=Def|PronType=Art	5	det	_	_
5	Work	work	NOUN	S	Number=Sing	2	nmod	_	_
6	if	if	SCONJ	CS	_	7	mark	_	_
7	supplied	supply	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	2	acl	_	SpaceAfter=No
8	;	;	PUNCT	FC	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 mark	color:blue
1	I	I	PRON	PE	Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	think	think	NOUN	S	Number=Sing	0	root	_	_
3	we	we	PRON	PE	Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
4	should	shall	AUX	VM	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	6	aux	_	_
5	be	be	AUX	VA	VerbForm=Inf	6	cop	_	_
6	capable	capable	ADJ	A	Degree=Pos	2	ccomp	_	_
7	of	of	ADP	E	_	8	mark	_	_
8	saying	say	VERB	V	VerbForm=Ger	6	advcl	_	_
9	this	this	PRON	PD	Number=Sing|PronType=Dem	8	obj	_	_
10	loud	loud	ADJ	A	Degree=Pos	8	amod	_	_
11	and	and	CCONJ	CC	_	12	cc	_	_
12	clear	clear	ADJ	A	Degree=Pos	10	conj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	2	punct	_	_

~~~


