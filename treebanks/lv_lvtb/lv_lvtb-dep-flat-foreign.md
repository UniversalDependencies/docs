---
layout: base
title:  'Statistics of flat:foreign in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="lv_lvtb-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="lv_lvtb-dep-flat-name.html">flat:name</a></tt>.

128 nodes (0%) are attached to their parents as `flat:foreign`.

128 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.453125.

The following 3 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="lv_lvtb-pos-X.html">X</a></tt>-<tt><a href="lv_lvtb-pos-X.html">X</a></tt> (124; 97% instances), <tt><a href="lv_lvtb-pos-X.html">X</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="lv_lvtb-pos-X.html">X</a></tt>-<tt><a href="lv_lvtb-pos-NUM.html">NUM</a></tt> (2; 2% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 flat:foreign	color:blue
1	Brauc	braukt	VERB	vmnipt130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-d29-p82s4w1
2	ar	ar	ADP	sppd	_	5	case	5:case	LvtbNodeId=a-d29-p82s4w2
3	gaiši	gaiši	ADV	rpn	Degree=Pos	4	advmod	4:advmod	LvtbNodeId=a-d29-p82s4w3
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
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 32	bgColor:blue
# visual-style 32	fgColor:white
# visual-style 32 34 flat:foreign	color:blue
1	Piedāvāju	piedāvāt	VERB	vmnipt21san	Evident=Fh|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-p7249-p3s1w1
2	jūsu	jūs	PRON	pp20pgn	Case=Gen|Number=Plur|Person=2|PronType=Prs	3	det	3:det	LvtbNodeId=a-p7249-p3s1w2
3	vērtējumam	vērtējums	NOUN	ncmsd1	Case=Dat|Gender=Masc|Number=Sing	1	iobj	1:iobj	LvtbNodeId=a-p7249-p3s1w3
4	četrus	četri	NUM	mcsmpa	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	5	nummod	5:nummod	LvtbNodeId=a-p7249-p3s1w4
5	modeļus	modelis	NOUN	ncmpa2	Case=Acc|Gender=Masc|Number=Plur	1	obj	1:obj	LvtbNodeId=a-p7249-p3s1w5|SpaceAfter=No
6	,	,	PUNCT	zc	_	8	punct	8:punct	LvtbNodeId=a-p7249-p3s1w6
7	kas	kas	PRON	pr000nn	Case=Nom|PronType=Rel	8	nsubj:pass	8:nsubj:pass	LvtbNodeId=a-p7249-p3s1w7
8	veidoti	veidot	VERB	vmnpdmpnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	5	acl	5:acl	LvtbNodeId=a-p7249-p3s1w8|SpaceAfter=No
9	,	,	PUNCT	zc	_	10	punct	10:punct	LvtbNodeId=a-p7249-p3s1w9
10	ņemot	ņemt	VERB	vmnpu0000000n	Polarity=Pos|VerbForm=Conv	8	advcl	8:advcl	LvtbNodeId=a-p7249-p3s1w10
11	vērā	vērā	ADV	r0n	_	10	advmod	10:advmod	LvtbNodeId=a-p7249-p3s1w11
12	aktuālās	aktuāls	ADJ	affpayp	Case=Acc|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	13	amod	13:amod	LvtbNodeId=a-p7249-p3s1w12
13	modes	mode	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	14	nmod	14:nmod:gen	LvtbNodeId=a-p7249-p3s1w13
14	tendences	tendence	NOUN	ncfpa5	Case=Acc|Gender=Fem|Number=Plur	10	obj	10:obj	LvtbNodeId=a-p7249-p3s1w14|SpaceAfter=No
15	:	:	PUNCT	zo	_	17	punct	17:punct	LvtbNodeId=a-p7249-p3s1w15
16	[	[	PUNCT	zb	_	17	punct	17:punct	LvtbNodeId=a-p7249-p3s1w16|SpaceAfter=No
17	EX	ex	X	xf	Foreign=Yes	5	dep	5:dep	LvtbNodeId=a-p7249-p3s1w17|SpaceAfter=No
18	]	]	PUNCT	zb	_	17	punct	17:punct	LvtbNodeId=a-p7249-p3s1w18
19	HE	he	X	xf	Foreign=Yes	17	flat:foreign	17:flat:foreign	LvtbNodeId=a-p7249-p3s1w19|SpaceAfter=No
20	,	,	PUNCT	zc	_	22	punct	22:punct	LvtbNodeId=a-p7249-p3s1w20
21	[	[	PUNCT	zb	_	22	punct	22:punct	LvtbNodeId=a-p7249-p3s1w21|SpaceAfter=No
22	EX	ex	X	xf	Foreign=Yes	17	conj	5:dep|17:conj	LvtbNodeId=a-p7249-p3s1w22|SpaceAfter=No
23	]	]	PUNCT	zb	_	22	punct	22:punct	LvtbNodeId=a-p7249-p3s1w23
24	SHE	she	X	xf	Foreign=Yes	22	flat:foreign	22:flat:foreign	LvtbNodeId=a-p7249-p3s1w24|SpaceAfter=No
25	,	,	PUNCT	zc	_	27	punct	27:punct	LvtbNodeId=a-p7249-p3s1w25
26	[	[	PUNCT	zb	_	27	punct	27:punct	LvtbNodeId=a-p7249-p3s1w26|SpaceAfter=No
27	EX	ex	X	xf	Foreign=Yes	17	conj	5:dep|17:conj	LvtbNodeId=a-p7249-p3s1w27|SpaceAfter=No
28	]	]	PUNCT	zb	_	27	punct	27:punct	LvtbNodeId=a-p7249-p3s1w28
29	UNI	UNI	NOUN	yn	Abbr=Yes	27	flat:foreign	27:flat:foreign	LvtbNodeId=a-p7249-p3s1w29
30	un	un	CCONJ	cc	_	32	cc	32:cc	LvtbNodeId=a-p7249-p3s1w30
31	[	[	PUNCT	zb	_	32	punct	32:punct	LvtbNodeId=a-p7249-p3s1w31|SpaceAfter=No
32	EX	ex	X	xf	Foreign=Yes	17	conj	5:dep|17:conj	LvtbNodeId=a-p7249-p3s1w32|SpaceAfter=No
33	]	]	PUNCT	zb	_	32	punct	32:punct	LvtbNodeId=a-p7249-p3s1w33
34	LUMI	LUMI	NOUN	yn	Abbr=Yes	32	flat:foreign	32:flat:foreign	LvtbNodeId=a-p7249-p3s1w34|SpaceAfter=No
35	,	,	PUNCT	zc	_	38	punct	38:punct	LvtbNodeId=a-p7249-p3s1w35
36	kas	kas	PRON	pr000nn	Case=Nom|PronType=Rel	38	nsubj	38:nsubj	LvtbNodeId=a-p7249-p3s1w36
37	tumsā	tumsa	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	38	obl	38:obl:loc	LvtbNodeId=a-p7249-p3s1w37
38	spīd	spīdēt	VERB	vmnipi330an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	32	acl	32:acl	LvtbNodeId=a-p7249-p3s1w38|SpaceAfter=No
39	.	.	PUNCT	zs	_	1	punct	1:punct	LvtbNodeId=a-p7249-p3s1w39

~~~


~~~ conllu
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 33	bgColor:blue
# visual-style 33	fgColor:white
# visual-style 33 34 flat:foreign	color:blue
1	Šajā	šī	DET	pd3fsln	Case=Loc|Gender=Fem|Number=Sing|Person=3|PronType=Dem	2	det	2:det	LvtbNodeId=a-z82-p31s4w1
2	grāmatā	grāmata	NOUN	ncfsl4	Case=Loc|Gender=Fem|Number=Sing	3	obl	3:obl:loc|15:obl:loc	LvtbNodeId=a-z82-p31s4w2
3	apkopots	apkopot	VERB	vmnpdmsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	LvtbNodeId=a-z82-p31s4w3
4	ne	ne	PART	q	Polarity=Neg	7	discourse	7:discourse	LvtbNodeId=a-z82-p31s4w4
5	tikai	tikai	PART	q	_	4	fixed	4:fixed	LvtbNodeId=a-z82-p31s4w5
6	interesants	interesants	ADJ	afmsnnp	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	7	amod	7:amod	LvtbNodeId=a-z82-p31s4w6
7	materiāls	materiāls	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	3	nsubj:pass	3:nsubj:pass	LvtbNodeId=a-z82-p31s4w7
8	par	par	ADP	spsa	_	12	case	12:case	LvtbNodeId=a-z82-p31s4w8
9	dažādu	dažāds	ADJ	armpgnp	Case=Gen|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	11	amod	11:amod	LvtbNodeId=a-z82-p31s4w9
10	pasaules	pasaule	NOUN	ncfsg5	Case=Gen|Gender=Fem|Number=Sing	11	nmod	11:nmod:gen	LvtbNodeId=a-z82-p31s4w10
11	areālu	areāls	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	12	nmod	12:nmod:gen	LvtbNodeId=a-z82-p31s4w11
12	valodām	valoda	NOUN	ncfpd4	Case=Dat|Gender=Fem|Number=Plur	7	nmod	7:nmod:dat	LvtbNodeId=a-z82-p31s4w12|SpaceAfter=No
13	,	,	PUNCT	zc	_	15	punct	15:punct	LvtbNodeId=a-z82-p31s4w13
14	bet	bet	CCONJ	cc	_	15	cc	15:cc	LvtbNodeId=a-z82-p31s4w14
15	piedāvāta	piedāvāt	VERB	vmnpdfsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	3	conj	3:conj	LvtbNodeId=a-z82-p31s4w15
16	arī	arī	PART	q	_	19	discourse	19:discourse	LvtbNodeId=a-z82-p31s4w16
17	evidenciālo	evidenciāls	ADJ	arfpgyp	Case=Gen|Definite=Def|Degree=Pos|Gender=Fem|Number=Plur	18	amod	18:amod	LvtbNodeId=a-z82-p31s4w17
18	nozīmju	nozīme	NOUN	ncfpg5	Case=Gen|Gender=Fem|Number=Plur	19	nmod	19:nmod:gen	LvtbNodeId=a-z82-p31s4w18
19	klasifikācija	klasifikācija	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	15	nsubj:pass	15:nsubj:pass	LvtbNodeId=a-z82-p31s4w19
20	(	(	PUNCT	zb	_	21	punct	21:punct	LvtbNodeId=a-z82-p31s4w20|SpaceAfter=No
21	Willett	Willett	X	xf	Foreign=Yes	3	parataxis	3:parataxis|15:parataxis	LvtbNodeId=a-z82-p31s4w21
22	1988	1988	NUM	xn	NumType=Card	21	flat:foreign	21:flat:foreign	LvtbNodeId=a-z82-p31s4w22|SpaceAfter=No
23	)	)	PUNCT	zb	_	21	punct	21:punct	LvtbNodeId=a-z82-p31s4w23|SpaceAfter=No
24	,	,	PUNCT	zc	_	28	punct	28:punct	LvtbNodeId=a-z82-p31s4w24
25	uz	uz	ADP	spsg	_	26	case	26:case	LvtbNodeId=a-z82-p31s4w25
26	kuras	kura	PRON	pr0fsgn	Case=Gen|Gender=Fem|Number=Sing|PronType=Rel	28	iobj	28:iobj	LvtbNodeId=a-z82-p31s4w26
27	tiek	tikt	AUX	vanipi130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	28	aux:pass	28:aux:pass	LvtbNodeId=a-z82-p31s4w27
28	balstīti	balstīt	VERB	vmnpdmpnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	19	acl	19:acl	LvtbNodeId=a-z82-p31s4w28
29	arī	arī	PART	q	_	31	discourse	31:discourse	LvtbNodeId=a-z82-p31s4w29
30	nākamie	nākamais	ADJ	armpnyp	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur	31	amod	31:amod	LvtbNodeId=a-z82-p31s4w30
31	pētījumi	pētījums	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	28	nsubj:pass	28:nsubj:pass	LvtbNodeId=a-z82-p31s4w31
32	(	(	PUNCT	zb	_	33	punct	33:punct	LvtbNodeId=a-z82-p31s4w32|SpaceAfter=No
33	Plungjan	Plungjan	X	xf	Foreign=Yes	28	parataxis	28:parataxis	LvtbNodeId=a-z82-p31s4w33
34	2011	2011	NUM	xn	NumType=Card	33	flat:foreign	33:flat:foreign	LvtbNodeId=a-z82-p31s4w34|SpaceAfter=No
35	,	,	PUNCT	zc	_	36	punct	36:punct	LvtbNodeId=a-z82-p31s4w35
36	461	461	NUM	xn	NumType=Card	33	dep	33:dep	LvtbNodeId=a-z82-p31s4w36|SpaceAfter=No
37	–	–	PUNCT	zd	_	38	punct	38:punct	LvtbNodeId=a-z82-p31s4w37|SpaceAfter=No
38	462	462	NUM	xn	NumType=Card	36	conj	33:dep|36:conj	LvtbNodeId=a-z82-p31s4w38|SpaceAfter=No
39	)	)	PUNCT	zb	_	33	punct	33:punct	LvtbNodeId=a-z82-p31s4w39|SpaceAfter=No
40	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-z82-p31s4w40

~~~


