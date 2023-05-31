---
layout: base
title:  'Statistics of mark in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `mark`

This relation is universal.

1344 nodes (5%) are attached to their parents as `mark`.

1338 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95684523809524.

The following 13 pairs of parts of speech are connected with `mark`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1082; 81% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADP.html">ADP</a></tt> (132; 10% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (50; 4% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PART.html">PART</a></tt> (34; 3% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (17; 1% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (11; 1% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (6; 0% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="el_gud-pos-AUX.html">AUX</a></tt>-<tt><a href="el_gud-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="el_gud-pos-PRON.html">PRON</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
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
6	“	“	PUNCT	OPUNCT	PunctType=Quot	7	punct	_	_
7	δόξα	δoξάζω	VERB	NoCm	Number=Sing	5	obl	_	_
8	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Θεό	Θεός	PROPN	NoCm	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	_
10	”	”	PUNCT	CPUNCT	PunctType=Quot	7	punct	_	_
11	,	,	PUNCT	PUNCT	PunctType=Comm	15	punct	_	_
12	αλλά	αλλά	CCONJ	CjCo	_	15	cc	_	_
13	χωρίς	χωρίς	ADP	AsPpSp	_	15	mark	_	_
14	να	να	SCONJ	CjSb	_	15	mark	_	_
15	ρωτάς	ρωτώ	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
16	.	.	PUNCT	PTERMP	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 mark	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	2	punct	_	_
2	Ξέρετε	ξέρω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	γιατί	γιατί	SCONJ	CjSb	_	4	mark	_	_
4	είχε	έχω	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
5	έρθει	έρχομαι	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	2	ccomp	_	_
6	τώρα	τώρα	ADV	AdBa	_	5	advmod	_	_
7	σ	σε	ADP	AsPpSp	_	9	case	_	_
8	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Ελλάδα	Ελλάδα	PROPN	NoPr	Case=Acc|Gender=Fem|Number=Sing	5	obl	_	_
10	;	;	PUNCT	PTERM	PunctType=Qest	2	punct	_	_
11	»	»	PUNCT	CPUNCT	PunctType=Quot	2	punct	_	_

~~~


