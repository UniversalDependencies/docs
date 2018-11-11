---
layout: base
title:  'Statistics of cop in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `cop`

This relation is universal.

269 nodes (2%) are attached to their parents as `cop`.

269 instances of `cop` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.70631970260223.

The following 19 pairs of parts of speech are connected with `cop`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (103; 38% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (36; 13% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (23; 9% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (22; 8% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (16; 6% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (14; 5% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="pcm_nsc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (10; 4% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (8; 3% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (6; 2% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (5; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="pcm_nsc-pos-DET.html">DET</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 cop	color:blue
1	#	#	PUNCT	_	_	3	punct	_	_
2	na	na	PART	_	_	3	cop	_	_
3	farmer	farmer	NOUN	_	_	0	root	_	_
4	dem	dem	PART	_	_	3	det	_	_
5	>+	>+	PUNCT	_	_	7	punct	_	_
6	dey	dey	AUX	_	_	7	cop	_	_
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 cop	color:blue
1	#	#	PUNCT	_	_	5	punct	_	_
2	because	because	SCONJ	_	_	5	mark	_	_
3	#	#	PUNCT	_	_	2	punct	_	_
4	na	na	PART	_	_	5	cop	_	_
5	im	im	PRON	_	_	0	root	_	_
6	>+	>+	PUNCT	_	_	9	punct	_	_
7	we	we	PRON	_	_	9	nsubj	_	_
8	go	go	AUX	_	_	9	aux	_	_
9	take	take	VERB	_	_	5	acl:cleft	_	_
10	make	make	VERB	_	_	9	compound:svc	_	_
11	di	di	DET	_	_	12	det	_	_
12	move	move	VERB	_	_	10	obj	_	_
13	#	#	PUNCT	_	_	15	punct	_	_
14	to	to	ADP	_	_	15	mark	_	_
15	get	get	VERB	_	_	10	advcl	_	_
16	di	di	DET	_	_	17	det	_	_
17	bread	bread	NOUN	_	_	15	obj	_	_
18	//	//	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cop	color:blue
1	#	#	PUNCT	_	_	6	punct	_	_
2	ehen	ehen	INTJ	_	_	6	discourse	_	_
3	im	im	PRON	_	_	6	nsubj	_	_
4	dey	dey	VERB	_	_	6	cop	_	_
5	very	very	ADV	_	_	6	advmod	_	_
6	interesting	interesting	ADJ	_	_	0	root	_	_
7	//	//	PUNCT	_	_	6	punct	_	_

~~~


