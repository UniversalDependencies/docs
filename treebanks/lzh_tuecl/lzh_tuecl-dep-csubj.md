---
layout: base
title:  'Statistics of csubj in UD_Classical_Chinese-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Chinese-TueCL: Relations: `csubj`

This relation is universal.

9 nodes (1%) are attached to their parents as `csubj`.

9 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.11111111111111.

The following 3 pairs of parts of speech are connected with `csubj`: <tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt> (7; 78% instances), <tt><a href="lzh_tuecl-pos-AUX.html">AUX</a></tt>-<tt><a href="lzh_tuecl-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="lzh_tuecl-pos-PRON.html">PRON</a></tt>-<tt><a href="lzh_tuecl-pos-VERB.html">VERB</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 csubj	color:blue
1	野	野	NOUN	_	Case=Loc	2	nmod	_	Gloss=uncultivated-land|SpaceAfter=No
2	馬	馬	NOUN	_	_	0	root	_	Gloss=horse|SpaceAfter=No
3	也	也	PART	_	_	2	discourse	_	Gloss=that-which|SpaceAfter=No
4	塵	塵	NOUN	_	_	5	nmod	_	SpaceAfter=No
5	埃	埃	NOUN	_	_	2	parataxis	_	SpaceAfter=No
6	也	也	PART	_	_	5	discourse	_	Gloss=that-which|SpaceAfter=No
7	生	生	ADJ	_	_	8	amod	_	Gloss=alive|SpaceAfter=No
8	物	物	NOUN	_	_	11	nsubj	_	Gloss=thing|SpaceAfter=No
9	之	之	SCONJ	_	_	11	mark	_	Gloss='s|SpaceAfter=No
10	以	以	ADV	_	_	11	advmod	_	Gloss=use|SpaceAfter=No
11	息	息	VERB	_	_	13	csubj	_	Gloss=breathe|SpaceAfter=No
12	相	相	ADV	_	_	13	advmod	_	Gloss=each-other|SpaceAfter=No
13	吹	吹	VERB	_	_	2	parataxis	_	SpaceAfter=No
14	也	也	PART	_	_	13	discourse:sp	_	Gloss=[final-particle]|SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 csubj	color:blue
1	以	以	VERB	_	_	3	mark	_	Gloss=use|SpaceAfter=No
2	八千	八	NUM	_	_	3	nummod	_	Gloss=eight-thousand|SpaceAfter=No
3	歲	歲	NOUN	_	Case=Tem	4	csubj	_	Gloss=year|SpaceAfter=No
4	爲	爲	AUX	_	_	0	root	_	Gloss=be|SpaceAfter=No
5	春	春	NOUN	_	Case=Tem	4	obj	_	Gloss=spring|SpaceAfter=No

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	湯	湯	PROPN	_	NameType=Giv	3	nsubj	_	Gloss=[given-name]|SpaceAfter=No
2	之	之	SCONJ	_	_	1	case	_	Gloss='s|SpaceAfter=No
3	問	問	VERB	_	_	6	csubj	_	Gloss=ask|SpaceAfter=No
4	棘	棘	PROPN	_	_	3	obj	_	Gloss=[given-name]|SpaceAfter=No
5	也	也	PART	_	_	3	mark	_	Gloss=that-which|SpaceAfter=No
6	是	是	PRON	_	PronType=Dem	0	root	_	Gloss=this|SpaceAfter=No
7	已	已	PART	_	_	6	discourse:sp	_	Gloss=only|SpaceAfter=No

~~~


