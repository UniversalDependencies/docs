---
layout: base
title:  'Statistics of mark in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `mark`

This relation is universal.

4327 nodes (3%) are attached to their parents as `mark`.

4324 instances of `mark` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.56944765426392.

The following 19 pairs of parts of speech are connected with `mark`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (2014; 47% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PART.html">PART</a></tt> (1699; 39% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (268; 6% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (191; 4% instances), <tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_gum-pos-PART.html">PART</a></tt> (43; 1% instances), <tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_gum-pos-PART.html">PART</a></tt> (26; 1% instances), <tt><a href="en_gum-pos-ADV.html">ADV</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (18; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (15; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (15; 0% instances), <tt><a href="en_gum-pos-AUX.html">AUX</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (11; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (9; 0% instances), <tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_gum-pos-PART.html">PART</a></tt> (6; 0% instances), <tt><a href="en_gum-pos-NUM.html">NUM</a></tt>-<tt><a href="en_gum-pos-PART.html">PART</a></tt> (3; 0% instances), <tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-PART.html">PART</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-X.html">X</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (2; 0% instances), <tt><a href="en_gum-pos-ADP.html">ADP</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PART.html">PART</a></tt>-<tt><a href="en_gum-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-PRON.html">PRON</a></tt>-<tt><a href="en_gum-pos-PART.html">PART</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 mark	color:blue
1	No	no	INTJ	UH	Polarity=Neg	5	discourse	5:discourse	Discourse=contrast:18->16|SpaceAfter=No
2	,	,	PUNCT	,	_	1	punct	1:punct	_
3	because	because	SCONJ	IN	_	5	mark	5:mark	Discourse=justify:19->18
4	she	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	5	nsubj	5:nsubj	Entity=(person-10)
5	does	do	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
6	n't	not	PART	RB	Polarity=Neg	5	advmod	5:advmod	_
7	—	—	PUNCT	:	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 mark	color:blue
1	She	she	PRON	PRP	Case=Nom|Gender=Fem|Number=Sing|Person=3|PronType=Prs	2	nsubj	2:nsubj	Discourse=concession:36->38|Entity=(person-16)
2	could	could	AUX	MD	VerbForm=Fin	0	root	0:root	SpaceAfter=No
3	,	,	PUNCT	,	_	9	punct	9:punct	_
4	but	but	CCONJ	CC	_	9	cc	9:cc	Discourse=preparation:37->38
5	then	then	ADV	RB	PronType=Dem	9	advmod	9:advmod	_
6	af-	af-	INTJ	UH	_	9	reparandum	9:reparandum	_
7	—	—	PUNCT	:	_	6	punct	6:punct	_
8	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	9:nsubj|11:nsubj:xsubj	Discourse=background:38->41|Entity=(person-4)
9	wanted	want	VERB	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	2	conj	2:conj:but	_
10	to	to	PART	TO	_	11	mark	11:mark	_
11	stay	stay	VERB	VB	VerbForm=Inf	9	xcomp	9:xcomp	_
12	at	at	ADP	IN	_	14	case	14:case	_
13	the	the	DET	DT	Definite=Def|PronType=Art	14	det	14:det	Entity=(event-20
14	game	game	NOUN	NN	Number=Sing	11	obl	11:obl:at	Entity=event-20)
15	longer	long	ADV	RBR	Degree=Cmp	11	advmod	11:advmod	SpaceAfter=No
16	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 mark	color:blue
1	What	what	PRON	WP	PronType=Int	0	root	0:root	Discourse=antithesis:129->124
2	if	if	SCONJ	IN	_	5	mark	5:mark	_
3	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	5:nsubj	Entity=(person-52)
4	are	be	AUX	VBP	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	5	cop	5:cop	_
5	awake	awake	ADJ	JJ	Degree=Pos	1	advcl	1:advcl:if	SpaceAfter=No
6	?	?	PUNCT	.	_	1	punct	1:punct	_

~~~


