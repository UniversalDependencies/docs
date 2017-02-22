

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

2430 nodes (3%) are attached to their parents as `det`.

1489 instances of `det` (61%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.12798353909465.

The following 33 pairs of parts of speech are connected with `det`: [eu-pos/NOUN]()-[eu-pos/DET]() (1570; 65% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (505; 21% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (61; 3% instances), [eu-pos/NOUN]()-[eu-pos/NOUN]() (49; 2% instances), [eu-pos/DET]()-[eu-pos/DET]() (47; 2% instances), [eu-pos/ADJ]()-[eu-pos/DET]() (25; 1% instances), [eu-pos/ADP]()-[eu-pos/NUM]() (20; 1% instances), [eu-pos/NUM]()-[eu-pos/DET]() (20; 1% instances), [eu-pos/ADP]()-[eu-pos/DET]() (19; 1% instances), [eu-pos/NOUN]()-[eu-pos/ADV]() (15; 1% instances), [eu-pos/PROPN]()-[eu-pos/DET]() (14; 1% instances), [eu-pos/NUM]()-[eu-pos/NUM]() (10; 0% instances), [eu-pos/SYM]()-[eu-pos/NUM]() (10; 0% instances), [eu-pos/ADV]()-[eu-pos/DET]() (8; 0% instances), [eu-pos/DET]()-[eu-pos/NUM]() (8; 0% instances), [eu-pos/PRON]()-[eu-pos/DET]() (8; 0% instances), [eu-pos/VERB]()-[eu-pos/DET]() (8; 0% instances), [eu-pos/ADJ]()-[eu-pos/NUM]() (5; 0% instances), [eu-pos/CCONJ]()-[eu-pos/DET]() (4; 0% instances), [eu-pos/ADP]()-[eu-pos/NOUN]() (3; 0% instances), [eu-pos/PROPN]()-[eu-pos/ADJ]() (3; 0% instances), [eu-pos/ADV]()-[eu-pos/NUM]() (2; 0% instances), [eu-pos/DET]()-[eu-pos/NOUN]() (2; 0% instances), [eu-pos/DET]()-[eu-pos/PRON]() (2; 0% instances), [eu-pos/PRON]()-[eu-pos/ADV]() (2; 0% instances), [eu-pos/VERB]()-[eu-pos/ADV]() (2; 0% instances), [eu-pos/VERB]()-[eu-pos/NUM]() (2; 0% instances), [eu-pos/ADV]()-[eu-pos/ADV]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/PART]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/VERB]() (1; 0% instances), [eu-pos/NUM]()-[eu-pos/NOUN]() (1; 0% instances), [eu-pos/PRON]()-[eu-pos/NUM]() (1; 0% instances), [eu-pos/PROPN]()-[eu-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 det	color:blue
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


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	Lehen	lehen	NUM	_	NumType=Ord	2	det	_	_
2	zatian	zati	NOUN	_	Animacy=Inan|Case=Ine|Definite=Def|Number=Sing	4	obl	_	_
3	tinko	tinko	ADV	_	_	4	advmod	_	_
4	jardun	jardun	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
5	dugu	*edun	AUX	_	Mood=Ind|Number[abs]=Sing|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	4	aux	_	SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	_
7	baina	baina	CCONJ	_	_	11	cc	_	_
8	ez	ez	PART	_	Polarity=Neg	11	advmod	_	_
9	ditugu	*edun	AUX	_	Mood=Ind|Number[abs]=Plur|Number[erg]=Plur|Person[abs]=3|Person[erg]=1	11	aux	_	_
10	aukerak	aukera	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Plur	11	obj	_	_
11	baliatu	baliatu	VERB	_	Aspect=Perf|VerbForm=Part	4	conj	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 det	color:blue
1	Lan	lan	NOUN	_	_	3	nmod	_	_
2	osoaren	oso	ADJ	_	Case=Gen|Definite=Def|Number=Sing	1	det	_	_
3	laburtzapena	laburtzapen	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	5	obj	_	_
4	ere	ere	CCONJ	_	_	6	advmod	_	_
5	egina	egin	VERB	_	Case=Abs|Definite=Def|Number=Sing|VerbForm=Part	0	root	_	_
6	du	ukan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	5	cop	_	_
7	autoreak	autore	NOUN	_	Animacy=Anim|Case=Erg|Definite=Def|Number=Sing	5	nsubj	_	_
8	berak	bera	DET	_	Case=Erg|Definite=Def|Number=Sing	7	appos	_	SpaceAfter=No
9	:	:	PUNCT	_	_	5	punct	_	_

~~~


