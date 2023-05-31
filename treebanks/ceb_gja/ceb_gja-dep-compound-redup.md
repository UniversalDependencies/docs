---
layout: base
title:  'Statistics of compound:redup in UD_Cebuano-GJA'
udver: '2'
---

## Treebank Statistics: UD_Cebuano-GJA: Relations: `compound:redup`

This relation is a language-specific subtype of <tt><a href="ceb_gja-dep-compound.html">compound</a></tt>.

3 nodes (0%) are attached to their parents as `compound:redup`.

3 instances of `compound:redup` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.

The following 2 pairs of parts of speech are connected with `compound:redup`: <tt><a href="ceb_gja-pos-VERB.html">VERB</a></tt>-<tt><a href="ceb_gja-pos-VERB.html">VERB</a></tt> (2; 67% instances), <tt><a href="ceb_gja-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ceb_gja-pos-ADJ.html">ADJ</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 compound:redup	color:blue
1	Naghuna	huna	VERB	_	Aspect=Perf|Mood=Ind|Voice=Act	3	compound:redup	_	Gloss=think|SpaceAfter=No
2	-	-	PUNCT	_	_	3	punct	_	Gloss=-|SpaceAfter=No
3	huna	huna	VERB	_	_	0	root	_	Gloss=think
4	ko	ako	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=I
5	nga	nga	PART	_	_	6	mark	_	Gloss=LINK
6	moadto	adto	VERB	_	Aspect=Imp|Mood=Ind|Voice=Act	3	ccomp	_	Gloss=will.go
7	ko	ako	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	6	nsubj	_	Gloss=I|SpaceAfter=No
8	.	.	PUNCT	_	_	6	punct	_	Gloss=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 compound:redup	color:blue
1	Gidungog	dungog	VERB	_	Aspect=Perf|Mood=Ind|Voice=Pass	0	root	_	Gloss=was.known
2	nga	nga	PART	_	_	3	mark	_	Gloss=LINK
3	adis	adis	ADJ	_	Degree=Pos	5	compound:redup	_	Gloss=addict
4	-	-	PUNCT	_	_	5	punct	_	Gloss=-
5	adis	adis	ADJ	_	Degree=Pos	1	amod	_	Gloss=addict
6	si	si	ADP	_	Case=Nom	7	case	_	_
7	Tom	Tom	PROPN	_	Gender=Masc	5	nsubj	_	Gloss=Tom|SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~


