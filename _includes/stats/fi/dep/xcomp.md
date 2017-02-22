

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: [xcomp:ds]().

2121 nodes (1%) are attached to their parents as `xcomp`.

2007 instances of `xcomp` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63507779349364.

The following 16 pairs of parts of speech are connected with `xcomp`: [fi-pos/VERB]()-[fi-pos/VERB]() (1528; 72% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (368; 17% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (147; 7% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (19; 1% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (18; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (10; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (9; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (6; 0% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (5; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/AUX]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/PUNCT]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Lopulta	lopulta	ADV	Adv	_	2	advmod	_	_
2	saatiin	saada	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	halikuva	hali#kuva	NOUN	N	Case=Nom|Number=Sing	4	obj	_	_
4	otettua	ottaa	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Siitä	se	PRON	Pron	Case=Ela|Number=Sing|PronType=Dem	2	obl	_	_
2	tulee	tulla	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	vainoharhaiseksi	vaino#harhainen	ADJ	A	Case=Tra|Degree=Pos|Number=Sing	2	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 xcomp	color:blue
1	Eihän	ei	AUX	V	Clitic=Han|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
2	tässä	tämä	PRON	Pron	Case=Ine|Number=Sing|PronType=Dem	3	obl	_	_
3	ala	alkaa	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	kuin	kuin	ADV	Adv	_	6	advmod	_	_
5	kolme	kolme	NUM	Num	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	kuukautta	kuu#kausi	NOUN	N	Case=Par|Number=Sing	3	nsubj	8:nsubj:cop	_
7	ekasta	eka	ADJ	A	Case=Ela|Degree=Pos|Number=Sing|Style=Coll	8	nummod	_	_
8	matkasta	matka	NOUN	N	Case=Ela|Number=Sing	3	xcomp	_	_
9	olemaan	olla	AUX	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	8	cop	_	SpaceAfter=No
10	...	...	PUNCT	Punct	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: [xcomp:ds]().

1141 nodes (1%) are attached to their parents as `xcomp`.

1128 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.44609991235758.

The following 5 pairs of parts of speech are connected with `xcomp`: [fi-pos/VERB]()-[fi-pos/VERB]() (1114; 98% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (12; 1% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (12; 1% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 xcomp	color:blue
1	Ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	2	nsubj	_	_
2	meni	mennä	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	uimaa	uida	VERB	V,Act,InfMa,Ill	Case=Ill|InfForm=3|Style=Coll|VerbForm=Inf|Voice=Act	2	xcomp	_	Alt=xcomp

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 xcomp	color:blue
1	Lupaan	luvata	VERB	V,Act,Ind,Pres,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	olla	olla	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	1	ccomp	_	_
3	seuraavat	seuraava	ADJ	A,Pl,Nom	Case=Nom|Number=Plur	4	amod	_	_
4	25	25	NUM	Num,Card	NumType=Card	5	nummod	_	_
5	vuotta	vuosi	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	nmod	_	_
6	varovaisempi	varovainen	ADJ	A,Cmp,Sg,Nom	Case=Nom|Degree=Cmp|Number=Sing	1	xcomp	_	Alt=1_xcomp
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Mika	mika	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	luulee	luulla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	olevansa	olla	VERB	V,Act,PcpVa,Sg,Gen,Px3	Case=Gen|Number=Sing|PartForm=Pres|Person[psor]=3|VerbForm=Part|Voice=Act	2	ccomp	_	_
4	uhri	uhri	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	2	xcomp	_	Alt=2_xcomp
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


