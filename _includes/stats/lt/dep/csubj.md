

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Lithuanian)

This relation is universal.

6 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 3 pairs of parts of speech are connected with `csubj`: [lt-pos/NOUN]()-[lt-pos/VERB]() (3; 50% instances), [lt-pos/VERB]()-[lt-pos/VERB]() (2; 33% instances), [lt-pos/ADJ]()-[lt-pos/VERB]() (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	Tapatinti	tapatinti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	7	csubj	_	|_
2	ją	jis	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3	1	obj	_	she|_
3	su	su	ADP	UH	_	4	case	_	with|_
4	TSRS	TSRS	PROPN	NNP	_	1	obl	_	USSR|_
5	yra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	be|_
6	piktybiška	piktybiškas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	|_
7	demagogija	demagogija	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	|_
8	–	–	PUNCT	PUNCT	_	9	punct	_	–|_
9	šiaip	šiaip	ADJ	JJL	_	15	parataxis	_	other|_
10	ar	ar	CCONJ	CC	_	9	fixed	_	or|_
11	taip	taip	PART	UH	_	9	fixed	_	yes|_
12	,	,	PUNCT	PUNCT	_	9	punct	_	,|_
13	kiekvienas	kiekvienas	DET	DT	Case=Nom|Gender=Masc|Number=Sing	15	amod	_	each|_
14	lietuvis	lietuvis	ADJ	JJL	Case=Nom|Gender=Masc|Number=Sing	15	amod	_	Lithianian|_
15	žino	žinoti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	know|_
16	,	,	PUNCT	PUNCT	_	18	punct	_	,|_
17	kuo	kuo	CCONJ	CC	_	18	advmod	_	how|_
18	skiriasi	skirtis	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	15	ccomp	_	differ|_
19	Kolyma	Kolyma	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	18	nsubj	_	Kolyma|_
20	nuo	nuo	ADP	UH	_	21	case	_	from|_
21	Dublino	Dublinas	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	18	obl	_	Dublin|_
22	ar	ar	CCONJ	CC	_	23	cc	_	or|_
23	Londono	Londonas	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	21	conj	_	London|_
24	.	.	PUNCT	PUNCT	_	7	punct	_	.|_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 csubj	color:blue
1	Deja	Deja	INTJ	UH	_	11	parataxis	_	unfortunately|_
2	,	,	PUNCT	PUNCT	_	1	punct	_	,|_
3	šiandien	šiandien	ADV	RB	Degree=Pos	11	obl	_	today|_
4	Lietuvoje	Lietuva	PROPN	NNP	Case=Loc|Gender=Fem|Number=Sing	11	obl	_	Lithuania|_
5	,	,	PUNCT	PUNCT	_	8	punct	_	,|_
6	kaip	kaip	SCONJ	UH	_	8	mark	_	just as|_
7	ir	ir	PART	UH	_	8	advmod	_	even|_
8	sovietmečiu	sovietmetai	NOUN	NN	Case=Loc|Gender=Masc|Number=Plur	3	parataxis	_	the Soviet era|_
9	,	,	PUNCT	PUNCT	_	8	punct	_	,|_
10	man	mes	PRON	PRP	Case=Acc|Number=Sing|Person=1	11	obj	_	I|_
11	knieti	knietėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	want|_
12	pakartoti	pakartoti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	11	csubj	_	repeat|_
13	Sokrato	Sokratas	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	Socrates|_
14	žodžius	žodis	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	12	obj	_	word|_
15	iš	iš	ADP	UH	_	17	case	_	from|_
16	Aristofano	Aristofano	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	Aristofane|_
17	komedijos	komedija	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	comedy|_
18	–	–	PUNCT	PUNCT	_	21	punct	_	–|_
19	„	„	PUNCT	PUNCT	_	21	punct	_	„|_
20	Aš	Aš	PRON	PRP	Case=Nom|Number=Sing|Person=1	21	nsubj	_	I|_
21	dūstu	dusti	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	14	appos	_	suffocate|_
22	“	“	PUNCT	PUNCT	_	21	punct	_	“|_
23	.	.	PUNCT	PUNCT	_	11	punct	_	.|_

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 32 csubj	color:blue
1	Tikras	tikras	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	true|_
2	lietuvis	lietuvis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	nsubj	_	Lithianian|_
3	yra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	be|_
4	tik	tik	ADV	RB	Degree=Pos	5	advmod	_	only|_
5	tas	tas	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing	0	root	_	this|_
6	,	,	PUNCT	PUNCT	_	7	punct	_	,|_
7	kuris	kuris	PRON	WPA	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	which|_
8	nemėgsta	mėgti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	like|_
9	,	,	PUNCT	PUNCT	_	13	punct	_	,|_
10	o	o	CCONJ	CC	_	13	cc	_	and|_
11	dar	dar	ADV	RB	Degree=Pos	12	advmod	_	even|_
12	geriau	gerai	ADV	RBR	Degree=Cmp	13	advmod	_	better|_
13	nekenčia	nekęsti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	hate|_
14	rusų	rusas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	13	obj	_	Russian|_
15	,	,	PUNCT	PUNCT	_	16	punct	_	,|_
16	lenkų	lenkas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	14	conj	_	Polish|_
17	,	,	PUNCT	PUNCT	_	18	punct	_	,|_
18	žydų	žydas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	14	conj	_	Jews|_
19	,	,	PUNCT	PUNCT	_	23	punct	_	,|_
20	taip	taip	CCONJ	CC	_	23	cc	_	as well as|_
21	pat	pat	PART	UH	_	20	fixed	_	as well as|_
22	ir	ir	PART	UH	_	20	fixed	_	_|_
23	vakariečių	vakarietis	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	14	conj	_	Western people|_
24	,	,	PUNCT	PUNCT	_	25	punct	_	,|_
25	mėgsta	mėgti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	like|_
26	nebent	nebent	SCONJ	UH	_	27	mark	_	unless|_
27	palestiniečius	palestinietis	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	25	obj	_	Palestinians|_
28	(	(	PUNCT	PUNCT	_	31	punct	_	(|_
29	beje	beje	PART	PARENTH	_	31	parataxis	_	by the way|_
30	,	,	PUNCT	PUNCT	_	29	punct	_	,|_
31	nesunku	nesunkus	ADJ	PRED	Definite=Ind|Degree=Pos|Gender=Neut|Polarity=Neg	27	parataxis	_	not difficult|_
32	įsivaizduoti	įsivaizduoti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	31	csubj	_	imagine|_
33	,	,	PUNCT	PUNCT	_	37	punct	_	,|_
34	ką	kas	PRON	WP	Case=Acc	38	obj	_	what|_
35	mūsų	mūsų	DET	PRP$	_	36	det	_	our|_
36	patriotai	patriotas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	37	nsubj	_	patriot|_
37	pradėtų	pradėti	VERB	VBC	Mood=Cnd|Number=Plur|Person=3|Polarity=Pos|Reflex=No|VerbForm=Fin|Voice=Act	32	ccomp	_	start|_
38	sakyti	sakyti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	37	xcomp	_	say|_
39	apie	apie	ADP	UH	_	40	case	_	about|_
40	palestiniečius	palestinietis	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	38	obl	_	Palestinians|_
41	,	,	PUNCT	PUNCT	_	45	punct	_	,|_
42	jeigu	jeigu	SCONJ	UH	_	45	mark	_	if|_
43	su	su	ADP	UH	_	44	case	_	with|_
44	jais	jie	PRON	PRP	Case=Ins|Number=Plur|Person=3	45	obl	_	they|_
45	susidurtų	susidurti	VERB	VBC	Mood=Cnd|Number=Plur|Person=3|Polarity=Pos|Reflex=Yes|VerbForm=Fin|Voice=Act	37	advcl	_	confront|_
46	kasdienybėje	kasdienybė	NOUN	NN	Case=Loc|Gender=Fem|Number=Sing	45	obl	_	daily life|_
47	,	,	PUNCT	PUNCT	_	49	punct	_	,|_
48	kaip	kaip	ADV	WRB	Degree=Pos	49	advmod	_	just as|_
49	susidūrė	susidurti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|VerbForm=Fin|Voice=Act	45	advcl	_	confront|_
50	su	su	ADP	UH	_	51	case	_	with|_
51	čečėnais	čečėnas	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	49	obl	_	Chechen|_
52	)	)	PUNCT	PUNCT	_	31	punct	_	)|_
53	.	.	PUNCT	PUNCT	_	5	punct	_	.|_

~~~


