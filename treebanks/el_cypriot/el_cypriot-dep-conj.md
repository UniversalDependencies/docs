---
layout: base
title:  'Statistics of conj in UD_Greek-Cypriot'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cypriot: Relations: `conj`

This relation is universal.

113 nodes (6%) are attached to their parents as `conj`.

113 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.54867256637168.

The following 15 pairs of parts of speech are connected with `conj`: <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (57; 50% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (23; 20% instances), <tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (6; 5% instances), <tt><a href="el_cypriot-pos-ADV.html">ADV</a></tt>-<tt><a href="el_cypriot-pos-ADV.html">ADV</a></tt> (4; 4% instances), <tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="el_cypriot-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cypriot-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="el_cypriot-pos-ADV.html">ADV</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="el_cypriot-pos-NUM.html">NUM</a></tt>-<tt><a href="el_cypriot-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="el_cypriot-pos-X.html">X</a></tt>-<tt><a href="el_cypriot-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 6 conj	color:blue
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
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 conj	color:blue
1	Εννά	εννά	AUX	_	Tense=Fut	2	aux	_	_
2	αποταθώ	αποτείνουμαι	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	σε	σε	ADP	_	_	4	case	_	_
4	φίλους	φίλος	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	2	obl	_	_
5	τζ̆αι	τζ̆αι	CCONJ	_	_	6	cc	_	_
6	συγγενείς	συγγενής	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	4	conj	_	_
7	για	για	ADP	_	ExtPos=SCONJ	10	mark	_	_
8	να	να	SCONJ	_	_	7	fixed	_	_
9	μου	εγώ	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	10	iobj	_	_
10	συστήσουν	συστήννω	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	2	advcl	_	_
11	κάποιον	κάποιος	DET	_	Case=Acc|Gender=Masc|Number=Sing|PronType=Ind	10	obj	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 conj	color:blue
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


