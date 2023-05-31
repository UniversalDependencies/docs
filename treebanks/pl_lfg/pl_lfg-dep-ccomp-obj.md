---
layout: base
title:  'Statistics of ccomp:obj in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `ccomp:obj`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-ccomp.html">ccomp</a></tt>.

175 nodes (0%) are attached to their parents as `ccomp:obj`.

175 instances of `ccomp:obj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.01714285714286.

The following 5 pairs of parts of speech are connected with `ccomp:obj`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (154; 88% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (12; 7% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (7; 4% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp:obj	color:blue
1	A	a	CCONJ	conj	_	4	cc	4:cc	_
2	pan	pan	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	4	nsubj	4:nsubj	_
3	poseł	poseł	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	2	flat	2:flat	_
4	powiedział	powiedzieć	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
6	że	że	SCONJ	comp	_	8	mark	8:mark	_
7	nie	nie	PART	qub	Polarity=Neg	8	advmod	8:advmod	_
8	chce	chcieć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	ccomp:obj	4:ccomp:obj	_
9	Polski	Polska	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	8	obl	8:obl	_
10	zaściankowej	zaściankowy	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	9	acl	9:acl	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp:obj	color:blue
1	—	—	PUNCT	interp	PunctType=Dash	2	punct	2:punct	_
2	Mówi	mówić	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
4	że	że	SCONJ	comp	_	7	mark	7:mark	_
5	nie	nie	PART	qub	Polarity=Neg	7	advmod	7:advmod	_
6	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
7	żonaty	żonaty	ADJ	adj:sg:nom:m1:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	2	ccomp:obj	2:ccomp:obj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 ccomp:obj	color:blue
1	Trudno	trudno	ADV	adv:pos	Degree=Pos	2	advmod	2:advmod	_
2	powiedzieć	powiedzieć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
4	co	co	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	6	nsubj	6:nsubj	_
5	było	być	AUX	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	6:cop	_
6	przyczyną	przyczyna	NOUN	subst:sg:inst:f	Case=Ins|Gender=Fem|Number=Sing	2	ccomp:obj	2:ccomp:obj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


