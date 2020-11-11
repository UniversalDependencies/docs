---
layout: base
title:  'Statistics of advmod in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `advmod`

This relation is universal.
There are 1 language-specific subtypes of `advmod`: <tt><a href="akk_riao-dep-advmod-emph.html">advmod:emph</a></tt>.

210 nodes (1%) are attached to their parents as `advmod`.

199 instances of `advmod` (95%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.28571428571429.

The following 6 pairs of parts of speech are connected with `advmod`: <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (104; 50% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-ADV.html">ADV</a></tt> (92; 44% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-ADP.html">ADP</a></tt> (10; 5% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="akk_riao-pos-ADP.html">ADP</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 advmod	color:blue
1	ašar	ašru	NOUN	N	Gender=Masc|Nounbase=Bound|Number=Sing	4	obl	4:obl	a-šar
2	Šamši	Šamaš	PROPN	DN	Case=Gen|Gender=Masc	1	nmod:poss	1:nmod:poss	{d}šam-ši
3	lā	lā	PART	MOD	_	4	advmod	4:advmod	la-a
4	tušarreb	erēbu	VERB	V	Gender=Masc|Mood=Prohibitive|Number=Sing|Person=2|Tense=Pres|VerbForm=Finite|Verbstem=S	0	root	0:root	tu-ša₂-rib-ši
5	ši	_	PRON	_	Gender=Fem|Number=Sing|Person=3	4	obj	4:obj	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 advmod	color:blue
1	u	u	ADV	CNJ	_	9	advmod	9:advmod	u₃
2	rapšāte	rapšu	ADJ	AJ	Gender=Fem|Number=Plur	3	amod	3:amod	DAGAL.MEŠ
3	mātāt	mātu	NOUN	N	Gender=Fem|Nounbase=Bound|Number=Plur	9	obj	9:obj	KUR.KUR
4	Nairi	Nairi	PROPN	GN	Case=Gen	3	nmod:poss	3:nmod:poss	na-i-ri
5	ana	ana	ADP	PRP	_	6	case	6:case	ana
6	pāṭ	pāṭu	NOUN	N	Gender=Masc|Nounbase=Bound|Number=Sing	9	obl	9:obl	paṭ
7	gimri	gimru	NOUN	N	Case=Gen|Gender=Masc|Nounbase=Suffixal|Number=Sing	6	nmod:poss	6:nmod:poss	gim-ri-ša₂
8	ša	_	PRON	_	Gender=Fem|Number=Sing|Person=3	7	det:poss	7:det:poss	_
9	apēl	bêlu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=G	0	root	0:root	a-pel₂

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 advmod	color:blue
1	še’ī	_	NOUN	_	Gender=Masc|Number=Plur	11	obj	11:obj	_
2	tabkāni	tabku	NOUN	AJ	Gender=Masc|Number=Plur	11	obl	11:obl	tab-ka-a-ni
3	ana	ana	ADP	PRP	_	4	case	4:case	a-na
4	erišti	erištu	NOUN	N	Case=Gen|Gender=Fem|Nounbase=Bound|Number=Sing	11	obl	11:obl	e-riš-ti
5	māti	mātu	NOUN	N	Case=Gen|Gender=Fem|Nounbase=Suffixal|Number=Sing	4	nmod:poss	4:nmod:poss	KUR-ia
6	ya	_	PRON	_	Number=Sing|Person=1	5	det:poss	5:det:poss	_
7	eli	eli	ADP	PRP	_	10	advmod	10:advmod	UGU
8	ša	ša	ADP	REL	_	7	fixed	7:fixed	ša₂
9	pān	pānu	ADV	N	_	7	fixed	7:fixed	pa-an
10	ušātir	watāru	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=S	11	xcomp	11:xcomp	u₂-ša₂-tir
11	atbuk	tabāku	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Finite|Verbstem=G	0	root	0:root	at-bu-uk

~~~


