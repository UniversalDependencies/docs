---
layout: base
title:  'Statistics of acl:relcl in UD_French-ParTUT'
udver: '2'
---

## Treebank Statistics: UD_French-ParTUT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="fr_partut-dep-acl.html">acl</a></tt>.

301 nodes (1%) are attached to their parents as `acl:relcl`.

301 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.97674418604651.

The following 15 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (190; 63% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (57; 19% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (14; 5% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (11; 4% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (6; 2% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (4; 1% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="fr_partut-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_partut-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_partut-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_partut-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fr_partut-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_partut-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	Et	et	CCONJ	CC	_	5	cc	_	_
2	c'	ce	PRON	PD	PronType=Dem	5	nsubj	_	SpaceAfter=No
3	est	être	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
4	le	le	DET	RD	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
5	paradigme	paradigme	NOUN	S	Gender=Fem|Number=Sing	0	root	_	_
6	que	que	PRON	PR	PronType=Rel	8	obj	_	_
7	nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	8	nsubj	_	_
8	voyons	voir	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	_
9	dans	dans	ADP	E	_	12	case	_	_
10	tout	tout	DET	T	Gender=Masc|Number=Sing|PronType=Ind	12	det	_	_
11	l'	le	DET	RD	Definite=Def|Number=Sing|PronType=Art	12	det	_	SpaceAfter=No
12	univers	univers	NOUN	S	Gender=Fem|Number=Sing	8	obl	_	SpaceAfter=No
13	.	.	PUNCT	FS	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 acl:relcl	color:blue
1	Nous	nous	PRON	PE	Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	ne	ne	PART	PART	Polarity=Neg	3	advmod	_	_
3	savons	savoir	VERB	V	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
4	pas	pas	ADV	BN	Polarity=Neg	3	advmod	_	_
5	ce	ce	PRON	PD	Number=Sing|Person=3|PronType=Dem	3	obj	_	_
6	qui	qui	PRON	PR	PronType=Rel	8	nsubj	_	_
7	se	se	PRON	P	Person=3|PronType=Prs	8	expl	_	_
8	passe	passer	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	acl:relcl	_	SpaceAfter=No
9	.	.	PUNCT	FS	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 12 acl:relcl	color:blue
1	Et	et	CCONJ	CC	_	4	cc	_	_
2	je	je	PRON	PE	Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
3	vous	vous	PRON	PE	Number=Plur|Person=2|PronType=Prs	4	iobj	_	_
4	présente	présenter	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
5	un	un	DET	RI	Definite=Ind|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	concept	concept	NOUN	S	Gender=Masc|Number=Sing	4	obj	_	_
7	selon	selon	ADP	E	_	8	case	_	_
8	lequel	lequel	PRON	PR	Gender=Masc|Number=Sing|PronType=Rel	12	obl	_	_
9	ce	ce	PRON	P	Number=Sing|Person=3|PronType=Dem	12	nsubj	_	_
10	sont	être	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	12	cop	_	_
11	des	de	DET	_	Definite=Ind|Number=Plur|PronType=Art	12	det	_	_
12	membranes	membrane	NOUN	S	Gender=Fem|Number=Plur	6	acl:relcl	_	_
13	neurologiques	neurologique	ADJ	A	Gender=Fem|Number=Plur	12	amod	_	_
14	étendues	étendu	ADJ	A	Gender=Fem|Number=Plur	12	amod	_	SpaceAfter=No
15	.	.	PUNCT	FS	_	4	punct	_	_

~~~


