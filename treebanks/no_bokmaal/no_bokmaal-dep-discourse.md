---
layout: base
title:  'Statistics of discourse in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `discourse`

This relation is universal.

142 nodes (0%) are attached to their parents as `discourse`.

115 instances of `discourse` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.42253521126761.

The following 10 pairs of parts of speech are connected with `discourse`: <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt> (74; 52% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt> (22; 15% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt> (18; 13% instances), <tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt>-<tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt> (10; 7% instances), <tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt> (9; 6% instances), <tt><a href="no_bokmaal-pos-ADV.html">ADV</a></tt>-<tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt> (4; 3% instances), <tt><a href="no_bokmaal-pos-PART.html">PART</a></tt>-<tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 discourse	color:blue
1	Kan	kunne	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	3	aux	_	_
2	fortsatt	fortsatt	ADV	_	_	3	advmod	_	_
3	høre	høre	VERB	_	VerbForm=Inf	0	root	_	_
4	henne	hun	PRON	_	Animacy=Hum|Case=Acc|Gender=Fem|Number=Sing|Person=3|PronType=Prs	3	iobj	_	_
5	rope	rope	VERB	_	VerbForm=Inf	3	xcomp	_	_
6	heia	heia	INTJ	_	_	5	discourse	_	_
7	heia	heia	INTJ	_	_	5	discourse	_	SpaceAfter=No
8	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 discourse	color:blue
1	-	$-	PUNCT	_	_	7	punct	_	_
2	Nei	nei	INTJ	_	_	7	discourse	_	SpaceAfter=No
3	,	$,	PUNCT	_	_	2	punct	_	_
4	jeg	jeg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	7	nsubj	_	_
5	er	være	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	7	cop	_	_
6	ikke	ikke	PART	_	Polarity=Neg	7	advmod	_	_
7	glad	glad	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	0	root	_	_
8	for	for	ADP	_	_	10	case	_	_
9	dette	dette	DET	_	Gender=Neut|Number=Sing|PronType=Dem	10	det	_	_
10	forbudet	forbud	NOUN	_	Definite=Def|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 discourse	color:blue
1	-	$-	PUNCT	_	_	5	punct	_	_
2	Aha	aha	INTJ	_	_	5	discourse	_	SpaceAfter=No
3	,	$,	PUNCT	_	_	2	punct	_	_
4	norsk	norsk	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	5	amod	_	_
5	journalist	journalist	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	SpaceAfter=No
6	.	$.	PUNCT	_	_	5	punct	_	_

~~~


