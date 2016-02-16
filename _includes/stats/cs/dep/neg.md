

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

352 nodes (0%) are attached to their parents as `neg`.

349 instances of `neg` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80397727272727.

The following 9 pairs of parts of speech are connected with `neg`: [cs-pos/NOUN]()-[cs-pos/PART]() (140; 40% instances), [cs-pos/ADV]()-[cs-pos/PART]() (76; 22% instances), [cs-pos/ADJ]()-[cs-pos/PART]() (66; 19% instances), [cs-pos/PRON]()-[cs-pos/PART]() (36; 10% instances), [cs-pos/VERB]()-[cs-pos/PART]() (16; 5% instances), [cs-pos/NUM]()-[cs-pos/PART]() (7; 2% instances), [cs-pos/PROPN]()-[cs-pos/PART]() (7; 2% instances), [cs-pos/CONJ]()-[cs-pos/PART]() (3; 1% instances), [cs-pos/DET]()-[cs-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 neg	color:blue
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
# visual-style 4 3 neg	color:blue
1	Rodina	rodina	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Negative=Pos|Number=Sing	5	nsubj	_	_
2	je	on	PRON	PPXP4--3-------	Case=Acc|Number=Plur|Person=3|PronType=Prs	6	dobj	_	LId=on-1|LGloss=(oni/ono)
3	ne	ne	PART	TT-------------	_	4	neg	_	_
4	vždy	vždy	ADV	Db-------------	_	5	advmod	_	_
5	dokáže	dokázat	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	podržet	podržet	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	5	xcomp	_	SpaceAfter=No
7	.	.	PUNCT	Z:-------------	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 neg	color:blue
1	Ne	ne	PART	TT-------------	_	2	neg	_	_
2	každý	každý	ADJ	AAMS1----1A----	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Negative=Pos|Number=Sing	3	nsubj	_	_
3	zmůže	zmoci	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	všechno	všechen	PRON	PLNS4----------	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	3	dobj	_	_
5	sám	sám	PRON	PLYS1----------	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	2	xcomp	_	SpaceAfter=No|LGloss=(samotný)
6	.	.	PUNCT	Z:-------------	_	3	punct	_	_

~~~


