---
layout: base
title:  'Statistics of xcomp:obj in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `xcomp:obj`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-xcomp.html">xcomp</a></tt>.

7 nodes (0%) are attached to their parents as `xcomp:obj`.

7 instances of `xcomp:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.14285714285714.

The following 1 pairs of parts of speech are connected with `xcomp:obj`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (7; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp:obj	color:blue
1	Grożąc	grozić	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	5	advcl	5:advcl	_
2	skrzywdzeniem	skrzywdzić	NOUN	ger:sg:inst:n:perf:aff	Aspect=Perf|Case=Ins|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Vnoun	1	obl	1:obl	_
3	Anety	Aneta	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	2	nmod	2:nmod	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
5	zabronili	zabronić	VERB	praet:pl:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
6	też	też	PART	qub	_	5	advmod	5:advmod	_
7	powiadamiać	powiadamiać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	5	xcomp:obj	5:xcomp:obj	_
8	policję	policja	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	7	obj	7:obj	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	_

~~~


