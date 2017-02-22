

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [aux]().

1526 nodes (1%) are attached to their parents as `aux:pass`.

1493 instances of `aux:pass` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22149410222805.

The following 8 pairs of parts of speech are connected with `aux:pass`: [en-pos/VERB]()-[en-pos/AUX]() (1475; 97% instances), [en-pos/ADJ]()-[en-pos/VERB]() (22; 1% instances), [en-pos/VERB]()-[en-pos/VERB]() (21; 1% instances), [en-pos/NOUN]()-[en-pos/AUX]() (3; 0% instances), [en-pos/ADV]()-[en-pos/AUX]() (2; 0% instances), [en-pos/ADJ]()-[en-pos/AUX]() (1; 0% instances), [en-pos/AUX]()-[en-pos/AUX]() (1; 0% instances), [en-pos/PRON]()-[en-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Four	four	NUM	CD	NumType=Card	2	nummod	_	_
2	months	month	NOUN	NNS	Number=Plur	3	obl:npmod	_	_
3	later	later	ADV	RB	_	7	advmod	_	SpaceAfter=No
4	,	,	PUNCT	,	_	7	punct	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	7	nsubj:pass	_	_
6	were	be	AUX	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	7	aux:pass	_	_
7	married	marry	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 11 aux:pass	color:blue
1	Try	try	VERB	VB	Mood=Imp|VerbForm=Fin	0	root	_	_
2	googling	google	VERB	VBG	VerbForm=Ger	1	xcomp	_	_
3	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
4	or	or	CCONJ	CC	_	5	cc	_	_
5	type	type	VERB	VB	Mood=Imp|VerbForm=Fin	1	conj	_	_
6	it	it	PRON	PRP	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	obj	_	_
7	into	into	ADP	IN	_	8	case	_	_
8	youtube	youtube	PROPN	NNP	Number=Sing	5	obl	_	_
9	you	you	PRON	PRP	Case=Nom|Person=2|PronType=Prs	12	nsubj:pass	_	_
10	might	might	AUX	MD	VerbForm=Fin	12	aux	_	_
11	get	get	VERB	VB	VerbForm=Inf	12	aux:pass	_	_
12	lucky	lucky	ADJ	JJ	Degree=Pos	1	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 aux:pass	color:blue
1	Aplo.	aplo.	NOUN	NN	Number=Sing	2	compound	_	_
2	lineatus	lineatus	NOUN	NN	Number=Sing	6	nsubj:pass	_	_
3	are	be	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	6	aux:pass	_	_
4	wide	wide	ADJ	JJ	Degree=Pos	6	advmod	_	SpaceAfter=No
5	-	-	PUNCT	HYPH	_	6	punct	_	SpaceAfter=No
6	spread	spread	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
7	over	over	ADP	IN	_	9	case	_	_
8	southern	southern	ADJ	JJ	Degree=Pos	9	amod	_	_
9	India	India	PROPN	NNP	Number=Sing	6	obl	_	SpaceAfter=No
10	.	.	PUNCT	.	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is a language-specific subtype of [aux]().

341 nodes (1%) are attached to their parents as `aux:pass`.

341 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17302052785924.

The following 2 pairs of parts of speech are connected with `aux:pass`: [en-pos/VERB]()-[en-pos/AUX]() (340; 100% instances), [en-pos/ADJ]()-[en-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:pass	color:blue
1	The	the	DET	RD	Definite=Def|PronType=Art	2	det	_	_
2	work	work	NOUN	S	Number=Sing	4	nsubj:pass	_	_
3	is	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	aux:pass	_	_
4	protected	protect	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
5	by	by	ADP	E	_	6	case	_	_
6	copyright	copyright	NOUN	S	Number=Sing	4	obl:agent	_	_
7	and	and	CCONJ	CC	_	12	cc	_	SpaceAfter=No
8	/	/	PUNCT	FF	_	9	punct	_	SpaceAfter=No
9	or	or	CCONJ	CC	_	7	conj	_	_
10	other	other	ADJ	A	Degree=Pos	12	amod	_	_
11	applicable	applicable	ADJ	A	Degree=Pos	12	amod	_	_
12	law	law	NOUN	S	Number=Sing	6	conj	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 aux:pass	color:blue
1	In	in	ADP	E	_	2	case	_	_
2	1613	1613	NUM	N	NumType=Card	7	obl	_	SpaceAfter=No
3	,	,	PUNCT	FF	_	2	punct	_	_
4	Sir	Sir	PROPN	SP	_	7	nsubj	_	_
5	Henry	Henry	PROPN	SP	_	4	flat:name	_	_
6	Wotton	Wotton	PROPN	SP	_	4	flat:name	_	_
7	recorded	record	VERB	V	Mood=Ind|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	that	that	SCONJ	CS	_	13	mark	_	_
9	Henry	Henry	PROPN	SP	_	13	nsubj:pass	_	_
10	VIII	eigth	ADJ	NO	Degree=Pos|NumType=Ord	9	flat	_	_
11	"	"	PUNCT	FB	_	13	punct	_	SpaceAfter=No
12	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	aux:pass	_	_
13	set	set	ADJ	A	Degree=Pos	7	ccomp	_	_
14	forth	forth	ADP	E	_	13	compound:prt	_	_
15	with	with	ADP	E	_	18	amod	_	_
16	many	many	ADJ	A	Degree=Pos	18	amod	_	_
17	extraordinary	extraordinary	ADJ	A	Degree=Pos	18	amod	_	_
18	circumstances	circumstance	NOUN	S	Number=Plur	13	obl	_	_
19	of	of	ADP	E	_	20	case	_	_
20	pomp	pomp	NOUN	S	Number=Sing	18	nmod	_	_
21	and	and	CCONJ	CC	_	22	cc	_	_
22	ceremony	ceremony	NOUN	S	Number=Sing	20	conj	_	SpaceAfter=No
23	"	"	PUNCT	FB	_	13	punct	_	SpaceAfter=No
24	.	.	PUNCT	FS	_	7	punct	_	_

~~~


