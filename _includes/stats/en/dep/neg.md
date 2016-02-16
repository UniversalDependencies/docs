

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

2630 nodes (1%) are attached to their parents as `neg`.

2557 instances of `neg` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.3574144486692.

The following 29 pairs of parts of speech are connected with `neg`: [en-pos/VERB]()-[en-pos/PART]() (1468; 56% instances), [en-pos/NOUN]()-[en-pos/DET]() (308; 12% instances), [en-pos/ADJ]()-[en-pos/PART]() (216; 8% instances), [en-pos/VERB]()-[en-pos/ADV]() (193; 7% instances), [en-pos/NOUN]()-[en-pos/PART]() (147; 6% instances), [en-pos/ADV]()-[en-pos/ADV]() (73; 3% instances), [en-pos/ADV]()-[en-pos/PART]() (59; 2% instances), [en-pos/ADJ]()-[en-pos/ADV]() (50; 2% instances), [en-pos/NOUN]()-[en-pos/ADV]() (42; 2% instances), [en-pos/AUX]()-[en-pos/PART]() (12; 0% instances), [en-pos/PRON]()-[en-pos/PART]() (11; 0% instances), [en-pos/PROPN]()-[en-pos/PART]() (10; 0% instances), [en-pos/PROPN]()-[en-pos/ADV]() (8; 0% instances), [en-pos/DET]()-[en-pos/ADV]() (5; 0% instances), [en-pos/DET]()-[en-pos/PART]() (4; 0% instances), [en-pos/ADJ]()-[en-pos/DET]() (3; 0% instances), [en-pos/NUM]()-[en-pos/ADV]() (3; 0% instances), [en-pos/PROPN]()-[en-pos/DET]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/CONJ]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/CONJ]() (2; 0% instances), [en-pos/NUM]()-[en-pos/DET]() (2; 0% instances), [en-pos/PRON]()-[en-pos/ADV]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/AUX]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/X]() (1; 0% instances), [en-pos/CONJ]()-[en-pos/PART]() (1; 0% instances), [en-pos/INTJ]()-[en-pos/INTJ]() (1; 0% instances), [en-pos/NUM]()-[en-pos/PART]() (1; 0% instances), [en-pos/VERB]()-[en-pos/AUX]() (1; 0% instances), [en-pos/VERB]()-[en-pos/CONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 neg	color:blue
1	Yet	yet	CONJ	CC	_	5	cc	_	_
2	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	_
3	did	do	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	5	aux	_	SpaceAfter=No
4	n't	not	PART	RB	_	5	neg	_	_
5	charge	charge	VERB	VB	VerbForm=Inf	0	root	_	_
6	them	they	PRON	PRP	Case=Acc|Number=Plur|Person=3|PronType=Prs	5	dobj	_	_
7	for	for	ADP	IN	_	9	case	_	_
8	the	the	DET	DT	Definite=Def|PronType=Art	9	det	_	_
9	evacuation	evacuation	NOUN	NN	Number=Sing	5	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 neg	color:blue
1	No	no	DET	DT	_	2	neg	_	_
2	communications	communication	NOUN	NNS	Number=Plur	0	root	_	_
3	nothing	nothing	NOUN	NN	Number=Sing	2	conj	_	SpaceAfter=No
4	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 neg	color:blue
1	those	those	DET	DT	Number=Plur|PronType=Dem	2	det	_	_
2	dogs	dog	NOUN	NNS	Number=Plur	6	nsubj	_	_
3	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	_	SpaceAfter=No
4	n't	not	PART	RB	_	6	neg	_	_
5	even	even	ADV	RB	_	6	advmod	_	_
6	friendly	friendly	ADJ	JJ	Degree=Pos	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


