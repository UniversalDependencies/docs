---
layout: base
title:  'Statistics of nsubj:outer in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="egy_ujaen-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="egy_ujaen-dep-nsubj-pass.html">nsubj:pass</a></tt>.

8 nodes (0%) are attached to their parents as `nsubj:outer`.

5 instances of `nsubj:outer` (63%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (5; 63% instances), <tt><a href="egy_ujaen-pos-PART.html">PART</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (2; 25% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:outer	color:blue
1	ḥtp.t	ḥtp.t	NOUN	_	Gender=Fem|Number=Sing	2	nsubj:outer	_	Hiero=𓊵(:𓏏*𓊪)(𓏏:𓏝)
2	mꜣꜣ.t	mꜣꜣ	VERB	NOUN|VerbForm=RelForm|Tense=Pres	Gender=Fem|Number=Sing|Tense=Pres|VerbForm=Fin	0	root	_	Hiero=(𓌴:𓁹)𓄿𓏏𓄿
3	⸗k	k	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=2|PronType=Prs	2	nsubj	_	Hiero=𓎡

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:outer	color:blue
1	n	n	PART	Neg	PartType=Neg	0	root	_	Hiero=𓂜
2	ḥm.wt(ꞽ)	ḥmi̯	NOUN	_	Tense=Fut|VerbForm=Part	1	nsubj:outer	_	Hiero=𓈟𓅓𓅱𓏏
3	⸗f(ꞽ)	f	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	expl	_	Hiero=𓆑
4	nb	nb	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	Hiero=𓎟

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	4	nsubj:outer	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺
2	pꞽ	pw	DET	Dem	Gender=Masc|Number=Sing|PronType=Dem	4	cop	_	Hiero=𓊪𓇋
3	wnn.t	wnn.t	PART	_	PartType=Emp	4	advmod	_	Hiero=(𓃹:𓈖:𓈖)𓏏
4	rč̣	rč̣i̯	VERB	SPC=Fut	Tense=Fut	0	root	_	Hiero=𓂋:𓏙
5	⸗f	f	PRON	Pron=SFP	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	Hiero=𓆑
6	tʾ	tʾ	NOUN	Hierocl=Yes	Gender=Masc|Number=Sing	4	obj	_	Hiero=𓏏:𓏐
7	n	n	ADP	Status=Cons	Case=Dat	8	case	_	Hiero=𓈖
8	n.t(ꞽ)w	n.t	NOUN	Nisba=Noun|Hierocl=Yes	Gender=Masc|Number=Plur	4	iobj	_	Hiero=(𓈖:𓅂)𓏤

~~~


