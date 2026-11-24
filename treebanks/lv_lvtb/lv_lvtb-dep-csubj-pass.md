---
layout: base
title:  'Statistics of csubj:pass in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="lv_lvtb-dep-csubj.html">csubj</a></tt>.

138 nodes (0%) are attached to their parents as `csubj:pass`.

131 instances of `csubj:pass` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.7463768115942.

The following 7 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt> (122; 88% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt> (9; 7% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 csubj:pass	color:blue
1	Ja	ja	SCONJ	cs	_	3	mark	3:mark	LvtbNodeId=a-p10016-p5s5w1
2	viņš	viņš	PRON	pp3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	nsubj	3:nsubj	LvtbNodeId=a-p10016-p5s5w2
3	strādā	strādāt	VERB	vmnipi230an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	6:advcl	LvtbNodeId=a-p10016-p5s5w3|SpaceAfter=No
4	,	,	PUNCT	zc	_	3	punct	3:punct	LvtbNodeId=a-p10016-p5s5w4
5	tiek	tikt	AUX	vanipi130an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	6:aux:pass	LvtbNodeId=a-p10016-p5s5w5
6	domāts	domāt	VERB	vmnpdmsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	LvtbNodeId=a-p10016-p5s5w6|SpaceAfter=No
7	,	,	PUNCT	zc	_	10	punct	10:punct	LvtbNodeId=a-p10016-p5s5w7
8	kā	kā	SCONJ	cs	_	10	mark	10:mark	LvtbNodeId=a-p10016-p5s5w8
9	sodu	sods	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	10	obj	10:obj	LvtbNodeId=a-p10016-p5s5w9
10	apvienot	apvienot	VERB	vmnn0t2000n	Polarity=Pos|VerbForm=Inf	6	csubj:pass	6:csubj:pass	LvtbNodeId=a-p10016-p5s5w10
11	ar	ar	ADP	spsa	_	12	case	12:case	LvtbNodeId=a-p10016-p5s5w11
12	darbu	darbs	NOUN	ncmsa1	Case=Acc|Gender=Masc|Number=Sing	10	iobj	10:iobj	LvtbNodeId=a-p10016-p5s5w12|SpaceAfter=No
13	.	.	PUNCT	zs	_	6	punct	6:punct	LvtbNodeId=a-p10016-p5s5w13

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 21 csubj:pass	color:blue
1	Pirmie	pirmais	ADJ	mosmpn	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Plur|NumType=Ord	2	amod	2:amod	LvtbNodeId=a-p1008-p6s2w1
2	svētki	svētki	NOUN	ncmdn1	Case=Nom|Gender=Masc|Number=Ptan	3	nsubj	3:nsubj	LvtbNodeId=a-p1008-p6s2w2
3	patikuši	patikt	VERB	vmnpdmpnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LvtbNodeId=a-p1008-p6s2w3
4	visai	visa	DET	pg0fsdn	Case=Dat|Gender=Fem|Number=Sing|PronType=Tot	9	det	9:det	LvtbNodeId=a-p1008-p6s2w4
5	lielajai	liels	ADJ	affsdyp	Case=Dat|Definite=Def|Degree=Pos|Gender=Fem|Number=Sing	9	amod	9:amod	LvtbNodeId=a-p1008-p6s2w5
6	"	"	PUNCT	zq	_	7	punct	7:punct	LvtbNodeId=a-p1008-p6s2w6|SpaceAfter=No
7	Pasaciņas	Pasaciņa	PROPN	npfsg4	Case=Gen|Gender=Fem|Number=Sing	9	nmod	9:nmod:gen	LvtbNodeId=a-p1008-p6s2w7|SpaceAfter=No
8	"	"	PUNCT	zq	_	7	punct	7:punct	LvtbNodeId=a-p1008-p6s2w8
9	saimei	saime	NOUN	ncfsd5	Case=Dat|Gender=Fem|Number=Sing	3	iobj	3:iobj	LvtbNodeId=a-p1008-p6s2w9|SpaceAfter=No
10	,	,	PUNCT	zc	_	12	punct	12:punct	LvtbNodeId=a-p1008-p6s2w10
11	tāpēc	tāpēc	ADV	r0n	_	12	cc	12:cc	LvtbNodeId=a-p1008-p6s2w11
12	nolemts	nolemt	VERB	vmnpdmsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	3	conj	3:conj	LvtbNodeId=a-p1008-p6s2w12|SpaceAfter=No
13	,	,	PUNCT	zc	_	21	punct	21:punct	LvtbNodeId=a-p1008-p6s2w13
14	ka	ka	SCONJ	cs	_	21	mark	21:mark	LvtbNodeId=a-p1008-p6s2w14
15	to	tā	DET	pd3fpgn	Case=Gen|Gender=Fem|Number=Plur|Person=3|PronType=Dem	16	det	16:det	LvtbNodeId=a-p1008-p6s2w15
16	rīkošana	rīkošana	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	21	nsubj	21:nsubj	LvtbNodeId=a-p1008-p6s2w16
17	būs	būt	AUX	vcnifii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Fut|VerbForm=Fin|Voice=Act	21	cop	21:cop	LvtbNodeId=a-p1008-p6s2w17
18	vēl	vēl	ADV	r0n	_	19	advmod	19:advmod	LvtbNodeId=a-p1008-p6s2w18
19	viena	viens	NUM	mcsfsn	Case=Nom|Gender=Fem|Number=Sing|NumType=Card	21	nummod	21:nummod	LvtbNodeId=a-p1008-p6s2w19
20	jauna	jauns	ADJ	affsnnp	Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	21	amod	21:amod	LvtbNodeId=a-p1008-p6s2w20
21	tradīcija	tradīcija	NOUN	ncfsn4	Case=Nom|Gender=Fem|Number=Sing	12	csubj:pass	12:csubj:pass	LvtbNodeId=a-p1008-p6s2w21|SpaceAfter=No
22	.	.	PUNCT	zs	_	3	punct	3:punct	LvtbNodeId=a-p1008-p6s2w22

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 19 csubj:pass	color:blue
1	Secināts	secināt	VERB	vmnpdmsnpsnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	LvtbNodeId=a-z25-p37s1w1|SpaceAfter=No
2	,	,	PUNCT	zc	_	19	punct	19:punct	LvtbNodeId=a-z25-p37s1w2
3	ka	ka	SCONJ	cs	_	19	mark	19:mark	CorrectionType=InsertedPunctAfter|LvtbNodeId=a-z25-p37s1w3
4	kaut	kaut	SCONJ	cs	ExtPos=SCONJ	9	mark	9:mark	LvtbNodeId=a-z25-p37s1w5
5	gan	gan	PART	q	_	4	fixed	4:fixed	LvtbNodeId=a-z25-p37s1w6
6	gaļas	gaļa	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	7	nmod	7:nmod:gen	LvtbNodeId=a-z25-p37s1w7
7	liellopu	liellops	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	8	nmod	8:nmod:gen	LvtbNodeId=a-z25-p37s1w8
8	skaits	skaits	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	9	nsubj	9:nsubj|10:nsubj	LvtbNodeId=a-z25-p37s1w9
9	turpina	turpināt	VERB	vpnipi330an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	19	advcl	19:advcl	LvtbNodeId=a-z25-p37s1w10
10	pieaugt	pieaugt	VERB	vmnn0i1000n	Polarity=Pos|VerbForm=Inf	9	xcomp	9:xcomp	LvtbNodeId=a-z25-p37s1w11|SpaceAfter=No
11	,	,	PUNCT	zc	_	9	punct	9:punct	LvtbNodeId=a-z25-p37s1w12
12	mūsu	mēs	PRON	pp10pgn	Case=Gen|Number=Plur|Person=1|PronType=Prs	13	nmod	13:nmod	LvtbNodeId=a-z25-p37s1w13
13	valsts	valsts	NOUN	ncfsg6	Case=Gen|Gender=Fem|Number=Sing	16	nmod	16:nmod:gen	LvtbNodeId=a-z25-p37s1w14
14	liellopu	liellops	NOUN	ncmpg1	Case=Gen|Gender=Masc|Number=Plur	15	nmod	15:nmod:gen	LvtbNodeId=a-z25-p37s1w15
15	gaļas	gaļa	NOUN	ncfsg4	Case=Gen|Gender=Fem|Number=Sing	16	nmod	16:nmod:gen	LvtbNodeId=a-z25-p37s1w16
16	bilancē	bilance	NOUN	ncfsl5	Case=Loc|Gender=Fem|Number=Sing	19	obl	19:obl:loc	LvtbNodeId=a-z25-p37s1w17
17	tas	tas	DET	pd3msnn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Dem	19	nsubj	19:nsubj	LvtbNodeId=a-z25-p37s1w18
18	ir	būt	AUX	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	19	cop	19:cop	LvtbNodeId=a-z25-p37s1w19
19	neliels	neliels	ADJ	armsnnp	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing	1	csubj:pass	1:csubj:pass	LvtbNodeId=a-z25-p37s1w20|SpaceAfter=No
20	.	.	PUNCT	zs	_	1	punct	1:punct	LvtbNodeId=a-z25-p37s1w21

~~~


