---
layout: base
title:  'Statistics of flat in UD_Ukrainian-ParlaMint'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-ParlaMint: Relations: `flat`

This relation is universal.
There are 5 language-specific subtypes of `flat`: <tt><a href="uk_parlamint-dep-flat-foreign.html">flat:foreign</a></tt>, <tt><a href="uk_parlamint-dep-flat-name.html">flat:name</a></tt>, <tt><a href="uk_parlamint-dep-flat-range.html">flat:range</a></tt>, <tt><a href="uk_parlamint-dep-flat-repeat.html">flat:repeat</a></tt>, <tt><a href="uk_parlamint-dep-flat-title.html">flat:title</a></tt>.

100 nodes (0%) are attached to their parents as `flat`.

100 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.43.

The following 12 pairs of parts of speech are connected with `flat`: <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (39; 39% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (30; 30% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt> (9; 9% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt> (8; 8% instances), <tt><a href="uk_parlamint-pos-INTJ.html">INTJ</a></tt>-<tt><a href="uk_parlamint-pos-INTJ.html">INTJ</a></tt> (3; 3% instances), <tt><a href="uk_parlamint-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (3; 3% instances), <tt><a href="uk_parlamint-pos-DET.html">DET</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (2; 2% instances), <tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_parlamint-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="uk_parlamint-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_parlamint-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="uk_parlamint-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_parlamint-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_parlamint-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 flat	color:blue
1	Дякую	дякувати	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	3	punct	_	_
3	пане	пан	NOUN	NOUN	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	1	vocative	_	_
4	Голово	голова	NOUN	NOUN	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	3	flat	_	SpaceAfter=No
5	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat	color:blue
1	Будь	бути	VERB	VERB	Aspect=Imp|ExtPos=INTJ|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	_	_
2	ласка	ласка	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	1	fixed	_	SpaceAfter=No
3	,	,	PUNCT	PUNCT	_	4	punct	_	_
4	пане	пан	NOUN	NOUN	Animacy=Anim|Case=Voc|Gender=Masc|Number=Sing	1	vocative	_	_
5	В'ячеславе	В'ячеслав	PROPN	PROPN	Animacy=Anim|Case=Voc|Gender=Masc|NameType=Giv|Number=Sing	4	flat	_	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 23	bgColor:blue
# visual-style 23	fgColor:white
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 22 23 flat	color:blue
1	Тому	тому	ADV	ADV	PronType=Dem	3	advmod	_	_
2	ми	ми	PRON	PRON	Animacy=Anim|Case=Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
3	погоджуємось	погоджуватися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	_
4	з	з	ADP	ADP	Case=Ins	5	case	_	_
5	можливістю	можливість	NOUN	NOUN	Animacy=Inan|Case=Ins|Gender=Fem|Number=Sing	3	obl	_	_
6	повторного	повторний	ADJ	ADJ	Case=Gen|Gender=Neut|Number=Sing	7	amod	_	_
7	голосування	голосування	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Neut|Number=Sing	5	nmod	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	11	punct	_	_
9	але	але	CCONJ	CCONJ	_	11	cc	_	_
10	не	не	PART	PART	Polarity=Neg	11	advmod:neg	_	_
11	пізніше	пізніше	ADV	ADV	Degree=Cmp	3	conj	_	_
12	12	12	ADJ	ADJ	Case=Gen|Gender=Neut|Number=Sing|NumType=Ord	11	obl	_	_
13	грудня	грудень	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	12	flat	_	SpaceAfter=No
14	,	,	PUNCT	PUNCT	_	19	punct	_	_
15	тобто	тобто	SCONJ	SCONJ	_	19	mark	_	_
16	в	в	ADP	ADP	Case=Loc	18	case	_	_
17	другій	другий	ADJ	ADJ	Case=Loc|Gender=Fem|Number=Sing|NumType=Ord	18	amod	_	_
18	частині	частина	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Fem|Number=Sing	19	obl	_	_
19	зафіксувати	зафіксувати	VERB	VERB	Aspect=Perf|VerbForm=Inf	3	conj	_	_
20	дату	дата	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	19	obj	_	_
21	-	-	PUNCT	PUNCT	_	22	punct	_	_
22	12	12	ADJ	ADJ	Case=Nom|Gender=Neut|Number=Sing|NumType=Ord	20	appos	_	_
23	грудня	грудень	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	22	flat	_	_
24	2004	2004	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	25	amod	_	_
25	року	рік	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	23	nmod	_	SpaceAfter=No
26	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


