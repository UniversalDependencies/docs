---
layout: base
title:  'Statistics of nsubj:pass in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="egy_ujaen-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="egy_ujaen-dep-nsubj-outer.html">nsubj:outer</a></tt>.

134 nodes (1%) are attached to their parents as `nsubj:pass`.

134 instances of `nsubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.17910447761194.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (95; 71% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt> (25; 19% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> (14; 10% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 nsubj:pass	color:blue
1	[č̣(ṭ)]	č̣ṭ	VERB	_	Gender=Masc|VerbForm=Inf	0	root	_	Hiero=𓆓
2	[mṭw]	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓌃
3	(w)ṭ(.w)	wṭi̯	VERB	SPC=PastPass|Type=Abstrel	Tense=Past|VerbForm=Fin|Voice=Pass	1	ccomp	_	Hiero=𓂧
4	n	n	ADP	Status=Pron	Case=Ben	5	case	_	Hiero=𓈖
5	⸗k	k	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=2|PronType=Prs	3	obl	_	Hiero=𓎡
6	ṭp	ṭp	NOUN	_	Gender=Masc|Number=Sing	3	nsubj:pass	_	Hiero=𓁶
7	⸗k	k	PRON	Pron=SFP|Poss=Yes	Gender=Masc|Number=Sing|Person=2|PronType=Prs	6	nmod	_	Hiero=𓎡

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:pass	color:blue
1	ꞽwꞽ(.w)	ꞽwr	VERB	SPC=PastPass|Type=Abstrel	Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Hiero=𓃛𓇋
2	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	1	nsubj:pass	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺
3	m	m	ADP	Status=Cons	Case=Tem	4	case	_	Hiero=𓅓
4	grḥ	grḥ	NOUN	Hierocl=Yes	Gender=Masc|Number=Sing	1	obl	_	Hiero=(𓎼:𓂋)𓎛𓇰
5	mś(.w)	mśi̯	VERB	SPC=PastPass|Type=Abstrel	Tense=Past|VerbForm=Fin|Voice=Pass	1	parataxis	_	Hiero=𓄟
6	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	5	nsubj:pass	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺
7	m	m	ADP	Status=Cons	Case=Tem	8	case	_	Hiero=𓅓
8	grḥ	grḥ	NOUN	Hierocl=Yes	Gender=Masc|Number=Sing	5	obl	_	Hiero=(𓎼:𓂋)𓎛𓇰

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nsubj:pass	color:blue
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


