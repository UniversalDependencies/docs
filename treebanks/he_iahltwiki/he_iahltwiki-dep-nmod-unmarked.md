---
layout: base
title:  'Statistics of nmod:unmarked in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="he_iahltwiki-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="he_iahltwiki-dep-nmod-poss.html">nmod:poss</a></tt>.

399 nodes (0%) are attached to their parents as `nmod:unmarked`.

392 instances of `nmod:unmarked` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.25062656641604.

The following 13 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (210; 53% instances), <tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (108; 27% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (42; 11% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (18; 5% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (8; 2% instances), <tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt>-<tt><a href="he_iahltwiki-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (2; 1% instances), <tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt>-<tt><a href="he_iahltwiki-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod:unmarked	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	תשלומים	תשלום	NOUN	NOUN	Gender=Masc|Number=Plur	3	nsubj	_	_
3	החלו	החל	VERB	VERB	Gender=Masc|HebBinyan=HIFIL|Number=Plur|Person=3|Tense=Past|Voice=Act	0	root	_	_
4	ב	ב	ADP	ADP	_	5	case	_	_
5	ספטמבר	ספטמבר	PROPN	PROPN	_	3	obl	_	Entity=(TIMEX
6	2002	2002	NUM	NUM	_	5	nmod:unmarked	_	Entity=TIMEX)|SpaceAfter=No|TemporalNPAdjunct=Yes
7	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 nmod:unmarked	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	מנדט	מנדט	NOUN	NOUN	Gender=Masc|Number=Sing	3	nsubj:pass	_	_
3	חודש	חודש	VERB	VERB	Gender=Masc|HebBinyan=PUAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
4	ב	ב	ADP	ADP	_	5	case	_	_
5	רציפות	רציפות	NOUN	NOUN	Gender=Fem|Number=Sing	3	obl	_	_
6	ו	ו	CCONJ	CCONJ	_	8	cc	_	_
7	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
8	תקף	תקף	ADJ	ADJ	Gender=Masc|Number=Sing	3	conj	_	_
9	עד	עד	ADP	ADP	_	10	case	_	_
10	30	30	NUM	NUM	_	8	obl	_	Entity=(TIMEX
11	ב	ב	ADP	ADP	_	12	case	_	_
12	יוני	יוני	PROPN	PROPN	_	10	nmod	_	_
13	2023	2023	NUM	NUM	_	10	nmod:unmarked	_	Entity=TIMEX)|SpaceAfter=No|TemporalNPAdjunct=Yes
14	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:unmarked	color:blue
1	ה	ה	DET	DET	Definite=Def|PronType=Art	2	det	_	_
2	סוכנות	סוכנות	NOUN	NOUN	Gender=Fem|Number=Sing	3	nsubj:pass	_	_
3	הוקמה	הוקם	VERB	VERB	Gender=Fem|HebBinyan=HUFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
4	על	על	ADP	ADP	_	6	case	_	_
5	סמך	סמך	NOUN	NOUN	Definite=Cons|Gender=Masc|Number=Sing	4	fixed	_	_
6	החלטה	החלטה	NOUN	NOUN	Gender=Fem|Number=Sing	3	obl	_	Entity=(MISC
7	302	302	NUM	NUM	_	6	nmod:unmarked	_	Comment=deprel|Entity=MISC)
8	של	של	ADP	ADP	Case=Gen	10	case	_	_
9	ה	ה	DET	DET	Definite=Def|PronType=Art	10	det	_	Entity=(ORG
10	עצרת	עצרת	PROPN	PROPN	_	6	nmod:poss	_	_
11	ה	ה	DET	DET	Definite=Def|PronType=Art	12	det	_	_
12	כללית	כללי	ADJ	ADJ	Gender=Fem|Number=Sing	10	amod	_	_
13	של	של	ADP	ADP	Case=Gen	15	case	_	_
14	ה	ה	DET	DET	Definite=Def|PronType=Art	15	det	_	Entity=(ORG
15	או"ם	או"ם	PROPN	PROPN	Abbr=Yes	10	nmod:poss	_	Entity=ORG)ORG)
16	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


