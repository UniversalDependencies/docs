

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

12673 nodes (7%) are attached to their parents as `advmod`.

8865 instances of `advmod` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82608695652174.

The following 43 pairs of parts of speech are connected with `advmod`: [fi-pos/VERB]()-[fi-pos/ADV]() (7163; 57% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (2298; 18% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1284; 10% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (768; 6% instances), [fi-pos/NUM]()-[fi-pos/ADV]() (387; 3% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (256; 2% instances), [fi-pos/PROPN]()-[fi-pos/ADV]() (238; 2% instances), [fi-pos/SCONJ]()-[fi-pos/ADV]() (118; 1% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (21; 0% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (16; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (14; 0% instances), [fi-pos/NUM]()-[fi-pos/ADJ]() (12; 0% instances), [fi-pos/SYM]()-[fi-pos/ADV]() (11; 0% instances), [fi-pos/NOUN]()-[fi-pos/SCONJ]() (8; 0% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (7; 0% instances), [fi-pos/NOUN]()-[fi-pos/CONJ]() (6; 0% instances), [fi-pos/VERB]()-[fi-pos/ADP]() (6; 0% instances), [fi-pos/VERB]()-[fi-pos/CONJ]() (6; 0% instances), [fi-pos/VERB]()-[fi-pos/SCONJ]() (6; 0% instances), [fi-pos/X]()-[fi-pos/ADV]() (6; 0% instances), [fi-pos/AUX]()-[fi-pos/ADV]() (4; 0% instances), [fi-pos/PRON]()-[fi-pos/SCONJ]() (4; 0% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/SCONJ]() (2; 0% instances), [fi-pos/ADP]()-[fi-pos/ADV]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/SCONJ]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/AUX]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADP]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/SCONJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod	color:blue
1	Saavuin	saapua	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	siis	siis	ADV	Adv	_	1	advmod	_	_
3	kaupunkiin	kaupunki	NOUN	N	Case=Ill|Number=Sing	1	nmod	_	_
4	kameraryhmäni	kamera#ryhmä	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	1	nmod	_	_
5	kanssa	kanssa	ADP	Adp	AdpType=Post	4	case	_	_
6	jo	jo	ADV	Adv	_	8	advmod	_	_
7	ennen	ennen	ADP	Adp	AdpType=Prep	8	case	_	_
8	yhtätoista	yksi#toista	NUM	Num	Case=Par|Number=Sing|NumType=Card	1	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Tässä	tämä	PRON	Pron	Case=Ine|Number=Sing|PronType=Dem	3	nmod	8:nmod	_
2	hieman	hieman	ADV	Adv	_	3	advmod	_	_
3	yleiskuvaa	yleis#kuva	NOUN	N	Case=Par|Number=Sing	0	root	_	_
4	showroomilta	showroom	NOUN	N	Case=Abl|Number=Sing	3	nmod	_	_
5	ja	ja	CONJ	C	_	3	cc	_	_
6	lisää	lisää	ADV	Adv	_	8	advmod	_	_
7	tuttuja	tuttu	ADJ	A	Case=Par|Degree=Pos|Number=Plur	8	amod	_	_
8	naamoja	naama	NOUN	N	Case=Par|Number=Plur	3	conj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

14553 nodes (9%) are attached to their parents as `advmod`.

8936 instances of `advmod` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.72610458324744.

The following 47 pairs of parts of speech are connected with `advmod`: [fi-pos/VERB]()-[fi-pos/ADV]() (7129; 49% instances), [fi-pos/VERB]()-[fi-pos/PART]() (2324; 16% instances), [fi-pos/NOUN]()-[fi-pos/PART]() (834; 6% instances), [fi-pos/ADJ]()-[fi-pos/PART]() (820; 6% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (794; 5% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (715; 5% instances), [fi-pos/ADV]()-[fi-pos/PART]() (500; 3% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (326; 2% instances), [fi-pos/NUM]()-[fi-pos/PART]() (238; 2% instances), [fi-pos/PRON]()-[fi-pos/PART]() (169; 1% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (101; 1% instances), [fi-pos/NUM]()-[fi-pos/ADV]() (91; 1% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (89; 1% instances), [fi-pos/DET]()-[fi-pos/PART]() (85; 1% instances), [fi-pos/PROPN]()-[fi-pos/PART]() (81; 1% instances), [fi-pos/PROPN]()-[fi-pos/ADV]() (65; 0% instances), [fi-pos/ADP]()-[fi-pos/ADV]() (23; 0% instances), [fi-pos/DET]()-[fi-pos/ADV]() (23; 0% instances), [fi-pos/VERB]()-[fi-pos/SCONJ]() (20; 0% instances), [fi-pos/PART]()-[fi-pos/PART]() (18; 0% instances), [fi-pos/VERB]()-[fi-pos/CONJ]() (18; 0% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (13; 0% instances), [fi-pos/PART]()-[fi-pos/ADV]() (11; 0% instances), [fi-pos/ADP]()-[fi-pos/PART]() (10; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (7; 0% instances), [fi-pos/SCONJ]()-[fi-pos/PART]() (5; 0% instances), [fi-pos/X]()-[fi-pos/X]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/CONJ]() (4; 0% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (4; 0% instances), [fi-pos/X]()-[fi-pos/ADV]() (4; 0% instances), [fi-pos/INTJ]()-[fi-pos/PART]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/INTJ]()-[fi-pos/ADV]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/SCONJ]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/CONJ]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/SCONJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/X]() (1; 0% instances), [fi-pos/X]()-[fi-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	eivät	ei	VERB	V,Neg,Act,Pl3	Negative=Neg|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	3	neg	_	_
2	ennee	ennen	ADV	Adv	Style=Coll	3	advmod	_	_
3	keittäneet	keittää	VERB	V,Act,Ind,Past,Pl,ConNeg	Connegative=Yes|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 advmod	color:blue
1	vieläk	vielä	PART	Pcle	Style=Coll	2	advmod	_	_
2	kilometrin	kilometri	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	0	root	_	_

~~~


