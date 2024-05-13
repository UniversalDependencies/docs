---
layout: base
title:  'Statistics of nmod:npmod in UD_English-GUMReddit'
udver: '2'
---

## Treebank Statistics: UD_English-GUMReddit: Relations: `nmod:npmod`

This relation is a language-specific subtype of <tt><a href="en_gumreddit-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gumreddit-dep-nmod-poss.html">nmod:poss</a></tt>, <tt><a href="en_gumreddit-dep-nmod-tmod.html">nmod:tmod</a></tt>.

1 nodes (0%) are attached to their parents as `nmod:npmod`.

1 instances of `nmod:npmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 1 pairs of parts of speech are connected with `nmod:npmod`: <tt><a href="en_gumreddit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gumreddit-pos-PRON.html">PRON</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:npmod	color:blue
1	_	_	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Discourse=joint-list_m:36->32:4:_|Entity=(50-abstract-new-cf1-8-disc(51-abstract-new-cf4-3-sgl|Lem=*LOWER*|Len=3
2	_	_	ADJ	JJ	Degree=Pos	3	amod	3:amod	Lem=_|Len=6|MSeg=act-ual
3	_	_	NOUN	NN	Number=Sing	8	nsubj	8:nsubj|9:nsubj:xsubj	Lem=_|Len=9|MSeg=struct-ure
4	_	_	ADP	IN	_	6	case	6:case	Lem=_|Len=2
5	_	_	DET	DT	Definite=Def|PronType=Art	6	det	6:det	Entity=(29-object-giv:inact-cf2-2-coref-International_Space_Station|Lem=_|Len=3
6	_	_	PROPN	NNP	Number=Sing|Typo=Yes	3	nmod	3:nmod:of	CorrectForm=ISS|Lem=ISS|Len=3|XML=<sic ana:::"ISS"></sic>
7	_	_	PRON	PRP	Gender=Neut|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	6	nmod:npmod	6:nmod:npmod	Entity=29)51)|Lem=_|Len=6|MSeg=it-self
8	_	_	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Lem=look|Len=5|MSeg=look-s
9	_	_	ADJ	JJ	Degree=Pos	8	xcomp	8:xcomp	Lem=_|Len=9|MSeg=differ-ent
10	_	_	ADP	IN	_	13	case	13:case	Lem=_|Len=2
11	_	_	ADJ	JJ	Degree=Pos	13	amod	13:amod	Entity=(52-object-new-cf5-3-sgl|Lem=_|Len=9|MSeg=differ-ent
12	_	_	PROPN	NNP	Abbr=Yes|Number=Sing|Typo=Yes	13	compound	13:compound	CorrectForm=NASA|Entity=(8-organization-giv:inact-cf3-1-coref-NASA)|Lem=NASA|Len=4|XML=<sic ana:::"NASA"></sic>
13	_	_	NOUN	NNS	Number=Plur	8	obl	8:obl:in	Entity=52)50)|Lem=picture|Len=8|MSeg=picture-s|SpaceAfter=No
14	_	_	PUNCT	,	_	18	punct	18:punct	Lem=_|Len=1
15	_	_	ADV	WRB	PronType=Int	18	advmod	18:advmod	Discourse=evaluation-comment:37->36:0:lex-indwd-306|Lem=_|Len=3
16	_	_	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	18	cop	18:cop	Lem=be|Len=2
17	_	_	PRON	DT	Number=Sing|PronType=Dem	18	nsubj	18:nsubj	Entity=(50-abstract-giv:act-cf1-1-coref)|Lem=_|Len=4
18	_	_	ADJ	JJ	Degree=Pos	8	parataxis	8:parataxis	Lem=_|Len=8|SpaceAfter=No
19	_	_	PUNCT	.	_	8	punct	8:punct	Lem=_|Len=1

~~~


