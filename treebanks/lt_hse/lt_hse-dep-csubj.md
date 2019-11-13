---
layout: base
title:  'Statistics of csubj in UD_Lithuanian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Lithuanian-HSE: Relations: `csubj`

This relation is universal.

7 nodes (0%) are attached to their parents as `csubj`.

4 instances of `csubj` (57%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="lt_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (3; 43% instances), <tt><a href="lt_hse-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (2; 29% instances), <tt><a href="lt_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="lt_hse-pos-VERB.html">VERB</a></tt> (2; 29% instances).


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
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 30 24 csubj	color:blue
1	Mat	mat	PART	UH	_	12	discourse	_	En=because
2	nors	nors	PART	UH	_	12	nmod	_	En=though
3	savirašiai	savirašis	ADJ	JJL	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	4	amod	_	En=self-writing
4	prietaisai	prietaisas	NOUN	NN	Case=Nom|Gender=Masc|Number=Plur	12	nsubj	_	En=device|SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	8	punct	_	En=,
6	dar	dar	ADV	RB	Degree=Pos	8	advmod	_	En=yet
7	kitaip	kitaip	ADV	RB	Degree=Pos	8	advmod	_	En=otherwise
8	vadinami	vadinti	VERB	VBNL	Case=Nom|Definite=Ind|Gender=Masc|Number=Plur|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Part|Voice=Act	4	acl:relcl	_	En=call
9	juodosiomis	juodas	ADJ	JJL	Case=Ins|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	10	amod	_	En=black
10	dėžėmis	dėžė	NOUN	NN	Case=Ins|Gender=Fem|Number=Plur	8	iobj	_	En=box|SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	8	punct	_	En=,
12	pagaminti	pagaminti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	30	advcl	_	En=manufacture
13	taip	taip	ADV	RB	Degree=Pos	12	advmod	_	En=so|SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	16	punct	_	En=,
15	kad	kad	SCONJ	UH	_	16	mark	_	En=that
16	atlaikytų	atlaikyti	VERB	VBC	Mood=Cnd|Number=Plur|Person=3|Polarity=Pos|Reflex=No|VerbForm=Fin|Voice=Act	12	conj	_	En=survive
17	ypač	ypač	ADV	RB	Degree=Pos	18	advmod	_	En=especially
18	stiprius	stiprus	ADJ	JJL	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	19	amod	_	En=strong
19	smūgius	smūgis	NOUN	NN	Case=Acc|Gender=Masc|Number=Plur	16	obj	_	En=hit
20	katastrofų	katastrofa	NOUN	NN	Case=Gen|Gender=Fem|Number=Plur	21	nmod	_	En=catastrophy
21	metu	metas	NOUN	NN	Case=Ins|Gender=Masc|Number=Sing	19	nmod	_	En=time|SpaceAfter=No
22	,	,	PUNCT	PUNCT	_	16	punct	_	En=,
23	juos	jie	PRON	PRP	Case=Acc|Number=Plur|Person=3	24	obj	_	En=he
24	aptikti	aptikti	VERB	VB	Polarity=Pos|Reflex=No|VerbForm=Inf|Voice=Act	30	csubj	_	En=find
25	jūros	jūra	NOUN	NN	Case=Gen|Gender=Fem|Number=Sing	26	nmod	_	En=sea
26	dugne	dugnas	NOUN	NN	Case=Loc|Gender=Masc|Number=Sing	24	obl	_	En=bed
27	neretai	neretai	ADV	RB	Degree=Pos|Polarity=Neg	30	advmod	_	En=frequently
28	būna	būti	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Reflex=No|Tense=Pres|VerbForm=Fin|Voice=Act	30	aux	_	En=be
29	ypač	ypač	ADV	RB	Degree=Pos	30	advmod	_	En=especially
30	sunku	sunkus	ADJ	PRED	Definite=Ind|Degree=Pos|Gender=Neut	0	root	_	En=difficult|SpaceAfter=No
31	.	.	PUNCT	PUNCT	_	30	punct	_	En=.

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


