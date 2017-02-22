

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 3 language-specific subtypes of `nmod`: [nmod:gobj](), [nmod:gsubj](), [nmod:poss]().

4565 nodes (3%) are attached to their parents as `nmod`.

3491 instances of `nmod` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.57283680175246.

The following 55 pairs of parts of speech are connected with `nmod`: [fi-pos/NOUN]()-[fi-pos/NOUN]() (2754; 60% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (317; 7% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (288; 6% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (218; 5% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (149; 3% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (122; 3% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (112; 2% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (104; 2% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (59; 1% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (58; 1% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (46; 1% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (42; 1% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (37; 1% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (25; 1% instances), [fi-pos/PROPN]()-[fi-pos/NUM]() (21; 0% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (19; 0% instances), [fi-pos/X]()-[fi-pos/NOUN]() (19; 0% instances), [fi-pos/PROPN]()-[fi-pos/ADJ]() (18; 0% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (17; 0% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (15; 0% instances), [fi-pos/SYM]()-[fi-pos/NOUN]() (14; 0% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (12; 0% instances), [fi-pos/NUM]()-[fi-pos/PRON]() (8; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (7; 0% instances), [fi-pos/NUM]()-[fi-pos/PROPN]() (7; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (6; 0% instances), [fi-pos/NUM]()-[fi-pos/NUM]() (6; 0% instances), [fi-pos/PROPN]()-[fi-pos/SYM]() (6; 0% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (5; 0% instances), [fi-pos/CCONJ]()-[fi-pos/NOUN]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (5; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (5; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (3; 0% instances), [fi-pos/AUX]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (3; 0% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADP]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/SYM]() (2; 0% instances), [fi-pos/ADP]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/INTJ]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/SCONJ]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/SYM]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/X]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/SYM]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 nmod	color:blue
1	Suurkiitokset	suur#kiitos	NOUN	N	Case=Nom|Number=Plur	0	root	_	_
2	niistä	se	PRON	Pron	Case=Ela|Number=Plur|PronType=Dem	1	nmod	_	_
3	ja	ja	CCONJ	C	_	5	cc	_	_
4	malliston	mallisto	NOUN	N	Case=Gen|Number=Sing	5	nmod:gobj	_	_
5	esittelystä	esittely	NOUN	N	Case=Ela|Number=Sing	2	conj	1:nmod	_
6	H&M:lle	H&M	PROPN	N	Abbr=Yes|Case=All|Number=Sing	1	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod	color:blue
1	Nostan	nostaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	käteni	käsi	NOUN	N	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	1	obj	_	_
3	kasvoilleni	kasvot	NOUN	N	Case=All|Number=Plur|Number[psor]=Sing|Person[psor]=1	1	obl	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	8	punct	_	_
5	kuinka	kuinka	ADV	Adv	_	8	advmod	_	_
6	iho	iho	NOUN	N	Case=Nom|Number=Sing	8	nsubj:cop	_	_
7	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	märkänä	märkä	ADJ	A	Case=Ess|Degree=Pos|Number=Sing	1	conj	_	_
9	sateesta	sade	NOUN	N	Case=Ela|Number=Sing	8	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	1	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.
There are 3 language-specific subtypes of `nmod`: [nmod:gobj](), [nmod:gsubj](), [nmod:own]().

20089 nodes (14%) are attached to their parents as `nmod`.

10268 instances of `nmod` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.05196873911096.

The following 51 pairs of parts of speech are connected with `nmod`: [fi-pos/VERB]()-[fi-pos/NOUN]() (9109; 45% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (4290; 21% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (1478; 7% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (1389; 7% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1004; 5% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (627; 3% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (611; 3% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (227; 1% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (226; 1% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (204; 1% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (134; 1% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (126; 1% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (124; 1% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (97; 0% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (84; 0% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (83; 0% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (60; 0% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (26; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (23; 0% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (18; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (18; 0% instances), [fi-pos/ADP]()-[fi-pos/NOUN]() (17; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (16; 0% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (15; 0% instances), [fi-pos/X]()-[fi-pos/X]() (9; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (8; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (8; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (8; 0% instances), [fi-pos/VERB]()-[fi-pos/ADP]() (5; 0% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (4; 0% instances), [fi-pos/NUM]()-[fi-pos/PRON]() (4; 0% instances), [fi-pos/X]()-[fi-pos/PROPN]() (4; 0% instances), [fi-pos/DET]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/DET]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/X]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADP]() (2; 0% instances), [fi-pos/DET]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADP]() (2; 0% instances), [fi-pos/PROPN]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/X]() (2; 0% instances), [fi-pos/X]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/X]() (1; 0% instances), [fi-pos/ADP]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/PART]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/X]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod	color:blue
1	ei	ei	VERB	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	2	aux	_	_
2	ole	olla	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ennää	enää	PART	Pcle	Style=Coll	2	advmod	_	_
4	kymmenhiv	kymmenen	NUM	Num,Card,Pl,Ill	Case=Ill|Number=Plur|NumType=Card|Style=Coll	5	nummod	_	_
5	vuossin	vuosi	NOUN	N,Pl,Ill	Case=Ill|Number=Plur|Style=Coll	2	nmod	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod	color:blue
1	rakastu	rakastua	VERB	V,Act,Imprt,Sg2	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	_	_
2	sen	se	DET	Pron,Dem,Sg,Gen	Case=Gen|Number=Sing|PronType=Dem	3	det	_	_
3	talon	talo	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	4	nmod	_	_
4	tyttäree	tytär	NOUN	N,Sg,Ill	Case=Ill|Number=Sing|Style=Coll	1	nmod	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod	color:blue
1	Pirkanmaan	pirkanmaa	PROPN	N,Prop,Sg,Gen	Case=Gen|Number=Sing	3	nmod	_	_
2	tärkeät	tärkeä	ADJ	A,Pl,Nom	Case=Nom|Number=Plur	3	amod	_	_
3	asiat	asia	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	5	nsubj	_	_
4	eivät	ei	VERB	V,Neg,Act,Pl3	Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	5	aux	_	_
5	huimaa	huimata	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	uutuudellaan	uutuus	NOUN	N,Sg,Ade,Px3	Case=Ade|Number=Sing|Person[psor]=3	5	nmod	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


