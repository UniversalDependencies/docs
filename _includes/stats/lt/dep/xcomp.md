

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

111 nodes (2%) are attached to their parents as `xcomp`.

102 instances of `xcomp` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63063063063063.

The following 6 pairs of parts of speech are connected with `xcomp`: [lt-pos/VERB]()-[lt-pos/VERB]() (90; 81% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (13; 12% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (5; 5% instances), [lt-pos/ADV]()-[lt-pos/VERB]() (1; 1% instances), [lt-pos/PUNCT]()-[lt-pos/VERB]() (1; 1% instances), [lt-pos/VERB]()-[lt-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 xcomp	color:blue
1	Taip	Taip	PART	UH	_	0	root	_	so|_
2	nėra	būti	ADJ	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	be|_
3	:	:	PUNCT	PUNCT	_	6	punct	_	:|_
4	mes	mes	PRON	PRP	Case=Nom|Number=Plur|Person=1	6	nsubj	_	we|_
5	tik	tik	ADV	RB	Degree=Pos	6	advmod	_	only|_
6	draudžiame	drausti	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	1	parataxis	_	friend|_
7	drausti	drausti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	6	xcomp	_	friend|_
8	,	,	PUNCT	PUNCT	_	9	punct	_	,|_
9	draudžiame	drausti	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	friend|_
10	prievartauti	prievartauti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	9	xcomp	_	|_
11	.	.	PUNCT	PUNCT	_	1	punct	_	.|_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	Tuo	tuo	SCONJ	UH	_	5	advmod	_	meanwhile|_
2	tarpu	tarpu	SCONJ	UH	_	1	fixed	_	while|_
3	nepriklausomybė	nepriklausomybė	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing|Polarity=Neg	5	nsubj	_	independence|_
4	nėra	būti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	be|_
5	tikslas	tikslas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	target|_
6	sau	savęs	PRON	PRP	Case=Dat	5	nmod	_	oneself|_
7	,	,	PUNCT	PUNCT	_	9	punct	_	,|_
8	o	o	CCONJ	CC	_	9	cc	_	and|_
9	būdas	būdas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	conj	_	way|_
10	užtikrinti	užtikrinti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	9	xcomp	_	|_
11	tautos	tauta	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	nation|_
12	gerovę	gerovė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	10	obj	_	well-being|_
13	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Nesunku	nesunkus	ADJ	PRED	Definite=Ind|Degree=Pos|Gender=Neut|Polarity=Neg	0	root	_	not difficult|_
2	pastebėti	pastebėti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	1	xcomp	_	notice|_
3	,	,	PUNCT	PUNCT	_	8	punct	_	,|_
4	kad	kad	SCONJ	UH	_	8	mark	_	that|_
5	šioje	šis	DET	DT	Case=Loc|Definite=Ind|Gender=Fem|Number=Sing	6	det	_	this|_
6	bėdoje	bėda	NOUN	NN	Case=Loc|Gender=Fem|Number=Sing	8	obl	_	adversity|_
7	nesame	būti	AUX	VBC	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	be not|_
8	vieniši	vienišas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	9	ccomp	_	alone|def
9	.	.	PUNCT	PUNCT	_	1	punct	_	.|_

~~~


