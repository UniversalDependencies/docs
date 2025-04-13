---
layout: base
title:  'Statistics of nmod:unmarked in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="he_iahltknesset-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="he_iahltknesset-dep-nmod-poss.html">nmod:poss</a></tt>.

41 nodes (0%) are attached to their parents as `nmod:unmarked`.

40 instances of `nmod:unmarked` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 12 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (11; 27% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (7; 17% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (7; 17% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (6; 15% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (2; 5% instances), <tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (2; 5% instances), <tt><a href="he_iahltknesset-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-X.html">X</a></tt> (1; 2% instances), <tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 nmod:unmarked	color:blue
1	אנחנו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
2	חשבנו	חשב	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Past|Voice=Act	0	root	_	_
3	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
4	אפשר	אפשר	VERB	VERB	VerbType=Mod	2	ccomp	_	_
5	לאחד	איחד	VERB	VERB	HebBinyan=PIEL|VerbForm=Inf|Voice=Act	4	csubj	_	_
6	את	את	ADP	ADP	Case=Acc	7	case	_	_
7	זכייני	זכיין	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	5	obj	_	_
8	ערוץ	ערוץ	PROPN	PROPN	_	7	compound	_	Entity=(DUC
9	2	2	NUM	NUM	_	8	nmod:unmarked	_	Entity=DUC)|SpaceAfter=No
10	,	,	PUNCT	PUNCT	_	12	punct	_	_
11	מתוך	מתוך	ADP	ADP	_	12	case	_	_
12	הנחה	הנחה	NOUN	NOUN	Gender=Fem|Number=Sing	2	obl	_	_
13	ש	ש	SCONJ	SCONJ	_	14	mark	_	_
14	יש	יש	VERB	VERB	Polarity=Pos	12	acl:relcl	_	Cxn=Existential-ExistPred-VblPart
15	ערוץ	ערוץ	NOUN	NOUN	Gender=Masc|Number=Sing	14	nsubj	_	CxnElt=14:Existential-ExistPred-VblPart.Pivot|Entity=(DUC
16	שלישי	שלישי	ADJ	ADJ	Gender=Masc|Number=Sing	15	amod	_	Entity=DUC)|SpaceAfter=No
17	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 nmod:unmarked	color:blue
1	ראשית	ראשית	ADV	ADV	_	9	advmod	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	_	_
3	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
4	אף	אף	DET	DET	Definite=Cons|PronType=Neg	5	det	_	_
5	פעם	פעם	NOUN	NOUN	Gender=Fem|Number=Sing	9	nmod:unmarked	_	TemporalNPAdjunct=Yes
6	לא	לא	ADV	ADV	Polarity=Neg	9	advmod	_	_
7	מחוץ	מחוץ	ADP	ADP	_	9	case	_	_
8	ל	ל	ADP	ADP	Definite=Def|PronType=Art	7	fixed	_	_
9	מים	מים	NOUN	NOUN	Gender=Masc|Number=Plur	0	root	_	_
10	ה	ה	DET	DET	Definite=Def|PronType=Art	11	det	_	_
11	טריטוריאליים	טריטוריאלי	ADJ	ADJ	Gender=Masc|Number=Plur	9	amod	_	_
12	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:unmarked	color:blue
1	ב	ב	ADP	ADP	_	2	case	_	_
2	שעה	שעה	NOUN	NOUN	Gender=Fem|Number=Sing	7	obl	_	_
3	04:00	04:00	NUM	NUM	_	2	nmod:unmarked	_	TemporalNPAdjunct=Yes
4	ב	ב	ADP	ADP	_	5	case	_	_
5	יום	יום	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	2	nmod	_	Entity=(TIMEX
6	שישי	שישי	PROPN	PROPN	_	5	compound	_	Entity=TIMEX)
7	שרפו	שרף	VERB	VERB	HebBinyan=PAAL|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
8	ארבעה	ארבע	NUM	NUM	Gender=Masc|NumType=Card	9	nummod	_	_
9	לולים	לול	NOUN	NOUN	Gender=Masc|Number=Plur	7	nsubj	_	_
10	עם	עם	ADP	ADP	_	13	case	_	_
11	50	50	NUM	NUM	_	12	nummod	_	_
12	אלף	אלף	NUM	NUM	Gender=Masc|Number=Sing	13	nummod	_	_
13	תרנגולות	תרנגול	NOUN	NOUN	Gender=Fem|Number=Plur	9	nmod	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	7	punct	_	_

~~~


