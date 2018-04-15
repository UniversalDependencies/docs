---
layout: base
title:  'Statistics of obj in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `obj`

This relation is universal.

6145 nodes (5%) are attached to their parents as `obj`.

4624 instances of `obj` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.68966639544345.

The following 10 pairs of parts of speech are connected with `obj`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (4269; 69% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (1495; 24% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (194; 3% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (68; 1% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (51; 1% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (47; 1% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (11; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obj	color:blue
1	A	a	CCONJ	conj	_	6	cc	6:cc	_
2	nowe	nowy	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	5	amod	5:amod	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	4	punct	4:punct	_
4	dwupokojowe	dwupokojowy	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	2	conj	2:conj|5:amod	_
5	mieszkanko	mieszkanko	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	6	obj	6:obj	_
6	otrzymali	otrzymać	VERB	praet:pl:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	państwo	państwo	NOUN	subst:pl:nom:m1	Case=Nom|Gender=Masc|Number=Plur|SubGender=Masc1	6	nsubj	6:nsubj	_
8	Sknerowie	Sknera	PROPN	subst:pl:nom:m1	Case=Nom|Gender=Masc|Number=Plur|SubGender=Masc1	7	flat	7:flat	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	A	a	CCONJ	conj	_	3	cc	3:cc	_
2	przecież	przecież	PART	qub	_	3	advmod	3:advmod	_
3	obserwujemy	obserwować	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	je	on	PRON	ppron3:pl:acc:n:ter:akc:npraep	Case=Acc|Gender=Neut|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	3	obj	3:obj	_
5	niemal	niemal	PART	qub	_	8	advmod	8:advmod	_
6	na	na	ADP	prep:loc	AdpType=Prep	8	case	8:case	Case=Loc
7	każdym	każdy	DET	adj:sg:loc:m3:pos	Case=Loc|Gender=Masc|Number=Sing|PronType=Tot|SubGender=Masc3	8	det	8:det	_
8	kroku	krok	NOUN	subst:sg:loc:m3	Case=Loc|Gender=Masc|Number=Sing|SubGender=Masc3	3	obl	3:obl:na	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 obj	color:blue
1	Alina	Alina	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	_
2	chwyciła	chwycić	VERB	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	Jerzego	Jerzy	PROPN	subst:sg:acc:m1	Case=Acc|Gender=Masc|Number=Sing|SubGender=Masc1	2	obj	2:obj	_
4	za	za	ADP	prep:acc	AdpType=Prep	5	case	5:case	Case=Acc
5	rękę	ręka	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	2	obl	2:obl:za	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


