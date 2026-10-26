---
layout: base
title:  'Statistics of parataxis:discourse in UD_Belarusian-HSE'
udver: '2'
---

## Treebank Statistics: UD_Belarusian-HSE: Relations: `parataxis:discourse`

This relation is a language-specific subtype of <tt><a href="be_hse-dep-parataxis.html">parataxis</a></tt>.

7 nodes (0%) are attached to their parents as `parataxis:discourse`.

7 instances of `parataxis:discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.

The following 2 pairs of parts of speech are connected with `parataxis:discourse`: <tt><a href="be_hse-pos-VERB.html">VERB</a></tt>-<tt><a href="be_hse-pos-ADV.html">ADV</a></tt> (5; 71% instances), <tt><a href="be_hse-pos-NOUN.html">NOUN</a></tt>-<tt><a href="be_hse-pos-ADV.html">ADV</a></tt> (2; 29% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 parataxis:discourse	color:blue
1	Карацей	карацей	ADV	RBR	Degree=Cmp	3	parataxis:discourse	3:parataxis:discourse	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	1:punct	_
3	ёсць	быць	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	што	што	PRON	WP	Animacy=Inan|Case=Acc|Gender=Neut|Number=Sing|PronType=Rel	5	obj	5:obj	_
5	паглядзець	паглядзець	VERB	VB	Aspect=Perf|VerbForm=Inf|Voice=Act	3	csubj	3:csubj	SpaceAfter=No
6	.	.	PUNCT	PUNCT	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 parataxis:discourse	color:blue
1	Карацей	карацей	ADV	RBR	Degree=Cmp	3	parataxis:discourse	3:parataxis:discourse	SpaceAfter=No
2	,	,	PUNCT	PUNCT	_	1	punct	1:punct	_
3	бацька	бацька	NOUN	NN	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	_
4	нават	нават	PART	UH	_	6	advmod	6:advmod	_
5	для	для	ADP	IN	_	6	case	6:case	_
6	алігархаў	алігарх	NOUN	NN	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	nmod	3:nmod:для:gen	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	3	punct	3:punct	_

~~~


