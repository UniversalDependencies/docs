

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

2899 nodes (2%) are attached to their parents as `aux`.

2883 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.54398068299414.

The following 9 pairs of parts of speech are connected with `aux`: [fi-pos/VERB]()-[fi-pos/AUX]() (2690; 93% instances), [fi-pos/ADJ]()-[fi-pos/AUX]() (92; 3% instances), [fi-pos/NOUN]()-[fi-pos/AUX]() (77; 3% instances), [fi-pos/ADV]()-[fi-pos/AUX]() (26; 1% instances), [fi-pos/PRON]()-[fi-pos/AUX]() (7; 0% instances), [fi-pos/NUM]()-[fi-pos/AUX]() (4; 0% instances), [fi-pos/ADP]()-[fi-pos/AUX]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/AUX]() (1; 0% instances), [fi-pos/X]()-[fi-pos/AUX]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 aux	color:blue
1	Pitäisi	pitää	AUX	V	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	aux	_	_
2	kyllä	kyllä	ADV	Adv	_	3	advmod	_	_
3	kotonakin	kotona	ADV	Adv	Clitic=Kin	4	advmod	_	_
4	väsäillä	väsäillä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	0	root	_	_
5	smoothieita	smoothie	NOUN	N	Case=Par|Number=Plur	4	dobj	_	_
6	useammin	usein	ADV	Adv	Degree=Cmp	4	advmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Luovan	luova	NOUN	N	Case=Gen|Number=Sing	2	amod	_	_
2	tilanteen	tilanne	NOUN	N	Case=Gen|Number=Sing	5	nsubj:cop	_	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
4	oltava	olla	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Pass	5	cop	_	_
5	hauska	hauska	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 aux	color:blue
1	Halvimmat	halpa	ADJ	A	Case=Nom|Degree=Sup|Number=Plur	9	nsubj:cop	_	_
2	mitä	mikä	PRON	Pron	Case=Par|Number=Sing|PronType=Rel	4	dobj	_	_
3	olen	olla	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	nähnyt	nähdä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	1	acl:relcl	_	_
5	ovat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
6	olleet	olla	VERB	V	Case=Nom|Degree=Pos|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Act	9	cop	_	_
7	yli	yli	ADV	Adv	_	8	advmod	_	_
8	400	400	NUM	Num	NumType=Card	9	nummod	_	_
9	euroa	euro	NOUN	N	Case=Par|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	9	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

5111 nodes (3%) are attached to their parents as `aux`.

5053 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57875171199374.

The following 11 pairs of parts of speech are connected with `aux`: [fi-pos/VERB]()-[fi-pos/VERB]() (4618; 90% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (152; 3% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (118; 2% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (116; 2% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (85; 2% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (9; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (6; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	x:n	x	NOUN	N,Abbr,Sg,Gen	Abbr=Yes|Case=Gen|Number=Sing	3	nsubj	_	_
2	tarvii	tarvita	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	Style=Dialectal
3	toimia	toimia	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 aux	color:blue
1	Luovan	luova	ADJ	A,Sg,Gen	Case=Gen|Number=Sing	2	amod	_	_
2	tilanteen	tilanne	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	5	nsubj	_	_
3	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	5	aux	_	_
4	oltava	olla	VERB	V,Pass,PcpVa,Sg,Nom	Case=Nom|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Pass	5	cop	_	_
5	hauska	hauska	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	rakentamisessa	rakentaminen	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	4	nmod	_	_
2	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	aux	_	_
3	helppo	helppo	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	4	aux	_	Original-Deprel=modal
4	fuskata	fuskata	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	0	root	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	_
6	jos	jos	SCONJ	Pcle,CS	_	8	mark	_	_
7	joku	joku	PRON	Pron,Qnt,Sg,Nom	Case=Nom|Number=Sing	8	nsubj	_	Finnish-PronType=Qnt
8	haluaa	haluta	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	4	advcl	_	_
9	fuskata	fuskata	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	8	ccomp	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


