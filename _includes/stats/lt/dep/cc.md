

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

303 nodes (6%) are attached to their parents as `cc`.

299 instances of `cc` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53465346534653.

The following 18 pairs of parts of speech are connected with `cc`: [lt-pos/NOUN]()-[lt-pos/CCONJ]() (105; 35% instances), [lt-pos/VERB]()-[lt-pos/CCONJ]() (97; 32% instances), [lt-pos/ADJ]()-[lt-pos/CCONJ]() (43; 14% instances), [lt-pos/PROPN]()-[lt-pos/CCONJ]() (23; 8% instances), [lt-pos/ADV]()-[lt-pos/CCONJ]() (10; 3% instances), [lt-pos/VERB]()-[lt-pos/PART]() (5; 2% instances), [lt-pos/NOUN]()-[lt-pos/PART]() (4; 1% instances), [lt-pos/ADV]()-[lt-pos/PART]() (2; 1% instances), [lt-pos/DET]()-[lt-pos/CCONJ]() (2; 1% instances), [lt-pos/NOUN]()-[lt-pos/ADP]() (2; 1% instances), [lt-pos/PART]()-[lt-pos/CCONJ]() (2; 1% instances), [lt-pos/PRON]()-[lt-pos/CCONJ]() (2; 1% instances), [lt-pos/ADJ]()-[lt-pos/PART]() (1; 0% instances), [lt-pos/AUX]()-[lt-pos/PART]() (1; 0% instances), [lt-pos/NOUN]()-[lt-pos/ADV]() (1; 0% instances), [lt-pos/NOUN]()-[lt-pos/SCONJ]() (1; 0% instances), [lt-pos/PROPN]()-[lt-pos/PART]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/CCONJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	Tėvynę	tėvynė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	homeland|_
2	,	,	PUNCT	PUNCT	_	3	punct	_	,|_
3	tautą	tauta	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	1	conj	_	nation|_
4	ir	ir	CCONJ	CC	_	5	cc	_	and|_
5	lietuvybę	lietuvybė	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	1	conj	_	Lithuanianism|_
6	dera	derėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	need|_
7	mylėti	mylėti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	6	xcomp	_	love|_
8	.	.	PUNCT	PUNCT	_	6	punct	_	.|_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 cc	color:blue
1	Čia	čia	CCONJ	CC	_	5	cc	_	here|_
2	SSRS	SSRS	PROPN	NNP	_	3	nmod	_	SSRS|_
3	okupacijos	okupacija	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	4	nmod	_	0|_
4	laikais	laikas	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	5	obl	_	time|_
5	veikė	veikti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=PastSimp	0	root	_	function|_
6	milžiniška	milžiniškas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos	7	amod	_	big|_
7	gamykla	gamykla	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	5	nsubj	_	factory|_
8	„	„	PUNCT	PUNCT	_	9	punct	_	„|_
9	Vilma	Vilma	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	7	flat	_	Vilma|_
10	“	“	PUNCT	PUNCT	_	9	punct	_	“|_
11	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 8 cc	color:blue
1	Į	Į	ADP	UH	_	2	case	_	to|_
2	tai	tai	PRON	DT	_	5	obl	_	this|_
3	man	mes	PRON	PRP	Case=Dat|Number=Sing|Person=1	5	iobj	_	I|_
4	bus	būti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Fut|VerbForm=Fin|Voice=Act	5	aux:pass	_	be|_
5	atsakyta	atsakyti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	answer|_
6	:	:	PUNCT	PUNCT	_	12	punct	_	:|_
7	„	„	PUNCT	PUNCT	_	12	punct	_	„|_
8	čia	čia	CCONJ	CC	_	12	cc	_	there|_
9	ne	ne	PART	UH	Polarity=Neg	10	advmod	_	not|_
10	mes	mes	PRON	PRP	Case=Nom|Number=Plur|Person=1	12	nsubj	_	we|_
11	vieni	vienas	DET	DT	Case=Nom|Gender=Masc|Number=Plur	10	amod	_	single|_
12	kalti	kaltas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	5	parataxis	_	guilty|_
13	“	“	PUNCT	PUNCT	_	12	punct	_	“|_
14	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is universal.

829 nodes (2%) are attached to their parents as `cc`.

463 instances of `cc` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.28950542822678.

The following 12 pairs of parts of speech are connected with `cc`: [lt-pos/NOUN]()-[lt-pos/CCONJ]() (488; 59% instances), [lt-pos/VERB]()-[lt-pos/CCONJ]() (104; 13% instances), [lt-pos/CCONJ]()-[lt-pos/CCONJ]() (70; 8% instances), [lt-pos/PUNCT]()-[lt-pos/CCONJ]() (46; 6% instances), [lt-pos/ADV]()-[lt-pos/CCONJ]() (31; 4% instances), [lt-pos/PRON]()-[lt-pos/CCONJ]() (30; 4% instances), [lt-pos/ADJ]()-[lt-pos/CCONJ]() (25; 3% instances), [lt-pos/NUM]()-[lt-pos/CCONJ]() (13; 2% instances), [lt-pos/PART]()-[lt-pos/CCONJ]() (10; 1% instances), [lt-pos/PROPN]()-[lt-pos/CCONJ]() (8; 1% instances), [lt-pos/X]()-[lt-pos/CCONJ]() (3; 0% instances), [lt-pos/NOUN]()-[lt-pos/PART]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 cc	color:blue
1	Konferencijoje	konferencija	NOUN	Ncfsln-	Case=Loc|Gender=Fem|Number=Sing	0	root	_	_
2	Lenkijos	Lenkija	PROPN	Npfsgng	Case=Gen|Gender=Fem|Number=Sing	5	dep:atr_co	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	7	punct	_	_
4	Ukrainos	Ukraina	PROPN	Npfsgng	Case=Gen|Gender=Fem|Number=Sing	5	dep:atr_co	_	_
5	ir	ir	CCONJ	Cg	_	7	cc	_	_
6	Lietuvos	Lietuva	PROPN	Npfsgng	Case=Gen|Gender=Fem|Number=Sing	5	dep:atr_co	_	_
7	prezidentai	prezidentas	NOUN	Ncmpnn-	Case=Nom|Gender=Masc|Number=Plur	1	dep:sub	_	SpaceAfter=No
8	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 cc	color:blue
1	ir	ir	PART	Qg	_	0	root	_	_
2	apskritai	apskritai	ADV	Rgp	Degree=Pos	1	dep:par	_	_
3	–	–	PUNCT	PUNCT	_	2	punct	_	_
4	literatūra	literatūra	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	5	dep:sub	_	_
5	nesivelka	nesivilkti	VERB	Vgmp3s--y--yi-	Mood=Imp|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	1	parataxis	_	_
6	įkandin	įkandin	ADP	Sgg	AdpType=Prep	8	case	_	_
7	popmuzikos	popmuzika	NOUN	Ncfsgn-	Case=Gen|Gender=Fem|Number=Sing	8	dep:obj_co	_	_
8	ar	ar	CCONJ	Cg	_	5	cc	_	_
9	kino	kinas	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	8	dep:obj_co	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 cc	color:blue
1	mylėti	mylėti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	4	dep:sub_co	_	_
2	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	3	nmod	_	_
3	kūną	kūnas	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	1	obj	_	_
4	ir	ir	CCONJ	Cg	_	8	cc	_	_
5	grožėtis	grožėtis	VERB	Vgi-----n--y--	Mood=Ind|Polarity=Pos|VerbForm=Fin	4	dep:sub_co	_	_
6	juo	jis	PRON	Pgmsin	Case=Nom|PronType=Tot	5	obj	_	_
7	galima	galėti	VERB	Vgpp--npnn-n-p	Gender=Neut|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Pass	8	dep:predn_co	_	_
8	ir	ir	CCONJ	Cg	_	0	root	_	_
9	dera	derėti	VERB	Vgmp3---n--ni-	Mood=Imp|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	dep:pred_co	_	_
10	tikrai	tikrai	ADV	Rgp	Degree=Pos	13	dep:adj	_	_
11	ne 	ne 	PART	Qg	_	12	advmod:emph	_	_
12	tik	tik	PART	Qg	_	13	advmod:emph	_	_
13	išrinktiesiems	išrinktasis	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	8	obj	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


