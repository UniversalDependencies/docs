

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

3041 nodes (1%) are attached to their parents as `ccomp`.

2916 instances of `ccomp` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.5619861887537.

The following 29 pairs of parts of speech are connected with `ccomp`: [en-pos/VERB]()-[en-pos/VERB]() (2064; 68% instances), [en-pos/VERB]()-[en-pos/ADJ]() (316; 10% instances), [en-pos/VERB]()-[en-pos/NOUN]() (265; 9% instances), [en-pos/ADJ]()-[en-pos/VERB]() (205; 7% instances), [en-pos/VERB]()-[en-pos/ADV]() (31; 1% instances), [en-pos/VERB]()-[en-pos/PROPN]() (28; 1% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (25; 1% instances), [en-pos/VERB]()-[en-pos/PRON]() (25; 1% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (18; 1% instances), [en-pos/ADV]()-[en-pos/VERB]() (9; 0% instances), [en-pos/NOUN]()-[en-pos/VERB]() (8; 0% instances), [en-pos/VERB]()-[en-pos/AUX]() (8; 0% instances), [en-pos/VERB]()-[en-pos/INTJ]() (7; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (7; 0% instances), [en-pos/ADJ]()-[en-pos/ADV]() (3; 0% instances), [en-pos/ADV]()-[en-pos/ADV]() (3; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/PART]() (2; 0% instances), [en-pos/ADV]()-[en-pos/ADJ]() (2; 0% instances), [en-pos/VERB]()-[en-pos/DET]() (2; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/AUX]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/PRON]() (1; 0% instances), [en-pos/ADV]()-[en-pos/PART]() (1; 0% instances), [en-pos/AUX]()-[en-pos/VERB]() (1; 0% instances), [en-pos/NUM]()-[en-pos/VERB]() (1; 0% instances), [en-pos/PART]()-[en-pos/VERB]() (1; 0% instances), [en-pos/VERB]()-[en-pos/ADP]() (1; 0% instances), [en-pos/VERB]()-[en-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 ccomp	color:blue
1	why	why	ADV	WRB	PronType=Int	4	advmod	_	_
2	do	do	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	4	nsubj	_	_
4	think	think	VERB	VB	VerbForm=Inf	0	root	_	_
5	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	7	nsubj	_	_
6	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
7	mean	mean	ADJ	JJ	Degree=Pos	4	ccomp	_	SpaceAfter=No
8	?	?	PUNCT	.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp	color:blue
1	i	i	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	think	think	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
4	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	_	_
5	all	all	DET	DT	_	6	det	_	_
6	bark	bark	NOUN	NN	Number=Sing	2	ccomp	_	_
7	and	and	CONJ	CC	_	6	cc	_	_
8	no	no	DET	DT	_	9	neg	_	_
9	bite	bite	NOUN	NN	Number=Sing	6	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	_

~~~


