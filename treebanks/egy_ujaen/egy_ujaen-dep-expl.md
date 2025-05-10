---
layout: base
title:  'Statistics of expl in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `expl`

This relation is universal.
There are 1 language-specific subtypes of `expl`: <tt><a href="egy_ujaen-dep-expl-pv.html">expl:pv</a></tt>.

19 nodes (0%) are attached to their parents as `expl`.

15 instances of `expl` (79%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `expl`: <tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt>-<tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> (12; 63% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PRON.html">PRON</a></tt> (7; 37% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 expl	color:blue
1	nꞽ	nꞽ	PART	_	PartType=Neg	0	root	_	Hiero=𓂜|Neg
2	śbꜣ	śbꜣ	NOUN	_	Gender=Masc|Number=Sing	1	nsubj	_	Hiero=𓋴𓃀𓇼
3	nčr(.ꞽ)	nčr	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	Hiero=𓊹|Nisba=Noun|TransHon=Yes
4	ꞽw.tꞽ	ꞽw.tꞽ	PRON	_	Gender=Masc|Number=Sing|Polarity=Neg|PronType=Rel	5	expl	_	Hiero=𓇋𓅱𓂜𓍘
5	rmnw.tꞽ	rmnw.tꞽ	NOUN	_	Gender=Masc|Number=Sing	2	acl:relcl	_	Hiero=(UC_139C3:𓏌)𓍘
6	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	nmod	_	Hiero=𓆑|Poss=Yes|Pron=SFP

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 expl	color:blue
1	nčr(.w)	nčr	NOUN	_	Gender=Masc|Number=Plur	2	vocative	_	Hiero=𓊹𓊹𓊹
2	pẖr	pẖr	VERB	_	Mood=Imp|Number=Plur|VerbClass=3lit	0	root	_	Hiero=𓊪(𓄲:𓂋)
3	n	n	ADP	_	_	4	case	_	Hiero=𓈖|Status=Cons
4	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	2	obl:arg	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
5	nḥb.t(ꞽ)	nḥb	VERB	_	Tense=Fut|VerbClass=3lit|VerbForm=Part	4	acl	_	ADJ|Hiero=(𓈖:𓅘)𓃀𓏏𓏝|Hierocl=Yes
6	⸗f	⸗f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	5	expl	_	Hiero=𓆑|Pron=SFP
7	kꜣ(.w)	kꜣ	NOUN	_	Gender=Masc|Number=Plur	5	obj	_	Hiero=(𓂓*𓂓:)𓂓
8	⸗čn	čn	PRON	_	Gender=Com|Number=Plur|Person=2|PronType=Prs	7	nmod	_	Hiero=𓍿:𓈖|Poss=Yes|Pron=SFP
9	|	|	PUNCT	_	_	2	punct	_	_|LINE

~~~


