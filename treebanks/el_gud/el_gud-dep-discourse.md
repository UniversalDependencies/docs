---
layout: base
title:  'Statistics of discourse in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `discourse`

This relation is universal.

49 nodes (0%) are attached to their parents as `discourse`.

42 instances of `discourse` (86%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.6734693877551.

The following 9 pairs of parts of speech are connected with `discourse`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (27; 55% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (10; 20% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (4; 8% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (3; 6% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-CCONJ.html">CCONJ</a></tt> (1; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	«	«	PUNCT	OPUNCT	_	5	punct	_	PunctType=Quot
2	Όχι	όχι	INTJ	AdBa	Polarity=Neg	5	discourse	_	_
3	,	,	PUNCT	PUNCT	_	2	punct	_	PunctType=Comm
4	έχουν	έχω	AUX	VbMn	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	πεθάνει	πεθαίνω	VERB	VbMn	Aspect=Perf|VerbForm=Inf|Voice=Act	0	root	_	_
6	και	και	CCONJ	CjCo	_	8	cc	_	_
7	οι	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	8	det	_	_
8	δύο	δύο	NUM	NmCd	Case=Nom|Gender=Masc|Number=Plur|NumType=Card	5	nsubj	_	_
9	»	»	PUNCT	CPUNCT	_	5	punct	_	PunctType=Quot|SpaceAfter=No
10	.	.	PUNCT	PTERMP	_	5	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 discourse	color:blue
1	«	«	PUNCT	OPUNCT	_	9	punct	_	PunctType=Quot
2	Αλήθεια	αλήθεια	ADV	AdBa	_	9	discourse	_	_
3	,	,	PUNCT	PUNCT	_	5	punct	_	PunctType=Comm
4	ρε	ρε	INTJ	Ij	_	5	discourse	_	_
5	μαμά	μαμά	NOUN	NoCm	Case=Voc|Gender=Fem|Number=Sing	9	vocative	_	_
6	,	,	PUNCT	PUNCT	_	5	punct	_	PunctType=Comm
7	τι	τι	ADV	PnIr	_	9	advmod	_	_
8	τα	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	9	expl	_	_
9	ήθελες	θέλω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	τα	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	11	det	_	_
11	ορεκτικά	ορεκτικός	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	9	obj	_	_
12	;	;	PUNCT	PTERM	_	9	punct	_	PunctType=Qest
13	»	»	PUNCT	CPUNCT	_	9	punct	_	PunctType=Quot

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 discourse	color:blue
1	«	«	PUNCT	OPUNCT	_	9	punct	_	PunctType=Quot
2	Αλήθεια	αλήθεια	ADV	AdBa	_	9	discourse	_	_
3	,	,	PUNCT	PUNCT	_	5	punct	_	PunctType=Comm
4	ρε	ρε	INTJ	Ij	_	5	discourse	_	_
5	μαμά	μαμά	NOUN	NoCm	Case=Voc|Gender=Fem|Number=Sing	9	vocative	_	_
6	,	,	PUNCT	PUNCT	_	5	punct	_	PunctType=Comm
7	τι	τι	ADV	PnIr	_	9	advmod	_	_
8	τα	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	9	expl	_	_
9	ήθελες	θέλω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
10	τα	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	11	det	_	_
11	ορεκτικά	ορεκτικός	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	9	obj	_	_
12	;	;	PUNCT	PTERM	_	9	punct	_	PunctType=Qest
13	»	»	PUNCT	CPUNCT	_	9	punct	_	PunctType=Quot

~~~


