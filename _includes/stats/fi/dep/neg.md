

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

1755 nodes (1%) are attached to their parents as `neg`.

1749 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.96923076923077.

The following 8 pairs of parts of speech are connected with `neg`: [fi-pos/VERB]()-[fi-pos/VERB]() (1478; 84% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (120; 7% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (111; 6% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (32; 2% instances), [fi-pos/AUX]()-[fi-pos/VERB]() (5; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (4; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (4; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 neg	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
2	sisäinen	sisäinen	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	3	amod	_	_
3	lapseni	lapsi	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	7:nsubj	_
4	ei	ei	VERB	V	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	6	neg	_	_
5	vaan	vaan	ADV	Adv	_	6	advmod	_	_
6	suostu	suostua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
7	katoamaan	kadota	VERB	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 neg	color:blue
1	Eivätkö	ei	VERB	V	Clitic=Ko|Negative=Neg|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	3	neg	_	_
2	olekin	olla	VERB	V	Clitic=Kin|Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	kivat	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	0	root	_	SpaceAfter=No
4	?	?	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 neg	color:blue
1	-	-	PUNCT	Punct	_	6	punct	_	_
2	Ei	ei	VERB	V	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	6	neg	_	_
3	kun	kun	ADV	Adv	_	6	advmod	_	_
4	ihan	ihan	ADV	Adv	_	6	advmod	_	_
5	aikuisten	aikuinen	NOUN	N	Case=Gen|Number=Plur	6	nmod:poss	_	_
6	töissä	työ	NOUN	N	Case=Ine|Number=Plur	0	root	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	6	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

2886 nodes (2%) are attached to their parents as `neg`.

2875 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.01801801801802.

The following 8 pairs of parts of speech are connected with `neg`: [fi-pos/VERB]()-[fi-pos/VERB]() (2488; 86% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (189; 7% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (168; 6% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (25; 1% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (6; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (5; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (4; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 neg	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 neg	color:blue
1	Siinä	se	PRON	Pron,Dem,Sg,Ine	Case=Ine|Number=Sing|PronType=Dem	3	nmod	_	_
2	ei	ei	VERB	V,Neg,Act,Sg3	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	neg	_	_
3	ollut	olla	VERB	V,Act,Ind,Past,Sg,ConNeg	Connegative=Yes|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	yhtään	yhtään	ADV	Adv	_	5	advmod	_	_
5	aggressiivisuutta	aggressiivisuus	NOUN	N,Sg,Par	Case=Par|Number=Sing	3	nsubj	_	_
6	,	,	PUNCT	Pun	_	5	punct	_	_
7	eikä	ei	VERB	V,Neg,Act,Sg3,Ka	Clitic=Ka|Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	neg	_	_
8	taklauksia	taklaus	NOUN	N,Pl,Par	Case=Par|Number=Plur	5	conj	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 neg	color:blue
1	Sinä	sinä	PRON	Pron,Pers,Sg2,Nom	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj:cop	_	_
2	et	ei	VERB	V,Neg,Act,Sg2	Negative=Neg|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	6	neg	_	_
3	ole	olla	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
4	yhtään	yhtään	ADV	Adv	_	6	advmod	_	_
5	hänen	hän	DET	Pron,Pers,Sg3,Gen	Case=Gen|Number=Sing|Person=3|PronType=Prs	6	det	_	_
6	näköisensä	näköinen	ADJ	A,Sg,Nom,Px3	Case=Nom|Number=Sing|Person[psor]=3	0	root	_	_
7	!	!	PUNCT	Pun	_	6	punct	_	_

~~~


