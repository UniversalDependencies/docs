---
layout: base
title:  'Statistics of goeswith in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `goeswith`

This relation is universal.

9 nodes (0%) are attached to their parents as `goeswith`.

9 instances of `goeswith` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 2 pairs of parts of speech are connected with `goeswith`: <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-X.html">X</a></tt> (7; 78% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-X.html">X</a></tt> (2; 22% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 goeswith	color:blue
1	Lokomitt	Lokomitt	PROPN	_	Case=Nom	5	nsubj	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	jätte	jättestor	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing|Typo=Yes	5	amod	_	CorrectionLabels=M-Gend;O-Comp|Typo=Yes
4	stort	_	X	_	_	3	goeswith	_	CorrectionLabels=M-Gend:2;O-Comp:2
5	sjö	sjö	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 goeswith	color:blue
1	Där	där	ADV	_	_	2	advmod	_	_
2	baker	baka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	CorrectionLabels=M-F
3	vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	2	nsubj	_	_
4	till	tillsammans	ADV	_	Typo=Yes	2	advmod	_	CorrectionLabels=O-Comp|Typo=Yes
5	sammans	_	X	_	_	4	goeswith	_	CorrectionLabels=O-Comp:2
6	.	.	PUNCT	_	_	2	punct	_	_

~~~


