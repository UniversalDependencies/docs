---
layout: base
title:  'Statistics of flat:foreign in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="lv_lvtb-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="lv_lvtb-dep-flat-name.html">flat:name</a></tt>.

115 nodes (0%) are attached to their parents as `flat:foreign`.

115 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.49565217391304.

The following 7 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="lv_lvtb-pos-X.html">X</a></tt>-<tt><a href="lv_lvtb-pos-X.html">X</a></tt> (106; 92% instances), <tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt>-<tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt> (3; 3% instances), <tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt>-<tt><a href="lv_lvtb-pos-X.html">X</a></tt> (2; 2% instances), <tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt>-<tt><a href="lv_lvtb-pos-SYM.html">SYM</a></tt> (1; 1% instances), <tt><a href="lv_lvtb-pos-X.html">X</a></tt>-<tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="lv_lvtb-pos-X.html">X</a></tt>-<tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="lv_lvtb-pos-X.html">X</a></tt>-<tt><a href="lv_lvtb-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:foreign	color:blue
1	Brauc	braukt	VERB	vmnipt130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-d29-p82s4w1
2	ar	ar	ADP	sppd	_	5	case	5:case	LvtbNodeId=a-d29-p82s4w2
3	gaiši	gaiši	ADV	rpm	Degree=Pos	4	advmod	4:advmod	LvtbNodeId=a-d29-p82s4w3
4	zilu	zils	ADJ	afmsanp	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	5	amod	5:amod	LvtbNodeId=a-d29-p82s4w4
5	Ford	Ford	X	xf	Foreign=Yes	1	iobj	1:iobj	LvtbNodeId=a-d29-p82s4w5
6	Sierra	Sierra	X	xf	Foreign=Yes	5	flat:foreign	5:flat:foreign	LvtbNodeId=a-d29-p82s4w6|SpaceAfter=No
7	,	,	PUNCT	zc	_	12	punct	12:punct	LvtbNodeId=a-d29-p82s4w7
8	kurai	kura	PRON	pr0fsdn	Case=Dat|Gender=Fem|Number=Sing|PronType=Rel	12	obl	12:obl:dat	LvtbNodeId=a-d29-p82s4w8
9	katrs	katrs	DET	pg0msnn	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	10	det	10:det	LvtbNodeId=a-d29-p82s4w9
10	spārns	spārns	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	LvtbNodeId=a-d29-p82s4w10
11	citā	cita	DET	pi0fsln	Case=Loc|Gender=Fem|Number=Sing|PronType=Ind	12	det	12:det	LvtbNodeId=a-d29-p82s4w11
12	krāsā	krāsa	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	5	acl	5:acl	LvtbNodeId=a-d29-p82s4w12|SpaceAfter=No
13	.	.	PUNCT	zs	_	1	punct	1:punct	LvtbNodeId=a-d29-p82s4w13

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat:foreign	color:blue
1	Pati	pati	PRON	pg0fsnn	Case=Nom|Gender=Fem|Number=Sing|PronType=Tot	2	dep	2:dep	LvtbNodeId=a-p3466-p25s4w1
2	lielākā	liels	ADJ	affsnyc	Case=Nom|Definite=Def|Degree=Cmp|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	LvtbNodeId=a-p3466-p25s4w2
3	no	no	ADP	sppd	_	4	case	4:case	LvtbNodeId=a-p3466-p25s4w3
4	tām	tā	PRON	pd3fpdn	Case=Dat|Gender=Fem|Number=Plur|Person=3|PronType=Dem	2	nmod	2:nmod:no	LvtbNodeId=a-p3466-p25s4w4
5	bija	būt	AUX	vcnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	LvtbNodeId=a-p3466-p25s4w5
6	izmērā	izmērs	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	0	root	0:root	LvtbNodeId=a-p3466-p25s4w6
7	1	1	NUM	xn	NumType=Card	10	nmod	10:nmod	LvtbNodeId=a-p3466-p25s4w7
8	x	x	SYM	xx	_	7	flat:foreign	7:flat:foreign	LvtbNodeId=a-p3466-p25s4w8
9	2	2	NUM	xn	NumType=Card	7	flat:foreign	7:flat:foreign	LvtbNodeId=a-p3466-p25s4w9
10	metri	metrs	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	6	nmod	6:nmod:nom	LvtbNodeId=a-p3466-p25s4w10|SpaceAfter=No
11	.	.	PUNCT	zs	_	6	punct	6:punct	LvtbNodeId=a-p3466-p25s4w11

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 flat:foreign	color:blue
1	Piedzīvojumu	piedzīvojums	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	2	nmod	2:nmod:gen	LvtbNodeId=a-p10134-p3s4w1
2	tūrisma	tūrisms	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	3	nmod	3:nmod:gen	LvtbNodeId=a-p10134-p3s4w2
3	filmu	filma	NOUN	ncfpg4	Case=Gen|Gender=Fem|Number=Plur	4	nmod	4:nmod:gen	LvtbNodeId=a-p10134-p3s4w3
4	kategorijā	kategorija	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	6	obl	6:obl:loc	LvtbNodeId=a-p10134-p3s4w4
5	balva	balva	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	LvtbNodeId=a-p10134-p3s4w5
6	tika	tikt	VERB	vmnisi130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-p10134-p3s4w6
7	taizemiešu	taizemietis	NOUN	ncmpg2	Case=Gen|Gender=Masc|Number=Plur	8	nmod	8:nmod:gen	LvtbNodeId=a-p10134-p3s4w7
8	videofilmai	videofilma	NOUN	ncfsd4	Case=Dat|Gender=Fem|Number=Sing	11	nmod	11:nmod	LvtbNodeId=a-p10134-p3s4w8
9	«	"	PUNCT	zq	_	11	punct	11:punct	LvtbNodeId=a-p10134-p3s4w9|SpaceAfter=No
10	Es	es	PRON	pp10snn	Case=Nom|Number=Sing|Person=1|PronType=Prs	11	nsubj	11:nsubj	LvtbNodeId=a-p10134-p3s4w10
11	nīstu	nīst	VERB	vmnipt11san	Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	iobj	6:iobj	LvtbNodeId=a-p10134-p3s4w11
12	Taizemi	Taizeme	PROPN	npfsa5	Case=Acc|Gender=Fem|Number=Sing	11	obj	11:obj	LvtbNodeId=a-p10134-p3s4w12|SpaceAfter=No
13	»	"	PUNCT	zq	_	11	punct	11:punct	LvtbNodeId=a-p10134-p3s4w13
14	(	(	PUNCT	zb	_	16	punct	16:punct	LvtbNodeId=a-p10134-p3s4w14|SpaceAfter=No
15	«	"	PUNCT	zq	_	16	punct	16:punct	LvtbNodeId=a-p10134-p3s4w15|SpaceAfter=No
16	I	I	NUM	xn	NumType=Card	11	parataxis	11:parataxis	LvtbNodeId=a-p10134-p3s4w16
17	Hate	Hate	X	xf	Foreign=Yes	16	flat:foreign	16:flat:foreign	LvtbNodeId=a-p10134-p3s4w17
18	Thailand	Thailand	X	xf	Foreign=Yes	16	flat:foreign	16:flat:foreign	LvtbNodeId=a-p10134-p3s4w18|SpaceAfter=No
19	»	"	PUNCT	zq	_	16	punct	16:punct	LvtbNodeId=a-p10134-p3s4w19|SpaceAfter=No
20	)	)	PUNCT	zb	_	16	punct	16:punct	LvtbNodeId=a-p10134-p3s4w20|SpaceAfter=No
21	,	,	PUNCT	zc	_	26	punct	26:punct	LvtbNodeId=a-p10134-p3s4w21
22	eko	eko	NOUN	nc0000	_	23	nmod	23:nmod	LvtbNodeId=a-p10134-p3s4w22
23	tūrisma	tūrisms	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	24	nmod	24:nmod:gen	LvtbNodeId=a-p10134-p3s4w23
24	filmu	filma	NOUN	ncfpg4	Case=Gen|Gender=Fem|Number=Plur	25	nmod	25:nmod:gen	LvtbNodeId=a-p10134-p3s4w24
25	kategorijā	kategorija	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	26	obl	26:obl:loc	LvtbNodeId=a-p10134-p3s4w25
26	vispārliecinošākā	pārliecināt	VERB	vmnpdfsnapysn	Aspect=Imp|Case=Nom|Definite=Def|Degree=Sup|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Pres|VerbForm=Part|Voice=Act	6	conj	6:conj	LvtbNodeId=a-p10134-p3s4w26
27	bija	būt	AUX	vcnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	26	cop	26:cop	LvtbNodeId=a-p10134-p3s4w27
28	arī	arī	PART	q	_	30	discourse	30:discourse	LvtbNodeId=a-p10134-p3s4w28
29	«	"	PUNCT	zq	_	30	punct	30:punct	LvtbNodeId=a-p10134-p3s4w29|SpaceAfter=No
30	Grand	grand	X	xf	Foreign=Yes	33	iobj	33:iobj	LvtbNodeId=a-p10134-p3s4w30
31	Prix	prix	X	xf	Foreign=Yes	30	flat:foreign	30:flat:foreign	LvtbNodeId=a-p10134-p3s4w31|SpaceAfter=No
32	»	"	PUNCT	zq	_	30	punct	30:punct	LvtbNodeId=a-p10134-p3s4w32
33	nopelnījusī	nopelnīt	VERB	vmnpdfsnasypn	Aspect=Perf|Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	38	amod	38:amod	LvtbNodeId=a-p10134-p3s4w33
34	somu	soms	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	38	nmod	38:nmod:gen	LvtbNodeId=a-p10134-p3s4w34
35	«	"	PUNCT	zq	_	38	punct	38:punct	LvtbNodeId=a-p10134-p3s4w35|SpaceAfter=No
36	Baltās	balts	ADJ	affsgyp	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	37	amod	37:amod	LvtbNodeId=a-p10134-p3s4w36
37	nakts	nakts	NOUN	ncfsg6	Case=Gen|Gender=Fem|Number=Sing	38	nmod	38:nmod:gen	LvtbNodeId=a-p10134-p3s4w37
38	maģija	maģija	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	26	nsubj	26:nsubj	LvtbNodeId=a-p10134-p3s4w38|SpaceAfter=No
39	»	"	PUNCT	zq	_	38	punct	38:punct	LvtbNodeId=a-p10134-p3s4w39|SpaceAfter=No
40	,	,	PUNCT	zc	_	45	punct	45:punct	LvtbNodeId=a-p10134-p3s4w40
41	bet	bet	CCONJ	cc	_	45	cc	45:cc	LvtbNodeId=a-p10134-p3s4w41
42	komerciālā	komerciāls	ADJ	afmsgyp	Case=Gen|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	43	amod	43:amod	LvtbNodeId=a-p10134-p3s4w42
43	tūrisma	tūrisms	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	44	nmod	44:nmod:gen	LvtbNodeId=a-p10134-p3s4w43
44	kategorijā	kategorija	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	45	obl	45:obl:loc	LvtbNodeId=a-p10134-p3s4w44
45	uzvarēja	uzvarēt	VERB	vmnist330an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	6	conj	6:conj	LvtbNodeId=a-p10134-p3s4w45
46	britu	brits	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	47	obl	47:obl:acc	LvtbNodeId=a-p10134-p3s4w46
47	iesūtītā	iesūtīt	VERB	vmnpdfsnpsypn	Aspect=Perf|Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	51	amod	51:amod	LvtbNodeId=a-p10134-p3s4w47
48	videofilma	videofilma	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	51	nmod	51:nmod	LvtbNodeId=a-p10134-p3s4w48
49	«	"	PUNCT	zq	_	51	punct	51:punct	LvtbNodeId=a-p10134-p3s4w49|SpaceAfter=No
50	Lielbritānijas	Lielbritānija	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	51	nmod	51:nmod:gen	LvtbNodeId=a-p10134-p3s4w50
51	skaņas	skaņa	NOUN	ncfpn4	Case=Nom|Gender=Fem|Number=Plur	45	nsubj	45:nsubj	LvtbNodeId=a-p10134-p3s4w51|SpaceAfter=No
52	»	"	PUNCT	zq	_	51	punct	51:punct	LvtbNodeId=a-p10134-p3s4w52
53	(	(	PUNCT	zb	_	55	punct	55:punct	LvtbNodeId=a-p10134-p3s4w53|SpaceAfter=No
54	«	"	PUNCT	zq	_	55	punct	55:punct	LvtbNodeId=a-p10134-p3s4w54|SpaceAfter=No
55	Sounds	Sounds	X	xf	Foreign=Yes	51	parataxis	51:parataxis	LvtbNodeId=a-p10134-p3s4w55
56	of	of	X	xf	Foreign=Yes	55	flat:foreign	55:flat:foreign	LvtbNodeId=a-p10134-p3s4w56
57	Great	Great	X	xf	Foreign=Yes	55	flat:foreign	55:flat:foreign	LvtbNodeId=a-p10134-p3s4w57
58	Britain	Britain	X	xf	Foreign=Yes	55	flat:foreign	55:flat:foreign	LvtbNodeId=a-p10134-p3s4w58|SpaceAfter=No
59	»	"	PUNCT	zq	_	55	punct	55:punct	LvtbNodeId=a-p10134-p3s4w59|SpaceAfter=No
60	)	)	PUNCT	zb	_	55	punct	55:punct	LvtbNodeId=a-p10134-p3s4w60|SpaceAfter=No
61	,	,	PUNCT	zc	_	65	punct	65:punct	LvtbNodeId=a-p10134-p3s4w61
62	kur	kur	ADV	r0p	PronType=Int	65	advmod	65:advmod	LvtbNodeId=a-p10134-p3s4w62
63	Apvienotā	apvienot	VERB	vmnpdfsnpsypn	Aspect=Perf|Case=Nom|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	64	amod	64:amod	LvtbNodeId=a-p10134-p3s4w63
64	Karaliste	karaliste	NOUN	ncfsn5	Case=Nom|Gender=Fem|Number=Sing	65	nsubj:pass	65:nsubj:pass	LvtbNodeId=a-p10134-p3s4w64
65	reklamēta	reklamēt	VERB	vmnpdfsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	51	acl	51:acl	LvtbNodeId=a-p10134-p3s4w65
66	kā	kā	SCONJ	cs	_	69	case	69:case	LvtbNodeId=a-p10134-p3s4w66
67	pievilcīgs	pievilcīgs	ADJ	afmsnnp	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	69	amod	69:amod	LvtbNodeId=a-p10134-p3s4w67
68	tūrisma	tūrisms	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	69	nmod	69:nmod:gen	LvtbNodeId=a-p10134-p3s4w68
69	galamērķis	galamērķis	NOUN	ncmsn2	Case=Nom|Gender=Masc|Number=Sing	65	obl	65:obl:kā	LvtbNodeId=a-p10134-p3s4w69
70	cilvēkiem	cilvēks	NOUN	ncmpd1	Case=Dat|Gender=Masc|Number=Plur	69	nmod	69:nmod:dat	LvtbNodeId=a-p10134-p3s4w70
71	ar	ar	ADP	spsa	_	74	case	74:case	LvtbNodeId=a-p10134-p3s4w71
72	netradicionālu	netradicionāls	ADJ	afmsanp	Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	74	amod	74:amod	LvtbNodeId=a-p10134-p3s4w72
73	seksuālo	seksuāls	ADJ	affsayp	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	74	amod	74:amod	LvtbNodeId=a-p10134-p3s4w73
74	orientāciju	orientācija	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	70	nmod	70:nmod:ar	LvtbNodeId=a-p10134-p3s4w74|SpaceAfter=No
75	.	.	PUNCT	zs	_	6	punct	6:punct	LvtbNodeId=a-p10134-p3s4w75

~~~


