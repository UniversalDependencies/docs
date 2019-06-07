---
layout: base
title:  'Statistics of conj:coord in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `conj:coord`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-conj.html">conj</a></tt>.
There are also 3 other language-specific subtypes of `conj`: <tt><a href="pcm_nsc-dep-conj-appos.html">conj:appos</a></tt>, <tt><a href="pcm_nsc-dep-conj-dicto.html">conj:dicto</a></tt>, <tt><a href="pcm_nsc-dep-conj-redup.html">conj:redup</a></tt>.

152 nodes (1%) are attached to their parents as `conj:coord`.

152 instances of `conj:coord` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.64473684210526.

The following 20 pairs of parts of speech are connected with `conj:coord`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (78; 51% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (41; 27% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (6; 4% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (4; 3% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 conj:coord	color:blue
1	#	#	PUNCT	_	_	5	punct	_	_
2	I	I	PRON	_	_	5	nsubj	_	_
3	go	go	AUX	_	_	5	aux	_	_
4	{	{	PUNCT	_	_	5	punct	_	_
5	cut	cut	VERB	_	_	0	root	_	_
6	dis	dis	DET	_	_	7	det	_	_
7	one	one	PRON	_	_	5	obj	_	_
8	|c	|c	PUNCT	_	_	9	punct	_	_
9	reach	reach	VERB	_	_	5	conj:coord	_	_
10	house	house	NOUN	_	_	9	obj	_	_
11	}	}	PUNCT	_	_	5	punct	_	_
12	//	//	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 conj:coord	color:blue
1	#	#	PUNCT	_	_	12	punct	_	_
2	after	after	ADP	_	_	4	case	_	_
3	{	{	PUNCT	_	_	4	punct	_	_
4	food	food	NOUN	_	_	12	obl:mod	_	_
5	|c	|c	PUNCT	_	_	4	punct	_	_
6	#	#	PUNCT	_	_	4	punct	_	_
7	and	and	CCONJ	_	_	8	cc	_	_
8	house	house	NOUN	_	_	4	conj:coord	_	_
9	}	}	PUNCT	_	_	4	punct	_	_
10	<+	<+	PUNCT	_	_	12	punct	_	_
11	na	na	PART	_	_	12	mark	_	_
12	motor	motor	NOUN	_	_	0	root	_	_
13	>+	>+	PUNCT	_	_	15	punct	_	_
14	dey	dey	AUX	_	_	15	aux:pass	_	_
15	follow	follow	VERB	_	_	12	acl:cleft	_	_
16	//	//	PUNCT	_	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 13 conj:coord	color:blue
1	wey	wey	SCONJ	_	_	6	mark	_	_
2	be	be	VERB	_	_	1	fixed	_	_
3	sey	sey	SCONJ	_	_	1	fixed	_	_
4	una	una	PRON	_	_	6	nsubj	_	_
5	{	{	PUNCT	_	_	6	punct	_	_
6	comot	comot	VERB	_	_	0	root	_	_
7	|	|	PUNCT	_	_	8	punct	_	_
8	go	go	VERB	_	_	6	conj:coord	_	_
9	high	high	ADJ	_	_	8	compound:prt	_	_
10	(	(	PUNCT	_	_	14	punct	_	_
11	Saturday	Saturday	PROPN	_	_	14	compound	_	_
12	|c	|c	PUNCT	_	_	11	punct	_	_
13	Friday	Friday	PROPN	_	_	11	conj:coord	_	_
14	night	night	NOUN	_	_	8	obl:mod	_	_
15	)	)	PUNCT	_	_	14	punct	_	_
16	|	|	PUNCT	_	_	17	punct	_	_
17	go	go	VERB	_	_	6	conj:coord	_	_
18	party	party	NOUN	_	_	17	obj	_	_
19	|	|	PUNCT	_	_	20	punct	_	_
20	go	go	VERB	_	_	6	conj:coord	_	_
21	club	club	NOUN	_	_	20	obj	_	_
22	}	}	PUNCT	_	_	6	punct	_	_
23	//	//	PUNCT	_	_	6	punct	_	_

~~~


