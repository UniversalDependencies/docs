---
layout: base
title:  'Statistics of cc:preconj in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `cc:preconj`

This relation is a language-specific subtype of <tt><a href="pl_lfg-dep-cc.html">cc</a></tt>.

40 nodes (0%) are attached to their parents as `cc:preconj`.

40 instances of `cc:preconj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.55.

The following 6 pairs of parts of speech are connected with `cc:preconj`: <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (27; 68% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (4; 10% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (3; 8% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (3; 8% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (2; 5% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-CCONJ.html">CCONJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Promocję	promocja	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	2	obl	2:obl	_
2	miała	mieć	VERB	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	i	i	CCONJ	conj	_	4	cc:preconj	4:cc:preconj	_
4	Pepsi	pepsi	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	nsubj	2:nsubj	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	i	i	CCONJ	conj	_	7	cc	7:cc	_
7	Zamek	zamek	NOUN	subst:sg:nom:m3	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc3	4	conj	2:nsubj|4:conj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cc:preconj	color:blue
1	Tutaj	tutaj	ADV	adv	PronType=Dem	3	advmod	3:advmod	_
2	nie	nie	PART	qub	Polarity=Neg	3	advmod	3:advmod	_
3	odnajdą	odnaleźć	VERB	fin:pl:ter:perf	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	go	on	PRON	ppron3:sg:gen:m1:ter:nakc:npraep	Case=Gen|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|SubGender=Masc1|Variant=Short	3	obj	3:obj	_
5	ani	ani	CCONJ	conj	_	6	cc:preconj	6:cc:preconj	_
6	Doppler	Doppler	PROPN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	3	nsubj	3:nsubj	SpaceAfter=No
7	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
8	ani	ani	CCONJ	conj	_	9	cc	9:cc	_
9	Georg	Georg	PROPN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	6	conj	3:nsubj|6:conj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 cc:preconj	color:blue
1	Nie	nie	PART	qub	Polarity=Neg	4	advmod	4:advmod|7:advmod	_
2	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	cop	4:cop|7:cop	_
3	ani	ani	CCONJ	conj	_	4	cc:preconj	4:cc:preconj	_
4	ładna	ładny	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	ani	ani	CCONJ	conj	_	7	cc	7:cc	_
7	brzydka	brzydki	ADJ	adj:sg:nom:f:pos	Case=Nom|Degree=Pos|Gender=Fem|Number=Sing	4	conj	4:conj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


