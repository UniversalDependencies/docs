---
layout: base
title:  'Statistics of cc in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `cc`

This relation is universal.

426 nodes (2%) are attached to their parents as `cc`.

426 instances of `cc` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.56572769953052.

The following 9 pairs of parts of speech are connected with `cc`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-CCONJ.html">CCONJ</a></tt> (173; 41% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-CCONJ.html">CCONJ</a></tt> (142; 33% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-CCONJ.html">CCONJ</a></tt> (98; 23% instances), <tt><a href="akk_riao-pos-ADV.html">ADV</a></tt>-<tt><a href="akk_riao-pos-CCONJ.html">CCONJ</a></tt> (4; 1% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (3; 1% instances), <tt><a href="akk_riao-pos-ADP.html">ADP</a></tt>-<tt><a href="akk_riao-pos-CCONJ.html">CCONJ</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt>-<tt><a href="akk_riao-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-PRON.html">PRON</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cc	color:blue
1	mê	mû	NOUN	N	Gender=Masc|Number=Plur	6	obj	6:obj	A.MEŠ
2	kal	kalû	DET	N	_	6	obl	6:obl	DU₃
3	ūme	ūmu	NOUN	N	Case=Gen|Gender=Masc|Nounbase=Free|Number=Sing	2	nmod:poss	2:nmod:poss	_
4	u	u	CCONJ	CNJ	_	5	cc	5:cc	u
5	mūše	mūšu	NOUN	N	Case=Gen|Gender=Masc|Nounbase=Free|Number=Sing	3	conj	3:conj	mu-še
6	ihtubû	habû	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Finite|Verbstem=G	0	root	0:root	ih-tu-bu

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cc	color:blue
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


