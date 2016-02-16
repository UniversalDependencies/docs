

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

1355 nodes (1%) are attached to their parents as `neg`.

1212 instances of `neg` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25166051660517.

The following 8 pairs of parts of speech are connected with `neg`: [eu-pos/VERB]()-[eu-pos/PART]() (1263; 93% instances), [eu-pos/CONJ]()-[eu-pos/PART]() (38; 3% instances), [eu-pos/NOUN]()-[eu-pos/PART]() (18; 1% instances), [eu-pos/PUNCT]()-[eu-pos/PART]() (16; 1% instances), [eu-pos/AUX]()-[eu-pos/PART]() (10; 1% instances), [eu-pos/ADJ]()-[eu-pos/PART]() (7; 1% instances), [eu-pos/ADV]()-[eu-pos/PART]() (2; 0% instances), [eu-pos/DET]()-[eu-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 neg	color:blue
1	Aurkariari	aurkari	NOUN	_	Case=Dat|Definite=Def|Number=Sing	2	iobj	_	_
2	dagokionez	egon	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[dat]=Sing|Person[abs]=3|Person[dat]=3	6	advcl	_	_
3	,	,	PUNCT	_	_	6	punct	_	_
4	Feyenoord	Feyenoord	PROPN	_	_	6	nsubj	_	_
5	ez	ez	PART	_	Negative=Neg	6	neg	_	_
6	dago	egon	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	0	root	_	_
7	bere	bera	DET	_	Case=Gen|Number=Sing	8	nmod	_	_
8	garairik	garai	ADJ	_	Case=Par|Definite=Ind	6	nmod	_	_
9	onenean	on	ADJ	_	Case=Ine|Definite=Def|Degree=Sup|Number=Sing	8	amod	_	_
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 neg	color:blue
1	Golarekin	gola	NOUN	_	Case=Com|Definite=Ind	2	nmod	_	_
2	asmatu	asmatu	VERB	_	VerbForm=Part	8	advcl	_	_
3	edo	edo	CONJ	_	_	2	cc	_	_
4	ez	ez	PART	_	Negative=Neg	3	neg	_	_
5	,	,	PUNCT	_	_	8	punct	_	_
6	lan	lan	NOUN	_	_	8	dobj	_	_
7	baliagarria	baliagarri	ADJ	_	Case=Abs|Definite=Def|Number=Sing	6	amod	_	_
8	egingo	egin	VERB	_	Aspect=Pro|VerbForm=Part	0	root	_	_
9	du	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	8	aux	_	_
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 neg	color:blue
1	Iruditu	iruditu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
2	zitzaidan	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Sing|Person[abs]=3|Person[dat]=1	1	aux	_	_
3	bizitzak	bizitza	NOUN	_	Animacy=Inan|Case=Erg|Definite=Def|Number=Sing	6	nsubj	_	_
4	ez	ez	PART	_	Negative=Neg	6	neg	_	_
5	zuela	ukan	VERB	_	_	1	ccomp	_	_
6	merezi	merezi	NOUN	_	Case=Abs|Definite=Ind	5	dep	_	_
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


