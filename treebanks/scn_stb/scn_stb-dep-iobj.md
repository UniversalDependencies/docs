---
layout: base
title:  'Statistics of iobj in UD_Sicilian-STB'
udver: '2'
---

## Treebank Statistics: UD_Sicilian-STB: Relations: `iobj`

This relation is universal.

247 nodes (2%) are attached to their parents as `iobj`.

233 instances of `iobj` (94%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.17813765182186.

The following 3 pairs of parts of speech are connected with `iobj`: <tt><a href="scn_stb-pos-VERB.html">VERB</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (243; 98% instances), <tt><a href="scn_stb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="scn_stb-pos-AUX.html">AUX</a></tt>-<tt><a href="scn_stb-pos-PRON.html">PRON</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 iobj	color:blue
1	Ci	ci	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	iobj	_	Clitic=Yes|TokenRange=1:4
2	sautau	sautari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=5:10
3	u	lu	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	TokenRange=11:13
4	cori	cori	NOUN	S	Gender=Masc|Number=Sing	2	obj	_	TokenRange=14:19
5	di	di	ADP	E	_	7	case	_	TokenRange=20:22
6	na	unu	DET	RI	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	7	det	_	TokenRange=23:26
7	manera	manera	NOUN	S	Gender=Fem|Number=Sing	2	obl	_	TokenRange=27:34
8	ca	ca	PRON	PR	PronType=Rel	11	nsubj	_	TokenRange=35:38
9	si	si	PRON	PC	Person=3|PronType=Prs	11	expl	_	Clitic=Yes
10	lu	lu	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Prs	11	obj	_	Clitic=Yes
11	sintìa	sintiri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	7	acl:relcl	_	TokenRange=45:52
12	nta	nta	ADP	E	_	14	case	_	_
13	la	lu	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	gula	gula	NOUN	S	Gender=Fem|Number=Sing	11	obl	_	SpaceAfter=No|TokenRange=59:63
15	.	.	PUNCT	FS	_	2	punct	_	TokenRange=63:64

~~~


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 20 iobj	color:blue
1	—	—	PUNCT	FF	_	16	punct	_	SpaceAfter=No|TokenRange=1258:1259
2	"	"	PUNCT	FB	_	4	punct	_	SpaceAfter=No|TokenRange=1259:1260
3	Riali	riali	ADJ	A	_	4	amod	_	TokenRange=1260:1265
4	Maistà	Maistà	NOUN	S	Gender=Fem	16	nsubj	_	TokenRange=1266:1272
5	(	(	PUNCT	FB	_	7	punct	_	SpaceAfter=No|TokenRange=1273:1274
6	cci	ci	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	iobj	_	Clitic=Yes|TokenRange=1274:1277
7	dissi	diciri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	16	parataxis	_	TokenRange=1278:1283
8	Cola	Cola	PROPN	SP	_	7	nsubj	_	SpaceAfter=No|TokenRange=1284:1288
9	)	)	PUNCT	FB	_	7	punct	_	SpaceAfter=No|TokenRange=1288:1289
10	,	,	PUNCT	FF	_	7	punct	_	TokenRange=1289:1290
11	si	si	SCONJ	CS	_	13	mark	_	TokenRange=1291:1293
12	io	io	PRON	PE	Number=Sing|Person=1|PronType=Prs	13	nsubj	_	TokenRange=1294:1296
13	scinnu	scinniri	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	16	advcl	_	SpaceAfter=No|TokenRange=1297:1303
14	,	,	PUNCT	FF	_	13	punct	_	TokenRange=1303:1304
15	no	non	ADV	BN	PronType=Neg	16	advmod	_	TokenRange=1305:1308
16	'nchianu	inchianari	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=1309:1316
17	cchiù	chiù	ADV	B	_	18	advmod	_	TokenRange=1317:1320
18	supra	supra	ADV	B	_	16	advmod	_	SpaceAfter=No|TokenRange=1321:1326
19	;	;	PUNCT	FC	_	16	punct	_	TokenRange=1326:1327
20	nni	ni	PRON	PC	PronType=Prs	22	iobj	_	Clitic=Yes|TokenRange=1328:1330
21	su'	essiri	AUX	VA	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	22	cop	_	TokenRange=1331:1335
22	sicuru	sicuru	ADJ	A	Gender=Masc|Number=Sing	16	parataxis	_	SpaceAfter=No|TokenRange=1336:1342
23	"	"	PUNCT	FB	_	22	punct	_	TokenRange=1342:1343
24	(	(	PUNCT	FB	_	30	punct	_	SpaceAfter=No|TokenRange=1344:1345
25	a	a	ADP	E	_	26	case	_	TokenRange=1345:1346
26	Cola	Cola	PROPN	SP	_	30	obl	_	TokenRange=1347:1351
27	Pisci	Pisci	PROPN	SP	_	26	flat:name	_	TokenRange=1352:1357
28	mi	mi	PRON	PC	Number=Sing|Person=1|PronType=Prs	30	iobj	_	Clitic=Yes|TokenRange=1358:1360
29	cci	ci	PRON	PC	Gender=Masc|Number=Sing|Person=3|PronType=Prs	30	iobj	_	Clitic=Yes|TokenRange=1361:1364
30	parrava	parrari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	parataxis	_	TokenRange=1365:1372
31	lu	lu	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	32	det	_	TokenRange=1373:1375
32	cori	cori	NOUN	S	Gender=Masc|Number=Sing	30	nsubj	_	SpaceAfter=No|TokenRange=1376:1381
33	)	)	PUNCT	FB	_	30	punct	_	SpaceAfter=No|TokenRange=1381:1382
34	.	.	PUNCT	FS	_	16	punct	_	TokenRange=1382:1383

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 17 iobj	color:blue
1	Lu	lu	DET	RD	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	TokenRange=815:817
2	Re	Re	NOUN	S	Gender=Masc	4	nsubj	_	TokenRange=818:820
3	non	non	ADV	BN	PronType=Neg	4	advmod	_	TokenRange=821:824
4	ristau	ristari	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	TokenRange=825:831
5	sudisfattu	sudisfattu	ADJ	A	Gender=Masc|Number=Sing	4	xcomp	_	TokenRange=832:843
6	di	di	ADP	E	_	8	case	_	TokenRange=844:846
7	sta	chistu	DET	DD	Gender=Fem|Number=Sing|PronType=Dem	8	det	_	TokenRange=847:853
8	cosa	cosa	NOUN	S	Gender=Fem|Number=Sing	5	obl	_	SpaceAfter=No|TokenRange=854:858
9	:	:	PUNCT	FC	_	4	punct	_	TokenRange=858:859
10	dici	diciri	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	_	SpaceAfter=No|TokenRange=860:864
11	:	:	PUNCT	FC	_	10	punct	_	TokenRange=864:865
12	—	—	PUNCT	FF	_	10	punct	_	TokenRange=866:867
13	"	"	PUNCT	FB	_	14	punct	_	SpaceAfter=No|TokenRange=868:869
14	Nenti	nenti	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	10	parataxis	_	SpaceAfter=No|TokenRange=869:875
15	:	:	PUNCT	FC	_	14	punct	_	TokenRange=875:876
16	non	non	ADV	BN	PronType=Neg	18	advmod	_	TokenRange=888:891
17	mi	mi	PRON	PC	Number=Sing|Person=1|PronType=Prs	18	iobj	_	Clitic=Yes|TokenRange=892:894
18	sapisti	sapiri	AUX	VM	Mood=Cnd|Number=Sing|Person=2|Tense=Past|VerbForm=Fin	14	parataxis	_	TokenRange=895:902
19	diri	diciri	VERB	V	VerbForm=Inf	18	ccomp	_	TokenRange=903:907
20	nenti	nenti	PRON	PI	Gender=Masc|Number=Sing|PronType=Ind	19	obj	_	SpaceAfter=No|TokenRange=908:914
21	.	.	PUNCT	FS	_	4	punct	_	TokenRange=914:915

~~~


