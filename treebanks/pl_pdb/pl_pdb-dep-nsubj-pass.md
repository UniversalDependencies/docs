---
layout: base
title:  'Statistics of nsubj:pass in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nsubj.html">nsubj</a></tt>.

1048 nodes (0%) are attached to their parents as `nsubj:pass`.

865 instances of `nsubj:pass` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.15458015267176.

The following 10 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (845; 81% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (73; 7% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (71; 7% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (44; 4% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Inicjatywa	inicjatywa	NOUN	subst:sg:nom:f	Case=Nom|Gender=Fem|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
2	ta	ten	DET	adj:sg:nom:f:pos	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	1	det	1:det	_
3	została	zostać	AUX	praet:sg:f:perf	Aspect=Perf|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
4	zaaprobowana	zaaprobować	ADJ	ppas:sg:nom:f:perf:aff	Aspect=Perf|Case=Nom|Gender=Fem|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 nsubj:pass	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 nsubj:pass	color:blue
1	Sprawdzamy	sprawdzać	VERB	fin:pl:pri:imperf	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
2	ile	ile	DET	num:pl:nom:f:rec	Case=Nom|Gender=Fem|Number=Plur|NumType=Card|PronType=Int	7	nsubj:pass	7:nsubj:pass	_
3	z	z	ADP	prep:gen:nwok	AdpType=Prep|Variant=Short	5	case	5:case	Case=Gen
4	tych	ten	DET	adj:pl:gen:f:pos	Case=Gen|Gender=Fem|Number=Plur|PronType=Dem	5	det	5:det	_
5	rzeczy	rzecz	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	2	nmod	2:nmod	_
6	zostało	zostać	AUX	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	7:aux:pass	_
7	skradzione	skraść	ADJ	ppas:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	1	ccomp	1:ccomp	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


