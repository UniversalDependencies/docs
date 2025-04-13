---
layout: base
title:  'Statistics of dislocated in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `dislocated`

This relation is universal.

65 nodes (0%) are attached to their parents as `dislocated`.

48 instances of `dislocated` (74%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.64615384615385.

The following 13 pairs of parts of speech are connected with `dislocated`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (26; 40% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (15; 23% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (4; 6% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (3; 5% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (3; 5% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-SYM.html">SYM</a></tt> (1; 2% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 dislocated	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	מדיניות	מדיניות	NOUN	NOUN	Gender=Fem|Number=Sing	7	dislocated	_	_
3	ה	ה	DET	DET	Definite=Def|PronType=Art	4	det	_	_
4	זאת	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	2	det	_	_
5	,	,	PUNCT	PUNCT	_	2	punct	_	_
6	צריך	צריך	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbType=Mod	7	aux	_	_
7	להעלים	העלים	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	0	root	_	_
8	אות	את	ADP	ADP	Case=Acc	9	case	_	_
9	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	obj	_	_
10	ו	ו	CCONJ	CCONJ	_	12	cc	_	_
11	צריך	צריך	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Sing|VerbType=Mod	12	aux	_	_
12	להפסיק	הפסיק	VERB	VERB	HebBinyan=HIFIL|VerbForm=Inf|Voice=Act	7	conj	_	_
13	אות	את	ADP	ADP	Case=Acc	14	case	_	_
14	ה	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	12	obj	_	_
15	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 dislocated	color:blue
1	אבל	אבל	CCONJ	CCONJ	_	8	cc	_	_
2	מאחר	מאחר	SCONJ	SCONJ	_	4	mark	_	_
3	ש	ש	SCONJ	SCONJ	_	2	fixed	_	_
4	יש	יש	VERB	VERB	Polarity=Pos	8	advcl	_	Cxn=Existential-ExistPred-VblPart
5	מלחמה	מלחמה	NOUN	NOUN	Gender=Fem|Number=Sing	4	nsubj	_	CxnElt=4:Existential-ExistPred-VblPart.Pivot|SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	4	punct	_	_
7	אז	אז	ADV	ADV	_	8	advmod	_	_
8	יש	יש	VERB	VERB	Polarity=Pos	0	root	_	Cxn=Existential-ExistPred-VblPart
9	מה	מה	PRON	PRON	PronType=Rel	8	dislocated	_	_
10	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
11	נקרא	נקרא	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Mid	9	acl:relcl	_	_
12	תהליך	תהליך	NOUN	NOUN	Gender=Masc|Number=Sing	8	nsubj	_	CxnElt=8:Existential-ExistPred-VblPart.Pivot
13	של	של	ADP	ADP	Case=Gen	14	case	_	_
14	שלום	שלום	NOUN	NOUN	Gender=Masc|Number=Sing	12	nmod:poss	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 1 dislocated	color:blue
1	מה	מה	PRON	PRON	PronType=Int	14	dislocated	_	_
2	ה	ה	DET	DET	Definite=Def|PronType=Art	3	det	_	_
3	פרמטרים	פרמטר	NOUN	NOUN	Gender=Masc|Number=Plur	1	nsubj	_	_
4	ל	ל	ADP	ADP	_	5	case	_	_
5	קבלה	קבלה	NOUN	NOUN	Gender=Fem|Number=Sing	3	nmod	_	_
6	ל	ל	ADP	ADP	Definite=Def|PronType=Art	7	case	_	_
7	עבודה	עבודה	NOUN	NOUN	Gender=Fem|Number=Sing	5	nmod	_	_
8	ב	ב	ADP	ADP	_	9	case	_	_
9	שירות	שירות	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	7	nmod	_	_
10	ה	ה	DET	DET	Definite=Def|PronType=Art	11	det	_	_
11	מדינה	מדינה	NOUN	NOUN	Gender=Fem|Number=Sing	9	compound	_	_
12	–	–	PUNCT	PUNCT	_	14	punct	_	_
13	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	14	nsubj	_	_
14	נושא	נושא	NOUN	NOUN	Gender=Masc|Number=Sing	0	root	_	_
15	גדול	גדול	ADJ	ADJ	Gender=Masc|Number=Sing	14	amod	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	20	punct	_	_
17	ו	ו	CCONJ	CCONJ	_	20	cc	_	_
18	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	20	nsubj	_	_
19	לא	לא	ADV	ADV	Polarity=Neg	20	advmod	_	_
20	קשור	קשור	ADJ	ADJ	Gender=Masc|Number=Sing	14	conj	_	_
21	ל	ל	ADP	ADP	_	22	case	_	_
22	ירושלים	ירושלים	PROPN	PROPN	_	20	obl	_	Entity=(GPE)
23	.	.	PUNCT	PUNCT	_	14	punct	_	_

~~~


