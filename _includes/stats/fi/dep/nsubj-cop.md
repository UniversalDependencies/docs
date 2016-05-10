

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is a language-specific subtype of [nsubj]().

2736 nodes (2%) are attached to their parents as `nsubj:cop`.

2589 instances of `nsubj:cop` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.07858187134503.

The following 39 pairs of parts of speech are connected with `nsubj:cop`: [fi-pos/ADJ]()-[fi-pos/NOUN]() (702; 26% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (599; 22% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (330; 12% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (213; 8% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (206; 8% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (146; 5% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (75; 3% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (75; 3% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (67; 2% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (54; 2% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (51; 2% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (51; 2% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (38; 1% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (20; 1% instances), [fi-pos/SYM]()-[fi-pos/NOUN]() (16; 1% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (11; 0% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (10; 0% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (10; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (6; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (5; 0% instances), [fi-pos/ADP]()-[fi-pos/NOUN]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (5; 0% instances), [fi-pos/NUM]()-[fi-pos/PRON]() (5; 0% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (3; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (3; 0% instances), [fi-pos/X]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/NUM]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/SYM]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/X]()-[fi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:cop	color:blue
1	Paita	paita	NOUN	N	Case=Nom|Number=Sing	3	nsubj:cop	_	_
2	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	valkoinen	valkoinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	_
4	ja	ja	CONJ	C	_	3	cc	_	_
5	siinä	se	PRON	Pron	Case=Ine|Number=Sing|PronType=Dem	6	nmod	_	_
6	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
7	värikkäitä	värikäs	ADJ	A	Case=Par|Degree=Pos|Number=Plur	8	amod	_	_
8	kukkia	kukka	NOUN	N	Case=Par|Number=Plur	6	nsubj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 nsubj:cop	color:blue
1	Bagelit	bagel	NOUN	N	Case=Nom|Number=Plur	6	nsubj:cop	_	_
2	ja	ja	CONJ	C	_	1	cc	_	_
3	smoothiet	smoothie	NOUN	N	Case=Nom|Number=Plur	1	conj	6:nsubj:cop	_
4	olivat	olla	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
5	ihana	ihana	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	6	amod	_	_
6	tapa	tapa	NOUN	N	Case=Nom|Number=Sing	0	root	_	_
7	aloittaa	aloittaa	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	6	acl	_	_
8	aamu	aamu	NOUN	N	Case=Nom|Number=Sing	7	dobj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:cop	color:blue
1	Tämä	tämä	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	4	nsubj:cop	7:nsubj:cop|10:nsubj:cop	_
2	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	7:cop|10:cop	_
3	sinun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	4	nmod:poss	_	_
4	levysi	levy	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	4	punct	_	_
6	sinun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	7	nmod:poss	_	_
7	kirjasi	kirja	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	conj	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	4	punct	_	_
9	sinun	sinä	PRON	Pron	Case=Gen|Number=Sing|Person=2|PronType=Prs	10	nmod:poss	_	_
10	televisiosi	televisio	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	4	conj	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	4	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is a language-specific subtype of [nsubj]().

2739 nodes (2%) are attached to their parents as `nsubj:cop`.

2542 instances of `nsubj:cop` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.43263964950712.

The following 35 pairs of parts of speech are connected with `nsubj:cop`: [fi-pos/ADJ]()-[fi-pos/NOUN]() (782; 29% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (496; 18% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (399; 15% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (365; 13% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (151; 6% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (142; 5% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (83; 3% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (62; 2% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (60; 2% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (37; 1% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (30; 1% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (26; 1% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (20; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (18; 1% instances), [fi-pos/PROPN]()-[fi-pos/PRON]() (15; 1% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (7; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (6; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (5; 0% instances), [fi-pos/NUM]()-[fi-pos/PRON]() (5; 0% instances), [fi-pos/X]()-[fi-pos/NOUN]() (4; 0% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/INTJ]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (3; 0% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (3; 0% instances), [fi-pos/NUM]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/PART]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/X]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/X]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/PART]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:cop	color:blue
1	Vanhojen	vanha	ADJ	A,Pl,Gen	Case=Gen|Number=Plur	2	amod	_	_
2	dna-näytteiden	dna-näyte	NOUN	N,Pl,Gen	Case=Gen|Number=Plur	3	dobj	_	_
3	käsittely	käsittely	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	6	nsubj:cop	_	_
4	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
5	äärimmäisen	äärimmäinen	ADJ	A,Sg,Gen	Case=Gen|Number=Sing	6	amod	_	_
6	vaikeata	vaikea	ADJ	A,Sg,Par	Case=Par|Number=Sing	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj:cop	color:blue
1	Lapseni	lapsi	NOUN	N,Sg,Gen,PxSg1	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	nmod	_	_
2	paras	paras	ADJ	A,Sup,Sg,Nom	Case=Nom|Degree=Sup|Number=Sing	3	amod	_	_
3	ystävä	ystävä	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	6	nsubj:cop	_	_
4	täytti	täyttää	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
5	kolme	kolme	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	vuotta	vuosi	NOUN	N,Sg,Par	Case=Par|Number=Sing	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:cop	color:blue
1	noo	noo	INTJ	Pcle,Interj	_	6	discourse	_	Alt=6_discourse
2	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	6	nsubj:cop	_	_
3	o	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
4	jottais	jokin	DET	Pron,Qnt,Sg,Par	Case=Par|Number=Sing|PronType=Ind|Style=Coll	6	det	_	_
5	semssi	semmoinen	DET	A,Dem,Pl,Par	Case=Par|Number=Plur|PronType=Dem|Style=Coll	6	amod	_	Alt=DET
6	sukulaissi	sukulainen	NOUN	N,Pl,Par	Case=Par|Number=Plur|Style=Coll	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


