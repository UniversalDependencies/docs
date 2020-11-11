---
layout: base
title:  'Statistics of acl:relcl in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="akk_riao-dep-acl.html">acl</a></tt>.

231 nodes (1%) are attached to their parents as `acl:relcl`.

231 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.64935064935065.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (168; 73% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (50; 22% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="akk_riao-pos-PRON.html">PRON</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 acl:relcl	color:blue
1	ana	ana	ADP	PRP	_	2	case	2:case	a-na
2	ālāni	ālu	NOUN	N	Gender=Masc|Number=Plur	10	obl	10:obl	URU.MEŠ-ni
3	ša	ša	ADP	DET	_	4	case	4:case	ša
4	Ladani	Ladanu	PROPN	GN	Case=Gen	2	nmod	2:nmod	{KUR}la-da-a-ni
5	ša	ša	PRON	DET	_	9	obj	9:obj	ša₂
6	Arumu	Aramu	PROPN	EN	Case=Nom|Gender=Masc	9	nsubj	9:nsubj	{KUR}a-ru-mu
7	u	u	CCONJ	CNJ	_	8	cc	8:cc	u
8	Lullu	Lullu	PROPN	EN	Case=Nom|Gender=Masc	6	conj	6:conj	{KUR}lu-ul-lu
9	ukallūni	kullu	VERB	V	Gender=Masc|Mood=Ind|Number=Plur|Person=3|Subordinative=Yes|Tense=Pres|VerbForm=Finite|Verbstem=D	2	acl:relcl	2:acl:relcl	u₂-kal-lu-ni
10	aqṭirib	qerēbu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=G	0	root	0:root	aq-ṭi₂-rib

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 acl:relcl	color:blue
1	Ninurta	Ninurta	PROPN	DN	Gender=Masc	0	root	0:root	{d}MAŠ
2	u	u	CCONJ	CNJ	_	3	cc	3:cc	u
3	Nergal	Nergal	PROPN	DN	Gender=Masc	1	conj	1:conj	{d}IGI.DU
4	ša	ša	PRON	DET	_	7	nsubj	7:nsubj	ša₂
5	šangût	_	NOUN	_	Gender=Fem|Nounbase=Suffixal|Number=Sing	7	obj	7:obj	_
6	ī	_	PRON	_	Number=Sing|Person=1	5	det:poss	5:det:poss	_
7	irammū	râmu	VERB	V	Gender=Masc|Mood=Ind|Number=Plur|Person=3|Subordinative=Yes|Tense=Pres|VerbForm=Finite|Verbstem=G	1	acl:relcl	1:acl:relcl	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl:relcl	color:blue
1	ištu	ištu	ADP	PRP	_	2	case	2:case	iš-tu
2	Rahimme	Rahimmu	PROPN	SN	Case=Gen	3	obl	3:obl	{URU}ra-hi-im-me
3	ittumša	namāšu	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|Ventive=Yes|VerbForm=Finite|Verbstem=G	0	root	0:root	it-tum₄-ša₂
4	ina	ina	ADP	PRP	_	5	case	5:case	ina
5	eqel	eqlu	NOUN	N	Gender=Masc|Nounbase=Bound|Number=Sing	10	obl	10:obl	_
6	Kabsite	Kabsite	PROPN	SN	Case=Gen	5	nmod:poss	5:nmod:poss	kab-si-te
7	ša	ša	PRON	REL	_	9	nsubj	9:nsubj	ša₂
8	eli	eli	ADP	PRP	_	9	case	9:case	UGU
9	Puratte	Purattu	PROPN	WN	Case=Gen|Gender=Fem	6	acl:relcl	6:acl:relcl	{ID₂}pu-rat-te
10	assakan	šakānu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=G	3	conj	3:conj	GAR-an
11	bēde	bēdu	VERB	AJ	Number=Sing|Person=3|VerbForm=Stative|Verbstem=G	3	conj	3:conj	_

~~~


