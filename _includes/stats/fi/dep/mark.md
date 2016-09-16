

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

3454 nodes (2%) are attached to their parents as `mark`.

3453 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.329473074696.

The following 30 pairs of parts of speech are connected with `mark`: [fi-pos/VERB]()-[fi-pos/SCONJ]() (2521; 73% instances), [fi-pos/NOUN]()-[fi-pos/SCONJ]() (330; 10% instances), [fi-pos/ADJ]()-[fi-pos/SCONJ]() (222; 6% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (167; 5% instances), [fi-pos/ADV]()-[fi-pos/SCONJ]() (68; 2% instances), [fi-pos/PRON]()-[fi-pos/SCONJ]() (41; 1% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (37; 1% instances), [fi-pos/PROPN]()-[fi-pos/SCONJ]() (17; 0% instances), [fi-pos/NUM]()-[fi-pos/SCONJ]() (8; 0% instances), [fi-pos/NOUN]()-[fi-pos/CONJ]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (5; 0% instances), [fi-pos/VERB]()-[fi-pos/CONJ]() (5; 0% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (4; 0% instances), [fi-pos/AUX]()-[fi-pos/SCONJ]() (3; 0% instances), [fi-pos/INTJ]()-[fi-pos/SCONJ]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (2; 0% instances), [fi-pos/SYM]()-[fi-pos/SCONJ]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/CONJ]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADP]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/SYM]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/ADP]() (1; 0% instances), [fi-pos/X]()-[fi-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
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


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 mark	color:blue
1	Miespoliitikon	mies#poliitikko	NOUN	N	Case=Gen|Number=Sing	2	nmod:poss	_	_
2	elämänkaari	elämän#kaari	NOUN	N	Case=Nom|Number=Sing	4	nsubj:cop	_	_
3	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	erilainen	erilainen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
5	kuin	kuin	SCONJ	C	_	6	mark	_	_
6	poliitikkonaisen	poliitikko#nainen	NOUN	N	Case=Gen|Number=Sing	4	advcl	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 mark	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	4	nsubj:cop	_	_
2	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	oma	oma	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	amod	_	_
4	vika	vika	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
5	jos	jos	SCONJ	C	_	7	mark	_	_
6	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	yksinäinen	yksinäinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	4	advcl	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	4	punct	_	_
9	hän	hän	PRON	Pron	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	sanoo	sanoa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	parataxis	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

4475 nodes (3%) are attached to their parents as `mark`.

4399 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.87396648044693.

The following 32 pairs of parts of speech are connected with `mark`: [fi-pos/VERB]()-[fi-pos/SCONJ]() (2961; 66% instances), [fi-pos/NOUN]()-[fi-pos/SCONJ]() (465; 10% instances), [fi-pos/VERB]()-[fi-pos/PART]() (247; 6% instances), [fi-pos/ADJ]()-[fi-pos/SCONJ]() (240; 5% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (160; 4% instances), [fi-pos/PRON]()-[fi-pos/SCONJ]() (68; 2% instances), [fi-pos/NOUN]()-[fi-pos/PART]() (56; 1% instances), [fi-pos/PROPN]()-[fi-pos/SCONJ]() (50; 1% instances), [fi-pos/ADV]()-[fi-pos/SCONJ]() (44; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (39; 1% instances), [fi-pos/ADJ]()-[fi-pos/PART]() (25; 1% instances), [fi-pos/PRON]()-[fi-pos/PART]() (17; 0% instances), [fi-pos/PROPN]()-[fi-pos/ADV]() (15; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (14; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (14; 0% instances), [fi-pos/ADV]()-[fi-pos/PART]() (13; 0% instances), [fi-pos/NUM]()-[fi-pos/SCONJ]() (11; 0% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (6; 0% instances), [fi-pos/PROPN]()-[fi-pos/PART]() (5; 0% instances), [fi-pos/DET]()-[fi-pos/PART]() (4; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (4; 0% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (4; 0% instances), [fi-pos/INTJ]()-[fi-pos/SCONJ]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/ADP]()-[fi-pos/PART]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/PART]() (1; 0% instances), [fi-pos/PART]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/PART]() (1; 0% instances), [fi-pos/SCONJ]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/X]()-[fi-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	Alta	alta	ADV	Adv	_	2	advmod	_	_
2	mennään	mennä	VERB	V,Pass,Ind,Pres	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	vaikka	vaikka	SCONJ	Pcle,CS	_	5	mark	_	_
4	niskat	niska	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	5	nsubj	_	_
5	katkeis	katketa	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|Style=Coll|VerbForm=Fin|Voice=Act	2	advcl	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 mark	color:blue
1	paavillisempi	paavillinen	ADJ	A,Cmp,Sg,Nom	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
2	kuin	kuin	SCONJ	Pcle,CS	_	3	mark	_	FTB-Sub=comparator
3	paavi	paavi	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	1	advcl	_	FTB-Sub=comparison
4	itse	itse	PRON	Pron,Refl,Sg,Nom	Case=Nom|Number=Sing|Reflex=Yes	3	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
1	Heti	heti	ADV	Adv	_	8	advmod	_	_
2	kun	kun	SCONJ	Pcle,CS	_	3	mark	_	_
3	laulan	laulaa	VERB	V,Act,Ind,Pres,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	_	_
4	hieman	hieman	ADV	Adv	_	5	advmod	_	_
5	rokimpaa	rokki	NOUN	N,Cmp,Sg,Par	Case=Par|Degree=Cmp|Number=Sing	3	dobj	_	_
6	niin	niin	PART	Pcle	_	8	mark	_	_
7	sen	se	PRON	Pron,Dem,Sg,Gen	Case=Gen|Number=Sing|PronType=Dem	8	dobj	_	_
8	kuulee	kuulla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


