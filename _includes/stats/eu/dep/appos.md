

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Basque)

This relation is universal.

555 nodes (0%) are attached to their parents as `appos`.

550 instances of `appos` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.0018018018018.

The following 23 pairs of parts of speech are connected with `appos`: [eu-pos/NOUN]()-[eu-pos/NOUN]() (154; 28% instances), [eu-pos/PROPN]()-[eu-pos/PROPN]() (86; 15% instances), [eu-pos/NOUN]()-[eu-pos/PROPN]() (64; 12% instances), [eu-pos/PROPN]()-[eu-pos/NOUN]() (62; 11% instances), [eu-pos/NOUN]()-[eu-pos/VERB]() (54; 10% instances), [eu-pos/NOUN]()-[eu-pos/NUM]() (49; 9% instances), [eu-pos/PROPN]()-[eu-pos/NUM]() (22; 4% instances), [eu-pos/NOUN]()-[eu-pos/ADJ]() (12; 2% instances), [eu-pos/NOUN]()-[eu-pos/DET]() (9; 2% instances), [eu-pos/NOUN]()-[eu-pos/ADV]() (8; 1% instances), [eu-pos/PROPN]()-[eu-pos/DET]() (8; 1% instances), [eu-pos/NUM]()-[eu-pos/NOUN]() (5; 1% instances), [eu-pos/PROPN]()-[eu-pos/SYM]() (4; 1% instances), [eu-pos/NOUN]()-[eu-pos/SYM]() (3; 1% instances), [eu-pos/PROPN]()-[eu-pos/ADJ]() (3; 1% instances), [eu-pos/PROPN]()-[eu-pos/VERB]() (3; 1% instances), [eu-pos/NUM]()-[eu-pos/NUM]() (2; 0% instances), [eu-pos/NUM]()-[eu-pos/PROPN]() (2; 0% instances), [eu-pos/NOUN]()-[eu-pos/CONJ]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/PRON]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/PUNCT]() (1; 0% instances), [eu-pos/NOUN]()-[eu-pos/X]() (1; 0% instances), [eu-pos/PROPN]()-[eu-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 appos	color:blue
1	Gure	gu	PRON	_	PronType=Prs	2	nmod	_	_
2	etxea	etxe	NOUN	_	Animacy=Inan|Case=Abs|Definite=Def|Number=Sing	11	dobj	_	_
3	,	,	PUNCT	_	_	11	punct	_	_
4	egun	egun	NOUN	_	_	11	nmod	_	_
5	batean	bat	NUM	_	NumType=Card	4	nummod	_	_
6	,	,	PUNCT	_	_	11	punct	_	_
7	ordu	ordu	NOUN	_	_	4	appos	_	_
8	batzuetan	batzuk	DET	_	Case=Ine|Definite=Def|Number=Plur	7	det	_	_
9	,	,	PUNCT	_	_	4	punct	_	_
10	zeharo	zeharo	ADV	_	_	11	advmod	_	_
11	aldatu	aldatu	VERB	_	Aspect=Perf|VerbForm=Part	0	root	_	_
12	zen	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	11	aux	_	_
13	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 appos	color:blue
1	Eugin	Eugi	PROPN	_	Case=Ine|Definite=Def|Number=Sing	5	nmod	_	_
2	(	(	PUNCT	_	_	1	punct	_	_
3	Nafarroa	Nafarroa	PROPN	_	Case=Abs|Definite=Def|Number=Sing	1	appos	_	_
4	)	)	PUNCT	_	_	5	punct	_	_
5	ariko	ari_izan	VERB	_	_	0	root	_	_
6	da	izan	AUX	_	Mood=Ind|Number[abs]=Sing|Person[abs]=3	5	aux	_	_
7	Asegarce	Asegarce	PROPN	_	Case=Abs|Definite=Def|Number=Sing	5	nsubj	_	_
8	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 appos	color:blue
1	Houdaren	Houda	PROPN	_	Case=Gen|Definite=Def|Number=Sing	2	nmod	_	_
2	ahizpa	ahizpa	NOUN	_	_	8	nsubj	_	_
3	gazteak	gazte	ADJ	_	Case=Erg|Definite=Def|Number=Sing	2	amod	_	_
4	,	,	PUNCT	_	_	8	punct	_	_
5	Iman-ek	Iman	PROPN	_	Case=Erg|Definite=Def|Number=Sing	2	appos	_	_
6	zortzi	zortzi	NUM	_	_	7	nummod	_	_
7	urte	urte	NOUN	_	Animacy=Inan|Case=Abs|Definite=Ind	8	dobj	_	_
8	ditu	ukan	VERB	_	Aspect=Prog|Mood=Ind|Number[abs]=Plur|Number[erg]=Sing|Person[abs]=3|Person[erg]=3	0	root	_	_
9	.	.	PUNCT	_	_	8	punct	_	_

~~~


