---
layout: base
title:  'Statistics of nsubj in UD_Old_English-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Old_English-Cairo: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="ang_cairo-dep-nsubj-pass.html">nsubj:pass</a></tt>.

24 nodes (14%) are attached to their parents as `nsubj`.

22 instances of `nsubj` (92%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75.

The following 6 pairs of parts of speech are connected with `nsubj`: <tt><a href="ang_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ang_cairo-pos-PRON.html">PRON</a></tt> (16; 67% instances), <tt><a href="ang_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ang_cairo-pos-NOUN.html">NOUN</a></tt> (3; 13% instances), <tt><a href="ang_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ang_cairo-pos-PROPN.html">PROPN</a></tt> (2; 8% instances), <tt><a href="ang_cairo-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ang_cairo-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="ang_cairo-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ang_cairo-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="ang_cairo-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ang_cairo-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Ic	ic	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	Gloss=I|Hyperlemma=I|Root=*eǵh₂
2	þence	þencan	VERB	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=think|Hyperlemma=think|Root=*teng
3	þæt	þæt	SCONJ	IN	_	5	mark	_	Gloss=that|Hyperlemma=that|Root=*tod
4	hit	hit	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3	5	nsubj	_	Gloss=it|Hyperlemma=it|Root=*ḱey
5	reȝnaþ	reȝnian	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|VerbForm=Fin	2	ccomp	_	Gloss=rains|Hyperlemma=rain|Root=*Hreǵʰ|SpaceAfter=No
6	.	.	PUNCT	.	_	2	punct	_	Gloss=.|Hyperlemma=.|Root=_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	Þæt	se	DET	DT	Case=Nom|Gender=Neut|Number=Sing	2	det	_	Gloss=the|Hyperlemma=the|Root=*so
2	mæden	mæden	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	3	nsubj	_	Gloss=girl|Hyperlemma=maiden|Root=*mogʰ
3	ƿrat	ƿritan	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=wrote|Hyperlemma=write|Root=*wrey
4	hyre	heo	PRON	PRP$	Case=Gen|Gender=Fem|Number=Sing	5	nmod:poss	_	Gloss=her|Hyperlemma=she|Root=*ḱey
5	freonde	freond	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing	3	iobj	_	Gloss=friend|Hyperlemma=friend|Root=*preyH
6	ærend-ƿrit	ærend-ƿrit	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	3	obj	_	Gloss=letter|Hyperlemma=errand-writ|Root=*h₂eyeri-wrey|SpaceAfter=No
7	.	.	PUNCT	.	_	3	punct	_	Gloss=.|Hyperlemma=.|Root=_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	Maria	Maria	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	_	Gloss=Maria|Hyperlemma=Maria|Root=_
2	ȝeƿann	ȝeƿinnan	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	Gloss=won|Hyperlemma=ȝeƿinnan|Root=*gʷʰen
3	ær	ær	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	2	obj	_	Gloss=bronze|Hyperlemma=ore|Root=*h₂ey|SpaceAfter=No
4	,	,	PUNCT	,	_	5	punct	_	Gloss=,|Hyperlemma=,|Root=_
5	Petrus	Petrus	PROPN	NNP	Case=Nom|Gender=Masc|Number=Sing	2	conj	_	Gloss=Petrus|Hyperlemma=Petrus|Root=_
6	seolfor	seolfor	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	5	orphan	_	Gloss=silver|Hyperlemma=silver|Root=*silubr
7	and	and	CCONJ	CC	_	8	cc	_	Gloss=and|Hyperlemma=and|Root=*h₂énti
8	Iohanna	Iohanna	PROPN	NNP	Case=Nom|Gender=Fem|Number=Sing	2	conj	_	Gloss=Iohanna|Hyperlemma=Iohanna|Root=_
9	gold	gold	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	8	orphan	_	Gloss=gold|Hyperlemma=gold|Root=*ǵʰĺ̥tom|SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	_	Gloss=.|Hyperlemma=.|Root=_

~~~


