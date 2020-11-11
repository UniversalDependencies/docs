---
layout: base
title:  'Statistics of ccomp in UD_Tagalog-TRG'
udver: '2'
---

## Treebank Statistics: UD_Tagalog-TRG: Relations: `ccomp`

This relation is universal.

2 nodes (0%) are attached to their parents as `ccomp`.

2 instances of `ccomp` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.

The following 2 pairs of parts of speech are connected with `ccomp`: <tt><a href="tl_trg-pos-VERB.html">VERB</a></tt>-<tt><a href="tl_trg-pos-ADV.html">ADV</a></tt> (1; 50% instances), <tt><a href="tl_trg-pos-VERB.html">VERB</a></tt>-<tt><a href="tl_trg-pos-VERB.html">VERB</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Itinanong	tanong	VERB	_	Aspect=Perf|Mood=Ind|Voice=Pass	0	root	_	Gloss=asked
2	ko	ako	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	1	nsubj	_	Gloss=me
3	kung	kung	SCONJ	_	_	4	mark	_	Gloss=that
4	nasaan	nasaan	ADV	_	PronType=Int	1	ccomp	_	Gloss=where
5	sila	sila	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	Gloss=they|SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 ccomp	color:blue
1	Gusto	gusto	VERB	_	Aspect=Hab|Voice=Pass	0	root	_	Gloss=want
2	ni	ni	ADP	_	Case=Gen	3	case	_	Gloss=DET
3	Juan	Juan	PROPN	_	Gender=Masc|Link=Yes	1	obj:agent	_	Gloss=Juan|MGloss=John(LINK)
4	suriin	suri	VERB	_	Aspect=Perf|Mood=Ind|Voice=Pass	1	ccomp	_	Gloss=examine|MSeg=suri-in|MGloss=examine-OP
5	siya	siya	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj:pass	_	Gloss=he|MGloss=he(PIV)
6	ng	ng	ADP	_	Case=Gen	7	case	_	Gloss=DET|MGloss=ACT
7	doktor	doktor	NOUN	_	_	4	obj:agent	_	Gloss=doctor|SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~


