---
layout: base
title:  'Statistics of advmod:emph in UD_Ukrainian-Zhelekhivka'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-Zhelekhivka: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="uk_zhelekhivka-dep-advmod.html">advmod</a></tt>.
There are also 2 other language-specific subtypes of `advmod`: <tt><a href="uk_zhelekhivka-dep-advmod-det.html">advmod:det</a></tt>, <tt><a href="uk_zhelekhivka-dep-advmod-neg.html">advmod:neg</a></tt>.

79 nodes (1%) are attached to their parents as `advmod:emph`.

79 instances of `advmod:emph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81012658227848.

The following 12 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (33; 42% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (14; 18% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (7; 9% instances), <tt><a href="uk_zhelekhivka-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (6; 8% instances), <tt><a href="uk_zhelekhivka-pos-PROPN.html">PROPN</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (5; 6% instances), <tt><a href="uk_zhelekhivka-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (4; 5% instances), <tt><a href="uk_zhelekhivka-pos-PRON.html">PRON</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (3; 4% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (2; 3% instances), <tt><a href="uk_zhelekhivka-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="uk_zhelekhivka-pos-ADP.html">ADP</a></tt>-<tt><a href="uk_zhelekhivka-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt>-<tt><a href="uk_zhelekhivka-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="uk_zhelekhivka-pos-NUM.html">NUM</a></tt>-<tt><a href="uk_zhelekhivka-pos-PART.html">PART</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 advmod:emph	color:blue
1	Та	Той	DET	PART	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	4	det	_	TokenRange=3378:3381
2	ж	ж	PART	PART	_	1	discourse	_	TokenRange=3378:3381
3	сміливість	сміливість	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	4	nsubj	_	TokenRange=3382:3392
4	проявляється	проявлятися	VERB	VERB	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Reflex=Yes|Tense=Pres|VerbForm=Fin	0	root	_	TokenRange=3393:3405
5	і	і	PART	PART	_	7	advmod:emph	_	TokenRange=3406:3407
6	в	в	ADP	ADP	Case=Loc	7	case	_	TokenRange=3408:3409
7	житті	життя	NOUN	NOUN	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing	4	obl	_	TokenRange=3410:3415
8	самого	самий	DET	DET	Case=Gen|Gender=Masc|Number=Sing|PronType=Emp	9	det	_	TokenRange=3416:3422
9	Драгоманова	Драгоманов	PROPN	PROPN	Animacy=Anim|Case=Gen|Gender=Masc|NameType=Sur|Number=Sing	7	nmod	_	NameType=Sur|SpaceAfter=No|TokenRange=3423:3434
10	.	.	PUNCT	PUNCT	_	4	punct	_	TokenRange=3434:3435

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 10 advmod:emph	color:blue
1	—	—	PUNCT	PUNCT	_	6	punct	_	TokenRange=12721:12722
2	Це	це	PRON	PRON	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	3	det	_	TokenRange=12723:12725
3	гасло	гасло	NOUN	NOUN	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing	6	obj	_	TokenRange=12726:12731
4	великого	великий	ADJ	ADJ	Case=Gen|Degree=Pos|Gender=Masc|Number=Sing	5	amod	_	TokenRange=12732:12740
5	громадянина	громадянин	NOUN	NOUN	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	3	nmod	_	TokenRange=12741:12752
6	повинна	повинний	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	0	root	_	TokenRange=12753:12760
7	приняти	приняти	VERB	VERB	Aspect=Perf|VerbForm=Inf	6	xcomp	_	TokenRange=12761:12768
8	за	за	ADP	ADP	Case=Acc	9	case	_	TokenRange=12769:12771
9	своє	свій	PRON	DET	Case=Acc|Gender=Neut|Number=Sing|PronType=Prs|Reflex=Yes	7	obl	_	TokenRange=12772:12776
10	і	і	CCONJ	CCONJ	_	13	advmod:emph	_	TokenRange=12777:12778
11	сучасна	сучасний	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	13	amod	_	TokenRange=12779:12786
12	українська	український	ADJ	ADJ	Case=Nom|Gender=Fem|Number=Sing	13	amod	_	TokenRange=12787:12797
13	молодіж	молодіж	NOUN	NOUN	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	6	nsubj	_	SpaceAfter=No|TokenRange=12798:12805
14	.	.	PUNCT	PUNCT	_	6	punct	_	TokenRange=12805:12806

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod:emph	color:blue
1	Угорщина	Угорщина	PROPN	PROPN	Animacy=Inan|Case=Nom|Gender=Fem|NameType=Geo|Number=Sing	6	nsubj	_	NameType=Geo|TokenRange=5946:5954
2	вже	вже	ADV	ADV	_	4	advmod	_	TokenRange=5955:5958
3	й	й	PART	PART	_	4	advmod:emph	_	TokenRange=5959:5960
4	нинї	нині	ADV	ADV	_	6	advmod	_	TokenRange=5961:5965
5	майже	майже	ADV	ADV	_	6	advmod	_	TokenRange=5966:5971
6	незалежна	незалежний	ADJ	ADJ	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No|TokenRange=5972:5981
7	,	,	PUNCT	PUNCT	_	14	punct	_	TokenRange=5981:5982
8	а	а	CCONJ	CCONJ	_	14	cc	_	TokenRange=5983:5984
9	року	рік	NOUN	NOUN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	14	obl	_	TokenRange=5985:5989
10	1992	1992	ADJ	ADJ	Case=Gen|Gender=Masc|Number=Sing|NumType=Ord	9	amod	_	TokenRange=5990:5994
11	вона	вона	PRON	PRON	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	14	nsubj	_	TokenRange=5995:5999
12	буде	бути	AUX	AUX	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	14	cop	_	TokenRange=6000:6004
13	цїлком	цілком	ADV	ADV	_	14	advmod	_	TokenRange=6005:6011
14	незалежною	незалежний	ADJ	ADJ	Case=Ins|Degree=Pos|Gender=Fem|Number=Sing	6	conj	_	SpaceAfter=No|TokenRange=6012:6022
15	.	.	PUNCT	PUNCT	_	6	punct	_	TokenRange=6022:6023

~~~


