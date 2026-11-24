---
layout: base
title:  'Statistics of flat:name in UD_Portuguese-PPrincipe'
udver: '2'
---

## Treebank Statistics: UD_Portuguese-PPrincipe: Relations: `flat:name`

This relation is a language-specific subtype of <tt><a href="pt_pprincipe-dep-flat.html">flat</a></tt>.

13 nodes (0%) are attached to their parents as `flat:name`.

13 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.46153846153846.

The following 2 pairs of parts of speech are connected with `flat:name`: <tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt> (12; 92% instances), <tt><a href="pt_pprincipe-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pt_pprincipe-pos-NUM.html">NUM</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 flat:name	color:blue
1	Depois	depois	ADV	_	_	2	advmod	_	_
2	os	o	PRON	_	Gender=Masc|Number=Plur|Person=3|PronType=Dem	0	root	_	_
3	de	de	ADP	_	_	5	case	_	_
4	a	o	DET	_	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	5	det	_	_
5	América	América	PROPN	_	_	2	nmod	_	_
6	de	de	ADP	_	_	8	case	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	Sul	Sul	PROPN	_	_	5	flat:name	_	SpaceAfter=No
9	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 flat:name	color:blue
1	Tenho	ter	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	sérias	sério	ADJ	_	Gender=Fem|Number=Plur	3	amod	_	_
3	razões	razão	NOUN	_	Number=Plur	1	obj	_	_
4	para	para	ADP	_	_	5	mark	_	_
5	supor	supor	VERB	_	VerbForm=Inf	3	acl	_	_
6	que	que	SCONJ	_	_	16	mark	_	_
7	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	_
8	planeta	planeta	NOUN	_	Number=Sing	16	nsubj	_	_
9	de	de	ADP	_	_	10	case	_	_
10	onde	onde	ADV	_	_	11	advmod	_	_
11	vinha	vir	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	8	acl:relcl	_	_
12	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	13	det	_	_
13	príncipe	príncipe	NOUN	_	Gender=Masc|Number=Sing	11	nsubj	_	_
14	era	ser	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Imp|VerbForm=Fin	16	cop	_	_
15	o	o	DET	_	Definite=Def|Gender=Masc|Number=Sing|PronType=Art	16	det	_	_
16	asteróide	asteróide	NOUN	_	Gender=Masc|Number=Sing	5	ccomp	_	_
17	B	B	PROPN	_	_	16	nmod	_	_
18	612	612	NUM	_	NumType=Card	17	flat:name	_	SpaceAfter=No
19	.	.	PUNCT	_	_	1	punct	_	_

~~~


