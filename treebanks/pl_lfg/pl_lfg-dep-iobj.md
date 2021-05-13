---
layout: base
title:  'Statistics of iobj in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `iobj`

This relation is universal.

1324 nodes (1%) are attached to their parents as `iobj`.

821 instances of `iobj` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57401812688822.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (902; 68% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (325; 25% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt> (70; 5% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (11; 1% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 iobj	color:blue
1	-	-	PUNCT	interp	PunctType=Dash	6	punct	6:punct	_
2	A	a	CCONJ	conj	_	6	cc	6:cc	_
3	może	może	PART	qub	_	6	advmod	6:advmod	_
4	jemu	on	PRON	ppron3:sg:dat:m2:ter:akc:npraep	Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|SubGender=Masc2|Variant=Long	6	iobj	6:iobj	_
5	kocicy	kocica	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	6	obl	6:obl	_
6	zachciawszy	zachcieć	VERB	pant:perf	Aspect=Perf|Tense=Past|VerbForm=Conv|Voice=Act	0	root	0:root	_
7	sia	się	PRON	qub	PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	SpaceAfter=No
8	?	?	PUNCT	interp	PunctType=Qest	6	punct	6:punct	SpaceAfter=No
9	!	!	PUNCT	interp	PunctType=Excl	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 iobj	color:blue
1	Chłopak	chłopak	NOUN	subst:sg:nom:m1	Case=Nom|Gender=Masc|Number=Sing|SubGender=Masc1	2	nsubj	2:nsubj|4:nsubj	_
2	uciekł	uciec	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	i	i	CCONJ	conj	_	4	cc	4:cc	_
4	opowiedział	opowiedzieć	VERB	praet:sg:m1:perf	Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	2:conj	_
5	wszystko	wszystko	PRON	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing|PronType=Tot	4	obj	4:obj	_
6	policji	policja	NOUN	subst:sg:dat:f	Case=Dat|Gender=Fem|Number=Sing	4	iobj	4:iobj	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 iobj	color:blue
1	Kazał	kazać	VERB	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Number=Sing|Person=1|Variant=Long	1	aux:clitic	1:aux:clitic	_
3	Mroczkowi	Mroczek	PROPN	subst:sg:dat:m1	Case=Dat|Gender=Masc|Number=Sing|SubGender=Masc1	1	iobj	1:iobj|4:nsubj	_
4	zawiesić	zawiesić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	1	xcomp	1:xcomp	_
5	na	na	ADP	prep:loc	AdpType=Prep	6	case	6:case	Case=Loc
6	drzewie	drzewo	NOUN	subst:sg:loc:n	Case=Loc|Gender=Neut|Number=Sing	4	obl	4:obl:na	_
7	antenę	antena	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	4	obj	4:obj	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


