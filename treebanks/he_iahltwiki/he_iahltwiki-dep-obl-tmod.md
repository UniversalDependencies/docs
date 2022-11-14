---
layout: base
title:  'Statistics of obl:tmod in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `obl:tmod`

This relation is a language-specific subtype of <tt><a href="he_iahltwiki-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="he_iahltwiki-dep-obl-npmod.html">obl:npmod</a></tt>.

123 nodes (0%) are attached to their parents as `obl:tmod`.

80 instances of `obl:tmod` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.26016260162602.

The following 7 pairs of parts of speech are connected with `obl:tmod`: <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (111; 90% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (3; 2% instances), <tt><a href="he_iahltwiki-pos-ADV.html">ADV</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:tmod	color:blue
1	על	על	ADP	ADP	_	2	case	_	_
2	תהליך	תהליך	NOUN	NOUN	Gender=Masc|Number=Sing	4	obl	_	_
3	זה	זה	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Dem	2	det	_	_
4	יש	יש	VERB	VERB	_	0	root	_	_
5	צורך	צורך	NOUN	NOUN	Gender=Masc|Number=Sing	4	nsubj	_	_
6	לחזור	חזר	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	5	acl	_	_
7	מספר	מספר	DET	DET	_	8	det	_	_
8	פעמים	פעם	NOUN	NOUN	Gender=Fem|Number=Plur	6	obl:tmod	_	_
9	ב	ב	ADP	ADP	_	10	case	_	_
10	יום	יום	NOUN	NOUN	Gender=Masc|Number=Sing	8	nmod	_	_
11	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 obl:tmod	color:blue
1	חלק	חלק	NOUN	NOUN	Gender=Masc|Number=Sing	8	nsubj	_	_
2	מ	מ	ADP	ADP	_	3	case	_	_
3	יהודי	יהודי	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Plur	1	nmod	_	_
4	ה	ה	DET	DET	Definite=Def|PronType=Art	5	det	_	_
5	עיר	עיר	NOUN	NOUN	Gender=Fem|Number=Sing	3	compound	_	_
6	תוניס	תוניס	PROPN	PROPN	_	5	appos	_	_
7	היו	היה	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=3|Polarity=Pos|Tense=Past	8	cop	_	_
8	זכאים	זכאי	ADJ	ADJ	Gender=Masc|Number=Plur	0	root	_	_
9	ל	ל	ADP	ADP	_	10	case	_	_
10	פיצוי	פיצוי	NOUN	NOUN	Gender=Masc|Number=Sing	8	obl	_	_
11	משום	משום	SCONJ	SCONJ	_	16	mark	_	_
12	ש	ש	SCONJ	SCONJ	_	11	fixed	_	_
13	היו	היה	AUX	AUX	Gender=Masc|HebBinyan=PAAL|Number=Plur|Person=3|Polarity=Pos|Tense=Past	16	cop	_	_
14	תחת	תחת	ADP	ADP	_	16	case	_	_
15	ה	ה	DET	DET	Definite=Def|PronType=Art	16	det	_	_
16	כיבוש	כיבוש	NOUN	NOUN	Gender=Masc|Number=Sing	8	obl	_	_
17	זמן	זמן	NOUN	NOUN	Gender=Masc|Number=Sing	16	obl:tmod	_	_
18	ארוך	ארוך	ADJ	ADJ	Gender=Masc|Number=Sing	17	amod	_	_
19	ו	ו	CCONJ	CCONJ	_	21	cc	_	_
20	אף	אף	ADV	ADV	_	21	advmod	_	_
21	הועסקו	הועסק	VERB	VERB	Gender=Masc|HebBinyan=HUFAL|Number=Plur|Person=3|Tense=Past|Voice=Pass	16	conj	_	_
22	ב	ב	ADP	ADP	_	23	case	_	_
23	עבודות	עבודה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	21	obl	_	_
24	כפייה	כפייה	NOUN	NOUN	Gender=Masc|Number=Sing	23	compound	_	_
25	ל	ל	ADP	ADP	_	26	case	_	_
26	תקופות	תקופה	NOUN	NOUN	Gender=Fem|Number=Plur	21	obl	_	_
27	ארוכות	ארוך	ADJ	ADJ	Gender=Fem|Number=Plur	26	amod	_	SpaceAfter=No
28	.	.	PUNCT	PUNCT	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl:tmod	color:blue
1	שופץ	שפץ	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
2	1965	1965	NUM	NUM	_	1	obl:tmod	_	SpaceAfter=No
3	"	"	PUNCT	PUNCT	_	1	punct	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


