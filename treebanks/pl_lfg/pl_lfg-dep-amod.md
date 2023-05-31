---
layout: base
title:  'Statistics of amod in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `amod`

This relation is universal.

5909 nodes (5%) are attached to their parents as `amod`.

4174 instances of `amod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.10086309020139.

The following 6 pairs of parts of speech are connected with `amod`: <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (5654; 96% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (166; 3% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (81; 1% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 amod	color:blue
1	Cała	cały	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	2	amod	2:amod	_
2	Warszawa	Warszawa	PROPN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
3	śmiała	śmiać	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	się	się	PRON	qub	PronType=Prs|Reflex=Yes	3	expl:pv	3:expl:pv	_
5	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Gen
6	tych	ten	DET	adj:pl:gen:m3:pos	Case=Gen|Gender=Masc|Number=Plur|PronType=Dem|SubGender=Masc3	8	det	8:det	_
7	złośliwych	złośliwy	ADJ	adj:pl:gen:m3:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|SubGender=Masc3	8	amod	8:amod	_
8	podarunków	podarunek	NOUN	subst:pl:gen:m3	Case=Gen|Gender=Masc|Number=Plur|SubGender=Masc3	3	obl	3:obl:z	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	Nie	nie	PART	qub	Polarity=Neg	2	advmod	2:advmod	_
2	ma	być	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	nic	nic	PRON	subst:sg:gen:n	Case=Gen|Gender=Neut|Number=Sing|PronType=Neg	2	nsubj	2:nsubj	_
4	lepszego	dobry	ADJ	adj:sg:gen:n:com	Case=Gen|Degree=Cmp|Gender=Neut|Number=Sing	3	amod	3:amod	_
5	niż	niż	ADP	prep:nom	AdpType=Prep	9	case	9:case	Case=Nom
6	zdrowy	zdrowy	ADJ	adj:sg:nom:m3:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc3	9	amod	9:amod	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
8	spokojny	spokojny	ADJ	adj:sg:nom:m3:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc3	6	conj	6:conj|9:amod	_
9	sen	sen	NOUN	subst:sg:nom:m3	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc3	4	obl	4:obl:niż	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


