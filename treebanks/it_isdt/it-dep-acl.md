---
layout: base
title:  'Statistics of acl in UD_Italian'
udver: '2'
---

## Treebank Statistics: UD_Italian: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="it-dep-acl-relcl.html">acl:relcl</a></tt>.

3286 nodes (1%) are attached to their parents as `acl`.

3205 instances of `acl` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.79914790018259.

The following 8 pairs of parts of speech are connected with `acl`: <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (2982; 91% instances), <tt><a href="it-pos-PROPN.html">PROPN</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (163; 5% instances), <tt><a href="it-pos-PRON.html">PRON</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (115; 3% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-NOUN.html">NOUN</a></tt> (12; 0% instances), <tt><a href="it-pos-ADJ.html">ADJ</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (6; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-ADJ.html">ADJ</a></tt> (6; 0% instances), <tt><a href="it-pos-NOUN.html">NOUN</a></tt>-<tt><a href="it-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="it-pos-X.html">X</a></tt>-<tt><a href="it-pos-VERB.html">VERB</a></tt> (1; 0% instances).


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
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 acl	color:blue
1	Evacuata	evacuare	VERB	V	Gender=Fem|Number=Sing|Tense=Past|VerbForm=Part	3	acl	_	_
2	la	il	DET	RD	Definite=Def|Gender=Fem|Number=Sing|PronType=Art	3	det	_	_
3	Tate	Tate	PROPN	SP	_	0	root	_	_
4	Gallery	Gallery	PROPN	SP	_	3	flat:name	_	SpaceAfter=No
5	.	.	PUNCT	FS	_	3	punct	_	_

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


