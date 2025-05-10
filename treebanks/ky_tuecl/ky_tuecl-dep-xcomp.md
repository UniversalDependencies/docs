---
layout: base
title:  'Statistics of xcomp in UD_Kyrgyz-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-TueCL: Relations: `xcomp`

This relation is universal.

15 nodes (1%) are attached to their parents as `xcomp`.

15 instances of `xcomp` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.6.

The following 4 pairs of parts of speech are connected with `xcomp`: <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt> (6; 40% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt> (4; 27% instances), <tt><a href="ky_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt> (3; 20% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 13% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 xcomp	color:blue
1	Ал	ал	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	9	nsubj	_	_
2	тамеки	тамеки	NOUN	_	_	3	obj	_	_
3	чегүүнү	чек	VERB	_	_	7	ccomp	_	_
4	жана	жана	CCONJ	_	_	6	cc	_	_
5	арак	арак	NOUN	_	_	6	obj	_	_
6	ичүүнү	ич	VERB	_	_	3	conj	_	_
7	токтотууга	токто	VERB	_	_	9	xcomp	_	_
8	аракет	араке	VERB	_	_	9	obj	_	_
9	кылды	кыл	VERB	_	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
1	Дениз	Дениз	PROPN	_	_	3	nsubj	_	_
2	доктур	доктур	NOUN	_	_	3	xcomp	_	_
3	болот	бол	VERB	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	билип	бил	VERB	_	_	3	parataxis	_	_
6	кой	кой	AUX	_	_	5	aux	_	SpaceAfter=No
7	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 xcomp	color:blue
1	Биз	биз	PRON	_	_	3	nsubj	_	_
2	чечүүгө	чеч	VERB	_	_	3	xcomp	_	_
3	аракет	аракет	NOUN	_	_	4	obj	_	_
4	кылып	кыл	VERB	_	_	6	acl	_	_
5	жаткан	жат	AUX	_	_	4	aux	_	_
6	көйгөй	көйгөй	NOUN	_	_	14	nsubj	_	_
7	–	–	PUNCT	_	_	6	punct	_	_
8	китеп	китеп	NOUN	_	_	9	nmod:poss	_	_
9	текчесинде	текче	NOUN	_	_	13	obl	_	_
10	беш	_	NUM	_	_	11	nummod	_	_
11	китептик	китептик	NOUN	_	_	13	nmod	_	_
12	да	да	ADV	_	_	11	advmod:emph	_	_
13	орундун	орун	NOUN	_	_	14	nmod:poss	_	_
14	болбогону	бол	VERB	_	_	0	root	_	SpaceAfter=No
15	.	.	PUNCT	_	_	14	punct	_	_

~~~


