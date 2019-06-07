---
layout: base
title:  'Statistics of nsubj:pass in UD_Polish-PDB'
udver: '2'
---

## Treebank Statistics: UD_Polish-PDB: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="pl_pdb-dep-nsubj.html">nsubj</a></tt>.

1047 nodes (0%) are attached to their parents as `nsubj:pass`.

867 instances of `nsubj:pass` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.14804202483286.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NOUN.html">NOUN</a></tt> (847; 81% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PRON.html">PRON</a></tt> (73; 7% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-DET.html">DET</a></tt> (71; 7% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-PROPN.html">PROPN</a></tt> (43; 4% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-X.html">X</a></tt> (5; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="pl_pdb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pl_pdb-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	Wyrok	wyrok	NOUN	subst:sg:nom:m3	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	4	nsubj:pass	4:nsubj:pass	_
2	śmierci	śmierć	NOUN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	1	nmod	1:nmod	_
3	zostaje	zostawać	AUX	fin:sg:ter:imperf	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux:pass	4:aux:pass	_
4	zamieniony	zamienić	ADJ	ppas:sg:nom:m3:perf:aff	Animacy=Inan|Aspect=Perf|Case=Nom|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	na	na	ADP	prep:acc	AdpType=Prep	7	case	7:case	Case=Acc
6	10	10	NUM	num:pl:acc:m3:rec	Animacy=Inan|Case=Acc|Gender=Masc|Number=Plur|NumForm=Digit|NumType=Card	7	nummod:gov	7:nummod:gov	_
7	lat	rok	NOUN	subst:pl:gen:m3	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	4	obl	4:obl	_
8	Syberii	Syberia	PROPN	subst:sg:gen:f	Case=Gen|Gender=Fem|Number=Sing	7	nmod:arg	7:nmod:arg	SpaceAfter=No
9	.	.	PUNCT	interp	PunctType=Peri	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	Wszystko	wszystko	PRON	subst:sg:nom:n:ncol	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	3	nsubj:pass	3:nsubj:pass	_
2	zostało	zostać	AUX	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	3	aux:pass	3:aux:pass	_
3	postawione	postawić	ADJ	ppas:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	na	na	ADP	prep:acc	AdpType=Prep	6	case	6:case	Case=Acc
5	jedną	jeden	ADJ	adj:sg:acc:f:pos	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	6	amod	6:amod	_
6	kartę	karta	NOUN	subst:sg:acc:f	Case=Acc|Gender=Fem|Number=Sing	3	obl:arg	3:obl:arg	_
7	-	-	PUNCT	interp	PunctType=Hyph	9	punct	9:punct	_
8	albo	albo	CCONJ	conj	_	9	cc:preconj	9:cc:preconj	_
9	my	my	PRON	ppron12:pl:nom:m1:pri	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|Person=1|PronType=Prs	3	conj	0:root|3:conj	_
10	albo	albo	CCONJ	conj	_	11	cc	11:cc	_
11	oni	on	PRON	ppron3:pl:nom:m1:ter:akc:npraep	Animacy=Hum|Case=Nom|Gender=Masc|Number=Plur|Person=3|PrepCase=Npr|PronType=Prs|Variant=Long	9	conj	3:conj|9:conj	SpaceAfter=No
12	.	.	PUNCT	interp	PunctType=Peri	3	punct	3:punct	_

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
5	rzeczy	rzecz	NOUN	subst:pl:gen:f	Case=Gen|Gender=Fem|Number=Plur	2	obl	2:obl	_
6	zostało	zostać	AUX	praet:sg:n:perf	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin|Voice=Act	7	aux:pass	7:aux:pass	_
7	skradzione	skraść	ADJ	ppas:sg:nom:n:perf:aff	Aspect=Perf|Case=Nom|Gender=Neut|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	1	ccomp	1:ccomp	SpaceAfter=No
8	.	.	PUNCT	interp	PunctType=Peri	1	punct	1:punct	_

~~~


