---
layout: base
title:  'Statistics of nummod in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `nummod`

This relation is universal.

201 nodes (1%) are attached to their parents as `nummod`.

201 instances of `nummod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.0547263681592.

The following 2 pairs of parts of speech are connected with `nummod`: <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-NUM.html">NUM</a></tt> (200; 100% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nummod	color:blue
1	nč̣m	nč̣m	VERB	_	Mood=Sub|VerbClass=3lit	0	root	_	Hiero=(𓈖:𓆓)𓅓|SPC=Sub
2	ꞽb	ꞽb	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	Hiero=𓄣|MWE=Yes
3	n(.ꞽ)	n	ADJ	_	Case=Gen|Gender=Masc|Number=Sing	2	amod	_	Hiero=𓈖|Nisba=Prep
4	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	3	obl	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
5	[sp]	sp	NOUN	_	Gender=Masc|Number=Sing	1	obl	_	Hiero=𓊗
6	[2]	2	NUM	_	_	5	nummod	_	CARD|Hiero=𓏮

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nummod	color:blue
1	[č̣(ṭ)]	č̣ṭ	VERB	_	Gender=Masc|VerbClass=2lit|VerbForm=Inf	0	root	_	Hiero=No
2	[mṭw]	mṭw	NOUN	_	Gender=Masc|Number=Sing	1	obj	_	Hiero=No
3	[Wnꞽś]	Wnꞽś	PROPN	_	Gender=Masc	5	nsubj	_	Hiero=No|Name=King
4	[pꞽ]	pꞽ	DET	_	Gender=Masc|Number=Sing|PronType=Dem	5	cop	_	Dem|Hiero=No
5	[nꜤw]	nꜥw	NOUN	_	Gender=Masc|Number=Sing	1	ccomp	_	Hiero=No
6	[kꜣ]	kꜣ	NOUN	_	Gender=Masc|Number=Sing	5	appos	_	Hiero=No
7	[ꞽ:śšm]	śšmi̯	VERB	_	Gender=Masc|Number=Sing|Tense=Pres|VerbClass=4aeinf|VerbForm=Part	6	acl	_	ADJ|Hiero=No
8	Ꜥm	ꜥm	VERB	_	Gender=Masc|Number=Sing|Tense=Past|VerbClass=2lit|VerbForm=Part	7	conj	_	ADJ|Hiero=𓂝𓅓
9	ꞽꜤr.t	ꞽꜥr.t	NOUN	_	Gender=Fem|Number=Sing	8	obj	_	Hiero=𓇋(𓂝:𓂋:𓏏)𓆘
10	7.t	7.t	NUM	_	Gender=Fem	9	nummod	_	CARD|Hiero=𓐀:𓏏
11	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	nmod	_	Hiero=𓆑|Poss=Yes|Pron=SFP
12	ḫpr.n	ḫpr	VERB	_	SubForm=Pred|Tense=Past|VerbClass=3lit|VerbForm=Fin|Voice=Act	8	advcl	_	Hiero=(𓐍:𓊪)𓆣𓈖|SPC=Past-2
13	śfḫ.t{t}	śfḫ.t	NUM	_	Gender=Fem	12	nummod	_	CARD|Hiero=𓋴𓆑(:𓐍*𓏏)𓐀:𓏏
14	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	13	nmod	_	Hiero=𓆑|Poss=Yes|Pron=SFP
15	nḥb.[w]t	nḥb.t	NOUN	_	Gender=Fem|Number=Sing	13	appos	_	Hiero=(𓈖:𓅘)𓃀𓏏
16	[wč̣]	wč̣	VERB	_	Gender=Masc|Number=Sing|Tense=Pres|VerbClass=2lit|VerbForm=Part	7	conj	_	ADJ|Hiero=No
17	[mṭw]	mṭw	NOUN	_	Gender=Masc|Number=Sing	16	obj	_	Hiero=No|MWE=Yes
18	n	n	ADP	_	_	19	case	_	Hiero=𓈖|Status=Cons
19	śfḫ.t{t}	śfḫ.t	NUM	_	Gender=Fem	16	obl:arg	_	CARD|Hiero=𓋴𓆑(:𓐍*𓏏)𓐀:𓏏|NOUN
20	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nmod	_	Hiero=𓆑|Poss=Yes|Pron=SFP
21	pśč̣.(w)t	pśč̣.t	NOUN	_	Gender=Fem|Number=Plur	19	appos	_	Hiero=𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹𓊹
22	śč̣m.t	śč̣m	VERB	_	Gender=Fem|Number=Sing|Tense=Pres|VerbClass=3lit|VerbForm=Part	21	acl	_	ADJ|Hiero=𓋴(𓆓:𓄔)𓏏𓅓
23	mṭw	mṭw	NOUN	_	Gender=Masc|Number=Sing	22	obj	_	Hiero=(𓌃*𓅱:)𓂧|MWE=Yes
24	ꞽtꞽ.w	ꞽty	NOUN	_	Gender=Masc|Number=Sing	23	nmod:poss	_	Hiero=𓇋𓍘𓅱

~~~


