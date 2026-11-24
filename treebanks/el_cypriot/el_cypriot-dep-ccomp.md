---
layout: base
title:  'Statistics of ccomp in UD_Greek-Cypriot'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cypriot: Relations: `ccomp`

This relation is universal.

40 nodes (2%) are attached to their parents as `ccomp`.

40 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.925.

The following 5 pairs of parts of speech are connected with `ccomp`: <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (36; 90% instances), <tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 ccomp	color:blue
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
# visual-style 24	bgColor:blue
# visual-style 24	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 24 ccomp	color:blue
1	Ε	ε	INTJ	_	_	3	discourse	_	_
2	η	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	αλήθκεια	αλήθκεια	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	6	nsubj:outer	_	_
4	εν	εν	PART	_	Polarity=Neg	6	advmod	_	_
5	τον	εγώ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	expl	_	_
6	πιερώννω	πιερώννω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	εγώ	εγώ	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	_
8	τον	ο	DET	_	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	λοαρκασμόν	λοαρκασμός	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	6	obj	_	_
10	του	ο	DET	_	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	11	det	_	_
11	κινητού	κινητόν	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	9	nmod	_	_
12	,	,	PUNCT	_	_	13	punct	_	_
13	πιερώννουμεν	πιερώννω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
14	τον	εγώ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obj	_	_
15	οικογενειακώς	οικογενειακώς	ADV	_	_	13	advmod	_	_
16	,	,	PUNCT	_	_	20	punct	_	_
17	τζ̆αι	τζ̆αι	CCONJ	_	_	20	cc	_	_
18	εν	εν	PART	_	Polarity=Neg	20	advmod	_	_
19	είμαι	είμαι	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	20	cop	_	_
20	σίουρη	σίουρος	ADJ	_	Case=Nom|Gender=Fem|Number=Sing	6	conj	_	_
21	πώς	πώς	ADV	_	PronType=Int	24	advmod	_	_
22	ακριβώς	ακριβώς	ADV	_	_	24	advmod	_	_
23	τον	εγώ	PRON	_	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	24	obj	_	_
24	πιερώννουμεν	πιερώννω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	20	ccomp	_	_
25	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 ccomp	color:blue
1	Εμάθαν	μαθθαίννω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	0	root	_	_
2	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	1	iobj	_	_
3	να	να	SCONJ	_	_	5	mark	_	_
4	είμαι	είμαι	AUX	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	ταπεινός	ταπεινός	ADJ	_	Case=Nom|Gender=Masc|Number=Sing	1	ccomp	_	_
6	τζ̆αι	τζ̆αι	CCONJ	_	_	9	cc	_	_
7	να	να	SCONJ	_	_	9	mark	_	_
8	μεν	μεν	PART	_	Polarity=Neg	9	advmod	_	_
9	μιλώ	μιλώ	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
10	πάρα	πάρα	ADV	_	_	11	advmod	_	_
11	πολλά	πολλά	ADV	_	PronType=Ind	9	advmod	_	_
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


