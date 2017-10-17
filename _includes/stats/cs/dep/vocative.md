

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

69 nodes (0%) are attached to their parents as `vocative`.

37 instances of `vocative` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.57971014492754.

The following 10 pairs of parts of speech are connected with `vocative`: [cs-pos/VERB]()-[cs-pos/NOUN]() (43; 62% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (9; 13% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (6; 9% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (3; 4% instances), [cs-pos/NOUN]()-[cs-pos/PROPN]() (3; 4% instances), [cs-pos/CCONJ]()-[cs-pos/NOUN]() (1; 1% instances), [cs-pos/DET]()-[cs-pos/NOUN]() (1; 1% instances), [cs-pos/INTJ]()-[cs-pos/PROPN]() (1; 1% instances), [cs-pos/NUM]()-[cs-pos/PROPN]() (1; 1% instances), [cs-pos/PART]()-[cs-pos/PROPN]() (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 vocative	color:blue
1	Občane	občan	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	3	vocative	_	SpaceAfter=No
2	,	,	PUNCT	Z:-------------	_	3	punct	_	_
3	chceš	chtít	VERB	VB-S---2P-AA---	Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	dýchat	dýchat	VERB	Vf--------A----	Aspect=Imp|Polarity=Pos|VerbForm=Inf	3	xcomp	_	_
5	čistý	čistý	ADJ	AAIS4----1A----	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	6	amod	_	_
6	vzduch	vzduch	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	4	obj	_	_
7	a	a	CCONJ	J^-------------	_	8	cc	_	LId=a-1
8	mít	mít	VERB	Vf--------A----	Polarity=Pos|VerbForm=Inf	4	conj	_	_
9	také	také	ADV	Db-------------	_	8	advmod	_	LGloss=(rovněž)
10	teplo	teplo	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos	8	obj	_	SpaceAfter=No|LId=teplo-1
11	?	?	PUNCT	Z:-------------	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 vocative	color:blue
1	Svatý	svatý	ADJ	AAMS5----1A----	Animacy=Anim|Case=Voc|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos	2	amod	_	_
2	Petře	Petr	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	10	vocative	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	10	punct	_	_
4	já	já	PRON	PP-S1--1-------	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	_
5	jsem	být	AUX	VB-S---1P-AA---	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
6	ale	ale	CCONJ	J^-------------	_	10	cc	_	_
7	bránu	brána	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	10	obj	_	_
8	Užhorodu	Užhorod	PROPN	NNIS2-----A----	Animacy=Inan|Case=Gen|Gender=Masc|NameType=Geo|Number=Sing|Polarity=Pos	7	nmod	_	_
9	nikdy	nikdy	ADV	Db-------------	PronType=Neg	10	advmod	_	_
10	neopustil	opustit	VERB	VpYS---XR-NA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Neg|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 vocative	color:blue
1	Skleněná	skleněný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	2	amod	_	_
2	louka	louka	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
3	:	:	PUNCT	Z:-------------	_	4	punct	_	_
4	Máj	máj	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos	2	appos	_	_
5	(	(	PUNCT	Z:-------------	_	7	punct	_	SpaceAfter=No
6	Ó	ó	INTJ	II-------------	_	7	dep	_	LId=ó-1
7	králi	král	NOUN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing|Polarity=Pos	2	vocative	_	SpaceAfter=No
8	,	,	PUNCT	Z:-------------	_	10	punct	_	_
9	dobrou	dobrý	ADJ	AAFS4----1A----	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	10	amod	_	_
10	noc	noc	NOUN	NNFS4-----A----	Case=Acc|Gender=Fem|Number=Sing|Polarity=Pos	7	conj	_	SpaceAfter=No
11	!	!	PUNCT	Z:-------------	_	7	punct	_	SpaceAfter=No
12	)	)	PUNCT	Z:-------------	_	7	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech-CAC)

This relation is universal.

50 nodes (0%) are attached to their parents as `vocative`.

27 instances of `vocative` (54%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.34.

The following 7 pairs of parts of speech are connected with `vocative`: [cs-pos/VERB]()-[cs-pos/NOUN]() (33; 66% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (7; 14% instances), [cs-pos/ADJ]()-[cs-pos/NOUN]() (4; 8% instances), [cs-pos/NOUN]()-[cs-pos/NOUN]() (3; 6% instances), [cs-pos/ADV]()-[cs-pos/NOUN]() (1; 2% instances), [cs-pos/PRON]()-[cs-pos/PROPN]() (1; 2% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 vocative	color:blue
1	Co	co	PRON	PQ--4----------	Animacy=Inan|Case=Acc|PronType=Int,Rel	2	obj	_	LId=co-1
2	říkáte	říkat	VERB	VB-P---2P-AA---	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	6	punct	_	_
4	soudruzi	soudruh	NOUN	NNMP5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|Number=Plur|Polarity=Pos	2	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	6	punct	_	_
6	je	být	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
7	to	ten	DET	PDNS1----------	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	6	nsubj	_	_
8	tak	tak	ADV	Db-------------	PronType=Dem	6	advmod	_	SpaceAfter=No|LId=tak-3
9	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 vocative	color:blue
1	"	"	PUNCT	Z:-------------	_	7	punct	_	_
2	Ladislave	Ladislav	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Number=Sing|Polarity=Pos	7	vocative	_	_
3	Falto	Falta	PROPN	NNMS5-----A----	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Sur|Number=Sing|Polarity=Pos	2	flat	_	SpaceAfter=No
4	,	,	PUNCT	Z:-------------	_	7	punct	_	_
5	už	už	ADV	Db-------------	_	7	advmod	_	_
6	jste	být	AUX	VB-P---2P-AA---	Mood=Ind|Number=Plur|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	sbalil	sbalit	VERB	VpYS---XR-AA---	Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
8	kufr	kufr	NOUN	NNIS4-----A----	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|Polarity=Pos	7	obj	_	SpaceAfter=No
9	?	?	PUNCT	Z:-------------	_	7	punct	_	_
10	"	"	PUNCT	Z:-------------	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 vocative	color:blue
1	Je	být	AUX	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
2	krásná	krásný	ADJ	AAFS1----1A----	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	0	root	_	SpaceAfter=No
3	,	,	PUNCT	Z:-------------	_	8	punct	_	_
4	děvenko	děvenka	NOUN	NNFS5-----A----	Case=Voc|Gender=Fem|Number=Sing|Polarity=Pos	2	vocative	_	SpaceAfter=No
5	,	,	PUNCT	Z:-------------	_	8	punct	_	_
6	máma	máma	NOUN	NNFS1-----A----	Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos	8	nsubj	_	_
7	ji	on	PRON	PPFS4--3-------	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	má	mít	VERB	VB-S---3P-AA---	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
9	taky	také	ADV	Db-------------	_	8	advmod	_	LGloss=(rovněž)
10	ráda	rád	ADJ	ACQW------A----	Gender=Fem,Neut|Number=Plur,Sing|Polarity=Pos|Variant=Short	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


