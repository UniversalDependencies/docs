---
layout: base
title:  'Statistics of nmod in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="akk_riao-dep-nmod-poss.html">nmod:poss</a></tt>.

660 nodes (3%) are attached to their parents as `nmod`.

659 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.51969696969697.

The following 10 pairs of parts of speech are connected with `nmod`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (336; 51% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (201; 30% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (52; 8% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (46; 7% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-ADV.html">ADV</a></tt> (20; 3% instances), <tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NUM.html">NUM</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod	color:blue
1	ša	ša	ADP	DET	_	2	case	_	ša₂
2	bīt	bīt	NOUN	SBJ	Gender=Masc|NounBase=Bound|Number=Sing	0	root	_	_
3	nathi	_	NOUN	_	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	2	nmod:poss	_	_
4	ša	ša	ADP	DET	_	5	case	_	ša₂
5	Ninua	Ninua	PROPN	SN	_	2	nmod	_	{URU}ni-nu-a

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod	color:blue
1	Bunnu-x	Bunnu-x	PROPN	SN	_	11	obj	_	_
2	dūrāni	dūru	NOUN	N	Gender=Masc|Number=Plur	1	conj	_	_
3	dannūtu	dannu	ADJ	AJ	Gender=Masc|Number=Plur	2	amod	_	_
4	ša	ša	ADP	DET	_	5	case	_	_
5	Maṣula	Maṣula	PROPN	SN	_	2	nmod	_	_
6	2	_	NUM	n	_	7	nummod	_	_
7	ālāni	ālu	NOUN	N	Gender=Masc|Number=Plur	1	conj	_	_
8	ša	ša	ADP	DET	_	9	case	_	_
9	limētuš	_	NOUN	_	Case=Loc|Gender=Fem|NounBase=Suffixal|Number=Sing	7	nmod	_	_
10	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	9	det:poss	_	_
11	aktašad	kašādu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbStem=G	0	root	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	ultu	ištu	ADP	PRP	_	2	case	_	_
2	Pidara	Pidara	PROPN	SN	_	3	obl	_	_
3	attumuš	namāšu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbStem=G	0	root	_	_
4	ana	ana	ADP	PRP	_	5	case	_	_
5	Arbakki	Arbakku	PROPN	GN	Case=Gen	10	obl	_	_
6	ša	ša	ADP	DET	_	7	case	_	_
7	Habhi	Habhu-ša-betani	PROPN	GN	Case=Gen	5	nmod	_	_
8	ša	ša	ADP	DET	_	9	case	_	_
9	bētāni	bītānu	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	7	nmod	_	_
10	attarda	warādu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|Ventive=Yes|VerbForm=Fin|VerbStem=G	3	conj	_	_

~~~


