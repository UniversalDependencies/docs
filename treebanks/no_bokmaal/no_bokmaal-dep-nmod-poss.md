---
layout: base
title:  'Statistics of nmod:poss in UD_Norwegian-Bokmaal'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Bokmaal: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="no_bokmaal-dep-nmod.html">nmod</a></tt>.

2212 nodes (1%) are attached to their parents as `nmod:poss`.

1725 instances of `nmod:poss` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35849909584087.

The following 9 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (2021; 91% instances), <tt><a href="no_bokmaal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (118; 5% instances), <tt><a href="no_bokmaal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (35; 2% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (14; 1% instances), <tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (10; 0% instances), <tt><a href="no_bokmaal-pos-DET.html">DET</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="no_bokmaal-pos-X.html">X</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), <tt><a href="no_bokmaal-pos-VERB.html">VERB</a></tt>-<tt><a href="no_bokmaal-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="no_bokmaal-pos-NUM.html">NUM</a></tt>-<tt><a href="no_bokmaal-pos-PROPN.html">PROPN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 nmod:poss	color:blue
1	Thomassen	Thomassen	PROPN	subst	_	4	nsubj	_	_
2	er	være	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	cop	_	_
3	på	på	ADP	prep	_	4	case	_	_
4	vei	vei	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	0	root	_	_
5	til	til	ADP	prep	_	8	case	_	_
6	sin	sin	PRON	det	Gender=Masc|Number=Sing|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
7	neste	neste	DET	det	Definite=Def|PronType=Dem	8	det	_	_
8	gjerning	gjerning	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	4	nmod	_	SpaceAfter=No
9	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nmod:poss	color:blue
1	Samtlige	samtlige	PRON	pron	Number=Plur|Person=3|PronType=Prs,Tot	8	nsubj	_	_
2	på	på	ADP	prep	_	6	case	_	_
3	Tor	Tor	PROPN	subst	Gender=Masc	6	nmod:poss	_	_
4	Holger	Holger	PROPN	subst	_	3	flat:name	_	_
5	Bertelsens	Bertelsen	PROPN	subst	Case=Gen	3	flat:name	_	_
6	arbeidsplass	arbeidsplass	NOUN	subst	Definite=Ind|Gender=Masc|Number=Sing	1	nmod	_	_
7	er	være	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	8	cop	_	_
8	inhabile	inhabil	ADJ	adj	Degree=Pos|Number=Plur	0	root	_	SpaceAfter=No
9	.	$.	PUNCT	clb	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 nmod:poss	color:blue
1	og	og	CCONJ	konj	_	2	cc	_	_
2	hevder	hevde	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
3	de	de	PRON	pron	Case=Nom|Number=Plur|Person=3|PronType=Prs	4	nsubj	_	_
4	gjør	gjøre	VERB	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
5	sitt	sin	PRON	det	Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	beste	god	ADJ	adj	Definite=Def|Degree=Sup	4	obj	_	_
7	for	for	ADP	prep	_	9	case	_	_
8	å	å	PART	inf-merke	_	9	mark	_	_
9	løse	løse	VERB	verb	VerbForm=Inf	4	advcl	_	_
10	problemene	problem	NOUN	subst	Definite=Def|Gender=Neut|Number=Plur	9	obj	_	_
11	i	i	ADP	prep	_	12	case	_	_
12	Tripoli	Tripoli	PROPN	subst	_	10	nmod	_	SpaceAfter=No
13	.	$.	PUNCT	clb	_	2	punct	_	_

~~~


