

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

381 nodes (0%) are attached to their parents as `compound`.

356 instances of `compound` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67191601049869.

The following 4 pairs of parts of speech are connected with `compound`: [fi-pos/VERB]()-[fi-pos/ADV]() (192; 50% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (178; 47% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (8; 2% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (3; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	Nyt	nyt	ADV	Adv	_	3	advmod	_	_
2	täytyy	täytyä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	_
3	pukea	pukea	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	0	root	_	_
4	päälle	päälle	ADV	Adv	_	3	compound	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	Kilpailuun	kilpailu	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	2	nmod	_	_
2	otti	ottaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
3	osaa	osa	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	compound	_	_
4	kaikkiaan	kaikkiaan	ADV	Pcle	_	5	advmod	_	_
5	52	52	NUM	Num,Card	NumType=Card	6	nummod	_	_
6	ehdotusta	ehdotus	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	nsubj	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 compound	color:blue
1	On	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	aux	_	_
2	hyvä	hyvä	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	3	aux	_	Original-Deprel=modal
3	ottaa	ottaa	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	0	root	_	_
4	edeltä	edeltä	ADV	Adv	_	3	advmod	_	_
5	käsin	käsin	ADP	Adp	_	4	case	_	_
6	selvää	selvä	ADJ	A,Sg,Par	Case=Par|Number=Sing	3	compound	_	_
7	kustannuksista	kustannus	NOUN	N,Pl,Ela	Case=Ela|Number=Plur	3	nmod	_	_

~~~


