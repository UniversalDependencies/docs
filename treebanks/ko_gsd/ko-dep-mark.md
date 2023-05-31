---
layout: base
title:  'Statistics of mark in UD_Korean'
udver: '2'
---

## Treebank Statistics: UD_Korean: Relations: `mark`

This relation is universal.

372 nodes (1%) are attached to their parents as `mark`.

372 instances of `mark` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.13440860215054.

The following 4 pairs of parts of speech are connected with `mark`: <tt><a href="ko-pos-VERB.html">VERB</a></tt>-<tt><a href="ko-pos-NOUN.html">NOUN</a></tt> (281; 76% instances), <tt><a href="ko-pos-VERB.html">VERB</a></tt>-<tt><a href="ko-pos-ADV.html">ADV</a></tt> (83; 22% instances), <tt><a href="ko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="ko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko-pos-ADV.html">ADV</a></tt> (2; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark	color:blue
1	근처에서	_	ADV	ADV	_	2	advmod	_	_
2	먹어본	_	VERB	PREDREL	_	5	advcl	_	_
3	중	_	NOUN	NOUN	_	2	mark	_	_
4	아주	_	ADV	ADV	_	5	advmod	_	_
5	괜찮은	_	VERB	PREDREL	_	6	dep	_	_
6	편에	_	ADV	ADV	_	7	advmod	_	_
7	속합니다	_	VERB	VERB	_	0	root	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark	color:blue
1	워낙	_	ADV	ADV	_	2	advmod	_	_
2	어렸을	_	VERB	PREDREL	_	6	advcl	_	_
3	때부터	_	ADV	ADV	_	2	mark	_	_
4	방송	_	NOUN	NOUN	_	6	obj	_	_
5	일을	_	NOUN	NOUN	_	4	flat	_	_
6	시작해	_	VERB	PREDCONJ	_	10	advcl	_	_
7	또래	_	NOUN	NOUN	_	10	advmod	_	_
8	연예인들보다	_	ADV	ADV	_	7	flat	_	_
9	경력이	_	NOUN	NOUN	_	10	nsubj	_	_
10	길다	_	ADJ	ADJ	_	0	root	_	SpaceAfter=No
11	.	.	PUNCT	.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 mark	color:blue
1	치중(治中)	_	NOUN	PNOUN	_	5	nsubj	_	_
2	이력(李歷)	_	NOUN	PNOUN	_	1	conj	_	_
3	등은	_	NOUN	NOUN	_	2	mark	_	_
4	이에	_	ADV	ADV	_	5	advmod	_	_
5	반대하였는데	_	VERB	PREDCONJ	_	12	advcl	_	SpaceAfter=No
6	,	_	PUNCT	.	_	5	punct	_	_
7	한복은	_	NOUN	PNOUN	_	8	nsubj	_	_
8	듣지	_	VERB	PREDCX	_	0	root	_	_
9	않고	_	VERB	PREDCONJ	_	8	flat	_	_
10	원소의	_	NOUN	PNOUN	_	11	det:poss	_	_
11	요구를	_	NOUN	NOUN	_	12	obj	_	_
12	받아들였다	_	VERB	VERB	_	8	conj	_	SpaceAfter=No
13	.	.	PUNCT	.	_	12	punct	_	_

~~~


