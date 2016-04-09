

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Danish)

This relation is universal.

441 nodes (0%) are attached to their parents as `expl`.

344 instances of `expl` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.99773242630385.

The following 5 pairs of parts of speech are connected with `expl`: [da-pos/VERB]()-[da-pos/ADV]() (392; 89% instances), [da-pos/VERB]()-[da-pos/PRON]() (37; 8% instances), [da-pos/ADV]()-[da-pos/ADV]() (7; 2% instances), [da-pos/AUX]()-[da-pos/ADV]() (4; 1% instances), [da-pos/X]()-[da-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 expl	color:blue
1	Der	der	ADV	_	PartType=Inf	2	expl	_	_
2	var	være	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	5	det	_	_
4	god	god	ADJ	_	Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	5	amod	_	_
5	stemning	stemning	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	2	dobj	_	_
6	på	på	ADP	_	AdpType=Prep	9	case	_	_
7	det	den	DET	_	Gender=Neut|Number=Sing|PronType=Dem	9	det	_	_
8	danske	dansk	ADJ	_	Definite=Def|Degree=Pos|Number=Sing	9	amod	_	_
9	hold	hold	NOUN	_	Definite=Ind|Gender=Neut|Number=Sing	2	nmod	_	_
10	inden	inden	ADP	_	AdpType=Prep	11	case	_	_
11	kampen	kamp	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	nmod	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 expl	color:blue
1	-	-	PUNCT	_	_	5	punct	_	_
2	Der	der	PRON	_	PartType=Inf	5	expl	_	_
3	må	måtte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
4	have	have	AUX	_	VerbForm=Inf|Voice=Act	5	aux	_	_
5	været	være	VERB	_	Definite=Ind|Number=Sing|Tense=Past|VerbForm=Part,Trans	10	ccomp	_	_
6	en	en	DET	_	Gender=Com|Number=Sing|PronType=Ind	8	det	_	_
7	anden	anden	DET	_	Gender=Com|Number=Sing|PronType=Ind	8	det	_	_
8	mand	mand	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	5	dobj	_	_
9	,	,	PUNCT	_	_	5	punct	_	_
10	konstaterede	konstatere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	Loulou	Loulou	PROPN	_	_	10	nsubj	_	_
12	sagligt	sagligt	ADV	_	Degree=Pos	10	advmod	_	_
13	.	.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 expl	color:blue
1	Hvis	hvis	SCONJ	_	_	7	mark	_	_
2	der	der	ADV	_	PartType=Inf	7	expl	_	_
3	overhovedet	overhovedet	ADV	_	_	7	advmod	_	_
4	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	_	_
5	nogen	nogen	DET	_	Gender=Com|Number=Sing|PronType=Ind	6	det	_	_
6	energi	energi	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	7	dobj	_	_
7	tilbage	tilbage	ADV	_	_	0	root	_	_
8	i	i	ADP	_	AdpType=Prep	9	case	_	_
9	dig	du	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=2|PronType=Prs	7	nmod	_	_
10	.	.	PUNCT	_	_	7	punct	_	_

~~~


