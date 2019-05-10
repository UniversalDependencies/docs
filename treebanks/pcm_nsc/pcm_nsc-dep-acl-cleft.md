---
layout: base
title:  'Statistics of acl:cleft in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `acl:cleft`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="pcm_nsc-dep-acl-relcl.html">acl:relcl</a></tt>.

96 nodes (1%) are attached to their parents as `acl:cleft`.

96 instances of `acl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.25.

The following 16 pairs of parts of speech are connected with `acl:cleft`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (36; 38% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (20; 21% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (9; 9% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (7; 7% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (5; 5% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (3; 3% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-DET.html">DET</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 acl:cleft	color:blue
1	#	#	PUNCT	_	_	4	punct	_	_
2	but	but	CCONJ	_	_	4	cc	_	_
3	na	na	AUX	PART	_	4	cop	_	_
4	landlord	landlord	NOUN	_	_	0	root	_	_
5	dem	dem	DET	PART	_	4	det	_	_
6	>+	>+	PUNCT	_	_	10	punct	_	_
7	di	di	DET	_	_	8	det	_	_
8	matter	matter	NOUN	_	_	10	nsubj	_	_
9	come	come	AUX	_	_	10	aux	_	_
10	concern	concern	VERB	_	_	4	acl:cleft	_	_
11	well	well	ADV	_	_	10	advmod	_	_
12	well	well	ADV	_	_	11	conj:redup	_	_
13	o	o	ADV	PART	_	12	advmod:emph	_	_
14	//	//	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:cleft	color:blue
1	#	#	PUNCT	_	_	5	punct	_	_
2	because	because	SCONJ	_	_	5	mark	_	_
3	#	#	PUNCT	_	_	2	punct	_	_
4	na	na	AUX	PART	_	5	cop	_	_
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 acl:cleft	color:blue
1	na	na	AUX	PART	_	2	cop	_	_
2	God	God	PROPN	_	_	0	root	_	_
3	>+	>+	PUNCT	_	_	5	punct	_	_
4	go	go	AUX	_	_	5	aux	_	_
5	save	save	VERB	_	_	2	acl:cleft	_	_
6	person	person	NOUN	_	_	5	obj	_	_
7	dey	dey	AUX	_	_	8	aux	_	_
8	go	go	VERB	_	_	5	compound:svc	_	_
9	o	o	ADV	PART	_	8	advmod:emph	_	_
10	//	//	PUNCT	_	_	2	punct	_	_

~~~


