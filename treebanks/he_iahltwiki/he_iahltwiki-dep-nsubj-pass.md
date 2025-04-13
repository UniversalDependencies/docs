---
layout: base
title:  'Statistics of nsubj:pass in UD_Hebrew-IAHLTwiki'
udver: '2'
---

## Treebank Statistics: UD_Hebrew-IAHLTwiki: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="he_iahltwiki-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="he_iahltwiki-dep-nsubj-outer.html">nsubj:outer</a></tt>.

860 nodes (1%) are attached to their parents as `nsubj:pass`.

478 instances of `nsubj:pass` (56%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.29418604651163.

The following 7 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (746; 87% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-PROPN.html">PROPN</a></tt> (59; 7% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-PRON.html">PRON</a></tt> (37; 4% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-NUM.html">NUM</a></tt> (11; 1% instances), <tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt>-<tt><a href="he_iahltwiki-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt>-<tt><a href="he_iahltwiki-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj:pass	color:blue
1	לפני	לפני	ADP	ADP	_	3	mark	_	_
2	ש	ש	SCONJ	SCONJ	_	1	fixed	_	_
3	ניתנת	ניתן	VERB	VERB	Gender=Fem|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	6	advcl	_	_
4	מנת	מנה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Sing	3	nsubj:pass	_	_
5	פלזמה	פלזמה	NOUN	NOUN	Gender=Fem|Number=Sing	4	compound	_	_
6	יש	יש	VERB	VERB	Polarity=Pos	0	root	_	_
7	לבדוק	בדק	VERB	VERB	HebBinyan=PAAL|VerbForm=Inf|Voice=Act	6	csubj	_	_
8	תאימות	תאימות	NOUN	NOUN	Gender=Fem|Number=Sing	7	obj	_	_
9	של	של	ADP	ADP	Case=Gen	10	case	_	_
10	נוגדנים	נוגדן	NOUN	NOUN	Gender=Masc|Number=Plur	8	nmod:poss	_	_
11	אצל	אצל	ADP	ADP	_	13	case	_	_
12	ה	ה	DET	DET	Definite=Def|PronType=Art	13	det	_	_
13	נתרם	נתרם	NOUN	NOUN	Gender=Masc|Number=Sing	7	obl	_	_
14	.	.	PUNCT	PUNCT	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nsubj:pass	color:blue
1	עשור	עשור	NOUN	NOUN	Gender=Masc|Number=Sing	4	obl:unmarked	_	TemporalNPAdjunct=Yes
2	לאחר	לאחר	ADP	ADP	_	4	case	_	_
3	מ	מ	ADP	ADP	_	4	case	_	_
4	כן	כן	ADV	ADV	_	10	advmod	_	_
5	,	,	PUNCT	PUNCT	_	4	punct	_	_
6	ב	ב	ADP	ADP	_	8	case	_	SpaceAfter=No
7	-	-	PUNCT	PUNCT	_	6	punct	_	SpaceAfter=No
8	2012	2012	NUM	NUM	_	10	obl	_	Entity=(TIMEX)|SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	8	punct	_	_
10	נידון	נידון	VERB	VERB	Gender=Masc|HebBinyan=NIFAL|Number=Sing|Person=3|Tense=Past|Voice=Pass	0	root	_	_
11	רביזדה	רביזדה	PROPN	PROPN	_	10	nsubj:pass	_	Entity=(PER)
12	ל	ל	ADP	ADP	_	14	case	_	_
13	שבע	שבע	NUM	NUM	Gender=Fem|NumType=Card	14	nummod	_	_
14	שנות	שנה	NOUN	NOUN	Definite=Cons|Gender=Fem|Number=Plur	10	obl	_	_
15	מאסר	מאסר	NOUN	NOUN	Gender=Masc|Number=Sing	14	compound	_	_
16	ב	ב	ADP	ADP	Definite=Def|PronType=Art	17	case	_	_
17	פועל	פועל	NOUN	NOUN	Gender=Masc|Number=Sing	15	nmod	_	_
18	.	.	PUNCT	PUNCT	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	הוא	הוא	PRON	PRON	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	nsubj:pass	_	_
2	עשוי	עשה	VERB	VERB	Gender=Masc|HebBinyan=PAAL|Number=Sing|Person=3|Tense=Pres|VerbForm=Part|Voice=Pass	0	root	_	_
3	כסף	כסף	NOUN	NOUN	Gender=Masc|Number=Sing	2	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	PUNCT	_	2	punct	_	_

~~~


