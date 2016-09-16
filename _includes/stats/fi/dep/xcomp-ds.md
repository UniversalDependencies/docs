

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [xcomp]().

971 nodes (1%) are attached to their parents as `xcomp:ds`.

925 instances of `xcomp:ds` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.20391349124614.

The following 10 pairs of parts of speech are connected with `xcomp:ds`: [fi-pos/VERB]()-[fi-pos/VERB]() (549; 57% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (184; 19% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (136; 14% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (86; 9% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (6; 1% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (4; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp:ds	color:blue
1	Tutkimuskeskuksen	tutkimus#keskus	NOUN	N	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	siivoojalle	siivooja	NOUN	N	Case=All|Number=Sing	4	nmod	_	_
3	ei	ei	VERB	V	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	neg	_	_
4	kuulu	kuulua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	tiskata	tiskata	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	xcomp:ds	_	_
6	astioita	astia	NOUN	N	Case=Par|Number=Plur	5	dobj	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp:ds	color:blue
1	Minttu	Minttu	PROPN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	muuten	muuten	ADV	Adv	_	3	advmod	_	_
3	väitti	väittää	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	aika	aika	ADV	Adv	_	5	advmod	_	_
5	hartaasti	hartaasti	ADV	Adv	_	3	advmod	_	_
6	tätä	tämä	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	7	det	_	_
7	paitaa	paita	NOUN	N	Case=Par|Number=Sing	3	dobj	_	_
8	hameeksi	hame	NOUN	N	Case=Tra|Number=Sing	3	xcomp:ds	_	SpaceAfter=No
9	!	!	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp:ds	color:blue
1	−	−	PUNCT	Punct	_	4	punct	_	_
2	Tämä	tämä	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	5	dobj	_	_
3	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	helppo	helppo	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
5	ymmärtää	ymmärtää	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	4	xcomp:ds	_	_
6	oppimisprosessin	oppia#prosessi	NOUN	N	Case=Gen|Number=Sing	5	nmod	_	_
7	kautta	kautta	ADP	Adp	AdpType=Post	6	case	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is a language-specific subtype of [xcomp]().

368 nodes (0%) are attached to their parents as `xcomp:ds`.

366 instances of `xcomp:ds` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66847826086957.

The following 4 pairs of parts of speech are connected with `xcomp:ds`: [fi-pos/VERB]()-[fi-pos/VERB]() (165; 45% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (117; 32% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (84; 23% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (2; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 xcomp:ds	color:blue
1	Pahoinvointi	pahoinvointi	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	humahti	humahtaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	ylitse	ylitse	ADV	Adv	_	2	advmod	_	_
4	,	,	PUNCT	Pun	_	3	punct	_	_
5	laittoi	laittaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
6	nieleskelemään	nieleskellä	VERB	V,Act,InfMa,Ill	Case=Ill|InfForm=3|VerbForm=Inf|Voice=Act	5	xcomp:ds	_	Alt=xcomp:ds
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp:ds	color:blue
1	pankkitoiminnassa	pankkitoiminta	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	3	nmod	_	Alt=3_nmod
2	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	Alt=3_cop
3	tärkeätä	tärkeä	ADJ	A,Sg,Par	Case=Par|Number=Sing	0	root	_	Alt=0_root|FTB-Rel=modal
4	tavata	tavata	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	3	xcomp:ds	_	Alt=3_xcomp:ds
5	kasvotusten	kasvotusten	ADV	Adv	_	4	advmod	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp:ds	color:blue
1	Olisi	olla	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	2	cop	_	Alt=2_cop
2	aika	aika	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	Alt=0_root|FTB-Rel=modal
3	keittää	keittää	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	2	xcomp:ds	_	Alt=2_xcomp:ds
4	kahvit	kahvi	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	3	dobj	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


