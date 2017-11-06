---
layout: base
title:  'Statistics of dislocated in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `dislocated`

This relation is universal.

84 nodes (0%) are attached to their parents as `dislocated`.

84 instances of `dislocated` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.55952380952381.

The following 4 pairs of parts of speech are connected with `dislocated`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (52; 62% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (22; 26% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (9; 11% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-DET.html">DET</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 dislocated	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	fleire	mange	ADJ	_	Degree=Cmp	4	amod	_	_
4	ting	ting	NOUN	_	Definite=Ind|Gender=Masc|Number=Plur	2	dislocated	_	_
5	som	som	PRON	_	PronType=Rel	6	nsubj	_	_
6	skal	skulle	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	på	på	ADP	_	_	8	case	_	_
8	plass	plass	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	6	obl	_	SpaceAfter=No
9	.	$.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 dislocated	color:blue
1	Tysdag	tysdag	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	3	obl	_	_
2	morgon	morgon	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	_
3	var	vere	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
4	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
5	ingen	ingen	PRON	_	Number=Plur|Person=3|Polarity=Neg|PronType=Neg,Prs	3	dislocated	_	_
6	som	som	PRON	_	PronType=Rel	7	nsubj	_	_
7	forsov	forsove	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	5	acl:relcl	_	_
8	seg	seg	PRON	_	Case=Acc|Number=Sing|PronType=Prs	7	obj	_	SpaceAfter=No
9	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 dislocated	color:blue
1	Og	og	CCONJ	_	_	3	cc	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
3	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
4	lite	lite	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	3	dislocated	_	_
5	som	som	PRON	_	PronType=Rel	6	nsubj	_	_
6	tyder	tyde	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	acl:relcl	_	_
7	på	på	ADP	_	_	10	mark	_	_
8	at	at	SCONJ	_	_	10	mark	_	_
9	vi	vi	PRON	_	Animacy=Hum|Case=Nom|Number=Plur|Person=1|PronType=Prs	10	nsubj	_	_
10	vert	verte	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	6	advcl	_	_
11	ferdige	ferdig	ADJ	_	Degree=Pos|Number=Plur	10	xcomp	_	_
12	med	med	ADP	_	_	13	case	_	_
13	henne	ho	PRON	_	Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	11	obl	_	SpaceAfter=No
14	.	$.	PUNCT	_	_	3	punct	_	_

~~~


