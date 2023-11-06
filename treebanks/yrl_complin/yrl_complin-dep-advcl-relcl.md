---
layout: base
title:  'Statistics of advcl:relcl in UD_Nheengatu-CompLin'
udver: '2'
---

## Treebank Statistics: UD_Nheengatu-CompLin: Relations: `advcl:relcl`

This relation is a language-specific subtype of <tt><a href="yrl_complin-dep-advcl.html">advcl</a></tt>.

20 nodes (0%) are attached to their parents as `advcl:relcl`.

20 instances of `advcl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.05.

The following 4 pairs of parts of speech are connected with `advcl:relcl`: <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt> (16; 80% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-PRON.html">PRON</a></tt> (2; 10% instances), <tt><a href="yrl_complin-pos-ADV.html">ADV</a></tt>-<tt><a href="yrl_complin-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="yrl_complin-pos-VERB.html">VERB</a></tt>-<tt><a href="yrl_complin-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 advcl:relcl	color:blue
1	Ixé	ixé	PRON	PRON	Number=Sing|Person=1|PronType=Prs	3	nsubj	_	TokenRange=0:3
2	ti	ti	PART	NEG	Polarity=Neg	3	advmod	_	TokenRange=4:6
3	asasá	sasá	VERB	V	Number=Sing|Person=1|VerbForm=Fin	0	root	_	TokenRange=7:12
4	i	i	PRON	PRON2	Case=Gen|PronType=Prs	5	expl	_	TokenRange=13:14
5	puxí	puxí	ADJ	A	_	3	xcomp	_	TokenRange=15:19
6	mayé	mayé	ADV	ADVLA	AdvType=Man|PronType=Rel	3	advmod	_	TokenRange=20:24
7	aintá	aintá	PRON	PRON	Number=Plur|Person=3|PronType=Prs	8	nsubj	_	TokenRange=25:30
8	umbeú	mbeú	VERB	V	Person=3|VerbForm=Fin	6	advcl:relcl	_	SpaceAfter=No|TokenRange=31:36
9	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=36:37

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
4	uikú	ikú	AUX	COP	Person=3|VerbForm=Fin	5	cop	_	TokenRange=16:20
5	waá	waá	PRON	REL	Number=Sing|PronType=Rel	3	advcl:relcl	_	TokenRange=21:24
6	arara	arara	NOUN	N	Number=Sing	7	nmod:poss	_	TokenRange=25:30
7	ruaya	suaya	NOUN	N	Number=Sing|Rel=Cont	5	nsubj	_	SpaceAfter=No|TokenRange=31:36
8	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No|TokenRange=36:37

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 advcl:relcl	color:blue
1	Aé	aé	PRON	PRON	Number=Sing|Person=3|PronType=Prs	2	nsubj	_	TokenRange=0:2
2	upitá	pitá	VERB	V	Person=3|VerbForm=Fin	0	root	_	_
3	putari	putari	AUX	AUXN	Compound=Yes|VerbForm=Inf	2	aux	_	_
4	mamé	mamé	ADV	ADVRC	AdvType=Loc|PronType=Int	2	advmod	_	TokenRange=17:21
5	puranga	puranga	ADJ	A	_	4	advcl:relcl	_	TokenRange=22:29
6	waá	waá	PRON	REL	Number=Sing|PronType=Rel	5	nsubj	_	SpaceAfter=No|TokenRange=30:33
7	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No|TokenRange=33:34

~~~


