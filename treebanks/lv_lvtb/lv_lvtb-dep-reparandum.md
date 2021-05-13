---
layout: base
title:  'Statistics of reparandum in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `reparandum`

This relation is universal.

8 nodes (0%) are attached to their parents as `reparandum`.

5 instances of `reparandum` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.125.

The following 6 pairs of parts of speech are connected with `reparandum`: <tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (2; 25% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt> (2; 25% instances), <tt><a href="lv_lvtb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="lv_lvtb-pos-CCONJ.html">CCONJ</a></tt> (1; 13% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (1; 13% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt> (1; 13% instances), <tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt>-<tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 reparandum	color:blue
1	Zālē	zāle	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl:loc	LvtbNodeId=a-p980-p2s2w1
2	bija	būt	AUX	vcnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	4	reparandum	4:reparandum	LvtbNodeId=a-p980-p2s2w2
3	aizņemas	aizņemt	VERB	vmnpdfpnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|Typo=Yes|VerbForm=Part|Voice=Pass	0	root	0:root	CorrectForm=aizņemtas|CorrectionType=Spelling|LvtbNodeId=a-p980-p2s2w3
4	bija	būt	AUX	vcnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	LvtbNodeId=a-p980-p2s2w4
5	gandrīz	gandrīz	ADV	r0q	_	6	advmod	6:advmod	LvtbNodeId=a-p980-p2s2w5
6	visas	visa	DET	pg0fpnn	Case=Nom|Gender=Fem|Number=Plur|PronType=Tot	7	det	7:det	LvtbNodeId=a-p980-p2s2w6
7	sēdvietas	sēdvieta	NOUN	ncfpn4	Case=Nom|Gender=Fem|Number=Plur	3	nsubj:pass	3:nsubj:pass	LvtbNodeId=a-p980-p2s2w7|SpaceAfter=No
8	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-p980-p2s2w8

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 12 reparandum	color:blue
1	Neviens	neviens	PRON	pi0msny	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind,Neg	2	nsubj	2:nsubj	LvtbNodeId=a-p18885-p3s3w1
2	nedodas	doties	VERB	vmyipi130ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Reflex=Yes|Tense=Pres|VerbForm=Fin|Voice=Act	14	parataxis	14:parataxis	LvtbNodeId=a-p18885-p3s3w2
3	laukumā	laukums	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	2	obl	2:obl:loc	LvtbNodeId=a-p18885-p3s3w3|SpaceAfter=No
4	,	,	PUNCT	zc	_	5	punct	5:punct	LvtbNodeId=a-p18885-p3s3w4
5	rēķinoties	rēķināties	VERB	vmypu0000000n	Polarity=Pos|Reflex=Yes|VerbForm=Conv	2	advcl	2:advcl	LvtbNodeId=a-p18885-p3s3w5
6	ar	ar	ADP	spsa	_	8	case	8:case	LvtbNodeId=a-p18885-p3s3w6
7	šādu	šāds	DET	pd0msan	Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	8	det	8:det	LvtbNodeId=a-p18885-p3s3w7
8	iznākumu	iznākums	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	5	iobj	5:iobj	LvtbNodeId=a-p18885-p3s3w8|SpaceAfter=No
9	,	,	PUNCT	zc	_	5	punct	5:punct	LvtbNodeId=a-p18885-p3s3w9|SpaceAfter=No
10	"	"	PUNCT	zq	_	2	punct	2:punct	LvtbNodeId=a-p18885-p3s3w10
11	Gorkša	Gorkšs	PROPN	npmsg1	Case=Gen|Gender=Masc|Number=Sing	13	obl	13:obl:gen	LvtbNodeId=a-p18885-p3s3w11
12	teikto	teikt	VERB	vmnpdmsapsypn	Aspect=Perf|Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	13	reparandum	13:reparandum	LvtbNodeId=a-p18885-p3s3w12
13	teikto	teikt	VERB	vmnpdmsapsypn	Aspect=Perf|Case=Acc|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	14	obj	14:obj	LvtbNodeId=a-p18885-p3s3w13
14	citē	citēt	VERB	vmnipt230an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-p18885-p3s3w14
15	Eiropas	Eiropa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	18	nmod	18:nmod:gen	LvtbNodeId=a-p18885-p3s3w15
16	Futbola	futbols	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	17	nmod	17:nmod:gen	LvtbNodeId=a-p18885-p3s3w16
17	federāciju	federācija	NOUN	ncfpg4	Case=Gen|Gender=Fem|Number=Plur	18	nmod	18:nmod:gen	LvtbNodeId=a-p18885-p3s3w17
18	asociācija	asociācija	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	14	nsubj	14:nsubj	LvtbNodeId=a-p18885-p3s3w18
19	(	(	PUNCT	zb	_	20	punct	20:punct	LvtbNodeId=a-p18885-p3s3w19|SpaceAfter=No
20	UEFA	UEFA	PROPN	yp	Abbr=Yes	18	appos	18:appos	LvtbNodeId=a-p18885-p3s3w20|SpaceAfter=No
21	)	)	PUNCT	zb	_	20	punct	20:punct	LvtbNodeId=a-p18885-p3s3w21|SpaceAfter=No
22	.	.	PUNCT	zs	_	14	punct	14:punct	LvtbNodeId=a-p18885-p3s3w22

~~~


~~~ conllu
# visual-style 98	bgColor:blue
# visual-style 98	fgColor:white
# visual-style 116	bgColor:blue
# visual-style 116	fgColor:white
# visual-style 116 98 reparandum	color:blue
1	(	(	PUNCT	zb	_	2	punct	2:punct	LvtbNodeId=a-n136-p17s1w1|SpaceAfter=No
2	6	6	NUM	xn	NumType=Card	5	parataxis	5:parataxis	LvtbNodeId=a-n136-p17s1w2|SpaceAfter=No
3	)	)	PUNCT	zb	_	2	punct	2:punct	LvtbNodeId=a-n136-p17s1w3
4	Ir	būt	AUX	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	LvtbNodeId=a-n136-p17s1w4
5	jānodrošina	nodrošināt	VERB	vmnd0t300an	Mood=Nec|Polarity=Pos|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-n136-p17s1w5|SpaceAfter=No
6	,	,	PUNCT	zc	_	13	punct	13:punct	LvtbNodeId=a-n136-p17s1w6
7	ka	ka	SCONJ	cs	_	13	mark	13:mark	LvtbNodeId=a-n136-p17s1w7
8	no	no	ADP	spsg	_	11	case	11:case	LvtbNodeId=a-n136-p17s1w8
9	šīs	šī	DET	pd3fsgn	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Dem	11	det	11:det	LvtbNodeId=a-n136-p17s1w9
10	direktīvas	direktīva	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	11	nmod	11:nmod:gen	LvtbNodeId=a-n136-p17s1w10
11	jomas	joma	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	13	iobj	13:iobj	LvtbNodeId=a-n136-p17s1w11
12	netiek	tikt	AUX	vanipi130ay	Evident=Fh|Mood=Ind|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin|Voice=Act	13	aux:pass	13:aux:pass	LvtbNodeId=a-n136-p17s1w12
13	izslēgti	izslēgt	VERB	vmnpdmpnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	5	ccomp	5:ccomp	LvtbNodeId=a-n136-p17s1w13
14	darbinieki	darbinieks	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	13	nsubj:pass	13:nsubj:pass	LvtbNodeId=a-n136-p17s1w14|SpaceAfter=No
15	,	,	PUNCT	zc	_	17	punct	17:punct	LvtbNodeId=a-n136-p17s1w15
16	kas	kas	PRON	pr000nn	Case=Nom|PronType=Rel	17	nsubj:pass	17:nsubj:pass	LvtbNodeId=a-n136-p17s1w16
17	minēti	minēt	VERB	vmnpdmpnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	14	acl	14:acl	LvtbNodeId=a-n136-p17s1w17
18	1997.	1997.	ADJ	xo	NumType=Ord	19	amod	19:amod	LvtbNodeId=a-n136-p17s1w18
19	gada	gads	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	21	nmod	21:nmod:gen	LvtbNodeId=a-n136-p17s1w19
20	15.	15.	ADJ	xo	NumType=Ord	21	amod	21:amod	LvtbNodeId=a-n136-p17s1w20
21	decembra	decembris	NOUN	ncmsg2	Case=Gen|Gender=Masc|Number=Sing	23	nmod	23:nmod:gen	LvtbNodeId=a-n136-p17s1w21
22	Direktīvā	direktīva	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	23	nmod	23:nmod	LvtbNodeId=a-n136-p17s1w22
23	97	97	NUM	xn	NumType=Card	17	obl	17:obl:loc	LvtbNodeId=a-n136-p17s1w23|SpaceAfter=No
24	/	/	PUNCT	zx	_	23	punct	23:punct	LvtbNodeId=a-n136-p17s1w24|SpaceAfter=No
25	81	81	NUM	xn	NumType=Card	23	flat:name	23:flat:name	LvtbNodeId=a-n136-p17s1w25|SpaceAfter=No
26	/	/	PUNCT	zx	_	23	punct	23:punct	LvtbNodeId=a-n136-p17s1w26|SpaceAfter=No
27	EK	EK	PROPN	yp	Abbr=Yes	23	flat:name	23:flat:name	LvtbNodeId=a-n136-p17s1w27
28	par	par	ADP	spsa	_	29	case	29:case	LvtbNodeId=a-n136-p17s1w28
29	Pamatnolīgumu	pamatnolīgums	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	23	nmod	23:nmod:acc	LvtbNodeId=a-n136-p17s1w29
30	attiecībā	attiecība	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	29	nmod	29:nmod:loc	LvtbNodeId=a-n136-p17s1w30
31	uz	uz	ADP	spsa	_	35	case	35:case	LvtbNodeId=a-n136-p17s1w31
32	nepilna	nepilns	ADJ	armsgnp	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	34	amod	34:amod	LvtbNodeId=a-n136-p17s1w32
33	darba	darbs	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	34	nmod	34:nmod:gen	LvtbNodeId=a-n136-p17s1w33
34	laika	laiks	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	35	nmod	35:nmod:gen	LvtbNodeId=a-n136-p17s1w34
35	darbu	darbs	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	30	iobj	30:iobj	LvtbNodeId=a-n136-p17s1w35|SpaceAfter=No
36	,	,	PUNCT	zc	_	38	punct	38:punct	LvtbNodeId=a-n136-p17s1w36
37	ko	kas	PRON	pr000an	Case=Acc|PronType=Rel	38	obj	38:obj	LvtbNodeId=a-n136-p17s1w37
38	noslēgušas	noslēgt	VERB	vmnpdfpnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	23	acl	23:acl	LvtbNodeId=a-n136-p17s1w38
39	Eiropas	Eiropa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	45	nmod	45:nmod:gen	LvtbNodeId=a-n136-p17s1w39
40	Rūpniecības	rūpniecība	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	45	nmod	45:nmod:acc	LvtbNodeId=a-n136-p17s1w40
41	un	un	CCONJ	cc	_	44	cc	44:cc	LvtbNodeId=a-n136-p17s1w41
42	darba	darbs	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	43	nmod	43:nmod:gen	LvtbNodeId=a-n136-p17s1w42
43	devēju	devējs	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	44	nmod	44:nmod:gen	LvtbNodeId=a-n136-p17s1w43
44	konfederācijas	konfederācija	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	40	conj	40:conj|45:nmod:gen	LvtbNodeId=a-n136-p17s1w44
45	savienība	savienība	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	38	nsubj	38:nsubj	LvtbNodeId=a-n136-p17s1w45
46	(	(	PUNCT	zb	_	47	punct	47:punct	LvtbNodeId=a-n136-p17s1w46|SpaceAfter=No
47	UNICE	UNICE	PROPN	yp	Abbr=Yes	45	parataxis	45:parataxis	LvtbNodeId=a-n136-p17s1w47|SpaceAfter=No
48	)	)	PUNCT	zb	_	47	punct	47:punct	LvtbNodeId=a-n136-p17s1w48|SpaceAfter=No
49	,	,	PUNCT	zc	_	61	punct	61:punct	LvtbNodeId=a-n136-p17s1w49
50	Uzņēmumu	uzņēmums	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	61	nmod	61:nmod:gen	LvtbNodeId=a-n136-p17s1w50
51	ar	ar	ADP	spsa	_	54	case	54:case	LvtbNodeId=a-n136-p17s1w51
52	valsts	valsts	NOUN	ncfsg6	Case=Gen|Gender=Fem|Number=Sing	53	nmod	53:nmod:gen	LvtbNodeId=a-n136-p17s1w52
53	kapitāla	kapitāls	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	54	nmod	54:nmod:gen	LvtbNodeId=a-n136-p17s1w53
54	daļu	daļa	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	50	nmod	50:nmod:acc	LvtbNodeId=a-n136-p17s1w54
55	un	un	CCONJ	cc	_	59	cc	59:cc	LvtbNodeId=a-n136-p17s1w55
56	vispārējās	vispārējs	ADJ	arfsgyp	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	58	amod	58:amod	LvtbNodeId=a-n136-p17s1w56
57	ekonomiskās	ekonomisks	ADJ	affsgyp	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	58	amod	58:amod	LvtbNodeId=a-n136-p17s1w57
58	intereses	interese	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	59	nmod	59:nmod:gen	LvtbNodeId=a-n136-p17s1w58
59	uzņēmumu	uzņēmums	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	50	conj	50:conj|61:nmod:gen	LvtbNodeId=a-n136-p17s1w59
60	Eiropas	Eiropa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	61	nmod	61:nmod:gen	LvtbNodeId=a-n136-p17s1w60
61	Centrs	centrs	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	45	conj	38:nsubj|45:conj	LvtbNodeId=a-n136-p17s1w61
62	(	(	PUNCT	zb	_	63	punct	63:punct	LvtbNodeId=a-n136-p17s1w62|SpaceAfter=No
63	CEEP	CEEP	PROPN	yp	Abbr=Yes	61	parataxis	61:parataxis	LvtbNodeId=a-n136-p17s1w63|SpaceAfter=No
64	)	)	PUNCT	zb	_	63	punct	63:punct	LvtbNodeId=a-n136-p17s1w64
65	un	un	CCONJ	cc	_	68	cc	68:cc	LvtbNodeId=a-n136-p17s1w65
66	Eiropas	Eiropa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	68	nmod	68:nmod:gen	LvtbNodeId=a-n136-p17s1w66
67	Arodbiedrību	arodbiedrība	NOUN	ncfpg4	Case=Gen|Gender=Fem|Number=Plur	68	nmod	68:nmod:gen	LvtbNodeId=a-n136-p17s1w67
68	konfederācija	konfederācija	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	45	conj	38:nsubj|45:conj	LvtbNodeId=a-n136-p17s1w68
69	(	(	PUNCT	zb	_	70	punct	70:punct	LvtbNodeId=a-n136-p17s1w69|SpaceAfter=No
70	EAK	EAK	PROPN	yp	Abbr=Yes	68	parataxis	68:parataxis	LvtbNodeId=a-n136-p17s1w70|SpaceAfter=No
71	)	)	PUNCT	zb	_	70	punct	70:punct	LvtbNodeId=a-n136-p17s1w71
72	[	(	PUNCT	zb	_	73	punct	73:punct	LvtbNodeId=a-n136-p17s1w72|SpaceAfter=No
73	5	5	NUM	xn	NumType=Card	23	parataxis	23:parataxis	LvtbNodeId=a-n136-p17s1w73|SpaceAfter=No
74	]	)	PUNCT	zb	_	73	punct	73:punct	LvtbNodeId=a-n136-p17s1w74|SpaceAfter=No
75	,	,	PUNCT	zc	_	82	punct	82:punct	LvtbNodeId=a-n136-p17s1w75
76	Padomes	padome	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	82	nmod	82:nmod:gen	LvtbNodeId=a-n136-p17s1w76
77	1999.	1999.	ADJ	xo	NumType=Ord	78	amod	78:amod	LvtbNodeId=a-n136-p17s1w77
78	gada	gads	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	80	nmod	80:nmod:gen	LvtbNodeId=a-n136-p17s1w78
79	28.	28.	ADJ	xo	NumType=Ord	80	amod	80:amod	LvtbNodeId=a-n136-p17s1w79
80	jūnija	jūnijs	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	82	nmod	82:nmod:gen	LvtbNodeId=a-n136-p17s1w80
81	Direktīvā	direktīva	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	82	nmod	82:nmod	LvtbNodeId=a-n136-p17s1w81
82	1999	1999	NUM	xn	NumType=Card	23	conj	17:obl:loc|23:conj	LvtbNodeId=a-n136-p17s1w82|SpaceAfter=No
83	/	/	PUNCT	zx	_	82	punct	82:punct	LvtbNodeId=a-n136-p17s1w83|SpaceAfter=No
84	70	70	NUM	xn	NumType=Card	82	flat:name	82:flat:name	LvtbNodeId=a-n136-p17s1w84|SpaceAfter=No
85	/	/	PUNCT	zx	_	82	punct	82:punct	LvtbNodeId=a-n136-p17s1w85|SpaceAfter=No
86	EK	EK	PROPN	yp	Abbr=Yes	82	flat:name	82:flat:name	LvtbNodeId=a-n136-p17s1w86
87	par	par	ADP	spsa	_	88	case	88:case	LvtbNodeId=a-n136-p17s1w87
88	Pamatnolīgumu	pamatnolīgums	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	82	nmod	82:nmod:acc	LvtbNodeId=a-n136-p17s1w88
89	attiecībā	attiecība	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	88	nmod	88:nmod:loc	LvtbNodeId=a-n136-p17s1w89
90	uz	uz	ADP	spsa	_	91	case	91:case	LvtbNodeId=a-n136-p17s1w90
91	darbu	darbs	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	89	iobj	89:iobj	LvtbNodeId=a-n136-p17s1w91
92	uz	uz	ADP	spsa	_	94	case	94:case	LvtbNodeId=a-n136-p17s1w92
93	noteiktu	noteikt	VERB	vmnpdmsapsnpn	Aspect=Perf|Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	94	amod	94:amod	LvtbNodeId=a-n136-p17s1w93
94	laiku	laiks	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	91	nmod	91:nmod:acc	LvtbNodeId=a-n136-p17s1w94|SpaceAfter=No
95	,	,	PUNCT	zc	_	97	punct	97:punct	LvtbNodeId=a-n136-p17s1w95
96	ko	kas	PRON	pr000an	Case=Acc|PronType=Rel	97	obj	97:obj	LvtbNodeId=a-n136-p17s1w96
97	noslēgušas	noslēgt	VERB	vmnpdfpnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	82	acl	82:acl	LvtbNodeId=a-n136-p17s1w97
98	un	un	CCONJ	cc	_	116	reparandum	116:reparandum	LvtbNodeId=a-n136-p17s1w98
99	Eiropas	Eiropa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	101	nmod	101:nmod:gen	LvtbNodeId=a-n136-p17s1w99
100	Arodbiedrību	arodbiedrība	NOUN	ncfpg4	Case=Gen|Gender=Fem|Number=Plur	101	nmod	101:nmod:gen	LvtbNodeId=a-n136-p17s1w100
101	konfederācija	konfederācija	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	97	nsubj	97:nsubj	LvtbNodeId=a-n136-p17s1w101
102	(	(	PUNCT	zb	_	103	punct	103:punct	LvtbNodeId=a-n136-p17s1w102|SpaceAfter=No
103	EAK	EAK	PROPN	yp	Abbr=Yes	101	parataxis	101:parataxis	LvtbNodeId=a-n136-p17s1w103|SpaceAfter=No
104	)	)	PUNCT	zb	_	103	punct	103:punct	LvtbNodeId=a-n136-p17s1w104|SpaceAfter=No
105	,	,	PUNCT	zc	_	112	punct	112:punct	LvtbNodeId=a-n136-p17s1w105
106	Eiropas	Eiropa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	112	nmod	112:nmod:gen	LvtbNodeId=a-n136-p17s1w106
107	Rūpniecības	rūpniecība	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	112	nmod	112:nmod:gen	LvtbNodeId=a-n136-p17s1w107
108	un	un	CCONJ	cc	_	111	cc	111:cc	LvtbNodeId=a-n136-p17s1w108
109	darba	darbs	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	110	nmod	110:nmod:gen	LvtbNodeId=a-n136-p17s1w109
110	devēju	devējs	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	111	nmod	111:nmod:gen	LvtbNodeId=a-n136-p17s1w110
111	konfederācijas	konfederācija	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	107	conj	107:conj|112:nmod:gen	LvtbNodeId=a-n136-p17s1w111
112	savienība	savienība	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	101	conj	97:nsubj|101:conj	LvtbNodeId=a-n136-p17s1w112
113	(	(	PUNCT	zb	_	114	punct	114:punct	LvtbNodeId=a-n136-p17s1w113|SpaceAfter=No
114	UNICE	UNICE	PROPN	yp	Abbr=Yes	112	parataxis	112:parataxis	LvtbNodeId=a-n136-p17s1w114|SpaceAfter=No
115	)	)	PUNCT	zb	_	114	punct	114:punct	LvtbNodeId=a-n136-p17s1w115
116	un	un	CCONJ	cc	_	128	cc	128:cc	LvtbNodeId=a-n136-p17s1w116
117	Uzņēmumu	uzņēmums	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	128	nmod	128:nmod:gen	LvtbNodeId=a-n136-p17s1w117
118	ar	ar	ADP	spsa	_	121	case	121:case	LvtbNodeId=a-n136-p17s1w118
119	valsts	valsts	NOUN	ncfsg6	Case=Gen|Gender=Fem|Number=Sing	120	nmod	120:nmod:gen	LvtbNodeId=a-n136-p17s1w119
120	kapitāla	kapitāls	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	121	nmod	121:nmod:gen	LvtbNodeId=a-n136-p17s1w120
121	daļu	daļa	NOUN	ncfsa4	Case=Acc|Gender=Fem|Number=Sing	117	nmod	117:nmod:acc	LvtbNodeId=a-n136-p17s1w121
122	un	un	CCONJ	cc	_	126	cc	126:cc	LvtbNodeId=a-n136-p17s1w122
123	vispārējās	vispārējs	ADJ	arfsgyp	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	125	amod	125:amod	LvtbNodeId=a-n136-p17s1w123
124	ekonomiskās	ekonomisks	ADJ	affsgyp	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	125	amod	125:amod	LvtbNodeId=a-n136-p17s1w124
125	intereses	interese	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	126	nmod	126:nmod:gen	LvtbNodeId=a-n136-p17s1w125
126	uzņēmumu	uzņēmums	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	117	conj	117:conj|128:nmod:gen	LvtbNodeId=a-n136-p17s1w126
127	Eiropas	Eiropa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	128	nmod	128:nmod:gen	LvtbNodeId=a-n136-p17s1w127
128	Centrs	centrs	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	101	conj	97:nsubj|101:conj	LvtbNodeId=a-n136-p17s1w128
129	(	(	PUNCT	zb	_	130	punct	130:punct	LvtbNodeId=a-n136-p17s1w129|SpaceAfter=No
130	CEEP	CEEP	PROPN	yp	Abbr=Yes	128	parataxis	128:parataxis	LvtbNodeId=a-n136-p17s1w130|SpaceAfter=No
131	)	)	PUNCT	zb	_	130	punct	130:punct	LvtbNodeId=a-n136-p17s1w131
132	[	(	PUNCT	zb	_	133	punct	133:punct	LvtbNodeId=a-n136-p17s1w132|SpaceAfter=No
133	6	6	NUM	xn	NumType=Card	97	parataxis	97:parataxis	LvtbNodeId=a-n136-p17s1w133|SpaceAfter=No
134	]	)	PUNCT	zb	_	133	punct	133:punct	LvtbNodeId=a-n136-p17s1w134|SpaceAfter=No
135	,	,	PUNCT	zc	_	97	punct	97:punct	LvtbNodeId=a-n136-p17s1w135
136	un	un	CCONJ	cc	_	143	cc	143:cc	LvtbNodeId=a-n136-p17s1w136
137	Padomes	padome	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	143	nmod	143:nmod:gen	LvtbNodeId=a-n136-p17s1w137
138	1991.	1991.	ADJ	xo	NumType=Ord	139	amod	139:amod	LvtbNodeId=a-n136-p17s1w138
139	gada	gads	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	141	nmod	141:nmod:gen	LvtbNodeId=a-n136-p17s1w139
140	25.	25.	ADJ	xo	NumType=Ord	141	amod	141:amod	LvtbNodeId=a-n136-p17s1w140
141	jūnija	jūnijs	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	143	nmod	143:nmod:gen	LvtbNodeId=a-n136-p17s1w141
142	Direktīvā	direktīva	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	143	nmod	143:nmod	LvtbNodeId=a-n136-p17s1w142
143	91	91	NUM	xn	NumType=Card	23	conj	17:obl:loc|23:conj	LvtbNodeId=a-n136-p17s1w143|SpaceAfter=No
144	/	/	PUNCT	zx	_	143	punct	143:punct	LvtbNodeId=a-n136-p17s1w144|SpaceAfter=No
145	383	383	NUM	xn	NumType=Card	143	flat:name	143:flat:name	LvtbNodeId=a-n136-p17s1w145|SpaceAfter=No
146	/	/	PUNCT	zx	_	143	punct	143:punct	LvtbNodeId=a-n136-p17s1w146|SpaceAfter=No
147	EEK	EEK	PROPN	yp	Abbr=Yes	143	flat:name	143:flat:name	LvtbNodeId=a-n136-p17s1w147|SpaceAfter=No
148	,	,	PUNCT	zc	_	151	punct	151:punct	LvtbNodeId=a-n136-p17s1w148
149	ar	ar	ADP	spsa	_	150	case	150:case	LvtbNodeId=a-n136-p17s1w149
150	ko	kas	PRON	pr000an	Case=Acc|PronType=Rel	151	iobj	151:iobj	LvtbNodeId=a-n136-p17s1w150
151	papildina	papildināt	VERB	vmnipt330an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	143	acl	143:acl	LvtbNodeId=a-n136-p17s1w151
152	pasākumus	pasākums	NOUN	ncmpa1	Case=Acc|Gender=Masc|Number=Plur	151	obj	151:obj	LvtbNodeId=a-n136-p17s1w152|SpaceAfter=No
153	,	,	PUNCT	zc	_	157	punct	157:punct	LvtbNodeId=a-n136-p17s1w153
154	kuru	kurš	DET	pr0mpgn	Case=Gen|Gender=Masc|Number=Plur|PronType=Rel	155	det	155:det	LvtbNodeId=a-n136-p17s1w154
155	mērķis	mērķis	NOUN	ncmsn2	Case=Nom|Gender=Masc|Number=Sing	157	nsubj	157:nsubj	LvtbNodeId=a-n136-p17s1w155
156	ir	būt	AUX	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	157	cop	157:cop	LvtbNodeId=a-n136-p17s1w156
157	veicināt	veicināt	VERB	vmnn0t3000n	Polarity=Pos|VerbForm=Inf	152	acl	152:acl	LvtbNodeId=a-n136-p17s1w157
158	uzlabojumus	uzlabojums	NOUN	ncmpa1	Case=Acc|Gender=Masc|Number=Plur	157	obj	157:obj	LvtbNodeId=a-n136-p17s1w158
159	darba	darbs	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	160	nmod	160:nmod:gen	LvtbNodeId=a-n136-p17s1w159
160	drošībā	drošība	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	158	nmod	158:nmod:loc	LvtbNodeId=a-n136-p17s1w160
161	un	un	CCONJ	cc	_	163	cc	163:cc	LvtbNodeId=a-n136-p17s1w161
162	veselības	veselība	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	163	nmod	163:nmod:gen	LvtbNodeId=a-n136-p17s1w162
163	aizsardzībā	aizsardzība	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	160	conj	158:nmod:loc|160:conj	LvtbNodeId=a-n136-p17s1w163
164	attiecībā	attiecība	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	158	nmod	158:nmod:loc	LvtbNodeId=a-n136-p17s1w164
165	uz	uz	ADP	sppd	_	166	case	166:case	LvtbNodeId=a-n136-p17s1w165
166	darbiniekiem	darbinieks	NOUN	ncmpd1	Case=Dat|Gender=Masc|Number=Plur	164	iobj	164:iobj	LvtbNodeId=a-n136-p17s1w166|SpaceAfter=No
167	,	,	PUNCT	zc	_	169	punct	169:punct	LvtbNodeId=a-n136-p17s1w167
168	kas	kas	PRON	pr000nn	Case=Nom|PronType=Rel	169	nsubj:pass	169:nsubj:pass	LvtbNodeId=a-n136-p17s1w168
169	pieņemti	pieņemt	VERB	vmnpdmpnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	166	acl	166:acl	LvtbNodeId=a-n136-p17s1w169
170	darbā	darbs	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	169	obl	169:obl:loc	LvtbNodeId=a-n136-p17s1w170
171	uz	uz	ADP	spsa	_	173	case	173:case	LvtbNodeId=a-n136-p17s1w171
172	noteiktu	noteikt	VERB	vmnpdmsapsnpn	Aspect=Perf|Case=Acc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	173	amod	173:amod	LvtbNodeId=a-n136-p17s1w172
173	laiku	laiks	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	170	nmod	170:nmod:acc	LvtbNodeId=a-n136-p17s1w173
174	vai	vai	SCONJ	cs	_	176	cc	176:cc	LvtbNodeId=a-n136-p17s1w174
175	īslaicīgā	īslaicīgs	ADJ	armslnp	Case=Loc|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	176	amod	176:amod	LvtbNodeId=a-n136-p17s1w175
176	darbā	darbs	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	170	conj	169:obl:loc|170:conj	LvtbNodeId=a-n136-p17s1w176
177	[	(	PUNCT	zb	_	178	punct	178:punct	LvtbNodeId=a-n136-p17s1w177|SpaceAfter=No
178	7	7	NUM	xn	NumType=Card	143	parataxis	143:parataxis	LvtbNodeId=a-n136-p17s1w178|SpaceAfter=No
179	]	)	PUNCT	zb	_	178	punct	178:punct	LvtbNodeId=a-n136-p17s1w179|SpaceAfter=No
180	.	.	PUNCT	zs	_	5	punct	5:punct	LvtbNodeId=a-n136-p17s1w180

~~~


