---
layout: base
title:  'Statistics of nsubj:outer in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="el_gud-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="el_gud-dep-nsubj-pass.html">nsubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.5.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt> (2; 50% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-DET.html">DET</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 nsubj:outer	color:blue
1	Να	να	SCONJ	PtSj	_	2	mark	_	_
2	έχει	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	σχέση	σχέση	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	2	obj	_	_
4	αυτός	αυτός	DET	PnDm	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	2	nsubj	_	_
5	με	με	ADP	AsPpSp	_	7	case	_	_
6	τη	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	7	det	_	_
7	μαφία	μαφία	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	2	obl	_	_
8	είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
9	απίθανο	απίθανος	ADJ	AjBa	Case=Nom|Gender=Neut|Number=Sing	2	nsubj:outer	_	SpaceAfter=No
10	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 nsubj:outer	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	8	punct	_	_
2	Εντάξει	εντάξει	ADV	AdBa	_	8	discourse	_	_
3	,	,	PUNCT	PUNCT	PunctType=Comm	8	punct	_	_
4	αλλά	αλλά	CCONJ	CjCo	_	8	cc	_	_
5	άλλο	άλλος	DET	PnId	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	8	nsubj:outer	_	_
6	να	να	AUX	PtSj	_	8	aux	_	_
7	τα	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	8	obj	_	_
8	διαβάζω	διαβάζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
9	και	και	CCONJ	CjCo	_	12	cc	_	_
10	άλλο	άλλος	DET	PnId	Case=Acc|Gender=Neut|Number=Sing|PronType=Ind	12	nsubj:outer	_	_
11	ν'	να	AUX	PtSj	_	12	aux	_	_
12	ακούω	ακούω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	conj	_	_
13	εμένα	εγώ	PRON	PnPe	Case=Acc|Number=Sing|Person=1|PronType=Prs	12	obj	_	_
14	να	να	SCONJ	PtSj	_	16	mark	_	_
15	τα	εγώ	PRON	PnPe	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	16	obj	_	_
16	λέω	λέω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	12	xcomp	_	_
17	»	»	PUNCT	CPUNCT	PunctType=Quot	8	punct	_	SpaceAfter=No
18	.	.	PUNCT	PTERMP	PunctType=Peri	8	punct	_	_

~~~


