

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

3279 nodes (2%) are attached to their parents as `cop`.

3093 instances of `cop` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.23970722781336.

The following 10 pairs of parts of speech are connected with `cop`: [fi-pos/ADJ]()-[fi-pos/VERB]() (1337; 41% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (1301; 40% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (243; 7% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (132; 4% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (107; 3% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (80; 2% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (56; 2% instances), [fi-pos/SYM]()-[fi-pos/VERB]() (15; 0% instances), [fi-pos/ADP]()-[fi-pos/VERB]() (4; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (4; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cop	color:blue
1	On	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	kyllä	kyllä	ADV	Adv	_	3	advmod	_	_
3	kiva	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	_	_
5	kun	kun	SCONJ	C	_	7	mark	_	_
6	tuolla	tuolla	ADV	Adv	_	7	advmod	_	_
7	sai	saada	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj:cop	_	_
8	hipelöidä	hipelöidä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	kaikkea	kaikki	PRON	Pron	Case=Par|Number=Sing|PronType=Ind	8	dobj	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
11	:)	:)	SYM	Symb	_	3	discourse	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	Bagelit	bagel	NOUN	N	Case=Nom|Number=Plur	6	nsubj:cop	_	_
2	ja	ja	CONJ	C	_	1	cc	_	_
3	smoothiet	smoothie	NOUN	N	Case=Nom|Number=Plur	1	conj	6:nsubj:cop	_
4	olivat	olla	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
5	ihana	ihana	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	tapa	tapa	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
7	aloittaa	aloittaa	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	6	acl	_	_
8	aamu	aamu	NOUN	N	Case=Nom|Number=Sing	7	dobj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cop	color:blue
1	Yhdeksänkin	yhdeksän	NUM	Num	Case=Nom|Clitic=Kin|Number=Sing|NumType=Card	2	nummod	_	_
2	pinniä	pinni	NOUN	N	Case=Par|Number=Sing	4	nsubj:cop	_	_
3	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	paljon	paljon	ADV	Adv	_	0	root	_	SpaceAfter=No
5	.	.	PUNCT	Punct	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

3789 nodes (2%) are attached to their parents as `cop`.

3473 instances of `cop` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.0765373449459.

The following 11 pairs of parts of speech are connected with `cop`: [fi-pos/ADJ]()-[fi-pos/VERB]() (1875; 49% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (1462; 39% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (170; 4% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (166; 4% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (62; 2% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (34; 1% instances), [fi-pos/X]()-[fi-pos/VERB]() (7; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (4; 0% instances), [fi-pos/INTJ]()-[fi-pos/VERB]() (4; 0% instances), [fi-pos/PART]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (2; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 cop	color:blue
1	ei	ei	VERB	V,Neg,Act,Sg3	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	neg	_	_
2	voi	voida	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	ajatellakhaa	ajatella	VERB	V,Act,InfA,Lat,Kaan	Case=Lat|Clitic=Kaan|InfForm=1|Style=Coll|VerbForm=Inf|Voice=Act	0	root	_	_
4	varhmaan	varmaan	PART	Pcle	Style=Coll	3	advmod	_	_
5	että	että	SCONJ	Pcle,CS	_	9	mark	_	_
6	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	9	nsubj:cop	_	_
7	ikinä	ikinä	ADV	Adv	_	9	advmod	_	_
8	olis	olla	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|Style=Coll|VerbForm=Fin|Voice=Act	9	cop	_	_
9	vakinaisia	vakinainen	ADJ	A,Pl,Par	Case=Par|Number=Plur	3	ccomp	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 cop	color:blue
1	noo	noo	INTJ	Pcle,Interj	_	6	discourse	_	Alt=6_discourse
2	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	6	nsubj:cop	_	_
3	o	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
4	jottais	jokin	DET	Pron,Qnt,Sg,Par	Case=Par|Number=Sing|PronType=Ind|Style=Coll	6	det	_	_
5	semssi	semmoinen	DET	A,Dem,Pl,Par	Case=Par|Number=Plur|PronType=Dem|Style=Coll	6	amod	_	Alt=DET
6	sukulaissi	sukulainen	NOUN	N,Pl,Par	Case=Par|Number=Plur|Style=Coll	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 cop	color:blue
1	Sipuli	sipuli	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	6	nsubj:cop	_	_
2	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
3	täällä	täällä	ADV	Adv,Dem	PronType=Dem	6	advmod	_	_
4	aina	aina	ADV	Adv	_	6	advmod	_	_
5	voissa	voi	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	6	nmod	_	_
6	paistettua	paistaa	VERB	V,Pass,PcpNut,Sg,Par	Case=Par|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


