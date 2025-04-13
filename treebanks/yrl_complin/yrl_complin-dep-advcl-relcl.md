---
layout: base
title:  'Statistics of advcl:relcl in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="yrl_complin-dep-advcl.html">advcl</a></tt>.

24 nodes (0%) are attached to their parents as `advcl:relcl`.

23 instances of `advcl:relcl` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.875.

The following 7 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (16; 67% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PART.html">PART</a></tt> (2; 8% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (2; 8% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 advcl:relcl	color:blue
1	Ixé	ixé	PRON	PRON	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	TokenRange=0:3
2	ti	ti	PART	NEG	PartType=Neg|Polarity=Neg	3	advmod	_	TokenRange=4:6
3	asasá	sasá	VERB	V	Mood=Ind|Number=Sing|Person=1|VerbForm=Fin	0	root	_	TokenRange=7:12
4	i	i	PRON	PRON2	Case=Gen|PronType=Prs	5	expl	_	TokenRange=13:14
5	puxí	puxí	ADJ	A	_	3	xcomp	_	TokenRange=15:19
6	mayé	mayé	ADV	ADVLA	AdvType=Man|PronType=Rel	3	advmod	_	TokenRange=20:24
7	aintá	aintá	PRON	PRON	Number=Plur|Person=3|PronType=Prs	8	nsubj	_	TokenRange=25:30
8	umbeú	mbeú	VERB	V	Mood=Ind|Person=3|VerbForm=Fin	6	advcl:relcl	_	SpaceAfter=No|TokenRange=31:36
9	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=36:37

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 advcl:relcl	color:blue
1	Tasika	sika	VERB	V	Mood=Ind|Number=Plur|Person=3|VerbForm=Fin	0	root	_	SpaceAfter=No|TokenRange=3:8
2	,	,	PUNCT	PUNCT	_	3	punct	_	TokenRange=8:9
3	paá	paá	PART	RPRT	Evident=Nfh|PartType=Mod	1	advmod	_	SpaceAfter=No|TokenRange=10:13
4	,	,	PUNCT	PUNCT	_	3	punct	_	TokenRange=13:14
5	yepé	yepé	DET	ART	Definite=Ind|PronType=Art	7	det	_	TokenRange=15:19
6	ipawa	ipawa	NOUN	N	Number=Sing	7	nmod:poss	_	TokenRange=20:25
7	apira	apira	NOUN	N	Number=Sing	1	obl	_	TokenRange=26:31
8	upé	upé	ADP	ADP	AdpType=Post	7	case	_	TokenRange=32:35
9	mamé	mamé	ADV	ADVLC	AdvType=Loc|PronType=Rel	7	advmod	_	TokenRange=36:40
10	aikwé	aikwé	PART	EXST	PartType=Exs	9	advcl:relcl	_	TokenRange=41:46
11	siía	siía	DET	INDQ	PronType=Ind	12	det	_	TokenRange=47:51
12	pirá-itá	pirá	NOUN	N	Number=Plur	10	nsubj	_	SpaceAfter=No|TokenRange=52:60
13	.	.	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No|TokenRange=60:61

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 advcl:relcl	color:blue
1	Kwá	kwá	DET	DEMX	Deixis=Prox|Number=Sing|PronType=Dem	2	det	_	TokenRange=0:3
2	wakarí	wakarí	NOUN	N	Number=Sing	3	nsubj	_	TokenRange=4:10
3	mamé	mamé	ADV	ADVRC	AdvType=Loc|PronType=Int	0	root	_	TokenRange=11:15
4	uikú	ikú	AUX	COP	Mood=Ind|Person=3|VerbForm=Fin	5	cop	_	TokenRange=16:20
5	waá	waá	PRON	REL	Number=Sing|PronType=Rel	3	advcl:relcl	_	TokenRange=21:24
6	arara	arara	NOUN	N	Number=Sing	7	nmod:poss	_	TokenRange=25:30
7	ruaya	suaya	NOUN	N	Number=Sing|Rel=Cont	5	nsubj	_	SpaceAfter=No|TokenRange=31:36
8	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=36:37

~~~


