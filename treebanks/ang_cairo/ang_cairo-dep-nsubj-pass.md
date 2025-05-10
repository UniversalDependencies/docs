---
layout: base
title:  'Statistics of nsubj:pass in UD_Old_English-Cairo'
udver: '2'
---

## Treebank Statistics: UD_Old_English-Cairo: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="ang_cairo-dep-nsubj.html">nsubj</a></tt>.

2 nodes (1%) are attached to their parents as `nsubj:pass`.

2 instances of `nsubj:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.5.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="ang_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ang_cairo-pos-PRON.html">PRON</a></tt> (1; 50% instances), <tt><a href="ang_cairo-pos-VERB.html">VERB</a></tt>-<tt><a href="ang_cairo-pos-PROPN.html">PROPN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 nsubj:pass	color:blue
1	Þis	þis	DET	DT	Case=Nom|Gender=Neut|Number=Sing	2	det	_	Gloss=This|Hyperlemma=this|Root=*so
2	ærend-ƿrit	ærende-writ	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	5	nsubj	_	Gloss=letter|Hyperlemma=errand-writ|Root=*wrey
3	is	beon	AUX	VBZ	Number=Sing	5	cop	_	Gloss=is|Hyperlemma=be|Root=*h₁ésti
4	fram	fram	ADP	IN	_	5	case	_	Gloss=from|Hyperlemma=from|Root=*prom
5	Petere	Petrus	PROPN	NNP	Case=Dat|Gender=Masc|Number=Sing	0	root	_	Gloss=Petrus|Hyperlemma=Petrus|Root=pétros
6	and	and	CCONJ	CC	_	9	cc	_	Gloss=and|Hyperlemma=and|Root=*h₂énti
7	hit	hit	PRON	PRP	Case=Nom|Gender=Neut|Number=Sing|Person=3	9	nsubj:pass	_	Gloss=it|Hyperlemma=it|Root=*ḱey
8	ƿæs	ƿesan	AUX	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	9	aux:pass	_	Gloss=was|Hyperlemma=be|Root=*h₂wes
9	ȝebroht	bringan	VERB	VBN	VerbForm=Part	5	conj	_	Gloss=brought|Hyperlemma=bring|Root=*bʰrenk
10	ȝierstan-dæg	ȝierstan-dæg	NOUN	NN	Gender=Masc|Number=Sing	9	obl:unmarked	_	Gloss=yesterday|Hyperlemma=yesterday|Root=*dʰǵʰyésteros|SpaceAfter=No
11	.	.	PUNCT	.	_	5	punct	_	Gloss=.|Hyperlemma=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:pass	color:blue
1	Ne	ne	CCONJ	CC	_	2	cc:preconj	_	Gloss=neither|Hyperlemma=not|Root=*ne
2	Petrus	Petrus	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	9	nsubj:pass	_	Gloss=Petrus|Hyperlemma=Petrus|Root=_
3	Smiþ	Smiþ	PROPN	NNP	Case=Acc|Gender=Masc|Number=Sing	2	flat	_	Gloss=Smith|Hyperlemma=Smith|Root=*smey
4	ne	ne	CCONJ	CC	_	5	cc	_	Gloss=nor|Hyperlemma=not|Root=*ne
5	Maria	Maria	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing	2	conj	_	Gloss=Mary|Hyperlemma=Mary|Root=_
6	Brun	Brun	PROPN	NNP	Case=Acc|Gender=Fem|Number=Sing	5	flat	_	Gloss=Brown|Hyperlemma=Brown|Root=_
7	mihton	magan	AUX	MD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	9	aux	_	Gloss=could|Hyperlemma=may|Root=*magan
8	beon	beon	AUX	VB	VerbForm=Inf	9	aux:pass	_	Gloss=be|Hyperlemma=be|Root=*h₂wes
9	ȝecorene	ceosan	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	Gloss=selected|Hyperlemma=choose|Root=*ḱóm-ǵews|SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	Gloss=.|Hyperlemma=.

~~~


