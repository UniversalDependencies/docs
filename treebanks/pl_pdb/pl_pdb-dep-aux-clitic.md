---
layout: base
title:  'Statistics of aux:clitic in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `aux:clitic`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-aux.html">aux</a></tt>.
There are also 3 other language-specific subtypes of `aux`: <tt><a href="pl_pdb-dep-aux-cnd.html">aux:cnd</a></tt>, <tt><a href="pl_pdb-dep-aux-imp.html">aux:imp</a></tt>, <tt><a href="pl_pdb-dep-aux-pass.html">aux:pass</a></tt>.

2139 nodes (1%) are attached to their parents as `aux:clitic`.

1952 instances of `aux:clitic` (91%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14212248714352.

The following 6 pairs of parts of speech are connected with `aux:clitic`: <tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (2065; 97% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (51; 2% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (17; 1% instances), <tt><a href="pl_pdb-pos-DET.html">DET</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-PART.html">PART</a></tt>-<tt><a href="pl_pdb-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 aux:clitic	color:blue
1	Po	po	ADP	prep:loc	AdpType=Prep	3	case	3:case	Case=Loc
2	całodziennej	całodzienny	ADJ	adj:sg:loc:f:pos	Case=Loc|Degree=Pos|Gender=Fem|Number=Sing	3	amod	3:amod	_
3	harówce	harówka	NOUN	subst:sg:loc:f	Case=Loc|Gender=Fem|Number=Sing	4	obl	4:obl	_
4	stracił	stracić	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	_
5	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	4	aux:clitic	4:aux:clitic	_
6	dziś	dziś	ADV	adv	_	4	advmod	4:advmod	_
7	kolejne	kolejny	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	9	amod	9:amod	_
8	pół	pół	NUM	num:sg:acc:n:rec:ncol	Case=Acc|Gender=Neut|Number=Sing|NumForm=Word	9	nummod:gov	9:nummod:gov	_
9	kilo	kilo	NOUN	subst:sg:gen:n:ncol	Case=Gen|Gender=Neut|Number=Sing	4	obj	4:obj	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux:clitic	color:blue
1	I	i	CCONJ	conj	_	4	cc	4:cc	_
2	był	być	AUX	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
3	em	być	AUX	aglt:sg:pri:imperf:wok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Long	4	aux:clitic	4:aux:clitic	_
4	przygotowany	przygotować	ADJ	ppas:sg:nom:m1:perf:aff	Animacy=Hum|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	na	na	ADP	prep:acc	AdpType=Prep	7	case	7:case	Case=Acc
6	inne	inny	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	7	amod	7:amod	_
7	rzeczy	rzecz	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	4	obl:arg	4:obl:arg	SpaceAfter=No
8	,	,	PUNCT	interp	PunctType=Comm	10	punct	10:punct	_
9	żeby	żeby	SCONJ	comp	_	10	mark	10:mark	_
10	móc	móc	VERB	inf:imperf	Aspect=Imp|VerbForm=Inf|Voice=Act	4	advcl	4:advcl	_
11	cię	ty	PRON	ppron12:sg:acc:f:sec:nakc	Case=Acc|Gender=Fem|Number=Sing|Person=2|PronType=Prs|Variant=Short	12	obj	12:obj	_
12	nakarmić	nakarmić	VERB	inf:perf	Aspect=Perf|VerbForm=Inf|Voice=Act	10	xcomp	10:xcomp	SpaceAfter=No
13	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:clitic	color:blue
1	Oni	on	PRON	ppron3:pl:nom:m1:ter:akc:npraep	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	2	nsubj	2:nsubj	_
2	myśleli	myśleć	VERB	praet:pl:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Tense=Past|VerbForm=Fin|Voice=Act	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	interp	PunctType=Comm	7	punct	7:punct	_
4	że	że	SCONJ	comp	_	7	mark	7:mark|11:mark	_
5	była	być	AUX	praet:sg:f:imperf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	cop	7:cop	_
6	m	być	AUX	aglt:sg:pri:imperf:nwok	Aspect=Imp|Clitic=Yes|Number=Sing|Person=1|Variant=Short	7	aux:clitic	7:aux:clitic	_
7	nówka	nówka	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	2	ccomp	2:ccomp	_
8	i	i	CCONJ	conj	_	11	cc	11:cc	_
9	Miszka	Miszka	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	11	nsubj	11:nsubj	_
10	mnie	ja	PRON	ppron12:sg:acc:f:pri:akc	Case=Acc|Gender=Fem|Number=Sing|Person=1|PronType=Prs|Variant=Long	11	obj	11:obj	_
11	rozdziewiczył	rozdziewiczyć	VERB	praet:sg:m1:perf	Animacy=Hum|Aspect=Perf|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	conj	2:ccomp|7:conj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	2	punct	2:punct	_

~~~


