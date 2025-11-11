---
layout: base
title:  'Statistics of vocative in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `vocative`

This relation is universal.

2 nodes (0%) are attached to their parents as `vocative`.

2 instances of `vocative` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.5.

The following 2 pairs of parts of speech are connected with `vocative`: <tt><a href="sv_swell-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 50% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 50% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 vocative	color:blue
1	Hej	hej	INTJ	_	_	0	root	_	_
2	min	jag	PRON	_	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
3	vän	vän	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	1	vocative	_	_
4	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 vocative	color:blue
1	Vakna	vakna	VERB	_	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	upp	upp	ADV	_	_	1	compound:prt	_	_
3	,	,	PUNCT	_	_	1	punct	_	_
4	millenial	millenial	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Typo=Yes	1	vocative	_	CorrectionLabels=O
5	!	!	PUNCT	_	_	1	punct	_	_

~~~


