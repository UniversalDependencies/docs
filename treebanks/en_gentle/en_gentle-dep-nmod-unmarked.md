---
layout: base
title:  'Statistics of nmod:unmarked in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_gentle-dep-nmod-desc.html">nmod:desc</a></tt>, <tt><a href="en_gentle-dep-nmod-poss.html">nmod:poss</a></tt>.

78 nodes (0%) are attached to their parents as `nmod:unmarked`.

72 instances of `nmod:unmarked` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.56410256410256.

The following 13 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (27; 35% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (23; 29% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (6; 8% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:unmarked	color:blue
1	Let	let	VERB	VB	Mood=Imp|Number=Sing|Person=2|VerbForm=Fin	0	root	0:root	Discourse=context-background:29->32:2:sem-rpt-172,181-_+sem-rpt-174,183-_+sem-rpt-176,185-_
2	x	x	NOUN	NN	Number=Sing	1	obj	1:obj|7:nsubj:xsubj	Entity=(31-abstract-new-nnnnn-cf1-1,3,5-coref(32-abstract-new-nnnnn-cf3-1-coref)|SpaceAfter=No
3	,	,	PUNCT	,	_	4	punct	4:punct	_
4	y	y	NOUN	NN	Number=Sing	2	conj	1:obj|2:conj|7:nsubj:xsubj	Entity=(33-abstract-new-nnnnn-cf4-1-coref)|SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	z	z	NOUN	NN	Number=Sing	2	conj	1:obj|2:conj|7:nsubj:xsubj	Entity=(34-abstract-new-nnnnn-cf5-1-coref)31)
7	∈	∈	SYM	SYM	_	1	xcomp	1:xcomp	Entity=(31-abstract-giv:act-nnnnn-cf1-1-coref
8	U	U	NOUN	NN	Number=Sing	7	nmod:unmarked	7:nmod:unmarked	Entity=(8-abstract-giv:inact-nssss-cf2-1-coref)31)|SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 nmod:unmarked	color:blue
1	4.	4.	X	LS	_	2	discourse	2:discourse	Discourse=joint-list_m:35->32:0:grf-seq-239-_
2	Flagyl	Flagyl	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(6-substance-giv:inact-nnsnn-cf2-1-coref-Metronidazole)
3	500	500	NUM	CD	NumForm=Digit|NumType=Card	4	nummod	4:nummod	Entity=(45-substance-new-nnnnn-cf3-2-sgl
4	mg	milligram	NOUN	NNS	Abbr=Yes|Number=Plur	2	nmod:unmarked	2:nmod:unmarked	Entity=45)
5	four	four	NUM	CD	NumForm=Word|NumType=Card	6	nummod	6:nummod	_
6	times	time	NOUN	NNS	Number=Plur	2	nmod:unmarked	2:nmod:unmarked	MSeg=time-s
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	Entity=(42-time-giv:act-nnnnn-cf1*-2-coref
8	day	day	NOUN	NN	Number=Sing	6	nmod:unmarked	6:nmod:unmarked	Entity=42)|SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 nmod:unmarked	color:blue
1	4.	4.	X	LS	_	2	discourse	2:discourse	Discourse=joint-list_m:35->32:0:grf-seq-239-_
2	Flagyl	Flagyl	PROPN	NNP	Number=Sing	0	root	0:root	Entity=(6-substance-giv:inact-nnsnn-cf2-1-coref-Metronidazole)
3	500	500	NUM	CD	NumForm=Digit|NumType=Card	4	nummod	4:nummod	Entity=(45-substance-new-nnnnn-cf3-2-sgl
4	mg	milligram	NOUN	NNS	Abbr=Yes|Number=Plur	2	nmod:unmarked	2:nmod:unmarked	Entity=45)
5	four	four	NUM	CD	NumForm=Word|NumType=Card	6	nummod	6:nummod	_
6	times	time	NOUN	NNS	Number=Plur	2	nmod:unmarked	2:nmod:unmarked	MSeg=time-s
7	a	a	DET	DT	Definite=Ind|PronType=Art	8	det	8:det	Entity=(42-time-giv:act-nnnnn-cf1*-2-coref
8	day	day	NOUN	NN	Number=Sing	6	nmod:unmarked	6:nmod:unmarked	Entity=42)|SpaceAfter=No
9	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


