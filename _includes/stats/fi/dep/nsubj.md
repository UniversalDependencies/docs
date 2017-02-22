

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:cop]().

10449 nodes (6%) are attached to their parents as `nsubj`.

9217 instances of `nsubj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.8825724949756.

The following 27 pairs of parts of speech are connected with `nsubj`: [fi-pos/VERB]()-[fi-pos/NOUN]() (5762; 55% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (2686; 26% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1821; 17% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (55; 1% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (31; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (18; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (17; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (15; 0% instances), [fi-pos/VERB]()-[fi-pos/X]() (10; 0% instances), [fi-pos/AUX]()-[fi-pos/NOUN]() (5; 0% instances), [fi-pos/AUX]()-[fi-pos/PRON]() (5; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (4; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/PUNCT]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/ADP]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/CCONJ]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/X]()-[fi-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
2	sisäinen	sisäinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	_	_
3	lapseni	lapsi	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	7:nsubj	_
4	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	6	aux	_	_
5	vaan	vaan	ADV	Adv	_	6	advmod	_	_
6	suostu	suostua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
7	katoamaan	kadota	VERB	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	“	“	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Mä	minä	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Style=Coll	3	nsubj	_	_
3	painan	painaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	_	_
5	mä	minä	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Style=Coll	6	nsubj	_	_
6	painan	painaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
7	!	!	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
8	”	”	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Minttu	Minttu	PROPN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	muuten	muuten	ADV	Adv	_	3	advmod	_	_
3	väitti	väittää	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	aika	aika	ADV	Adv	_	5	advmod	_	_
5	hartaasti	hartaasti	ADV	Adv	_	3	advmod	_	_
6	tätä	tämä	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	7	det	_	_
7	paitaa	paita	NOUN	N	Case=Par|Number=Sing	3	obj	_	_
8	hameeksi	hame	NOUN	N	Case=Tra|Number=Sing	3	xcomp:ds	_	SpaceAfter=No
9	!	!	PUNCT	Punct	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: [nsubj:cop]().

11714 nodes (8%) are attached to their parents as `nsubj`.

9476 instances of `nsubj` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.77104319617552.

The following 24 pairs of parts of speech are connected with `nsubj`: [fi-pos/VERB]()-[fi-pos/NOUN]() (6155; 53% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (3824; 33% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1449; 12% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (208; 2% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (19; 0% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (8; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (8; 0% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (8; 0% instances), [fi-pos/VERB]()-[fi-pos/X]() (8; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (5; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (4; 0% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (4; 0% instances), [fi-pos/X]()-[fi-pos/X]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/X]() (1; 0% instances), [fi-pos/X]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/X]()-[fi-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj	color:blue
1	aurinko	aurinko	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	_
2	armas	armas	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	1	amod	_	_
3	,	,	PUNCT	Pun	_	2	punct	_	_
4	kuivas	kuivata	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	satehen	sade	NOUN	N,Sg,Gen	Case=Gen|Number=Sing|Style=Coll	4	obj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	2	nsubj	_	_
2	meni	mennä	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	uimaa	uida	VERB	V,Act,InfMa,Ill	Case=Ill|InfForm=3|Style=Coll|VerbForm=Inf|Voice=Act	2	xcomp	_	Alt=xcomp

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Pekka	pekka	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	antaa	antaa	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	lisää	lisää	ADV	Adv	_	4	advmod	_	_
4	ruokaa	ruoka	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	obj	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


