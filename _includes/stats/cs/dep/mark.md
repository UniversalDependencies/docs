

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

27799 nodes (2%) are attached to their parents as `mark`.

27158 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.91794668872981.

The following 35 pairs of parts of speech are connected with `mark`: [cs-pos/VERB]()-[cs-pos/SCONJ]() (18788; 68% instances), [cs-pos/NOUN]()-[cs-pos/SCONJ]() (4596; 17% instances), [cs-pos/ADJ]()-[cs-pos/SCONJ]() (2165; 8% instances), [cs-pos/VERB]()-[cs-pos/PART]() (697; 3% instances), [cs-pos/PROPN]()-[cs-pos/SCONJ]() (323; 1% instances), [cs-pos/NUM]()-[cs-pos/SCONJ]() (300; 1% instances), [cs-pos/ADV]()-[cs-pos/SCONJ]() (288; 1% instances), [cs-pos/PRON]()-[cs-pos/SCONJ]() (221; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (104; 0% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (60; 0% instances), [cs-pos/PART]()-[cs-pos/SCONJ]() (45; 0% instances), [cs-pos/VERB]()-[cs-pos/ADP]() (43; 0% instances), [cs-pos/DET]()-[cs-pos/SCONJ]() (30; 0% instances), [cs-pos/NOUN]()-[cs-pos/PART]() (25; 0% instances), [cs-pos/NOUN]()-[cs-pos/ADV]() (24; 0% instances), [cs-pos/ADJ]()-[cs-pos/ADV]() (17; 0% instances), [cs-pos/VERB]()-[cs-pos/CONJ]() (15; 0% instances), [cs-pos/CONJ]()-[cs-pos/SCONJ]() (11; 0% instances), [cs-pos/VERB]()-[cs-pos/NOUN]() (11; 0% instances), [cs-pos/PART]()-[cs-pos/PART]() (5; 0% instances), [cs-pos/ADV]()-[cs-pos/PART]() (4; 0% instances), [cs-pos/NOUN]()-[cs-pos/CONJ]() (3; 0% instances), [cs-pos/NUM]()-[cs-pos/ADV]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/ADV]() (3; 0% instances), [cs-pos/PRON]()-[cs-pos/PART]() (3; 0% instances), [cs-pos/SYM]()-[cs-pos/PART]() (3; 0% instances), [cs-pos/ADJ]()-[cs-pos/CONJ]() (2; 0% instances), [cs-pos/NUM]()-[cs-pos/PART]() (2; 0% instances), [cs-pos/SYM]()-[cs-pos/SCONJ]() (2; 0% instances), [cs-pos/ADV]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/PROPN]()-[cs-pos/CONJ]() (1; 0% instances), [cs-pos/SCONJ]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/SYM]()-[cs-pos/ADV]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1; 0% instances), [cs-pos/VERB]()-[cs-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Zdůraznil	zdůraznit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	6	punct	_	_
3	že	že	SCONJ	J,-------------	_	6	mark	_	_
4	banka	banka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	6	nmod	_	_
5	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	6	aux	_	_
6	půjčovat	půjčovat	VERB	Vf--------A----	Aspect=Imp|Negative=Pos|VerbForm=Inf	1	ccomp	_	_
7	ne	ne	PART	TT-------------	_	8	neg	_	_
8	firmě	firma	NOUN	NNFS3-----A----	Case=Dat|Gender=Fem|Negative=Pos|Number=Sing	6	dobj	_	SpaceAfter=No
9	,	,	PUNCT	Z:-------------	_	8	punct	_	_
10	ale	ale	CONJ	J^-------------	_	8	cc	_	_
11	nám	já	PRON	PP-P3--1-------	Case=Dat|Number=Plur|Person=1|PronType=Prs	8	conj	_	_
12	osobně	osobně	ADV	Dg-------1A----	Degree=Pos|Negative=Pos	11	nmod	_	SpaceAfter=No|LDeriv=osobní
13	.	.	PUNCT	Z:-------------	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Rekreace	rekreace	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	0	root	_	_
2	spíš	spíše	ADV	Dg-------2A----	Degree=Cmp|Negative=Pos	1	dep	_	_
3	než	než	SCONJ	J,-------------	_	4	mark	_	LId=než-2
4	bydlení	bydlení	NOUN	NNNS1-----A----	Case=Nom|Gender=Neut|Negative=Pos|Number=Sing	1	advcl	_	LDeriv=bydlet

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 mark	color:blue
1	A	a	CONJ	J^-------------	_	2	cc	_	LId=a-1
2	řekněme	říci	VERB	Vi-P---1--A----	Aspect=Perf|Mood=Imp|Negative=Pos|Number=Plur|Person=1|VerbForm=Fin	0	root	_	_
3	rovnou	rovnou	ADV	Db-------------	_	2	advmod	_	SpaceAfter=No|LGloss=(hned,_najednou)
4	,	,	PUNCT	Z:-------------	_	10	punct	_	_
5	že	že	SCONJ	J,-------------	_	10	mark	_	_
6	chalupa	chalupa	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	10	nsubj	_	_
7	našeho	můj	DET	PSZS2-P1-------	Case=Gen|Gender=Masc,Neut|Number=Sing|Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	8	det	_	LGloss=(přivlast.)
8	čtenáře	čtenář	NOUN	NNMS2-----A----	Animacy=Anim|Case=Gen|Gender=Masc|Negative=Pos|Number=Sing	6	nmod	_	_
9	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	cop	_	_
10	problémová	problémový	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	2	ccomp	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


