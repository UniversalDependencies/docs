

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.
There are 1 language-specific subtypes of `aux`: [aux:pass]().

36 nodes (1%) are attached to their parents as `aux`.

35 instances of `aux` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44444444444444.

The following 7 pairs of parts of speech are connected with `aux`: [lt-pos/VERB]()-[lt-pos/AUX]() (25; 69% instances), [lt-pos/ADJ]()-[lt-pos/AUX]() (3; 8% instances), [lt-pos/NOUN]()-[lt-pos/AUX]() (3; 8% instances), [lt-pos/VERB]()-[lt-pos/PART]() (2; 6% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (1; 3% instances), [lt-pos/PROPN]()-[lt-pos/AUX]() (1; 3% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Po	po	ADP	UH	_	2	case	_	after|_
2	to	tas	PRON	DT	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	4	obl	_	that|_
3	buvo	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=PastSimp	4	aux	_	be|_
4	įrašinėjama	įrašinėti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	write|_
5	iš	iš%naujo	ADV	RB	Degree=Pos|Polarity=Pos	4	advmod	_	again|_
6	naujo	iš%naujo	ADV	RB	Degree=Pos	5	fixed	_	again|_
7	.	.	PUNCT	PUNCT	_	4	punct	_	.|_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 aux	color:blue
1	Paprastai	paprastai	ADV	RB	Degree=Pos|Polarity=Pos	15	advmod	_	usually|_
2	,	,	PUNCT	PUNCT	_	6	punct	_	,|_
3	kai	kai	SCONJ	UH	_	6	advmod	_	when|_
4	į	į	ADP	UH	_	3	fixed	_	to|_
5	lėktuvai	lėktuvas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	6	nsubj	_	airplane|_
6	nukrenta	nukristi	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Reflex=No|Tense=Pres	15	advcl	_	drop|_
7	į	į	ADP	UH	_	8	case	_	to|_
8	jūrą	jūra	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	6	obl	_	sea|_
9	,	,	PUNCT	PUNCT	_	6	punct	_	,|_
10	nustatyti	nustatyti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	15	xcomp	_	|_
11	katastrofos	katastrofa	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	catastrophy|_
12	priežastis	priežastis	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	10	obj	_	reason|_
13	būna	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres	15	aux	_	there is|_
14	ypač	ypač	ADV	RB	Degree=Pos|Polarity=Pos	15	advmod	_	especially|_
15	sunku	sunkus	ADJ	PRED	Definite=Ind|Degree=Pos|Gender=Neut|Polarity=Pos	0	root	_	difficult|_
16	.	.	PUNCT	PUNCT	_	15	punct	_	.|_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 aux	color:blue
1	Svarbiausias	svarbus	ADJ	JJS	Case=Nom|Definite=Ind|Degree=Sup|Gender=Masc|Number=Sing	2	amod	_	most|_
2	daiktas	daiktas	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	0	root	_	thing|_
3	jam	jis	PRON	PRP	Case=Dat|Gender=Masc|Number=Sing|Person=3	2	obl	_	he|_
4	yra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	2	aux	_	be|_
5	tėvų	tėvai	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	6	nmod	_	parent|_
6	priesaikai	priesaika	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	2	nsubj	_	oath|_
7	ir	ir	CCONJ	CC	_	9	cc	_	and|_
8	tautinės	tautinis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur	9	amod	_	national|_
9	šventenybės	šventenybė	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur	6	conj	_	shrine|_
10	.	.	PUNCT	PUNCT	_	2	punct	_	.|_

~~~


