---
layout: base
title:  'Statistics of nsubj in UD_Greek-Cypriot'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cypriot: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="el_cypriot-dep-nsubj-outer.html">nsubj:outer</a></tt>, <tt><a href="el_cypriot-dep-nsubj-pass.html">nsubj:pass</a></tt>.

75 nodes (4%) are attached to their parents as `nsubj`.

46 instances of `nsubj` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.34666666666667.

The following 15 pairs of parts of speech are connected with `nsubj`: <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (23; 31% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-PRON.html">PRON</a></tt> (18; 24% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (11; 15% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-DET.html">DET</a></tt> (6; 8% instances), <tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cypriot-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-DET.html">DET</a></tt> (2; 3% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="el_cypriot-pos-ADV.html">ADV</a></tt>-<tt><a href="el_cypriot-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj	color:blue
1	Εκάθετουν	κάθουμαι	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	η	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	μάνα	μάνα	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	1	nsubj	_	_
4	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
5	τζ̆’	τζ̆αι	CCONJ	_	_	6	cc	_	_
6	υπολόγιζεν	υπολογίζω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	1	conj	_	_
7	τα	εγώ	PRON	_	Case=Acc|Gender=Neut|Number=Plur|Person=3|PronType=Prs	6	obj	_	_
8	πά’	πάνω	ADV	_	_	6	advmod	_	_
9	σ	σε	ADP	_	_	11	case	_	_
10	την	ο	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	κόλλαν	κόλλα	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	_
12	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj	color:blue
1	Τ’	ο	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	4	det	_	_
2	αγαπημένα	αγαπημένος	VERB	_	Case=Nom|Gender=Neut|Number=Plur|VerbForm=Part|Voice=Pass	4	amod	_	_
3	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	2	obl	_	_
4	ρούχα	ρούχον	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	0	root	_	_
5	ήταν	είμαι	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	cop	_	_
6	πάντα	πάντα	ADV	_	PronType=Tot	4	advmod	_	_
7	τζ̆είνα	τζ̆είνος	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	4	nsubj	_	_
8	που	που	PRON	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Rel	9	nsubj	_	_
9	θθυμίζουν	θθυμίζω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	acl:relcl	_	_
10	δεκαετίες	δεκαετία	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	9	obj	_	_
11	’70	'70	NOUN	_	Case=Gen|Gender=Neut|Number=Sing	10	nmod	_	_
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 nsubj	color:blue
1	Το	ο	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
2	πιο	πιο	ADV	_	Degree=Cmp	3	advmod	_	_
3	όμορφον	όμορφος	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	4	amod	_	_
4	πράμαν	πράμαν	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	11	nsubj	_	_
5	σ	σε	ADP	_	_	7	case	_	_
6	το	ο	DET	_	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
7	σπίτιν	σπίτιν	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	4	nmod	_	_
8	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	7	nmod	_	_
9	εν’	είμαι	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
10	η	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	11	det	_	_
11	θέα	θέα	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


