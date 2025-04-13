---
layout: base
title:  'Statistics of list in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `list`

This relation is universal.

10 nodes (0%) are attached to their parents as `list`.

10 instances of `list` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.7.

The following 5 pairs of parts of speech are connected with `list`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (4; 40% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (3; 30% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 18 list	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	ציבור	ציבור	NOUN	NOUN	Gender=Masc|Number=Sing	4	nsubj	_	_
3	אינו	אינו	AUX	AUX	Gender=Masc|Number=Sing|Polarity=Neg|VerbForm=Part	4	aux	_	_
4	יודע	ידע	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
5	כיצד	כיצד	ADV	ADV	PronType=Int	6	advmod	_	CxnElt=6:Interrogative-WHInfo-Indirect.WHWord
6	פועלת	פעל	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	4	advcl	_	Cxn=Interrogative-WHInfo-Indirect|CxnElt=6:Interrogative-WHInfo-Indirect.Clause
7	ה	ה	DET	DET	Definite=Def|PronType=Art	8	det	_	_
8	וועדה	ועדה	NOUN	NOUN	Gender=Fem|Number=Sing	6	nsubj	_	_
9	,	,	PUNCT	PUNCT	_	11	punct	_	_
10	מה	מה	PRON	PRON	PronType=Int	11	nsubj	_	_
11	עומד	עמד	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	6	list	_	_
12	ל	ל	ADP	ADP	_	13	case	_	_
13	פני	פנים	NOUN	NOUN	Gender=Fem|Number=Plur	11	obl	_	_
14	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
15	,	,	PUNCT	PUNCT	_	18	punct	_	_
16	איך	איך	ADV	ADV	PronType=Int	18	advmod	_	CxnElt=18:Interrogative-WHInfo-Indirect.WHWord
17	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	18	nsubj	_	_
18	מחליטה	החליט	VERB	VERB	Gender=Fem|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	6	list	_	Cxn=Interrogative-WHInfo-Indirect|CxnElt=18:Interrogative-WHInfo-Indirect.Clause|SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 30	bgColor:blue
# visual-style 30	fgColor:white
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 23 30 list	color:blue
1	על	על	ADP	ADP	_	4	case	_	SpaceAfter=No
2	-	-	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No
3	פי	פה	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	1	fixed	_	_
4	חוק	חוק	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	18	obl	_	_
5	ה	ה	DET	DET	Definite=Def|PronType=Art	6	det	_	_
6	רבנות	רבנה	NOUN	NOUN	Gender=Fem|Number=Sing	4	compound	_	_
7	ה	ה	DET	DET	Definite=Def|PronType=Art	8	det	_	_
8	ראשית	ראשי	ADJ	ADJ	Gender=Fem|Number=Sing	6	amod	_	_
9	,	,	PUNCT	PUNCT	_	4	punct	_	_
10	בין	בין	ADP	ADP	_	11	case	_	_
11	שאר	שאר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	18	obl	_	_
12	ה	ה	DET	DET	Definite=Def|PronType=Art	13	det	_	_
13	תפקידים	תפקיד	NOUN	NOUN	Gender=Masc|Number=Plur	11	compound	_	_
14	של	של	ADP	ADP	Case=Gen	15	case	_	_
15	מועצת	מועצה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	13	nmod:poss	_	Entity=(ORG
16	ה	ה	DET	DET	Definite=Def|PronType=Art	17	det	_	_
17	רבנות	רבנה	NOUN	NOUN	Gender=Fem|Number=Sing	15	compound	_	Entity=ORG)
18	לתת	נתן	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	0	root	_	_
19	כשירות	כשירות	NOUN	NOUN	Gender=Fem|Number=Sing	18	obj	_	_
20	ל	ל	ADP	ADP	_	21	case	_	_
21	כהונה	כהונה	NOUN	NOUN	Gender=Fem|Number=Sing	19	nmod	_	_
22	של	של	ADP	ADP	Case=Gen	23	case	_	_
23	דיינים	דיין	NOUN	NOUN	Gender=Masc|Number=Plur	21	nmod:poss	_	SpaceAfter=No
24	,	,	PUNCT	PUNCT	_	25	punct	_	_
25	רבנים	רב	NOUN	NOUN	Gender=Masc|Number=Plur	23	list	_	SpaceAfter=No
26	,	,	PUNCT	PUNCT	_	27	punct	_	_
27	רבני	רב	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	23	list	_	_
28	עיר	עיר	NOUN	NOUN	Gender=Fem|Number=Sing	27	compound	_	SpaceAfter=No
29	,	,	PUNCT	PUNCT	_	30	punct	_	_
30	רושמי	רושם	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	23	list	_	_
31	נישואין	נישואין	NOUN	NOUN	Gender=Masc|Number=Plur	30	compound	_	SpaceAfter=No
32	.	.	PUNCT	PUNCT	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 list	color:blue
1	הייתה	היה	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	Cxn=Existential-CopPred
2	כאן	כאן	ADV	ADV	_	1	advmod	_	_
3	מדיניות	מדיניות	NOUN	NOUN	Gender=Fem|Number=Sing	1	nsubj	_	CxnElt=1:Existential-CopPred.Pivot
4	מתמשכת	מתמשך	ADJ	ADJ	Gender=Fem|Number=Sing	3	amod	_	SpaceAfter=No
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	רצופה	רצוף	ADJ	ADJ	Gender=Fem|Number=Sing	4	list	_	_
7	ו	ו	CCONJ	CCONJ	_	8	cc	_	_
8	מכוונת	מכוון	ADJ	ADJ	Gender=Fem|Number=Sing	4	conj	_	_
9	של	של	ADP	ADP	Case=Gen	10	case	_	_
10	הזנחה	הזנחה	NOUN	NOUN	Gender=Fem|Number=Sing	3	nmod:poss	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


