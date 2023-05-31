---
layout: base
title:  'Statistics of discourse in UD_Greek-GDT'
udver: '2'
---

## Treebank Statistics: UD_Greek-GDT: Relations: `discourse`

This relation is universal.

2 nodes (0%) are attached to their parents as `discourse`.

1 instances of `discourse` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.5.

The following 2 pairs of parts of speech are connected with `discourse`: <tt><a href="el_gdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_gdt-pos-PART.html">PART</a></tt> (1; 50% instances), <tt><a href="el_gdt-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gdt-pos-PART.html">PART</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 22 discourse	color:blue
1	Το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	ζητούμενο	ζητούμενος	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	δεν	δεν	PART	PART	_	2	advmod	_	_
4	είναι	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	cop	_	_
5	μόνον	μόνο	ADV	ADV	_	8	advmod	_	_
6	ποιος	ποιος	PRON	PRON	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Int	8	nsubj	_	_
7	θα	θα	AUX	AUX	_	8	aux	_	_
8	επιτύχει	επιτυγχάνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	2	csubj	_	_
9	τα	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	10	det	_	_
10	περισσότερα	πολύς	ADJ	ADJ	Case=Acc|Degree=Cmp|Gender=Neut|Number=Plur	8	obj	_	SpaceAfter=No
11	,	,	PUNCT	PUNCT	_	13	punct	_	_
12	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	13	det	_	_
13	Επιτροπή	επιτροπή	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	8	appos	_	_
14	ή	ή	CCONJ	CCONJ	_	16	cc	_	_
15	το	ο	DET	DET	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	16	det	_	_
16	Συμβούλιο	συμβούλιο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	13	conj	_	_
17	ή	ή	CCONJ	CCONJ	_	18	cc	_	_
18	εμείς	εγώ	PRON	PRON	Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	13	conj	_	_
19	ως	ως	ADV	ADV	_	20	case	_	_
20	Κοινοβούλιο	κοινοβούλιο	NOUN	NOUN	Case=Nom|Gender=Neut|Number=Sing	18	nmod	_	SpaceAfter=No
21	,	,	PUNCT	PUNCT	_	22	punct	_	_
22	όχι	όχι	PART	PART	_	2	discourse	_	SpaceAfter=No
23	!	!	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Όχι	όχι	PART	PART	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	η	ο	DET	DET	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
4	υπηρεσία	υπηρεσία	NOUN	NOUN	Case=Nom|Gender=Fem|Number=Sing	6	nsubj:pass	_	_
5	αυτή	αυτός	DET	DET	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	det	_	_
6	συγκροτήθηκε	συγκροτώ	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
7	για	για	ADP	ADP	_	9	mark	_	_
8	να	να	AUX	AUX	_	9	aux	_	_
9	ελέγχει	ελέγχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	advcl	_	_
10	ακριβώς	ακριβώς	ADV	ADV	_	11	advmod	_	_
11	τέτοιες	τέτοιος	DET	DET	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Dem	12	det	_	_
12	επικρίσεις	επίκριση	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Plur	9	obj	_	SpaceAfter=No
13	!	!	PUNCT	PUNCT	_	6	punct	_	_

~~~


