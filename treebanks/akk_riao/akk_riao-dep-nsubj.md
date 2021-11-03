---
layout: base
title:  'Statistics of nsubj in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `nsubj`

This relation is universal.

519 nodes (2%) are attached to their parents as `nsubj`.

511 instances of `nsubj` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 6.32369942196532.

The following 7 pairs of parts of speech are connected with `nsubj`: <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (187; 36% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (165; 32% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (150; 29% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (8; 2% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PRON.html">PRON</a></tt> (5; 1% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj	color:blue
1	Hatte	Hatti	PROPN	GN	Case=Gen	7	obj	_	{KUR}hat-te
2	ana	ana	ADP	PRP	_	3	case	_	a-na
3	sihirte	sihirtu	NOUN	N	Case=Gen|Gender=Fem|NounBase=Suffixal|Number=Sing	7	obl	_	si-hir₂-te-šu₂
4	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	3	det:poss	_	_
5	qāt	qātu	NOUN	N	Gender=Fem|NounBase=Suffixal|Number=Sing	7	nsubj	_	qa-at-su
6	su	_	PRON	_	Gender=Masc|Number=Sing|Person=3	5	det:poss	_	_
7	ikšudu	kašādu	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	0	root	_	ik-šu-du

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
1	ša	ša	PRON	REL	_	5	nsubj	_	ša₂
2	šum	šumu	NOUN	N	Gender=Masc|NounBase=Suffixal|Number=Sing	5	obj	_	MU
3	ī	_	PRON	_	Number=Sing|Person=1	2	det:poss	_	_
4	šaṭra	šaṭru	ADJ	AJ	Case=Acc|Gender=Masc|Number=Sing	2	amod	_	šaṭ-ra
5	ipaššiṭu	pašāṭu	VERB	V	Gender=Masc|Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Pres|VerbForm=Fin|VerbStem=G	0	root	_	i-pa-ši-ṭu
6	u	u	CCONJ	CNJ	_	11	cc	_	u₃
7	narê	narû	NOUN	N	Gender=Masc|Number=Plur	11	obj	_	{NA₄}NA.RU₂.A.MEŠ
8	ištu	ištu	ADP	PRP	_	9	case	_	iš-tu
9	ašrī	ašru	NOUN	N	Gender=Masc|NounBase=Suffixal|Number=Plur	11	obl	_	KI-šu₂-nu
10	šunu	_	PRON	_	Gender=Masc|Number=Plur|Person=3	9	det:poss	_	_
11	ušamsaku	masāku	VERB	V	Mood=Ind|Number=Sing|Person=3|Subordinative=Yes|Tense=Pres|VerbForm=Fin|VerbStem=S	5	conj	_	u₂-šam-sa-ku

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nsubj	color:blue
1	Aššur	Aššur	PROPN	DN	Gender=Masc	5	nsubj	_	aš-šur
2	Adad	Adad	PROPN	DN	Gender=Masc	1	conj	_	{d}IŠKUR
3	ikribē	ikribu	NOUN	N	Gender=Masc|NounBase=Suffixal|Number=Plur	5	obj	_	ik-ri-be-šu₂
4	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	3	det:poss	_	_
5	išemmû	šemû	VERB	V	Gender=Masc|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|VerbStem=G	0	root	_	_

~~~


