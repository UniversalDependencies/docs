

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

2706 nodes (1%) are attached to their parents as `case`.

2334 instances of `case` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36437546193644.

The following 14 pairs of parts of speech are connected with `case`: [fi-pos/NOUN]()-[fi-pos/ADP]() (1956; 72% instances), [fi-pos/PRON]()-[fi-pos/ADP]() (394; 15% instances), [fi-pos/PROPN]()-[fi-pos/ADP]() (274; 10% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (24; 1% instances), [fi-pos/NUM]()-[fi-pos/ADP]() (23; 1% instances), [fi-pos/ADJ]()-[fi-pos/ADP]() (10; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (9; 0% instances), [fi-pos/PROPN]()-[fi-pos/ADV]() (5; 0% instances), [fi-pos/VERB]()-[fi-pos/ADP]() (4; 0% instances), [fi-pos/ADV]()-[fi-pos/ADP]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/SYM]()-[fi-pos/ADP]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 case	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Voi	voi	INTJ	Interj	_	3	discourse	_	_
2	helvetti	helvetti	INTJ	Interj	_	1	mwe	_	_
3	sun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs|Style=Coll	0	root	_	_
4	kanssas	kanssa	ADP	Adp	AdpType=Post|Number[psor]=Sing|Person[psor]=2|Style=Coll	3	case	_	SpaceAfter=No
5	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Sallan	Salla	PROPN	N	Case=Gen|Number=Sing	3	nmod	_	_
2	kanssa	kanssa	ADP	Adp	AdpType=Post	1	case	_	_
3	tuli	tulla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	iskettyä	iskeä	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	3	xcomp	_	_
5	silmät	silmä	NOUN	N	Case=Nom|Number=Plur	4	dobj	_	_
6	samaan	sama	PRON	Pron	Case=Ill|Number=Sing|PronType=Ind	7	det	_	_
7	turboneuleeseen	turbo#neule	NOUN	N	Case=Ill|Number=Sing	4	nmod	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

2688 nodes (2%) are attached to their parents as `case`.

2365 instances of `case` (88%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14471726190476.

The following 10 pairs of parts of speech are connected with `case`: [fi-pos/NOUN]()-[fi-pos/ADP]() (1926; 72% instances), [fi-pos/PRON]()-[fi-pos/ADP]() (392; 15% instances), [fi-pos/PROPN]()-[fi-pos/ADP]() (227; 8% instances), [fi-pos/NUM]()-[fi-pos/ADP]() (63; 2% instances), [fi-pos/ADJ]()-[fi-pos/ADP]() (42; 2% instances), [fi-pos/VERB]()-[fi-pos/ADP]() (12; 0% instances), [fi-pos/ADV]()-[fi-pos/ADP]() (11; 0% instances), [fi-pos/DET]()-[fi-pos/ADP]() (10; 0% instances), [fi-pos/ADP]()-[fi-pos/ADP]() (3; 0% instances), [fi-pos/X]()-[fi-pos/ADP]() (2; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Näen	nähdä	VERB	V,Act,Ind,Pres,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|Voice=Act	0	root	_	_
2	hyvin	hyvin	ADV	Adv	_	1	advmod	_	_
3	ilman	ilman	ADP	Adp	_	4	case	_	_
4	lasejakin	lasi	NOUN	N,Pl,Par,Kin	Case=Par|Clitic=Kin|Number=Plur	1	nmod	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Minun	minä	PRON	Pron,Pers,Sg1,Gen	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	nmod	_	_
2	puolestani	puolesta	ADP	Adp,PxSg1	Number[psor]=Sing|Person[psor]=1	1	case	_	_
3	saat	saada	VERB	V,Act,Ind,Pres,Sg2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	4	aux	_	_
4	mennä	mennä	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	0	root	_	_
5	jo	jo	ADV	Pcle	_	4	advmod	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 case	color:blue
1	Hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	tuli	tulla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
3	Maijan	maija	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
4	sijasta	sijasta	ADP	Adp	_	3	case	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


