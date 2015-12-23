

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is universal.

1643 nodes (1%) are attached to their parents as `auxpass`.

1606 instances of `auxpass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22215459525259.

The following 7 pairs of parts of speech are connected with `auxpass`: [en-pos/VERB]()-[en-pos/AUX]() (1588; 97% instances), [en-pos/VERB]()-[en-pos/VERB]() (24; 1% instances), [en-pos/ADJ]()-[en-pos/VERB]() (23; 1% instances), [en-pos/ADV]()-[en-pos/AUX]() (3; 0% instances), [en-pos/NOUN]()-[en-pos/AUX]() (3; 0% instances), [en-pos/ADJ]()-[en-pos/AUX]() (1; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 auxpass	color:blue
1	Four	four	NUM	CD	NumType=Card	2	nummod	_	_
2	months	month	NOUN	NNS	Number=Plur	3	nmod:npmod	_	_
3	later	later	ADV	RB	_	7	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubjpass	_	_
6	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	auxpass	_	_
7	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 auxpass	color:blue
1	Aplo.	aplo.	NOUN	NN	Number=Sing	2	compound	_	_
2	lineatus	lineatus	NOUN	NN	Number=Sing	6	nsubjpass	_	_
3	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	auxpass	_	_
4	wide	wide	ADJ	JJ	Degree=Pos	6	advmod	_	SpaceAfter=No
5	-	-	PUNCT	HYPH	_	6	punct	_	SpaceAfter=No
6	spread	spread	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
7	over	over	ADP	IN	_	9	case	_	_
8	southern	southern	ADJ	JJ	Degree=Pos	9	amod	_	_
9	India	India	PROPN	NNP	Number=Sing	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 auxpass	color:blue
1	Try	try	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	googling	google	VERB	VBG	VerbForm=Ger	1	xcomp	_	_
3	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	dobj	_	_
4	or	or	CONJ	CC	_	1	cc	_	_
5	type	type	VERB	VB	Mood=Imp|VerbForm=Fin	1	conj	_	_
6	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	dobj	_	_
7	into	into	ADP	IN	_	8	case	_	_
8	youtube	youtube	PROPN	NNP	Number=Sing	5	nmod	_	_
9	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	12	nsubjpass	_	_
10	might	might	AUX	MD	VerbForm=Fin	12	aux	_	_
11	get	get	VERB	VB	VerbForm=Inf	12	auxpass	_	_
12	lucky	lucky	ADJ	JJ	Degree=Pos	1	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	_

~~~


