---
layout: base
title:  'Statistics of acl in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="yrl_complin-dep-acl-relcl.html">acl:relcl</a></tt>.

13 nodes (0%) are attached to their parents as `acl`.

13 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 5 pairs of parts of speech are connected with `acl`: <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (7; 54% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (2; 15% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (2; 15% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	Yamaã	maã	VERB	V	Number=Plur|Person=1|VerbForm=Fin	0	root	_	TokenRange=0:5
2	timbiú	timbiú	NOUN	N	Number=Sing|Rel=Abs	1	obj	_	TokenRange=6:12
3	apigawa	apigawa	NOUN	N	Number=Sing	4	nsubj	_	TokenRange=13:20
4	uú	ú	VERB	V	Person=3|VerbForm=Fin	2	acl	_	TokenRange=21:23
5	arama	arama	SCONJ	SCONJ	_	4	mark	_	SpaceAfter=No|TokenRange=24:29
6	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=29:30

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	Uyeréu	yeréu	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=0:6
2	amú	amú	DET	IND	Number=Sing|PronType=Ind	3	det	_	TokenRange=7:10
3	pirantá	pirantá	NOUN	N	Number=Sing	1	xcomp	_	SpaceAfter=No|TokenRange=11:18
4	,	,	PUNCT	PUNCT	_	5	punct	_	TokenRange=18:19
5	turusú	turusú	ADJ	A	_	3	acl	_	TokenRange=20:26
6	piri	piri	ADV	ADVG	AdvType=Deg|Degree=Cmp	5	advmod	_	SpaceAfter=No|TokenRange=27:31
7	,	,	PUNCT	PUNCT	_	5	punct	_	TokenRange=31:32
8	sera	sera	NOUN	N	Number=Sing|Number[psor]=Sing|Person[psor]=3|Rel=NCont	9	nsubj	_	TokenRange=33:37
9	Buburi	buburi	PROPN	PROPN	_	5	parataxis	_	SpaceAfter=No|TokenRange=38:44
10	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=44:45

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl	color:blue
1	Yandé	yandé	PRON	PRON	Number=Plur|Person=1|PronType=Prs	8	nsubj	_	SpaceAfter=No|TokenRange=0:5
2	,	,	PUNCT	PUNCT	_	3	punct	_	TokenRange=5:6
3	Kuse-itá	kuse-itá	PROPN	PROPN	_	1	nmod	_	SpaceAfter=No|TokenRange=7:15
4	,	,	PUNCT	PUNCT	_	5	punct	_	TokenRange=15:16
5	tuixawa-itá	tuixawa	NOUN	N	Number=Plur|Rel=Abs	1	acl	_	TokenRange=17:28
6	arama	arama	PART	FUT	Tense=Fut	5	advmod	_	SpaceAfter=No|TokenRange=29:34
7	,	,	PUNCT	PUNCT	_	5	punct	_	TokenRange=34:35
8	yayuri	yuri	VERB	V	Number=Plur|Person=1|VerbForm=Fin	0	root	_	TokenRange=36:42
9	Makará	makará	PROPN	PROPN	_	10	nmod:poss	_	TokenRange=43:49
10	kupé	kupé	NOUN	N	Number=Sing	8	obl	_	_
11	pe	upé	ADP	ADP	AdpType=Post|Clitic=Yes	10	case	_	_
12	,	,	PUNCT	PUNCT	_	19	punct	_	TokenRange=57:58
13	Hinere-itá	hinere-itá	PROPN	PROPN	_	19	nsubj	_	SpaceAfter=No|TokenRange=59:69
14	,	,	PUNCT	PUNCT	_	16	punct	_	TokenRange=69:70
15	yané	yané	PRON	PRON2	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	16	nmod:poss	_	TokenRange=71:75
16	wiwa-itá	wiwa	NOUN	N	Number=Plur	13	acl	_	TokenRange=76:84
17	arama	arama	PART	FUT	Tense=Fut	16	advmod	_	SpaceAfter=No|TokenRange=85:90
18	,	,	PUNCT	PUNCT	_	16	punct	_	TokenRange=90:91
19	uri	yuri	VERB	V	Person=3|VerbForm=Fin	8	parataxis	_	TokenRange=92:95
20	i	i	PRON	PRON2	Case=Gen|Number=Sing|Person=3|Poss=Yes|PronType=Prs	21	nmod:poss	_	TokenRange=96:97
21	marika	marika	NOUN	N	Number=Sing	19	obl	_	TokenRange=98:104
22	rupí	rupí	ADP	ADP	AdpType=Post	21	case	_	SpaceAfter=No|TokenRange=105:109
23	.	.	PUNCT	PUNCT	_	8	punct	_	SpaceAfter=No|TokenRange=109:110

~~~


