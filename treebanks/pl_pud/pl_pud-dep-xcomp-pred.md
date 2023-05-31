---
layout: base
title:  'Statistics of xcomp:pred in UD_Polish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Polish-PUD: Relations: `xcomp:pred`

This relation is a language-specific subtype of <tt><a href="pl_pud-dep-xcomp.html">xcomp</a></tt>.
There are also 1 other language-specific subtypes of `xcomp`: <tt><a href="pl_pud-dep-xcomp-subj.html">xcomp:subj</a></tt>.

44 nodes (0%) are attached to their parents as `xcomp:pred`.

38 instances of `xcomp:pred` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.31818181818182.

The following 4 pairs of parts of speech are connected with `xcomp:pred`: <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (27; 61% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADJ.html">ADJ</a></tt> (14; 32% instances), <tt><a href="pl_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pud-pos-ADV.html">ADV</a></tt> (2; 5% instances), <tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pud-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 xcomp:pred	color:blue
1	Tylko	tylko	PART	part	_	2	advmod:emph	2:advmod:emph	_
2	50	50	NUM	num:pl:nom:m3:rec	Animacy=Inan|Case=Nom|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	3	nsubj	3:nsubj	_
3	stanowiły	stanowić	VERB	praet:pl:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	targowiska	targowisko	NOUN	subst:pl:acc:n:ncol	Case=Acc|Gender=Neut|Number=Plur	3	xcomp:pred	3:xcomp:pred	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 xcomp:pred	color:blue
1	Ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	3	det	3:det	_
2	wyidealizowana	wyidealizować	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	3	acl	3:acl	_
3	wizja	wizja	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	6	nsubj	6:nsubj	_
4	monarchii	monarchia	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	3	nmod:arg	3:nmod:arg	_
5	Romanowów	Romanow	PROPN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	4	nmod	4:nmod	_
6	czyniła	czynić	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	go	on	PRON	ppron3:sg:acc:m1:ter:nakc:npraep	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	6	obj	6:obj	_
8	ślepym	ślepy	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	6	xcomp:pred	6:xcomp:pred	_
9	na	na	ADP	prep:acc	AdpType=Prep	11	case	11:case	Case=Acc
10	faktyczny	faktyczny	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	11	amod	11:amod	_
11	stan	stan	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obl:arg	8:obl:arg	_
12	jego	on	PRON	ppron3:sg:gen:m1:ter:akc:npraep	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	13	nmod	13:nmod	_
13	kraju	kraj	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	11	nmod	11:nmod	SpaceAfter=No
14	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp:pred	color:blue
1	Wspaniale	wspaniale	ADV	adv:pos	Degree=Pos	2	xcomp:pred	2:xcomp:pred	_
2	jest	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	móc	móc	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	2	xcomp	2:xcomp	_
4	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	5	obj	5:obj	_
5	ocalić	ocalić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	3	xcomp	3:xcomp	_
6	i	i	CCONJ	conj	_	7	cc	7:cc	_
7	nadać	nadać	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	5	conj	3:xcomp|5:conj	_
8	temu	to	PRON	subst:sg:dat:n:ncol	Case=Dat|Gender=Neut|Number=Sing|PronType=Dem	7	iobj	7:iobj	_
9	świeży	świeży	ADJ	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	10	amod	10:amod	_
10	format	format	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obj	7:obj	SpaceAfter=No
11	,	,	PUNCT	interp	PunctType=Comm	12	punct	12:punct	_
12	tworząc	tworzyć	VERB	pcon:imperf	Aspect=Imp|Tense=Pres|VerbForm=Conv|Voice=Act	5	advcl	5:advcl|7:advcl	_
13	nową	nowy	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	14	amod	14:amod	_
14	tradycję	tradycja	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	12	obj	12:obj	_
15	dla	dla	ADP	prep:gen	AdpType=Prep	16	case	16:case	Case=Gen
16	meksykan	Meksykanin	PROPN	subst:pl:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Plur	12	obl	12:obl	SpaceAfter=No
17	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


