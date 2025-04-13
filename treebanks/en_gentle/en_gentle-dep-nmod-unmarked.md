---
layout: base
title:  'Statistics of nmod:unmarked in UD_English-GENTLE'
udver: '2'
---

## Treebank Statistics: UD_English-GENTLE: Relations: `nmod:unmarked`

This relation is a language-specific subtype of <tt><a href="en_gentle-dep-nmod.html">nmod</a></tt>.
There are also 1 other language-specific subtypes of `nmod`: <tt><a href="en_gentle-dep-nmod-poss.html">nmod:poss</a></tt>.

71 nodes (0%) are attached to their parents as `nmod:unmarked`.

67 instances of `nmod:unmarked` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.42253521126761.

The following 12 pairs of parts of speech are connected with `nmod:unmarked`: <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (27; 38% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (22; 31% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt> (4; 6% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (3; 4% instances), <tt><a href="en_gentle-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-SYM.html">SYM</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (2; 3% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gentle-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="en_gentle-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gentle-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nmod:unmarked	color:blue
1	Let	let	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=context-background:29->32:2:sem-rpt-172,181+sem-rpt-174,183+sem-rpt-176,185
2	x	x	NOUN	NN	Number=Sing	1	obj	1:obj|7:nsubj:xsubj	Entity=(31-abstract-new-cf1-1,3,5-coref(32-abstract-new-cf3-1-coref)|SpaceAfter=No
3	,	,	PUNCT	,	_	4	punct	4:punct	_
4	y	y	NOUN	NN	Number=Sing	2	conj	1:obj|2:conj|7:nsubj:xsubj	Entity=(33-abstract-new-cf4-1-coref)|SpaceAfter=No
5	,	,	PUNCT	,	_	6	punct	6:punct	_
6	z	z	NOUN	NN	Number=Sing	2	conj	1:obj|2:conj|7:nsubj:xsubj	Entity=(34-abstract-new-cf5-1-coref)31)
7	∈	∈	SYM	SYM	_	1	xcomp	1:xcomp	Entity=(31-abstract-giv:act-cf1-1-coref
8	U	U	NOUN	NN	Number=Sing	7	nmod:unmarked	7:nmod:unmarked	Entity=(8-abstract-giv:inact-cf2-1-coref)31)|SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 22	bgColor:blue
# visual-style 22	fgColor:white
# visual-style 20	bgColor:blue
# visual-style 20	fgColor:white
# visual-style 20 22 nmod:unmarked	color:blue
1	Consider	consider	VERB	VB	Mood=Imp|Person=2|VerbForm=Fin	0	root	0:root	Discourse=organization-preparation:84->86:2:lex-indwd-548+sem-synym-549-550,552+grf-col-551
2	the	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	Entity=(76-abstract-new-cf2-2-coref
3	mapping	mapping	NOUN	NN	Number=Sing	1	obj	1:obj	Entity=76)|MSeg=mapp-ing|SpaceAfter=No
4	:	:	PUNCT	:	_	5	punct	5:punct	_
5	k	k	NOUN	NN	Number=Sing	3	appos	3:appos	Discourse=organization-preparation:85->86:1:sem-synym-552,554-565+sem-lxchn-552,567+grf-col-553|Entity=(76-abstract-giv:act-cf2-1-appos)|SpaceAfter=No
6	:	:	PUNCT	:	_	8	punct	8:punct	_
7	(	(	PUNCT	-LRB-	_	8	punct	8:punct	Discourse=context-background:86->89:1:sem-rpt-549-550,588-595+sem-rpt-555,593+sem-rpt-562,595|Entity=(76-abstract-giv:act-cf2-7-disc|SpaceAfter=No
8	T	T	NOUN	NN	Number=Sing	13	nsubj	13:nsubj	Entity=(4-abstract-giv:act-cf1*-1-coref)|SpaceAfter=No
9	,	,	PUNCT	,	_	10	punct	10:punct	_
10	⪯	⪯	SYM	SYM	_	8	conj	8:conj|13:nsubj	SpaceAfter=No|XML=<w>
11	T	T	NOUN	NN	Number=Sing	10	dep	10:dep	Entity=(4-abstract-giv:act-cf1*-1-coref)|SpaceAfter=No|XML=</w>
12	)	)	PUNCT	-RRB-	_	8	punct	8:punct	_
13	→	→	SYM	SYM	_	5	parataxis	5:parataxis	_
14	(	(	PUNCT	-LRB-	_	15	punct	15:punct	SpaceAfter=No
15	U	U	NOUN	NN	Number=Sing	13	obj	13:obj	Entity=(8-abstract-giv:inact-cf4-1-coref)|SpaceAfter=No
16	,	,	PUNCT	,	_	17	punct	17:punct	_
17	⪯	⪯	SYM	SYM	_	15	conj	13:obj|15:conj	SpaceAfter=No
18	)	)	PUNCT	-RRB-	_	15	punct	15:punct	Entity=76)|SpaceAfter=No
19	:	:	PUNCT	:	_	24	punct	24:punct	_
20	k	k	NOUN	NN	Number=Sing	24	nsubj	24:nsubj	Discourse=joint-list_m:87->86:0:_|Entity=(76-abstract-giv:act-cf2-1-coref)
21	(	(	PUNCT	-LRB-	_	22	punct	22:punct	SpaceAfter=No
22	α	α	NOUN	NN	Number=Sing	20	nmod:unmarked	20:nmod:unmarked	Entity=(77-abstract-new-cf3-1-coref)|SpaceAfter=No
23	)	)	PUNCT	-RRB-	_	22	punct	22:punct	_
24	=	=	SYM	SYM	_	13	parataxis	13:parataxis	_
25	α	α	NOUN	NN	Number=Sing	24	obj	24:obj	Entity=(77-abstract-giv:act-cf3-1-coref)

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 17 nmod:unmarked	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	Discourse=joint-other_m:53->13:4:_|Entity=(1-abstract-giv:inact-cf1-2-coref
2	course	course	NOUN	NN	Number=Sing	4	nsubj	4:nsubj	Entity=1)
3	will	will	AUX	MD	VerbForm=Fin	4	aux	4:aux	_
4	meet	meet	VERB	VB	VerbForm=Inf	0	root	0:root	_
5	in	in	ADP	IN	_	6	case	6:case	_
6	Sage	Sage	PROPN	NNP	Number=Sing	4	obl	4:obl:in	Entity=(70-place-new-cf2-1-sgl|XML=<hi rend:::"bold">
7	5510	5510	NUM	CD	NumForm=Digit|NumType=Card	6	dep	6:dep	Entity=70)|XML=</hi>
8	on	on	ADP	IN	_	9	case	9:case	_
9	Tuesdays	Tuesday	PROPN	NNPS	Number=Plur	4	obl	4:obl:on	Entity=(71-time-new-cf3-1-sgl)|MSeg=Tuesday-s
10	and	and	CCONJ	CC	_	11	cc	11:cc	_
11	Fridays	Friday	PROPN	NNPS	Number=Plur	9	conj	4:obl:on|9:conj:and	Entity=(72-time-new-cf4-1-sgl)|MSeg=Friday-s
12	from	from	ADP	IN	_	13	case	13:case	_
13	10:30	10:30	NUM	CD	NumForm=Digit|NumType=Card	4	obl	4:obl:from	Entity=(73-time-new-cf5-1-sgl|XML=<time when:::"22:30">
14	pm	pm	NOUN	NN	Number=Sing	13	nmod:unmarked	13:nmod:unmarked	Entity=73)|XML=</time>
15	-	-	SYM	SYM	_	16	case	16:case	_
16	12:35	12:35	NUM	CD	NumForm=Digit|NumType=Card	4	obl	4:obl:minus	Entity=(74-time-new-cf6-1-sgl|XML=<time when:::"12:35">
17	pm	pm	NOUN	NN	Number=Sing	16	nmod:unmarked	16:nmod:unmarked	Entity=74)|SpaceAfter=No|XML=</time>
18	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


