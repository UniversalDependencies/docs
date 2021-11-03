---
layout: base
title:  'Statistics of nmod:poss in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="akk_riao-dep-nmod.html">nmod</a></tt>.

3075 nodes (13%) are attached to their parents as `nmod:poss`.

3072 instances of `nmod:poss` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.02731707317073.

The following 18 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1856; 60% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (1048; 34% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (66; 2% instances), <tt><a href="akk_riao-pos-ADV.html">ADV</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (20; 1% instances), <tt><a href="akk_riao-pos-PRON.html">PRON</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (18; 1% instances), <tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (16; 1% instances), <tt><a href="akk_riao-pos-DET.html">DET</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (16; 1% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-DET.html">DET</a></tt> (8; 0% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (8; 0% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (5; 0% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-PART.html">PART</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-PART.html">PART</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-ADV.html">ADV</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	ša	ša	ADP	DET	_	2	case	_	ša₂
2	bīt	bīt	NOUN	SBJ	Gender=Masc|NounBase=Bound|Number=Sing	0	root	_	_
3	nathi	_	NOUN	_	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	2	nmod:poss	_	_
4	ša	ša	ADP	DET	_	5	case	_	ša₂
5	Ninua	Ninua	PROPN	SN	_	2	nmod	_	{URU}ni-nu-a

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nmod:poss	color:blue
1	ēkal	ēkallu	NOUN	N	Gender=Fem|NounBase=Bound|Number=Sing	0	root	_	E₂.GAL
2	x	_	PROPN	u	Gender=Masc	1	nmod:poss	_	x
3	mār	māru	NOUN	N	Gender=Masc|NounBase=Bound|Number=Sing	2	appos	_	A
4	Aššur-dan	Aššur-dan_II	PROPN	RN	Gender=Masc	3	nmod:poss	_	aš-šur-KAL-an

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nmod:poss	color:blue
1	ana	ana	ADP	PRP	_	2	case	_	_
2	šūzub	ezēbu	VERB	V	Gender=Masc|NounBase=Bound|Number=Sing|VerbForm=Inf|VerbStem=S	9	obl	_	_
3	napšāti	napištu	NOUN	N	Gender=Fem|NounBase=Suffixal|Number=Plur	2	nmod:poss	_	_
4	šunu	_	PRON	_	Gender=Masc|Number=Plur|Person=3	3	det:poss	_	_
5	ana	ana	ADP	PRP	_	6	case	_	_
6	Matna	Matnu	PROPN	GN	_	9	obl	_	_
7	šadê	šadû	NOUN	N	Gender=Masc|Number=Plur	6	appos	_	_
8	danni	dannu	ADJ	AJ	Case=Gen|Gender=Masc|Number=Sing	7	amod	_	_
9	ēliʾū	elû	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|VerbStem=G	0	root	_	_

~~~


