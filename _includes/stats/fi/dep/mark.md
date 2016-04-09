

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
There are 1 language-specific subtypes of `mark`: [mark:comparator]().

3623 nodes (2%) are attached to their parents as `mark`.

3556 instances of `mark` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.9732266077836.

The following 11 pairs of parts of speech are connected with `mark`: [fi-pos/VERB]()-[fi-pos/SCONJ]() (3032; 84% instances), [fi-pos/NOUN]()-[fi-pos/SCONJ]() (290; 8% instances), [fi-pos/ADJ]()-[fi-pos/SCONJ]() (212; 6% instances), [fi-pos/PRON]()-[fi-pos/SCONJ]() (38; 1% instances), [fi-pos/ADV]()-[fi-pos/SCONJ]() (24; 1% instances), [fi-pos/PROPN]()-[fi-pos/SCONJ]() (12; 0% instances), [fi-pos/NUM]()-[fi-pos/SCONJ]() (9; 0% instances), [fi-pos/INTJ]()-[fi-pos/SCONJ]() (3; 0% instances), [fi-pos/ADP]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/SCONJ]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/X]()-[fi-pos/SCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 mark	color:blue
1	Saulista	sauli	PROPN	N,Prop,Sg,Ela	Case=Ela|Number=Sing	2	nmod	_	_
2	huomattiin	huomata	VERB	V,Pass,Ind,Past	Mood=Ind|Tense=Past|Voice=Pass	0	root	_	_
3	jo	jo	ADV	Pcle	_	4	advmod	_	_
4	lapsena	lapsi	NOUN	N,Sg,Ess	Case=Ess|Number=Sing	2	nmod	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	_
6	että	että	SCONJ	Pcle,CS	_	8	mark	_	_
7	hänellä	hän	PRON	Pron,Pers,Sg3,Ade	Case=Ade|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	2	ccomp	_	_
9	lahjoja	lahja	NOUN	N,Pl,Par	Case=Par|Number=Plur	8	dobj	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	Räntää	räntä	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	nsubj	_	_
2	tuli	tulla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
3	kuin	kuin	SCONJ	Pcle,CS	_	4	mark	_	_
4	aisaa	aisa	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	nmod	_	_
5	,	,	PUNCT	Pun	_	2	punct	_	FTB-rel=phrm
6	lämpötila	lämpötila	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	9	nsubj	_	_
7	oli	olla	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	9	cop	_	_
8	nolla	nolla	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	9	nummod	_	_
9	astetta	aste	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	conj	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 mark	color:blue
1	Silloin	silloin	ADV	Adv,Dem	PronType=Dem	2	advmod	_	_
2	ajattelin	ajatella	VERB	V,Act,Ind,Past,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Past|Voice=Act	0	root	_	_
3	,	,	PUNCT	Pun	_	2	punct	_	_
4	että	että	SCONJ	Pcle,CS	_	5	mark	_	_
5	tällaistako	tällainen	ADJ	A,Dem,Sg,Par,Ko	Case=Par|Clitic=Ko|Number=Sing|PronType=Dem	2	ccomp	_	_
6	tämä	tämä	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	5	nsubj	_	_
7	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	5	cop	_	_
8	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


