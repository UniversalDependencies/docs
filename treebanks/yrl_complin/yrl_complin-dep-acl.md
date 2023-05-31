---
layout: base
title:  'Statistics of acl in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="yrl_complin-dep-acl-relcl.html">acl:relcl</a></tt>.

8 nodes (0%) are attached to their parents as `acl`.

8 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `acl`: <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (5; 63% instances), <tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (2; 25% instances), <tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (1; 13% instances).


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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl	color:blue
1	Buburi	buburi	PROPN	PROPN	_	6	nsubj	_	SpaceAfter=No|TokenRange=0:6
2	,	,	PUNCT	PUNCT	_	3	punct	_	TokenRange=6:7
3	kirimbawa	kirimbawa	ADJ	A	_	1	acl	_	TokenRange=8:17
4	piri	piri	ADV	ADVG	AdvType=Deg|Degree=Cmp	3	advmod	_	SpaceAfter=No|TokenRange=18:22
5	,	,	PUNCT	PUNCT	_	3	punct	_	TokenRange=22:23
6	uwitá	witá	VERB	V	Person=3|VerbForm=Fin	0	root	_	TokenRange=24:29
7	amú	amú	DET	IND	Number=Sing|PronType=Ind	8	det	_	TokenRange=30:33
8	ruaxara	suaxara	NOUN	N	Number=Sing|Rel=Cont	6	obl	_	TokenRange=34:41
9	kití	kití	ADP	ADP	_	8	case	_	SpaceAfter=No|TokenRange=42:46
10	.	.	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No|TokenRange=46:47

~~~


