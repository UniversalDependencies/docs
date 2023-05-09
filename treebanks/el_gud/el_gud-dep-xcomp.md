---
layout: base
title:  'Statistics of xcomp in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `xcomp`

This relation is universal.

575 nodes (2%) are attached to their parents as `xcomp`.

566 instances of `xcomp` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.20347826086957.

The following 14 pairs of parts of speech are connected with `xcomp`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (311; 54% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (88; 15% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (59; 10% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (55; 10% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (36; 6% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-X.html">X</a></tt> (3; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 xcomp	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	2	punct	_	_
2	Έλα	έρχομαι	VERB	VbMn	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Pass	0	root	_	_
3	να	να	SCONJ	CjSb	_	6	mark	_	_
4	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	obj	_	_
5	τα	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	6	obj	_	_
6	πεις	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	xcomp	_	_
7	»	»	PUNCT	CPUNCT	PunctType=Quot	2	punct	_	SpaceAfter=No
8	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	πεντακάθαροι	πεντακάθαρος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Plur	1	xcomp	_	SpaceAfter=No
3	.	.	PUNCT	PTERMP	PunctType=Peri	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Γυρίζω	γυρίζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ποδαράτος	ποδαράτος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Sing	1	xcomp	_	_
3	από	από	ADP	AsPpSp	_	5	case	_	_
4	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Κηφισίας	Κηφισίας	PROPN	NoPr	Case=Gen|Gender=Fem|Number=Sing	1	obl	_	_
6	σ	σε	ADP	AsPpSp	_	8	case	_	_
7	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
8	γραφείο	γραφείο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	1	obl	_	SpaceAfter=No
9	.	.	PUNCT	PTERMP	PunctType=Peri	1	punct	_	_

~~~


