---
layout: base
title:  'Statistics of csubj:pass in UD_Tigrinya-TiTB'
udver: '2'
---

## Treebank Statistics: UD_Tigrinya-TiTB: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ti_titb-dep-csubj.html">csubj</a></tt>.
There are also 2 other language-specific subtypes of `csubj`: <tt><a href="ti_titb-dep-csubj-cleft.html">csubj:cleft</a></tt>, <tt><a href="ti_titb-dep-csubj-outer.html">csubj:outer</a></tt>.

2 nodes (0%) are attached to their parents as `csubj:pass`.

2 instances of `csubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 2 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="ti_titb-pos-VERB.html">VERB</a></tt>-<tt><a href="ti_titb-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 csubj:pass	color:blue
1	ሃብታም	ሃብታም	ADJ	ADJ	Number=Sing	2	xcomp:pred	_	Translit=habtam
2	ምዃን	ምዃን	NOUN	NOUN	Number=Sing|VerbForm=Vnoun	4	csubj:pass	_	_
3	ኣ	ኣ	DET	DET	Gender=Fem|Number=Sing|Person=3|Poss=Yes|PronType=Prs	2	det:poss	_	_
4	ተፈሊጡ	ተፈልጠ	VERB	VERB	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Pass	0	root	_	Translit=təfəlit'u
5	።	።	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 csubj:pass	color:blue
1	ሃብታም	ሃብታም	ADJ	ADJ	Number=Sing	4	xcomp:pred	_	Translit=habtam
2	ከም	ከም	ADP	ADP	_	4	mark	_	Translit=kəm
3	ዝ	ዝ	SCONJ	SCONJ	_	4	mark	_	_
4	ኮነት	ኮነ	VERB	VERB	Aspect=Perf|Gender=Fem|Number=Sing|Person=3	5	csubj:pass	_	_
5	ተፈሊጡ	ተፈልጠ	VERB	VERB	Gender=Masc|Number=Sing|Person=3|VerbForm=Conv|Voice=Pass	0	root	_	Translit=təfəlit'u
6	።	።	PUNCT	PUNCT	_	5	punct	_	_

~~~


