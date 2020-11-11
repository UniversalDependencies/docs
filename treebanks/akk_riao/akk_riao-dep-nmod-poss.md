---
layout: base
title:  'Statistics of nmod:poss in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="akk_riao-dep-nmod.html">nmod</a></tt>.

2936 nodes (13%) are attached to their parents as `nmod:poss`.

2933 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02554495912807.

The following 17 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1757; 60% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (1015; 35% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (65; 2% instances), <tt><a href="akk_riao-pos-ADV.html">ADV</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (19; 1% instances), <tt><a href="akk_riao-pos-PRON.html">PRON</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (17; 1% instances), <tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (15; 1% instances), <tt><a href="akk_riao-pos-DET.html">DET</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (14; 0% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-DET.html">DET</a></tt> (6; 0% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="akk_riao-pos-PART.html">PART</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-PART.html">PART</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod:poss	color:blue
1	adi	adi	ADP	PRP	_	2	case	2:case	a-di
2	šadî	šadû	NOUN	N	Case=Gen|Gender=Masc|Nounbase=Free|Number=Sing	5	obl	5:obl	KUR-i
3	eqel	eqlu	NOUN	N	Gender=Masc|Nounbase=Bound|Number=Sing	2	appos	2:appos	_
4	namrāṣi	namrāṣu	NOUN	N	Case=Gen|Gender=Masc|Nounbase=Free|Number=Sing	3	nmod:poss	3:nmod:poss	nam-ra-ṣi
5	idūkū	dâku	VERB	V	Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Finite|Verbstem=G	0	root	0:root	i-du-ku-šu
6	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	5	obj	5:obj	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	ša	ša	PRON	DET	_	6	nsubj	6:nsubj	ša₂
2	bīt	bītu	NOUN	N	Gender=Masc|Nounbase=Bound|Number=Sing	6	obj	6:obj	E₂
3	Ištar	Ištar	PROPN	DN	Gender=Fem	2	nmod:poss	2:nmod:poss	{d}INANNA
4	ša	ša	ADP	DET	_	5	case	5:case	ša₂
5	Ninua	Ninua	PROPN	SN	_	3	nmod	3:nmod	{URU}NINA
6	ēpuš	epēšu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=G	0	root	0:root	DU₃-uš-ma
7	ma	_	CCONJ	_	_	8	cc	8:cc	_
8	arṣip	raṣāpu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=G	6	conj	6:conj	ar-ṣip

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod:poss	color:blue
1	rēhūte	rēhu	NOUN	N	Gender=Masc|Nounbase=Suffixal|Number=Plur	8	nsubj	8:nsubj	re-hu-te-šu₂-nu
2	šunu	_	PRON	_	Gender=Masc|Number=Plur|Person=3	1	det:poss	1:det:poss	_
3	ana	ana	ADP	PRP	_	4	case	4:case	a-na
4	šūzub	ezēbu	VERB	V	Gender=Masc|Nounbase=Bound|Number=Sing|VerbForm=Inf|Verbstem=S	8	obl	8:obl	šu-zu-ub
5	napšāti	napištu	NOUN	N	Gender=Fem|Nounbase=Suffixal|Number=Plur	4	nmod:poss	4:nmod:poss	ZI.MEŠ-šu₂-nu
6	šunu	_	PRON	_	Gender=Masc|Number=Plur|Person=3	5	det:poss	5:det:poss	_
7	Zaba-šaple	Zab	PROPN	WN	_	8	obj	8:obj	{ID₂}za-ba-šap-le-e
8	x	_	VERB	u	_	0	root	0:root	x

~~~


