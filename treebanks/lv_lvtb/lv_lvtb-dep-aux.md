---
layout: base
title:  'Statistics of aux in UD_Latvian-LVTB'
udver: '2'
---

## Treebank Statistics: UD_Latvian-LVTB: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="lv_lvtb-dep-aux-pass.html">aux:pass</a></tt>.

1428 nodes (1%) are attached to their parents as `aux`.

1417 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.19747899159664.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="lv_lvtb-pos-VERB.html">VERB</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (1393; 98% instances), <tt><a href="lv_lvtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (14; 1% instances), <tt><a href="lv_lvtb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (10; 1% instances), <tt><a href="lv_lvtb-pos-ADV.html">ADV</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="lv_lvtb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="lv_lvtb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	Cigareti	cigarete	NOUN	ncfsa5	Case=Acc|Gender=Fem|Number=Sing	4	obj	4:obj	LvtbNodeId=a-d197-p26s2w1
2	viņa	viņa	PRON	pp3fsnn	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	4	nsubj	4:nsubj	LvtbNodeId=a-d197-p26s2w2
3	bija	būt	AUX	vcnisii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	4:aux	LvtbNodeId=a-d197-p26s2w3
4	atstājusi	atstāt	VERB	vmnpdfsnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	0	root	0:root	LvtbNodeId=a-d197-p26s2w4
5	kūpam	kūpēt	VERB	vmnpu0000000n	Polarity=Pos|VerbForm=Conv	4	advcl	4:advcl	LvtbNodeId=a-d197-p26s2w5
6	pelnutraukā	pelnutrauks	NOUN	ncmsl1	Case=Loc|Gender=Masc|Number=Sing	5	obl	5:obl:loc	LvtbNodeId=a-d197-p26s2w6
7	uz	uz	ADP	spsg	_	9	case	9:case	LvtbNodeId=a-d197-p26s2w7
8	sava	savs	DET	ps0msgn	Case=Gen|Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	9	det	9:det	LvtbNodeId=a-d197-p26s2w8
9	galda	galds	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	4	obl	4:obl:uz	LvtbNodeId=a-d197-p26s2w9|SpaceAfter=No
10	.	.	PUNCT	zs	_	4	punct	4:punct	LvtbNodeId=a-d197-p26s2w10

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Sautē	sautēt	VERB	vmnm0t22san	Mood=Imp|Number=Sing|Person=2|Polarity=Pos|VerbForm=Fin|Voice=Act	0	root	0:root	LvtbNodeId=a-p9305-p3s6w1|SpaceAfter=No
2	,	,	PUNCT	zc	_	7	punct	7:punct	LvtbNodeId=a-p9305-p3s6w2
3	kamēr	kamēr	SCONJ	cs	_	7	mark	7:mark|9:mark	LvtbNodeId=a-p9305-p3s6w3
4	ābola	ābols	NOUN	ncmsg1	Case=Gen|Gender=Masc|Number=Sing	5	nmod	5:nmod:gen	LvtbNodeId=a-p9305-p3s6w4
5	gabaliņi	gabaliņš	NOUN	ncmpn1	Case=Nom|Gender=Masc|Number=Plur	7	nsubj	7:nsubj|9:nsubj	LvtbNodeId=a-p9305-p3s6w5
6	kļuvuši	kļūt	AUX	vtnpdmpnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	7	aux	7:aux|9:aux	LvtbNodeId=a-p9305-p3s6w6
7	mīksti	mīksts	ADJ	afmpnnp	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	1	advcl	1:advcl	LvtbNodeId=a-p9305-p3s6w7
8	un	un	CCONJ	cc	_	9	cc	9:cc	LvtbNodeId=a-p9305-p3s6w8
9	sulīgi	sulīgs	ADJ	afmpnnp	Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur	7	conj	1:advcl|7:conj	LvtbNodeId=a-p9305-p3s6w9|SpaceAfter=No
10	.	.	PUNCT	zs	_	1	punct	1:punct	LvtbNodeId=a-p9305-p3s6w10

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 aux	color:blue
1	Tāpēc	tāpēc	ADV	r0c	_	0	root	0:root	LvtbNodeId=a-s25-p7s10w1|SpaceAfter=No
2	,	,	PUNCT	zc	_	5	punct	5:punct	LvtbNodeId=a-s25-p7s10w2
3	ka	ka	SCONJ	cs	_	5	mark	5:mark	LvtbNodeId=a-s25-p7s10w3
4	nebijāt	būt	AUX	vcnisii2pay	Evident=Fh|Mood=Ind|Number=Plur|Person=2|Polarity=Neg|Tense=Past|VerbForm=Fin|Voice=Act	5	aux	5:aux	LvtbNodeId=a-s25-p7s10w4
5	iedomājušies	iedomāties	VERB	vmypdmpnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Plur|Polarity=Pos|Reflex=Yes|Tense=Past|VerbForm=Part|Voice=Act	1	advcl	1:advcl	LvtbNodeId=a-s25-p7s10w5|SpaceAfter=No
6	,	,	PUNCT	zc	_	11	punct	11:punct	LvtbNodeId=a-s25-p7s10w6
7	ka	ka	SCONJ	cs	_	11	mark	11:mark	LvtbNodeId=a-s25-p7s10w7
8	Šekspīrs	Šekspīrs	PROPN	npmsn1	Case=Nom|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	LvtbNodeId=a-s25-p7s10w8
9	ir	būt	AUX	vcnipii30an	Evident=Fh|Mood=Ind|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	11:aux	LvtbNodeId=a-s25-p7s10w9
10	bijis	būt	AUX	vcnpdmsnasnpn	Aspect=Perf|Case=Nom|Definite=Ind|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part|Voice=Act	11	aux	11:aux	LvtbNodeId=a-s25-p7s10w10
11	bērns	bērns	NOUN	ncmsn1	Case=Nom|Gender=Masc|Number=Sing	5	ccomp	5:ccomp	LvtbNodeId=a-s25-p7s10w11|SpaceAfter=No
12	,	,	PUNCT	zc	_	13	punct	13:punct	LvtbNodeId=a-s25-p7s10w12
13	vai	vai	PART	q	_	1	discourse	1:discourse	LvtbNodeId=a-s25-p7s10w13
14	ne	ne	PART	q	Polarity=Neg	13	fixed	13:fixed	LvtbNodeId=a-s25-p7s10w14|SpaceAfter=No
15	?	?	PUNCT	zs	_	1	punct	1:punct	LvtbNodeId=a-s25-p7s10w15

~~~


