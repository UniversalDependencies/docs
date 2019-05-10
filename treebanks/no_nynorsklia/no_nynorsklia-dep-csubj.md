---
layout: base
title:  'Statistics of csubj in UD_Norwegian-NynorskLIA'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-NynorskLIA: Relations: `csubj`

This relation is universal.

34 nodes (0%) are attached to their parents as `csubj`.

32 instances of `csubj` (94%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.55882352941176.

The following 6 pairs of parts of speech are connected with `csubj`: <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (19; 56% instances), <tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (9; 26% instances), <tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (3; 9% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="no_nynorsklia-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsklia-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="no_nynorsklia-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsklia-pos-VERB.html">VERB</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	var	vere	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	3	cop	_	_
3	hardt	hard	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
4	å	å	PART	_	_	5	mark	_	_
5	vere	vere	VERB	_	VerbForm=Inf	3	csubj	_	_
6	sjømann	sjømann	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	5	obj	_	_
7	under	under	ADP	_	_	8	case	_	_
8	krigen	krig	NOUN	_	Definite=Def|Gender=Masc|Number=Sing	5	obl	_	_
9	.	$.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 csubj	color:blue
1	hende	hende	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl	_	_
3	at	at	SCONJ	_	_	5	mark	_	_
4	ein	ein	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|PronType=Art,Prs	5	nsubj	_	_
5	drog	dra	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin	1	csubj	_	_
6	vest	vest	ADP	_	_	5	compound:prt	_	_
7	til	til	ADP	_	_	8	case	_	_
8	Island	Island	PROPN	_	_	5	obl	_	_
9	av	av	ADP	_	_	5	compound:prt	_	_
10	og	og	CCONJ	_	_	11	cc	_	_
11	til	til	ADP	_	_	9	conj	_	_
12	?	$?	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 12 csubj	color:blue
1	fakta	fakte	NOUN	_	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
2	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	1	cop	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	1	expl	_	_
4	at	at	SCONJ	_	_	12	mark	_	_
5	e	e	X	_	_	7	discourse:filler	_	_
6	#	#	PUNCT	_	_	5	punct	_	_
7	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	12	expl	_	_
8	skulle	skulle	AUX	_	Mood=Ind|Tense=Past|VerbForm=Fin	12	aux	_	_
9	vel	vel	ADV	_	_	10	advmod	_	_
10	ha	ha	AUX	_	VerbForm=Inf	12	aux	_	_
11	vore	vere	AUX	_	VerbForm=Part	12	aux	_	_
12	skrive	skrive	VERB	_	VerbForm=Part	1	csubj	_	_
13	med	med	ADP	_	_	15	case	_	_
14	ein	ein	DET	_	Gender=Masc|Number=Sing|PronType=Art	15	det	_	_
15	t	T	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	12	obl	_	_
16	.	$.	PUNCT	_	_	1	punct	_	_

~~~


