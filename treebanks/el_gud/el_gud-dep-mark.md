---
layout: base
title:  'Statistics of mark in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `mark`

This relation is universal.

1301 nodes (5%) are attached to their parents as `mark`.

1300 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06840891621829.

The following 13 pairs of parts of speech are connected with `mark`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1054; 81% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADP.html">ADP</a></tt> (134; 10% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (40; 3% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (32; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PART.html">PART</a></tt> (8; 1% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (6; 0% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="el_gud-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	«	«	PUNCT	OPUNCT	_	2	punct	_	PunctType=Quot
2	Έλα	έρχομαι	VERB	VbMn	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Pass	0	root	_	_
3	να	να	SCONJ	CjSb	_	6	mark	_	_
4	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
5	τα	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	6	obj	_	_
6	πεις	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	xcomp	_	_
7	»	»	PUNCT	CPUNCT	_	2	punct	_	PunctType=Quot|SpaceAfter=No
8	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 mark	color:blue
1	Εσύ	εγώ	PRON	PnPe	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	όμως	όμως	CCONJ	AdBa	_	3	cc	_	_
3	μπορείς	μπορώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	να	να	SCONJ	CjSb	_	5	mark	_	_
5	πεις	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	3	xcomp	_	_
6	“	“	PUNCT	OPUNCT	_	7	punct	_	PunctType=Quot
7	δόξα	δόξα	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	5	ccomp	_	_
8	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Θεό	Θεός	PROPN	NoCm	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	_
10	”	”	PUNCT	CPUNCT	_	7	punct	_	PunctType=Quot
11	,	,	PUNCT	PUNCT	_	15	punct	_	PunctType=Comm
12	αλλά	αλλά	CCONJ	CjCo	_	15	cc	_	_
13	χωρίς	χωρίς	ADP	AsPpSp	_	15	mark	_	_
14	να	να	SCONJ	CjSb	_	13	fixed	_	_
15	ρωτάς	ρωτώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
16	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Δε	δεν	PART	PtNg	Polarity=Neg	2	advmod	_	_
2	θέλουμε	θέλω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	SCONJ	CjSb	_	6	mark	_	_
4	είμαστε	είμαι	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
5	το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	κέντρο	κέντρο	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	2	ccomp	_	_
7	,	,	PUNCT	PUNCT	_	10	punct	_	PunctType=Comm
8	αλλά	αλλά	CCONJ	CjCo	_	10	cc	_	_
9	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	περιφέρεια	περιφέρεια	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	2	conj	_	SpaceAfter=No
11	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


