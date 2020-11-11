---
layout: base
title:  'Statistics of nsubj:lfoc in UD_Tagalog-TRG'
udver: '2'
---

## Treebank Statistics: UD_Tagalog-TRG: Relations: `nsubj:lfoc`

This relation is a language-specific subtype of <tt><a href="tl_trg-dep-nsubj.html">nsubj</a></tt>.
There are also 3 other language-specific subtypes of `nsubj`: <tt><a href="tl_trg-dep-nsubj-bfoc.html">nsubj:bfoc</a></tt>, <tt><a href="tl_trg-dep-nsubj-ifoc.html">nsubj:ifoc</a></tt>, <tt><a href="tl_trg-dep-nsubj-pass.html">nsubj:pass</a></tt>.

6 nodes (1%) are attached to their parents as `nsubj:lfoc`.

6 instances of `nsubj:lfoc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 3 pairs of parts of speech are connected with `nsubj:lfoc`: <tt><a href="tl_trg-pos-VERB.html">VERB</a></tt>-<tt><a href="tl_trg-pos-NOUN.html">NOUN</a></tt> (4; 67% instances), <tt><a href="tl_trg-pos-VERB.html">VERB</a></tt>-<tt><a href="tl_trg-pos-PRON.html">PRON</a></tt> (1; 17% instances), <tt><a href="tl_trg-pos-VERB.html">VERB</a></tt>-<tt><a href="tl_trg-pos-PROPN.html">PROPN</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 nsubj:lfoc	color:blue
1	Binigyan	bigay	VERB	_	Aspect=Perf|Mood=Ind|Voice=Lfoc	0	root	_	Gloss=given
2	ng	ng	ADP	_	Case=Gen	3	case	_	_
3	titser	titser	NOUN	_	_	1	obj:agent	_	Gloss=teacher
4	ng	ng	ADP	_	Case=Gen	3	case	_	_
5	premyo	premyo	NOUN	_	_	1	iobj	_	Gloss=prize
6	ang	ang	ADP	_	Case=Nom	7	case	_	Gloss=the
7	istudyante	istudyante	NOUN	_	_	1	nsubj:lfoc	_	Gloss=student|SpaceAfter=No
8	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 nsubj:lfoc	color:blue
1	Bigyan	bigay	VERB	_	Mood=Imp|Voice=Lfoc	0	root	_	Gloss=give|MSeg=bigy-an|MGloss=give-DP
2	mo	ikaw	PRON	_	Case=Gen|Number=Sing|Person=2|PronType=Prs	1	obj:agent	_	Gloss=you|MGloss=you(ACT)
3	siya	siya	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	1	nsubj:lfoc	_	Gloss=he|MGloss=him(PIV)
4	ng	ng	ADP	_	Case=Gen	5	case	_	Gloss=DET
5	kape	kape	NOUN	_	_	1	iobj:patient	_	Gloss=coffee|SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	Gloss=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nsubj:lfoc	color:blue
1	Binalikan	balik	VERB	_	Aspect=Perf|Mood=Ind|Voice=Lfoc	0	root	_	Gloss=returned
2	niya	siya	PRON	_	Case=Gen|Number=Sing|Person=3|PronType=Prs	1	obj:agent	_	Gloss=he/she
3	ang	ang	ADP	_	Case=Nom	4	case	_	Gloss=the
4	Maynila	Maynila	PROPN	_	_	1	nsubj:lfoc	_	Gloss=Manila|SpaceAfter=No
5	.	.	PUNCT	_	_	1	punct	_	_

~~~


