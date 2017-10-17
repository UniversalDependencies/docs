

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [obl]().
There are also 1 other language-specific subtypes of `obl`: [obl:tmod]().

507 nodes (0%) are attached to their parents as `obl:npmod`.

371 instances of `obl:npmod` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.07889546351085.

The following 25 pairs of parts of speech are connected with `obl:npmod`: [en-pos/VERB]()-[en-pos/NOUN]() (151; 30% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (122; 24% instances), [en-pos/ADV]()-[en-pos/NOUN]() (118; 23% instances), [en-pos/VERB]()-[en-pos/PROPN]() (21; 4% instances), [en-pos/ADJ]()-[en-pos/ADJ]() (18; 4% instances), [en-pos/ADJ]()-[en-pos/SYM]() (15; 3% instances), [en-pos/VERB]()-[en-pos/PRON]() (14; 3% instances), [en-pos/ADV]()-[en-pos/ADJ]() (7; 1% instances), [en-pos/SCONJ]()-[en-pos/NOUN]() (6; 1% instances), [en-pos/VERB]()-[en-pos/ADJ]() (6; 1% instances), [en-pos/ADV]()-[en-pos/NUM]() (4; 1% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (3; 1% instances), [en-pos/VERB]()-[en-pos/ADV]() (3; 1% instances), [en-pos/VERB]()-[en-pos/DET]() (3; 1% instances), [en-pos/ADJ]()-[en-pos/PRON]() (2; 0% instances), [en-pos/ADV]()-[en-pos/SYM]() (2; 0% instances), [en-pos/NOUN]()-[en-pos/NOUN]() (2; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (2; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/ADV]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/NUM]() (1; 0% instances), [en-pos/ADJ]()-[en-pos/X]() (1; 0% instances), [en-pos/PROPN]()-[en-pos/NOUN]() (1; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:npmod	color:blue
1	Do	do	AUX	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux	_	_
2	people	people	NOUN	NNS	Number=Plur	6	nsubj	_	_
3	Bare	bare	ADJ	JJ	Degree=Pos	5	amod	_	SpaceAfter=No
4	-	-	PUNCT	HYPH	_	5	punct	_	SpaceAfter=No
5	knuckle	knuckle	NOUN	NN	Number=Sing	6	obl:npmod	_	_
6	box	box	VERB	VB	VerbForm=Inf	0	root	_	_
7	in	in	ADP	IN	_	8	case	_	_
8	Ireland	Ireland	PROPN	NNP	Number=Sing	6	obl	_	SpaceAfter=No
9	?	?	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl:npmod	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	nsubj	_	_
2	also	also	ADV	RB	_	3	advmod	_	_
3	do	do	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	banners	banner	NOUN	NNS	Number=Plur	3	obj	_	SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	_	_
6	billboards	billboard	NOUN	NNS	Number=Plur	4	conj	_	_
7	and	and	CCONJ	CC	_	9	cc	_	_
8	lots	lot	NOUN	NNS	Number=Plur	9	obl:npmod	_	_
9	more	more	ADJ	JJR	Degree=Cmp	4	conj	_	SpaceAfter=No
10	.	.	PUNCT	.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl:npmod	color:blue
1	Four	four	NUM	CD	NumType=Card	2	nummod	_	_
2	months	month	NOUN	NNS	Number=Plur	3	obl:npmod	_	_
3	later	later	ADV	RB	_	7	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj:pass	_	_
6	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


