---
layout: base
title:  'Statistics of xcomp in UD_Tatar-NMCTT'
udver: '2'
---

## Treebank Statistics: UD_Tatar-NMCTT: Relations: `xcomp`

This relation is universal.

18 nodes (1%) are attached to their parents as `xcomp`.

18 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.44444444444444.

The following 2 pairs of parts of speech are connected with `xcomp`: <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-NOUN.html">NOUN</a></tt> (11; 61% instances), <tt><a href="tt_nmctt-pos-VERB.html">VERB</a></tt>-<tt><a href="tt_nmctt-pos-ADJ.html">ADJ</a></tt> (7; 39% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 xcomp	color:blue
1	Ә	ә	CCONJ	_	_	5	cc	_	LangID=TT
2	милләтле	милләтле	ADJ	_	_	3	amod	_	LangID=TT
3	халык	халык	NOUN	_	Case=Nom|Number=Sing	5	nsubj	_	LangID=TT
4	телле	телле	NOUN	_	_	5	xcomp	_	LangID=TT
5	булырга	бул	VERB	_	VerbForm=Inf	0	root	_	LangID=TT
6	тиеш	тиеш	AUX	_	_	5	aux	_	LangID=TT|SpaceAfter=No
7	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 xcomp	color:blue
1	Ихтыяҗ	ихтыяҗ	ADJ	_	_	2	xcomp	_	LangID=TT
2	булса	бул	VERB	_	Mood=Cnd|Person=3|VerbForm=Conv	6	advcl	_	LangID=TT|SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	LangID=OTHER
4	аларның	ул	PRON	_	Case=Gen|Number=Plur|PronType=Prs	5	nmod	_	LangID=TT
5	саны	сан	NOUN	_	Case=Nom|Number=Sing|Person[psor]=3	6	nsubj	_	LangID=TT
6	арттырылачак	арт	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Part|Voice=CauPass	0	root	_	LangID=TT|SpaceAfter=No
7	.	.	PUNCT	_	_	6	punct	_	LangID=OTHER

~~~


