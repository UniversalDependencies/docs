---
layout: base
title:  'Statistics of csubj in UD_Cebuano-GJA'
udver: '2'
---

## Treebank Statistics: UD_Cebuano-GJA: Relations: `csubj`

This relation is universal.

2 nodes (0%) are attached to their parents as `csubj`.

1 instances of `csubj` (50%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `csubj`: <tt><a href="ceb_gja-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ceb_gja-pos-ADJ.html">ADJ</a></tt> (1; 50% instances), <tt><a href="ceb_gja-pos-VERB.html">VERB</a></tt>-<tt><a href="ceb_gja-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Ang	ang	ADP	_	Case=Nom	2	case	_	Gloss=the
2	babaye	babaye	NOUN	_	Gender=Fem	0	root	_	Gloss=woman
3	ang	ang	ADP	_	Case=Nom	4	case	_	_
4	gwapa	gwapa	ADJ	_	Degree=Pos|Gender=Fem	2	csubj	_	Gloss=beautiful|SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	Gloss=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	Ang	ang	ADP	_	Case=Nom	3	case	_	Gloss=The
2	mga	mga	DET	_	Number=Plur	3	det	_	Gloss=PLUR
3	bata	bata	NOUN	_	_	6	csubj	_	Gloss=children
4	niya	siya	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	3	nmod	_	Gloss=his
5	ang	ang	ADP	_	Case=Nom	6	case	_	_
6	musayaw	sayaw	VERB	_	Aspect=Imp|Mood=Ind|Voice=Act	0	root	_	Gloss=going.to.dance|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	Gloss=.

~~~


