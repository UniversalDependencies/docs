---
layout: base
title:  'Statistics of obj:agent in UD_Tagalog-TRG'
udver: '2'
---

## Treebank Statistics: UD_Tagalog-TRG: Relations: `obj:agent`

This relation is a language-specific subtype of <tt><a href="tl_trg-dep-obj.html">obj</a></tt>.

28 nodes (4%) are attached to their parents as `obj:agent`.

28 instances of `obj:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.67857142857143.

The following 3 pairs of parts of speech are connected with `obj:agent`: <tt><a href="tl_trg-pos-VERB.html">VERB</a></tt>-<tt><a href="tl_trg-pos-NOUN.html">NOUN</a></tt> (13; 46% instances), <tt><a href="tl_trg-pos-VERB.html">VERB</a></tt>-<tt><a href="tl_trg-pos-PRON.html">PRON</a></tt> (12; 43% instances), <tt><a href="tl_trg-pos-VERB.html">VERB</a></tt>-<tt><a href="tl_trg-pos-PROPN.html">PROPN</a></tt> (3; 11% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj:agent	color:blue
1	Ginising	gising	VERB	_	Aspect=Perf|Mood=Ind|Voice=Pass	0	root	_	Gloss=awakened
2	ng	ng	ADP	_	Case=Gen	3	case	_	_
3	ingay	ingay	NOUN	_	_	1	obj:agent	_	Gloss=noise
4	ang	ang	ADP	_	Case=Nom	5	case	_	Gloss=the
5	bata	bata	NOUN	_	_	1	nsubj:pass	_	Gloss=child|SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj:agent	color:blue
1	Sinulat	sulat	VERB	_	Aspect=Perf|Mood=Ind|Voice=Pass	0	root	_	Gloss=written
2	ko	ako	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	1	obj:agent	_	Gloss=I
3	ang	ang	ADP	_	Case=Nom	4	case	_	Gloss=the
4	liham	liham	NOUN	_	_	1	nsubj:pass	_	Gloss=letter|SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obj:agent	color:blue
1	Ipinansulat	sulat	VERB	_	Aspect=Perf|Mood=Ind|Voice=Ifoc	0	root	_	Gloss=wrote-with
2	ni	ni	ADP	_	Case=Gen	3	case	_	Gloss=DET
3	John	John	PROPN	_	Gender=Masc	1	obj:agent	_	Gloss=John
4	ng	ng	ADP	_	Case=Gen	5	case	_	Gloss=DET
5	liham	liham	NOUN	_	_	1	obj	_	Gloss=letter
6	kay	kay	ADP	_	Case=Dat	7	case	_	Gloss=to
7	Mary	Mary	PROPN	_	Gender=Fem	1	obl	_	Gloss=Mary
8	ang	ang	ADP	_	Case=Nom	9	case	_	Gloss=the|MGloss=PIV
9	makinilya	makinilya	NOUN	_	_	1	nsubj:ifoc	_	Gloss=typewriter|SpaceAfter=No
10	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~


