---
layout: base
title:  'Statistics of csubj in UD_Korean'
udver: '2'
---

## Treebank Statistics: UD_Korean: Relations: `csubj`

This relation is universal.

17 nodes (0%) are attached to their parents as `csubj`.

17 instances of `csubj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.52941176470588.

The following 4 pairs of parts of speech are connected with `csubj`: <tt><a href="ko-pos-VERB.html">VERB</a></tt>-<tt><a href="ko-pos-NOUN.html">NOUN</a></tt> (9; 53% instances), <tt><a href="ko-pos-VERB.html">VERB</a></tt>-<tt><a href="ko-pos-VERB.html">VERB</a></tt> (5; 29% instances), <tt><a href="ko-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko-pos-NOUN.html">NOUN</a></tt> (2; 12% instances), <tt><a href="ko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko-pos-VERB.html">VERB</a></tt> (1; 6% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 csubj	color:blue
1	월마트가	_	NOUN	PNOUN	_	3	nsubj	_	_
2	1위를	_	NOUN	NUMNOUN	_	3	obj	_	_
3	되찾기는	_	NOUN	NOUN	_	6	csubj	_	_
4	2008년	_	NOUN	NUMNOUN	_	6	nmod	_	_
5	이후	_	ADP	ADP	_	4	case	_	_
6	2년만이다	_	VERB	NOMCOP	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 csubj	color:blue
1	원장님이	_	NOUN	NOUN	_	5	nsubj	_	_
2	어린이집을	_	NOUN	NOUN	_	3	obj	_	_
3	운영할	_	VERB	PREDREL	_	4	dep	_	_
4	자질이	_	NOUN	NOUN	_	5	nsubj	_	_
5	있는지	_	VERB	PREDCOMP	_	6	csubj	_	_
6	의문이네요	_	VERB	NOMCOP	_	0	root	_	SpaceAfter=No
7	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 csubj	color:blue
1	중요한	_	ADJ	ADJ	_	2	amod	_	_
2	건	_	NOUN	NOUN	_	8	nsubj	_	_
3	이	_	DET	DET	_	4	det	_	_
4	분위기를	_	NOUN	NOUN	_	7	obj	_	_
5	어떻게	_	ADV	ADV	_	7	advmod	_	_
6	끝까지	_	ADV	ADV	_	7	advmod	_	_
7	이어가느냐가	_	NOUN	NOUN	_	8	csubj	_	_
8	중요하다	_	ADJ	ADJ	_	0	root	_	SpaceAfter=No
9	.	.	PUNCT	.	_	8	punct	_	_

~~~


