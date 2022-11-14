---
layout: base
title:  'Statistics of ccomp in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `ccomp`

This relation is universal.

372 nodes (0%) are attached to their parents as `ccomp`.

372 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.17204301075269.

The following 11 pairs of parts of speech are connected with `ccomp`: <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (291; 78% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (35; 9% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt> (32; 9% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (5; 1% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 13 ccomp	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	ארגון	ארגון	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj	_	_
3	מעריך	העריך	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
4	כי	כי	SCONJ	SCONJ	_	13	mark	_	_
5	מ	מ	ADP	ADP	_	6	case	_	_
6	שנה	שנה	NOUN	NOUN	Gender=Fem|Number=Sing	13	obl	_	_
7	זו	זה	PRON	PRON	Gender=Fem|Number=Sing|Person=3|PronType=Dem	6	det	_	_
8	ו	ו	CCONJ	CCONJ	_	10	cc	_	_
9	עד	עד	ADP	ADP	_	10	case	_	_
10	שנת	שנה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	6	conj	_	_
11	2030	2030	NUM	NUM	_	10	compound	_	SpaceAfter=No
12	,	,	PUNCT	PUNCT	_	6	punct	_	_
13	יוכפל	הוכפל	VERB	VERB	Gender=Masc|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Fut|Voice=Pass	3	ccomp	_	_
14	מספר	מספר	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	13	nsubj	_	_
15	מקרי	מקרה	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	14	compound	_	_
16	ה	ה	DET	DET	Definite=Def|PronType=Art	17	det	_	_
17	מוות	מוות	NOUN	NOUN	Gender=Masc|Number=Sing	15	compound	_	_
18	.	.	PUNCT	PUNCT	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 11 ccomp	color:blue
1	פורצת	פרץ	VERB	VERB	Gender=Fem|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Act	0	root	_	_
2	בקרב	בקרב	ADP	ADP	_	3	case	_	_
3	אנשים	איש	NOUN	NOUN	Gender=Masc|Number=Plur	1	obl	_	_
4	מעל	מעל	ADP	ADP	_	5	case	_	_
5	גיל	גיל	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	3	nmod	_	_
6	30	30	NUM	NUM	_	5	compound	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	9	punct	_	_
8	ו	ו	CCONJ	CCONJ	_	9	cc	_	_
9	מאופיינת	אופיין	VERB	VERB	Gender=Fem|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	1	conj	_	_
10	ב	ב	SCONJ	SCONJ	_	11	mark	_	_
11	היות	היות	NOUN	NOUN	Gender=Fem|Number=Sing	9	ccomp	_	_
12	ה	הוא	PRON	PRON	Case=Gen|Definite=Def|Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
13	איטית	איטי	ADJ	ADJ	Gender=Fem|Number=Sing	11	amod	_	_
14	מאוד	מאוד	ADV	ADV	_	13	advmod	_	SpaceAfter=No
15	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 13 ccomp	color:blue
1	כש	כש	SCONJ	SCONJ	_	2	mark	_	_
2	נשאל	נשאל	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past|Voice=Mid	9	advcl	_	_
3	מדוע	מדוע	ADV	ADV	_	5	advmod	_	_
4	לא	לא	ADV	ADV	_	5	advmod	_	_
5	כתב	כתב	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	2	ccomp	_	_
6	לפני	לפני	ADP	ADP	_	7	case	_	_
7	כן	כן	PRON	PRON	_	5	obl	_	SpaceAfter=No
8	,	,	PUNCT	PUNCT	_	2	punct	_	_
9	ענה	ענה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Past|Voice=Act	0	root	_	_
10	"	"	PUNCT	PUNCT	_	13	punct	_	SpaceAfter=No
11	הייתי	היה	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=1|Polarity=Pos|Tense=Past	13	cop	_	_
12	מאוד	מאוד	ADV	ADV	_	13	advmod	_	_
13	חסר	חסר	ADJ	ADJ	Definite=Cons|Gender=Masc|Number=Sing	9	ccomp	_	_
14	ביטחון	ביטחון	NOUN	NOUN	Gender=Masc|Number=Sing	13	compound	_	_
15	ו	ו	CCONJ	CCONJ	_	17	cc	_	_
16	לא	לא	ADV	ADV	_	17	advmod	_	_
17	הרגשתי	הרגיש	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Sing|Person=1|Tense=Past|Voice=Act	13	conj	_	_
18	משורר	משורר	NOUN	NOUN	Gender=Masc|Number=Sing	17	obj	_	_
19	מקצועי	מקצועי	ADJ	ADJ	Gender=Masc|Number=Sing	18	amod	_	SpaceAfter=No
20	"	"	PUNCT	PUNCT	_	13	punct	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	9	punct	_	_

~~~


