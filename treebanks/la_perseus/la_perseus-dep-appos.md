---
layout: base
title:  'Statistics of appos in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `appos`

This relation is universal.

53 nodes (0%) are attached to their parents as `appos`.

53 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.24528301886792.

The following 13 pairs of parts of speech are connected with `appos`: <tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (31; 58% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (9; 17% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (2; 4% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-ADV.html">ADV</a></tt>-<tt><a href="la_perseus-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-DET.html">DET</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-DET.html">DET</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Cui	qui	PRON	p-s---md-	Case=Dat|Gender=Masc|Number=Sing|PronType=Rel	4	obl	_	LId=qui1
2	fidus	fidus	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	5	amod	_	LId=fidus1
3	Achates	Achates	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	LId=Achates2
4	it	eo	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=eo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	comes	comes	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	3	appos	_	SpaceAfter=No|LId=comes1
6	,	,	PUNCT	u--------	_	11	punct	_	LId=comma1
7	et	et	CCONJ	c--------	_	11	cc	_	LId=et1
8	paribus	par	ADJ	a-p---fb-	Case=Abl|Gender=Fem|Number=Plur	9	amod	_	LId=par1
9	curis	cura	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	11	obl	_	LId=cura1
10	vestigia	vestigium	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	11	obj	_	LId=vestigium1
11	figit	figo	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	conj	_	LId=figo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
12	.	.	PUNCT	u--------	_	4	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 12 appos	color:blue
1	Venit	venio	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=venio1|TraditionalMood=Indicativus|TraditionalTense=Praesens
2	et	et	CCONJ	c--------	_	1	cc	_	LId=et1
3	ad	ad	ADP	r--------	_	4	case	_	LId=ad1
4	ripas	ripa	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	1	obl	_	SpaceAfter=No|LId=ripa1
5	,	,	PUNCT	u--------	_	9	punct	_	LId=comma1
6	ubi	ubi	ADV	d--------	AdvType=Loc	7	advmod:lmod	_	LId=ubi1
7	ludere	ludo	VERB	v--pna---	Aspect=Imp|Tense=Pres|VerbForm=Inf|Voice=Act	9	xcomp	_	LId=ludo1
8	saepe	saepe	ADV	d--------	AdvType=Tim	9	advmod:tmod	_	LId=saepe1
9	solebat	soleo	VERB	v3siia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	acl	_	LId=soleo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Imperfectum
10	,	,	PUNCT	u--------	_	12	punct	_	LId=comma1
11	Inachidas	Inachis	ADJ	a-p---fa-	Case=Acc|Gender=Fem|Number=Plur	12	amod	_	LId=Inachis1
12	ripas	ripa	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	4	appos	_	SpaceAfter=No|LId=ripa1
13	;	;	PUNCT	u--------	_	1	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 53	bgColor:blue
# visual-style 53	fgColor:white
# visual-style 46	bgColor:blue
# visual-style 46	fgColor:white
# visual-style 46 53 appos	color:blue
1	Ambiguum	ambiguus	ADJ	a-s---nn-	Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No|LId=ambiguus1
2	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
3	Clymene	Clymene	PROPN	n-s---fn-	Case=Nom|Gender=Fem|Number=Sing	17	nsubj	_	SpaceAfter=No|LId=Clymene1
4	,	,	PUNCT	u--------	_	3	punct	_	LId=comma1
5	precibus	prex	NOUN	n-p---fb-	Case=Abl|Gender=Fem|Number=Plur	9	obj	_	LId=prex1
6	Phaethontis	Phaethon	PROPN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	5	nmod	_	LId=Phaethon1
7	an	an	SCONJ	c--------	_	8	cc	_	LId=an1
8	ira	ira	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	5	conj	_	LId=ira1
9	mota	moveo	VERB	v-srppfn-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Pass	17	advcl	_	LId=moveo1|TraditionalMood=Participium|TraditionalTense=Perfectum
10	magis	magis	ADV	d--------	Degree=Cmp	8	advmod	_	LId=magis1
11	dicti	dictum	NOUN	n-s---ng-	Case=Gen|Gender=Neut|Number=Sing	13	nmod	_	LId=dictum1
12	sibi	sui	PRON	p-p---md-	Case=Dat|Number=Plur|Person=3|PronType=Prs|Reflex=Yes	13	obl	_	LId=sui1
13	criminis	crimen	NOUN	n-s---ng-	Case=Gen|Gender=Neut|Number=Sing	8	nmod	_	LId=crimen1
14	utraque	uter	ADJ	a-p---na-	Case=Acc|Gender=Neut|Number=Plur	16	amod	_	LId=uter1
15	caelo	caelum	NOUN	n-s---nd-	Case=Dat|Gender=Neut|Number=Sing	17	obl:arg	_	LId=caelum1
16	bracchia	bracchium	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	17	obj	_	LId=bracchium1
17	porrexit	porrigo	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	csubj	_	LId=porrigo1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
18	que	que	CCONJ	c--------	_	28	cc	_	LId=que1
19	spectans	specto	VERB	v-sppafn-	Aspect=Imp|Case=Nom|Gender=Fem|Number=Sing|VerbForm=Part|Voice=Act	3	conj	_	LId=specto1|TraditionalMood=Participium|TraditionalTense=Praesens
20	ad	ad	ADP	r--------	_	21	case	_	LId=ad1
21	lumina	lumen	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	19	obl	_	LId=lumen1
22	solis	sol	NOUN	n-s---mg-	Case=Gen|Gender=Masc|Number=Sing	21	nmod	_	LId=sol1
23	'	'	PUNCT	u--------	_	25	punct	_	LId=QUOTE1
24	per	per	ADP	r--------	_	25	case	_	LId=per1
25	iubar	iubar	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	37	obl	_	LId=iubar1
26	hoc	hic	DET	p-s---na-	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	25	det	_	LId=hic1
27	'	'	PUNCT	u--------	_	25	punct	_	LId=QUOTE1
28	inquit	inquam	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	17	conj	_	LId=inquam1|TraditionalMood=Indicativus|TraditionalTense=Praesens
29	'	'	PUNCT	u--------	_	31	punct	_	LId=QUOTE1
30	radiis	radius	NOUN	n-p---mb-	Case=Abl|Gender=Masc|Number=Plur	31	obj	_	LId=radius1
31	insigne	insignis	ADJ	a-s---na-	Case=Acc|Gender=Neut|Number=Sing	25	amod	_	LId=insignis1
32	coruscis	coruscus	ADJ	a-p---mb-	Case=Abl|Gender=Masc|Number=Plur	30	amod	_	SpaceAfter=No|LId=coruscus1
33	,	,	PUNCT	u--------	_	34	punct	_	LId=comma1
34	nate	natus	NOUN	n-s---mv-	Case=Voc|Gender=Masc|Number=Sing	37	vocative	_	SpaceAfter=No|LId=natus1
35	,	,	PUNCT	u--------	_	34	punct	_	LId=comma1
36	tibi	tu	PRON	p-s---md-	Case=Dat|Number=Sing|Person=2|PronType=Prs	37	obl:arg	_	LId=tu1
37	iuro	iuro	VERB	v1spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	28	acl:relcl	_	LId=juro1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
38	,	,	PUNCT	u--------	_	42	punct	_	LId=comma1
39	quod	qui	PRON	p-s---nn-	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	42	nsubj	_	LId=qui1
40	nos	nos	PRON	p-p---ma-	Case=Acc|Number=Plur|Person=1|PronType=Prs	42	obj	_	LId=nos1
41	que	que	CCONJ	c--------	_	42	cc	_	LId=que1
42	audit	audio	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	59	acl:relcl	_	LId=audio1|TraditionalMood=Indicativus|TraditionalTense=Praesens
43	que	que	CCONJ	c--------	_	44	cc	_	LId=que1
44	videt	video	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	42	conj	_	LId=video1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
45	,	,	PUNCT	u--------	_	42	punct	_	LId=comma1
46	hoc	hic	DET	p-s---mb-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	60	obj	_	LId=hic1
47	te	tu	PRON	p-s---ma-	Case=Acc|Number=Sing|Person=2|PronType=Prs	46	appos	_	SpaceAfter=No|LId=tu1
48	,	,	PUNCT	u--------	_	50	punct	_	LId=comma1
49	quem	qui	PRON	p-s---ma-	Case=Acc|Gender=Masc|Number=Sing|PronType=Rel	50	obj	_	LId=quis2
50	spectas	specto	VERB	v2spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	59	acl:relcl	_	LId=specto1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
51	,	,	PUNCT	u--------	_	50	punct	_	LId=comma1
52	hoc	hic	DET	p-s---mb-	Case=Abl|Gender=Masc|Number=Sing|PronType=Dem	46	appos	_	LId=hic1
53	te	tu	PRON	p-s---ma-	Case=Acc|Number=Sing|Person=2|PronType=Prs	46	appos	_	SpaceAfter=No|LId=tu1
54	,	,	PUNCT	u--------	_	56	punct	_	LId=comma1
55	qui	qui	PRON	p-s---mn-	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	56	nsubj	_	LId=qui1
56	temperat	tempero	VERB	v3spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	59	acl:relcl	_	LId=tempero1|TraditionalMood=Indicativus|TraditionalTense=Praesens
57	orbem	orbis	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	56	obj	_	SpaceAfter=No|LId=orbis1
58	,	,	PUNCT	u--------	_	56	punct	_	LId=comma1
59	Sole	sol	NOUN	n-s---mb-	Case=Abl|Gender=Masc|Number=Sing	60	obj	_	LId=sol1
60	satum	sero	VERB	v-srppma-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	37	xcomp	_	LId=sero1|SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
61	.	.	PUNCT	u--------	_	17	punct	_	LId=punc1

~~~


