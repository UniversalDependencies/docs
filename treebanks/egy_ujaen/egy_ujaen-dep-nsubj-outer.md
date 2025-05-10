---
layout: base
title:  'Statistics of nsubj:outer in UD_Egyptian-UJaen'
udver: '2'
---

## Treebank Statistics: UD_Egyptian-UJaen: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="egy_ujaen-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="egy_ujaen-dep-nsubj-pass.html">nsubj:pass</a></tt>.

4 nodes (0%) are attached to their parents as `nsubj:outer`.

3 instances of `nsubj:outer` (75%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="egy_ujaen-pos-PART.html">PART</a></tt>-<tt><a href="egy_ujaen-pos-NOUN.html">NOUN</a></tt> (2; 50% instances), <tt><a href="egy_ujaen-pos-VERB.html">VERB</a></tt>-<tt><a href="egy_ujaen-pos-PROPN.html">PROPN</a></tt> (2; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 nsubj:outer	color:blue
1	nꞽ	nꞽ	PART	_	PartType=Neg	0	root	_	Hiero=𓂜|Neg
2	ḥm.wt(ꞽ)	ḥmi̯	NOUN	_	Tense=Fut|VerbClass=3aeinf|VerbForm=Part	1	nsubj:outer	_	Hiero=𓈟𓅓𓅱𓏏
3	⸗f(ꞽ)	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	expl	_	Hiero=𓆑|Pron=SFP
4	nb	nb	ADJ	_	Gender=Masc|Number=Sing	2	amod	_	Hiero=𓎟

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:outer	color:blue
1	Wnꞽś	Wnꞽś	PROPN	_	Gender=Masc	4	nsubj:outer	_	Hiero=𓍹(𓃹:𓈖)𓇋𓋴𓍺|Name=King
2	pꞽ	pw	DET	_	Gender=Masc|Number=Sing|PronType=Dem	4	cop	_	Dem|Hiero=𓊪𓇋
3	wnn.t	wnn.t	PART	_	PartType=Emp	4	advmod	_	Hiero=(𓃹:𓈖:𓈖)𓏏
4	rč̣	rč̣i̯	VERB	_	Tense=Fut|VerbClass=Anom|VerbForm=Fin|Voice=Act	0	root	_	Hiero=𓂋:𓏙|SPC=Fut
5	⸗f	f	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	Hiero=𓆑|Pron=SFP
6	tʾ	tʾ	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	Hiero=𓏏:𓏐|Hierocl=Yes
7	n	n	ADP	_	_	8	case	_	Hiero=𓈖|Status=Cons
8	n.t(ꞽ)w	n.t	NOUN	_	Gender=Masc|Number=Plur	4	obl:arg	_	Hiero=(𓈖:𓅂)𓏤|Hierocl=Yes|Nisba=Noun

~~~


