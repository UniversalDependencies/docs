---
layout: base
title:  'Statistics of compound:atov in UD_Vietnamese-VTB'
udver: '2'
---

## Treebank Statistics: UD_Vietnamese-VTB: Relations: `compound:atov`

This relation is a language-specific subtype of <tt><a href="vi_vtb-dep-compound.html">compound</a></tt>.
There are also 11 other language-specific subtypes of `compound`: <tt><a href="vi_vtb-dep-compound-adj.html">compound:adj</a></tt>, <tt><a href="vi_vtb-dep-compound-amod.html">compound:amod</a></tt>, <tt><a href="vi_vtb-dep-compound-apr.html">compound:apr</a></tt>, <tt><a href="vi_vtb-dep-compound-dir.html">compound:dir</a></tt>, <tt><a href="vi_vtb-dep-compound-pron.html">compound:pron</a></tt>, <tt><a href="vi_vtb-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="vi_vtb-dep-compound-redup.html">compound:redup</a></tt>, <tt><a href="vi_vtb-dep-compound-svc.html">compound:svc</a></tt>, <tt><a href="vi_vtb-dep-compound-verbnoun.html">compound:verbnoun</a></tt>, <tt><a href="vi_vtb-dep-compound-vmod.html">compound:vmod</a></tt>, <tt><a href="vi_vtb-dep-compound-z.html">compound:z</a></tt>.

24 nodes (0%) are attached to their parents as `compound:atov`.

22 instances of `compound:atov` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08333333333333.

The following 7 pairs of parts of speech are connected with `compound:atov`: <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (15; 63% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt> (3; 13% instances), <tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (2; 8% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="vi_vtb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="vi_vtb-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="vi_vtb-pos-ADV.html">ADV</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="vi_vtb-pos-SYM.html">SYM</a></tt>-<tt><a href="vi_vtb-pos-VERB.html">VERB</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 compound:atov	color:blue
1	Ra	ra	VERB	V	_	6	csubj:vsubj	_	_
2	ngoài	ngoài	NOUN	N	_	1	obj	_	_
3	một mình	một mình	X	X	_	1	obl	_	_
4	nhiều	nhiều	ADJ	Adj	_	1	amod	_	_
5	thì	thì	SCONJ	SC	_	6	mark	_	_
6	dễ	dễ	ADJ	Adj	_	0	root	_	_
7	bị	bị	AUX	AUX	_	6	aux:pass	_	_
8	lộ	lộ	VERB	V	_	6	compound:atov	_	_
9	.	.	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 compound:atov	color:blue
1	Chị	chị	NOUN	N	_	2	nsubj	_	_
2	già	già	ADJ	Adj	_	0	root	_	_
3	đi	đi	ADV	Adv	_	2	compound:atov	_	_
4	rất	rất	ADV	Adv	_	5	advmod	_	_
5	nhiều	nhiều	ADJ	Adj	_	2	advmod:adj	_	_
6	so	so	VERB	V	_	2	xcomp:adj	_	_
7	với	với	ADP	Pre	_	9	case	_	_
8	cái	cái	NOUN	Nc	_	9	clf	_	_
9	tuổi	tuổi	NOUN	N	_	6	obl	_	_
10	35	35	NUM	Num	_	9	nummod	_	_
11	của	của	ADP	Pre	_	12	case	_	_
12	mình	mình	PRON	Pro	_	9	nmod:poss	_	_
13	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 compound:atov	color:blue
1	Nấn ná	nấn ná	VERB	V	_	0	root	_	_
2	chần chừ	chần chừ	VERB	V	_	1	xcomp	_	_
3	,	,	PUNCT	,	_	8	punct	_	_
4	càng	càng	ADV	Adv	_	5	advmod	_	_
5	lâu	lâu	ADJ	Adj	_	8	obl:tmod	_	_
6	càng	càng	ADV	Adv	_	8	advmod	_	_
7	khó	khó	ADJ	Adj	_	8	compound:atov	_	_
8	nói	nói	VERB	V	_	1	parataxis	_	_
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


