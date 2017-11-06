---
layout: base
title:  'Statistics of nmod:poss in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="en_pud-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="en_pud-dep-nmod-npmod.html">nmod:npmod</a></tt>, <tt><a href="en_pud-dep-nmod-tmod.html">nmod:tmod</a></tt>.

365 nodes (2%) are attached to their parents as `nmod:poss`.

365 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.81643835616438.

The following 8 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (258; 71% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (66; 18% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (35; 10% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-X.html">X</a></tt>-<tt><a href="en_pud-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:poss	color:blue
1	That	that	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	_	SpaceAfter=No
2	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	_	_
3	not	not	PART	RB	Polarity=Neg	2	advmod	_	_
4	what	what	PRON	WP	PronType=Int	6	obj	_	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	_
6	need	need	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	_	_
7	in	in	ADP	IN	_	9	case	_	_
8	our	we	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	country	country	NOUN	NN	Number=Sing	6	obl	_	SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	_	_
11	folks	folk	NOUN	NNS	Number=Plur	2	vocative	_	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 nmod:poss	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	_	_
2	new	new	ADJ	JJ	Degree=Pos	3	amod	_	_
3	spending	spending	NOUN	NN	Number=Sing	5	nsubj:pass	_	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	_	_
5	fueled	fuel	VERB	VBN	Tense=Past|VerbForm=Part	0	root	_	_
6	by	by	ADP	IN	_	11	case	_	_
7	Clinton	Clinton	PROPN	NNP	Number=Sing	11	nmod:poss	_	SpaceAfter=No
8	’s	’s	PART	POS	_	7	case	_	_
9	large	large	ADJ	JJ	Degree=Pos	11	amod	_	_
10	bank	bank	NOUN	NN	Number=Sing	11	compound	_	_
11	account	account	NOUN	NN	Number=Sing	5	obl	_	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	Conservationists	conservationist	NOUN	NNS	Number=Plur	2	nsubj	_	_
2	welcomed	welcome	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	_	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	_	_
4	commission	commission	NOUN	NN	Number=Sing	6	nmod:poss	_	SpaceAfter=No
5	’s	’s	PART	POS	_	4	case	_	OrigForm='s
6	announcement	announcement	NOUN	NN	Number=Sing	2	obj	_	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	_	_

~~~


