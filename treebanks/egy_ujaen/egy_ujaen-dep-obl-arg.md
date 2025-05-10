---
layout: base
title:  'Statistics of obl:arg in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="egy_ujaen-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="egy_ujaen-dep-obl-agent.html">obl:agent</a></tt>.

322 nodes (1%) are attached to their parents as `obl:arg`.

322 instances of `obl:arg` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.19875776397516.

The following 6 pairs of parts of speech are connected with `obl:arg`: <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> (161; 50% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt> (118; 37% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (35; 11% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> (4; 1% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-NUM.html">NUM</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:arg	color:blue
1	ꞽꞽw.n	ꞽwi̯	VERB	_	SubForm=AbstRel|Tense=Past|VerbClass=Anom|VerbForm=Fin|Voice=Act	0	root	_	Hiero=𓇋𓅱𓂻|SPC=Past-2
2	(⸗ꞽ)	ꞽ	PRON	_	Gender=Com|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	Hiero=No|Pron=SFP
3	ꞽn	ꞽni̯	VERB	_	Mood=Sub|VerbClass=Anom	1	advcl	_	Clause=Final|Hiero=(𓇋*𓏎:)𓈖|SPC=Sub
4	(⸗ꞽ)	ꞽ	PRON	_	Gender=Com|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Hiero=No|Pron=SFP
5	n	n	ADP	_	_	6	case	_	Hiero=𓈖|Status=Pron
6	⸗k	k	PRON	_	Gender=Masc|Number=Sing|Person=2|PronType=Prs	3	obl:arg	_	Hiero=𓎡|Pron=SFP
7	ꞽr.t	ꞽr.t	NOUN	_	Gender=Fem|Number=Sing	3	obj	_	Hiero=𓁹(:𓏏*𓏤)
8	Ḥr.w	Ḥr.w	PROPN	_	Gender=Masc	7	nmod:poss	_	Hiero=𓅃|Name=God

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:arg	color:blue
1	Č̣ḥw.tꞽ	Č̣ḥw.tꞽ	PROPN	_	Gender=Masc	2	vocative	_	Hiero=𓅝|Name=God
2	ꞽ:sꞽ	sꞽ	VERB	_	Mood=Imp|Number=Sing|Prefix=Yodh|VerbClass=2lit	0	root	_	Hiero=𓇋𓊄
3	ꞽč	ꞽči̯	VERB	_	Mood=Imp|Number=Sing|VerbClass=3aeinf	2	conj	_	Hiero=𓇋𓎁
4	św	św	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	obj	_	Hiero=𓇓𓅱|Pron=Dep
5	n	n	ADP	_	_	4	case	_	Hiero=𓈖|Status=Cons
6	Wśr(.w)	Wśr.w	PROPN	_	Gender=Masc	3	obl:arg	_	Hiero=𓊨:𓁹|Name=God

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 obl:arg	color:blue
1	č̣(ṭ)	č̣ṭ	VERB	_	Gender=Masc|VerbClass=2lit|VerbForm=Inf	0	root	_	Hiero=𓆓
2	mṭw	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓌃
3	sp	sp	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	Hiero=𓊗
4	4	4	NUM	_	_	3	nummod	_	CARD|Hiero=𓏽
5	ḥtp	ḥtp	NOUN	_	Gender=Masc|Number=Sing	6	dep	_	Hiero=𓊵
6	č̣i̯	rč̣i̯	VERB	_	VerbClass=Anom	1	ccomp	_	Hiero=𓏙
7	nsw	nsw	NOUN	_	Gender=Masc|Number=Sing	6	dep	_	Hiero=𓇓𓏏
8	n	n	ADP	_	_	9	case	_	Hiero=𓈖|Status=Cons
9	kꜣ	kꜣ	NOUN	_	Gender=Masc|Number=Sing	6	obl:arg	_	Hiero=𓂓
10	n(.ꞽ)	n	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	9	amod	_	Hiero=𓈖|Nisba=Prep
11	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	10	obl	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King

~~~


