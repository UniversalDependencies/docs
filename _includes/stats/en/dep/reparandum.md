

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


