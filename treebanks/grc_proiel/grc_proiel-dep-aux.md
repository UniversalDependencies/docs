---
layout: base
title:  'Statistics of aux in UD_Ancient_Greek-PROIEL'
udver: '2'
---

## Treebank Statistics: UD_Ancient_Greek-PROIEL: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="grc_proiel-dep-aux-pass.html">aux:pass</a></tt>.

30 nodes (0%) are attached to their parents as `aux`.

19 instances of `aux` (63%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.53333333333333.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-AUX.html">AUX</a></tt> (26; 87% instances), <tt><a href="grc_proiel-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (2; 7% instances), <tt><a href="grc_proiel-pos-ADV.html">ADV</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt>-<tt><a href="grc_proiel-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	ταῦτα	οὗτος	ADJ	Pd	Case=Nom|Gender=Neut|Number=Plur	4	nsubj	_	ref=1.147.1
2	δὲ	δέ	ADV	Df	_	4	discourse	_	ref=1.147.1
3	ἦν	εἰμί#1	AUX	V-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	_	ref=1.147.1
4	γινόμενα	γίγνομαι	VERB	V-	Case=Nom|Gender=Neut|Number=Plur|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	ref=1.147.1
5	ἐν	ἐν	ADP	R-	_	6	case	_	ref=1.147.1
6	Μιλήτῳ	Μίλητος	PROPN	Ne	Case=Dat|Gender=Fem|Number=Sing	4	obl	_	ref=1.147.1

~~~


~~~ conllu
# visual-style 42	bgColor:blue
# visual-style 42	fgColor:white
# visual-style 41	bgColor:blue
# visual-style 41	fgColor:white
# visual-style 41 42 aux	color:blue
1	καὶ	καί	CCONJ	C-	_	2	cc	_	ref=REV_13.16
2	ποιεῖ	ποιέω	VERB	V-	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	ref=REV_13.16
3	πάντας	πᾶς	DET	Px	Case=Acc|Gender=Masc|Number=Plur	5	det	_	ref=REV_13.16
4	τοὺς	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	5	det	_	ref=REV_13.16
5	μικροὺς	μικρός	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	2	obj:dir	_	ref=REV_13.16
6	καὶ	καί	CCONJ	C-	_	5	cc	_	ref=REV_13.16
7	τοὺς	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	8	det	_	ref=REV_13.16
8	μεγάλους	μέγας	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	5	conj	_	ref=REV_13.16
9	καὶ	καί	CCONJ	C-	_	5	cc	_	ref=REV_13.16
10	τοὺς	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	11	det	_	ref=REV_13.16
11	πλουσίους	πλούσιος	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	5	conj	_	ref=REV_13.16
12	καὶ	καί	CCONJ	C-	_	5	cc	_	ref=REV_13.16
13	τοὺς	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	14	det	_	ref=REV_13.16
14	πτωχούς	πτωχός	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	5	conj	_	ref=REV_13.16
15	καὶ	καί	CCONJ	C-	_	5	cc	_	ref=REV_13.16
16	τοὺς	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	17	det	_	ref=REV_13.16
17	ἐλευθέρους	ἐλεύθερος	ADJ	A-	Case=Acc|Degree=Pos|Gender=Masc|Number=Plur	5	conj	_	ref=REV_13.16
18	καὶ	καί	CCONJ	C-	_	5	cc	_	ref=REV_13.16
19	τοὺς	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	20	det	_	ref=REV_13.16
20	δούλους	δοῦλος	NOUN	Nb	Case=Acc|Gender=Masc|Number=Plur	5	conj	_	ref=REV_13.16
21	ἵνα	ἵνα	SCONJ	G-	_	22	mark	_	ref=REV_13.16
22	δῶσιν	δίδωμι	VERB	V-	Aspect=Perf|Mood=Sub|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	_	ref=REV_13.16
23	αὐτοῖς	αὐτός	PRON	Pp	Case=Dat|Gender=Masc|Number=Plur|Person=3|PronType=Prs	22	iobj	_	ref=REV_13.16
24	χάραγμα	χάραγμα	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	22	obj:dir	_	ref=REV_13.16
25	ἐπὶ	ἐπί	ADP	R-	_	27	case	_	ref=REV_13.16
26	τῆς	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	27	det	_	ref=REV_13.16
27	χειρὸς	χείρ	NOUN	Nb	Case=Gen|Gender=Fem|Number=Sing	22	obl	_	ref=REV_13.16
28	αὐτῶν	αὐτός	PRON	Pp	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	27	det	_	ref=REV_13.16
29	τῆς	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Dem	30	det	_	ref=REV_13.16
30	δεξιᾶς	δεξιός	ADJ	A-	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	27	nmod	_	ref=REV_13.16
31	ἢ	ἤ	CCONJ	C-	_	27	cc	_	ref=REV_13.16
32	ἐπὶ	ἐπί	ADP	R-	_	34	case	_	ref=REV_13.16
33	τὸ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	34	det	_	ref=REV_13.16
34	μέτωπον	μέτωπον	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	27	conj	_	ref=REV_13.16
35	αὐτῶν	αὐτός	PRON	Pp	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	34	det	_	ref=REV_13.16
36	ἵνα	ἵνα	SCONJ	G-	_	39	mark	_	ref=REV_13.17
37	μή	μή	ADV	Df	Polarity=Neg	39	advmod	_	ref=REV_13.17
38	τις	τὶς	ADJ	Px	Case=Nom|Gender=Masc|Number=Sing	39	nsubj	_	ref=REV_13.17
39	δύνηται	δύναμαι	VERB	V-	Mood=Sub|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	22	advcl	_	ref=REV_13.17
40	ἀγοράσαι	ἀγοράζω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	41	aux	_	ref=REV_13.17
41	ἢ	ἤ	CCONJ	C-	_	39	xcomp	_	ref=REV_13.17
42	πωλῆσαι	πωλέω	VERB	V-	Aspect=Perf|Tense=Past|VerbForm=Inf|Voice=Act	41	aux	_	ref=REV_13.17
43	εἰ	εἰ#1	ADV	Df	_	38	acl	_	ref=REV_13.17
44	μὴ	μή	ADV	Df	Polarity=Neg	43	advmod	_	ref=REV_13.17
45	ὁ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	46	det	_	ref=REV_13.17
46	ἔχων	ἔχω	VERB	V-	Case=Nom|Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	43	nsubj	_	ref=REV_13.17
47	τὸ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	48	det	_	ref=REV_13.17
48	χάραγμα	χάραγμα	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	46	obj:dir	_	ref=REV_13.17
49	τὸ	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	50	det	_	ref=REV_13.17
50	ὄνομα	ὄνομα	NOUN	Nb	Case=Acc|Gender=Neut|Number=Sing	48	appos	_	ref=REV_13.17
51	τοῦ	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	52	det	_	ref=REV_13.17
52	θηρίου	θηρίον	NOUN	Nb	Case=Gen|Gender=Neut|Number=Sing	50	nmod	_	ref=REV_13.17
53	ἢ	ἤ	CCONJ	C-	_	50	cc	_	ref=REV_13.17
54	τὸν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	55	det	_	ref=REV_13.17
55	ἀριθμὸν	ἀριθμός	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	50	conj	_	ref=REV_13.17
56	τοῦ	ὁ	DET	S-	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	57	det	_	ref=REV_13.17
57	ὀνόματος	ὄνομα	NOUN	Nb	Case=Gen|Gender=Neut|Number=Sing	55	nmod	_	ref=REV_13.17
58	αὐτοῦ	αὐτός	PRON	Pp	Case=Gen|Gender=Neut|Number=Sing|Person=3|PronType=Prs	57	det	_	ref=REV_13.17

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 aux	color:blue
1	Καὶ	καί	CCONJ	C-	_	2	cc	_	ref=LUKE_2.15
2	ἐγένετο	γίγνομαι	VERB	V-	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	ref=LUKE_2.15
3	ὡς	ὡς	ADV	Df	_	14	advmod	_	ref=LUKE_2.15
4	ἀπῆλθον	ἀπέρχομαι	VERB	V-	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	aux	_	ref=LUKE_2.15
5	ἀπ’	ἀπό	ADP	R-	_	6	case	_	ref=LUKE_2.15
6	αὐτῶν	αὐτός	PRON	Pp	Case=Gen|Gender=Masc|Number=Plur|Person=3|PronType=Prs	4	obl	_	ref=LUKE_2.15
7	εἰς	εἰς	ADP	R-	_	9	case	_	ref=LUKE_2.15
8	τὸν	ὁ	DET	S-	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Dem	9	det	_	ref=LUKE_2.15
9	οὐρανὸν	οὐρανός	NOUN	Nb	Case=Acc|Gender=Masc|Number=Sing	4	obl	_	ref=LUKE_2.15
10	οἱ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	11	det	_	ref=LUKE_2.15
11	ἄγγελοι	ἄγγελος	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	4	nsubj	_	ref=LUKE_2.15
12	οἱ	ὁ	DET	S-	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Dem	13	det	_	ref=LUKE_2.15
13	ποιμένες	ποιμήν	NOUN	Nb	Case=Nom|Gender=Masc|Number=Plur	14	nsubj	_	ref=LUKE_2.15
14	ἐλάλουν	λαλέω	VERB	V-	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	_	ref=LUKE_2.15
15	πρὸς	πρός	ADP	R-	_	16	case	_	ref=LUKE_2.15
16	ἀλλήλους	ἀλλήλων	PRON	Pc	Case=Acc|Gender=Masc|Number=Plur|PronType=Rcp	14	obl	_	ref=LUKE_2.15

~~~


