---
layout: base
title:  'Statistics of nsubj:outer in UD_Hebrew-HTB'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-HTB: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="he_htb-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="he_htb-dep-nsubj-cop.html">nsubj:cop</a></tt>.

50 nodes (0%) are attached to their parents as `nsubj:outer`.

50 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 12.02.

The following 10 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (29; 58% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (5; 10% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (4; 8% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (3; 6% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (3; 6% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt> (2; 4% instances), <tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_htb-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="he_htb-pos-ADV.html">ADV</a></tt>-<tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="he_htb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_htb-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="he_htb-pos-VERB.html">VERB</a></tt>-<tt><a href="he_htb-pos-NUM.html">NUM</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:outer	color:blue
1	ה	ה	DET	DET	PronType=Art	2	det	_	_
2	רושם	רושם	NOUN	NOUN	Gender=Masc|Number=Sing	9	nsubj:outer	_	_
3	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|Polarity=Pos	9	cop	_	_
4	ש	ש	SCONJ	SCONJ	_	9	mark	_	_
5	ה	ה	DET	DET	PronType=Art	6	det	_	_
6	ממסד	ממסד	NOUN	NOUN	Gender=Masc|Number=Sing	9	nsubj	_	_
7	ה	ה	DET	DET	PronType=Art	8	det	_	_
8	צרפתי	צרפתי	ADJ	ADJ	Gender=Masc|Number=Sing	6	amod	_	_
9	מצפה	ציפה	VERB	VERB	Gender=Masc|HebBinyan=PIEL|Number=Sing|Person=1,2,3|VerbForm=Part|Voice=Act	0	root	_	_
10	ש	ש	SCONJ	SCONJ	_	11	mark	_	_
11	ימותו	מת	VERB	VERB	Gender=Fem,Masc|HebBinyan=PAAL|Number=Plur|Person=3|Tense=Fut|Voice=Act	9	ccomp	_	_
12	ב	ב	ADP	ADP	_	13	case	_	_
13	שקט	שקט	NOUN	NOUN	Gender=Masc|Number=Sing	11	obl	_	_
14	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 2 nsubj:outer	color:blue
1	"	"	PUNCT	PUNCT	_	18	punct	_	SpaceAfter=No
2	משמעות	משמעות	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	18	nsubj:outer	_	_
3	ה	ה	DET	DET	PronType=Art	4	det	_	_
4	דבר	דבר	NOUN	NOUN	Gender=Masc|Number=Sing	2	compound:smixut	_	_
5	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|Polarity=Pos	18	cop	_	_
6	ש	ש	SCONJ	SCONJ	_	18	mark	_	_
7	מועצת	מועצה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	18	nsubj	_	_
8	ה	ה	DET	DET	PronType=Art	9	det	_	_
9	עם	עם	NOUN	NOUN	Gender=Masc|Number=Sing	7	compound:smixut	_	_
10	,	,	PUNCT	PUNCT	_	7	punct	_	_
11	ש	ש	SCONJ	SCONJ	_	12	mark	_	_
12	כיהנה	כיהן	VERB	VERB	Gender=Fem|HebBinyan=PIEL|Number=Sing|Person=3|Tense=Past|Voice=Act	7	acl:relcl	_	_
13	במשך	במשך	ADP	ADP	_	15	case	_	_
14	חמש	חמש	NUM	NUM	Gender=Fem|Number=Sing	15	nummod	_	_
15	שנים	שנה	NOUN	NOUN	Gender=Fem|Number=Plur	12	obl	_	SpaceAfter=No
16	,	,	PUNCT	PUNCT	_	18	punct	_	_
17	היתה	היה	AUX	AUX	Gender=Fem|Number=Sing|Person=3|Polarity=Pos|Tense=Past|VerbType=Cop	18	cop	_	_
18	מושחתת	מושחת	ADJ	ADJ	Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
19	.	.	PUNCT	PUNCT	_	18	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:outer	color:blue
1	שאלה	שאלה	NOUN	NOUN	Gender=Fem|Number=Sing	9	nsubj:outer	_	_
2	ש	ש	SCONJ	SCONJ	_	3	mark	_	_
3	שואלים	שאל	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=1,2,3|VerbForm=Part|Voice=Act	1	acl:relcl	_	_
4	רבים	רב	NOUN	NOUN	Gender=Masc|Number=Plur	3	nsubj	_	_
5	היא	הוא	PRON	PRON	Gender=Fem|Number=Sing|Person=3|Polarity=Pos	9	cop	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	מה	מה	ADV	ADV	PronType=Int	9	nsubj	_	CxnElt=9:Interrogative-WHInfo-Direct.WHWord
8	עדיף	עדיף	ADJ	ADJ	Gender=Masc|Number=Sing	9	dep	_	HebSource=ConvUncertainHead|Modal=Yes
9	שבבית	שבבית	NOUN	NOUN	Gender=Fem|Number=Sing	0	root	_	Cxn=Interrogative-WHInfo-Direct|CxnElt=9:Interrogative-WHInfo-Direct.Clause
10	או	או	CCONJ	CCONJ	_	11	cc	_	_
11	סנדוויץ	סנדוויץ	NOUN	NOUN	Gender=Masc|Number=Sing	9	conj	_	SpaceAfter=No
12	?	?	PUNCT	PUNCT	_	9	punct	_	_

~~~


