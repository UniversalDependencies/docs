---
layout: base
title:  'Statistics of acl in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it-dep-acl-relcl.html">acl:relcl</a></tt>.

3194 nodes (1%) are attached to their parents as `acl`.

3115 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.81183469004383.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (2899; 91% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (157; 5% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (112; 4% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (12; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl	color:blue
1	Esodo	esodo	NOUN	S	Gender=Masc|Number=Sing	0	root	_	_
2	controllato	controllare	VERB	V	Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part	1	acl	_	_
3	a	a	ADP	E	_	4	case	_	_
4	Civitavecchia	Civitavecchia	PROPN	SP	_	1	nmod	_	SpaceAfter=No
5	:	:	PUNCT	FC	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	"	"	PUNCT	FB	_	2	punct	_	SpaceAfter=No
2	Caschi	Caschi	PROPN	SP	_	0	root	_	_
3	blu	blu	ADJ	A	_	2	amod	_	_
4	impiegati	impiegare	VERB	V	Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part	2	acl	_	_
5	come	come	ADP	E	_	6	case	_	_
6	scudi	scudo	NOUN	S	Gender=Masc|Number=Plur	4	obl	_	_
7	umani	umano	ADJ	A	Gender=Masc|Number=Plur	6	amod	_	_
8	durante	durante	ADP	E	_	10	case	_	_
9	l'	il	DET	RD	Definite=Def|Number=Sing|PronType=Art	10	det	_	SpaceAfter=No
10	offensiva	offensiva	NOUN	S	Gender=Fem|Number=Sing	4	obl	_	SpaceAfter=No
11	"	"	PUNCT	FB	_	2	punct	_	SpaceAfter=No
12	.	.	PUNCT	FS	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl	color:blue
1	Ma	ma	CCONJ	CC	_	4	cc	_	_
2	non	non	ADV	BN	PronType=Neg	4	advmod	_	_
3	gli	lo	PRON	PC	Clitic=Yes|Gender=Masc|Number=Sing|Person=3|PronType=Prs	4	iobj	_	_
4	chiedete	chiedere	VERB	V	Mood=Imp|Number=Plur|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
5	qualcosa	qualcosa	PRON	PI	Number=Sing|PronType=Ind	4	obj	_	_
6	da	da	ADP	E	_	7	mark	_	_
7	bere	bere	VERB	V	VerbForm=Inf	5	acl	_	SpaceAfter=No
8	.	.	PUNCT	FS	_	4	punct	_	_

~~~


