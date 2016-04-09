

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish)

This relation is universal.

12673 nodes (7%) are attached to their parents as `advmod`.

8865 instances of `advmod` (70%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.82608695652174.

The following 43 pairs of parts of speech are connected with `advmod`: [fi-pos/VERB]()-[fi-pos/ADV]() (7163; 57% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (2298; 18% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1284; 10% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (768; 6% instances), [fi-pos/NUM]()-[fi-pos/ADV]() (387; 3% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (256; 2% instances), [fi-pos/PROPN]()-[fi-pos/ADV]() (238; 2% instances), [fi-pos/SCONJ]()-[fi-pos/ADV]() (118; 1% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (21; 0% instances), [fi-pos/VERB]()-[fi-pos/VERB]() (16; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (14; 0% instances), [fi-pos/NUM]()-[fi-pos/ADJ]() (12; 0% instances), [fi-pos/SYM]()-[fi-pos/ADV]() (11; 0% instances), [fi-pos/NOUN]()-[fi-pos/SCONJ]() (8; 0% instances), [fi-pos/VERB]()-[fi-pos/NOUN]() (7; 0% instances), [fi-pos/NOUN]()-[fi-pos/CONJ]() (6; 0% instances), [fi-pos/VERB]()-[fi-pos/ADP]() (6; 0% instances), [fi-pos/VERB]()-[fi-pos/CONJ]() (6; 0% instances), [fi-pos/VERB]()-[fi-pos/SCONJ]() (6; 0% instances), [fi-pos/X]()-[fi-pos/ADV]() (6; 0% instances), [fi-pos/AUX]()-[fi-pos/ADV]() (4; 0% instances), [fi-pos/PRON]()-[fi-pos/SCONJ]() (4; 0% instances), [fi-pos/ADJ]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (3; 0% instances), [fi-pos/NOUN]()-[fi-pos/NOUN]() (3; 0% instances), [fi-pos/ADJ]()-[fi-pos/SCONJ]() (2; 0% instances), [fi-pos/ADP]()-[fi-pos/ADV]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/PRON]() (2; 0% instances), [fi-pos/ADV]()-[fi-pos/SCONJ]() (2; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/VERB]()-[fi-pos/ADJ]() (2; 0% instances), [fi-pos/AUX]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/AUX]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/INTJ]()-[fi-pos/ADV]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/ADP]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/X]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/VERB]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/NOUN]() (1; 0% instances), [fi-pos/PROPN]()-[fi-pos/SCONJ]() (1; 0% instances), [fi-pos/SCONJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/VERB]()-[fi-pos/SYM]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod	color:blue
1	Saavuin	saapua	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	siis	siis	ADV	Adv	_	1	advmod	_	_
3	kaupunkiin	kaupunki	NOUN	N	Case=Ill|Number=Sing	1	nmod	_	_
4	kameraryhmäni	kamera#ryhmä	NOUN	N	Case=Gen|Number=Sing|Number[psor]=Sing|Person[psor]=1	1	nmod	_	_
5	kanssa	kanssa	ADP	Adp	AdpType=Post	4	case	_	_
6	jo	jo	ADV	Adv	_	8	advmod	_	_
7	ennen	ennen	ADP	Adp	AdpType=Prep	8	case	_	_
8	yhtätoista	yksi#toista	NUM	Num	Case=Par|Number=Sing|NumType=Card	1	nmod	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
1	Tässä	tämä	PRON	Pron	Case=Ine|Number=Sing|PronType=Dem	3	nmod	8:nmod	_
2	hieman	hieman	ADV	Adv	_	3	advmod	_	_
3	yleiskuvaa	yleis#kuva	NOUN	N	Case=Par|Number=Sing	0	root	_	_
4	showroomilta	showroom	NOUN	N	Case=Abl|Number=Sing	3	nmod	_	_
5	ja	ja	CONJ	C	_	3	cc	_	_
6	lisää	lisää	ADV	Adv	_	8	advmod	_	_
7	tuttuja	tuttu	ADJ	A	Case=Par|Degree=Pos|Number=Plur	8	amod	_	_
8	naamoja	naama	NOUN	N	Case=Par|Number=Plur	3	conj	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 advmod	color:blue
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




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Finnish-FTB)

This relation is universal.

14531 nodes (9%) are attached to their parents as `advmod`.

8888 instances of `advmod` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.72775445599064.

The following 22 pairs of parts of speech are connected with `advmod`: [fi-pos/VERB]()-[fi-pos/ADV]() (9560; 66% instances), [fi-pos/NOUN]()-[fi-pos/ADV]() (1598; 11% instances), [fi-pos/ADJ]()-[fi-pos/ADV]() (1484; 10% instances), [fi-pos/ADV]()-[fi-pos/ADV]() (855; 6% instances), [fi-pos/NUM]()-[fi-pos/ADV]() (348; 2% instances), [fi-pos/PRON]()-[fi-pos/ADV]() (256; 2% instances), [fi-pos/PROPN]()-[fi-pos/ADV]() (146; 1% instances), [fi-pos/DET]()-[fi-pos/ADV]() (102; 1% instances), [fi-pos/VERB]()-[fi-pos/PRON]() (95; 1% instances), [fi-pos/ADP]()-[fi-pos/ADV]() (33; 0% instances), [fi-pos/VERB]()-[fi-pos/CONJ]() (18; 0% instances), [fi-pos/SCONJ]()-[fi-pos/ADV]() (8; 0% instances), [fi-pos/NOUN]()-[fi-pos/PRON]() (7; 0% instances), [fi-pos/INTJ]()-[fi-pos/ADV]() (6; 0% instances), [fi-pos/X]()-[fi-pos/ADV]() (5; 0% instances), [fi-pos/NOUN]()-[fi-pos/CONJ]() (4; 0% instances), [fi-pos/ADJ]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/ADV]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/NOUN]()-[fi-pos/INTJ]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/CONJ]() (1; 0% instances), [fi-pos/PRON]()-[fi-pos/PRON]() (1; 0% instances), [fi-pos/PUNCT]()-[fi-pos/ADV]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 advmod	color:blue
1	Dora	dora	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	4	nsubj	_	_
2	puolestaan	puolestaan	ADV	Pcle	_	4	advmod	_	_
3	ei	ei	VERB	V,Neg,Act,Sg3	Negative=Neg|Number=Sing|Person=3|Voice=Act	4	neg	_	_
4	huolestunut	huolestua	VERB	V,Act,Ind,Past,Sg,ConNeg	Conneg=Yes|Mood=Ind|Number=Sing|Tense=Past|Voice=Act	0	root	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 advmod	color:blue
1	Buckler	buckler	PROPN	N,Prop,Sg,Nom	Case=Nom|Number=Sing	3	nsubj	_	_
2	on	olla	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|Voice=Act	3	cop	_	_
3	vaalea	vaalea	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	_
4	,	,	PUNCT	Pun	_	3	punct	_	FTB-rel=phrm
5	makeahko	makeahko	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	3	conj	_	_
6	,	,	PUNCT	Pun	_	3	punct	_	FTB-rel=phrm
7	lievästi	lievästi	ADV	Adv	_	8	advmod	_	_
8	vierremäinen	vierremäinen	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	3	conj	_	_
9	.	.	PUNCT	Pun	_	8	punct	_	_

~~~


