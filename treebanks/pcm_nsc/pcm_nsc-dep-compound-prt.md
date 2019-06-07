---
layout: base
title:  'Statistics of compound:prt in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="pcm_nsc-dep-compound-svc.html">compound:svc</a></tt>.

22 nodes (0%) are attached to their parents as `compound:prt`.

22 instances of `compound:prt` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36363636363636.

The following 4 pairs of parts of speech are connected with `compound:prt`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt> (12; 55% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (8; 36% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 5% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:prt	color:blue
1	#	#	PUNCT	_	_	4	punct	_	_
2	make	make	AUX	_	_	4	aux	_	_
3	God	God	PROPN	_	_	4	nsubj	_	_
4	send	send	VERB	_	_	0	root	_	_
5	down	down	ADP	_	_	4	compound:prt	_	_
6	di	di	DET	_	_	7	det	_	_
7	rain	rain	NOUN	_	_	4	obj	_	_
8	//	//	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 compound:prt	color:blue
1	make	make	AUX	_	_	4	aux	_	_
2	I	I	PRON	_	_	4	nsubj	_	_
3	go	go	AUX	VERB	_	4	aux	_	_
4	come	come	VERB	_	_	0	root	_	_
5	back	back	ADV	_	_	4	compound:prt	_	_
6	//	//	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
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


