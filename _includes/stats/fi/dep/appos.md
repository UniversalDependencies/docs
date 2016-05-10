

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

1256 nodes (1%) are attached to their parents as `appos`.

1256 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.96815286624204.

The following 38 pairs of parts of speech are connected with `appos`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (375; 30% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (360; 29% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (80; 6% instances), [fi-pos/PROPN]()-[fi-pos/NUM]() (67; 5% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (55; 4% instances), [fi-pos/NUM]()-[fi-pos/NUM]() (46; 4% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (45; 4% instances), [fi-pos/NOUN]()-[fi-pos/X]() (30; 2% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (24; 2% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (21; 2% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (18; 1% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (16; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (14; 1% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (14; 1% instances), [fi-pos/PROPN]()-[fi-pos/X]() (13; 1% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (12; 1% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (10; 1% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (10; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (5; 0% instances), [fi-pos/SYM]()-[fi-pos/NOUN]() (5; 0% instances), [fi-pos/X]()-[fi-pos/NOUN]() (5; 0% instances), [fi-pos/X]()-[fi-pos/PROPN]() (4; 0% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (3; 0% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/X]()-[fi-pos/X]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/SYM]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/X]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/PUNCT]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	En	ei	VERB	V	Negative=Neg|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	0	root	_	_
2	kait	kait	ADV	Adv	_	1	advmod	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	5	punct	_	_
4	arvoisa	arvoisa	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	5	amod	_	_
5	poliisi	poliisi	NOUN	N	Case=Nom|Number=Sing	1	vocative	_	SpaceAfter=No
6	,	,	PUNCT	Punct	_	7	punct	_	_
7	konstaapeli	konstaapeli	NOUN	N	Case=Nom|Number=Sing	5	appos	_	_
8	kaiken	kaikki	PRON	Pron	Case=Gen|Number=Sing|PronType=Ind	9	dobj	_	_
9	nähnyt	nähdä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	7	acl	_	SpaceAfter=No
10	?	?	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	Helsingin	Helsinki	PROPN	N	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	yliopiston	yli#opisto	NOUN	N	Case=Gen|Number=Sing	3	nmod:poss	1:name	_
3	vararehtorin	vara#rehtori	NOUN	N	Case=Gen|Number=Sing	0	root	_	_
4	Arto	Arto	PROPN	N	Case=Nom|Number=Sing	3	appos	_	_
5	Mustajoen	Mustajoki	PROPN	N	Case=Gen|Number=Sing	4	name	_	_
6	mukaan	mukaan	ADP	Adp	AdpType=Post	3	case	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 appos	color:blue
1	Tienshinhanin	Tienshinhan	PROPN	N	Case=Gen|Number=Sing	3	nmod:poss	_	_
2	paras	hyvä	ADJ	A	Case=Nom|Degree=Sup|Number=Sing	3	amod	_	_
3	ystävä	ystävä	NOUN	N	Case=Nom|Number=Sing	5	nsubj:cop	_	_
4	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	Chiaotzu	Chiaotzu	PROPN	N	Case=Nom|Number=Sing	0	root	_	_
6	(	(	PUNCT	Punct	_	7	punct	_	SpaceAfter=No
7	Chaoz	Chaoz	PROPN	N	Case=Nom|Number=Sing	5	appos	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	7	punct	_	_
9	Chaozu	Chaozu	PROPN	N	Case=Nom|Number=Sing	7	conj	5:appos	SpaceAfter=No
10	)	)	PUNCT	Punct	_	7	punct	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

2 nodes (0%) are attached to their parents as `appos`.

2 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `appos`: [fi-pos/NOUN]()-[fi-pos/PROPN]() (2; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 appos	color:blue
1	Odotuksen	odotus	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	2	nmod	_	_
2	kohteena	kohde	NOUN	N,Sg,Ess	Case=Ess|Number=Sing	3	nmod	_	_
3	ovat	olla	VERB	V,Act,Ind,Pres,Pl3	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	elokuvatähdet	elokuvatähti	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	3	nsubj	_	_
5	Renny	renny	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	4	appos	_	Alt=name
6	Harlin	harlin	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	5	name	_	Alt=appos
7	,	,	PUNCT	Pun	_	5	punct	_	FTB-rel=phrm
8	Geena	geena	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	5	conj	_	Alt=name
9	Davis	davis	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	8	name	_	_
10	,	,	PUNCT	Pun	_	5	punct	_	FTB-rel=phrm
11	Bruce	bruce	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	5	conj	_	Alt=name
12	Willis	willis	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	11	name	_	_
13	ja	ja	CONJ	Pcle,CC	_	5	cc	_	_
14	Demi	demi	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	5	conj	_	Alt=name
15	Moore	moore	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	14	name	_	_

~~~


