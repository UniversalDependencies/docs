---
layout: base
title:  'Statistics of compound:prt in UD_German-PUD'
udver: '2'
---

## Treebank Statistics: UD_German-PUD: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="de_pud-dep-compound.html">compound</a></tt>.

119 nodes (1%) are attached to their parents as `compound:prt`.

117 instances of `compound:prt` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.2436974789916.

The following 2 pairs of parts of speech are connected with `compound:prt`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-VERB.html">VERB</a></tt> (108; 91% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-DET.html">DET</a></tt> (11; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 compound:prt	color:blue
1	Ich	ich	PRON	PRP	Case=Nom|Number=Sing|Person=1	2	nsubj	_	_
2	tue	tun	VERB	VBC	Mood=Ind|Number=Sing|Person=1|Tense=Pres	0	root	_	_
3	mich	ich	PRON	PRP	Case=Acc|Number=Sing|Person=1|PronType=Rcp	2	obj	_	_
4	auch	auch	ADV	RB	Degree=Pos	2	advmod	_	_
5	schwer	schwer	VERB	DC	_	2	compound:prt	_	_
6	mit	mit	ADP	IN	_	7	case	_	_
7	Passwörtern	Passwort	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 12 compound:prt	color:blue
1	Denn	denn	CCONJ	CC	_	8	cc	_	_
2	jedes	jeder	DET	DT	Case=Nom|Gender=Neut|Number=Sing|PronType=Tot	4	det	_	_
3	einzelne	einzeln	ADJ	JJ	Case=Nom|Degree=Pos|Gender=Neut|Number=Sing	4	amod	_	InflectionType=Weak
4	Wunder	Wunder	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	8	nsubj	_	_
5	und	und	CCONJ	CC	_	7	cc	_	_
6	jeder	jeder	DET	DT	Case=Nom|Gender=Masc|Number=Sing|PronType=Tot	7	det	_	_
7	Spezialisierungsdistrikt	Spezialisierungsdistrikt	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	4	conj	_	_
8	nimmt	nehmen	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
9	ein	ein	DET	DT	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|NumType=Card|PronType=Art	11	det	_	_
10	komplettes	komplett	ADJ	JJ	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	11	amod	_	InflectionType=Mixed
11	Feld	Feld	NOUN	NN	Case=Acc|Gender=Neut|Number=Sing	8	obj	_	_
12	ein	ein	DET	DC	Definite=Ind|NumType=Card|PronType=Art	8	compound:prt	_	SpaceAfter=No
13	.	.	PUNCT	.	_	8	punct	_	_

~~~


