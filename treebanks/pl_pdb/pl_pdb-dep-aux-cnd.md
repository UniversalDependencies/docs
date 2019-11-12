---
layout: base
title:  'Statistics of aux:cnd in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `aux:cnd`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_pdb-dep-aux-clitic.html">aux:clitic</a></tt>, <tt><a href="pl_pdb-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_pdb-dep-aux-pass.html">aux:pass</a></tt>.

620 nodes (0%) are attached to their parents as `aux:cnd`.

481 instances of `aux:cnd` (78%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.30161290322581.

The following 6 pairs of parts of speech are connected with `aux:cnd`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (549; 89% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (44; 7% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (14; 2% instances), <tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (10; 2% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 aux:cnd	color:blue
1	Sprawdźmy	sprawdzić	VERB	impt:pl:pri:perf	Aspect=Perf|Mood=Imp|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
2	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
3	czy	czy	PART	part	PartType=Int	5	advmod	5:advmod	_
4	istotnie	istotnie	ADV	adv:pos	Degree=Pos	5	parataxis:insert	5:parataxis:insert	_
5	potrafili	potrafić	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	1	ccomp	1:ccomp	_
6	by	by	AUX	part	_	5	aux:cnd	5:aux:cnd	_
7	śmy	być	AUX	aglt:pl:pri:imperf:nwok	Aspect=Imp|Clitic=Yes|Number=Plur|Person=1|Variant=Short	5	aux:clitic	5:aux:clitic	_
8	to	to	PRON	subst:sg:acc:n:ncol	Case=Acc|Gender=Neut|Number=Sing|PronType=Dem	9	obj	9:obj	_
9	zrobić	zrobić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	5	xcomp	5:xcomp	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:cnd	color:blue
1	W	w	ADP	prep:acc:nwok	AdpType=Prep|Variant=Short	3	case	3:case	Case=Acc
2	ten	ten	DET	adj:sg:acc:m3:pos	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing|PronType=Dem	3	det	3:det	_
3	sposób	sposób	NOUN	subst:sg:acc:m3	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obl	7:obl	_
4	to	to	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	7	nsubj:pass	7:nsubj:pass	_
5	było	być	AUX	praet:sg:n:imperf	Aspect=Imp|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	7:aux:pass	_
6	by	by	AUX	part	_	7	aux:cnd	7:aux:cnd	_
7	zbudowane	zbudować	ADJ	ppas:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
8	powoli	powoli	ADV	adv	_	7	advmod	7:advmod	_
9	i	i	CCONJ	conj	_	10	cc	10:cc	_
10	starannie	starannie	ADV	adv:pos	Degree=Pos	8	conj	7:advmod|8:conj	SpaceAfter=No
11	.	.	PUNCT	interp	PunctType=Peri	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:cnd	color:blue
1	To	to	AUX	pred	Mood=Ind|Tense=Pres|VerbForm=Fin|VerbType=Quasi	4	cop	4:cop	_
2	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	by	by	AUX	part	_	4	aux:cnd	4:aux:cnd	_
4	tragedia	tragedia	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


