---
layout: base
title:  'Statistics of appos in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `appos`

This relation is universal.

20 nodes (0%) are attached to their parents as `appos`.

20 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.9.

The following 7 pairs of parts of speech are connected with `appos`: <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (6; 30% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (5; 25% instances), <tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt> (3; 15% instances), <tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (3; 15% instances), <tt><a href="el_cretan-pos-ADV.html">ADV</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (1; 5% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="el_cretan-pos-PRON.html">PRON</a></tt>-<tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 appos	color:blue
1	Εκατό	εκατό	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	7	nummod	_	_
2	,	,	PUNCT	PUNCT	_	4	punct	_	PunctType=Comm
3	εκατόν	εκατόν	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	4	compound	_	_
4	πενήντα	πενήντα	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	1	conj	_	_
5	,	,	PUNCT	PUNCT	_	6	punct	_	PunctType=Comm
6	διακόσιους	διακόσιοι	NUM	NmCd	Case=Acc|Gender=Masc|Number=Plur|NumType=Card	1	conj	_	_
7	φάρδους	φάρδος	ADJ	AjBa	Case=Acc|Gender=Masc|Number=Plur	12	dislocated	_	_
8	γεμάτους	γεμάτος	ADJ	AjBa	Case=Acc|Gender=Masc|Number=Plur	7	advcl	_	_
9	ελιές	ελιά	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	8	obl	_	_
10	είχενε	έχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	να	να	SCONJ	PtSj	_	12	mark	_	_
12	αλέσει	αλέθω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	10	xcomp	_	_
13	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	κουμπάρος	κουμπάρος	NOUN	AjBa	Case=Nom|Gender=Masc|Number=Sing	12	nsubj	_	_
15	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	Στελιανός	Στελιανός	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	14	appos	_	_
17	.	.	PUNCT	PTERMP	_	10	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	Και	και	CCONJ	CjCo	_	2	cc	_	_
2	γιάε	γιάε	VERB	OPUNCT	Mood=Imp|Number=Sing|Person=2|Voice=Act	0	root	_	_
3	,	,	PUNCT	OPUNCT	_	4	punct	_	PunctType=Comm
4	παιδί	παιδί	NOUN	NoCm	Case=Voc|Gender=Neut|Number=Sing	2	vocative	_	_
5	μου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	4	nmod	_	_
6	γιατρέ	γιατρός	NOUN	PUNCT	Case=Voc|Gender=Masc|Number=Sing	4	appos	_	_
7	,	,	PUNCT	PUNCT	_	10	punct	_	PunctType=Comm
8	σ	σε	ADP	AsPpSp	_	10	case	_	_
9	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	Θεό	Θεός	PROPN	NoCm	Case=Acc|Gender=Masc|Number=Sing	2	parataxis	_	_
11	και	και	CCONJ	CjCo	_	14	cc	_	_
12	σ	σε	ADP	AsPpSp	_	14	case	_	_
13	τα	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	14	det	_	_
14	χέρια	χέρι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	10	conj	_	_
15	σου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	14	nmod	_	_
16	.	.	PUNCT	PTERMP	_	2	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 17 appos	color:blue
1	«	«	PUNCT	OPUNCT	_	3	punct	_	PunctType=Quot
2	Ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	χρόνος	χρόνος	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	13	ccomp	_	_
4	,	,	PUNCT	PUNCT	_	7	punct	_	PunctType=Comm
5	κερά	κερά	NOUN	NoCm	Case=Voc|Gender=Fem|Number=Sing	7	compound	_	_
6	-	-	PUNCT	PUNCT	_	7	punct	_	PunctType=Dash
7	Ασπασία	Ασπασία	PROPN	NoPr	Case=Voc|Gender=Fem|Number=Sing	3	vocative	_	_
8	,	,	PUNCT	PUNCT	_	7	punct	_	PunctType=Comm
9	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	10	det	_	_
10	χρόνος	χρόνος	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	3	discourse	_	_
11	»	»	PUNCT	CPUNCT	_	3	punct	_	PunctType=Quot
12	τσ'	o	PRON	PnPe	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	iobj	_	_
13	απάντησε	απαντώ	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
14	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	Θανάσης	Θανάσης	PROPN	NoPr	Case=Nom|Gender=Masc|Number=Sing	13	nsubj	_	_
16	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	17	det	_	_
17	πεθαμενατζής	πεθαμενατζής	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	15	appos	_	_
18	που	που	PRON	PnRe	Case=Nom|Gender=Masc|Number=Sing|PronType=Rel	20	nsubj	_	_
19	είχε	έχω	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	20	aux	_	_
20	θάψει	θάβγω	VERB	VbMn	Aspect=Perf|VerbForm=Inf|Voice=Act	17	acl:relcl	_	_
21	πολλούς	πολύς	DET	AjBa	Case=Acc|Gender=Masc|Number=Plur|PronType=Ind	20	obj	_	_
22	και	και	CCONJ	CjCo	_	23	cc	_	_
23	γάτεχε	γατέχω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	20	conj	_	_
24	να	να	SCONJ	PtSj	_	25	mark	_	_
25	παρηγορεί	παρηγορώ	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	23	ccomp	_	_
26	.	.	PUNCT	PTERMP	_	13	punct	_	PunctType=Peri

~~~


