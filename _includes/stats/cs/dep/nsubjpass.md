

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Czech)

This relation is universal.

4257 nodes (0%) are attached to their parents as `nsubjpass`.

2971 instances of `nsubjpass` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.8651632605121.

The following 6 pairs of parts of speech are connected with `nsubjpass`: [cs-pos/VERB]()-[cs-pos/NOUN]() (3298; 77% instances), [cs-pos/VERB]()-[cs-pos/PRON]() (559; 13% instances), [cs-pos/VERB]()-[cs-pos/PROPN]() (278; 7% instances), [cs-pos/VERB]()-[cs-pos/NUM]() (58; 1% instances), [cs-pos/VERB]()-[cs-pos/ADJ]() (32; 1% instances), [cs-pos/VERB]()-[cs-pos/ADV]() (32; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubjpass	color:blue
1	Rozdíl	rozdíl	NOUN	NNIS1-----A----	Animacy=Inan|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	6	nsubjpass	_	_
2	do	do	ADP	RR--2----------	AdpType=Prep|Case=Gen	4	case	_	LId=do-1
3	regulované	regulovaný	ADJ	AAFS2----1A----	Case=Gen|Degree=Pos|Gender=Fem|Negative=Pos|Number=Sing	4	amod	_	LDeriv=regulovat
4	ceny	cena	NOUN	NNFS2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Sing	1	nmod	_	LId=cena-1|LGloss=(v_penězích,_naturální,_nevyčíslitelná,...)
5	byl	být	AUX	VpYS---XR-AA---	Gender=Masc|Negative=Pos|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	6	auxpass	_	_
6	hrazen	hradit	VERB	VsYS---XX-AP---	Aspect=Imp|Gender=Masc|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	_
7	z	z	ADP	RR--2----------	AdpType=Prep|Case=Gen	8	case	_	LId=z-1
8	dotací	dotace	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Z:-------------	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubjpass	color:blue
1	Proto	proto	CONJ	J^-------------	_	2	cc	_	LId=proto-1|LGloss=(proto;_a_proto,_ale_proto,...)
2	musí	muset	VERB	VB-S---3P-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	odběratel	odběratel	NOUN	NNMS1-----A----	Animacy=Anim|Case=Nom|Gender=Masc|Negative=Pos|Number=Sing	2	nsubj	_	_
4	platit	platit	VERB	Vf--------A----	Negative=Pos|VerbForm=Inf	2	xcomp	_	_
5	tolik	tolik	PRON	Ca--4----------	Case=Acc|NumType=Card|PronType=Dem,Ind	4	dobj	_	SpaceAfter=No|LId=tolik-1
6	,	,	PUNCT	Z:-------------	_	9	punct	_	_
7	kolik	kolik	PRON	C?--1----------	Case=Nom|NumType=Card|PronType=Int,Rel	9	nsubjpass	_	_
8	bude	být	AUX	VB-S---3F-AA---	Mood=Ind|Negative=Pos|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	9	auxpass	_	_
9	stanoveno	stanovit	VERB	VsNS---XX-AP---	Aspect=Perf|Gender=Neut|Negative=Pos|Number=Sing|VerbForm=Part|Voice=Pass	5	acl	_	SpaceAfter=No|LGloss=(určit)
10	.	.	PUNCT	Z:-------------	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubjpass	color:blue
1	Saganová	Saganová	PROPN	NNFS1-----A----	Case=Nom|Gender=Fem|NameType=Sur|Negative=Pos|Number=Sing	2	nsubjpass	_	_
2	odsouzena	odsoudit	VERB	VsQW---XX-AP---	Gender=Fem,Neut|Negative=Pos|Number=Plur,Sing|VerbForm=Part|Voice=Pass	0	root	_	_
3	za	za	ADP	RR--4----------	AdpType=Prep|Case=Acc	4	case	_	LId=za-1
4	používání	používání	NOUN	NNNS4-----A----	Case=Acc|Gender=Neut|Negative=Pos|Number=Sing	2	nmod	_	LDeriv=použít
5	drog	droga	NOUN	NNFP2-----A----	Case=Gen|Gender=Fem|Negative=Pos|Number=Plur	4	nmod	_	_

~~~


