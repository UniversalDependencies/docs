

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

7624 nodes (8%) are attached to their parents as `obl`.

5641 instances of `obl` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.14296956977964.

The following 20 pairs of parts of speech are connected with `obl`: [eu-pos/VERB]()-[eu-pos/NOUN]() (5135; 67% instances), [eu-pos/VERB]()-[eu-pos/PROPN]() (899; 12% instances), [eu-pos/AUX]()-[eu-pos/NOUN]() (380; 5% instances), [eu-pos/VERB]()-[eu-pos/NUM]() (348; 5% instances), [eu-pos/VERB]()-[eu-pos/ADJ]() (276; 4% instances), [eu-pos/VERB]()-[eu-pos/DET]() (258; 3% instances), [eu-pos/VERB]()-[eu-pos/PRON]() (65; 1% instances), [eu-pos/AUX]()-[eu-pos/PROPN]() (62; 1% instances), [eu-pos/VERB]()-[eu-pos/VERB]() (60; 1% instances), [eu-pos/VERB]()-[eu-pos/CCONJ]() (29; 0% instances), [eu-pos/AUX]()-[eu-pos/DET]() (22; 0% instances), [eu-pos/AUX]()-[eu-pos/ADJ]() (20; 0% instances), [eu-pos/AUX]()-[eu-pos/PRON]() (20; 0% instances), [eu-pos/AUX]()-[eu-pos/NUM]() (19; 0% instances), [eu-pos/VERB]()-[eu-pos/X]() (11; 0% instances), [eu-pos/AUX]()-[eu-pos/CCONJ]() (8; 0% instances), [eu-pos/AUX]()-[eu-pos/VERB]() (5; 0% instances), [eu-pos/VERB]()-[eu-pos/PART]() (3; 0% instances), [eu-pos/VERB]()-[eu-pos/PUNCT]() (3; 0% instances), [eu-pos/AUX]()-[eu-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 obl	color:blue
1	Gure	gu	PRON	_	PronType=Prs	2	nmod	_	_
2	etxea	etxe	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	11	obj	_	SpaceAfter=No
3	,	,	PUNCT	_	_	11	punct	_	_
4	egun	egun	NOUN	_	_	11	obl	_	_
5	batean	bat	NUM	_	NumType=Card	4	nummod	_	SpaceAfter=No
6	,	,	PUNCT	_	_	11	punct	_	_
7	ordu	ordu	NOUN	_	_	4	appos	_	_
8	batzuetan	batzuk	DET	_	Case=Ine|Definite=Def|Number=Plur	7	det	_	SpaceAfter=No
9	,	,	PUNCT	_	_	4	punct	_	_
10	zeharo	zeharo	ADV	_	_	11	advmod	_	_
11	aldatu	aldatu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
12	zen	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	11	aux	_	SpaceAfter=No
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 obl	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 obl	color:blue
1	Jokalari	jokalari	NOUN	_	_	5	nsubj	_	_
2	honek	hau	DET	_	Case=Erg|Definite=Def|Number=Sing	1	det	_	_
3	18	18	NUM	_	NumType=Card	4	nummod	_	_
4	urte	urte	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	5	obj	_	_
5	ditu	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	0	root	_	_
6	eta	eta	CCONJ	_	_	10	cc	_	_
7	2,08	2,08	NUM	_	NumType=Card	8	det	_	_
8	metro	metro	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	9	obl	_	_
9	da	izan	AUX	_	Aspect=Prog|Mood=Ind|Number[abs]=Sing|Person[abs]=3	10	cop	_	_
10	luze	luze	ADJ	_	Case=Abs|Definite=Ind	5	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


