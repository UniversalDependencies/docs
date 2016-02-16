

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

610 nodes (0%) are attached to their parents as `mwe`.

610 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10819672131148.

The following 26 pairs of parts of speech are connected with `mwe`: [en-pos/ADV]()-[en-pos/ADV]() (157; 26% instances), [en-pos/ADP]()-[en-pos/ADP]() (151; 25% instances), [en-pos/ADJ]()-[en-pos/ADP]() (84; 14% instances), [en-pos/ADV]()-[en-pos/ADP]() (56; 9% instances), [en-pos/SCONJ]()-[en-pos/SCONJ]() (32; 5% instances), [en-pos/ADP]()-[en-pos/NOUN]() (26; 4% instances), [en-pos/VERB]()-[en-pos/ADP]() (24; 4% instances), [en-pos/ADP]()-[en-pos/SCONJ]() (13; 2% instances), [en-pos/SCONJ]()-[en-pos/ADV]() (9; 1% instances), [en-pos/SCONJ]()-[en-pos/CONJ]() (9; 1% instances), [en-pos/ADV]()-[en-pos/VERB]() (8; 1% instances), [en-pos/ADJ]()-[en-pos/SCONJ]() (7; 1% instances), [en-pos/ADV]()-[en-pos/PART]() (7; 1% instances), [en-pos/ADV]()-[en-pos/SCONJ]() (6; 1% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (4; 1% instances), [en-pos/SCONJ]()-[en-pos/VERB]() (4; 1% instances), [en-pos/ADP]()-[en-pos/VERB]() (2; 0% instances), [en-pos/SCONJ]()-[en-pos/PART]() (2; 0% instances), [en-pos/VERB]()-[en-pos/ADV]() (2; 0% instances), [en-pos/ADP]()-[en-pos/ADV]() (1; 0% instances), [en-pos/ADP]()-[en-pos/CONJ]() (1; 0% instances), [en-pos/ADV]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/AUX]()-[en-pos/ADV]() (1; 0% instances), [en-pos/DET]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/ADJ]() (1; 0% instances), [en-pos/SCONJ]()-[en-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 mwe	color:blue
1	To	to	PART	TO	_	2	mark	_	_
2	pander	pander	VERB	VB	VerbForm=Inf	0	root	_	_
3	to	to	ADP	IN	_	8	case	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	8	det	_	_
5	mythical	mythical	ADJ	JJ	Degree=Pos	8	amod	_	_
6	"	"	PUNCT	``	_	8	punct	_	SpaceAfter=No
7	Arab	arab	ADJ	JJ	Degree=Pos	8	amod	_	_
8	street	street	NOUN	NN	Number=Sing	2	nmod	_	SpaceAfter=No
9	"	"	PUNCT	''	_	8	punct	_	SpaceAfter=No
10	,	,	PUNCT	,	_	12	punct	_	_
11	of	of	ADV	RB	_	2	advmod	_	_
12	course	course	ADV	RB	_	11	mwe	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 mwe	color:blue
1	do	do	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	_
3	think	think	VERB	VB	VerbForm=Inf	0	root	_	_
4	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	nsubj	_	_
5	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	cop	_	_
6	cool	cool	ADJ	JJ	Degree=Pos	3	ccomp	_	_
7	b/c	b/c	ADP	IN	_	12	case	_	_
8	of	of	ADP	IN	_	7	mwe	_	_
9	the	the	DET	DT	Definite=Def|PronType=Art	12	det	_	_
10	taco	taco	PROPN	NNP	Number=Sing	11	compound	_	_
11	bell	bell	PROPN	NNP	Number=Sing	12	compound	_	_
12	dog	dog	NOUN	NN	Number=Sing	3	nmod	_	SpaceAfter=No
13	?	?	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mwe	color:blue
1	Now	now	ADV	RB	_	5	advmod	_	_
2	more	more	ADJ	JJR	Degree=Cmp	4	advmod	_	_
3	than	than	ADP	IN	_	2	mwe	_	_
4	1100	1100	NUM	CD	NumType=Card	5	nummod	_	_
5	pictures	picture	NOUN	NNS	Number=Plur	0	root	_	SpaceAfter=No
6	.	.	PUNCT	.	_	5	punct	_	_

~~~


