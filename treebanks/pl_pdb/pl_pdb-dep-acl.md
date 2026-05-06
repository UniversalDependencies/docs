---
layout: base
title:  'Statistics of acl in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `acl`

This relation is universal.
There are 2 language-specific subtypes of `acl`: <tt><a href="pl_pdb-dep-acl-cmp.html">acl:cmp</a></tt>, <tt><a href="pl_pdb-dep-acl-relcl.html">acl:relcl</a></tt>.

131 nodes (0%) are attached to their parents as `acl`.

129 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.94656488549618.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (89; 68% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (16; 12% instances), <tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (8; 6% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (7; 5% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (6; 5% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Opis	opis	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	0	root	0:root	SpaceAfter=No
2	:	:	PUNCT	interp	PunctType=Colo	1	punct	1:punct	_
3	wzór	wzór	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj	_
4	zawiera	zawierać	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl	1:acl	_
5	różowe	różowy	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	8	amod	8:amod	_
6	i	i	CCONJ	conj	_	7	cc	7:cc	_
7	beżowe	beżowy	ADJ	adj:pl:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Plur	5	conj	5:conj|8:amod	_
8	linie	linia	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	4	obj	4:obj	SpaceAfter=No
9	,	,	PUNCT	interp	PunctType=Comm	11	punct	11:punct	_
10	4	4	NUM	num:pl:acc:f:congr:ncol	Case=Acc|Gender=Fem|Number=Plur|NumForm=Digit|NumType=Card	11	nummod	11:nummod	_
11	strony	strona	NOUN	subst:pl:acc:f	Case=Acc|Gender=Fem|Number=Plur	8	conj	4:obj|8:conj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Jedno	jeden	ADJ	adj:sg:nom:n:pos	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	2	amod	2:amod	_
2	dziecko	dziecko	NOUN	subst:sg:nom:n:col	Case=Nom|Gender=Neut|Number=Sing|NumType=Sets	3	nsubj	3:nsubj	_
3	ciągnie	ciągnąć	VERB	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
4	drugie	drugi	ADJ	adj:sg:acc:n:pos	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	3	obj	3:obj	SpaceAfter=No
5	,	,	PUNCT	interp	PunctType=Comm	6	punct	6:punct	_
6	siedzące	siedzieć	ADJ	pact:sg:acc:n:imperf:aff	Aspect=Imp|Case=Acc|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Act	4	acl	4:acl	_
7	na	na	ADP	prep:loc	AdpType=Prep	9	case	9:case	Case=Loc
8	małym	mały	ADJ	adj:sg:loc:m3:pos	Animacy=Inan|Case=Loc|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	_
9	wózku	wózek	NOUN	subst:sg:loc:m3	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	6	obl	6:obl	SpaceAfter=No
10	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 acl	color:blue
1	MACKIEWICZOWIE	Mackiewicz	PROPN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	0	root	0:root	_
2	(	(	PUNCT	interp	PunctSide=Ini|PunctType=Brck	3	punct	3:punct	SpaceAfter=No
3	bracia	brat	NOUN	subst:pl:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur	1	nmod	1:nmod	SpaceAfter=No
4	,	,	PUNCT	interp	PunctType=Comm	5	punct	5:punct	_
5	Cat	Cat	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	3	appos	3:appos	_
6	i	i	CCONJ	conj	_	7	cc	7:cc	_
7	Józef	Józef	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	5	conj	3:appos|5:conj	SpaceAfter=No
8	)	)	PUNCT	interp	PunctSide=Fin|PunctType=Brck	3	punct	3:punct	SpaceAfter=No
9	:	:	PUNCT	interp	PunctType=Colo	1	punct	1:punct	_
10	Cat	Cat	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	12	nsubj	12:nsubj	_
11	Józefa	Józef	PROPN	subst:sg:acc:m1	Animacy=Hum|Case=Acc|Gender=Masc|Number=Sing	12	obj	12:obj	_
12	lekceważył	lekceważyć	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	1	acl	1:acl	SpaceAfter=No
13	,	,	PUNCT	interp	PunctType=Comm	17	punct	17:punct	_
14	a	a	CCONJ	conj	_	17	cc	17:cc	_
15	Józef	Józef	PROPN	subst:sg:nom:m1	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing	17	nsubj	17:nsubj	_
16	-	-	PUNCT	interp	PunctType=Dash	17	punct	17:punct	_
17	nienawidził	nienawidzić	VERB	praet:sg:m1:imperf	Animacy=Hum|Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	12	conj	1:acl|12:conj	_
18	Cata	Cat	PROPN	subst:sg:gen:m1	Animacy=Hum|Case=Gen|Gender=Masc|Number=Sing	17	obj	17:obj	SpaceAfter=No
19	.	.	PUNCT	interp	PunctType=Peri	12	punct	12:punct	_

~~~


