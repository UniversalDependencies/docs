---
layout: base
title:  'Statistics of xcomp in UD_Polish-SZ'
udver: '2'
---

## Treebank Statistics: UD_Polish-SZ: Relations: `xcomp`

This relation is universal.

1186 nodes (1%) are attached to their parents as `xcomp`.

1156 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.10961214165261.

The following 13 pairs of parts of speech are connected with `xcomp`: <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (958; 81% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt> (123; 10% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (53; 4% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt> (15; 1% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt> (12; 1% instances), <tt><a href="pl_sz-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (11; 1% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-DET.html">DET</a></tt> (8; 1% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_sz-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-AUX.html">AUX</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_sz-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_sz-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_sz-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 xcomp	color:blue
1	Muszę	musieć	VERB	fin:sg:pri:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	jechać	jechać	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf	1	xcomp	_	_
3	do	do	ADP	prep:gen	AdpType=Prep|Case=Gen	4	case	_	_
4	domu	dom	NOUN	subst:sg:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	2	obl:arg	_	SpaceAfter=No
5	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 xcomp	color:blue
1	Potrafisz	potrafić	VERB	fin:sg:sec:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	także	także	PART	qub	_	1	advmod	_	_
3	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf	4	cop	_	_
4	kłótliwym	kłótliwy	ADJ	adj:sg:inst:m1:pos	Animacy=Hum|Case=Ins|Degree=Pos|Gender=Masc|Number=Sing	1	xcomp	_	SpaceAfter=No
5	.	.	PUNCT	interp	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Pokonał	pokonać	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	0	root	_	_
2	nieznane	nieznane	NOUN	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing	1	obj	_	SpaceAfter=No
3	,	,	PUNCT	interp	_	8	punct	_	_
4	ale	ale	CCONJ	conj	_	8	cc	_	_
5	nie	nie	PART	qub	_	8	advmod	_	_
6	było	być	AUX	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Act	8	cop	_	_
7	mu	on	PRON	ppron3:sg:dat:m1:ter:nakc:npraep	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	8	obj	_	_
8	dane	dany	ADJ	adj:sg:nom:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	1	conj	_	_
9	opowiedzieć	opowiedzieć	VERB	inf:perf	Aspect=Perf|VerbForm=Inf	8	xcomp	_	_
10	o	o	ADP	prep:loc	AdpType=Prep|Case=Loc	11	case	_	_
11	tym	to	PRON	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	9	obl:arg	_	SpaceAfter=No
12	.	.	PUNCT	interp	_	1	punct	_	SpaceAfter=No
13	.	.	PUNCT	interp	_	1	punct	_	SpaceAfter=No
14	.	.	PUNCT	interp	_	1	punct	_	_

~~~


