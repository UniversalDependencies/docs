---
layout: relation
title: 'advcl:cmp'
shortdef: 'comparative clause'
udver: '2'
---

The `cmp` subtype is of semantic nature and is used to point out the **standards of comparison** in comparative constructions unitarily. Ancient Greek currently uses `advcl:cmp` for comparative adverbial clauses. This relation is more thoroughly documented for Latin. Ancient Greek works similarly. Here are some examples of how this relation is used in Ancient Greek.

~~~ conllu
1	πυθόμενος	πυνθάνομαι	VERB	V-	Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Mid	4	advcl	_	ref=7.218.2
2	δὲ	δέ	ADV	Df	_	4	discourse	_	ref=7.218.2
3	ἀτρεκέως	ἀτρεκέως	ADV	Df	Degree=Pos	1	advmod	_	ref=7.218.2
4	διέτασσε	διατάσσω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	ref=7.218.2
5	τοὺς	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	6	det	_	ref=7.218.2
6	Πέρσας	Πέρσης	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	4	obj	_	ref=7.218.2
7	ὡς	ὡς	ADV	Df	_	9	mark	_	ref=7.218.2
8	ἐς	εἰς	ADP	R-	_	9	case	_	ref=7.218.2
9	μάχην	μάχη	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	4	advcl:cmp	_	ref=7.218.2
~~~

~~~ conllu
1	καὶ	καί	CCONJ	C-	_	3	cc	_	ref=MATT_3.16
2	ἰδοὺ	ἰδοὺ	INTJ	I-	_	3	discourse	_	ref=MATT_3.16
3	ἀνεῴχθησαν	ἀνοίγνυμι	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	ref=MATT_3.16
4	οἱ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	ref=MATT_3.16
5	οὐρανοί	οὐρανός	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	3	nsubj:pass	_	ref=MATT_3.16
6	καὶ	καί	CCONJ	C-	_	3	cc	_	ref=MATT_3.16
7	εἶδεν	ὁράω	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	ref=MATT_3.16
8	πνεῦμα	πνεῦμα	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	7	obj	_	ref=MATT_3.16
9	θεοῦ	θεός	NOUN	Nb	Case=Gen|Gender=Masc|Number=Sing	8	nmod	_	ref=MATT_3.16
10	καταβαῖνον	καταβαίνω	VERB	V-	Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	7	xcomp	_	ref=MATT_3.16
11	ὡσεὶ	ὡσεί	ADV	Df	_	12	mark	_	ref=MATT_3.16
12	περιστερὰν	περιστερά	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	10	advcl:cmp	_	ref=MATT_3.16
13	ἐρχόμενον	ἔρχομαι	VERB	V-	Case=Acc|Gender=Neut|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Mid	10	conj	_	ref=MATT_3.16
14	ἐπ’	ἐπί	ADP	R-	_	15	case	_	ref=MATT_3.16
15	αὐτόν	αὐτός	PRON	Pp	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	obl	_	ref=MATT_3.16
~~~

~~~ conllu
1	ἦν	εἰμί	AUX	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	ref=MATT_7.29|LId=1
2	γὰρ	γάρ	ADV	Df	_	3	discourse	_	ref=MATT_7.29
3	διδάσκων	διδάσκω	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	ref=MATT_7.29
4	αὐτοὺς	αὐτός	PRON	Pp	Case=Acc|Gender=Masc|Number=Plur|Person=3|PronType=Prs	3	obj	_	ref=MATT_7.29
5	ὡς	ὡς	ADV	Df	_	7	mark	_	ref=MATT_7.29
6	ἐξουσίαν	ἐξουσία	NOUN	Nb	Case=Acc|Gender=Fem|Number=Sing	7	obj	_	ref=MATT_7.29
7	ἔχων	ἔχω	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	3	advcl:cmp	_	ref=MATT_7.29
8	καὶ	καί	CCONJ	C-	_	7	cc	_	ref=MATT_7.29
9	οὐχ	οὐ	ADV	Df	Polarity=Neg	12	advmod	_	ref=MATT_7.29
10	ὡς	ὡς	ADV	Df	_	12	mark	_	ref=MATT_7.29
11	οἱ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	12	det	_	ref=MATT_7.29
12	γραμματεῖς	γραμματεύς	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	7	conj	_	ref=MATT_7.29
13	αὐτῶν	αὐτός	PRON	Pp	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	12	det	_	ref=MATT_7.29
~~~
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:16 CET -->
