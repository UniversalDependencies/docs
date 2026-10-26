---
layout: base
title:  'Statistics of det in UD_Azerbaijani-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Azerbaijani-TueCL: Relations: `det`

This relation is universal.

14 nodes (2%) are attached to their parents as `det`.

14 instances of `det` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `det`: <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-DET.html">DET</a></tt> (11; 79% instances), <tt><a href="az_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="az_tuecl-pos-PRON.html">PRON</a></tt> (2; 14% instances), <tt><a href="az_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="az_tuecl-pos-DET.html">DET</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 det	color:blue
1	İguazu	İguazu	NOUN	_	Case=Nom|Number=Sing	2	nsubj	_	_
2	böyük	böyük	ADJ	_	_	4	amod	_	_
3	bir	bir	DET	_	Definite=Ind	4	det	_	_
4	kişvərdir	keşvər	NOUN	_	Case=Nom|Number=Sing|Person=3	0	root	_	SpaceAfter=No
5	,	,	PUNCT	_	_	4	punct	_	_
6	ya	ya	CCONJ	_	_	7	cc	_	_
7	kiçik	kiçik	ADJ	_	_	4	conj	_	SpaceAfter=No
8	?	?	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 det	color:blue
1	Siz	siz	PRON	_	Case=Nom|Number=Plur|Person=2|PronType=Prs	3	nsubj	_	_
2	Fikr	fikr	NOUN	_	Case=Nom|Number=Sing	3	compound:lvc	_	_
3	eliriz	el	VERB	_	Aspect=Prog|Mood=Ind|Number=Plur|Person=2|Tense=Pres	0	root	_	_
4	nə	nə	PRON	_	PronType=Int	5	det	_	_
5	vaxt	vaxt	NOUN	_	Case=Nom|Number=Sing	6	obl	_	_
6	gələ	gəl	VERB	_	Mood=Sub|VerbForm=Conv	3	xcomp	_	_
7	bilərsiz	bil	AUX	_	Aspect=Prog|Mood=Ind|Number=Plur|Person=2|Tense=Pres	6	aux	_	SpaceAfter=No
8	?	?	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 det	color:blue
1	O	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Dem	4	nsubj	_	_
2	elə	elə	ADV	_	_	4	advmod	_	_
3	bir	bir	DET	_	Definite=Ind	4	det	_	_
4	kitabdır	kitab	NOUN	N	Case=Nom|Number=Sing|Person=3	0	root	_	_
5	ki	ki	SCONJ	_	_	14	mark	_	SpaceAfter=No
6	,	,	PUNCT	_	_	14	punct	_	_
7	onu	o	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	8	obj	_	_
8	oxuyan	oxu	VERB	_	VerbForm=Part	14	csubj	_	_
9	bir	bir	DET	_	_	10	det	_	_
10	də	də	ADV	_	_	14	advmod:emph	_	_
11	dünyaya	dünya	NOUN	_	Case=Dat|Number=Sing	14	obl	_	_
12	eyni	eyni	ADJ	_	_	13	amod	_	_
13	gözünən	göz	NOUN	_	Case=Ins|Number=Sing	14	obl	_	_
14	baxmaz	bax	VERB	_	Aspect=Hab|Evident=Fh|Number=Sing|Person=3|Polarity=Neg|Tense=Pres	4	advcl	_	SpaceAfter=No
15	.	.	PUNCT	_	_	4	punct	_	_

~~~


