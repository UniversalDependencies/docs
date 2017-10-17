

--------------------------------------------------------------------------------

## Treebank Statistics (UD_English)

This relation is a language-specific subtype of [nsubj]().

1300 nodes (1%) are attached to their parents as `nsubj:pass`.

1267 instances of `nsubj:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.84461538461538.

The following 12 pairs of parts of speech are connected with `nsubj:pass`: [en-pos/VERB]()-[en-pos/NOUN]() (642; 49% instances), [en-pos/VERB]()-[en-pos/PRON]() (496; 38% instances), [en-pos/VERB]()-[en-pos/PROPN]() (107; 8% instances), [en-pos/VERB]()-[en-pos/DET]() (12; 1% instances), [en-pos/ADJ]()-[en-pos/NOUN]() (10; 1% instances), [en-pos/VERB]()-[en-pos/ADJ]() (10; 1% instances), [en-pos/ADJ]()-[en-pos/PRON]() (8; 1% instances), [en-pos/VERB]()-[en-pos/SYM]() (5; 0% instances), [en-pos/VERB]()-[en-pos/NUM]() (4; 0% instances), [en-pos/NOUN]()-[en-pos/PRON]() (3; 0% instances), [en-pos/ADV]()-[en-pos/PRON]() (2; 0% instances), [en-pos/AUX]()-[en-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	In	in	ADP	IN	_	3	case	_	_
2	other	other	ADJ	JJ	Degree=Pos	3	amod	_	_
3	words	word	NOUN	NNS	Number=Plur	7	obl	_	_
4	the	the	DET	DT	Definite=Def|PronType=Art	5	det	_	_
5	table	table	NOUN	NN	Number=Sing	7	nsubj:pass	_	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
7	set	set	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No
8	.	.	PUNCT	.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	Capt.	Capt.	PROPN	NNP	Number=Sing	2	compound	_	_
2	Spastic	Spastic	PROPN	NNP	Number=Sing	5	nmod:poss	_	SpaceAfter=No
3	's	's	PART	POS	_	2	case	_	_
4	Demented	Demented	PROPN	NNP	Number=Sing	5	compound	_	_
5	World	World	PROPN	NNP	Number=Sing	7	nsubj:pass	_	_
6	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux:pass	_	_
7	located	locate	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	_
8	at	at	ADP	IN	_	7	obl	_	SpaceAfter=No
9	:	:	PUNCT	:	_	7	punct	_	_
10	<	<	PUNCT	-LRB-	_	7	punct	_	SpaceAfter=No
11	>	>	PUNCT	-RRB-	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-LinES)

This relation is a language-specific subtype of [nsubj]().

466 nodes (1%) are attached to their parents as `nsubj:pass`.

464 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.69742489270386.

The following 6 pairs of parts of speech are connected with `nsubj:pass`: [en-pos/VERB]()-[en-pos/NOUN]() (276; 59% instances), [en-pos/VERB]()-[en-pos/PRON]() (150; 32% instances), [en-pos/VERB]()-[en-pos/PROPN]() (33; 7% instances), [en-pos/VERB]()-[en-pos/ADJ]() (3; 1% instances), [en-pos/VERB]()-[en-pos/NUM]() (3; 1% instances), [en-pos/AUX]()-[en-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Additional	_	ADJ	POS	_	2	amod	_	_
2	information	_	NOUN	SG-NOM	_	7	nsubj:pass	_	_
3	about	_	ADP	_	_	4	case	_	_
4	XML	_	PROPN	SG-NOM	_	2	nmod	_	_
5	can	_	AUX	PRES-AUX	_	7	aux	_	_
6	be	_	AUX	INF	_	7	aux	_	_
7	found	_	VERB	PASS	_	0	root	_	_
8	on	_	ADP	_	_	11	case	_	_
9	the	_	DET	DEF	_	11	det	_	_
10	web	_	NOUN	SG-NOM	_	11	compound	_	_
11	site	_	NOUN	SG-NOM	_	7	obl	_	SpaceAfter=No
12	.	_	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	It	_	PRON	PERS-SG	_	4	nsubj:pass	_	SpaceAfter=No
2	's	_	AUX	PRES-AUX	_	4	aux	_	_
3	even	_	ADV	_	_	4	advmod	_	_
4	made	_	VERB	PASS	_	0	root	_	_
5	out	_	ADV	_	_	4	compound:prt	_	_
6	to	_	ADP	_	_	7	case	_	_
7	you	_	PRON	PERS-P2	_	4	obl	_	SpaceAfter=No
8	.	_	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Office	_	PROPN	SG-NOM	_	3	nsubj:pass	_	_
2	2002	_	NUM	ID	_	1	nummod	_	_
3	installed	_	VERB	PASS	_	0	root	_	_
4	on	_	ADP	_	_	5	case	_	_
5	computer	_	NOUN	SG-NOM	_	3	obl	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_English-ParTUT)

This relation is a language-specific subtype of [nsubj]().

341 nodes (1%) are attached to their parents as `nsubj:pass`.

331 instances of `nsubj:pass` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.80351906158358.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: [en-pos/VERB]()-[en-pos/NOUN]() (201; 59% instances), [en-pos/VERB]()-[en-pos/PRON]() (98; 29% instances), [en-pos/VERB]()-[en-pos/PROPN]() (30; 9% instances), [en-pos/VERB]()-[en-pos/ADJ]() (8; 2% instances), [en-pos/ADJ]()-[en-pos/PROPN]() (1; 0% instances), [en-pos/AUX]()-[en-pos/PRON]() (1; 0% instances), [en-pos/VERB]()-[en-pos/SYM]() (1; 0% instances), [en-pos/VERB]()-[en-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj:pass	color:blue
1	You	you	PRON	PE	Person=2|PronType=Prs	5	nsubj:pass	_	SpaceAfter=No
2	've	have	AUX	VA	Mood=Ind|Number=Plur|Tense=Pres|VerbForm=Fin	5	aux	_	_
3	always	always	ADV	B	_	5	advmod	_	_
4	been	be	AUX	VA	Tense=Past|VerbForm=Part	5	aux:pass	_	_
5	subscribed	subscribe	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
6	to	to	ADP	E	_	7	case	_	_
7	friends	friend	NOUN	S	Number=Plur	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:pass	color:blue
1	Gustave	Gustave	PROPN	SP	_	6	nsubj:pass	_	_
2	Flaubert	Flaubert	PROPN	SP	_	1	flat:name	_	_
3	was	be	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	6	aux:pass	_	_
4	also	also	ADV	B	_	6	advmod	_	_
5	substantially	substantially	ADV	B	_	6	advmod	_	_
6	influenced	influence	VERB	V	Tense=Past|VerbForm=Part	0	root	_	_
7	by	by	ADP	E	_	8	case	_	_
8	Balzac	Balzac	PROPN	SP	_	6	obl:agent	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	6	punct	_	_

~~~


