---
layout: base
title:  'Statistics of csubj:pass in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="el_gdt-dep-csubj.html">csubj</a></tt>.

46 nodes (0%) are attached to their parents as `csubj:pass`.

44 instances of `csubj:pass` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.08695652173913.

The following 3 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-VERB.html">VERB</a></tt> (42; 91% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-ADJ.html">ADJ</a></tt> (3; 7% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 csubj:pass	color:blue
1	Απαιτείται	απαιτώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
2	να	να	AUX	AUX	_	3	aux	_	_
3	επέμβει	επεμβαίνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	csubj:pass	_	_
4	επειγόντως	επειγόντως	ADV	ADV	_	3	advmod	_	_
5	σ	σε	ADP	ADP	_	7	case	_	_
6	την	ο	DET	DET	Case=Acc|Gender=Fem|Number=Sing	7	det	_	_
7	οριοθέτηση	οριοθέτηση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	3	obl	_	_
8	των	ο	DET	DET	Case=Gen|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	9	det	_	_
9	συνόρων	σύνορο	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Plur	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 csubj:pass	color:blue
1	Δεν	δεν	PART	PART	_	2	advmod	_	_
2	κατέστη	καθίσταμαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	εφικτό	εφικτός	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	2	xcomp	_	_
4	να	να	AUX	AUX	_	7	aux	_	_
5	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	7	cop	_	_
6	τόσο	τόσο	ADV	ADV	_	7	advmod	_	_
7	επακριβείς	επακριβής	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Plur	2	csubj:pass	_	_
8	όσο	όσο	ADV	ADV	_	9	advmod	_	_
9	επιθυμούσαμε	επιθυμώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	7	advcl	_	_
10	ως	ως	ADV	ADV	_	11	case	_	_
11	Κοινοβούλιο	κοινοβούλιο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	9	obl	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	17	punct	_	_
13	ενώ	ενώ	SCONJ	SCONJ	_	17	mark	_	_
14	ως	ως	ADV	ADV	_	15	case	_	_
15	έτος	έτος	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	17	xcomp	_	_
16	αναφοράς	αναφορά	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	_
17	καθορίστηκε	καθορίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	2	advcl	_	_
18	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	19	det	_	_
19	2020	2020	NOUN	NOUN	_	17	nsubj:pass	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 47	bgColor:blue
# visual-style 47	fgColor:white
# visual-style 34	bgColor:blue
# visual-style 34	fgColor:white
# visual-style 34 47 csubj:pass	color:blue
1	Προβλέπει	προβλέπω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	ότι	ότι	SCONJ	SCONJ	_	6	mark	_	_
3	θα	θα	AUX	AUX	_	6	aux	_	_
4	πρέπει	πρέπει	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
5	να	να	AUX	AUX	_	6	aux	_	_
6	τηρούνται	τηρώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	1	ccomp	_	_
7	πάντα	πάντα	ADV	ADV	_	6	advmod	_	_
8	ορισμένα	ορισμένος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Plur	9	amod	_	_
9	κριτήρια	κριτήριο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Plur	6	nsubj:pass	_	_
10	και	και	CCONJ	CCONJ	_	24	cc	_	_
11	προπάντων	προπάντων	ADV	ADV	_	24	advmod	_	_
12	θα	θα	AUX	AUX	_	24	aux	_	_
13	πρέπει	πρέπει	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	24	aux	_	_
14	από	από	ADP	ADP	_	17	case	_	_
15	ένα	ένας	DET	DET	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	17	det	_	_
16	ορισμένο	ορισμένος	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	17	amod	_	_
17	ποσό	ποσό	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	24	obl	_	_
18	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	19	det	_	_
19	διαγραφής	διαγραφή	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	17	nmod	_	_
20	χρεών	χρέος	NOUN	NOUN	Case=Gen|Gender=Neut|Number=Plur	19	nmod	_	_
21	και	και	CCONJ	CCONJ	_	22	cc	_	_
22	πάνω	πάνω	ADV	ADV	_	17	conj	_	_
23	να	να	AUX	AUX	_	24	aux	_	_
24	αποφασίζει	αποφασίζω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	conj	_	_
25	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	26	det	_	_
26	Επιτροπή	επιτροπή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	24	nsubj	_	_
27	ως	ως	ADV	ADV	_	29	case	_	_
28	συλλογικό	συλλογικός	ADJ	ADJ	Case=Acc|Gender=Neut|Number=Sing	29	amod	_	_
29	όργανο	όργανο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	24	obl	_	SpaceAfter=No
30	,	,	PUNCT	PUNCT	_	34	punct	_	_
31	έτσι	έτσι	ADV	ADV	_	34	mark	_	_
32	ώστε	ώστε	SCONJ	SCONJ	_	31	fixed	_	_
33	να	να	AUX	AUX	_	34	aux	_	_
34	καθίσταται	καθίσταμαι	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	24	advcl	_	_
35	σαφές	σαφής	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	34	xcomp	_	_
36	πως	πως	SCONJ	SCONJ	_	47	mark	_	_
37	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	38	det	_	_
38	ευθύνη	ευθύνη	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	47	nsubj	_	_
39	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	40	det	_	_
40	οποία	οποίος	PRON	PRON	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Rel	42	obj	_	_
41	θα	θα	AUX	AUX	_	42	aux	_	_
42	επωμισθούμε	επωμίζομαι	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Pass	38	acl:relcl	_	_
43	θα	θα	AUX	AUX	_	47	aux	_	_
44	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	47	cop	_	_
45	μια	ένας	DET	DET	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	47	det	_	_
46	πολιτική	πολιτικός	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	47	amod	_	_
47	ευθύνη	ευθύνη	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	34	csubj:pass	_	SpaceAfter=No
48	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


