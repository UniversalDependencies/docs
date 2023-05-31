---
layout: base
title:  'Statistics of dep in UD_Greek-GUD'
udver: '2'
---

## Treebank Statistics: UD_Greek-GUD: Relations: `dep`

This relation is universal.

9 nodes (0%) are attached to their parents as `dep`.

7 instances of `dep` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.66666666666667.

The following 8 pairs of parts of speech are connected with `dep`: <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-VERB.html">VERB</a></tt> (2; 22% instances), <tt><a href="el_gud-pos-ADV.html">ADV</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="el_gud-pos-DET.html">DET</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-ADV.html">ADV</a></tt> (1; 11% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-INTJ.html">INTJ</a></tt> (1; 11% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="el_gud-pos-VERB.html">VERB</a></tt>-<tt><a href="el_gud-pos-SCONJ.html">SCONJ</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 dep	color:blue
1	«	«	PUNCT	OPUNCT	PunctType=Quot	3	punct	_	_
2	Σας	εγώ	PRON	PnPe	Case=Acc|Number=Plur|Person=2|PronType=Prs	3	iobj	_	_
3	ρώτησε	ρωτώ	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	πώς	πώς	ADV	AdBa	_	6	advmod	_	_
5	ξαφνικά	ξαφνικά	ADV	AdBa	_	6	advmod	_	_
6	αποφασίσατε	αποφασίζω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|Tense=Past|VerbForm=Fin|Voice=Act	3	ccomp	_	_
7	να	να	SCONJ	PtSj	_	8	mark	_	_
8	φέρετε	φέρνω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Plur|Person=2|VerbForm=Fin|Voice=Act	6	dep	_	_
9	τις	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	10	det	_	_
10	εταιρείες	εταιρεία	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Plur	8	obj	_	_
11	σας	μου	PRON	PnPo	Case=Gen|Number=Plur|Person=2|Poss=Yes|PronType=Prs	10	nmod	_	_
12	σ	σε	ADP	AsPpSp	_	14	case	_	_
13	την	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	14	det	_	_
14	Ελλάδα	Ελλάδα	PROPN	NoPr	Case=Acc|Gender=Fem|Number=Sing	8	obl	_	_
15	»	»	PUNCT	CPUNCT	PunctType=Quot	6	punct	_	SpaceAfter=No
16	.	.	PUNCT	PTERMP	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 dep	color:blue
1	Εκ	εκ	ADP	AsPpSp	_	3	case	_	_
2	των	ο	DET	AtDf	Case=Gen|Definite=Def|Gender=Neut|Number=Plur|PronType=Art	3	det	_	_
3	υστέρων	ύστερος	ADJ	AjBa	Case=Gen|Gender=Masc|Number=Plur	5	obl	_	_
4	μου	μου	PRON	PnPo	Case=Gen|Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
5	κατεβαίνει	κατεβαίνω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
6	ότι	ότι	SCONJ	CjSb	_	8	mark	_	_
7	δεν	δεν	PART	PtNg	Polarity=Neg	8	advmod	_	_
8	είπα	λέω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	5	ccomp	_	_
9	καλού	καλός	ADV	_	_	8	dep	_	SpaceAfter=No
10	-	-	PUNCT	PUNCT	PunctType=Dash	9	punct	_	SpaceAfter=No
11	κακού	κακός	ADV	_	_	9	dep	_	_
12	σ	σε	ADP	AsPpSp	_	14	case	_	_
13	τον	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Σωτηρόπουλο	Σωτηρόπουλος	PROPN	NoPr	Case=Acc|Gender=Masc|Number=Sing	8	obl	_	_
15	ότι	ότι	SCONJ	CjSb	_	20	mark	_	_
16	η	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	17	det	_	_
17	έρευνα	έρευνα	NOUN	NoCm	Case=Nom|Gender=Fem|Number=Sing	20	nsubj	_	_
18	είναι	είμαι	AUX	VbMn	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	20	cop	_	_
19	ακόμα	ακόμα	ADV	AdBa	_	20	advmod	_	_
20	απόρρητη	απόρρητος	ADJ	AjBa	Case=Nom|Gender=Fem|Number=Sing	8	ccomp	_	_
21	,	,	PUNCT	PUNCT	PunctType=Comm	26	punct	_	_
22	αλλά	αλλά	CCONJ	CjCo	_	26	cc	_	_
23	πρώτος	πρώτος	ADJ	NmOd	Case=Nom|Gender=Masc|Number=Sing|NumType=Ord	24	amod	_	_
24	αυτός	αυτός	DET	PnDm	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	26	nsubj	_	_
25	μου	εγώ	PRON	PnPe	Case=Gen|Number=Sing|Person=1|PronType=Prs	26	iobj	_	_
26	επέβαλε	επιβάλλω	VERB	VbMn	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	conj	_	_
27	τη	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	28	det	_	_
28	γραμμή	γραμμή	NOUN	NoCm	Case=Acc|Gender=Fem|Number=Sing	26	obj	_	_
29	εχεμύθειας	εχεμύθεια	NOUN	NoCm	Case=Gen|Gender=Fem|Number=Sing	28	nmod	_	SpaceAfter=No
30	.	.	PUNCT	PTERMP	PunctType=Peri	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 11 dep	color:blue
1	Το	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	κίνητρο	κίνητρο	NOUN	NoCm	Case=Nom|Gender=Neut|Number=Sing	0	root	_	_
3	που	που	PRON	PnRe	Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	4	obj	_	_
4	επικαλούνται	επικαλούμαι	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	2	acl:relcl	_	_
5	ο	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	υπουργός	υπουργός	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Sing	4	nsubj	_	_
7	και	και	CCONJ	CjCo	_	10	cc	_	_
8	οι	ο	DET	AtDf	Case=Nom|Definite=Def|Gender=Masc|Number=Plur|PronType=Art	9	det	_	_
9	πλοιοκτήτες	πλοιοκτήτης	NOUN	NoCm	Case=Nom|Gender=Masc|Number=Plur	10	nsubj	_	_
10	ταιριάζει	ταιριάζω	VERB	VbMn	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	conj	_	_
11	περισσότερο	πολύ	ADV	AdCp	Degree=Cmp|PronType=Ind	1	dep	_	_
12	σ	σε	ADP	AsPpSp	_	14	case	_	_
13	τον	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	14	det	_	_
14	Δημητράκο	Δημητράκος	PROPN	NoPr	Case=Acc|Gender=Masc|Number=Sing	10	obl	_	_
15	και	και	CCONJ	CjCo	_	19	cc	_	_
16	λιγότερο	λίγο	ADV	AdCp	Degree=Cmp	19	advmod	_	_
17	σ	σε	ADP	AsPpSp	_	19	case	_	_
18	το	ο	DET	AtDf	Case=Acc|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	19	det	_	_
19	σήμερα	σήμερα	ADV	AdBa	_	14	conj	_	SpaceAfter=No
20	.	.	PUNCT	PTERMP	PunctType=Peri	2	punct	_	_

~~~


