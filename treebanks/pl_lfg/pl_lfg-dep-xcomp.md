---
layout: base
title:  'Statistics of xcomp in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `xcomp`

This relation is universal.
There are 1 language-specific subtypes of `xcomp`: <tt><a href="pl_lfg-dep-xcomp-obj.html">xcomp:obj</a></tt>.

2223 nodes (2%) are attached to their parents as `xcomp`.

2158 instances of `xcomp` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.0395861448493.

The following 12 pairs of parts of speech are connected with `xcomp`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (1874; 84% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (180; 8% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (130; 6% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (16; 1% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	4	punct	4:punct	_
2	A	a	CCONJ	conj	_	4	cc	4:cc	_
3	czemu	czemu	ADV	adv	PronType=Int	4	advmod	4:advmod	_
4	miał	mieć	VERB	praet:sg:m2:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc2|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	pójść	pójść	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	4	xcomp	4:xcomp	SpaceAfter=No
6	?	?	PUNCT	interp	PunctType=Qest	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 xcomp	color:blue
1	Blondyn	blondyn	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	2	nsubj	2:nsubj|4:nsubj	_
2	zaczął	zacząć	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	być	być	AUX	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	4	cop	4:cop	_
4	zły	zły	ADJ	adj:sg:nom:m1:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	2	xcomp	2:xcomp	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 xcomp	color:blue
1	A	a	CCONJ	conj	_	4	cc	4:cc	_
2	wtedy	wtedy	ADV	adv	PronType=Dem	4	advmod	4:advmod	_
3	życie	życie	NOUN	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing	4	nsubj	4:nsubj|6:nsubj	_
4	staje	stawać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	się	się	PRON	qub	PronType=Prs|Reflex=Yes	4	expl:pv	4:expl:pv	_
6	piekłem	piekło	NOUN	subst:sg:inst:n	Case=Ins|Gender=Neut|Number=Sing	4	xcomp	4:xcomp	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


