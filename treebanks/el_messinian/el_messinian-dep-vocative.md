---
layout: base
title:  'Statistics of vocative in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `vocative`

This relation is universal.

5 nodes (1%) are attached to their parents as `vocative`.

4 instances of `vocative` (80%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.2.

The following 3 pairs of parts of speech are connected with `vocative`: <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt> (3; 60% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-INTJ.html">INTJ</a></tt> (1; 20% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 vocative	color:blue
1	Γεωργιόπ’λε	Γεωργιόπουλος	PROPN	NoPr	Case=Voc|Gender=Masc|Number=Sing	4	vocative	_	_
2	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
3	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	4	iobj	_	_
4	λέει	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	,	,	PUNCT	PUNCT	_	6	punct	_	PunctType=Comm
6	πες	λέω	VERB	VbMn	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	4	ccomp	_	_
7	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
8	πού	πού	ADV	AdBa	PronType=Int	6	ccomp	_	_
9	είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	8	cop	_	_
10	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	11	det	_	_
11	Βασιλάκης	Βασιλάκης	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
12	.	.	PUNCT	PTERMP	_	6	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 vocative	color:blue
1	Δηλαδή	δηλαδή	ADV	AdBa	_	3	discourse	_	end_char=1625|start_char=1619
2	με	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	end_char=1628|start_char=1626
3	γεμίζει	γεμίζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	end_char=1636|start_char=1629
4	ρε	ρε	INTJ	AsPpSp	_	5	vocative	_	end_char=1639|start_char=1637
5	παιδί	παιδί	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	end_char=1645|start_char=1640
6	μου	εγώ	PRON	PrPs	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod	_	end_char=1649|start_char=1646
7	.	.	PUNCT	PTERMP	_	3	punct	_	end_char=1651|start_char=1650

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 vocative	color:blue
1	Ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	end_char=303|start_char=302
2	άλλος	άλλος	DET	PnId	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	4	nsubj	_	end_char=309|start_char=304
3	δε	δεν	PART	PtNg	Polarity=Neg	4	advmod	_	end_char=312|start_char=310
4	δίνει	δίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	end_char=319|start_char=313
5	σημασία	σημασία	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	end_char=327|start_char=320
6	,	,	PUNCT	PUNCT	_	8	punct	_	end_char=329|start_char=328
7	ρε	ρε	INTJ	Ij	_	8	discourse	_	end_char=332|start_char=330
8	παιδιά	παιδί	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	4	vocative	_	end_char=339|start_char=333
9	.	.	PUNCT	PTERMP	_	4	punct	_	end_char=341|start_char=340

~~~


