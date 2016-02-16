

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

13581 nodes (8%) are attached to their parents as `root`.

13581 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.2401884986378.

The following 14 pairs of parts of speech are connected with `root`: [fi-pos/ROOT]()-[fi-pos/VERB]() (10257; 76% instances), [fi-pos/ROOT]()-[fi-pos/NOUN]() (1876; 14% instances), [fi-pos/ROOT]()-[fi-pos/ADJ]() (867; 6% instances), [fi-pos/ROOT]()-[fi-pos/ADV]() (186; 1% instances), [fi-pos/ROOT]()-[fi-pos/PROPN]() (166; 1% instances), [fi-pos/ROOT]()-[fi-pos/PRON]() (114; 1% instances), [fi-pos/ROOT]()-[fi-pos/NUM]() (46; 0% instances), [fi-pos/ROOT]()-[fi-pos/INTJ]() (27; 0% instances), [fi-pos/ROOT]()-[fi-pos/X]() (14; 0% instances), [fi-pos/ROOT]()-[fi-pos/SYM]() (11; 0% instances), [fi-pos/ROOT]()-[fi-pos/AUX]() (8; 0% instances), [fi-pos/ROOT]()-[fi-pos/ADP]() (4; 0% instances), [fi-pos/ROOT]()-[fi-pos/CONJ]() (3; 0% instances), [fi-pos/ROOT]()-[fi-pos/SCONJ]() (2; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 9 root	color:blue
1	Eräs	eräs	PRON	Pron	Case=Nom|Number=Sing|PronType=Ind	9	nsubj:cop	_	_
2	suosikkijutuistani	suosikki#juttu	NOUN	N	Case=Ela|Number=Plur|Number[psor]=Sing|Person[psor]=1	1	nmod	_	_
3	oli	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	9	cop	_	_
4	tämä	tämä	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	9	det	_	_
5	vihreän	vihreä	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	8	amod	_	_
6	ja	ja	CONJ	C	_	5	cc	_	_
7	keltaisen	keltainen	ADJ	A	Case=Gen|Degree=Pos|Number=Sing	5	conj	8:amod	_
8	värinen	värinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	9	amod	_	_
9	kesämekko	kesä#mekko	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
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

18792 nodes (12%) are attached to their parents as `root`.

18792 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5240527884206.

The following 10 pairs of parts of speech are connected with `root`: [fi-pos/ROOT]()-[fi-pos/VERB]() (14302; 76% instances), [fi-pos/ROOT]()-[fi-pos/NOUN]() (2428; 13% instances), [fi-pos/ROOT]()-[fi-pos/ADJ]() (1484; 8% instances), [fi-pos/ROOT]()-[fi-pos/PROPN]() (171; 1% instances), [fi-pos/ROOT]()-[fi-pos/PRON]() (166; 1% instances), [fi-pos/ROOT]()-[fi-pos/ADV]() (132; 1% instances), [fi-pos/ROOT]()-[fi-pos/NUM]() (50; 0% instances), [fi-pos/ROOT]()-[fi-pos/INTJ]() (36; 0% instances), [fi-pos/ROOT]()-[fi-pos/X]() (15; 0% instances), [fi-pos/ROOT]()-[fi-pos/SCONJ]() (8; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	x:n	x	NOUN	N,Abbr,Sg,Gen	Abbr=Yes|Case=Gen|Number=Sing	3	nsubj	_	_
2	tarvii	tarvita	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	Style=Dialectal
3	toimia	toimia	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	nukahtamaisillaan	nukahtaa	VERB	V,Act,InfMaisilla,Px3	Person[psor]=3|VerbForm=Inf|Voice=Act	2	advcl	_	FTB1-InfForm=Maisilla
2	oleva	olla	VERB	V,Act,PcpVa,Sg,Nom	Case=Nom|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	3	amod	_	_
3	kuski	kuski	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Buckler	buckler	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	3	nsubj	_	_
2	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	cop	_	_
3	vaalea	vaalea	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
4	,	,	PUNCT	Pun	_	3	punct	_	FTB-rel=phrm
5	makeahko	makeahko	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	3	conj	_	_
6	,	,	PUNCT	Pun	_	3	punct	_	FTB-rel=phrm
7	lievästi	lievästi	ADV	Adv	_	8	advmod	_	_
8	vierremäinen	vierremäinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	3	conj	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


