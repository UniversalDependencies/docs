

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

3156 nodes (2%) are attached to their parents as `advcl`.

2258 instances of `advcl` (72%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.49746514575412.

The following 46 pairs of parts of speech are connected with `advcl`: [fi-pos/VERB]()-[fi-pos/VERB]() (2141; 68% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (188; 6% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (151; 5% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (111; 4% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (70; 2% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (70; 2% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (52; 2% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (47; 1% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (47; 1% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (46; 1% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (30; 1% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (29; 1% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (29; 1% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (23; 1% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (12; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (12; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (12; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (10; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (9; 0% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (9; 0% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (6; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (6; 0% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (6; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (3; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/AUX]() (2; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/AUX]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/SYM]()-[fi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advcl	color:blue
1	Jos	jos	SCONJ	C	_	4	mark	_	_
2	tuloksia	tulos	NOUN	N	Case=Par|Number=Plur	4	nsubj	_	_
3	ei	ei	VERB	V	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	neg	_	_
4	löydy	löytyä	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	8	advcl	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	4	punct	_	_
6	sinut	sinä	PRON	Pron	Case=Acc|Number=Sing|Person=2|PronType=Prs	8	dobj	_	_
7	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	auxpass	_	_
8	filtteröity	filtteröidä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
9	Twitterin	Twitter	PROPN	N	Case=Gen|Number=Sing	10	nmod:poss	_	_
10	toimesta	toimi	NOUN	N	Case=Ela|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl	color:blue
1	Maku	maku	NOUN	N	Case=Nom|Number=Sing	3	nsubj:cop	_	_
2	on	olla	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	parasta	hyvä	ADJ	A	Case=Par|Degree=Sup|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	_	_
5	kun	kun	SCONJ	C	_	7	mark	_	_
6	salaatti	salaatti	NOUN	N	Case=Nom|Number=Sing	7	nsubj	8:nsubj	_
7	saa	saada	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
8	tekeytyä	tekeytyä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	hetken	hetki	NOUN	N	Case=Gen|Number=Sing	8	nmod	_	_
10	jääkaapissa	jää#kaappi	NOUN	N	Case=Ine|Number=Sing	8	nmod	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 advcl	color:blue
1	2.5mm	2.5#mm	NOUN	N	Abbr=Yes|Case=Gen|Number=Sing|Typo=Yes	2	nmod:poss	_	_
2	plugeilla	plugi	NOUN	N	Case=Ade|Number=Plur	3	nmod	_	_
3	olevaa	olla	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	4	acl	_	_
4	piuhaa	piuha	NOUN	N	Case=Par|Number=Sing	0	root	_	_
5	kun	kun	SCONJ	C	_	9	mark	_	_
6	ei	ei	VERB	V	Negative=Neg|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	9	neg	_	_
7	itseltäni	itse	PRON	Pron	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=1|Reflex=Yes	9	nmod	_	_
8	muualta	muualta	ADV	Adv	_	9	advmod	_	_
9	löytynyt	löytyä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	4	advcl	_	_
10	:)	:)	SYM	Symb	_	4	discourse	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.
There are 1 language-specific subtypes of `advcl`: [advcl:compar]().

3659 nodes (2%) are attached to their parents as `advcl`.

2787 instances of `advcl` (76%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.19240229570921.

The following 19 pairs of parts of speech are connected with `advcl`: [fi-pos/VERB]()-[fi-pos/VERB]() (3213; 88% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (135; 4% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (105; 3% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (77; 2% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (62; 2% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (13; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (11; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (10; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (8; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (5; 0% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (4; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (4; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (2; 0% instances), [fi-pos/INTJ]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 advcl	color:blue
1	"	"	PUNCT	Pun,Quo,Ini	_	2	punct	_	Missed-POSITION=INITIAL|Missed-SUBCAT=QUOTATION
2	Sitä	se	PRON	Pron,Dem,Sg,Par	Case=Par|Number=Sing|PronType=Dem	3	nmod	_	_
3	lihoo	lihoa	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	0	root	_	_
4	liikaa	liikaa	ADV	Adv	_	3	advmod	_	_
5	,	,	PUNCT	Pun	_	4	punct	_	_
6	jos	jos	SCONJ	Pcle,CS	_	8	mark	_	_
7	vain	vain	ADV	Pcle	_	8	advmod	_	_
8	lukee	lukea	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	advcl	_	_
9	ja	ja	CONJ	Pcle,CC	_	8	cc	_	_
10	syö	syödä	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	8	conj	_	_
11	suklaata	suklaa	NOUN	N,Sg,Par	Case=Par|Number=Sing	10	dobj	_	_
12	.	.	PUNCT	Pun	_	11	punct	_	_
13	"	"	PUNCT	Pun,Quo,Fin	_	12	punct	_	Missed-POSITION=FINAL|Missed-SUBCAT=QUOTATION

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 advcl	color:blue
1	Jos	jos	SCONJ	Pcle,CS	_	4	mark	_	_
2	luottamusmies	luottamusmies	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	_
3	ei	ei	VERB	V,Neg,Act,Sg3	Negative=Neg|Number=Sing|Person=3|Voice=Act	4	neg	_	_
4	ole	olla	VERB	V,Act,Ind,Pres,ConNeg	Conneg=Yes|Mood=Ind|Tense=Pres|Voice=Act	10	advcl	_	_
5	paikalla	paikalla	ADV	Adv	_	4	advmod	_	_
6	,	,	PUNCT	Pun	_	5	punct	_	_
7	humalatila	humalatila	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	10	nsubj	_	_
8	ei	ei	VERB	V,Neg,Act,Sg3	Negative=Neg|Number=Sing|Person=3|Voice=Act	10	neg	_	_
9	ole	olla	VERB	V,Act,Ind,Pres,ConNeg	Conneg=Yes|Mood=Ind|Tense=Pres|Voice=Act	10	cop	_	_
10	virallinen	virallinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
11	.	.	PUNCT	Pun	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 advcl	color:blue
1	"	"	PUNCT	Pun,Quo,Ini	_	2	punct	_	Missed-POSITION=INITIAL|Missed-SUBCAT=QUOTATION
2	Hän	hän	PRON	Pron,Pers,Sg3,Nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
3	varoitti	varoittaa	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
4	minua	minä	PRON	Pron,Pers,Sg1,Par	Case=Par|Number=Sing|Person=1|PronType=Prs	3	dobj	_	_
5	sinusta	sinä	PRON	Pron,Pers,Sg2,Ela	Case=Ela|Number=Sing|Person=2|PronType=Prs	3	nmod	_	_
6	,	,	PUNCT	Pun	_	5	punct	_	_
7	koska	koska	SCONJ	Pcle,CS	_	9	mark	_	_
8	olet	olla	VERB	V,Act,Ind,Pres,Sg2	Mood=Ind|Number=Sing|Person=2|Tense=Pres|Voice=Act	9	cop	_	_
9	hullu	hullu	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	3	advcl	_	_
10	.	.	PUNCT	Pun	_	9	punct	_	_

~~~


