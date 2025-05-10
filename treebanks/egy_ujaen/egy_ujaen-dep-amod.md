---
layout: base
title:  'Statistics of amod in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `amod`

This relation is universal.

770 nodes (4%) are attached to their parents as `amod`.

770 instances of `amod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.51428571428571.

The following 9 pairs of parts of speech are connected with `amod`: <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (661; 86% instances), <tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (78; 10% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt> (20; 3% instances), <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (3; 0% instances), <tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="egy_ujaen-pos-X.html">X</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="egy_ujaen-pos-NUM.html">NUM</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 amod	color:blue
1	nč̣m	nč̣m	VERB	_	Mood=Sub|VerbClass=3lit	0	root	_	Hiero=(𓈖:𓆓)𓅓|SPC=Sub
2	ꞽb	ꞽb	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	Hiero=𓄣|MWE=Yes
3	n(.ꞽ)	n	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	2	amod	_	Hiero=𓈖|Nisba=Prep
4	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	3	obl	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
5	[sp]	sp	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	Hiero=𓊗
6	[2]	2	NUM	_	_	5	nummod	_	CARD|Hiero=𓏮

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 amod	color:blue
1	m	m	VERB	_	Mood=Imp|Number=Sing|VerbClass=Def	0	root	_	Hiero=𓅓
2	ṭp	ṭp	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=𓁶
3	n(.ꞽ)	n	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	2	amod	_	Hiero=𓈖|Nisba=Prep
4	mn{n}č̣	mnč̣	NOUN	_	Gender=Masc|Number=Sing	3	obl	_	Hiero=(𓏠:𓈖:𓈖)(𓆓:𓂑)|Hierocl=Yes
5	n(.ꞽ)	n	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	4	amod	_	Hiero=𓈖|Nisba=Prep
6	Ḥr.w	Ḥr.w	PROPN	_	Gender=Masc	5	obl	_	Hiero=𓅃|Name=God
7	n(.ꞽ)	n	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	6	amod	_	Hiero=𓈖|Nisba=Prep
8	č̣.t	č̣.t	NOUN	_	Gender=Fem|Number=Sing	7	obl	_	Hiero=𓆓:𓏏
9	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nmod	_	Hiero=𓆑|Poss=Yes|Pron=SFP

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 amod	color:blue
1	č̣bꜥ	č̣bꜥ	NOUN	_	Gender=Masc|Number=Sing	4	vocative	_	Hiero=(𓆓:𓃀)𓂝𓂭|Hierocl=Yes
2	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	1	nmod:poss	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
3	šrr.w	šrr	VERB	_	Gender=Masc|Number=Sing|Tense=Pres|VerbClass=2aered|VerbForm=Part	1	amod	_	ADJ|Hiero=(𓈙:𓂋:𓂋)𓅱
4	šṭ	šṭi̯	VERB	_	Mood=Imp|Number=Sing|VerbClass=3aeinf	0	root	_	Hiero=𓄞:𓂧
5	nw	nw	NOUN	_	Gender=Masc|Number=Sing|PronType=Dem	4	obj	_	Dem|Hiero=𓍈:𓏌𓅱
6	ꞽm(.ꞽ)	m	ADJ	_	Case=Loc|Gender=Masc|Number=Sing	5	amod	_	Hiero=𓇋𓏶|Nisba=Prep
7	špꜣ	ẖpꜣ	NOUN	_	Gender=Masc|Number=Sing	6	obl	_	Hiero=𓈙𓅮𓈒|Hierocl=Yes
8	Wśr(.w)	Wśr.w	PROPN	_	Gender=Masc	7	nmod:poss	_	Hiero=𓊨:𓁹|Name=God

~~~


