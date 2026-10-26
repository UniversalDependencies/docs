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

The following 2 pairs of parts of speech are connected with `compound:prt`: <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADP.html">ADP</a></tt> (64; 54% instances), <tt><a href="de_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="de_pud-pos-ADV.html">ADV</a></tt> (55; 46% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 compound:prt	color:blue
1	Nehmen	nehmen	VERB	VBC	Mood=Ind|Number=Plur|Person=1|Tense=Pres	0	root	_	_
2	wir	wir	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	1	nsubj	_	_
3	mal	mal	ADV	RB	Degree=Pos	1	advmod	_	_
4	an	an	ADP	DC	_	1	compound:prt	_	SpaceAfter=No
5	,	,	PUNCT	,	_	7	punct	_	_
6	er	er	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	7	nsubj	_	_
7	irrt	irren	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	1	ccomp	_	_
8	sich	sich	PRON	PRP	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	7	obj	_	SpaceAfter=No
9	.	.	PUNCT	.	_	1	punct	_	_

~~~


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
5	schwer	schwer	ADV	DC	Degree=Pos	2	compound:prt	_	_
6	mit	mit	ADP	IN	_	7	case	_	_
7	Passwörtern	Passwort	NOUN	NN	Case=Dat|Gender=Neut|Number=Plur	2	obl	_	SpaceAfter=No
8	.	.	PUNCT	.	_	2	punct	_	_

~~~


