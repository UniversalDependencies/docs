---
layout: base
title:  'Statistics of compound in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `compound`

This relation is universal.
There are 2 language-specific subtypes of `compound`: <tt><a href="pcm_nsc-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="pcm_nsc-dep-compound-svc.html">compound:svc</a></tt>.

80 nodes (1%) are attached to their parents as `compound`.

71 instances of `compound` (89%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.075.

The following 13 pairs of parts of speech are connected with `compound`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (55; 69% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (9; 11% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (3; 4% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-DET.html">DET</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 compound	color:blue
1	how	how	ADV	_	_	4	advmod	_	_
2	you	you	PRON	_	_	4	nsubj	_	_
3	come	come	AUX	VERB	_	4	aux	_	_
4	see	see	VERB	_	_	0	root	_	_
5	dis	dis	DET	_	_	7	det	_	_
6	man	man	NOUN	_	_	7	compound	_	_
7	matter	matter	NOUN	_	_	4	obj	_	_
8	now	now	ADV	_	_	7	advmod:emph	_	_
9	//	//	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 compound	color:blue
1	you	you	PRON	_	_	3	nsubj	_	_
2	go	go	AUX	_	_	3	aux	_	_
3	enter	enter	VERB	_	_	0	root	_	_
4	Lagos	Lagos	PROPN	_	_	6	compound	_	_
5	Ibadan	Ibadan	PROPN	_	_	4	compound	_	_
6	expressway	expressway	NOUN	_	_	3	obj	_	_
7	//	//	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound	color:blue
1	#	#	PUNCT	_	_	14	punct	_	_
2	according	according	NOUN	_	_	4	case	_	_
3	to	to	ADP	_	_	2	fixed	_	_
4	dose	dose	PRON	_	_	14	obl:periph	_	_
5	wey	wey	SCONJ	_	_	6	mark	_	_
6	sabi	sabi	VERB	_	_	4	acl:relcl	_	_
7	doctor	doctor	NOUN	_	_	8	compound	_	_
8	work	work	VERB	_	_	6	obj	_	_
9	well	well	ADV	_	_	6	advmod	_	_
10	well	well	ADV	_	_	9	conj:redup	_	_
11	<	<	PUNCT	_	_	4	punct	_	_
12	#	#	PUNCT	_	_	4	punct	_	_
13	dem	dem	PRON	_	_	14	nsubj	_	_
14	say	say	VERB	_	_	0	root	_	_
15	[	[	PUNCT	_	_	19	punct	_	_
16	na	na	AUX	PART	_	19	cop	_	_
17	inside	inside	ADP	_	_	19	case	_	_
18	hot	hot	ADJ	_	_	19	amod	_	_
19	weader	weader	NOUN	_	_	14	ccomp	_	_
20	>+	>+	PUNCT	_	_	27	punct	_	_
21	#	#	PUNCT	_	_	27	punct	_	_
22	plenty	plenty	ADJ	_	_	25	amod	_	_
23	different	different	ADJ	_	_	25	amod	_	_
24	different	different	ADJ	_	_	23	conj:redup	_	_
25	disease	disease	NOUN	_	_	27	nsubj	_	_
26	dey	dey	AUX	_	_	27	aux	_	_
27	waka	waka	VERB	_	_	19	acl:cleft	_	_
28	pass	pass	VERB	_	_	27	compound:svc	_	_
29	//	//	PUNCT	_	_	19	punct	_	_
30	]	]	PUNCT	_	_	19	punct	_	_
31	//	//	PUNCT	_	_	14	punct	_	_

~~~


