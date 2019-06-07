---
layout: base
title:  'Statistics of advmod in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `advmod`

This relation is universal.

10958 nodes (8%) are attached to their parents as `advmod`.

8799 instances of `advmod` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.57145464500821.

The following 15 pairs of parts of speech are connected with `advmod`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (4458; 41% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (4065; 37% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (707; 6% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (576; 5% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (307; 3% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (250; 2% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (232; 2% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (107; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (100; 1% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (63; 1% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (45; 0% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (17; 0% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (15; 0% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (11; 0% instances), <tt><a href="pl_lfg-pos-NUM.html">NUM</a></tt>-<tt><a href="pl_lfg-pos-PART.html">PART</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	4	punct	4:punct	_
2	A	a	CCONJ	conj	_	4	cc	4:cc	_
3	czemu	czemu	ADV	adv	PronType=Int	4	advmod	4:advmod	_
4	miał	mieć	VERB	praet:sg:m2:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	pójść	pójść	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	4	xcomp	4:xcomp	SpaceAfter=No
6	?	?	PUNCT	interp	PunctType=Qest	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 advmod	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	6	punct	6:punct	_
2	A	a	CCONJ	conj	_	6	cc	6:cc	_
3	może	może	PART	qub	_	6	advmod	6:advmod	_
4	jemu	on	PRON	ppron3:sg:dat:m2:ter:akc:npraep	Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|SubGender=Masc2|Variant=Long	6	iobj	6:iobj	_
5	kocicy	kocica	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	obl	6:obl	_
6	zachciawszy	zachcieć	VERB	pant:perf	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	0	root	0:root	_
7	sia	się	PRON	qub	PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	SpaceAfter=No
8	?	?	PUNCT	interp	PunctType=Qest	6	punct	6:punct	SpaceAfter=No
9	!	!	PUNCT	interp	PunctType=Excl	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 advmod	color:blue
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


