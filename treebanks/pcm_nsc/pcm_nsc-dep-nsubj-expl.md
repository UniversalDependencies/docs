---
layout: base
title:  'Statistics of nsubj:expl in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nsubj:expl`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nsubj.html">nsubj</a></tt>.
There are also 2 other language-specific subtypes of `nsubj`: <tt><a href="pcm_nsc-dep-nsubj-pass.html">nsubj:pass</a></tt>, <tt><a href="pcm_nsc-dep-nsubj-quasi.html">nsubj:quasi</a></tt>.

30 nodes (0%) are attached to their parents as `nsubj:expl`.

30 instances of `nsubj:expl` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36666666666667.

The following 4 pairs of parts of speech are connected with `nsubj:expl`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (22; 73% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (5; 17% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (2; 7% instances), <tt><a href="pcm_nsc-pos-PART.html">PART</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:expl	color:blue
1	im	im	PRON	_	_	2	nsubj:expl	_	_
2	get	get	VERB	_	_	0	root	_	_
3	one	one	DET	_	_	4	det	_	_
4	man	man	NOUN	_	_	2	nsubj:quasi	_	_
5	wey	wey	SCONJ	_	_	10	mark	_	_
6	be	be	VERB	_	_	5	fixed	_	_
7	sey	sey	SCONJ	_	_	5	fixed	_	_
8	im	im	PRON	_	_	10	nsubj	_	_
9	don	don	AUX	_	_	10	aux	_	_
10	carry	carry	VERB	_	_	4	acl:relcl	_	_
11	people	people	NOUN	_	_	10	obj	_	_
12	dey	dey	AUX	_	_	13	aux	_	_
13	go	go	VERB	_	_	10	compound:svc	_	_
14	abroad	abroad	ADV	_	_	13	obl:arg	_	_
15	//	//	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nsubj:expl	color:blue
1	if	if	SCONJ	_	_	5	mark	_	_
2	your	your	PRON	_	_	3	nmod:poss	_	_
3	tyre	tyre	NOUN	_	_	5	nsubj	_	_
4	don	don	AUX	_	_	5	aux	_	_
5	expire	expire	VERB	_	_	9	advcl	_	_
6	<+	<+	PUNCT	_	_	5	punct	_	_
7	#	#	PUNCT	_	_	5	punct	_	_
8	im	im	PRON	_	_	9	nsubj:expl	_	_
9	better	better	ADJ	_	_	0	root	_	_
10	make	make	AUX	_	_	13	aux	_	_
11	you	you	PRON	_	_	13	nsubj	_	_
12	no	no	ADV	PART	_	13	advmod	_	_
13	use	use	VERB	_	_	9	csubj:quasi	_	_
14	am	am	PRON	_	_	13	obj	_	_
15	again	again	ADV	_	_	13	advmod	_	_
16	//	//	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nsubj:expl	color:blue
1	{	{	PUNCT	_	_	6	punct	_	_
2	it	it	PRON	_	_	6	nsubj:expl	_	_
3	is	be	AUX	VERB	_	6	cop	_	_
4	on	on	ADP	_	_	6	case	_	_
5	di	di	DET	_	_	6	det	_	_
6	tire	tire	NOUN	_	_	0	root	_	_
7	||	||	PUNCT	_	_	18	punct	_	_
8	{	{	PUNCT	_	_	11	punct	_	_
9	di	di	DET	_	_	11	det	_	_
10	whole	whole	ADJ	_	_	11	amod	_	_
11	vehicle	vehicle	NOUN	_	_	18	dislocated	_	_
12	||	||	PUNCT	_	_	13	punct	_	_
13	everything	everything	PRON	_	_	11	conj:dicto	_	_
14	}	}	PUNCT	_	_	11	punct	_	_
15	<	<	PUNCT	_	_	18	punct	_	_
16	na	na	AUX	PART	_	18	cop	_	_
17	on	on	ADP	_	_	18	case	_	_
18	top	top	ADJ	_	_	6	conj:dicto	_	_
19	tire	tire	NOUN	_	_	18	nmod	_	_
20	}	}	PUNCT	_	_	18	punct	_	_
21	>+	>+	PUNCT	_	_	24	punct	_	_
22	im	im	PRON	_	_	24	nsubj	_	_
23	dey	dey	AUX	_	_	24	aux	_	_
24	rest	rest	VERB	_	_	18	acl:cleft	_	_
25	//	//	PUNCT	_	_	6	punct	_	_

~~~


