---
layout: base
title:  'Statistics of nmod in UD_Tagalog-TRG'
udver: '2'
---

## Treebank Statistics: UD_Tagalog-TRG: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="tl_trg-dep-nmod-poss.html">nmod:poss</a></tt>.

7 nodes (1%) are attached to their parents as `nmod`.

5 instances of `nmod` (71%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `nmod`: <tt><a href="tl_trg-pos-PRON.html">PRON</a></tt>-<tt><a href="tl_trg-pos-PRON.html">PRON</a></tt> (5; 71% instances), <tt><a href="tl_trg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tl_trg-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="tl_trg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tl_trg-pos-DET.html">DET</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 nmod	color:blue
1	Inahit	ahit	VERB	_	Aspect=Perf|Mood=Ind|Voice=Pass	0	root	_	Gloss=shaved
2	ni	ni	ADP	_	Case=Gen	3	case	_	Gloss=DET
3	John	John	PROPN	_	Gender=Masc	1	nsubj	_	Gloss=John
4	ang	ang	ADP	_	Case=Nom	5	case	_	Gloss=the|MGloss=PIV
5	sarili	sarili	PRON	_	PronType=Prs|Reflex=Yes	1	obj	_	Gloss=self
6	niya	siya	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	5	nmod	_	Gloss=him|SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 nmod	color:blue
1	Iniabot	abot	VERB	_	Aspect=Perf|Mood=Ind|Voice=Pass	0	root	_	Gloss=handed|MSeg=in-i-abot|MGloss=PERF-OP-hand
2	niya	siya	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	1	obj:agent	_	Gloss=him|MGloss=he(ACT)
3	sa	sa	ADP	_	Case=Dat	4	case	_	Gloss=to
4	bata	bata	NOUN	_	_	1	obl	_	Gloss=child
5	ang	ang	ADP	_	Case=Nom	8	case	_	Gloss=the|MGloss=PIV
6	kaniyang	siya	PRON	_	Case=Dat|Link=Yes|Number=Sing|Person=3|PronType=Prs	7	nmod	_	Gloss=him|MSeg=kaniya-ng|MGloss=his-LINK
7	sariling	sarili	PRON	_	Link=Yes|PronType=Prs|Reflex=Yes	8	nmod	_	Gloss=self|MSeg=sarili-ng|MGloss=self-LINK
8	larawan	larawan	NOUN	_	_	1	nsubj:pass	_	Gloss=picture|SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nmod	color:blue
1	Inahit	ahit	VERB	_	Aspect=Perf|Mood=Ind|Voice=Pass	0	root	_	Gloss=shaved
2	ni	ni	ADP	_	Case=Gen	3	case	_	Gloss=DET
3	John	John	PROPN	_	Gender=Masc	1	nsubj	_	Gloss=John
4	mismo	mismo	DET	_	Gender=Masc|PronType=Emp	3	nmod	_	Gloss=EMPH
5	si	si	ADP	_	Case=Nom	6	case	_	Gloss=the
6	Bill	Bill	PROPN	_	Gender=Masc	1	obj	_	Gloss=Bill|SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~


