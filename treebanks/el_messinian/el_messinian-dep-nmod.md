---
layout: base
title:  'Statistics of nmod in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `nmod`

This relation is universal.

13 nodes (1%) are attached to their parents as `nmod`.

11 instances of `nmod` (85%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.69230769230769.

The following 6 pairs of parts of speech are connected with `nmod`: <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-PRON.html">PRON</a></tt> (5; 38% instances), <tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_messinian-pos-PRON.html">PRON</a></tt> (3; 23% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-PROPN.html">PROPN</a></tt> (2; 15% instances), <tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_messinian-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-PRON.html">PRON</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod	color:blue
1	Δηλαδή	δηλαδή	ADV	AdBa	_	3	discourse	_	end_char=1625|start_char=1619
2	με	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	end_char=1628|start_char=1626
3	γεμίζει	γεμίζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	end_char=1636|start_char=1629
4	ρε	ρε	INTJ	AsPpSp	_	5	vocative	_	end_char=1639|start_char=1637
5	παιδί	παιδί	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	3	obl	_	end_char=1645|start_char=1640
6	μου	εγώ	PRON	PrPs	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	5	nmod	_	end_char=1649|start_char=1646
7	.	.	PUNCT	PTERMP	_	3	punct	_	end_char=1651|start_char=1650

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod	color:blue
1	Οι	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	2	det	_	_
2	δικοί	δικός	ADJ	NoCm	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	_
3	μου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	nmod	_	_
4	μείνανε	μένω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	mwe=1:VID
5	κάγκελο	κάγκελο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	4	xcomp	_	mwe=1
6	.	.	PUNCT	PTERMP	_	4	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod	color:blue
1	Αυτά	αυτός	DET	PnDm	Case=Acc|Gender=Neut|Number=Plur|PronType=Dem	7	nsubj	_	_
2	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Plur|PronType=Rel	3	obj	_	_
3	λες	λέω	VERB	VbMn	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
4	ήταν	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	7	cop	_	_
5	για	για	ADP	AsPpSp	_	7	case	_	_
6	το	ο	DET	AtDf	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	ορφανοτροφείο	ορφανοτροφείο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	0	root	_	_
8	της	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Ρεθύμνης	Ρεθύμνη	PROPN	NoPr	Case=Gen|Gender=Fem|Number=Sing	7	nmod	_	_
10	.	.	PUNCT	PTERMP	_	7	punct	_	PunctType=Peri

~~~


