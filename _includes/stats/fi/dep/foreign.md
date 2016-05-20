

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

93 nodes (0%) are attached to their parents as `foreign`.

93 instances of `foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.58064516129032.

The following 1 pairs of parts of speech are connected with `foreign`: [fi-pos/X]()-[fi-pos/X]() (93; 100% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 foreign	color:blue
1	DIY	DIY	X	Foreign	Foreign=Foreign	4	compound:nn	_	_
2	time-lapse	time-lapse	X	Foreign	Foreign=Foreign	1	foreign	_	_
3	dolly	dolly	X	Foreign	Foreign=Foreign	1	foreign	_	_
4	suunnitelmia	suunnitelma	NOUN	N	Case=Par|Number=Plur	0	root	_	_
5	(	(	PUNCT	Punct	_	6	punct	_	SpaceAfter=No
6	Arduino	Arduino	PROPN	N	Case=Nom|Number=Sing	4	nmod	_	SpaceAfter=No
7	)	)	PUNCT	Punct	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

7 nodes (0%) are attached to their parents as `foreign`.

7 instances of `foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `foreign`: [fi-pos/X]()-[fi-pos/X]() (6; 86% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (1; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 foreign	color:blue
1	Bien	bien	X	Unknown,Foreign	_	0	root	_	Alt=0_root|Missed-Rel=attr|Missed-SUBCAT=FOREIGN
2	sûr	sûr	X	Unknown,Foreign	_	1	foreign	_	Alt=1_foreign|Missed-SUBCAT=FOREIGN
3	.	.	PUNCT	Pun	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 foreign	color:blue
1	Teen	tehdä	VERB	V,Act,Ind,Pres,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	myös	myös	PART	Pcle	_	3	advmod	_	_
3	parodioita	parodia	NOUN	N,Pl,Par	Case=Par|Number=Plur	1	dobj	_	_
4	,	,	PUNCT	Pun	_	3	punct	_	_
5	kuten	kuten	ADV	Adv	_	6	mark	_	Alt=6_mark
6	Dementia	dementia	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	3	nmod	_	Alt=3_nmod
7	Senilis	senilis	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	6	foreign	_	Alt=6_foreign
8	.	.	PUNCT	Pun	_	7	punct	_	_

~~~


