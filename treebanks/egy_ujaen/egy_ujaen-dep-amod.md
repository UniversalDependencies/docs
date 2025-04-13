---
layout: base
title:  'Statistics of amod in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `amod`

This relation is universal.

500 nodes (3%) are attached to their parents as `amod`.

500 instances of `amod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.486.

The following 7 pairs of parts of speech are connected with `amod`: <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (432; 86% instances), <tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (41; 8% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (21; 4% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="egy_ujaen-pos-NUM.html">NUM</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	ꜣw	ꜣwi̯	VERB	SPC=Sub	Mood=Sub	0	root	_	Hiero=𓄫
2	ꞽb	ꞽb	NOUN	MWE=Yes	Gender=Masc|Number=Sing	1	nsubj	_	Hiero=𓄣
3	[n(.ꞽ)]	n	ADJ	Nisba=Prep	Case=Gen|Gender=Masc|Number=Sing	2	amod	_	Hiero=𓈖
4	s(ꞽ)	s(ꞽ)	NOUN	Hierocl=Yes	Gender=Masc|Number=Sing	3	obl	_	Hiero=𓊃𓀀

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	č̣(ṭ)	č̣ṭ	VERB	_	Gender=Masc|VerbForm=Inf	0	root	_	Hiero=𓆓
2	mṭw	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓌃
3	Ḥr.w	Ḥr.w	PROPN	_	Case=Voc|Gender=Masc	7	vocative	_	Hiero=𓅃
4	ꞽm(.ꞽ)	m	ADJ	Nisba=Prep	Case=Equ|Gender=Masc|Number=Sing	3	amod	_	Hiero=𓏶
5	Wśr(.w)	Wśr.w	PROPN	_	Gender=Masc	4	obl	_	Hiero=𓊨:𓁹
6	Ppy	Ppy	PROPN	_	Gender=Masc	3	appos	_	Hiero=𓍹(𓊪:𓊪)𓇋𓇋𓍺
7	ḥtm(.w)	ḥtm	VERB	SPC=PastPass|Type=Abstrel	Tense=Past|VerbForm=Fin|Voice=Pass	1	ccomp	_	Hiero=(𓎛*𓅭:)𓏏
8	⸗k	k	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=2|PronType=Prs	7	nsubj:pass	_	Hiero=𓎡
9	m	m	ADP	Status=Cons	Case=Ins	10	case	_	Hiero=𓅓
10	ꞽr.t	ꞽr.t	NOUN	_	Definite=Cons|Gender=Fem|Number=Sing	7	obl	_	Hiero=𓁹
11	Ḥr.w	Ḥr.w	PROPN	_	Case=Gen|Gender=Masc	10	nmod	_	Hiero=𓅃

~~~


~~~ conllu
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 14 amod	color:blue
1	m	m	VERB	_	Mood=Imp|Number=Sing	0	root	_	Hiero=𓅓
2	mnč̣	mnč̣	NOUN	Hierocl=Yes	Definite=Cons|Gender=Masc|Number=Sing	1	nmod	_	Hiero=(𓏠:𓈖)(𓆓:𓂑)
3	śn.t	śn.t	NOUN	_	Case=Gen|Gender=Fem|Number=Sing	2	nmod	_	Hiero=𓌢𓏏
4	⸗k	k	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=2|PronType=Emp	3	nmod	_	Hiero=𓎡
5	Ꜣś.t	Ꜣś.t	PROPN	_	Gender=Fem	3	appos	_	Hiero=𓊨𓏏
6	bsꜣ.t	bsꜣ.t	X	_	_	5	dep	_	Hiero=𓃀𓎂𓄿𓏏
7	ꞽčč	ꞽči̯	VERB	SPC=Pres|Type=Abstrel	Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	_	Hiero=𓎁:𓍿
8	⸗k	k	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=2|PronType=Prs	7	nsubj	_	Hiero=𓎡
9	r	r	ADP	Status=Cons	_	10	case	_	Hiero=𓂋
10	rʾ	rʾ	NOUN	_	Gender=Masc|Number=Sing	7	obl	_	Hiero=𓂋
11	⸗k	k	PRON	Pron=SFP|Poss=Yes	Gender=Masc|Number=Sing|Person=2|PronType=Prs	10	nmod	_	Hiero=𓎡
12	|	|	PUNCT	LINE	_	13	punct	_	_
13	mnsꜣ	mnsꜣ	NOUN	_	Gender=Masc|Number=Sing	1	parataxis	_	Hiero=𓏠:𓎂
14	šw	šwi̯	VERB	ADJ|Hierocl=Yes	Gender=Masc|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	13	amod	_	Hiero=𓈙𓆄𓎿

~~~


