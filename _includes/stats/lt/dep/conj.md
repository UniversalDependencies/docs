

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

374 nodes (7%) are attached to their parents as `conj`.

372 instances of `conj` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.84224598930481.

The following 25 pairs of parts of speech are connected with `conj`: [lt-pos/NOUN]()-[lt-pos/NOUN]() (144; 39% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (100; 27% instances), [lt-pos/ADJ]()-[lt-pos/ADJ]() (30; 8% instances), [lt-pos/PROPN]()-[lt-pos/PROPN]() (19; 5% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (14; 4% instances), [lt-pos/PROPN]()-[lt-pos/NOUN]() (9; 2% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (9; 2% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (7; 2% instances), [lt-pos/VERB]()-[lt-pos/NOUN]() (7; 2% instances), [lt-pos/NOUN]()-[lt-pos/ADJ]() (6; 2% instances), [lt-pos/NOUN]()-[lt-pos/VERB]() (6; 2% instances), [lt-pos/ADV]()-[lt-pos/ADV]() (5; 1% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (4; 1% instances), [lt-pos/NOUN]()-[lt-pos/PROPN]() (3; 1% instances), [lt-pos/ADV]()-[lt-pos/ADJ]() (1; 0% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/AUX]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/CCONJ]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/DET]()-[lt-pos/DET]() (1; 0% instances), [lt-pos/NOUN]()-[lt-pos/ADV]() (1; 0% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/PRON]()-[lt-pos/DET]() (1; 0% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 conj	color:blue
1	Tėvynę	tėvynė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	homeland|_
2	,	,	PUNCT	PUNCT	_	3	punct	_	,|_
3	tautą	tauta	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	1	conj	_	nation|_
4	ir	ir	CCONJ	CC	_	5	cc	_	and|_
5	lietuvybę	lietuvybė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	1	conj	_	Lithuanianism|_
6	dera	derėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	need|_
7	mylėti	mylėti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	6	xcomp	_	love|_
8	.	.	PUNCT	PUNCT	_	6	punct	_	.|_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 conj	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 10 conj	color:blue
1	Tų	tų	DET	PRP$	Case=Gen|Gender=Masc|Number=Plur	2	det	_	that|_
2	laikų	laikas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	3	nmod	_	time|_
3	entuziazmas	entuziazmas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	enthusiasm|_
4	buvo	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	5	cop	_	be|_
5	gražus	gražus	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	0	root	_	beautiful|_
6	,	,	PUNCT	PUNCT	_	10	punct	_	,|_
7	o	o	CCONJ	CC	_	10	cc	_	and|_
8	sudėtos	sudėti	VERB	VBNL	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Pass	9	amod	_	additional|_
9	aukos	auka	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	10	nsubj	_	victim|_
10	vertos	vertas	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	5	conj	_	worth|_
11	didelės	didelis	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	big|_
12	pagarbos	pagarba	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	10	obj	_	respect|_
13	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~


