---
layout: base
title:  'Statistics of mark in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `mark`

This relation is universal.

1300 nodes (5%) are attached to their parents as `mark`.

1299 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.06615384615385.

The following 11 pairs of parts of speech are connected with `mark`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1055; 81% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADP.html">ADP</a></tt> (134; 10% instances), <tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (40; 3% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (32; 2% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (12; 1% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PART.html">PART</a></tt> (8; 1% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (6; 0% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (4; 0% instances), <tt><a href="el_gud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_gud-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="el_gud-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances), <tt><a href="el_gud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	«	«	PUNCT	_	_	2	punct	_	PunctType=Quot
2	Έλα	έρχομαι	VERB	_	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Pass	0	root	_	_
3	να	να	SCONJ	_	_	6	mark	_	_
4	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
5	τα	εγώ	PRON	_	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	6	obj	_	_
6	πεις	λέω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	2	xcomp	_	_
7	»	»	PUNCT	_	_	2	punct	_	PunctType=Quot|SpaceAfter=No
8	.	.	PUNCT	_	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 13 mark	color:blue
1	Εσύ	εγώ	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	3	nsubj	_	_
2	όμως	όμως	CCONJ	_	_	3	cc	_	_
3	μπορείς	μπορώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	να	να	SCONJ	_	_	5	mark	_	_
5	πεις	λέω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	3	xcomp	_	_
6	“	“	PUNCT	_	_	7	punct	_	PunctType=Quot
7	δόξα	δόξα	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	5	ccomp	_	_
8	το	ο	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Θεό	Θεός	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	_
10	”	”	PUNCT	_	_	7	punct	_	PunctType=Quot
11	,	,	PUNCT	_	_	15	punct	_	PunctType=Comm
12	αλλά	αλλά	CCONJ	_	_	15	cc	_	_
13	χωρίς	χωρίς	ADP	_	_	15	mark	_	_
14	να	να	SCONJ	_	_	13	fixed	_	_
15	ρωτάς	ρωτώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	SpaceAfter=No
16	.	.	PUNCT	_	_	3	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 mark	color:blue
1	Δε	δεν	PART	_	Polarity=Neg	2	advmod	_	_
2	θέλουμε	θέλω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	να	να	SCONJ	_	_	6	mark	_	_
4	είμαστε	είμαι	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	6	cop	_	_
5	το	ο	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
6	κέντρο	κέντρο	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	2	ccomp	_	_
7	,	,	PUNCT	_	_	10	punct	_	PunctType=Comm
8	αλλά	αλλά	CCONJ	_	_	10	cc	_	_
9	η	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	10	det	_	_
10	περιφέρεια	περιφέρεια	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	2	conj	_	SpaceAfter=No
11	.	.	PUNCT	_	_	2	punct	_	PunctType=Peri

~~~


