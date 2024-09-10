---
layout: base
title:  'Statistics of case in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `case`

This relation is universal.

37363 nodes (12%) are attached to their parents as `case`.

37108 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.72360356502422.

The following 13 pairs of parts of speech are connected with `case`: <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (24756; 66% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (4912; 13% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (3538; 9% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (1839; 5% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (975; 3% instances), <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (782; 2% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (300; 1% instances), <tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (207; 1% instances), <tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (37; 0% instances), <tt><a href="no_bokmaal-pos-X.html">X</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (11; 0% instances), <tt><a href="no_bokmaal-pos-SYM.html">SYM</a></tt>-<tt><a href="no_bokmaal-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-SYM.html">SYM</a></tt> (2; 0% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-SYM.html">SYM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	Thomassen	Thomassen	PROPN	subst	_	4	nsubj	_	_
2	er	være	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	på	på	ADP	prep	_	4	case	_	_
4	vei	vei	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	til	til	ADP	prep	_	8	case	_	_
6	sin	sin	PRON	det	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	det	_	_
7	neste	neste	DET	det	Definite=Def|PronType=Dem	8	det	_	_
8	gjerning	gjerning	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
9	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 case	color:blue
1	Det	det	PRON	pron	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
2	var	være	AUX	verb	Mood=Ind|Tense=Past|VerbForm=Fin	5	cop	_	_
3	en	en	DET	det	Gender=Masc|Number=Sing|PronType=Art	5	det	_	_
4	fremmed	fremmed	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Fem,Masc|Number=Sing	5	amod	_	_
5	tanke	tanke	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
6	for	for	ADP	prep	_	7	case	_	_
7	Borten	Borten	PROPN	subst	_	5	obl	_	SpaceAfter=No
8	.	$.	PUNCT	clb	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 case	color:blue
1	Dette	dette	PRON	pron	Gender=Neut|Number=Sing|Person=3|PronType=Prs	0	root	_	_
2	uaktet	uaktet	ADP	prep	_	8	case	_	_
3	at	at	SCONJ	sbu	_	8	mark	_	_
4	også	også	ADV	adv	_	5	advmod	_	_
5	han	han	PRON	pron	Animacy=Hum|Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	_
6	selv	selv	DET	det	PronType=Prs	5	det	_	_
7	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	8	aux	_	_
8	underskrevet	underskrive	VERB	verb	VerbForm=Part	1	advcl	_	_
9	dommen	dom	NOUN	subst	Definite=Def|Gender=Masc|Number=Sing	8	obj	_	SpaceAfter=No
10	.	$.	PUNCT	clb	_	1	punct	_	_

~~~


