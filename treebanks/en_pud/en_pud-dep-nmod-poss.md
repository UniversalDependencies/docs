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
1	That	that	PRON	DT	Number=Sing|PronType=Dem	2	nsubj	2:nsubj	SpaceAfter=No
2	's	be	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	not	not	PART	RB	Polarity=Neg	2	advmod	2:advmod	_
4	what	what	PRON	WP	PronType=Int	6	obj	6:obj	_
5	we	we	PRON	PRP	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	6:nsubj	_
6	need	need	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	2	ccomp	2:ccomp	_
7	in	in	ADP	IN	_	9	case	9:case	_
8	our	we	PRON	PRP$	Number=Plur|Person=1|Poss=Yes|PronType=Prs	9	nmod:poss	9:nmod:poss	_
9	country	country	NOUN	NN	Number=Sing	6	obl	6:obl:in	SpaceAfter=No
10	,	,	PUNCT	,	_	2	punct	2:punct	_
11	folks	folk	NOUN	NNS	Number=Plur	2	vocative	2:vocative	SpaceAfter=No
12	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 7 nmod:poss	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	3	det	3:det	_
2	new	new	ADJ	JJ	Degree=Pos	3	amod	3:amod	_
3	spending	spending	NOUN	NN	Number=Sing	5	nsubj:pass	5:nsubj:pass	_
4	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	aux:pass	5:aux:pass	_
5	fueled	fuel	VERB	VBN	Tense=Past|VerbForm=Part	0	root	0:root	_
6	by	by	ADP	IN	_	11	case	11:case	_
7	Clinton	Clinton	PROPN	NNP	Number=Sing	11	nmod:poss	11:nmod:poss	SpaceAfter=No
8	’s	’s	PART	POS	_	7	case	7:case	_
9	large	large	ADJ	JJ	Degree=Pos	11	amod	11:amod	_
10	bank	bank	NOUN	NN	Number=Sing	11	compound	11:compound	_
11	account	account	NOUN	NN	Number=Sing	5	obl	5:obl:by	SpaceAfter=No
12	.	.	PUNCT	.	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 nmod:poss	color:blue
1	Conservationists	conservationist	NOUN	NNS	Number=Plur	2	nsubj	2:nsubj	_
2	welcomed	welcome	VERB	VBD	Mood=Ind|Tense=Past|VerbForm=Fin	0	root	0:root	_
3	the	the	DET	DT	Definite=Def|PronType=Art	4	det	4:det	_
4	commission	commission	NOUN	NN	Number=Sing	6	nmod:poss	6:nmod:poss	SpaceAfter=No
5	’s	’s	PART	POS	_	4	case	4:case	_
6	announcement	announcement	NOUN	NN	Number=Sing	2	obj	2:obj	SpaceAfter=No
7	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


