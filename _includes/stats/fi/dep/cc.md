

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 1 language-specific subtypes of `cc`: [cc:preconj]().

7417 nodes (4%) are attached to their parents as `cc`.

7416 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.12538762302818.

The following 32 pairs of parts of speech are connected with `cc`: [fi-pos/NOUN]()-[fi-pos/CCONJ]() (3001; 40% instances), [fi-pos/VERB]()-[fi-pos/CCONJ]() (2618; 35% instances), [fi-pos/ADJ]()-[fi-pos/CCONJ]() (576; 8% instances), [fi-pos/PROPN]()-[fi-pos/CCONJ]() (543; 7% instances), [fi-pos/ADV]()-[fi-pos/CCONJ]() (152; 2% instances), [fi-pos/PRON]()-[fi-pos/CCONJ]() (144; 2% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (125; 2% instances), [fi-pos/NUM]()-[fi-pos/CCONJ]() (84; 1% instances), [fi-pos/CCONJ]()-[fi-pos/CCONJ]() (41; 1% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (40; 1% instances), [fi-pos/SYM]()-[fi-pos/CCONJ]() (12; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (11; 0% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (10; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (9; 0% instances), [fi-pos/X]()-[fi-pos/CCONJ]() (9; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (6; 0% instances), [fi-pos/ADP]()-[fi-pos/CCONJ]() (5; 0% instances), [fi-pos/AUX]()-[fi-pos/CCONJ]() (5; 0% instances), [fi-pos/PROPN]()-[fi-pos/SYM]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (4; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/X]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/CCONJ]() (1; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 cc	color:blue
1	Tässä	tämä	PRON	Pron	Case=Ine|Number=Sing|PronType=Dem	0	root	_	_
2	hieman	hieman	ADV	Adv	_	3	advmod	_	_
3	yleiskuvaa	yleis#kuva	NOUN	N	Case=Par|Number=Sing	1	nsubj:cop	_	_
4	showroomilta	showroom	NOUN	N	Case=Abl|Number=Sing	3	nmod	_	_
5	ja	ja	CCONJ	C	_	8	cc	_	_
6	lisää	lisää	ADV	Adv	_	8	advmod	_	_
7	tuttuja	tuttu	ADJ	A	Case=Par|Degree=Pos|Number=Plur	8	amod	_	_
8	naamoja	naama	NOUN	N	Case=Par|Number=Plur	3	conj	1:nsubj:cop	SpaceAfter=No
9	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 cc	color:blue
1	Ja	ja	CCONJ	C	_	3	cc	_	_
2	mitä	mikä	PRON	Pron	Case=Par|Number=Sing|PronType=Int	3	obj	_	_
3	kustantaa	kustantaa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	valmis	valmis	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	5	amod	_	_
5	dolly	dolly	X	Foreign	Foreign=Yes	3	nsubj	_	SpaceAfter=No
6	?	?	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	8	nsubj:cop	_	_
2	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	8	cop	_	_
3	puhdas	puhdas	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	8	amod	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	5	punct	_	_
5	koskematon	koskematon	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	conj	8:amod	_
6	ja	ja	CCONJ	C	_	7	cc	_	_
7	viaton	viaton	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	conj	8:amod	_
8	metsä	metsä	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	8	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

4222 nodes (3%) are attached to their parents as `cc`.

4192 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.00023685457129.

The following 13 pairs of parts of speech are connected with `cc`: [fi-pos/VERB]()-[fi-pos/CCONJ]() (1842; 44% instances), [fi-pos/NOUN]()-[fi-pos/CCONJ]() (1342; 32% instances), [fi-pos/ADJ]()-[fi-pos/CCONJ]() (442; 10% instances), [fi-pos/PROPN]()-[fi-pos/CCONJ]() (282; 7% instances), [fi-pos/ADV]()-[fi-pos/CCONJ]() (124; 3% instances), [fi-pos/PRON]()-[fi-pos/CCONJ]() (109; 3% instances), [fi-pos/NUM]()-[fi-pos/CCONJ]() (45; 1% instances), [fi-pos/ADP]()-[fi-pos/CCONJ]() (11; 0% instances), [fi-pos/PART]()-[fi-pos/CCONJ]() (10; 0% instances), [fi-pos/SCONJ]()-[fi-pos/CCONJ]() (8; 0% instances), [fi-pos/X]()-[fi-pos/CCONJ]() (4; 0% instances), [fi-pos/INTJ]()-[fi-pos/CCONJ]() (2; 0% instances), [fi-pos/X]()-[fi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 cc	color:blue
1	Riki	riki	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	3	nsubj	_	_
2	alkoi	alkaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	aux	_	_
3	kantaa	kantaa	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	0	root	_	_
4	laukkuja	laukku	NOUN	N,Pl,Par	Case=Par|Number=Plur	3	obj	_	_
5	hissiin	hissi	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	3	nmod	_	_
6	ja	ja	CCONJ	Pcle,CC	_	7	cc	_	_
7	mahdutti	mahduttaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	_
8	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	7	obj	_	_
9	autoonsa	auto	NOUN	N,Sg,Ill,Px3	Case=Ill|Number=Sing|Person[psor]=3	7	nmod	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc	color:blue
1	Juoppoja	juoppo	NOUN	N,Pl,Par	Case=Par|Number=Plur	0	root	_	_
2	ja	ja	CCONJ	Pcle,CC	_	4	cc	_	_
3	ajan	aika	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	4	nmod	_	_
4	tuhlareita	tuhlari	NOUN	N,Pl,Par	Case=Par|Number=Plur	1	conj	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 cc	color:blue
1	Duuman	duuma	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
2	kuohunta	kuohunta	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nsubj:cop	_	_
3	olisi	olla	AUX	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	cop	_	_
4	kiusallista	kiusallinen	ADJ	A,Sg,Par	Case=Par|Number=Sing	0	root	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	_
6	mutta	mutta	CCONJ	Pcle,CC	_	9	cc	_	_
7	ei	ei	AUX	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	9	cop	_	_
8	vielä	vielä	PART	Pcle	_	9	advmod	_	_
9	vaarallista	vaarallinen	ADJ	A,Sg,Par	Case=Par|Number=Sing	4	conj	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


