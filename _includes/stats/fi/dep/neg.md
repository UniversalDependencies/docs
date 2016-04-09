

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

2898 nodes (2%) are attached to their parents as `neg`.

2887 instances of `neg` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.02518978605935.

The following 8 pairs of parts of speech are connected with `neg`: [fi-pos/VERB]()-[fi-pos/VERB]() (2519; 87% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (181; 6% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (158; 5% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (25; 1% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (6; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (5; 0% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 neg	color:blue
1	Dora	dora	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	_
2	puolestaan	puolestaan	ADV	Pcle	_	4	advmod	_	_
3	ei	ei	VERB	V,Neg,Act,Sg3	Negative=Neg|Number=Sing|Person=3|Voice=Act	4	neg	_	_
4	huolestunut	huolestua	VERB	V,Act,Ind,Past,Sg,ConNeg	Conneg=Yes|Mood=Ind|Number=Sing|Tense=Past|Voice=Act	0	root	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 neg	color:blue
1	Koiran	koira	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	8	nsubj	_	_
2	ei	ei	VERB	V,Neg,Act,Sg3	Negative=Neg|Number=Sing|Person=3|Voice=Act	8	neg	_	_
3	pitäisi	pitää	VERB	V,Act,Cond,ConNeg	Conneg=Yes|Mood=Cnd|Voice=Act	8	aux	_	_
4	olla	olla	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	8	cop	_	_
5	minkään	mikään	DET	Pron,Qnt,Gen	Case=Gen	6	det	_	_
6	muun	muu	DET	Pron,Qnt,Sg,Gen	Case=Gen|Number=Sing	7	det	_	_
7	asian	asia	NOUN	N,Sg,Gen	Case=Gen|Number=Sing	8	nmod	_	_
8	korvike	korvike	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 neg	color:blue
1	Sinä	sinä	PRON	Pron,Pers,Sg2,Nom	Case=Nom|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
2	et	ei	VERB	V,Neg,Act,Sg2	Negative=Neg|Number=Sing|Person=2|Voice=Act	6	neg	_	_
3	ole	olla	VERB	V,Act,Ind,Pres,ConNeg	Conneg=Yes|Mood=Ind|Tense=Pres|Voice=Act	6	cop	_	_
4	yhtään	yhtään	ADV	Adv	_	6	advmod	_	_
5	hänen	hän	DET	Pron,Pers,Sg3,Gen	Case=Gen|Number=Sing|Person=3|PronType=Prs	6	det	_	_
6	näköisensä	näköinen	ADJ	A,Sg,Nom,Px3	Case=Nom|Number=Sing|Person[psor]=3	0	root	_	_
7	!	!	PUNCT	Pun	_	6	punct	_	_

~~~


