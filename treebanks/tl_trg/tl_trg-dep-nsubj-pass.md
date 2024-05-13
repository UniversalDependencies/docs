---
layout: base
title:  'Statistics of nsubj:pass in UD_Tagalog-TRG'
udver: '2'
---

## Treebank Statistics: UD_Tagalog-TRG: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="tl_trg-dep-nsubj.html">nsubj</a></tt>.
There are also 3 other language-specific subtypes of `nsubj`: <tt><a href="tl_trg-dep-nsubj-bfoc.html">nsubj:bfoc</a></tt>, <tt><a href="tl_trg-dep-nsubj-ifoc.html">nsubj:ifoc</a></tt>, <tt><a href="tl_trg-dep-nsubj-lfoc.html">nsubj:lfoc</a></tt>.

17 nodes (2%) are attached to their parents as `nsubj:pass`.

17 instances of `nsubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.64705882352941.

The following 2 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="tl_trg-pos-VERB.html">VERB</a></tt>-<tt><a href="tl_trg-pos-NOUN.html">NOUN</a></tt> (15; 88% instances), <tt><a href="tl_trg-pos-VERB.html">VERB</a></tt>-<tt><a href="tl_trg-pos-PRON.html">PRON</a></tt> (2; 12% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 nsubj:pass	color:blue
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
# visual-style 1 2 nsubj:pass	color:blue
1	Nakita	kita	VERB	_	Aspect=Perf|Mood=Ind|Voice=Pass	0	root	_	Gloss=seen
2	kita	ako	PRON	_	Case=Nom|Clusivity=In|Number=Dual|Person=1|PronType=Prs	1	nsubj:pass	_	Gloss=I|SpaceAfter=No
3	.	.	PUNCT	_	_	1	punct	_	_

~~~


