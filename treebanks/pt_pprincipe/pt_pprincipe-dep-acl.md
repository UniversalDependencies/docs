---
layout: base
title:  'Statistics of acl in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="pt_pprincipe-dep-acl-relcl.html">acl:relcl</a></tt>.

88 nodes (1%) are attached to their parents as `acl`.

88 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.38636363636364.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (57; 65% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (18; 20% instances), <tt><a href="pt_pprincipe-pos-PRON.html">PRON</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (6; 7% instances), <tt><a href="pt_pprincipe-pos-ADV.html">ADV</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (5; 6% instances), <tt><a href="pt_pprincipe-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pt_pprincipe-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt>-<tt><a href="pt_pprincipe-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	Representava	representar	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	0	root	_	_
2	uma	um	DET	_	Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	jibóia	jibóia	NOUN	_	Gender=Fem|Number=Sing	1	obj	_	_
4	digerindo	digerir	VERB	_	VerbForm=Ger	3	acl	_	_
5	um	um	DET	_	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	elefante	elefante	NOUN	_	Gender=Masc|Number=Sing	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl	color:blue
1	E	e	CCONJ	_	_	2	cc	_	_
2	fiquei	ficar	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	0	root	_	_
3	estupefato	estupefato	ADJ	_	Gender=Masc|Number=Sing	2	xcomp	_	_
4	de	de	ADP	_	_	5	mark	_	_
5	ouvir	ouvir	VERB	_	VerbForm=Inf	3	acl	_	_
6	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	7	det	_	_
7	garoto	garoto	NOUN	_	Gender=Masc|Number=Sing	5	obj	_	_
8	replicar	replicar	VERB	_	VerbForm=Inf	5	xcomp	_	SpaceAfter=No
9	:	:	PUNCT	_	_	11	punct	_	_
10	-	-	PUNCT	_	_	11	punct	_	_
11	Não	não	ADV	_	_	8	ccomp:speech	_	SpaceAfter=No
12	!	!	PUNCT	_	_	11	punct	_	_
13	Não	não	ADV	_	_	11	conj	_	SpaceAfter=No
14	!	!	PUNCT	_	_	13	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl	color:blue
1	Eu	eu	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	_
2	não	não	ADV	_	_	3	advmod	_	_
3	sabia	saber	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Imp|VerbForm=Fin	0	root	_	_
4	o	o	PRON	_	Gender=Masc|Number=Sing|Person=3|PronType=Dem	3	obj	_	_
5	que	que	PRON	_	PronType=Int	6	obj	_	_
6	dizer	dizer	VERB	_	VerbForm=Inf	4	acl	_	SpaceAfter=No
7	.	.	PUNCT	_	_	3	punct	_	_

~~~


