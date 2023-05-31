---
layout: base
title:  'Statistics of det in UD_Korean'
udver: '2'
---

## Treebank Statistics: UD_Korean: Relations: `det`

This relation is universal.
There are 1 language-specific subtypes of `det`: <tt><a href="ko-dep-det-poss.html">det:poss</a></tt>.

539 nodes (1%) are attached to their parents as `det`.

534 instances of `det` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.03710575139147.

The following 6 pairs of parts of speech are connected with `det`: <tt><a href="ko-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ko-pos-DET.html">DET</a></tt> (380; 71% instances), <tt><a href="ko-pos-ADV.html">ADV</a></tt>-<tt><a href="ko-pos-DET.html">DET</a></tt> (126; 23% instances), <tt><a href="ko-pos-VERB.html">VERB</a></tt>-<tt><a href="ko-pos-DET.html">DET</a></tt> (30; 6% instances), <tt><a href="ko-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ko-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ko-pos-NUM.html">NUM</a></tt>-<tt><a href="ko-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="ko-pos-PRON.html">PRON</a></tt>-<tt><a href="ko-pos-DET.html">DET</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	몇	_	DET	DET	_	2	det	_	_
2	년	_	NOUN	NOUN	_	4	nmod	_	_
3	전	_	ADP	ADP	_	2	case	_	_
4	고시	_	NOUN	NOUN	_	6	acl:relcl	_	_
5	공부하던	_	VERB	PREDREL	_	4	flat	_	_
6	시절에	_	ADV	ADV	_	9	advmod	_	_
7	선후배들과	_	ADV	ADV	_	9	advmod	_	_
8	자주	_	ADV	ADV	_	9	advmod	_	_
9	갔던	_	VERB	PREDREL	_	10	acl:relcl	_	_
10	곳인데	_	VERB	PREDCONJ	_	14	advcl	_	_
11	여전히	_	ADV	ADV	_	14	advmod	_	_
12	사장님의	_	NOUN	NOUN	_	13	det:poss	_	_
13	친절은	_	NOUN	NOUN	_	14	nsubj	_	_
14	최고더군요	_	VERB	NOMCOP	_	0	root	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	그	_	DET	DET	_	2	det	_	_
2	가격에	_	ADV	ADV	_	6	advmod	_	_
3	샐러드	_	NOUN	NOUN	_	6	obj	_	_
4	바를	_	NOUN	NOUN	_	3	flat	_	_
5	무한으로	_	ADV	ADV	_	6	advmod	_	_
6	먹을	_	VERB	PREDREL	_	7	dep	_	_
7	수	_	NOUN	NOUN	_	8	nsubj	_	_
8	있어서	_	VERB	PREDCONJ	_	11	advcl	_	_
9	좋은	_	VERB	PREDREL	_	10	dep	_	_
10	거	_	NOUN	NOUN	_	11	nsubj	_	_
11	같아요	_	ADJ	ADJ	_	0	root	_	SpaceAfter=No
12	!	!	PUNCT	!	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 det	color:blue
1	그	_	DET	DET	_	2	det	_	_
2	돈이면	_	VERB	PREDCONJ	_	8	advcl	_	_
3	다른	_	ADJ	ADJ	_	5	amod	_	_
4	한식집이나	_	NOUN	NOMCONJ	_	6	obj	_	_
5	일식집	_	NOUN	NOUN	_	4	conj	_	_
6	알아보시는	_	VERB	PREDREL	_	7	dep	_	_
7	게	_	NOUN	NOUN	_	8	nsubj	_	_
8	좋습니다	_	ADJ	ADJ	_	0	root	_	_

~~~


