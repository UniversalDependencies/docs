---
layout: base
title:  'Statistics of conj in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `conj`

This relation is universal.

2575 nodes (12%) are attached to their parents as `conj`.

2575 instances of `conj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.53514563106796.

The following 16 pairs of parts of speech are connected with `conj`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1089; 42% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (1026; 40% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (356; 14% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (41; 2% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt> (30; 1% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (16; 1% instances), <tt><a href="akk_riao-pos-ADV.html">ADV</a></tt>-<tt><a href="akk_riao-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt>-<tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-ADP.html">ADP</a></tt>-<tt><a href="akk_riao-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NUM.html">NUM</a></tt>-<tt><a href="akk_riao-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-PART.html">PART</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-PRON.html">PRON</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 conj	color:blue
1	šumma	šumma	SCONJ	CNJ	_	9	mark	9:mark	šum₂-ma
2	attunu	attunu	PRON	IP	Gender=Masc|Number=Plur|Person=2	9	nsubj	9:nsubj	at-tu-nu
3	sisê	sisû	NOUN	N	Gender=Masc|Number=Plur	9	obj	9:obj	ANŠE.KUR.RA.MEŠ
4	ana	ana	ADP	PRP	_	5	case	5:case	a-na
5	nakrī	nakru	NOUN	N	Gender=Masc|Nounbase=Suffixal|Number=Plur	9	obl	9:obl	KUR₂.MEŠ-ia
6	ya	_	PRON	_	Number=Sing|Person=1	5	det:poss	5:det:poss	_
7	salmē	_	NOUN	_	Gender=Masc|Nounbase=Suffixal|Number=Plur	5	conj	5:conj	_
8	ya	_	PRON	_	Number=Sing|Person=1	7	det:poss	7:det:poss	_
9	tadnūni	nadānu	VERB	V	Gender=Masc|Number=Plur|Person=3|Subordinative=Yes|VerbForm=Stative|Verbstem=G	0	root	0:root	ta-ad-nu-ni

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 conj	color:blue
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
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 conj	color:blue
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


