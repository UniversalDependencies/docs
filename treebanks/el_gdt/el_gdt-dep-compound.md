---
layout: base
title:  'Statistics of compound in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `compound`

This relation is universal.

22 nodes (0%) are attached to their parents as `compound`.

13 instances of `compound` (59%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.63636363636364.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_gdt-pos-PROPN.html">PROPN</a></tt> (11; 50% instances), <tt><a href="el_gdt-pos-NUM.html">NUM</a></tt>-<tt><a href="el_gdt-pos-NUM.html">NUM</a></tt> (10; 45% instances), <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 compound	color:blue
1	Αθήνα	Αθήνα	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
2	-	-	PUNCT	PUNCT	_	1	punct	_	_
3	Ηγουμενίτσα	Ηγουμενίτσα	PROPN	PROPN	Case=Nom|Gender=Fem|Number=Sing	1	compound	_	SpaceAfter=No
4	:	:	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 compound	color:blue
1	Διότι	διότι	SCONJ	SCONJ	_	2	mark	_	_
2	ένα	ένας	NUM	NUM	Case=Nom|Gender=Neut|Number=Sing|NumType=Card	0	root	_	_
3	από	από	ADP	ADP	_	5	case	_	_
4	τα	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	5	det	_	_
5	δύο	δύο	NUM	NUM	Case=Acc|Gender=Neut|Number=Plur|NumType=Card	2	compound	_	SpaceAfter=No
6	:	:	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 14 compound	color:blue
1	Το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	Υπουργείο	υπουργείο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	6	nsubj	_	_
3	Αμύνης	άμυνα	NOUN	NOUN	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
4	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	Ιαπωνίας	Ιαπωνία	PROPN	PROPN	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	_
6	δήλωσε	δηλώνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
7	ότι	ότι	SCONJ	SCONJ	_	9	mark	_	_
8	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	9	cop	_	_
9	έτοιμο	έτοιμος	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing	6	ccomp	_	_
10	να	να	PART	PART	_	11	aux	_	_
11	αναχαιτίσει	αναχαιτίζω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	9	acl	_	_
12	πύραυλο	πύραυλος	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	11	obj	_	_
13	-	-	PUNCT	PUNCT	_	14	punct	_	_
14	φορέα	φορέας	NOUN	NOUN	Case=Acc|Gender=Masc|Number=Sing	12	compound	_	_
15	δορυφόρου	δορυφόρος	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	14	nmod	_	_
16	της	ο	DET	DET	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	18	det	_	_
17	Βορείου	βόρειος	ADJ	ADJ	Case=Gen|Gender=Fem|Number=Sing	18	amod	_	_
18	Κορέας	Κορέα	PROPN	PROPN	Case=Gen|Gender=Fem|Number=Sing	15	nmod	_	SpaceAfter=No
19	,	,	PUNCT	PUNCT	_	22	punct	_	_
20	ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	21	det	_	_
21	οποίος	οποίος	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Rel	24	nsubj:pass	_	_
22	αναμένεται	αναμένω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	14	acl:relcl	_	_
23	να	να	PART	PART	_	24	aux	_	_
24	εκτοξευτεί	εκτοξεύω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	22	csubj:pass	_	_
25	σ	σε	ADP	AsPpSp	_	27	case	_	_
26	τα	ο	DET	AtDf	Case=Acc|Gender=Neut|Number=Plur	27	det	_	_
27	μέσα	μέσο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Plur	24	obl	_	_
28	του	ο	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	30	det	_	_
29	επόμενου	επόμενος	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing	30	amod	_	_
30	μήνα	μήνας	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Sing	27	nmod	_	SpaceAfter=No
31	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


