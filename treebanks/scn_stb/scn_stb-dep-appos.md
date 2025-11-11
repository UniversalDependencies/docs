---
layout: base
title:  'Statistics of appos in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `appos`

This relation is universal.

19 nodes (0%) are attached to their parents as `appos`.

19 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.63157894736842.

The following 8 pairs of parts of speech are connected with `appos`: <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (9; 47% instances), <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (3; 16% instances), <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt> (2; 11% instances), <tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="scn_stb-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="scn_stb-pos-PRON.html">PRON</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="scn_stb-pos-PRON.html">PRON</a></tt>-<tt><a href="scn_stb-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="scn_stb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 appos	color:blue
1	A	a	ADP	E	_	2	case	_	TokenRange=2281:2282
2	Missina	Missina	PROPN	SP	_	4	obl	_	TokenRange=2283:2290
3	cc'	ci	PRON	PC	PronType=Prs	4	expl	_	Clitic=Yes|SpaceAfter=No|TokenRange=2291:2293
4	era	essiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	TokenRange=2293:2296
5	un	unu	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	TokenRange=2297:2299
6	picciriddru	picciriddu	NOUN	S	Gender=Masc|Number=Sing	4	nsubj	_	SpaceAfter=No|TokenRange=2300:2307
7	,	,	PUNCT	FF	_	6	punct	_	TokenRange=2307:2308
8	figghiu	figghiu	NOUN	S	Gender=Masc|Number=Sing	6	appos	_	TokenRange=2309:2315
9	di	di	ADP	E	_	11	case	_	TokenRange=2316:2318
10	'na	unu	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	11	det	_	TokenRange=2319:2322
11	lavannara	lavannaru	NOUN	S	Gender=Fem|Number=Sing	8	nmod	_	SpaceAfter=No|TokenRange=2323:2332
12	.	.	PUNCT	FS	_	4	punct	_	TokenRange=2332:2333

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 25 appos	color:blue
1	O	lu	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	SpacesAfter=Yes|TokenRange=4234:4236
2	'nnumani	annumani	ADV	S	_	5	obl	_	TokenRange=4236:4244
3	matinu	matinu	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	TokenRange=4245:4252
4	si	si	PRON	PC	Person=3|PronType=Prs	5	expl	_	Clitic=Yes|TokenRange=4253:4255
5	capuzzau	capuzzari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=4256:4261
6	'n	in	ADP	E	_	7	case	_	TokenRange=4262:4264
7	funnu	funnu	NOUN	S	Gender=Masc|Number=Sing	5	obl	_	TokenRange=4265:4270
8	e	e	CCONJ	CC	_	12	cc	_	TokenRange=4271:4272
9	ddoppu	doppu	ADP	E	_	11	case	_	TokenRange=4273:4277
10	vintiquattr'	vintiquattru	NUM	N	NumType=Card	11	nummod	_	SpaceAfter=No|TokenRange=4278:4290
11	uri	ura	NOUN	S	Gender=Fem|Number=Plur	12	obl	_	TokenRange=4290:4293
12	assummau	assummari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	TokenRange=4294:4300
13	dicennu	diciri	VERB	V	VerbForm=Ger	12	advcl	_	TokenRange=4301:4308
14	a	a	ADP	E	_	16	case	_	TokenRange=4309:4310
15	lu	lu	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	TokenRange=4311:4313
16	Re	Re	NOUN	S	Gender=Masc	13	obl	_	TokenRange=4314:4316
17	chi	chi	SCONJ	CS	_	20	mark	_	TokenRange=4317:4320
18	Missina	Missina	PROPN	SP	_	20	nsubj:pass	_	TokenRange=4321:4328
19	era	essiri	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	20	aux:pass	_	TokenRange=4329:4332
20	pusata	pusatu	ADJ	V	Gender=Fem|Number=Sing	13	ccomp	_	TokenRange=4333:4339
21	supra	supra	ADP	E	_	23	case	_	TokenRange=4340:4342
22	tri	tri	NUM	N	NumType=Card	23	nummod	_	TokenRange=4343:4346
23	culonni	culonna	NOUN	S	Gender=Fem|Number=Plur	20	obl	_	SpaceAfter=No|TokenRange=4347:4354
24	:	:	PUNCT	FC	_	23	punct	_	TokenRange=4354:4355
25	una	unu	PRON	RI	Gender=Fem|Number=Sing|PronType=Ind	23	appos	_	TokenRange=4356:4359
26	stuccata	stuccatu	ADJ	S	Gender=Fem|Number=Sing	23	appos	_	SpaceAfter=No|TokenRange=4360:4368
27	,	,	PUNCT	FF	_	28	punct	_	TokenRange=4368:4369
28	una	unu	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	26	conj	_	TokenRange=4370:4373
29	canniata	canniatu	ADJ	A	Gender=Fem|Number=Sing	28	amod	_	TokenRange=4374:4383
30	e	e	CCONJ	CC	_	31	cc	_	TokenRange=4384:4385
31	una	unu	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	26	conj	_	TokenRange=4386:4389
32	sana	sanu	ADJ	A	Gender=Fem|Number=Sing	31	amod	_	SpaceAfter=No|TokenRange=4390:4396
33	.	.	PUNCT	FS	_	5	punct	_	TokenRange=4396:4397

~~~


~~~ conllu
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 26 appos	color:blue
1	O	lu	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	SpacesAfter=Yes|TokenRange=4234:4236
2	'nnumani	annumani	ADV	S	_	5	obl	_	TokenRange=4236:4244
3	matinu	matinu	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	TokenRange=4245:4252
4	si	si	PRON	PC	Person=3|PronType=Prs	5	expl	_	Clitic=Yes|TokenRange=4253:4255
5	capuzzau	capuzzari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=4256:4261
6	'n	in	ADP	E	_	7	case	_	TokenRange=4262:4264
7	funnu	funnu	NOUN	S	Gender=Masc|Number=Sing	5	obl	_	TokenRange=4265:4270
8	e	e	CCONJ	CC	_	12	cc	_	TokenRange=4271:4272
9	ddoppu	doppu	ADP	E	_	11	case	_	TokenRange=4273:4277
10	vintiquattr'	vintiquattru	NUM	N	NumType=Card	11	nummod	_	SpaceAfter=No|TokenRange=4278:4290
11	uri	ura	NOUN	S	Gender=Fem|Number=Plur	12	obl	_	TokenRange=4290:4293
12	assummau	assummari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	5	conj	_	TokenRange=4294:4300
13	dicennu	diciri	VERB	V	VerbForm=Ger	12	advcl	_	TokenRange=4301:4308
14	a	a	ADP	E	_	16	case	_	TokenRange=4309:4310
15	lu	lu	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	TokenRange=4311:4313
16	Re	Re	NOUN	S	Gender=Masc	13	obl	_	TokenRange=4314:4316
17	chi	chi	SCONJ	CS	_	20	mark	_	TokenRange=4317:4320
18	Missina	Missina	PROPN	SP	_	20	nsubj:pass	_	TokenRange=4321:4328
19	era	essiri	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	20	aux:pass	_	TokenRange=4329:4332
20	pusata	pusatu	ADJ	V	Gender=Fem|Number=Sing	13	ccomp	_	TokenRange=4333:4339
21	supra	supra	ADP	E	_	23	case	_	TokenRange=4340:4342
22	tri	tri	NUM	N	NumType=Card	23	nummod	_	TokenRange=4343:4346
23	culonni	culonna	NOUN	S	Gender=Fem|Number=Plur	20	obl	_	SpaceAfter=No|TokenRange=4347:4354
24	:	:	PUNCT	FC	_	23	punct	_	TokenRange=4354:4355
25	una	unu	PRON	RI	Gender=Fem|Number=Sing|PronType=Ind	23	appos	_	TokenRange=4356:4359
26	stuccata	stuccatu	ADJ	S	Gender=Fem|Number=Sing	23	appos	_	SpaceAfter=No|TokenRange=4360:4368
27	,	,	PUNCT	FF	_	28	punct	_	TokenRange=4368:4369
28	una	unu	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	26	conj	_	TokenRange=4370:4373
29	canniata	canniatu	ADJ	A	Gender=Fem|Number=Sing	28	amod	_	TokenRange=4374:4383
30	e	e	CCONJ	CC	_	31	cc	_	TokenRange=4384:4385
31	una	unu	PRON	PI	Gender=Fem|Number=Sing|PronType=Ind	26	conj	_	TokenRange=4386:4389
32	sana	sanu	ADJ	A	Gender=Fem|Number=Sing	31	amod	_	SpaceAfter=No|TokenRange=4390:4396
33	.	.	PUNCT	FS	_	5	punct	_	TokenRange=4396:4397

~~~


