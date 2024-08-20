---
layout: base
title:  'Statistics of cc:preconj in UD_Gujarati-GujTB'
udver: '2'
---

## Treebank Statistics: UD_Gujarati-GujTB: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="gu_gujtb-dep-cc.html">cc</a></tt>.

3 nodes (0%) are attached to their parents as `cc:preconj`.

3 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.66666666666667.

The following 3 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="gu_gujtb-pos-PRON.html">PRON</a></tt>-<tt><a href="gu_gujtb-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="gu_gujtb-pos-VERB.html">VERB</a></tt>-<tt><a href="gu_gujtb-pos-CCONJ.html">CCONJ</a></tt> (1; 33% instances), <tt><a href="gu_gujtb-pos-VERB.html">VERB</a></tt>-<tt><a href="gu_gujtb-pos-PART.html">PART</a></tt> (1; 33% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 cc:preconj	color:blue
1	ના	_	CCONJ	_	_	2	cc:preconj	_	_
2	તું	_	PRON	_	_	0	root	_	_
3	ના	_	CCONJ	_	_	4	cc	_	_
4	હું	_	PRON	_	_	2	conj	_	SpaceAfter=No
5	.	_	PUNCT	_	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 21	bgColor:blue
# visual-style 21	fgColor:white
# visual-style 21 13 cc:preconj	color:blue
1	(	(	PUNCT	_	_	2	punct	_	_
2	યશાયાહ	યશાયાહ	PROPN	_	_	21	dep	_	_
3	૬૫:	૬૫:	NUM	_	_	2	nummod	_	_
4	૧૩	૧૩	NUM	_	_	3	compound	_	SpaceAfter=No
5	,	,	PUNCT	_	_	6	punct	_	_
6	૧૪.	૧૪.	NUM	_	_	3	nummod	_	_
7	માત્થી	માત્થી	PROPN	_	_	2	parataxis	_	_
8	૨૪:	૨૪:	NUM	_	_	7	nummod	_	_
9	૪૫	૪૫	NUM	_	_	8	nummod	_	_
10	-	-	PUNCT	_	_	11	punct	_	_
11	૪૭	૪૭	NUM	_	_	9	conj	_	SpaceAfter=No
12	)	)	PUNCT	_	_	2	punct	_	_
13	પણ	પણ	CCONJ	_	_	21	cc:preconj	_	_
14	તે	તે	PRON	_	_	21	nsubj	_	_
15	ફક્ત	ફક્ત	ADJ	_	_	16	amod	_	_
16	આપણા	આપણા	PRON	_	_	17	nmod	_	_
17	જ્ઞાન	જ્ઞાન	NOUN	_	_	19	nmod	_	_
18	ની	ની	ADP	_	_	17	case	_	_
19	તરસ	તરસ	NOUN	_	_	21	obj	_	_
20	જ	જ	PART	_	_	19	discourse	_	_
21	છીપાવતા	છીપાવતા	VERB	_	_	0	root	_	_
22	નથી	ન	AUX	_	_	21	aux	_	SpaceAfter=No
23	.	.	PUNCT	_	_	21	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 cc:preconj	color:blue
1	એ	_	PRON	_	_	4	nsubj	_	_
2	ના	_	PART	_	_	4	cc:preconj	_	_
3	પોતે	_	PRON	_	_	1	obl	_	_
4	ખાય	_	VERB	_	_	0	root	_	SpaceAfter=No
5	,	_	PUNCT	_	_	7	punct	_	_
6	ના	_	PART	_	_	7	cc	_	_
7	ખાવા	_	VERB	_	_	4	conj	_	_
8	દે	_	AUX	_	_	7	aux	_	SpaceAfter=No
9	.	_	PUNCT	_	_	4	punct	_	SpaceAfter=No

~~~


