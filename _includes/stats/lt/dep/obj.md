

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

264 nodes (5%) are attached to their parents as `obj`.

158 instances of `obj` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.22348484848485.

The following 18 pairs of parts of speech are connected with `obj`: [lt-pos/VERB]()-[lt-pos/NOUN]() (172; 65% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (53; 20% instances), [lt-pos/VERB]()-[lt-pos/PROPN]() (7; 3% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (6; 2% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (6; 2% instances), [lt-pos/ADJ]()-[lt-pos/PRON]() (4; 2% instances), [lt-pos/VERB]()-[lt-pos/DET]() (3; 1% instances), [lt-pos/PUNCT]()-[lt-pos/ADJ]() (2; 1% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (2; 1% instances), [lt-pos/ADJ]()-[lt-pos/PROPN]() (1; 0% instances), [lt-pos/ADP]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/PART]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/PROPN]()-[lt-pos/PROPN]() (1; 0% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 8 obj	color:blue
1	Kiti	kitas	PRON	WPA	Case=Nom|Gender=Masc|Number=Plur	11	nsubj	_	other|_
2	,	,	PUNCT	PUNCT	_	4	punct	_	,|_
3	kaip	kaip	SCONJ	UH	_	4	mark	_	how|_
4	žinoma	žinoti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Pass	11	parataxis	_	of course|_
5	,	,	PUNCT	PUNCT	_	4	punct	_	,|_
6	aiškios	aiškus	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	obviuos|_
7	tautinės	tautinis	ADJ	JJL	Case=Gen|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	8	amod	_	ethnic|_
8	sąmonės	sąmonė	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	11	obj	_	consciousness|_
9	iš	iš	ADP	UH	_	10	case	_	from|_
10	vis	vis	ADV	RB	Degree=Pos	11	obl	_	still|_
11	neturėjo	turėti	VERB	VBC	Mood=Ind|Number=Plur|Person=3|Polarity=Neg|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	have|_
12	.	.	PUNCT	PUNCT	_	11	punct	_	.|_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 obj	color:blue
1	Santykiuose	santykis	NOUN	NN	Case=Loc|Gender=Masc|Number=Plur	4	obl	_	relations|_
2	su	su	ADP	UH	_	3	case	_	with|_
3	žydais	žydas	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	1	nmod	_	Jews|_
4	nematyti	matyti	VERB	VB	Polarity=Neg|Reflex=No|VerbForm=Inf|Voice=Act	0	root	_	see|_
5	nieko	niekas	PRON	DT	Case=Gen|Gender=Masc|Number=Sing	4	obj	_	nothing|_
6	naujo	naujas	ADJ	NN	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	new|_
7	.	.	PUNCT	PUNCT	_	4	punct	_	.|_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 obj	color:blue
1	Autorius	autorius	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	author|Case=Acc|Gender=Masc|Number=Plur
2	aiškiai	aiškiai	ADV	RB	Degree=Pos	5	advmod	_	clearly|_
3	yra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	be|_
4	Strepsiado	Strepsiadas	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	Strepsiade|_
5	pusėje	pusė	NOUN	NN	Case=Loc|Gender=Fem|Number=Sing	0	root	_	half|_
6	–	–	PUNCT	PUNCT	_	10	punct	_	–|_
7	taip	taip	ADV	RB	Degree=Pos	10	advmod	_	so|_
8	Sokratui	Sokratas	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing	10	obj	_	Socrates|_
9	ir	ir	PART	UH	_	10	advmod	_	even|_
10	reikia	reikėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	parataxis	_	deserve|_
11	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~




--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian-Alksnis)

This relation is universal.

3958 nodes (10%) are attached to their parents as `obj`.

2513 instances of `obj` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.62379989893886.

The following 45 pairs of parts of speech are connected with `obj`: [lt-pos/VERB]()-[lt-pos/NOUN]() (2209; 56% instances), [lt-pos/VERB]()-[lt-pos/PRON]() (606; 15% instances), [lt-pos/NOUN]()-[lt-pos/NOUN]() (563; 14% instances), [lt-pos/NOUN]()-[lt-pos/PRON]() (62; 2% instances), [lt-pos/ADJ]()-[lt-pos/NOUN]() (56; 1% instances), [lt-pos/ADV]()-[lt-pos/NOUN]() (49; 1% instances), [lt-pos/NUM]()-[lt-pos/NOUN]() (44; 1% instances), [lt-pos/PRON]()-[lt-pos/NOUN]() (36; 1% instances), [lt-pos/ADJ]()-[lt-pos/PRON]() (34; 1% instances), [lt-pos/VERB]()-[lt-pos/PROPN]() (34; 1% instances), [lt-pos/CCONJ]()-[lt-pos/NOUN]() (22; 1% instances), [lt-pos/PART]()-[lt-pos/NOUN]() (22; 1% instances), [lt-pos/PRON]()-[lt-pos/PRON]() (22; 1% instances), [lt-pos/PUNCT]()-[lt-pos/NOUN]() (21; 1% instances), [lt-pos/ADV]()-[lt-pos/PRON]() (20; 1% instances), [lt-pos/PROPN]()-[lt-pos/NOUN]() (18; 0% instances), [lt-pos/VERB]()-[lt-pos/X]() (18; 0% instances), [lt-pos/CCONJ]()-[lt-pos/PRON]() (14; 0% instances), [lt-pos/NOUN]()-[lt-pos/PROPN]() (14; 0% instances), [lt-pos/PART]()-[lt-pos/PRON]() (14; 0% instances), [lt-pos/VERB]()-[lt-pos/ADJ]() (14; 0% instances), [lt-pos/NOUN]()-[lt-pos/X]() (7; 0% instances), [lt-pos/PUNCT]()-[lt-pos/PRON]() (7; 0% instances), [lt-pos/VERB]()-[lt-pos/NUM]() (7; 0% instances), [lt-pos/X]()-[lt-pos/NOUN]() (6; 0% instances), [lt-pos/NOUN]()-[lt-pos/NUM]() (5; 0% instances), [lt-pos/ADP]()-[lt-pos/NOUN]() (3; 0% instances), [lt-pos/ADV]()-[lt-pos/PROPN]() (3; 0% instances), [lt-pos/PRON]()-[lt-pos/ADJ]() (3; 0% instances), [lt-pos/PROPN]()-[lt-pos/PROPN]() (3; 0% instances), [lt-pos/VERB]()-[lt-pos/ADV]() (3; 0% instances), [lt-pos/ADJ]()-[lt-pos/PROPN]() (2; 0% instances), [lt-pos/ADV]()-[lt-pos/ADJ]() (2; 0% instances), [lt-pos/CCONJ]()-[lt-pos/X]() (2; 0% instances), [lt-pos/PART]()-[lt-pos/PROPN]() (2; 0% instances), [lt-pos/PROPN]()-[lt-pos/PRON]() (2; 0% instances), [lt-pos/ADP]()-[lt-pos/NUM]() (1; 0% instances), [lt-pos/INTJ]()-[lt-pos/NOUN]() (1; 0% instances), [lt-pos/NOUN]()-[lt-pos/INTJ]() (1; 0% instances), [lt-pos/NUM]()-[lt-pos/ADJ]() (1; 0% instances), [lt-pos/NUM]()-[lt-pos/PRON]() (1; 0% instances), [lt-pos/NUM]()-[lt-pos/X]() (1; 0% instances), [lt-pos/PRON]()-[lt-pos/PROPN]() (1; 0% instances), [lt-pos/VERB]()-[lt-pos/PART]() (1; 0% instances), [lt-pos/X]()-[lt-pos/PRON]() (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 obj	color:blue
1	viešinti	viešinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	0	root	_	_
2	aukštųjų	aukštas	ADJ	Agpfpgy	Case=Gen|Degree=Pos|Gender=Fem|Number=Plur	3	amod	_	_
3	mokyklų	mokykla	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	4	nmod	_	_
4	vadovų	vadovas	NOUN	Ncmpgn-	Case=Gen|Gender=Masc|Number=Plur	5	nmod	_	_
5	atlyginimus	atlyginimas	NOUN	Ncmpan-	Case=Acc|Gender=Masc|Number=Plur	1	obj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 obj	color:blue
1	§	§	PUNCT	PUNCT	_	4	punct	_	_
2	"	"	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No
3	Bažnyčia	bažnyčia	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	4	dep:sub	_	_
4	priklauso	priklausyti	VERB	Vgmp3s--n--ni-	Mood=Imp|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	_	_
5	unitams	unitas	NOUN	Ncmpdn-	Case=Dat|Gender=Masc|Number=Plur	4	obj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	4	punct	_	_
7	jie	jis	PRON	Pgmpnn	Case=Nom|PronType=Tot	8	dep:sub	_	_
8	neturi	neturėti	VERB	Vgmp3p--y--ni-	Mood=Imp|Number=Plur|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	4	dep:pred_co	_	_
9	lėšų	lėšos	NOUN	Ncfpgn-	Case=Gen|Gender=Fem|Number=Plur	8	obj	_	_
10	jai	jis	PRON	Pgfsdn	Case=Nom|Number=Dual|PronType=Tot	11	obj	_	_
11	atnaujinti	atnaujinti	VERB	Vgi-----n--n--	Mood=Ind|Polarity=Pos|VerbForm=Fin	9	dep:adj	_	SpaceAfter=No
12	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obj	color:blue
1	Gaisrą	gaisras	NOUN	Ncmsan-	Case=Acc|Gender=Masc|Number=Sing	0	root	_	_
2	netyčia	netyčia	ADV	Rgp	Degree=Pos	1	dep:adj	_	_
3	jauna	jaunas	ADJ	Agpfsnn	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	moteris	moteris	NOUN	Ncfsnn-	Case=Nom|Gender=Fem|Number=Sing	1	dep:sub	_	_
5	po	po	ADP	Sgg	AdpType=Prep	6	case	_	_
6	barnio	barnis	NOUN	Ncmsgn-	Case=Gen|Gender=Masc|Number=Sing	1	dep:adj	_	_
7	su	su	ADP	Sgi	AdpType=Prep	9	case	_	_
8	savo	savęs	PRON	Pg--gn	Case=Nom|PronType=Tot	9	nmod	_	_
9	vaikinu	vaikinas	NOUN	Ncmsin-	Case=Ins|Gender=Masc|Number=Sing	6	obj	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


