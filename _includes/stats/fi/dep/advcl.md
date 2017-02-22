

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

3133 nodes (2%) are attached to their parents as `advcl`.

2238 instances of `advcl` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.51739546760294.

The following 50 pairs of parts of speech are connected with `advcl`: [fi-pos/VERB]()-[fi-pos/VERB]() (1922; 61% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (216; 7% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (183; 6% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (117; 4% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (115; 4% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (72; 2% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (70; 2% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (51; 2% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (50; 2% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (46; 1% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (46; 1% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (32; 1% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (32; 1% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (22; 1% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (22; 1% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (16; 1% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (13; 0% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (12; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (10; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (10; 0% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (9; 0% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (7; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (7; 0% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (6; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (6; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (4; 0% instances), [fi-pos/PUNCT]()-[fi-pos/VERB]() (4; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (2; 0% instances), [fi-pos/AUX]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/SYM]() (2; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/AUX]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (2; 0% instances), [fi-pos/X]()-[fi-pos/VERB]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/AUX]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/CCONJ]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/ADJ]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/NUM]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/SYM]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/SYM]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 advcl	color:blue
1	Jos	jos	SCONJ	C	_	4	mark	_	_
2	tuloksia	tulos	NOUN	N	Case=Par|Number=Plur	4	nsubj	_	_
3	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	4	aux	_	_
4	löydy	löytyä	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	8	advcl	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	4	punct	_	_
6	sinut	sinä	PRON	Pron	Case=Acc|Number=Sing|Person=2|PronType=Prs	8	obj	_	_
7	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux:pass	_	_
8	filtteröity	filtteröidä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	0	root	_	_
9	Twitterin	Twitter	PROPN	N	Case=Gen|Number=Sing	10	nmod:poss	_	_
10	toimesta	toimi	NOUN	N	Case=Ela|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 advcl	color:blue
1	2.5mm	2.5#mm	NOUN	N	Abbr=Yes|Case=Gen|Number=Sing|Typo=Yes	2	nmod:poss	_	_
2	plugeilla	plugi	NOUN	N	Case=Ade|Number=Plur	3	obl	_	_
3	olevaa	olla	VERB	V	Case=Par|Degree=Pos|Number=Sing|PartForm=Pres|VerbForm=Part|Voice=Act	4	acl	_	_
4	piuhaa	piuha	NOUN	N	Case=Par|Number=Sing	0	root	_	_
5	kun	kun	SCONJ	C	_	9	mark	_	_
6	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	9	aux	_	_
7	itseltäni	itse	PRON	Pron	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=1|Reflex=Yes	9	obl	_	_
8	muualta	muualta	ADV	Adv	_	9	advmod	_	_
9	löytynyt	löytyä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	4	advcl	_	_
10	:)	:)	SYM	Symb	_	4	discourse	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 advcl	color:blue
1	Maku	maku	NOUN	N	Case=Nom|Number=Sing	3	nsubj:cop	_	_
2	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	parasta	hyvä	ADJ	A	Case=Par|Degree=Sup|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	_	_
5	kun	kun	SCONJ	C	_	7	mark	_	_
6	salaatti	salaatti	NOUN	N	Case=Nom|Number=Sing	7	nsubj	8:nsubj	_
7	saa	saada	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	advcl	_	_
8	tekeytyä	tekeytyä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	hetken	hetki	NOUN	N	Case=Gen|Number=Sing	8	obl	_	_
10	jääkaapissa	jää#kaappi	NOUN	N	Case=Ine|Number=Sing	8	obl	_	SpaceAfter=No
11	.	.	PUNCT	Punct	_	3	punct	_	_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

3028 nodes (2%) are attached to their parents as `advcl`.

2204 instances of `advcl` (73%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.5336856010568.

The following 41 pairs of parts of speech are connected with `advcl`: [fi-pos/VERB]()-[fi-pos/VERB]() (2168; 72% instances), [fi-pos/ADJ]()-[fi-pos/VERB]() (170; 6% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (97; 3% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (94; 3% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (82; 3% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (62; 2% instances), [fi-pos/ADV]()-[fi-pos/NOUN]() (57; 2% instances), [fi-pos/ADJ]()-[fi-pos/ADJ]() (38; 1% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (32; 1% instances), [fi-pos/ADV]()-[fi-pos/VERB]() (29; 1% instances), [fi-pos/PRON]()-[fi-pos/NOUN]() (19; 1% instances), [fi-pos/ADJ]()-[fi-pos/PROPN]() (17; 1% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (17; 1% instances), [fi-pos/DET]()-[fi-pos/VERB]() (13; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (13; 0% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (12; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (12; 0% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (11; 0% instances), [fi-pos/DET]()-[fi-pos/NOUN]() (11; 0% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (9; 0% instances), [fi-pos/VERB]()-[fi-pos/ADV]() (8; 0% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (7; 0% instances), [fi-pos/ADV]()-[fi-pos/PROPN]() (7; 0% instances), [fi-pos/DET]()-[fi-pos/PROPN]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (4; 0% instances), [fi-pos/PRON]()-[fi-pos/ADJ]() (4; 0% instances), [fi-pos/DET]()-[fi-pos/ADJ]() (3; 0% instances), [fi-pos/DET]()-[fi-pos/ADV]() (3; 0% instances), [fi-pos/DET]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/NUM]()-[fi-pos/VERB]() (3; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/PRON]()-[fi-pos/PROPN]() (3; 0% instances), [fi-pos/VERB]()-[fi-pos/PROPN]() (3; 0% instances), [fi-pos/PRON]()-[fi-pos/NUM]() (2; 0% instances), [fi-pos/ADJ]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/NUM]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/PROPN]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/NUM]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 advcl	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 advcl	color:blue
1	Keskiarvoon	keskiarvo	NOUN	N,Sg,Ill	Case=Ill|Number=Sing	2	nmod	_	_
2	verrattuna	verrata	VERB	V,Pass,PcpNut,Sg,Ess	Case=Ess|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Pass	5	advcl	_	_
3	lapsi	lapsi	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	5	nsubj:cop	_	_
4	on	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
5	pienikokoinen	pienikokoinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 advcl	color:blue
1	paavillisempi	paavillinen	ADJ	A,Cmp,Sg,Nom	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
2	kuin	kuin	SCONJ	Pcle,CS	_	3	mark	_	FTB-Sub=comparator
3	paavi	paavi	NOUN	N,Sg,Nom	Case=Nom|Number=Sing	1	advcl	_	FTB-Sub=comparison
4	itse	itse	PRON	Pron,Refl,Sg,Nom	Case=Nom|Number=Sing|Reflex=Yes	3	nmod	_	_

~~~


