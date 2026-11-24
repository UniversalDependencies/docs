---
layout: base
title:  'Statistics of parataxis in UD_Greek-Cypriot'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cypriot: Relations: `parataxis`

This relation is universal.

14 nodes (1%) are attached to their parents as `parataxis`.

14 instances of `parataxis` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.28571428571429.

The following 6 pairs of parts of speech are connected with `parataxis`: <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (9; 64% instances), <tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cypriot-pos-DET.html">DET</a></tt> (1; 7% instances), <tt><a href="el_cypriot-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-ADV.html">ADV</a></tt> (1; 7% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-DET.html">DET</a></tt> (1; 7% instances), <tt><a href="el_cypriot-pos-VERB.html">VERB</a></tt>-<tt><a href="el_cypriot-pos-NOUN.html">NOUN</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 parataxis	color:blue
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
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 31 parataxis	color:blue
1	Οι	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	2	det	_	_
2	τροφές	τροφή	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	16	nsubj	_	_
3	που	που	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	5	nsubj	_	_
4	είναι	είμαι	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	ανθυγιεινές	ανθυγιεινός	ADJ	_	Case=Nom|Gender=Fem|Number=Plur	2	acl:relcl	_	_
6	τζ̆αι	τζ̆αι	CCONJ	_	_	7	cc	_	_
7	πρέπει	πρέπει	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	5	conj	_	_
8	να	να	SCONJ	_	_	10	mark	_	_
9	τες	εγώ	PRON	_	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	10	obj	_	_
10	τρώμε	τρώω	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	7	csubj	_	_
11	με	με	ADP	_	_	12	case	_	_
12	μέτρον	μέτρον	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	10	obl	_	_
13	είναι	είμαι	AUX	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	16	cop	_	_
14	το	ο	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	16	det	_	_
15	γρήγορον	γρήγορος	ADJ	_	Case=Nom|Gender=Neut|Number=Sing	16	amod	_	_
16	φαγητόν	φαγητόν	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
17	,	,	PUNCT	_	_	20	punct	_	_
18	τα	ο	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	20	det	_	_
19	τηγανητά	τηγανητός	ADJ	_	Case=Nom|Gender=Neut|Number=Plur	20	amod	_	_
20	φαγητά	φαγητόν	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	16	conj	_	_
21	,	,	PUNCT	_	_	23	punct	_	_
22	τα	ο	DET	_	Case=Nom|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	23	det	_	_
23	γλυκά	γλυκόν	NOUN	_	Case=Nom|Gender=Neut|Number=Plur	16	conj	_	_
24	,	,	PUNCT	_	_	26	punct	_	_
25	οι	ο	DET	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	26	det	_	_
26	σ̆οκολάτες	σ̆οκολάτα	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	16	conj	_	_
27	,	,	PUNCT	_	_	28	punct	_	_
28	καραμέλλες	καραμέλλα	NOUN	_	Case=Nom|Gender=Fem|Number=Plur	16	conj	_	_
29	εε	εε	INTJ	_	_	31	discourse	_	_
30	…	…	PUNCT	_	_	31	punct	_	_
31	τούτα	τούτος	DET	_	Case=Nom|Gender=Neut|Number=Plur|PronType=Dem	16	parataxis	_	_
32	.	.	PUNCT	_	_	31	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 parataxis	color:blue
1	Τωρά	τωρά	ADV	_	ExtPos=ADV	3	advmod	_	_
2	τελευταία	τελευταίος	ADV	_	_	1	fixed	_	_
3	έχουμεν	έχω	VERB	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	λλιόττερην	λλίος	DET	_	Case=Acc|Degree=Cmp|Gender=Fem|Number=Sing|PronType=Ind	5	det	_	_
5	μετανάστευσην	μετανάστευση	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	3	obj	_	_
6	που	που	ADP	_	_	7	case	_	_
7	χώρες	χώρα	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	5	nmod	_	_
8	όπως	όπως	ADV	_	PronType=Rel	9	advmod	_	_
9	Ρωσσία	Ρωσσία	PROPN	_	Case=Nom|Gender=Fem|Number=Sing	7	nmod	_	_
10	ας	ας	AUX	_	_	11	aux	_	_
11	πούμεν	λαλώ	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	9	parataxis	_	_
12	τζ̆αι	τζ̆αι	CCONJ	_	_	13	cc	_	_
13	έχουμεν	έχουμεν	VERB	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
14	αρκετήν	αρκετός	DET	_	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
15	μετανάστευσην	μετανάστευση	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	13	obj	_	_
16	που	που	ADP	_	_	18	case	_	_
17	άλλες	άλλος	DET	_	Case=Acc|Gender=Fem|Number=Plur|PronType=Ind	18	det	_	_
18	χώρες	χώρα	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	15	nmod	_	_
19	της	ο	DET	_	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
20	Μέσης	μέσος	ADJ	_	Case=Gen|Gender=Fem|Number=Sing	21	amod	_	_
21	Ανατολής	Ανατολή	PROPN	_	Case=Gen|Gender=Fem|Number=Sing	18	nmod	_	_
22	,	,	PUNCT	_	_	24	punct	_	_
23	ε	ε	INTJ	_	_	24	discourse	_	_
24	χώρες	χώρα	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	18	conj	_	_
25	που	που	PRON	_	Case=Nom|Gender=Fem|Number=Plur|PronType=Rel	27	nsubj	_	_
26	συνήθως	συνήθως	ADV	_	_	27	advmod	_	_
27	έχουν	έχω	VERB	_	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	acl:relcl	_	_
28	πόλεμον	πόλεμος	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	27	obj	_	_
29	ή	ή	CCONJ	_	_	30	cc	_	_
30	κάτι	κάτι	DET	_	PronType=Ind	28	conj	_	_
31	σχετικόν	σχετικός	ADJ	_	Case=Acc|Gender=Neut|Number=Sing	30	amod	_	_
32	.	.	PUNCT	_	_	3	punct	_	_

~~~


