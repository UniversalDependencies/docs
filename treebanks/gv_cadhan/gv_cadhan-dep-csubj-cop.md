---
layout: base
title:  'Statistics of csubj:cop in UD_Manx-Cadhan'
udver: '2'
---

## Treebank Statistics: UD_Manx-Cadhan: Relations: `csubj:cop`

This relation is a language-specific subtype of .
There are also 1 other language-specific subtypes of `csubj`: <tt><a href="gv_cadhan-dep-csubj-cleft.html">csubj:cleft</a></tt>.

14 nodes (0%) are attached to their parents as `csubj:cop`.

14 instances of `csubj:cop` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.64285714285714.

The following 4 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (8; 57% instances), <tt><a href="gv_cadhan-pos-ADJ.html">ADJ</a></tt>-<tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt> (3; 21% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-VERB.html">VERB</a></tt> (2; 14% instances), <tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gv_cadhan-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj:cop	color:blue
1	S'	she	AUX	_	_	2	cop	_	_
2	messey	olk	ADJ	_	Degree=Cmp,Sup	0	root	_	_
3	e	e	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	4	nmod:poss	_	_
4	vaggyrt	baggyrt	NOUN	_	Form=Len	2	csubj:cop	_	_
5	na	na	ADP	_	_	7	case	_	_
6	e	e	DET	_	Gender=Masc|Number=Sing|Person=3|Poss=Yes	7	nmod:poss	_	_
7	vuilley	builley	NOUN	_	Form=Len	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 21 csubj:cop	color:blue
1	V'	bee	VERB	_	Form=Len|Mood=Ind|Tense=Past	0	root	_	_
2	ad	ad	PRON	_	Number=Plur|Person=3	1	nsubj	_	_
3	cha	cha	ADV	_	_	4	advmod	_	_
4	boght	boght	ADJ	_	_	1	xcomp:pred	_	_
5	as	as	ADP	_	_	6	case	_	_
6	lugh	lugh	NOUN	_	_	4	obl	_	_
7	killagh	keeill	NOUN	_	_	6	nmod	_	SpaceAfter=No
8	,	,	PUNCT	_	_	9	punct	_	_
9	beaghey	beaghey	NOUN	_	_	1	advcl	_	_
10	veih	veih	ADP	_	_	12	case	_	_
11	yn	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	12	det	_	_
12	laue	laue	NOUN	_	_	9	obl	_	_
13	gys	gys	ADP	_	_	15	case	_	_
14	y	yn	DET	_	Definite=Def|Number=Sing|PronType=Art	15	det	_	_
15	veeal	beeal	NOUN	_	Form=Len	9	obl	_	_
16	agh	agh	CCONJ	_	_	18	cc	_	_
17	by	she	AUX	_	_	18	cop	_	_
18	vessey	olk	ADJ	_	Degree=Cmp,Sup|Form=Len	1	conj	_	_
19	foast	foast	ADV	_	_	18	advmod	_	_
20	ny	ny	SCONJ	_	_	21	mark	_	_
21	va	bee	VERB	_	Form=Len|Mood=Ind|Tense=Past	18	csubj:cop	_	_
22	ry	ry	ADP	_	_	23	case	_	_
23	heet	çheet	NOUN	_	Form=Len	21	xcomp	_	SpaceAfter=No
24	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:cop	color:blue
1	S'	she	AUX	_	_	2	cop	_	_
2	treisht	treisht	NOUN	_	_	0	root	_	_
3	lesh	lesh	ADP	_	_	4	case	_	_
4	mee	mee	PRON	_	Number=Sing|Person=1	2	obl	_	_
5	dy	dy	PART	_	PartType=Cmpl	6	mark	_	_
6	vel	bee	VERB	_	Form=Ecl|Mood=Ind|Tense=Pres	2	csubj:cop	_	_
7	shiu	shiu	PRON	_	Number=Plur|Person=2	6	nsubj	_	_
8	braew	braew	ADJ	_	_	6	xcomp:pred	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


