

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

494 nodes (0%) are attached to their parents as `mwe`.

494 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.01214574898785.

The following 29 pairs of parts of speech are connected with `mwe`: [fi-pos/ADV]()-[fi-pos/ADV]() (289; 59% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (70; 14% instances), [fi-pos/ADV]()-[fi-pos/SCONJ]() (23; 5% instances), [fi-pos/INTJ]()-[fi-pos/INTJ]() (20; 4% instances), [fi-pos/CONJ]()-[fi-pos/ADV]() (13; 3% instances), [fi-pos/ADV]()-[fi-pos/ADP]() (12; 2% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (10; 2% instances), [fi-pos/PRON]()-[fi-pos/SCONJ]() (6; 1% instances), [fi-pos/ADV]()-[fi-pos/CONJ]() (5; 1% instances), [fi-pos/ADV]()-[fi-pos/INTJ]() (5; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (5; 1% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (4; 1% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (4; 1% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (3; 1% instances), [fi-pos/CONJ]()-[fi-pos/CONJ]() (3; 1% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (3; 1% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/INTJ]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/SCONJ]()-[fi-pos/ADV]() (2; 0% instances), [fi-pos/SCONJ]()-[fi-pos/SCONJ]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADP]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/INTJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mwe	color:blue
1	Shieldit	Shield	PROPN	N	Case=Nom|Number=Plur	2	nsubj	_	_
2	kiinnittyvät	kiinnittyä	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	Arduinoon	Arduino	PROPN	N	Case=Ill|Number=Sing	2	nmod	_	_
4	näin	näin	ADV	Adv	_	2	advmod	_	_
5	ikään	ikään	ADV	Adv	_	4	mwe	_	SpaceAfter=No
6	.	.	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mwe	color:blue
1	´	´	PUNCT	Punct	_	2	punct	_	_
2	kenelle	kuka	PRON	Pron	Case=All|Number=Sing|PronType=Int	0	root	_	_
3	hyvänsä	hyvänsä	ADV	Adv	_	2	mwe	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	8	punct	_	_
5	joka	joka	PRON	Pron	Case=Nom|Number=Sing|PronType=Rel	8	nsubj	_	_
6	ei	ei	VERB	V	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	neg	_	_
7	ole	olla	AUX	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	rohjennut	rohjeta	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	2	acl:relcl	_	_
9	´	´	PUNCT	Punct	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	Entä	entä	ADV	Adv	_	5	advmod	_	_
2	jos	jos	SCONJ	C	_	1	mwe	_	_
3	minä	minä	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
4	en	ei	VERB	V	Negative=Neg|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	5	neg	_	_
5	kuolekaan	kuolla	VERB	V	Clitic=Kaan|Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
6	?	?	PUNCT	Punct	_	5	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

545 nodes (0%) are attached to their parents as `mwe`.

545 instances of `mwe` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.10275229357798.

The following 48 pairs of parts of speech are connected with `mwe`: [fi-pos/ADV]()-[fi-pos/SCONJ]() (157; 29% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (35; 6% instances), [fi-pos/PART]()-[fi-pos/PART]() (35; 6% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (33; 6% instances), [fi-pos/PART]()-[fi-pos/SCONJ]() (33; 6% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (24; 4% instances), [fi-pos/PRON]()-[fi-pos/SCONJ]() (24; 4% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (19; 3% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (19; 3% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (17; 3% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (15; 3% instances), [fi-pos/PART]()-[fi-pos/ADV]() (14; 3% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (12; 2% instances), [fi-pos/ADV]()-[fi-pos/PART]() (10; 2% instances), [fi-pos/VERB]()-[fi-pos/SCONJ]() (9; 2% instances), [fi-pos/ADP]()-[fi-pos/PRON]() (8; 1% instances), [fi-pos/NOUN]()-[fi-pos/CONJ]() (7; 1% instances), [fi-pos/SCONJ]()-[fi-pos/PART]() (7; 1% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (6; 1% instances), [fi-pos/ADP]()-[fi-pos/DET]() (5; 1% instances), [fi-pos/NOUN]()-[fi-pos/PART]() (5; 1% instances), [fi-pos/SCONJ]()-[fi-pos/ADV]() (5; 1% instances), [fi-pos/PART]()-[fi-pos/CONJ]() (4; 1% instances), [fi-pos/PRON]()-[fi-pos/DET]() (4; 1% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (3; 1% instances), [fi-pos/INTJ]()-[fi-pos/NOUN]() (3; 1% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (3; 1% instances), [fi-pos/ADV]()-[fi-pos/CONJ]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/PART]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/PART]() (2; 0% instances), [fi-pos/SCONJ]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/PART]() (1; 0% instances), [fi-pos/ADP]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/ADP]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/PART]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/CONJ]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PART]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADP]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 mwe	color:blue
1	viini	viini	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	6	nsubj:cop	_	_
2	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
3	enemmän	enemmän	ADV	Adv,Cmp	Degree=Cmp	5	dep	_	_
4	kuin	kuin	SCONJ	Pcle,CS	_	3	mwe	_	Missed-Rel=attr
5	hintansa	hinta	NOUN	N,Sg,Gen,Px3	Case=Gen|Number=Sing|Person[psor]=3	6	nmod	_	_
6	arvoinen	arvoinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 mwe	color:blue
1	Olin	olla	VERB	V,Act,Ind,Past,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	_	_
2	pelastettu	pelastaa	VERB	V,Pass,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
3	,	,	PUNCT	Pun	_	2	punct	_	_
4	sen	sen	PART	Pcle	_	6	advmod	_	_
5	kun	kun	PART	Pcle	_	4	mwe	_	_
6	seurasin	seurata	VERB	V,Act,Ind,Past,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
7	rekkojen	rekka	NOUN	N,Pl,Gen	Case=Gen|Number=Plur	8	nmod	_	_
8	perävaloja	perävalo	NOUN	N,Pl,Par	Case=Par|Number=Plur	6	dobj	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 mwe	color:blue
1	yötä	yö	NOUN	N,Sg,Par	Case=Par|Number=Sing	0	root	_	_
2	päivää	päivä	NOUN	N,Sg,Par	Case=Par|Number=Sing	1	mwe	_	_

~~~


