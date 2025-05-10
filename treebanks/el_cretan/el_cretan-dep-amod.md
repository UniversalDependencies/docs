---
layout: base
title:  'Statistics of amod in UD_Greek-Cretan'
udver: '2'
---

## Treebank Statistics: UD_Greek-Cretan: Relations: `amod`

This relation is universal.

45 nodes (1%) are attached to their parents as `amod`.

38 instances of `amod` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.26666666666667.

The following 3 pairs of parts of speech are connected with `amod`: <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (39; 87% instances), <tt><a href="el_cretan-pos-PROPN.html">PROPN</a></tt>-<tt><a href="el_cretan-pos-ADJ.html">ADJ</a></tt> (4; 9% instances), <tt><a href="el_cretan-pos-NOUN.html">NOUN</a></tt>-<tt><a href="el_cretan-pos-VERB.html">VERB</a></tt> (2; 4% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 amod	color:blue
1	Ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	2	det	_	_
2	άλλος	άλλος	DET	PnId	Case=Nom|Gender=Masc|Number=Sing|PronType=Ind	3	nsubj	_	_
3	πλούσιος	πλούσιος	ADJ	AjBa	Case=Nom|Gender=Masc|Number=Sing	0	root	_	_
4	με	με	ADP	AsPpSp	_	5	case	_	_
5	αμπέλια	αμπέλι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	3	obl	_	_
6	κι	και	CCONJ	CjCo	_	7	cc	_	_
7	ελιές	ελιά	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	5	conj	_	_
8	και	και	CCONJ	CjCo	_	9	cc	_	_
9	χωράφια	χωράφι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	5	conj	_	_
10	αμέτρητα	αμέτρητος	ADJ	AjBa	Case=Acc|Gender=Neut|Number=Plur	9	amod	_	SpaceAfter=No
11	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 14 amod	color:blue
1	Και	και	CCONJ	CjCo	_	3	cc	_	_
2	δεν	δεν	PART	PtNg	Polarity=Neg	3	advmod	_	_
3	βρέθηκε	βρίχνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
4	κανείς	κανείς	DET	PnId	Case=Nom|Gender=Masc|Number=Sing|PronType=Neg	5	det	_	_
5	βαφτισμένος	βαφτίζω	VERB	AjBa	Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	3	nsubj	_	_
6	,	,	PUNCT	PUNCT	_	7	punct	_	PunctType=Comm
7	μυρωμένος	μυρώνω	VERB	VbMnPp	Case=Nom|Gender=Masc|Number=Sing|VerbForm=Part|Voice=Pass	5	conj	_	_
8	να	να	SCONJ	PtSj	_	10	mark	_	_
9	'χει	έχω	AUX	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	_	_
10	φάει	τρώγω	VERB	VbMn	Aspect=Perf|VerbForm=Inf|Voice=Act	5	acl:relcl	_	_
11	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	12	det	_	_
12	αντίτερο	αντίτερο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	10	obj	_	_
13	της	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	15	det	_	_
14	Μεγάλης	μεγάλη	ADJ	AjBa	Case=Gen|Gender=Fem|Number=Sing	15	amod	_	_
15	Πέμπτης	Πέμπτη	PROPN	NoCm	Case=Gen|Gender=Fem|Number=Sing	12	nmod	_	_
16	,	,	PUNCT	PUNCT	_	18	punct	_	PunctType=Comm
17	να	να	SCONJ	PtSj	_	18	mark	_	_
18	σταυρώσει	σταυρώνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	10	conj	_	_
19	και	και	CCONJ	CjCo	_	21	cc	_	_
20	να	να	SCONJ	PtSj	_	21	mark	_	_
21	γητέψει	γητεύγω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	10	conj	_	_
22	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	23	det	_	_
23	περβόλι	περβόλι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	21	obj	_	_
24	του	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	25	det	_	_
25	δούλου	δούλος	NOUN	NoCm	Case=Gen|Gender=Masc|Number=Sing	23	nmod	_	_
26	του	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	27	det	_	_
27	Θεού	Θεός	PROPN	NoCm	Case=Gen|Gender=Masc|Number=Sing	25	nmod	_	_
28	.	.	PUNCT	PTERMP	_	3	punct	_	PunctType=Peri

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 amod	color:blue
1	Λύνει	λύνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	μπεγίρι	μπεγίρι	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Sing	1	obj	_	_
4	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	_	_
5	Δεσποινιό	Δέσποινα	PROPN	NoCm	Case=Nom|Degree=Dim|Gender=Neut|Number=Sing	1	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	PunctType=Comm
7	τ'	εγώ	PRON	PnPe	Case=Gen|Gender=Neut|Number=Sing|Person=3|PronType=Prs	8	obl	_	_
8	αστράφτει	αστράφτω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	_
9	δύο	δύο	NUM	NmCd	Case=Nom|Gender=Neut|Number=Plur|NumType=Card	11	nummod	_	_
10	ξεσυγυρισμένους	ξεσυγυρίζω	VERB	AjBa	Case=Acc|Gender=Masc|Number=Plur|VerbForm=Part|Voice=Pass	11	amod	_	_
11	φούσκους	φούσκος	NOUN	AjBa	Case=Acc|Gender=Masc|Number=Plur	8	obj	_	_
12	και	και	CCONJ	CjCo	_	14	cc	_	_
13	του	εγώ	PRON	PnPe	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	14	iobj	_	_
14	κάνει	κάνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	conj	_	SpaceAfter=No
15	:	:	PUNCT	PTERM	_	14	punct	_	PunctType=Colo
16	«	«	PUNCT	OPUNCT	_	17	punct	_	PunctType=Quot|SpaceAfter=No
17	Γιάε	γιάε	VERB	VbMn	Mood=Imp|Person=2|VerbForm=Inf|Voice=Act	14	ccomp	_	_
18	μούτρα	μούτρο	NOUN	NoCm	Case=Acc|Gender=Neut|Number=Plur	17	obj	_	_
19	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	20	det	_	_
20	μπεγιράκι	μπεγίρι	NOUN	NoCm	Case=Acc|Degree=Dim|Gender=Neut|Number=Sing	18	acl:relcl	_	_
21	μου	εγώ	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	20	nmod	_	SpaceAfter=No
22	»	»	PUNCT	CPUNCT	_	17	punct	_	PunctType=Quot|SpaceAfter=No
23	.	.	PUNCT	PTERMP	_	1	punct	_	PunctType=Peri

~~~


