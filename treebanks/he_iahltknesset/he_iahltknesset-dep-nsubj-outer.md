---
layout: base
title:  'Statistics of nsubj:outer in UD_Hebrew-IAHLTknesset'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTknesset: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="he_iahltknesset-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="he_iahltknesset-dep-nsubj-pass.html">nsubj:pass</a></tt>.

74 nodes (0%) are attached to their parents as `nsubj:outer`.

73 instances of `nsubj:outer` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.18918918918919.

The following 12 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (39; 53% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (19; 26% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (3; 4% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt> (2; 3% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (2; 3% instances), <tt><a href="he_iahltknesset-pos-DET.html">DET</a></tt>-<tt><a href="he_iahltknesset-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="he_iahltknesset-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="he_iahltknesset-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltknesset-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 2 nsubj:outer	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	שאלה	שאלה	NOUN	NOUN	Gender=Fem|Number=Sing	13	nsubj:outer	_	_
3	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Prs	13	cop	_	SpaceAfter=No
4	:	:	PUNCT	PUNCT	_	3	punct	_	_
5	ב	ב	ADP	ADP	_	7	case	_	_
6	איזו	איזה	DET	DET	Gender=Fem|Number=Sing|PronType=Int	7	det	_	CxnElt=13:Interrogative-WHInfo-Direct.WHWord
7	חברה	חברה	NOUN	NOUN	Gender=Fem|Number=Sing	13	obl	_	_
8	ו	ו	CCONJ	CCONJ	_	11	cc	_	_
9	ב	ב	ADP	ADP	_	11	case	_	_
10	איזו	איזה	DET	DET	Gender=Fem|Number=Sing|PronType=Int	11	det	_	_
11	מדינה	מדינה	NOUN	NOUN	Gender=Fem|Number=Sing	7	conj	_	_
12	אנחנו	הוא	PRON	PRON	Gender=Masc|Number=Plur|Person=1|PronType=Prs	13	nsubj	_	_
13	רוצים	רצה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	Cxn=Interrogative-WHInfo-Direct|CxnElt=13:Interrogative-WHInfo-Direct.Clause
14	לחיות	חי	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	13	xcomp	_	SpaceAfter=No
15	?	?	PUNCT	PUNCT	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 1 nsubj:outer	color:blue
1	מה	מה	PRON	PRON	PronType=Rel	10	nsubj:outer	_	_
2	ש	ש	SCONJ	SCONJ	_	3	mark	_	_
3	מעניין	עניין	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	1	acl:relcl	_	_
4	אות	את	ADP	ADP	Case=Acc	5	case	_	_
5	י	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=1|PronType=Prs	3	obj	_	_
6	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	10	cop	_	_
7	ש	ש	SCONJ	SCONJ	_	10	mark	_	_
8	חוות	חווה	PROPN	PROPN	Definite=Cons	10	nsubj	_	_
9	מעון	מעון	PROPN	PROPN	_	8	compound	_	_
10	תישאר	נשאר	VERB	VERB	Gender=Fem|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Fut|Voice=Mid	0	root	_	_
11	על	על	ADP	ADP	_	12	case	_	_
12	מקומ	מקום	NOUN	NOUN	Gender=Masc|Number=Sing	10	obl	_	_
13	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	12	nmod:poss	_	_
14	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 1 nsubj:outer	color:blue
1	מה	מה	PRON	PRON	PronType=Rel	12	nsubj:outer	_	_
2	ש	ש	SCONJ	SCONJ	_	4	mark	_	_
3	אנחנו	הוא	PRON	PRON	Gender=Fem,Masc|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
4	רואות	ראה	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Plur|Person=1|Tense=Pres|VerbForm=Part|Voice=Act	1	acl:relcl	_	_
5	בעצם	בעצם	ADV	ADV	_	4	advmod	_	_
6	ש	ש	SCONJ	SCONJ	_	12	mark	_	_
7	ה	ה	DET	DET	Definite=Def|PronType=Art	8	det	_	_
8	מצב	מצב	NOUN	NOUN	Gender=Masc|Number=Sing	12	nsubj	_	_
9	ב	ב	ADP	ADP	Definite=Def|PronType=Art	10	case	_	_
10	אוניברסיטאות	אוניברסיטה	NOUN	NOUN	Gender=Fem|Number=Plur	8	nmod	_	_
11	עדיין	עדיין	ADV	ADV	_	12	advmod	_	_
12	לוט	לוט	ADJ	ADJ	Gender=Masc|Number=Sing	0	root	_	_
13	ב	ב	ADP	ADP	Definite=Def|PronType=Art	14	case	_	_
14	ערפל	ערפל	NOUN	NOUN	Gender=Masc|Number=Sing	12	obl	_	_
15	ו	ו	CCONJ	CCONJ	_	16	cc	_	_
16	יש	יש	VERB	VERB	Polarity=Pos	12	conj	_	Cxn=Existential-ExistPred-VblPart
17	בלגן	בלגן	NOUN	NOUN	Gender=Masc|Number=Sing	16	nsubj	_	CxnElt=16:Existential-ExistPred-VblPart.Pivot
18	אחד	אחת	NUM	NUM	Gender=Masc|Number=Sing	17	nummod	_	_
19	גדול	גדול	ADJ	ADJ	Gender=Masc|Number=Sing	17	amod	_	SpaceAfter=No
20	.	.	PUNCT	PUNCT	_	12	punct	_	_

~~~


