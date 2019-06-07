---
layout: base
title:  'Statistics of compound:svc in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="pcm_nsc-dep-compound-prt.html">compound:prt</a></tt>.

145 nodes (1%) are attached to their parents as `compound:svc`.

144 instances of `compound:svc` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.93103448275862.

The following 4 pairs of parts of speech are connected with `compound:svc`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (135; 93% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (7; 5% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 compound:svc	color:blue
1	#	#	PUNCT	_	_	4	punct	_	_
2	make	make	AUX	_	_	4	aux	_	_
3	we	we	PRON	_	_	4	nsubj	_	_
4	take	take	VERB	_	_	0	root	_	_
5	Lagos	Lagos	PROPN	_	_	4	obj	_	_
6	do	do	VERB	_	_	4	compound:svc	_	_
7	example	example	NOUN	_	_	6	obj	_	_
8	//	//	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 compound:svc	color:blue
1	#	#	PUNCT	_	_	3	punct	_	_
2	na	na	AUX	PART	_	3	cop	_	_
3	farmer	farmer	NOUN	_	_	0	root	_	_
4	dem	dem	DET	PART	_	3	det	_	_
5	>+	>+	PUNCT	_	_	7	punct	_	_
6	dey	be	AUX	_	_	7	cop	_	_
7	happy	happy	ADJ	_	_	3	acl:cleft	_	_
8	pass	pass	VERB	_	_	7	compound:svc	_	_
9	#	#	PUNCT	_	_	12	punct	_	_
10	when	when	ADV	_	_	12	mark	_	_
11	rain	rain	NOUN	_	_	12	nsubj	_	_
12	fall	fall	VERB	_	_	7	advcl	_	_
13	like	like	ADP	_	_	14	case	_	_
14	dis	dis	DET	_	_	12	obl:mod	_	_
15	//	//	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:svc	color:blue
1	#	#	PUNCT	_	_	4	punct	_	_
2	make	make	AUX	_	_	4	aux	_	_
3	dem	dem	PRON	_	_	4	nsubj	_	_
4	try	try	VERB	_	_	0	root	_	_
5	buy	buy	VERB	_	_	4	xcomp	_	_
6	motor	motor	NOUN	_	_	5	obj	_	_
7	full	full	ADJ	_	_	5	compound:svc	_	_
8	everywhere	everywhere	ADV	_	_	7	advmod	_	_
9	//	//	PUNCT	_	_	4	punct	_	_

~~~


