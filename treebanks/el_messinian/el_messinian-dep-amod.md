---
layout: base
title:  'Statistics of amod in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `amod`

This relation is universal.

20 nodes (2%) are attached to their parents as `amod`.

17 instances of `amod` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55.

The following 6 pairs of parts of speech are connected with `amod`: <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt> (14; 70% instances), <tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt> (2; 10% instances), <tt><a href="el_messinian-pos-DET.html">DET</a></tt>-<tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-ADP.html">ADP</a></tt> (1; 5% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-PRON.html">PRON</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 amod	color:blue
1	Με	με	ADP	AsPpSp	_	4	case	_	_
2	τα	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	4	det	_	_
3	ίδια	ίδιος	ADJ	NmCd	Case=Acc|Gender=Neut|Number=Plur	4	amod	_	_
4	ρούχα	ρούχο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	6	obl	_	_
5	μας	εγώ	PRON	PnPo	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	6	iobj	_	_
6	λέει	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	αφήστε	αφήνω	VERB	VbMn	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	6	ccomp	_	_
8	ελεύθερα	ελεύθερα	ADV	AdBa	_	7	advmod	_	_
9	τα	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	10	det	_	_
10	παι	παιδιά	NOUN	ABBR	Case=Acc|Gender=Neut|Number=Sing	7	obl	_	_
11	.	.	PUNCT	PTERMP	_	7	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	end_char=928|start_char=926
2	άλλο	άλλος	ADJ	PnId	Case=Acc|Gender=Neut|Number=Sing	3	amod	_	_
3	Σάββατο	Σάββατο	PROPN	NoCm	Case=Acc|Gender=Neut|Number=Sing	5	obl	_	end_char=941|start_char=934
4	θα	θα	AUX	PtFu	Tense=Fut	5	aux	_	end_char=944|start_char=942
5	ξαναπάω	ξαναπηγαίνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	0	root	_	end_char=952|start_char=945
6	.	.	PUNCT	PTERMP	_	5	punct	_	end_char=954|start_char=953

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 24 25 amod	color:blue
1	Αυτό	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	13	nsubj	_	end_char=1381|start_char=1377
2	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	3	obj	_	end_char=1385|start_char=1382
3	ανακάλυψα	αναλύπτω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	1	acl:relcl	_	end_char=1395|start_char=1386
4	και	και	CCONJ	CjCo	_	7	cc	_	end_char=1399|start_char=1396
5	που	που	PRON	PnRe	Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	7	nsubj	_	end_char=1403|start_char=1400
6	με	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	obj	_	end_char=1406|start_char=1404
7	κάνει	κάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	end_char=1412|start_char=1407
8	εμένα	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	7	expl	_	end_char=1418|start_char=1413
9	χαρούμενη	χαρούμενος	ADJ	AjBa	Case=Nom|Gender=Fem|Number=Sing	7	xcomp	_	end_char=1428|start_char=1419
10	και	και	CCONJ	CjCo	_	11	cc	_	end_char=1432|start_char=1429
11	καλά	καλά	ADV	AdBa	_	9	conj	_	end_char=1437|start_char=1433
12	είναι	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	13	cop	_	end_char=1443|start_char=1438
13	αυτό	αυτός	DET	PnDm	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	0	root	_	end_char=1448|start_char=1444
14	,	,	PUNCT	PUNCT	_	13	punct	_	end_char=1450|start_char=1449
15	ότι	ότι	SCONJ	CjSb	_	18	mark	_	end_char=1454|start_char=1451
16	θα	θα	AUX	PtFu	Tense=Fut	18	aux	_	end_char=1457|start_char=1455
17	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	18	obl	_	end_char=1461|start_char=1458
18	γουστάρω	γουστάρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	13	acl	_	end_char=1470|start_char=1462
19	να	να	SCONJ	PtSj	_	20	mark	_	end_char=1473|start_char=1471
20	αγοράζω	αγοράζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	18	ccomp	_	end_char=1481|start_char=1474
21	και	και	CCONJ	CjCo	_	23	cc	_	end_char=1485|start_char=1482
22	να	να	SCONJ	PtSj	_	23	mark	_	end_char=1488|start_char=1486
23	πουλάω	πουλώ	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	20	conj	_	end_char=1495|start_char=1489
24	τίποτα	τίποτα	DET	PnId	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	18	conj	_	end_char=1502|start_char=1496
25	άλλο	άλλος	ADJ	PnId	Case=Acc|Gender=Neut|Number=Sing	24	amod	_	end_char=1507|start_char=1503
26	.	.	PUNCT	PTERMP	_	13	punct	_	end_char=1509|start_char=1508

~~~


