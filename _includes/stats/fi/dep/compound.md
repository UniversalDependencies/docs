

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 2 language-specific subtypes of `compound`: [compound:nn](), [compound:prt]().

1154 nodes (1%) are attached to their parents as `compound`.

1153 instances of `compound` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.04766031195841.

The following 16 pairs of parts of speech are connected with `compound`: [fi-pos/NUM]()-[fi-pos/NOUN]() (302; 26% instances), [fi-pos/NUM]()-[fi-pos/NUM]() (246; 21% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (239; 21% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (141; 12% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (99; 9% instances), [fi-pos/PUNCT]()-[fi-pos/NUM]() (36; 3% instances), [fi-pos/NUM]()-[fi-pos/PUNCT]() (32; 3% instances), [fi-pos/PUNCT]()-[fi-pos/PUNCT]() (15; 1% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (10; 1% instances), [fi-pos/NOUN]()-[fi-pos/PUNCT]() (10; 1% instances), [fi-pos/PUNCT]()-[fi-pos/NOUN]() (10; 1% instances), [fi-pos/NUM]()-[fi-pos/SYM]() (6; 1% instances), [fi-pos/SYM]()-[fi-pos/NUM]() (4; 0% instances), [fi-pos/ADJ]()-[fi-pos/PUNCT]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Tehty	tehdä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
2	Brysselissä	Bryssel	PROPN	N	Case=Ine|Number=Sing	1	nmod	_	_
3	17	17	NUM	Num	NumType=Card	4	compound	_	_
4	päivänä	päivä	NOUN	N	Case=Ess|Number=Sing	5	compound	_	_
5	joulukuuta	joulu#kuu	NOUN	N	Case=Par|Number=Sing	6	compound	_	_
6	1996	1996	NUM	Num	NumType=Card	1	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	Uudelle	uusi	ADJ	A	Case=All|Degree=Pos|Number=Sing	2	amod	_	_
2	Saksalle	Saksa	PROPN	N	Case=All|Number=Sing	3	nmod	_	_
3	annettiin	antaa	VERB	V	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
4	110	110	NUM	Num	NumType=Card	5	compound	_	_
5	000	000	NUM	Num	NumType=Card	6	nummod	_	_
6	tonnin	tonni	NOUN	N	Case=Gen|Number=Sing	7	nmod:poss	_	_
7	kiintiö	kiintiö	NOUN	N	Case=Nom|Number=Sing	3	dobj	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Tilaisuus	tilaisuus	NOUN	N	Case=Nom|Number=Sing	2	nsubj	_	_
2	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	Saksan	Saksa	PROPN	N	Case=Gen|Number=Sing	4	nmod:poss	_	_
4	Kölnissä	Köln	PROPN	N	Case=Ine|Number=Sing	2	nmod	_	_
5	17.	17.	ADJ	Num	NumType=Ord	6	compound	_	_
6	elokuuta	elo#kuu	NOUN	N	Case=Par|Number=Sing	2	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	2	punct	_	_

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
7	sydämentykytyksiä	sydämentykytys	NOUN	N,Pl,Par	Case=Par|Number=Plur	5	dobj	_	_
8	seuratessaan	seurata	VERB	V,Act,InfE,Ine,Px3	Case=Ine|InfForm=2|Person[psor]=3|VerbForm=Inf|Voice=Act	5	advcl	_	_
9	puhelimitse	puhelimitse	ADV	Adv	_	8	advmod	_	_
10	texmex-kuningas	texmex-kuningas	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	11	compound:nn	_	Alt=compound:nn
11	Flaco	flaco	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	15	nmod	_	Alt=name
12	Jimenezin	jimenez	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	11	name	_	_
13	ja	ja	CONJ	Pcle,CC	_	11	cc	_	_
14	orkesterinsa	orkesteri	NOUN	N,Sg,Gen,Px3	Case=Gen|Number=Sing|Person[psor]=3	11	conj	_	_
15	matkaa	matka	NOUN	N,Sg,Par	Case=Par|Number=Sing	8	dobj	_	_
16	kohti	kohti	ADP	Adp	_	17	case	_	_
17	Ikaalisia	ikaalinen	PROPN	N,Prop,Pl,Par	Case=Par|Number=Plur	15	nmod	_	_
18	.	.	PUNCT	Pun	_	17	punct	_	_

~~~


