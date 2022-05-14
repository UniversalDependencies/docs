---
layout: base
title:  'Statistics of dep in UD_Ancient_Greek-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PROIEL: Relations: `dep`

This relation is universal.

4 nodes (0%) are attached to their parents as `dep`.

3 instances of `dep` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.25.

The following 4 pairs of parts of speech are connected with `dep`: <tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt>-<tt><a href="grc_proiel-pos-NOUN.html">NOUN</a></tt> (1; 25% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-ADJ.html">ADJ</a></tt> (1; 25% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 dep	color:blue
1	ἄποινα	ἄποινα	NOUN	Nb	Case=Nom|Gender=Neut|Number=Plur	6	nsubj	_	Ref=6.79.1
2	δὲ	δέ	ADV	Df	_	6	discourse	_	Ref=6.79.1
3	ἐστὶ	εἰμί	AUX	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	LId=1|Ref=6.79.1
4	Πελοποννησίοισι	Πελοποννήσιος	ADJ	A-	Case=Dat|Degree=Pos|Gender=Masc|Number=Plur	6	dep	_	Ref=6.79.1
5	δύο	δύο	NUM	Ma	_	6	nummod	_	Ref=6.79.1
6	μνέαι	μνᾶ	NOUN	Nb	Case=Nom|Gender=Fem|Number=Plur	0	root	_	Ref=6.79.1
7	τεταγμέναι	τάσσω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Fem|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	6	acl	_	Ref=6.79.1
8	κατ’	κατά	ADP	R-	_	9	case	_	Ref=6.79.1
9	ἄνδρα	ἀνήρ	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	11	obl	_	Ref=6.79.1
10	αἰχμάλωτον	αἰχμάλωτος	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	Ref=6.79.1
11	ἐκτίνειν	ἐκτίνω	VERB	V-	Tense=Pres|VerbForm=Inf|Voice=Act	7	csubj:pass	_	Ref=6.79.1

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 dep	color:blue
1	ὁ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	2	det	_	Ref=HEB_1.8
2	θρόνος	θρόνος	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	0	root	_	Ref=HEB_1.8
3	σου	σύ	PRON	Pp	Case=Gen|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	2	det	_	Ref=HEB_1.8
4	ὁ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	Ref=HEB_1.8
5	θεός	θεός	NOUN	Nb	Case=Nom|Gender=Masc|Number=Sing	2	vocative	_	Ref=HEB_1.8
6	εἰς	εἰς	ADP	R-	_	8	case	_	Ref=HEB_1.8
7	τὸν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	8	det	_	Ref=HEB_1.8
8	αἰῶνα	αἰών	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	2	obl	_	Ref=HEB_1.8
9	τοῦ	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	10	det	_	Ref=HEB_1.8
10	αἰῶνος	αἰών	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	8	dep	_	Ref=HEB_1.8
11	καὶ	καί	CCONJ	C-	_	2	cc	_	Ref=HEB_1.8
12	ἡ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	13	det	_	Ref=HEB_1.8
13	ῥάβδος	ῥάβδος	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	16	nsubj	_	Ref=HEB_1.8
14	τῆς	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	15	det	_	Ref=HEB_1.8
15	εὐθύτητος	εὐθύτης	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	13	nmod	_	Ref=HEB_1.8
16	ῥάβδος	ῥάβδος	NOUN	Nb	Case=Nom|Gender=Fem|Number=Sing	2	conj	_	Ref=HEB_1.8
17	τῆς	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	18	det	_	Ref=HEB_1.8
18	βασιλείας	βασιλεία	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	16	nmod	_	Ref=HEB_1.8
19	σου	σύ	PRON	Pp	Case=Gen|Gender=Fem,Masc|Number=Sing|Person=2|PronType=Prs	18	det	_	Ref=HEB_1.8

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 dep	color:blue
1	τούτους	οὗτος	ADJ	Pd	Case=Acc|Gender=Masc|Number=Plur	3	obj	_	Ref=6.45.2
2	μέντοι	μέντοι	ADV	Df	_	4	discourse	_	Ref=6.45.2
3	καταστρεψάμενος	καταστρέφω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Mid	4	advcl	_	Ref=6.45.2
4	ἀπῆγε	ἀπάγω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Ref=6.45.2
5	τὴν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	6	det	_	Ref=6.45.2
6	στρατιὴν	στρατιά	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	4	obj	_	Ref=6.45.2
7	ὀπίσω	ὀπίσω	ADV	Df	_	4	advmod	_	Ref=6.45.2
8	ἅτε	ἅτε	ADV	Df	_	4	advmod	_	Ref=6.45.2
9	τῷ	ὁ	DET	S-	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	10	det	_	Ref=6.45.2
10	πεζῷ	πεζός	ADJ	A-	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	12	dep	_	Ref=6.45.2
11	τε	τε	CCONJ	C-	_	8	cc	_	Ref=6.45.2
12	προσπταίσας	προσπταίω	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	8	conj	_	Ref=6.45.2
13	πρὸς	πρός	ADP	R-	_	15	case	_	Ref=6.45.2
14	τοὺς	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	15	det	_	Ref=6.45.2
15	Βρύγους	Βρύγοι	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	12	obl	_	Ref=6.45.2
16	καὶ	καί	CCONJ	C-	_	8	cc	_	Ref=6.45.2
17	τῷ	ὁ	DET	S-	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	18	det	_	Ref=6.45.2
18	ναυτικῷ	ναυτικός	ADJ	A-	Case=Dat|Degree=Pos|Gender=Masc|Number=Sing	21	orphan	_	Ref=6.45.2
19	μεγάλως	μεγάλως	ADV	Df	Degree=Pos	21	orphan	_	Ref=6.45.2
20	περὶ	περί	ADP	R-	_	21	case	_	Ref=6.45.2
21	Ἄθων	Ἄθως	PROPN	Ne	Case=Acc|Gender=Masc|Number=Sing	8	conj	_	Ref=6.45.2

~~~


