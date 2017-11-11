---
layout: base
title:  'Statistics of obl in UD_Chinese-CFL'
udver: '2'
---

## Treebank Statistics: UD_Chinese-CFL: Relations: `obl`

This relation is universal.
There are 3 language-specific subtypes of `obl`: <tt><a href="zh_cfl-dep-obl-agent.html">obl:agent</a></tt>, <tt><a href="zh_cfl-dep-obl-patient.html">obl:patient</a></tt>, <tt><a href="zh_cfl-dep-obl-tmod.html">obl:tmod</a></tt>.

202 nodes (3%) are attached to their parents as `obl`.

188 instances of `obl` (93%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25742574257426.

The following 11 pairs of parts of speech are connected with `obl`: <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (97; 48% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-PRON.html">PRON</a></tt> (57; 28% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-PROPN.html">PROPN</a></tt> (23; 11% instances), <tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (7; 3% instances), <tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (5; 2% instances), <tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_cfl-pos-PRON.html">PRON</a></tt> (5; 2% instances), <tt><a href="zh_cfl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="zh_cfl-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="zh_cfl-pos-AUX.html">AUX</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="zh_cfl-pos-PRON.html">PRON</a></tt>-<tt><a href="zh_cfl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt>-<tt><a href="zh_cfl-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obl	color:blue
1	还有	还有	CCONJ	_	_	6	cc	_	SpaceAfter=No
2	我们	我们	PRON	_	_	6	nsubj	_	SpaceAfter=No
3	和	和	ADP	_	_	4	case	_	SpaceAfter=No
4	军人	军人	NOUN	_	_	6	obl	_	SpaceAfter=No
5	一起	一起	ADV	_	_	6	advmod	_	SpaceAfter=No
6	拍照	拍照	VERB	_	_	0	root	_	SpaceAfter=No
7	。	。	PUNCT	_	_	6	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 obl	color:blue
1	虽然	虽然	SCONJ	_	_	3	mark	_	SpaceAfter=No
2	那里	那里	PRON	_	_	3	obl	_	SpaceAfter=No
3	有	有	VERB	_	_	16	advcl	_	SpaceAfter=No
4	很多	很多	DET	_	_	5	det	_	SpaceAfter=No
5	部队	部队	NOUN	_	_	3	obj	_	SpaceAfter=No
6	很	很	ADV	_	_	7	advmod	_	SpaceAfter=No
7	严厉	严厉	ADJ	_	_	9	amod	_	SpaceAfter=No
8	的	的	PART	_	_	7	mark:rel	_	SpaceAfter=No
9	气氛	气氛	NOUN	_	_	5	acl	_	SpaceAfter=No
10	，	，	PUNCT	_	_	3	punct	_	SpaceAfter=No
11	我	我	PRON	_	_	16	dislocated	_	SpaceAfter=No
12	却	却	ADV	_	_	16	advmod	_	SpaceAfter=No
13	心里	心里	NOUN	_	_	16	nsubj	_	SpaceAfter=No
14	怦怦	怦怦	ADV	_	_	16	advmod	_	SpaceAfter=No
15	地	地	PART	_	_	14	mark:adv	_	SpaceAfter=No
16	跳	跳	VERB	_	_	0	root	_	SpaceAfter=No
17	。	。	PUNCT	_	_	16	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl	color:blue
1	2012年	2012年	NOUN	_	_	6	obl:tmod	_	SpaceAfter=No
2	12月	12月	NOUN	_	_	1	flat	_	SpaceAfter=No
3	我	我	PRON	_	_	6	nsubj	_	SpaceAfter=No
4	在	在	ADP	_	_	5	case	_	SpaceAfter=No
5	韩国	韩国	PROPN	_	_	6	obl	_	SpaceAfter=No
6	留学	留学	VERB	_	_	8	acl	_	SpaceAfter=No
7	的	的	PART	_	_	6	mark:rel	_	SpaceAfter=No
8	时候	时候	NOUN	_	_	13	obl:tmod	_	SpaceAfter=No
9	，	，	PUNCT	_	_	8	punct	_	SpaceAfter=No
10	有	有	VERB	_	_	13	advcl	_	SpaceAfter=No
11	一	一	NUM	_	_	12	nummod	_	SpaceAfter=No
12	天	天	NOUN	_	_	10	obj	_	SpaceAfter=No
13	接	接	VERB	_	_	0	root	_	SpaceAfter=No
14	到	到	VERB	_	_	13	compound:vv	_	SpaceAfter=No
15	一	一	NUM	_	_	17	nummod	_	SpaceAfter=No
16	个	个	NOUN	_	_	15	clf	_	SpaceAfter=No
17	通知	通知	NOUN	_	_	13	obj	_	SpaceAfter=No
18	。	。	PUNCT	_	_	13	punct	_	SpaceAfter=No

~~~


