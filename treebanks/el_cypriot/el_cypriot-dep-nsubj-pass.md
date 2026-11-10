---
layout: base
title:  'Statistics of nsubj:pass in UD_Greek-Cypriot'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cypriot: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="el_cypriot-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="el_cypriot-dep-nsubj-outer.html">nsubj:outer</a></tt>.

2 nodes (0%) are attached to their parents as `nsubj:pass`.

1 instances of `nsubj:pass` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 1 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-DET.html">DET</a></tt> (2; 100% instances).


~~~ conllu
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 20 nsubj:pass	color:blue
1	Ούλλες	ούλλος	DET	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Tot	3	nsubj	_	_
2	μας	εγώ	PRON	_	Case=Gen|Number=Plur|Person=1|PronType=Prs	1	nmod	_	_
3	εγεννηθήκαμεν	γεννώ	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Pass	0	root	_	_
4	με	με	ADP	_	_	5	case	_	_
5	τρύπες	τρύπα	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	3	obl	_	_
6	πά’	πάνω	ADV	_	_	5	advmod	_	_
7	σε	σε	ADP	_	_	9	case	_	_
8	τες	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	_
9	τζ̆οιλιές	τζ̆οιλιά	ADJ	_	Case=Acc|Gender=Fem|Number=Plur	6	obl	_	_
10	,	,	PUNCT	_	_	11	punct	_	_
11	ούλλες	ούλλος	DET	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Tot	3	parataxis	_	_
12	μας	εγώ	PRON	_	Case=Gen|Number=Plur|Person=1|Poss=Yes|PronType=Prs	11	nmod	_	_
13	,	,	PUNCT	_	_	14	punct	_	_
14	παλιές	παλιός	ADJ	_	Case=Nom|Gender=Fem|Number=Plur	11	appos	_	_
15	,	,	PUNCT	_	_	16	punct	_	_
16	τζ̆αινούρκες	τζ̆αινούρκος	ADJ	_	Case=Nom|Gender=Fem|Number=Plur	14	conj	_	_
17	,	,	PUNCT	_	_	18	punct	_	_
18	μεταχειρισμένες	μεταχειρισμένος	VERB	_	Case=Nom|Gender=Fem|Number=Plur|VerbForm=Part	14	conj	_	_
19	,	,	PUNCT	_	_	3	punct	_	_
20	ούλλες	ούλλος	DET	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Tot	21	nsubj:pass	_	_
21	τρυπημένες	τρυπημένος	VERB	_	Case=Nom|Gender=Fem|Number=Plur|VerbForm=Part|Voice=Pass	3	parataxis	_	_
22	μιαν	ένας	DET	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	23	det	_	_
23	ζωήν	ζωή	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	21	obl	_	_
24	.	.	PUNCT	_	_	3	punct	_	_

~~~


