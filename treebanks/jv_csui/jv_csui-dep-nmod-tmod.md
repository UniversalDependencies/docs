---
layout: base
title:  'Statistics of nmod:tmod in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `nmod:tmod`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="jv_csui-dep-nmod-lmod.html">nmod:lmod</a></tt>, <tt><a href="jv_csui-dep-nmod-poss.html">nmod:poss</a></tt>.

6 nodes (0%) are attached to their parents as `nmod:tmod`.

6 instances of `nmod:tmod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.

The following 3 pairs of parts of speech are connected with `nmod:tmod`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (3; 50% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (2; 33% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NUM.html">NUM</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 13 nmod:tmod	color:blue
1	Panambahan	tambah	NOUN	_	_	0	root	_	_
2	poin	poin	X	_	Foreign=Yes	1	nmod	_	_
3	75	75	NUM	_	NumType=Card	4	nummod	_	SpaceAfter=No
4	%	%	SYM	_	_	1	nmod	_	_
5	ing	ing	ADP	_	_	6	case	_	_
6	turnamèn	turnamèn	X	_	Foreign=Yes	1	nmod	_	_
7	paling	paling	ADV	_	_	8	advmod	_	_
8	apik	apik	ADJ	_	Polite=Form	6	amod	_	Level=Ngoko
9	ing	ing	ADP	_	_	10	case	_	_
10	lumah	lumah	NOUN	_	_	6	nmod	_	_
11	suket	suket	NOUN	_	Number=Sing	10	nmod	_	_
12	12	12	NUM	_	NumType=Card	13	nummod	_	_
13	wulan	wulan	NOUN	_	Number=Sing	1	nmod:tmod	_	_
14	sakdurunge	sakdurunge	ADV	_	Polite=Infm	13	advmod	_	Level=Ngoko|SpaceAfter=No
15	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 18 nmod:tmod	color:blue
1	Ananging	Ananging	ADV	_	_	7	advmod	_	SpaceAfter=No
2	,	,	PUNCT	_	_	1	punct	_	_
3	industri	industri	NOUN	_	Number=Sing	7	nsubj	_	_
4	permata	permata	NOUN	_	Number=Sing	3	nmod	_	_
5	Dubai	Dubai	PROPN	_	_	3	nmod	_	_
6	punika	punika	DET	_	Polite=Form|PronType=Dem	3	det	_	Level=Krama
7	nglampahi	lampah	VERB	_	Mood=Ind|Polite=Form|Voice=Act	0	root	_	Level=Krama
8	dampak	dampak	NOUN	_	Number=Sing	7	obj	_	_
9	saking	saking	ADP	_	Polite=Form	10	case	_	Level=Krama
10	Perang	Perang	PROPN	_	_	7	obl	_	_
11	Donya	Donya	PROPN	_	_	10	flat:name	_	_
12	I	I	PROPN	_	_	10	flat:name	_	SpaceAfter=No
13	,	,	PUNCT	_	_	15	punct	_	_
14	lajeng	lajeng	ADV	_	Polite=Form	15	advmod	_	Level=Krama
15	Depresi	Depresi	PROPN	_	_	10	conj	_	_
16	Gedhe	Gedhe	PROPN	_	_	15	flat:name	_	_
17	ing	ing	ADP	_	_	18	case	_	_
18	taun	taun	NOUN	_	Number=Sing|Polite=Infm	15	nmod:tmod	_	Level=Ngoko
19	1920-an	1920	NUM	_	NumType=Card	18	nummod	_	SpaceAfter=No
20	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 nmod:tmod	color:blue
1	Présidhèn	Présidhèn	PROPN	_	_	0	root	_	_
2	Indonésia	Indonésia	PROPN	_	_	1	flat:name	_	_
3	(	(	PUNCT	_	_	4	punct	_	SpaceAfter=No
4	1974	1974	NUM	_	NumType=Card	1	nmod:tmod	_	SpaceAfter=No
5	)	)	PUNCT	_	_	4	punct	_	SpaceAfter=No
6	.	.	PUNCT	_	_	1	punct	_	_

~~~


