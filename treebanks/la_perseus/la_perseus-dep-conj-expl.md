---
layout: base
title:  'Statistics of conj:expl in UD_Latin-Perseus'
udver: '2'
---

## Treebank Statistics: UD_Latin-Perseus: Relations: `conj:expl`

This relation is a language-specific subtype of <tt><a href="la_perseus-dep-conj.html">conj</a></tt>.

8 nodes (0%) are attached to their parents as `conj:expl`.

8 instances of `conj:expl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.375.

The following 6 pairs of parts of speech are connected with `conj:expl`: <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (3; 38% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-ADJ.html">ADJ</a></tt> (1; 13% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-PROPN.html">PROPN</a></tt> (1; 13% instances), <tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt>-<tt><a href="la_perseus-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="la_perseus-pos-PRON.html">PRON</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="la_perseus-pos-VERB.html">VERB</a></tt>-<tt><a href="la_perseus-pos-NOUN.html">NOUN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 conj:expl	color:blue
1	et	et	CCONJ	c--------	_	6	cc	_	LId=et1
2	in	in	ADP	r--------	_	3	case	_	LId=in1
3	fronte	frons	NOUN	n-s---fb-	Case=Abl|Gender=Fem|Number=Sing	6	obl	_	LId=frons2
4	eius	is	PRON	p-s---fg-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	nmod	_	LId=is1
5	nomen	nomen	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	6	nsubj:pass	_	LId=nomen1
6	scriptum	scribo	VERB	v-srppnn-	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|VerbForm=Part|Voice=Pass	0	root	_	LId=scribo1|TraditionalMood=Participium|TraditionalTense=Perfectum
7	mysterium	mysterium	NOUN	n-s---nn-	Case=Nom|Gender=Neut|Number=Sing	5	conj:expl	_	SpaceAfter=No|LId=mysterium1
8	:	:	PUNCT	u--------	_	6	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 12 conj:expl	color:blue
1	Et	et	CCONJ	c--------	_	10	cc	_	LId=et1
2	ne	ne	SCONJ	c--------	_	4	mark	_	LId=ne1
3	me	ego	PRON	p-s---ma-	Case=Acc|Number=Sing|Person=1|PronType=Prs	6	nsubj:pass	_	LId=ego1
4	putes	puteo	VERB	v2spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	10	advcl	_	LId=puteo1|TraditionalMood=Indicativus|TraditionalTense=Praesens
5	studia	studium	NOUN	n-p---na-	Case=Acc|Gender=Neut|Number=Plur	6	obj	_	LId=studium1
6	fastiditum	fastidio	VERB	v-srppma-	Aspect=Perf|Case=Acc|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	4	ccomp	_	LId=fastidio1|SpaceAfter=No|TraditionalMood=Participium|TraditionalTense=Perfectum
7	,	,	PUNCT	u--------	_	4	punct	_	LId=comma1
8	II	II	NUM	m--------	NumForm=Roman|NumType=Card	9	nummod	_	LId=II1
9	bybliothecas	bybliotheca	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	10	obj	_	LId=bybliotheca1
10	habeo	habeo	VERB	v1spia---	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=habeo1|SpaceAfter=No|TraditionalMood=Indicativus|TraditionalTense=Praesens
11	,	,	PUNCT	u--------	_	12	punct	_	LId=comma1
12	unam	unus	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	9	conj:expl	_	LId=unus1
13	Graecam	Graecus	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	12	amod	_	SpaceAfter=No|LId=Graecus1
14	,	,	PUNCT	u--------	_	15	punct	_	LId=comma1
15	alteram	alter	DET	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing|PronType=Con	12	conj	_	LId=alter1
16	Latinam	Latinus	ADJ	a-s---fa-	Case=Acc|Gender=Fem|Number=Sing	15	amod	_	SpaceAfter=No|LId=Latinus1
17	.	.	PUNCT	u--------	_	10	punct	_	LId=punc1

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 15 conj:expl	color:blue
1	Conveniunt	convenio	VERB	v3ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	LId=convenio1|TraditionalMood=Indicativus|TraditionalTense=Praesens
2	illuc	illic	ADV	d--------	_	1	advmod	_	LId=illic1
3	popularia	popularis	ADJ	a-p---nn-	Case=Nom|Gender=Neut|Number=Plur	4	amod	_	LId=popularis1
4	flumina	flumen	NOUN	n-p---nn-	Case=Nom|Gender=Neut|Number=Plur	1	nsubj	_	LId=flumen1
5	primum	primus	ADV	d--------	_	1	advmod	_	SpaceAfter=No|LId=primus1
6	,	,	PUNCT	u--------	_	7	punct	_	LId=comma1
7	nescia	nescius	ADJ	a-p---nn-	Case=Nom|Gender=Neut|Number=Plur	4	amod	_	SpaceAfter=No|LId=nescius1
8	,	,	PUNCT	u--------	_	9	punct	_	LId=comma1
9	gratentur	grator	VERB	v3ppsp---	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	7	ccomp	_	LId=grator1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
10	ne	ne	SCONJ	c--------	_	11	cc	_	LId=ne1
11	consolentur	consolor	VERB	v3ppsp---	Aspect=Imp|Mood=Sub|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	9	conj	_	LId=consolor1|TraditionalMood=Subiunctivus|TraditionalTense=Praesens
12	parentem	parens	NOUN	n-s---ma-	Case=Acc|Gender=Masc|Number=Sing	9	obj	_	SpaceAfter=No|LId=parens2
13	,	,	PUNCT	u--------	_	7	punct	_	LId=comma1
14	populifer	populifer	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	15	amod	_	LId=populifer1
15	Sperchios	Spercheos	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	4	conj:expl	_	LId=Spercheos1
16	et	et	CCONJ	c--------	_	18	cc	_	LId=et1
17	inrequietus	irrequietus	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	18	amod	_	LId=irrequietus1
18	Enipeus	Enipeus	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	15	conj	_	LId=Enipeus1
19	que	que	CCONJ	c--------	_	20	cc	_	LId=que1
20	Apidanus	Apidanus	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	15	conj	_	LId=Apidanus1
21	senex	senex	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	20	amod	_	LId=senex1
22	que	que	CCONJ	c--------	_	24	cc	_	LId=que1
23	lenis	lenis	ADJ	a-s---mn-	Case=Nom|Gender=Masc|Number=Sing	24	amod	_	LId=lenis1
24	Amphrysos	Amphrysus	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	15	conj	_	LId=Amphrysus1
25	et	et	CCONJ	c--------	_	26	cc	_	LId=et1
26	Aeas	Aeas	PROPN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	15	conj	_	SpaceAfter=No|LId=Aeas1
27	,	,	PUNCT	u--------	_	28	punct	_	LId=comma1
28	que	que	CCONJ	c--------	_	30	cc	_	LId=que1
29	mox	mox	ADV	d--------	_	30	advmod	_	LId=mox1
30	amnes	amnis	NOUN	n-p---mn-	Case=Nom|Gender=Masc|Number=Plur	1	conj	_	LId=amnis1
31	alii	alius	DET	a-p---mn-	Case=Nom|Gender=Masc|Number=Plur|PronType=Con	30	det	_	SpaceAfter=No|LId=alius2
32	,	,	PUNCT	u--------	_	33	punct	_	LId=comma1
33	qui	qui	PRON	p-p---mn-	Case=Nom|Gender=Masc|Number=Plur|PronType=Rel	42	nsubj	_	SpaceAfter=No|LId=quis2
34	,	,	PUNCT	u--------	_	33	punct	_	LId=comma1
35	qua	qua	ADV	d--------	AdvType=Loc	36	advmod:lmod	_	LId=qua1
36	tulit	fero	VERB	v3sria---	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	42	advcl	_	LId=fero1|TraditionalMood=Indicativus|TraditionalTense=Perfectum
37	impetus	impetus	NOUN	n-s---mn-	Case=Nom|Gender=Masc|Number=Sing	36	nsubj	_	LId=impetus1
38	illos	ille	DET	p-p---ma-	Case=Acc|Gender=Masc|Number=Plur|PronType=Dem	36	obj	_	SpaceAfter=No|LId=ille1
39	,	,	PUNCT	u--------	_	36	punct	_	LId=comma1
40	in	in	ADP	r--------	_	41	case	_	LId=in1
41	mare	mare	NOUN	n-s---na-	Case=Acc|Gender=Neut|Number=Sing	42	obl	_	LId=mare1
42	deducunt	deduco	VERB	v3ppia---	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	30	acl:relcl	_	LId=deduco1|TraditionalMood=Indicativus|TraditionalTense=Praesens
43	fessas	fessus	ADJ	a-p---fa-	Case=Acc|Gender=Fem|Number=Plur	45	amod	_	LId=fessus1
44	erroribus	error	NOUN	n-p---mb-	Case=Abl|Gender=Masc|Number=Plur	42	obl	_	LId=error1
45	undas	unda	NOUN	n-p---fa-	Case=Acc|Gender=Fem|Number=Plur	42	obj	_	SpaceAfter=No|LId=unda1
46	.	.	PUNCT	u--------	_	1	punct	_	LId=punc1

~~~


