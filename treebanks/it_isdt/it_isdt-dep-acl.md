---
layout: base
title:  'Statistics of acl in UD_Italian-ISDT'
udver: '2'
---

## Treebank Statistics: UD_Italian-ISDT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it_isdt-dep-acl-relcl.html">acl:relcl</a></tt>.

2946 nodes (1%) are attached to their parents as `acl`.

2901 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.97522063815343.

The following 9 pairs of parts of speech are connected with `acl`: <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (2652; 90% instances), <tt><a href="it_isdt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (152; 5% instances), <tt><a href="it_isdt-pos-PRON.html">PRON</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (110; 4% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt> (13; 0% instances), <tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (10; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="it_isdt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it_isdt-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-VERB.html">VERB</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="it_isdt-pos-X.html">X</a></tt>-<tt><a href="it_isdt-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl	color:blue
1	Negozi	negozio	NOUN	S	Gender=Masc|Number=Plur	0	root	0:root	_
2	e	e	CCONJ	CC	_	3	cc	3:cc	_
3	servizi	servizio	NOUN	S	Gender=Masc|Number=Plur	1	conj	1:conj:e	_
4	aperti	aprire	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	1	acl	1:acl	_
5	per	per	ADP	E	_	6	case	6:case	_
6	ferie	feria	NOUN	S	Gender=Fem|Number=Plur	4	obl	4:obl:per	SpaceAfter=No
7	.	.	PUNCT	FS	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 acl	color:blue
1	Evacuata	evacuare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	acl	3:acl	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	3:det	_
3	Tate	Tate	PROPN	SP	_	0	root	0:root	_
4	Gallery	Gallery	PROPN	SP	_	3	flat:name	3:flat:name	SpaceAfter=No
5	.	.	PUNCT	FS	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl	color:blue
1	Ma	ma	CCONJ	CC	_	4	cc	4:cc	_
2	non	non	ADV	BN	PronType=Neg	4	advmod	4:advmod	_
3	gli	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	iobj	4:iobj	_
4	chiedete	chiedere	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	0:root	_
5	qualcosa	qualcosa	PRON	PI	Number=Sing|PronType=Ind	4	obj	4:obj	_
6	da	da	ADP	E	_	7	mark	7:mark	_
7	bere	bere	VERB	V	VerbForm=Inf	5	acl	5:acl:da	SpaceAfter=No
8	.	.	PUNCT	FS	_	4	punct	4:punct	_

~~~


