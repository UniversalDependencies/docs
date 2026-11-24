---
layout: base
title:  'Statistics of xcomp in UD_Greek-Cypriot'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cypriot: Relations: `xcomp`

This relation is universal.

27 nodes (1%) are attached to their parents as `xcomp`.

27 instances of `xcomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.37037037037037.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (16; 59% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (5; 19% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (3; 11% instances), <tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-DET.html">DET</a></tt> (1; 4% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 xcomp	color:blue
1	Οπότε	οπότε	ADV	_	_	4	advmod	_	_
2	,	,	PUNCT	_	_	4	punct	_	_
3	εν	εν	PART	_	Polarity=Neg	4	advmod	_	_
4	έχω	έχω	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
5	έννοιαν	έννοια	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	_
6	κάθε	κάθε	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Tot	7	det	_	_
7	μήναν	μήνας	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	4	obl	_	_
8	να	να	SCONJ	_	_	9	mark	_	_
9	βουρήσω	βουρώ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	4	ccomp	_	_
10	να	να	SCONJ	_	_	11	mark	_	_
11	πιερώσω	πιερώννω	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	9	xcomp	_	_
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Ε	ε	INTJ	_	_	3	discourse	_	_
2	,	,	PUNCT	_	_	3	punct	_	_
3	λαλούν	λαλώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	με	εγώ	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
5	Αντρέαν	Αντρέας	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	3	xcomp	_	_
6	,	,	PUNCT	_	_	3	punct	_	_
7	τζ̆αι	τζ̆αι	CCONJ	_	_	8	cc	_	_
8	σημαίνει	σημαίνω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
9	θαραλλέος	θαραλλέος	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	8	xcomp	_	_
10	νομίζω	νομίζω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	8	parataxis	_	_
11	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Την	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	2	det	_	_
2	νύχταν	νύχτα	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	3	obl	_	_
3	εθώρουν	θωρώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	πως	πως	SCONJ	_	_	5	mark	_	_
5	εγίνηκα	γίνουμαι	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Pass	3	ccomp	_	_
6	ο	ο	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	ήρωας	ήρωας	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	xcomp	_	_
8	του	ο	DET	_	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	_	_
9	«	«	PUNCT	_	_	10	punct	_	_
10	Μέιτριξ	Μέιτριξ	PROPN	_	Case=Gen|Gender=Neut|Number=Sing	7	nmod	_	_
11	3	3	NUM	_	NumType=Card	10	nummod	_	_
12	»	»	PUNCT	_	_	10	punct	_	_
13	σε	σε	ADP	_	_	14	case	_	_
14	συνδυασμόν	συνδυασμός	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	7	nmod	_	_
15	με	με	ADP	_	_	18	case	_	_
16	τον	ο	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	18	det	_	_
17	«	«	PUNCT	_	_	18	punct	_	_
18	Ράμπο	Ράμπο	PROPN	_	Case=Acc|Gender=Masc|Number=Sing	14	nmod	_	_
19	1	1	NUM	_	NumType=Card	18	nummod	_	_
20	»	»	PUNCT	_	_	18	punct	_	_
21	.	.	PUNCT	_	_	3	punct	_	_

~~~


