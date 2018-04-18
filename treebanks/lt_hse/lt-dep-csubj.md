---
layout: base
title:  'Statistics of csubj in UD_Lithuanian'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian: Relations: `csubj`

This relation is universal.

6 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (67%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.66666666666667.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="lt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt-pos-VERB.html">VERB</a></tt> (3; 50% instances), <tt><a href="lt-pos-VERB.html">VERB</a></tt>-<tt><a href="lt-pos-VERB.html">VERB</a></tt> (2; 33% instances), <tt><a href="lt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt-pos-VERB.html">VERB</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 csubj	color:blue
1	Tapatinti	tapatinti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	7	csubj	_	En=identify
2	ją	ji	PRON	PRP	Case=Acc|Gender=Fem|Number=Sing|Person=3	1	obj	_	En=it
3	su	su	ADP	UH	_	4	case	_	En=with
4	TSRS	TSRS	PROPN	NNP	_	1	obl	_	En=USSR
5	yra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	En=be
6	piktybiška	piktybiškas	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	7	amod	_	En=malicious
7	demagogija	demagogija	NOUN	NN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	En=demagoguery
8	–	–	PUNCT	PUNCT	_	9	punct	_	En=–
9	šiaip	šiaip	ADJ	JJL	_	15	parataxis	_	En=other
10	ar	ar	CCONJ	CC	_	9	fixed	_	En=or
11	taip	taip	PART	UH	_	9	fixed	_	En=such|SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	9	punct	_	En=,
13	kiekvienas	kiekvienas	DET	DT	Case=Nom|Gender=Masc|Number=Sing	15	amod	_	En=each
14	lietuvis	lietuvis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	15	amod	_	En=Lithianian
15	žino	žinoti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	7	parataxis	_	En=know|SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	18	punct	_	En=,
17	kuo	kuo	CCONJ	CC	_	18	advmod	_	En=how
18	skiriasi	skirtis	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	15	ccomp	_	En=differ
19	Kolyma	Kolyma	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	18	nsubj	_	En=Kolyma
20	nuo	nuo	ADP	UH	_	21	case	_	En=from
21	Dublino	Dublinas	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	18	obl	_	En=Dublin
22	ar	ar	CCONJ	CC	_	23	cc	_	En=or
23	Londono	Londonas	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	21	conj	_	En=London|SpaceAfter=No
24	.	.	PUNCT	PUNCT	_	7	punct	_	En=.

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 csubj	color:blue
1	Deja	deja	INTJ	UH	_	11	parataxis	_	En=unfortunately|SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	En=,
3	šiandien	šiandien	ADV	RB	Degree=Pos	11	obl	_	En=today
4	Lietuvoje	Lietuva	PROPN	NNP	Case=Loc|Gender=Fem|Number=Sing	11	obl	_	En=Lithuania|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	En=,
6	kaip	kaip	SCONJ	UH	_	8	mark	_	En=just_as
7	ir	ir	PART	UH	_	8	advmod:emph	_	En=even
8	sovietmečiu	sovietmetai	NOUN	NN	Case=Loc|Gender=Masc|Number=Plur	3	parataxis	_	En=the_Soviet_era|SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	8	punct	_	En=,
10	man	aš	PRON	PRP	Case=Acc|Number=Sing|Person=1	11	obj	_	En=I
11	knieti	knietėti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	En=want
12	pakartoti	pakartoti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	11	csubj	_	En=repeat
13	Sokrato	Sokratas	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	En=Socrates
14	žodžius	žodis	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	12	obj	_	En=word
15	iš	iš	ADP	UH	_	17	case	_	En=from
16	Aristofano	Aristofano	PROPN	NNP	Case=Gen|Gender=Masc|Number=Sing	17	nmod	_	En=Aristofane
17	komedijos	komedija	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	14	nmod	_	En=comedy
18	–	–	PUNCT	PUNCT	_	21	punct	_	En=–
19	„	„	PUNCT	PUNCT	_	21	punct	_	En=„|SpaceAfter=No
20	Aš	aš	PRON	PRP	Case=Nom|Number=Sing|Person=1	21	nsubj	_	En=I
21	dūstu	dusti	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	14	appos	_	En=suffocate|SpaceAfter=No
22	“	“	PUNCT	PUNCT	_	21	punct	_	En=“|SpaceAfter=No
23	.	.	PUNCT	PUNCT	_	11	punct	_	En=.

~~~


~~~ conllu
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 31 32 csubj	color:blue
1	Tikras	tikras	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	2	amod	_	En=true
2	lietuvis	lietuvis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	nsubj	_	En=Lithianian
3	yra	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	En=be
4	tik	tik	ADV	RB	Degree=Pos	5	advmod	_	En=only
5	tas	tas	PRON	DT	Case=Nom|Gender=Masc|Number=Sing	0	root	_	En=this|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	7	punct	_	En=,
7	kuris	kuris	PRON	WPA	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	En=which
8	nemėgsta	mėgti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	5	acl:relcl	_	En=like|SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	13	punct	_	En=,
10	o	o	CCONJ	CC	_	13	cc	_	En=and
11	dar	dar	ADV	RB	Degree=Pos	12	advmod	_	En=even
12	geriau	gerai	ADV	RBR	Degree=Cmp	13	advmod	_	En=better
13	nekenčia	nekęsti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	En=hate
14	rusų	rusas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	13	obj	_	En=Russian|SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	16	punct	_	En=,
16	lenkų	lenkas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	14	conj	_	En=Polish|SpaceAfter=No
17	,	,	PUNCT	PUNCT	_	18	punct	_	En=,
18	žydų	žydas	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	14	conj	_	En=Jews|SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	23	punct	_	En=,
20	taip	taip	CCONJ	CC	_	23	cc	_	En=as_well_as
21	pat	pat	PART	UH	_	20	fixed	_	En=as_well_as
22	ir	ir	PART	UH	_	20	fixed	_	En=as_well_as
23	vakariečių	vakarietis	NOUN	NN	Case=Gen|Gender=Masc|Number=Plur	14	conj	_	En=Western_people|SpaceAfter=No
24	,	,	PUNCT	PUNCT	_	25	punct	_	En=,
25	mėgsta	mėgti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	En=like
26	nebent	nebent	SCONJ	UH	_	27	mark	_	En=unless
27	palestiniečius	palestinietis	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	25	obj	_	En=Palestinians
28	(	(	PUNCT	PUNCT	_	31	punct	_	En=(|SpaceAfter=No
29	beje	beje	PART	PARENTH	_	31	parataxis	_	En=by_the_way|SpaceAfter=No
30	,	,	PUNCT	PUNCT	_	29	punct	_	En=,
31	nesunku	nesunkus	ADJ	PRED	Definite=Ind|Degree=Pos|Gender=Neut|Polarity=Neg	27	parataxis	_	En=not_difficult
32	įsivaizduoti	įsivaizduoti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	31	csubj	_	En=imagine|SpaceAfter=No
33	,	,	PUNCT	PUNCT	_	37	punct	_	En=,
34	ką	kas	PRON	WP	Case=Acc	38	obj	_	En=what
35	mūsų	mūsų	DET	PRP$	_	36	det	_	En=our
36	patriotai	patriotas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	37	nsubj	_	En=patriot
37	pradėtų	pradėti	VERB	VBC	Mood=Cnd|Number=Plur|Person=3|Polarity=Pos|Reflex=No|VerbForm=Fin|Voice=Act	32	ccomp	_	En=start
38	sakyti	sakyti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	37	xcomp	_	En=say
39	apie	apie	ADP	UH	_	40	case	_	En=about
40	palestiniečius	palestinietis	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	38	obl	_	En=Palestinians|SpaceAfter=No
41	,	,	PUNCT	PUNCT	_	45	punct	_	En=,
42	jeigu	jeigu	SCONJ	UH	_	45	mark	_	En=if
43	su	su	ADP	UH	_	44	case	_	En=with
44	jais	jie	PRON	PRP	Case=Ins|Number=Plur|Person=3	45	obl	_	En=they
45	susidurtų	susidurti	VERB	VBC	Mood=Cnd|Number=Plur|Person=3|Polarity=Pos|Reflex=Yes|VerbForm=Fin|Voice=Act	37	advcl	_	En=confront
46	kasdienybėje	kasdienybė	NOUN	NN	Case=Loc|Gender=Fem|Number=Sing	45	obl	_	En=daily_life|SpaceAfter=No
47	,	,	PUNCT	PUNCT	_	49	punct	_	En=,
48	kaip	kaip	ADV	WRB	Degree=Pos	49	advmod	_	En=just_as
49	susidūrė	susidurti	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Past|VerbForm=Fin|Voice=Act	45	advcl	_	En=confront
50	su	su	ADP	UH	_	51	case	_	En=with
51	čečėnais	čečėnas	NOUN	NN	Case=Ins|Gender=Masc|Number=Plur	49	obl	_	En=Chechen|SpaceAfter=No
52	)	)	PUNCT	PUNCT	_	31	punct	_	En=)|SpaceAfter=No
53	.	.	PUNCT	PUNCT	_	5	punct	_	En=.

~~~


