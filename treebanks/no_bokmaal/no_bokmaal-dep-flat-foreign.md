---
layout: base
title:  'Statistics of flat:foreign in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `flat:foreign`

This relation is a language-specific subtype of <tt><a href="no_bokmaal-dep-flat.html">flat</a></tt>.
There are also 1 other language-specific subtypes of `flat`: <tt><a href="no_bokmaal-dep-flat-name.html">flat:name</a></tt>.

590 nodes (0%) are attached to their parents as `flat:foreign`.

590 instances of `flat:foreign` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.57457627118644.

The following 1 pairs of parts of speech are connected with `flat:foreign`: <tt><a href="no_bokmaal-pos-X.html">X</a></tt>-<tt><a href="no_bokmaal-pos-X.html">X</a></tt> (590; 100% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:foreign	color:blue
1	Jeg	jeg	PRON	pron	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	går	gå	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	til	til	ADP	prep	_	4	case	_	_
4	Museo	Museo	X	subst	Foreign=Yes	2	obl	_	_
5	del	del	X	ukjent	Foreign=Yes	4	flat:foreign	_	_
6	Castello	Castello	PROPN	subst	_	4	flat:name	_	_
7	Sforzesco	Sforzesco	PROPN	subst	_	4	flat:name	_	_
8	i	i	ADP	prep	_	9	case	_	_
9	Milano	Milano	PROPN	subst	_	4	nmod	_	SpaceAfter=No
10	.	$.	PUNCT	clb	_	2	punct	_	_

~~~


