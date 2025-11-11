---
layout: base
title:  'Statistics of ccomp in UD_Greek-Messinian'
udver: '2'
---

## Treebank Statistics: UD_Greek-Messinian: Relations: `ccomp`

This relation is universal.

14 nodes (2%) are attached to their parents as `ccomp`.

12 instances of `ccomp` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.07142857142857.

The following 3 pairs of parts of speech are connected with `ccomp`: <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-VERB.html">VERB</a></tt> (12; 86% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="el_messinian-pos-VERB.html">VERB</a></tt>-<tt><a href="el_messinian-pos-ADV.html">ADV</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 ccomp	color:blue
1	Και	και	CCONJ	CjCo	_	2	cc	_	_
2	θεωρώ	θεωρώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ότι	ότι	SCONJ	CjSb	_	4	mark	_	_
4	ήτανε	είμαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	_	_
5	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 ccomp	color:blue
1	Γι'	για	ADP	AsPpSp	ExtPos=ADV	3	advmod	_	end_char=172|start_char=169
2	αυτό	αυτός	DET	PnDm	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	1	fixed	_	end_char=177|start_char=173
3	λέω	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	end_char=181|start_char=178
4	ότι	ότι	SCONJ	CjSb	_	7	mark	_	end_char=185|start_char=182
5	είμαστε	είμαι	AUX	VbMn	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	7	cop	_	end_char=193|start_char=186
6	πολύ	πολύ	ADV	AdBa	_	7	advmod	_	end_char=198|start_char=194
7	περίεργοι	περίεργος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Plur	3	ccomp	_	end_char=208|start_char=199
8	.	.	PUNCT	PTERMP	_	3	punct	_	end_char=210|start_char=209

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 ccomp	color:blue
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


