---
layout: base
title:  'Statistics of nummod in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `nummod`

This relation is universal.

742 nodes (1%) are attached to their parents as `nummod`.

732 instances of `nummod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.12264150943396.

The following 6 pairs of parts of speech are connected with `nummod`: <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (716; 96% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (9; 1% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (7; 1% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nummod	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nummod	color:blue
1	Spośród	spośród	ADP	prep:gen	AdpType=Prep	2	case	2:case	Case=Gen
2	nich	on	PRON	ppron3:pl:gen:f:ter:akc:praep	Case=Gen|Gender=Fem|Number=Plur|Person=3|PrepCase=Pre|PronType=Prs|Variant=Long	3	obl	3:obl:spośród	_
3	wybierzemy	wybrać	VERB	fin:pl:pri:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	trzy	trzy	NUM	num:pl:acc:f:congr	Case=Acc|Gender=Fem|Number=Plur|NumType=Card	5	nummod	5:nummod	DepType=Congr
5	najlepsze	dobry	ADJ	adj:pl:acc:f:sup	Case=Acc|Degree=Sup|Gender=Fem|Number=Plur	3	obj	3:obj	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nummod	color:blue
1	OPS	OPS	PROPN	subst:sg:nom:m3	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc3	2	nsubj	2:nsubj	_
2	zarejestrował	zarejestrować	VERB	praet:sg:m3:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	ich	on	PRON	ppron3:pl:gen:m1:ter:akc:npraep	Case=Gen|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|SubGender=Masc1|Variant=Long	2	obj	2:obj	_
4	ponad	ponad	PART	qub	_	3	advmod	3:advmod	_
5	260	260	NUM	num:pl:acc:m1:rec	Case=Acc|Gender=Masc|Number=Plur|NumType=Card|SubGender=Masc1	3	nummod	3:nummod	DepType=Rec|SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


