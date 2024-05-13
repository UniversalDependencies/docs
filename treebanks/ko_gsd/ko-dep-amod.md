---
layout: base
title:  'Statistics of amod in UD_Korean'
udver: '2'
---

## Treebank Statistics: UD_Korean: Relations: `amod`

This relation is universal.

1512 nodes (2%) are attached to their parents as `amod`.

1498 instances of `amod` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.11375661375661.

The following 11 pairs of parts of speech are connected with `amod`: <tt><a href="ko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko-pos-ADJ.html">ADJ</a></tt> (1069; 71% instances), <tt><a href="ko-pos-ADV.html">ADV</a></tt>-<tt><a href="ko-pos-ADJ.html">ADJ</a></tt> (288; 19% instances), <tt><a href="ko-pos-VERB.html">VERB</a></tt>-<tt><a href="ko-pos-ADJ.html">ADJ</a></tt> (99; 7% instances), <tt><a href="ko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko-pos-VERB.html">VERB</a></tt> (34; 2% instances), <tt><a href="ko-pos-ADV.html">ADV</a></tt>-<tt><a href="ko-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="ko-pos-VERB.html">VERB</a></tt>-<tt><a href="ko-pos-VERB.html">VERB</a></tt> (5; 0% instances), <tt><a href="ko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="ko-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="ko-pos-ADV.html">ADV</a></tt>-<tt><a href="ko-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="ko-pos-NUM.html">NUM</a></tt>-<tt><a href="ko-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="ko-pos-PRON.html">PRON</a></tt>-<tt><a href="ko-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	제일	_	ADV	ADV	_	2	advmod	_	_
2	가까운	_	ADJ	ADJ	_	3	amod	_	_
3	스타벅스가	_	NOUN	PNOUN	_	5	nsubj	_	_
4	어디	_	ADV	ADV	_	5	advmod	_	_
5	있지	_	ADJ	ADJ	_	0	root	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 amod	color:blue
1	'하녀'와	_	ADV	ADV	_	4	advmod	_	_
2	같은	_	ADJ	ADJ	_	3	amod	_	_
3	날	_	ADV	ADV	_	4	advmod	_	_
4	개봉한	_	VERB	PREDREL	_	6	acl:relcl	_	_
5	이	_	DET	DET	_	6	det	_	_
6	영화의	_	NOUN	NOUN	_	7	det:poss	_	_
7	누적	_	NOUN	NOUN	_	9	nsubj	_	_
8	관객은	_	NOUN	NOUN	_	7	flat	_	_
9	54만5천366명이다	_	VERB	NOMCOP	_	0	root	_	SpaceAfter=No
10	.	.	PUNCT	.	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	환자	_	NOUN	NOUN	_	4	obj	_	_
2	입장은	_	NOUN	NOUN	_	1	flat	_	_
3	생각	_	NOUN	NOUN	_	4	obj	_	_
4	안하고	_	VERB	PREDCONJ	_	0	root	_	_
5	이상한	_	ADJ	ADJ	_	6	amod	_	_
6	소리합니다	_	VERB	VERB	_	4	conj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


