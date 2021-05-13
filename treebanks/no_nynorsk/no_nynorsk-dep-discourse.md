---
layout: base
title:  'Statistics of discourse in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `discourse`

This relation is universal.

167 nodes (0%) are attached to their parents as `discourse`.

135 instances of `discourse` (81%) are right-to-left (child precedes parent).
Average distance between parent and child is 5.23353293413174.

The following 11 pairs of parts of speech are connected with `discourse`: <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (89; 53% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (31; 19% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (20; 12% instances), <tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (10; 6% instances), <tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (8; 5% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (4; 2% instances), <tt><a href="no_nynorsk-pos-ADP.html">ADP</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="no_nynorsk-pos-ADV.html">ADV</a></tt>-<tt><a href="no_nynorsk-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="no_nynorsk-pos-VERB.html">VERB</a></tt>-<tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Jaudå	jaudå	INTJ	_	_	4	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	_	_	1	punct	_	_
3	eg	eg	PRON	_	Animacy=Hum|Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	_
4	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
5	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	4	obj	_	SpaceAfter=No
6	,	$,	PUNCT	_	_	10	punct	_	_
7	og	og	CCONJ	_	_	10	cc	_	_
8	den	den	PRON	_	Gender=Fem,Masc|Number=Sing|Person=3|PronType=Prs	10	nsubj:pass	_	_
9	vert	verte	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	10	aux:pass	_	_
10	brukt	bruke	VERB	_	Definite=Ind|Number=Sing|VerbForm=Part	4	conj	_	_
11	rett	rett	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	10	advmod	_	_
12	som	som	PRON	_	PronType=Rel	14	nsubj	_	_
13	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	14	expl	_	_
14	er	vere	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin	11	advcl	_	SpaceAfter=No
15	.	$.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 2 discourse	color:blue
1	-	$-	PUNCT	_	_	10	punct	_	_
2	Nei	nei	INTJ	_	_	10	discourse	_	SpaceAfter=No
3	,	$,	PUNCT	_	_	2	punct	_	_
4	i	i	ADP	_	_	6	case	_	_
5	det	det	DET	_	Gender=Neut|Number=Sing|PronType=Dem	6	det	_	_
6	minste	liten	ADJ	_	Definite=Def|Degree=Sup	10	advmod	_	_
7	ikkje	ikkje	PART	_	Polarity=Neg	10	advmod	_	_
8	på	på	ADP	_	_	10	case	_	_
9	kort	kort	ADJ	_	Definite=Ind|Degree=Pos|Number=Sing	10	amod	_	_
10	sikt	sikt	NOUN	_	Definite=Ind|Gender=Fem|Number=Sing	0	root	_	SpaceAfter=No
11	.	$.	PUNCT	_	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 discourse	color:blue
1	Ja	ja	INTJ	_	_	5	discourse	_	SpaceAfter=No
2	,	$,	PUNCT	_	_	1	punct	_	_
3	det	det	PRON	_	Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	nsubj	_	_
4	er	vere	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin	5	cop	_	_
5	bra	bra	ADJ	_	Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
6	.	$.	PUNCT	_	_	5	punct	_	_

~~~


