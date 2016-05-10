

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

1782 nodes (1%) are attached to their parents as `ccomp`.

1781 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.47979797979798.

The following 30 pairs of parts of speech are connected with `ccomp`: [fi-pos/VERB]()-[fi-pos/VERB]() (904; 51% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (299; 17% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (106; 6% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (95; 5% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (84; 5% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (82; 5% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (53; 3% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (31; 2% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (30; 2% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (21; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (14; 1% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (12; 1% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (11; 1% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (8; 0% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (5; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (5; 0% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (3; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/ADJ]()-[fi-pos/AUX]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/AUX]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Kuinka	kuinka	ADV	Adv	_	3	advmod	_	_
2	sitten	sitten	ADV	Adv	_	3	advmod	_	_
3	tiedät	tietää	VERB	V	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	_	_
5	onko	olla	AUX	V	Clitic=Ko|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	auxpass	_	_
6	sinut	sinä	PRON	Pron	Case=Acc|Number=Sing|Person=2|PronType=Prs	7	dobj	_	_
7	bannattu	bannata	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	3	ccomp	_	SpaceAfter=No
8	?	?	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Syytä	syy	NOUN	N	Case=Par|Number=Sing	10	dobj	_	_
2	sille	se	PRON	Pron	Case=All|Number=Sing|PronType=Dem	1	nmod	_	SpaceAfter=No
3	,	,	PUNCT	Punct	_	7	punct	_	_
4	miksi	miksi	ADV	Adv	_	7	advmod	_	_
5	minut	minä	PRON	Pron	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	dobj	_	_
6	oli	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	7	auxpass	_	_
7	suodatettu	suodattaa	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	2	ccomp	_	SpaceAfter=No
8	,	,	PUNCT	Punct	_	7	punct	_	_
9	en	ei	VERB	V	Negative=Neg|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	10	neg	_	_
10	tiedä	tietää	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Lönnberg	Lönnberg	PROPN	N	Case=Nom|Number=Sing	2	nsubj	_	_
2	sanoi	sanoa	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	aiheen	aihe	NOUN	N	Case=Gen|Number=Sing	5	nsubj:cop	_	_
4	olevan	olla	VERB	V	Case=Gen|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	5	cop	_	_
5	tärkeä	tärkeä	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	2	ccomp	_	_
6	Turun	Turku	PROPN	N	Case=Gen|Number=Sing	7	nmod:poss	_	_
7	yliopistolle	yli#opisto	NOUN	N	Case=All|Number=Sing	5	nmod	6:name	SpaceAfter=No
8	.	.	PUNCT	Punct	_	2	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

1788 nodes (1%) are attached to their parents as `ccomp`.

1517 instances of `ccomp` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.64485458612975.

The following 12 pairs of parts of speech are connected with `ccomp`: [fi-pos/VERB]()-[fi-pos/VERB]() (1532; 86% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (114; 6% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (103; 6% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (24; 1% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (5; 0% instances), [fi-pos/VERB]()-[fi-pos/X]() (3; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 ccomp	color:blue
1	Aku	aku	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	2	nsubj	_	_
2	meni	mennä	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	katsomaan	katsoa	VERB	V,Act,InfMa,Ill	Case=Ill|InfForm=3|VerbForm=Inf|Voice=Act	2	xcomp	_	Alt=xcomp
4	ketä	kuka	PRON	Pron,Interr,Sg,Nom	Case=Nom|Number=Sing|PronType=Int|Style=Coll	5	nsubj	_	_
5	piti	pitää	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	ccomp	_	_
6	ääntä	ääni	NOUN	N,Sg,Par	Case=Par|Number=Sing	5	dobj	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 ccomp	color:blue
1	ei	ei	VERB	V,Neg,Act,Sg3	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	neg	_	_
2	voi	voida	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	ajatellakhaa	ajatella	VERB	V,Act,InfA,Lat,Kaan	Case=Lat|Clitic=Kaan|InfForm=1|Style=Coll|VerbForm=Inf|Voice=Act	0	root	_	_
4	varhmaan	varmaan	PART	Pcle	Style=Coll	3	advmod	_	_
5	että	että	SCONJ	Pcle,CS	_	9	mark	_	_
6	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	9	nsubj:cop	_	_
7	ikinä	ikinä	ADV	Adv	_	9	advmod	_	_
8	olis	olla	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|Style=Coll|VerbForm=Fin|Voice=Act	9	cop	_	_
9	vakinaisia	vakinainen	ADJ	A,Pl,Par	Case=Par|Number=Plur	3	ccomp	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 ccomp	color:blue
1	Se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	7	expl	_	Alt=7_expl|Missed-Rel=phrm
2	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	oma	oma	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	4	amod	_	_
4	vika	vika	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	10	ccomp	_	_
5	jos	jos	SCONJ	Pcle,CS	_	7	mark	_	_
6	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
7	yksinäinen	yksinäinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	4	csubj:cop	_	_
8	,	,	PUNCT	Pun	_	7	punct	_	_
9	hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	_
10	sanoo	sanoa	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
11	.	.	PUNCT	Pun	_	10	punct	_	_

~~~


