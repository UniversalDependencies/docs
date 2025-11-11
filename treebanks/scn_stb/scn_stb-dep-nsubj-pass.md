---
layout: base
title:  'Statistics of nsubj:pass in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="scn_stb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="scn_stb-dep-nsubj-outer.html">nsubj:outer</a></tt>.

11 nodes (0%) are attached to their parents as `nsubj:pass`.

11 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.45454545454545.

The following 5 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (5; 45% instances), <tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="scn_stb-pos-PROPN.html">PROPN</a></tt> (2; 18% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (2; 18% instances), <tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="scn_stb-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-PROPN.html">PROPN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 2 nsubj:pass	color:blue
1	Ḍḍa	chiddu	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:4
2	picca	picca	NOUN	S	Gender=Masc|Number=Sing	14	nsubj:pass	_	TokenRange=1155:1159
3	di	di	ADP	E	_	4	case	_	TokenRange=1160:1162
4	celu	celu	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	TokenRange=1163:1168
5	ca	ca	PRON	PR	PronType=Rel	8	nsubj:pass	_	TokenRange=1169:1172
6	nun	nun	ADV	BN	PronType=Neg	8	advmod	_	TokenRange=1173:1176
7	era	essiri	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux:pass	_	TokenRange=1177:1180
8	uccupata	uccupari	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl:relcl	_	TokenRange=1181:1189
9	di	di	ADP	E	_	11	case	_	_
10	li	lu	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	nèvuli	nèvula	NOUN	S	Gender=Fem|Number=Plur	8	obl:agent	_	SpaceAfter=No|TokenRange=1196:1202
12	,	,	PUNCT	FF	_	2	punct	_	TokenRange=1202:1203
13	si	si	PRON	PC	Person=3|PronType=Prs	14	expl:impers	_	Clitic=Yes|TokenRange=1204:1206
14	ntenni	intenniri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|TokenRange=1207:1214
15	.	.	PUNCT	FS	_	14	punct	_	TokenRange=1214:1215

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 18 nsubj:pass	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nsubj:pass	color:blue
1	Ḍḍa	chiddu	DET	DD	Gender=Masc|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:4
2	picca	picca	NOUN	S	Gender=Masc|Number=Sing	14	nsubj:pass	_	TokenRange=1155:1159
3	di	di	ADP	E	_	4	case	_	TokenRange=1160:1162
4	celu	celu	NOUN	S	Gender=Masc|Number=Sing	2	nmod	_	TokenRange=1163:1168
5	ca	ca	PRON	PR	PronType=Rel	8	nsubj:pass	_	TokenRange=1169:1172
6	nun	nun	ADV	BN	PronType=Neg	8	advmod	_	TokenRange=1173:1176
7	era	essiri	AUX	VA	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	aux:pass	_	TokenRange=1177:1180
8	uccupata	uccupari	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	2	acl:relcl	_	TokenRange=1181:1189
9	di	di	ADP	E	_	11	case	_	_
10	li	lu	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	11	det	_	_
11	nèvuli	nèvula	NOUN	S	Gender=Fem|Number=Plur	8	obl:agent	_	SpaceAfter=No|TokenRange=1196:1202
12	,	,	PUNCT	FF	_	2	punct	_	TokenRange=1202:1203
13	si	si	PRON	PC	Person=3|PronType=Prs	14	expl:impers	_	Clitic=Yes|TokenRange=1204:1206
14	ntenni	intenniri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No|TokenRange=1207:1214
15	.	.	PUNCT	FS	_	14	punct	_	TokenRange=1214:1215

~~~


