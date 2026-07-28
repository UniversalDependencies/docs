---
layout: base
title:  'Statistics of compound in UD_Greek-GLCII'
udver: '2'
---

## Treebank Statistics: UD_Greek-GLCII: Relations: `compound`

This relation is universal.

7 nodes (0%) are attached to their parents as `compound`.

5 instances of `compound` (71%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14285714285714.

The following 3 pairs of parts of speech are connected with `compound`: <tt><a href="el_glcii-pos-NUM.html">NUM</a></tt>-<tt><a href="el_glcii-pos-NUM.html">NUM</a></tt> (5; 71% instances), <tt><a href="el_glcii-pos-ADJ.html">ADJ</a></tt>-<tt><a href="el_glcii-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="el_glcii-pos-DET.html">DET</a></tt>-<tt><a href="el_glcii-pos-NUM.html">NUM</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound	color:blue
1	«	«	PUNCT	PUNCT	_	2	punct	_	NewPar=Yes|SpaceAfter=No
2	Σαράντα	σαράντα	NUM	NUM	NumType=Card	0	root	_	_
3	πέντε	πέντε	NUM	NUM	NumType=Card	2	compound	_	SpaceAfter=No
4	!	!	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No
5	»	»	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 compound	color:blue
1	Ευτυχώς	ευτυχώς	ADV	ADV	_	3	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	είχα	έχω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	το	ο	DET	DET	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	6	det	_	_
5	green	green	ADJ	ADJ	Foreign=Yes	3	obj	_	Lang=en
6	pass	pass	NOUN	NOUN	Foreign=Yes	5	compound	_	Lang=en
7	μου	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Sing|Person=1|Poss=Yes|PronType=Prs	6	nmod	_	_
8	και	και	CCONJ	CCONJ	_	9	cc	_	_
9	μπορούσα	μπορώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	_
10	να	να	AUX	AUX	_	11	aux	_	_
11	ταξιδεύω	ταξιδεύω	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	9	xcomp	_	_
12	εύκολα	εύκολα	ADV	ADV	_	11	advmod	_	_
13	(	(	PUNCT	PUNCT	_	19	punct	_	SpaceAfter=No
14	με	με	ADP	ADP	_	15	case	_	_
15	μάσκα	μάσκα	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	19	obl	_	_
16	και	και	CCONJ	CCONJ	_	17	cc	_	_
17	προσοχή	προσοχή	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	15	conj	_	SpaceAfter=No
18	,	,	PUNCT	PUNCT	_	19	punct	_	_
19	εννοείται	εννοώ	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	11	parataxis	_	SpaceAfter=No
20	,	,	PUNCT	PUNCT	_	24	punct	_	_
21	αλλά	αλλά	CCONJ	CCONJ	_	24	cc	_	_
22	χωρίς	χωρίς	ADP	ADP	_	24	mark	_	_
23	να	να	AUX	AUX	_	24	aux	_	_
24	κάνω	κάνω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|VerbForm=Fin|Voice=Act	19	conj	_	_
25	τεστ	τεστ	NOUN	NOUN	_	24	obj	_	OrigLang=en
26	κάθε	κάθε	DET	DET	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Ind	27	det	_	_
27	φορά	φορά	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	24	obl	_	SpaceAfter=No
28	)	)	PUNCT	PUNCT	_	19	punct	_	SpaceAfter=No
29	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound	color:blue
1	εαν	αν	SCONJ	SCONJ	_	6	mark	_	_
2	ο	ο	DET	DET	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	4	det	_	_
3	καθε	καθε	DET	DET	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Ind	6	nsubj	_	_
4	ενασ	ενας	NUM	NUM	_	3	compound	_	_
5	να	να	AUX	AUX	_	6	aux	_	_
6	φυτεψει	φυτευω	VERB	VERB	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	12	advcl	_	_
7	ενα	ενας	DET	DET	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	8	det	_	_
8	δεντρο	δεντρο	NOUN	NOUN	Case=Acc|Gender=Neut|Number=Sing	6	obj	_	_
9	θα	θα	AUX	AUX	_	12	aux	_	_
10	ηταν	είμαι	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	12	cop	_	IntendedLemma=ειμαι
11	πολυ	πολυ	ADV	ADV	_	12	advmod	_	_
12	ωραια	ωραια	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	0	root	_	_
13	και	και	CCONJ	CCONJ	_	16	cc	_	_
14	για	για	ADP	ADP	_	16	case	_	_
15	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	πολη	πολη	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	12	nmod	_	_
17	μας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	16	nmod	_	_
18	και	και	CCONJ	CCONJ	_	21	cc	_	_
19	για	για	ADP	ADP	_	21	case	_	_
20	την	ο	DET	DET	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	21	det	_	_
21	υγεια	υγεια	NOUN	NOUN	Case=Acc|Gender=Fem|Number=Sing	16	conj	_	_
22	των	ο	DET	DET	Case=Gen|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	23	det	_	_
23	πολητων	πολητης	NOUN	NOUN	Case=Gen|Gender=Masc|Number=Plur	21	nmod	_	_
24	μας	μου	PRON	PRON	Case=Gen|Gender=Masc|Number=Plur|Person=1|Poss=Yes|PronType=Prs	23	nmod	_	_

~~~


