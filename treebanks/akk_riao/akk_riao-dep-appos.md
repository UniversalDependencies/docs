---
layout: base
title:  'Statistics of appos in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `appos`

This relation is universal.

1828 nodes (8%) are attached to their parents as `appos`.

1828 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 8.41794310722101.

The following 8 pairs of parts of speech are connected with `appos`: <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1545; 85% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (183; 10% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (69; 4% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (21; 1% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-PRON.html">PRON</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 appos	color:blue
1	Bi-x	_	PROPN	_	Gender=Masc	0	root	0:root	_
2	x	_	NOUN	_	_	1	appos	1:appos	_
3	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	2	det:poss	2:det:poss	_
4	ša	ša	ADP	DET	_	5	case	5:case	ša₂
5	Amme-baʾli	Ammi-baʾal	PROPN	PN	Gender=Masc	2	nmod	2:nmod	{m}am-me-ba-aʾ-li

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 appos	color:blue
1	adi	adi	ADP	PRP	_	2	case	2:case	a-di
2	šadî	šadû	NOUN	N	Case=Gen|Gender=Masc|Nounbase=Free|Number=Sing	5	obl	5:obl	KUR-i
3	eqel	eqlu	NOUN	N	Gender=Masc|Nounbase=Bound|Number=Sing	2	appos	2:appos	_
4	namrāṣi	namrāṣu	NOUN	N	Case=Gen|Gender=Masc|Nounbase=Free|Number=Sing	3	nmod:poss	3:nmod:poss	nam-ra-ṣi
5	idūkū	dâku	VERB	V	Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Finite|Verbstem=G	0	root	0:root	i-du-ku-šu
6	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	5	obj	5:obj	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 appos	color:blue
1	ana	ana	ADP	PRP	_	2	case	2:case	a-na
2	Patiškun	Patiškun	PROPN	SN	_	5	obl	5:obl	{URU}pa-ti-iš-kun
3	x	_	PROPN	u	_	2	nmod:poss	2:nmod:poss	x
4	mar-Zamani	Bit-Zamani	PROPN	EN	Gender=Masc	3	appos	3:appos	DUMU-za-ma-a-ni
5	aqṭirib	qerēbu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=G	0	root	0:root	aq-ṭi₂-rib

~~~


