

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

818 nodes (1%) are attached to their parents as `iobj`.

550 instances of `iobj` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.73838630806846.

The following 15 pairs of parts of speech are connected with `iobj`: [eu-pos/VERB]()-[eu-pos/NOUN]() (536; 66% instances), [eu-pos/VERB]()-[eu-pos/PROPN]() (182; 22% instances), [eu-pos/VERB]()-[eu-pos/DET]() (28; 3% instances), [eu-pos/VERB]()-[eu-pos/PRON]() (23; 3% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (18; 2% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (10; 1% instances), [eu-pos/VERB]()-[eu-pos/NUM]() (5; 1% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (4; 0% instances), [eu-pos/PUNCT]()-[eu-pos/NOUN]() (4; 0% instances), [eu-pos/CCONJ]()-[eu-pos/PROPN]() (2; 0% instances), [eu-pos/X]()-[eu-pos/NOUN]() (2; 0% instances), [eu-pos/ADV]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/CCONJ]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Aurkariari	aurkari	NOUN	_	Case=Dat|Definite=Def|Number=Sing	2	iobj	_	_
2	dagokionez	egon	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[dat]=Sing|Person[abs]=3|Person[dat]=3	6	advcl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	Feyenoord	Feyenoord	PROPN	_	_	6	nsubj	_	_
5	ez	ez	PART	_	Polarity=Neg	6	advmod	_	_
6	dago	egon	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	0	root	_	_
7	bere	bera	DET	_	Case=Gen|Number=Sing	8	nmod	_	_
8	garairik	garai	ADJ	_	Case=Par|Definite=Ind	6	obl	_	_
9	onenean	on	ADJ	_	Case=Ine|Definite=Def|Degree=Sup|Number=Sing	8	amod	_	SpaceAfter=No
10	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 iobj	color:blue
1	Susanari	Susana	PROPN	_	Case=Dat|Definite=Def|Number=Sing	7	iobj	_	_
2	ere	ere	CCONJ	_	_	4	advmod	_	_
3	ez	ez	PART	_	Polarity=Neg	4	advmod	_	_
4	zirudien	iruditu	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	0	root	_	_
5	asko	asko	ADV	_	_	7	advmod	_	_
6	axola	axola	NOUN	_	Case=Abs|Definite=Ind	7	compound	_	_
7	zitzaionik	izan	VERB	_	_	4	ccomp	_	SpaceAfter=No
8	:	:	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Besteei	beste	DET	_	Case=Dat|Definite=Def|Number=Plur	2	iobj	_	_
2	esan	esan	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
3	zien	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[dat]=Plur|Number[erg]=Sing|Person[abs]=3|Person[dat]=3|Person[erg]=3	2	aux	_	SpaceAfter=No
4	:	:	PUNCT	_	_	2	punct	_	_

~~~


