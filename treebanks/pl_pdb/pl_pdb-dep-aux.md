---
layout: base
title:  'Statistics of aux in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `aux`

This relation is universal.
There are 4 language-specific subtypes of `aux`: <tt><a href="pl_pdb-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_pdb-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_pdb-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_pdb-dep-aux-pass.html">aux:pass</a></tt>.

1193 nodes (0%) are attached to their parents as `aux`.

975 instances of `aux` (82%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.63202011735122.

The following 7 pairs of parts of speech are connected with `aux`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (760; 64% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (267; 22% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (110; 9% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (39; 3% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (14; 1% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 aux	color:blue
1	Powiat	powiat	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	3	nsubj	3:nsubj	_
2	będzie	być	AUX	bedzie:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin	3	aux	3:aux	_
3	spłacał	spłacać	VERB	praet:sg:m3:imperf	Animacy=Inan|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	obligacje	obligacja	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	3	obj	3:obj	_
5	przez	przez	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	8	case	8:case	Case=Acc
6	następnych	następny	ADJ	adj:pl:gen:m3:pos	Animacy=Inan|Case=Gen|Degree=Pos|Gender=Masc|Number=Plur	8	amod	8:amod	_
7	18	18	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	8	nummod:gov	8:nummod:gov	_
8	lat	rok	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	3	obl	3:obl	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	To	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
2	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	by	by	AUX	part	_	4	aux:cnd	4:aux:cnd	_
4	tragedia	tragedia	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux	color:blue
1	Ale	ale	CCONJ	conj	_	6	cc	6:cc	_
2	było	być	AUX	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	6	aux	6:aux	_
3	mu	on	PRON	ppron3:sg:dat:m1:ter:nakc:npraep	Animacy=Hum|Case=Dat|Gender=Masc|Number=Sing|Person=3|PrepCase=Npr|PronType=Prs|Variant=Short	6	iobj	6:iobj	_
4	z	z	ADP	prep:inst:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Ins
5	tym	to	PRON	subst:sg:inst:n:ncol	Case=Ins|Gender=Neut|Number=Sing|PronType=Dem	6	obl	6:obl	_
6	dobrze	dobrze	ADV	adv:pos	Degree=Pos	0	root	0:root	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	_

~~~


