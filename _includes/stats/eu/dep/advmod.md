

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

5324 nodes (5%) are attached to their parents as `advmod`.

4320 instances of `advmod` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.85368144252442.

The following 45 pairs of parts of speech are connected with `advmod`: [eu-pos/VERB]()-[eu-pos/ADV]() (2800; 53% instances), [eu-pos/VERB]()-[eu-pos/PART]() (873; 16% instances), [eu-pos/VERB]()-[eu-pos/CCONJ]() (689; 13% instances), [eu-pos/AUX]()-[eu-pos/ADV]() (205; 4% instances), [eu-pos/ADJ]()-[eu-pos/ADV]() (172; 3% instances), [eu-pos/AUX]()-[eu-pos/PART]() (147; 3% instances), [eu-pos/AUX]()-[eu-pos/CCONJ]() (110; 2% instances), [eu-pos/ADV]()-[eu-pos/ADV]() (55; 1% instances), [eu-pos/VERB]()-[eu-pos/X]() (34; 1% instances), [eu-pos/CCONJ]()-[eu-pos/PART]() (33; 1% instances), [eu-pos/VERB]()-[eu-pos/DET]() (29; 1% instances), [eu-pos/AUX]()-[eu-pos/X]() (19; 0% instances), [eu-pos/VERB]()-[eu-pos/NOUN]() (17; 0% instances), [eu-pos/NOUN]()-[eu-pos/CCONJ]() (15; 0% instances), [eu-pos/NOUN]()-[eu-pos/PART]() (15; 0% instances), [eu-pos/PUNCT]()-[eu-pos/PART]() (13; 0% instances), [eu-pos/PROPN]()-[eu-pos/CCONJ]() (11; 0% instances), [eu-pos/NOUN]()-[eu-pos/ADV]() (10; 0% instances), [eu-pos/DET]()-[eu-pos/ADV]() (7; 0% instances), [eu-pos/ADJ]()-[eu-pos/PART]() (6; 0% instances), [eu-pos/VERB]()-[eu-pos/PROPN]() (6; 0% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (6; 0% instances), [eu-pos/ADJ]()-[eu-pos/CCONJ]() (5; 0% instances), [eu-pos/AUX]()-[eu-pos/NOUN]() (5; 0% instances), [eu-pos/VERB]()-[eu-pos/NUM]() (5; 0% instances), [eu-pos/ADV]()-[eu-pos/CCONJ]() (4; 0% instances), [eu-pos/ADJ]()-[eu-pos/NOUN]() (3; 0% instances), [eu-pos/ADJ]()-[eu-pos/PRON]() (3; 0% instances), [eu-pos/NUM]()-[eu-pos/ADV]() (3; 0% instances), [eu-pos/ADJ]()-[eu-pos/DET]() (2; 0% instances), [eu-pos/ADJ]()-[eu-pos/X]() (2; 0% instances), [eu-pos/ADV]()-[eu-pos/DET]() (2; 0% instances), [eu-pos/ADV]()-[eu-pos/NOUN]() (2; 0% instances), [eu-pos/ADV]()-[eu-pos/PART]() (2; 0% instances), [eu-pos/AUX]()-[eu-pos/DET]() (2; 0% instances), [eu-pos/DET]()-[eu-pos/CCONJ]() (2; 0% instances), [eu-pos/VERB]()-[eu-pos/INTJ]() (2; 0% instances), [eu-pos/ADP]()-[eu-pos/CCONJ]() (1; 0% instances), [eu-pos/ADV]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/AUX]()-[eu-pos/PROPN]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/PRON]()-[eu-pos/CCONJ]() (1; 0% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (1; 0% instances), [eu-pos/X]()-[eu-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 advmod	color:blue
1	O.G.M.	O.G.M.	PROPN	_	_	2	nmod	_	_
2	adin	adin	NOUN	_	_	5	nsubj	_	_
3	txikikoa	txiki	NOUN	_	Case=Abs|Definite=Def|Number=Sing	2	nmod	_	_
4	aske	aske	ADV	_	_	5	advmod	_	_
5	irten	irten	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
6	da	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	5	aux	_	_
7	Langraiztik	Langraiz	PROPN	_	Case=Abl|Definite=Def|Number=Sing	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 advmod	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 advmod	color:blue
1	Atenasen	Atenas	PROPN	_	Case=Ine|Definite=Def|Number=Sing	8	obl	_	_
2	ordea	ordea	CCONJ	_	_	8	advmod	_	SpaceAfter=No
3	,	,	PUNCT	_	_	8	punct	_	_
4	beste	beste	DET	_	_	6	det	_	_
5	bost	bost	NUM	_	NumType=Card	6	nummod	_	_
6	jarduera	jarduera	NOUN	_	Case=Abs|Definite=Ind	8	nsubj	_	_
7	gehiago	gehiago	DET	_	Case=Abs|Definite=Ind	6	det	_	_
8	izan	izan	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
9	daitezke	*edin	AUX	_	Mood=Pot|Number[abs]=Plur|Person[abs]=3	8	aux	_	SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	_

~~~


