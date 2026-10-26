---
layout: base
title:  'Statistics of parataxis in UD_Kyrgyz-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Kyrgyz-TueCL: Relations: `parataxis`

This relation is universal.

7 nodes (1%) are attached to their parents as `parataxis`.

6 instances of `parataxis` (86%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.28571428571429.

The following 4 pairs of parts of speech are connected with `parataxis`: <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt> (3; 43% instances), <tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt> (2; 29% instances), <tt><a href="ky_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="ky_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ky_tuecl-pos-PART.html">PART</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 parataxis	color:blue
1	Дениз	Дениз	PROPN	_	_	3	nsubj	_	_
2	доктур	доктур	NOUN	_	_	3	xcomp	_	_
3	болот	бол	VERB	_	_	0	root	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
5	билип	бил	VERB	_	_	3	parataxis	_	_
6	кой	кой	AUX	_	_	5	aux	_	SpaceAfter=No
7	!	!	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 parataxis	color:blue
1	Столдо	стол	NOUN	_	_	4	obl	_	_
2	көп	көп	DET	_	_	3	det	_	_
3	китеп	китеп	NOUN	_	_	4	nsubj	_	_
4	бар	бар	ADJ	_	_	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	китеп	китеп	NOUN	_	_	7	nmod	_	_
7	текчеде	текче	NOUN	_	_	8	obl	_	_
8	жок	жок	ADJ	_	_	4	parataxis	_	SpaceAfter=No
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 parataxis	color:blue
1	Мунун	бул	PRON	_	_	2	nmod:poss	_	_
2	көгү	көк	NOUN	_	_	3	nsubj	_	_
3	жакшынакайыраак	жакшынакай	ADJ	_	_	0	root	_	_
4	экен	экен	AUX	_	_	3	discourse	_	SpaceAfter=No
5	,	,	PUNCT	_	_	3	punct	_	_
6	мага	мен	PROPN	_	_	8	obl	_	_
7	көгүн	көк	NOUN	_	_	8	obj	_	_
8	берип	бер	VERB	_	_	3	parataxis	_	_
9	коёсуң	кой	AUX	_	_	8	aux	_	_
10	бу	бы	PART	_	_	3	discourse	_	_
11	?	?	PUNCT	_	_	3	punct	_	_

~~~


