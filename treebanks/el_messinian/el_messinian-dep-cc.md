---
layout: base
title:  'Statistics of cc in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `cc`

This relation is universal.

35 nodes (4%) are attached to their parents as `cc`.

34 instances of `cc` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.42857142857143.

The following 7 pairs of parts of speech are connected with `cc`: <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-CCONJ.html">CCONJ</a></tt> (15; 43% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-CCONJ.html">CCONJ</a></tt> (12; 34% instances), <tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_messinian-pos-CCONJ.html">CCONJ</a></tt> (4; 11% instances), <tt><a href="el_messinian-pos-ADV.html">ADV</a></tt>-<tt><a href="el_messinian-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="el_messinian-pos-DET.html">DET</a></tt>-<tt><a href="el_messinian-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="el_messinian-pos-NUM.html">NUM</a></tt>-<tt><a href="el_messinian-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances), <tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_messinian-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	Είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	cop	_	end_char=1538|start_char=1533
2	πολύ	πολύ	ADV	AdBa	_	3	advmod	_	end_char=1543|start_char=1539
3	κουραστική	κουραστικός	ADJ	AjBa	Case=Nom|Gender=Fem|Number=Sing	0	root	_	end_char=1554|start_char=1544
4	και	και	CCONJ	CjCo	_	6	cc	_	end_char=1558|start_char=1555
5	δεν	δεν	PART	PtNg	Polarity=Neg	6	advmod	_	end_char=1562|start_char=1559
6	πληρώνεται	πληρώνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	3	conj	_	end_char=1573|start_char=1563
7	.	.	PUNCT	PTERMP	_	3	punct	_	end_char=1575|start_char=1574

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc	color:blue
1	Θα	θα	AUX	PtFu	Tense=Fut	2	aux	_	end_char=2618|start_char=2616
2	παίρναμε	παίρνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	end_char=2627|start_char=2619
3	,	,	PUNCT	PUNCT	_	4	punct	_	end_char=2629|start_char=2628
4	λέει	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	parataxis	_	end_char=2634|start_char=2630
5	,	,	PUNCT	PUNCT	_	8	punct	_	end_char=2636|start_char=2635
6	και	και	CCONJ	CjCo	_	8	cc	_	end_char=2640|start_char=2637
7	κανά	κανένα	DET	PnId	Case=Acc|Gender=Neut|Number=Sing|PronType=Neg	8	det	_	end_char=2645|start_char=2641
8	στεκάκι	στεκάκι	NOUN	NoCm	Case=Acc|Degree=Dim|Gender=Neut|Number=Sing	4	obj	_	end_char=2653|start_char=2646
9	,	,	PUNCT	PUNCT	_	11	punct	_	end_char=2655|start_char=2654
10	σαν	σαν	ADV	AdBa	_	11	case	_	end_char=2659|start_char=2656
11	αυτά	αυς	DET	PnDm	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	8	amod	_	end_char=2664|start_char=2660
12	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Plur|PronType=Rel	13	obj	_	end_char=2668|start_char=2665
13	φοράς	φορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	11	acl:relcl	_	end_char=2674|start_char=2669
14	.	.	PUNCT	PTERMP	_	2	punct	_	end_char=2676|start_char=2675

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cc	color:blue
1	Είχα	έχω	AUX	VbMn	Mood=Ind|Number=Sing|Person=1|Tense=Past	2	aux	_	_
2	κάνει	κάνω	VERB	VbMn	Aspect=Perf|Tense=Past|Voice=Act	0	root	_	_
3	και	και	CCONJ	CjCo	_	5	cc	_	_
4	τη	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	δικιά	δικός	ADJ	AjBa	Case=Acc|Gender=Fem|Number=Sing	13	amod	_	_
6	μου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=1|PronType=Prs	5	nmod	_	_
7	και	και	CCONJ	CjCo	_	9	cc	_	_
8	της	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Ιωάννας	Ιωάννα	PROPN	NoPr	Case=Gen|Gender=Fem|Number=Sing	5	conj	_	_
10	και	και	CCONJ	CjCo	_	12	cc	_	_
11	του	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	μπαμπά	μπαμπάς	NOUN	NoCm	Case=Gen|Gender=Masc|Number=Sing	5	conj	_	_
13	έφοδο	έφοδος	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
14	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


