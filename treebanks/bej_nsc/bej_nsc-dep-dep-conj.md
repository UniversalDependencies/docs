---
layout: base
title:  'Statistics of dep:conj in UD_Beja-NSC'
udver: '2'
---

## Treebank Statistics: UD_Beja-NSC: Relations: `dep:conj`

This relation is a language-specific subtype of <tt><a href="bej_nsc-dep-dep.html">dep</a></tt>.
There are also 3 other language-specific subtypes of `dep`: <tt><a href="bej_nsc-dep-dep-aff.html">dep:aff</a></tt>, <tt><a href="bej_nsc-dep-dep-comp.html">dep:comp</a></tt>, <tt><a href="bej_nsc-dep-dep-redup.html">dep:redup</a></tt>.

16 nodes (1%) are attached to their parents as `dep:conj`.

16 instances of `dep:conj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 8.6875.

The following 1 pairs of parts of speech are connected with `dep:conj`: <tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="bej_nsc-pos-VERB.html">VERB</a></tt> (16; 100% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 dep:conj	color:blue
1	w=	_	DET	DET	Definite=Def|Gender=Masc|Number=Sing	2	det	_	GE= DEF,SG,M=|RX= DET=|Times= 38507, 38641|TokenType=Clit
2	his	_	NOUN	N	Gender=Masc	4	obj	_	Gloss= voice|RX= N,M|Times= 38641, 38775|TokenType=Stem
3	=i	_	PRON	PRO	Case=Acc|Number=Sing|Person=1|Poss=Yes	2	nmod:poss	_	GE= =POSS,1SG,ACC|RX= =PRO|Times= 38775, 38910|TokenType=Clit
4	gajjar	_	VERB	V2	VerbClass=2	9	dep:conj	_	Gloss= change|RX= V2|Times= 38910, 39044|TokenType=Stem
5	-an	_	PRON	TAM,PNG	Aspect=Perf|Number=Sing|Person=1	4	nsubj:aff	_	GE= -PFV,1SG|RX= -TAM,PNG|Times= 39044, 39178|TokenType=Aff
6	=t	_	CCONJ	CCONJ	_	4	cc	_	GE= =COORD|RX= CCONJ|Times= 39178, 39312|TokenType=Clit
7	/	_	PUNCT	PUNCT	_	4	punct	_	GE= PUNCT|RX= PUNCT|Times= 39312, 39715
8	hoːj	_	PRON	PRO	Case=Abl	9	iobj	_	GE= ABL,3|RX= PRO|Times= 39715, 40053|TokenType=Stem
9	sallam	_	VERB	V2	VerbClass=2	13	parataxis	_	Gloss= give|ReportedSpeech=Yes|RX= V2|Times= 40053, 40165|TokenType=Stem
10	-am	_	AUX	V2	VerbClass=2|Voice=Mid	9	aux:aff	_	GE= -MID|RX= -V2,DER|Times= 40165, 40278|TokenType=Aff
11	-an	_	PRON	TAM,PNG	Aspect=Perf|Number=Sing|Person=1	9	nsubj:aff	_	GE= -PFV,1SG|RX= -TAM,PNG|Times= 40278, 40391|TokenType=Aff
12	i-	_	PRON	PNG	Gender=Masc|Number=Sing|Person=3	13	nsubj:aff	_	GE= 3SG,M-|RX= PNG-|Times= 40391, 40560|TokenType=Aff
13	ni	_	VERB	V1,IRG	Aspect=Perf|VerbClass=1	0	root	_	GE= PFV|Gloss= say|RX= V1,IRG|Times= 40560, 40729|TokenType=Stem
14	//	_	PUNCT	PUNCT	_	13	punct	_	GE= PUNCT|RX= PUNCT|Times= 40729, 42616

~~~


