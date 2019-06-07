---
layout: base
title:  'Statistics of vocative in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `vocative`

This relation is universal.

269 nodes (0%) are attached to their parents as `vocative`.

156 instances of `vocative` (58%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.86245353159851.

The following 16 pairs of parts of speech are connected with `vocative`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (134; 50% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (91; 34% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (12; 4% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (4; 1% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (3; 1% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="pl_pdb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 vocative	color:blue
1	-	-	PUNCT	interp	PunctType=Hyph	8	punct	8:punct	_
2	Panie	pan	NOUN	subst:sg:voc:m1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Sing	8	vocative	8:vocative	_
3	podchorąży	podchorąży	NOUN	subst:sg:voc:m1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Sing	2	appos	2:appos	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
5	niech	niech	AUX	part	_	8	aux:imp	8:aux:imp	_
6	się	się	PRON	part	PronType=Prs|Reflex=Yes	8	expl:pv	8:expl:pv	_
7	pan	pan	NOUN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	8:nsubj	_
8	pośpieszy	pośpieszyć	VERB	fin:sg:ter:perf	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Fut|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 vocative	color:blue
1	Od	od	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Gen
2	wolnej	wolny	ADJ	adj:sg:gen:f:pos	Case=Gen|Degree=Pos|Gender=Fem|Number=Sing	3	amod	3:amod	_
3	woli	wola	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	4	obl:arg	4:obl:arg	_
4	wybaw	wybawić	VERB	impt:sg:sec:perf	Aspect=Perf|Mood=Imp|Number=Sing|Person=2|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	nas	my	PRON	ppron12:pl:acc:m1:pri	Animacy=Hum|Case=Acc|Gender=Masc|Number=Plur|Person=1|PronType=Prs	4	obj	4:obj	SpaceAfter=No
6	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
7	Panie	Pan	PROPN	subst:sg:voc:m1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Sing	4	vocative	4:vocative	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 vocative	color:blue
1	Dobra	dobra	INTJ	interj	_	5	discourse:intj	5:discourse:intj	_
2	ludzie	człowiek	NOUN	subst:pl:voc:m1	Animacy=Hum|Case=Voc|Gender=Masc|Number=Plur	5	vocative	5:vocative	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	2	punct	2:punct	_
4	teraz	teraz	ADV	adv	_	5	advmod	5:advmod	_
5	brawa	brawo	NOUN	subst:pl:nom:n:ncol	Case=Nom|Gender=Neut|Number=Plur	0	root	0:root	SpaceAfter=No
6	.	.	PUNCT	interp	PunctType=Peri	5	punct	5:punct	SpaceAfter=No
7	.	.	PUNCT	interp	PunctType=Peri	6	punct	6:punct	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


