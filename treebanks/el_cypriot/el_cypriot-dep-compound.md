---
layout: base
title:  'Statistics of compound in UD_Greek-Cypriot'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cypriot: Relations: `compound`

This relation is universal.

2 nodes (0%) are attached to their parents as `compound`.

2 instances of `compound` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `compound`: <tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="el_cypriot-pos-NUM.html">NUM</a></tt>-<tt><a href="el_cypriot-pos-DET.html">DET</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 compound	color:blue
1	Εννά	εννά	AUX	_	Tense=Fut	2	aux	_	_
2	τραβήσουμεν	τραβώ	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	0	root	_	_
3	μακρύν	μακρύν	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	2	obj	_	_
4	-	-	PUNCT	_	_	3	punct	_	_
5	κοντόν	κοντόν	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	3	compound	_	_
6	για	για	ADP	_	ExtPos=SCONJ	8	mark	_	_
7	να	να	SCONJ	_	_	6	fixed	_	_
8	δούμεν	βλέπω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	2	advcl	_	_
9	ποια	ποιος	DET	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Int	15	nsubj	_	_
10	που	που	SCONJ	_	_	12	case	_	_
11	τες	ο	DET	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Ind	12	det	_	_
12	θκυο	θκυο	NUM	_	Case=Nom|Gender=Fem|Number=Plur|NumType=Card	9	nmod	_	_
13	μας	εγώ	PRON	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	12	nmod	_	_
14	θα	θα	AUX	_	Tense=Fut	15	aux	_	_
15	πάει	πηαίννω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	ccomp	_	_
16	εκδρομήν	εκδρομή	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	15	obl	_	_
17	με	με	ADP	_	_	19	case	_	_
18	την	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	γεναίκαν	γεναίκα	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	15	obl	_	_
20	σου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	19	nmod	_	_
21	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 12 compound	color:blue
1	Που	που	SCONJ	_	_	3	mark	_	_
2	’μασταν	είμαι	AUX	_	Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	3	cop	_	_
3	μιτσ̆ιοί	μιτσής	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	8	advcl	_	_
4	με	με	ADP	_	_	6	case	_	_
5	τον	ο	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	κολλητόν	κολλητός	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	obl	_	_
7	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod	_	_
8	εφωνάζαμεν	φωνάζω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
9	ο	ο	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	ένας	ένας	NUM	_	Case=Nom|Gender=Masc|Number=Sing|NumType=Card	8	nsubj	_	_
11	τον	ο	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	12	det	_	_
12	άλλον	άλλος	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	10	compound	_	_
13	ππεζεβέγκην	ππεζεβέγκης	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	8	xcomp	_	_
14	τζ̆αι	τζ̆αι	CCONJ	_	_	15	cc	_	_
15	χερχελέν	χερχελές	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	13	conj	_	_
16	.	.	PUNCT	_	_	8	punct	_	_

~~~


