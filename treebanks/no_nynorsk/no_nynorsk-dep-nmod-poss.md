---
layout: base
title:  'Statistics of nmod:poss in UD_Norwegian-Nynorsk'
udver: '2'
---

## Treebank Statistics: UD_Norwegian-Nynorsk: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="no_nynorsk-dep-nmod.html">nmod</a></tt>.

1597 nodes (1%) are attached to their parents as `nmod:poss`.

970 instances of `nmod:poss` (61%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.28991859737007.

The following 6 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (1482; 93% instances), <tt><a href="no_nynorsk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (53; 3% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (19; 1% instances), <tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="no_nynorsk-pos-PROPN.html">PROPN</a></tt> (18; 1% instances), <tt><a href="no_nynorsk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (16; 1% instances), <tt><a href="no_nynorsk-pos-DET.html">DET</a></tt>-<tt><a href="no_nynorsk-pos-PRON.html">PRON</a></tt> (9; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:poss	color:blue
1	Dette	dette	PRON	pron	Gender=Neut|Person=3|PronType=Prs	4	obj	_	_
2	har	ha	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	4	aux	_	_
3	eg	eg	PRON	pron	Animacy=Hum|Case=Nom|Person=1|PronType=Prs	4	nsubj	_	_
4	lært	lære	VERB	verb	VerbForm=Part	0	root	_	_
5	av	av	ADP	prep	_	6	case	_	_
6	søstra	søster	NOUN	subst	Gender=Fem	4	obl	_	_
7	mi	min	PRON	det	Gender=Fem|Poss=Yes|PronType=Prs	6	nmod:poss	_	SpaceAfter=No
8	,	$,	PUNCT	<komma>	_	13	punct	_	_
9	og	og	CCONJ	konj	_	13	cc	_	_
10	det	det	PRON	pron	Gender=Neut|Person=3|PronType=Prs	13	nsubj	_	_
11	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	13	cop	_	_
12	heilt	heil	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	13	advmod	_	_
13	genialt	genial	ADJ	adj	Definite=Ind|Degree=Pos|Gender=Neut	4	conj	_	SpaceAfter=No
14	.	$.	PUNCT	clb	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 nmod:poss	color:blue
1	Dette	dette	PRON	pron	Gender=Neut|Person=3|PronType=Prs	8	nsubj	_	_
2	er	vere	AUX	verb	Mood=Ind|Tense=Pres|VerbForm=Fin	8	cop	_	_
3	ikkje	ikkje	ADV	adv	_	8	advmod	_	_
4	berre	berre	ADV	adv	_	8	advmod	_	_
5	Carl	Carl	PROPN	subst	Gender=Masc	8	nmod:poss	_	_
6	I.	I.	PROPN	subst	Abbr=Yes	5	flat:name	_	_
7	Hagens	Hagen	PROPN	subst	Case=Gen	5	flat:name	_	_
8	verk	verk	NOUN	subst	Definite=Ind|Gender=Neut	0	root	_	SpaceAfter=No
9	.	$.	PUNCT	clb	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nmod:poss	color:blue
1	Teknoalderen	teknoalder	NOUN	subst	Gender=Masc	2	obl	_	_
2	sin	sin	PRON	det	Gender=Masc|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
3	Frankenstein	Frankenstein	PROPN	subst	_	0	root	_	_

~~~


