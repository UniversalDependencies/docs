---
layout: base
title:  'Statistics of root in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `root`

This relation is universal.

20044 nodes (6%) are attached to their parents as `root`.

20044 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.72739972061465.

The following 14 pairs of parts of speech are connected with `root`: -<tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt> (13780; 69% instances), -<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (2918; 15% instances), -<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (2071; 10% instances), -<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (520; 3% instances), -<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (243; 1% instances), -<tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt> (164; 1% instances), -<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (79; 0% instances), -<tt><a href="no_bokmaal-pos-DET.html">DET</a></tt> (75; 0% instances), -<tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt> (75; 0% instances), -<tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt> (54; 0% instances), -<tt><a href="no_bokmaal-pos-X.html">X</a></tt> (51; 0% instances), -<tt><a href="no_bokmaal-pos-CCONJ.html">CCONJ</a></tt> (5; 0% instances), -<tt><a href="no_bokmaal-pos-PART.html">PART</a></tt> (5; 0% instances), -<tt><a href="no_bokmaal-pos-SYM.html">SYM</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	nsubj	_	_
2	ble	bli	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	rene	ren	ADJ	_	Degree=Pos|Number=Plur	4	amod	_	_
4	ord	ord	NOUN	_	Definite=Ind|Gender=Neut|Number=Plur	2	xcomp	_	_
5	:	$:	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
1	Thomassen	Thomassen	PROPN	_	_	4	nsubj	_	_
2	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	på	på	ADP	_	_	4	case	_	_
4	vei	vei	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	til	til	ADP	_	_	8	case	_	_
6	sin	sin	PRON	_	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	nmod	_	_
7	neste	neste	DET	_	Definite=Def|PronType=Dem	8	det	_	_
8	gjerning	gjerning	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	_
9	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 3 root	color:blue
1	Det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	nsubj	_	_
2	var	være	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	grusomt	grusom	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	høre	høre	VERB	_	VerbForm=Inf	3	advcl	_	_
6	på	på	ADP	_	_	5	compound:prt	_	_
7	.	$.	PUNCT	_	_	3	punct	_	_
8	»	$"	PUNCT	_	_	3	punct	_	_

~~~


