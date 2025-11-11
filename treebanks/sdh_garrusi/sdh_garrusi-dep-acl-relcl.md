---
layout: base
title:  'Statistics of acl:relcl in UD_Southern_Kurdish-Garrusi'
udver: '2'
---

## Treebank Statistics: UD_Southern_Kurdish-Garrusi: Relations: `acl:relcl`

This relation is a language-specific subtype of .

42 nodes (2%) are attached to their parents as `acl:relcl`.

36 instances of `acl:relcl` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.5952380952381.

The following 4 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sdh_garrusi-pos-VERB.html">VERB</a></tt>-<tt><a href="sdh_garrusi-pos-VERB.html">VERB</a></tt> (25; 60% instances), <tt><a href="sdh_garrusi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sdh_garrusi-pos-VERB.html">VERB</a></tt> (13; 31% instances), <tt><a href="sdh_garrusi-pos-VERB.html">VERB</a></tt>-<tt><a href="sdh_garrusi-pos-NOUN.html">NOUN</a></tt> (2; 5% instances), <tt><a href="sdh_garrusi-pos-VERB.html">VERB</a></tt>-<tt><a href="sdh_garrusi-pos-PRON.html">PRON</a></tt> (2; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 acl:relcl	color:blue
1	Şût	şût	NOUN	_	_	2	compound:lvc	_	_
2	da	dagin	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	wut	wutin	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
4	“	“	PUNCT	_	_	5	punct	_	_
5	bew	hatin	VERB	_	Mood=Imp|Number=Sing|Person=2|Tense=Fut|VerbForm=Fin|Voice=Act	8	acl:relcl	_	_
6	kilawege	kilaw	NOUN	_	Definite=Def|Number=Sing	8	obj	_	_
7	t	t	PRON	_	Number=Sing|Person=2	6	nmod:poss	_	_
8	bem	dagin	VERB	_	Mood=Sub|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	3	parataxis	_	_
9	we	we	ADP	_	ExtPos=ADP	10	case	_	_
10	t	t	PRON	_	Number=Sing|Person=2	8	obl	_	_
11	”	”	PUNCT	_	_	8	punct	_	_
12	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:relcl	color:blue
1	Yê	yê	DET	_	Definite=Ind	2	det	_	_
2	dane	dane	NOUN	_	_	7	nsubj	_	_
3	kuř	kuř	PRON	_	Number=Sing|Person=3	5	nsubj	_	_
4	duçerxe	duçerxe	NOUN	_	_	5	obj	_	_
5	dîrî	daştin	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
6	rikab	rikab	NOUN	_	Number=Sing	7	compound:lvc	_	_
7	dey	dan	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
8	dîyay	hatin	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	7	conj	_	_
9	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 acl:relcl	color:blue
1	Kuřêş	Kuř	NOUN	_	Number=Sing	6	acl:relcl	_	_
2	ki	ki	PRON	_	_	6	nsubj	_	_
3	we	we	ADP	_	ExtPos=ADP	4	case	_	_
4	duçerxewe	duçerxe	NOUN	_	Number=Sing	6	obl	_	_
5	řikab	řikab	NOUN	_	Number=Sing	6	compound:lvc	_	_
6	deygo	dagin	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
7	.	.	PUNCT	_	_	6	punct	_	_

~~~


