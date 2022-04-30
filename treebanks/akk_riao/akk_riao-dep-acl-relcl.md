---
layout: base
title:  'Statistics of acl:relcl in UD_Akkadian-RIAO'
udver: '2'
---

## Treebank Statistics: UD_Akkadian-RIAO: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="akk_riao-dep-acl.html">acl</a></tt>.

247 nodes (1%) are attached to their parents as `acl:relcl`.

247 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.39676113360324.

The following 8 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (179; 72% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (53; 21% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (4; 2% instances), <tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt>-<tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="akk_riao-pos-PRON.html">PRON</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="akk_riao-pos-PROPN.html">PROPN</a></tt>-<tt><a href="akk_riao-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="akk_riao-pos-ADJ.html">ADJ</a></tt>-<tt><a href="akk_riao-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl:relcl	color:blue
1	ina	ina	ADP	PRP	_	2	case	_	ina
2	mātāti	mātu	NOUN	N	Gender=Fem|NounBase=Free|Number=Plur	9	obl	_	_
3	ša	ša	PRON	DET	_	4	obj	_	ša₂
4	apēlu	bêlu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Subordinative=Yes|Tense=Past|VerbForm=Fin|VerbStem=G	2	acl:relcl	_	a-pe-lu-ši-na-ni
5	šina	_	PRON	_	Gender=Fem|Number=Plur|Person=3	4	obj	_	_
6	ni	_	PART	_	Subordinative=Yes	4	dep	_	_
7	šaknūte	_	NOUN	_	Gender=Masc|Number=Plur	9	obj	_	_
8	ya	_	PRON	_	Number=Sing|Person=1	7	det:poss	_	_
9	altakkan	šakānu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbStem=Gtn	0	root	_	_
10	urdūti	_	NOUN	_	Gender=Fem|NounBase=Bound|Number=Sing	11	obj	_	_
11	uppušu	epēšu	VERB	V	Gender=Masc|Number=Sing|VerbForm=Inf|VerbStem=D	9	advcl	_	u₂-pu-šu₂

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 acl:relcl	color:blue
1	Kukunu	Kukunu	PROPN	SN	_	9	obj	_	_
2	ša	ša	PRON	DET	_	8	nsubj	_	_
3	pî	pû	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	8	obl	_	_
4	nērebi	nērebu	NOUN	N	Case=Gen|Gender=Masc|NounBase=Free|Number=Sing	3	nmod:poss	_	_
5	ša	ša	ADP	DET	_	6	case	_	_
6	šadê	šadû	NOUN	N	Gender=Masc|Number=Plur	4	nmod	_	_
7	Matnu	Matnu	PROPN	GN	_	6	appos	_	_
8	šaknu	šaknu	VERB	AJ	Gender=Masc|Number=Sing|Person=3|Subordinative=Yes|VerbForm=Stat|VerbStem=G	1	acl:relcl	_	_
9	aktašad	kašādu	VERB	V	Gender=Com|Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|VerbStem=G	0	root	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl:relcl	color:blue
1	Aššur-naṣir-apli	Aššur-naṣir-apli_II	PROPN	RN	Gender=Masc	0	root	_	{m}aš-šur-PAP-A
2	šarru	šarru	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	1	appos	_	MAN
3	ša	ša	PRON	REL	_	6	obj	_	ša₂
4	tanatta	tanattu	NOUN	N	Gender=Fem|NounBase=Suffixal|Number=Sing	3	nmod:poss	_	ta-na-ta-šu₂
5	šu	_	PRON	_	Gender=Masc|Number=Sing|Person=3	4	det:poss	_	_
6	danānu	danānu	NOUN	N	Case=Nom|Gender=Masc|NounBase=Free|Number=Sing	2	acl:relcl	_	da-na-nu

~~~


