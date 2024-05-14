---
layout: base
title:  'Statistics of advcl in UD_Polish-LFG'
udver: '2'
---

## Treebank Statistics: UD_Polish-LFG: Relations: `advcl`

This relation is universal.

919 nodes (1%) are attached to their parents as `advcl`.

567 instances of `advcl` (62%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.87486398258977.

The following 14 pairs of parts of speech are connected with `advcl`: <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (700; 76% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (163; 18% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (19; 2% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (11; 1% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="pl_lfg-pos-DET.html">DET</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="pl_lfg-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pl_lfg-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_lfg-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_lfg-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pl_lfg-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_lfg-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 advcl	color:blue
1	Bawią	bawić	VERB	fin:pl:ter:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	Cię	ty	PRON	ppron12:sg:acc:m1:sec:nakc	Case=Acc|Gender=Masc|Number=Sing|Person=2|PronType=Prs|SubGender=Masc1|Variant=Short	1	obl	1:obl	_
3	moje	mój	DET	adj:pl:nom:f:pos	Case=Nom|Gender=Fem|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	4	det	4:det	_
4	zalety	zaleta	NOUN	subst:pl:nom:f	Case=Nom|Gender=Fem|Number=Plur	1	nsubj	1:nsubj	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
6	jak	jak	ADV	adv:pos	Degree=Pos|PronType=Int	7	advmod	7:advmod	_
7	bawiły	bawić	VERB	praet:pl:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	1	advcl	1:advcl	_
8	ojca	ojciec	NOUN	subst:sg:acc:m1	Case=Acc|Gender=Masc|Number=Sing|SubGender=Masc1	7	obl	7:obl	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 9 advcl	color:blue
1	Ale	ale	CCONJ	conj	_	4	cc	4:cc	_
2	ja	ja	PRON	ppron12:sg:nom:m1:pri	Case=Nom|Gender=Masc|Number=Sing|Person=1|PronType=Prs|SubGender=Masc1	4	nsubj	4:nsubj	_
3	to	to	PRON	subst:sg:acc:n	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	4	obj	4:obj	_
4	dokończę	dokończyć	VERB	fin:sg:pri:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=1|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	9	punct	9:punct	_
6	bo	bo	SCONJ	comp	_	9	mark	9:mark	_
7	to	to	PRON	subst:sg:nom:n	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	9	nsubj	9:nsubj	_
8	jest	być	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	9:cop	_
9	ważne	ważny	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	advcl	4:advcl:bo	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 advcl	color:blue
1	Był	być	AUX	praet:sg:m1:imperf	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|SubGender=Masc1|Tense=Past|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
2	pierwszy	pierwszy	ADJ	adj:sg:nom:m1:pos	Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|SubGender=Masc1	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	8	punct	8:punct	_
4	bo	bo	SCONJ	comp	_	8	mark	8:mark	_
5	kilku	kilka	DET	num:pl:acc:m1:rec	Case=Acc|Gender=Masc|Number=Plur|NumType=Card|PronType=Ind|SubGender=Masc1	6	det	6:det	DepType=Rec
6	innych	inny	ADJ	adj:pl:gen:m1:pos	Case=Gen|Degree=Pos|Gender=Masc|Number=Plur|SubGender=Masc1	8	nsubj	8:nsubj	_
7	także	także	PART	qub	_	8	advmod	8:advmod	_
8	otwierało	otwierać	VERB	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	2:advcl:bo	_
9	usta	usta	NOUN	subst:pl:acc:n	Case=Acc|Gender=Neut|Number=Plur	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


