---
layout: base
title:  'Statistics of nmod in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="akk_riao-dep-nmod-poss.html">nmod:poss</a></tt>.

645 nodes (3%) are attached to their parents as `nmod`.

644 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.49612403100775.

The following 10 pairs of parts of speech are connected with `nmod`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (332; 51% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (193; 30% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (52; 8% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (44; 7% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-ADV.html">ADV</a></tt> (19; 3% instances), <tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NUM.html">NUM</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod	color:blue
1	Bi-x	_	PROPN	_	Gender=Masc	0	root	0:root	_
2	x	_	NOUN	_	_	1	appos	1:appos	_
3	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	2	det:poss	2:det:poss	_
4	ša	ša	ADP	DET	_	5	case	5:case	ša₂
5	Amme-baʾli	Ammi-baʾal	PROPN	PN	Gender=Masc	2	nmod	2:nmod	{m}am-me-ba-aʾ-li

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod	color:blue
1	ina	ina	ADP	PRP	_	2	case	2:case	ina
2	šadê	šadû	NOUN	N	Gender=Masc|Number=Plur	6	obl	6:obl	KUR-e
3	ša	ša	ADP	DET	_	4	case	4:case	ša₂
4	mātāt	mātu	NOUN	N	Gender=Fem|Nounbase=Bound|Number=Plur	2	nmod	2:nmod	KUR.KUR
5	Nairi	Nairi	PROPN	GN	Case=Gen	4	nmod:poss	4:nmod:poss	na-i-ri
6	ērub	erēbu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=G	0	root	0:root	e-ru-ub

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 nmod	color:blue
1	ša	ša	PRON	DET	_	6	nsubj	6:nsubj	ša₂
2	bīt	bītu	NOUN	N	Gender=Masc|Nounbase=Bound|Number=Sing	6	obj	6:obj	E₂
3	Ištar	Ištar	PROPN	DN	Gender=Fem	2	nmod:poss	2:nmod:poss	{d}INANNA
4	ša	ša	ADP	DET	_	5	case	5:case	ša₂
5	Ninua	Ninua	PROPN	SN	_	3	nmod	3:nmod	{URU}NINA
6	ēpuš	epēšu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=G	0	root	0:root	DU₃-uš-ma
7	ma	_	CCONJ	_	_	8	cc	8:cc	_
8	arṣip	raṣāpu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=G	6	conj	6:conj	ar-ṣip

~~~


