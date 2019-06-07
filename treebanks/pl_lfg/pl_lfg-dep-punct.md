---
layout: base
title:  'Statistics of punct in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `punct`

This relation is universal.

25820 nodes (20%) are attached to their parents as `punct`.

19366 instances of `punct` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.05185902401239.

The following 8 pairs of parts of speech are connected with `punct`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PUNCT.html">PUNCT</a></tt> (23184; 90% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PUNCT.html">PUNCT</a></tt> (1202; 5% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-PUNCT.html">PUNCT</a></tt> (945; 4% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-PUNCT.html">PUNCT</a></tt> (179; 1% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-PUNCT.html">PUNCT</a></tt> (129; 0% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-PUNCT.html">PUNCT</a></tt> (87; 0% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-PUNCT.html">PUNCT</a></tt> (85; 0% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-PUNCT.html">PUNCT</a></tt> (9; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 punct	color:blue
1	423	423	NUM	num:pl:acc:m3:congr	Case=Acc|Gender=Masc|Number=Plur|NumType=Card|SubGender=Masc3	2	nummod	2:nummod	DepType=Congr
2	razy	raz	NOUN	subst:pl:acc:m3	Case=Acc|Gender=Masc|Number=Plur|SubGender=Masc3	3	obl	3:obl	_
3	spotkały	spotkać	VERB	praet:pl:m3:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Plur|SubGender=Masc3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	się	się	PRON	qub	PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
5	cztery	cztery	NUM	num:pl:nom:m3:congr	Case=Nom|Gender=Masc|Number=Plur|NumType=Card|SubGender=Masc3	7	nummod	7:nummod	DepType=Congr
6	rządowe	rządowy	ADJ	adj:pl:nom:m3:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Plur|SubGender=Masc3	7	amod	7:amod	_
7	komitety	komitet	NOUN	subst:pl:nom:m3	Case=Nom|Gender=Masc|Number=Plur|SubGender=Masc3	3	nsubj	3:nsubj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 punct	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 punct	color:blue
1	–	–	PUNCT	interp	PunctType=Dash	7	punct	7:punct	_
2	ale	ale	CCONJ	conj	_	7	cc	7:cc	_
3	on	on	PRON	ppron3:sg:nom:m1:ter:akc:npraep	Case=Nom|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|SubGender=Masc1|Variant=Long	7	nsubj	7:nsubj	_
4	był	być	AUX	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	7	cop:locat	7:cop:locat	_
5	w	w	ADP	prep:loc:nwok	AdpType=Prep|Variant=Short	7	case	7:case	Case=Loc
6	jakim	jaki	DET	adj:sg:loc:n:pos	Case=Loc|Gender=Neut|Number=Sing|PronType=Int	7	det	7:det	_
7	miejscu	miejsce	NOUN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	0	root	0:root	SpaceAfter=No
8	?	?	PUNCT	interp	PunctType=Qest	7	punct	7:punct	_

~~~


