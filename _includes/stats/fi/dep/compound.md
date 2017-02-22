

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 2 language-specific subtypes of `compound`: [compound:nn](), [compound:prt]().

225 nodes (0%) are attached to their parents as `compound`.

224 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.05777777777778.

The following 17 pairs of parts of speech are connected with `compound`: [fi-pos/NUM]()-[fi-pos/NUM]() (108; 48% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (39; 17% instances), [fi-pos/PUNCT]()-[fi-pos/NUM]() (24; 11% instances), [fi-pos/NUM]()-[fi-pos/PUNCT]() (16; 7% instances), [fi-pos/PUNCT]()-[fi-pos/PUNCT]() (9; 4% instances), [fi-pos/NOUN]()-[fi-pos/PUNCT]() (6; 3% instances), [fi-pos/NUM]()-[fi-pos/SYM]() (5; 2% instances), [fi-pos/PUNCT]()-[fi-pos/NOUN]() (5; 2% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (3; 1% instances), [fi-pos/SYM]()-[fi-pos/NUM]() (3; 1% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/PUNCT]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/SYM]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	Poron	poro	NOUN	N	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	lihaa	liha	NOUN	N	Case=Par|Number=Sing	5	obj	_	_
3	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux:pass	_	_
4	vuosittain	vuosittain	ADV	Adv	_	5	advmod	_	_
5	myytävänä	myydä	VERB	V	Case=Ess|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
6	noin	noin	ADV	Adv	_	8	advmod	_	_
7	kaksi	kaksi	NUM	Num	Case=Nom|Number=Sing|NumType=Card	8	compound	_	_
8	miljoonaa	miljoona	NUM	Num	Case=Par|Number=Sing|NumType=Card	9	nummod	_	_
9	kiloa	kilo	NOUN	N	Case=Par|Number=Sing	5	obl	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	vauvan	vauva	NOUN	N	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	paino	paino	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
3	:	:	PUNCT	Punct	_	6	punct	_	_
4	2	2	NUM	Num	NumType=Card	5	compound	_	_
5	kg	kg	NOUN	N	Abbr=Yes|Case=Par|Number=Sing	6	compound	_	_
6	315	315	NUM	Num	NumType=Card	2	appos	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 compound	color:blue
1	Kypsennä	kypsentää	VERB	V	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	uuniseitä	uuni#sei	NOUN	N	Case=Par|Number=Sing	1	obj	_	_
3	175	175	NUM	Num	NumType=Card	4	compound	_	_
4	-	-	PUNCT	Punct	_	5	compound	_	_
5	200	200	NUM	Num	NumType=Card	6	nummod	_	_
6	asteessa	aste	NOUN	N	Case=Ine|Number=Sing	1	obl	_	_
7	n.	n.	ADV	Adv	Abbr=Yes	8	advmod	_	_
8	30-40	30-40	NUM	Num	NumType=Card	9	nummod	_	_
9	minuttia	minuutti	NOUN	N	Case=Par|Number=Sing|Typo=Yes	1	obl	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.
There are 2 language-specific subtypes of `compound`: [compound:nn](), [compound:prt]().

1 nodes (0%) are attached to their parents as `compound`.

1 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `compound`: [fi-pos/NOUN]()-[fi-pos/VERB]() (1; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 compound	color:blue
1	Sata-Häme	sata-häme	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	soi	soida	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	compound	_	Alt=compound|Missed-Rel=attr
3	-tapahtuman	-tapahtuma	NOUN	N,Sg,Gen,Suffix	Case=Gen|Number=Sing	4	nmod	_	Missed-POSITION=SUFFIX
4	järjestäjät	järjestäjä	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	5	nsubj	_	_
5	saivat	saada	VERB	V,Act,Ind,Past,Pl3	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	ylimääräisiä	ylimääräinen	ADJ	A,Pl,Par	Case=Par|Number=Plur	7	amod	_	_
7	sydämentykytyksiä	sydämentykytys	NOUN	N,Pl,Par	Case=Par|Number=Plur	5	obj	_	_
8	seuratessaan	seurata	VERB	V,Act,InfE,Ine,Px3	Case=Ine|InfForm=2|Person[psor]=3|VerbForm=Inf|Voice=Act	5	advcl	_	_
9	puhelimitse	puhelimitse	ADV	Adv	_	8	advmod	_	_
10	texmex-kuningas	texmex-kuningas	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	11	compound:nn	_	Alt=compound:nn
11	Flaco	flaco	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	15	nmod	_	Alt=name
12	Jimenezin	jimenez	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	11	flat	_	_
13	ja	ja	CCONJ	Pcle,CC	_	14	cc	_	_
14	orkesterinsa	orkesteri	NOUN	N,Sg,Gen,Px3	Case=Gen|Number=Sing|Person[psor]=3	11	conj	_	_
15	matkaa	matka	NOUN	N,Sg,Par	Case=Par|Number=Sing	8	obj	_	_
16	kohti	kohti	ADP	Adp	_	17	case	_	_
17	Ikaalisia	ikaalinen	PROPN	N,Prop,Pl,Par	Case=Par|Number=Plur	15	nmod	_	_
18	.	.	PUNCT	Pun	_	17	punct	_	_

~~~


