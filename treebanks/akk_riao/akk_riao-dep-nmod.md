---
layout: base
title:  'Statistics of nmod in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="akk_riao-dep-nmod-poss.html">nmod:poss</a></tt>.

669 nodes (3%) are attached to their parents as `nmod`.

668 instances of `nmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.51270553064275.

The following 10 pairs of parts of speech are connected with `nmod`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (342; 51% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (204; 30% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (52; 8% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (46; 7% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-ADV.html">ADV</a></tt> (20; 3% instances), <tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-NUM.html">NUM</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="akk_riao-pos-VERB.html">VERB</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nmod	color:blue
1	ša	ša	ADP	DET	_	2	case	2:case	ša₂
2	bīt	bīt	NOUN	SBJ	Gender=Masc|NounBase=Bound|Number=Sing	0	root	0:root	_
3	nathi	_	NOUN	_	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	2	nmod:poss	2:nmod:poss	_
4	ša	ša	ADP	DET	_	5	case	5:case	ša₂
5	Ninua	Ninua	PROPN	SN	_	2	nmod	2:nmod	{URU}ni-nu-a

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 nmod	color:blue
1	Bunnu-x	Bunnu-x	PROPN	SN	_	11	obj	11:obj	_
2	dūrāni	dūru	NOUN	N	Gender=Masc|Number=Plur	1	conj	1:conj	_
3	dannūtu	dannu	ADJ	AJ	Gender=Masc|Number=Plur	2	amod	2:amod	_
4	ša	ša	ADP	DET	_	5	case	5:case	_
5	Maṣula	Maṣula	PROPN	SN	_	2	nmod	2:nmod	_
6	2	_	NUM	n	_	7	nummod	7:nummod	_
7	ālāni	ālu	NOUN	N	Gender=Masc|Number=Plur	1	conj	1:conj	_
8	ša	ša	ADP	DET	_	9	case	9:case	_
9	limētuš	_	NOUN	_	Case=Loc|Gender=Fem|NounBase=Suffixal|Number=Sing	7	nmod	7:nmod	_
10	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	9	det:poss	9:det:poss	_
11	aktašad	kašādu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbStem=G	0	root	0:root	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 nmod	color:blue
1	ultu	ištu	ADP	PRP	_	2	case	2:case	_
2	Pidara	Pidara	PROPN	SN	_	3	obl	3:obl	_
3	attumuš	namāšu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbStem=G	0	root	0:root	_
4	ana	ana	ADP	PRP	_	5	case	5:case	_
5	Arbakki	Arbakku	PROPN	GN	Case=Gen	10	obl	10:obl	_
6	ša	ša	ADP	DET	_	7	case	7:case	_
7	Habhi	Habhu-ša-betani	PROPN	GN	Case=Gen	5	nmod	5:nmod	_
8	ša	ša	ADP	DET	_	9	case	9:case	_
9	bētāni	bītānu	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	7	nmod	7:nmod	_
10	attarda	warādu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|Ventive=Yes|VerbForm=Fin|VerbStem=G	3	conj	3:conj	_

~~~


