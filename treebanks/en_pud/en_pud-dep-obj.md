---
layout: base
title:  'Statistics of obj in UD_English-PUD'
udver: '2'
---

## Treebank Statistics: UD_English-PUD: Relations: `obj`

This relation is universal.

876 nodes (4%) are attached to their parents as `obj`.

856 instances of `obj` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.2134703196347.

The following 14 pairs of parts of speech are connected with `obj`: <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (688; 79% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PROPN.html">PROPN</a></tt> (73; 8% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (70; 8% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt> (13; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-DET.html">DET</a></tt> (10; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-SYM.html">SYM</a></tt> (9; 1% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (6; 1% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="en_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="en_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="en_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 obj	color:blue
1	The	the	DET	DT	Definite=Def|PronType=Art	2	det	2:det	_
2	scheme	scheme	NOUN	NN	Number=Sing	3	nsubj	3:nsubj	_
3	makes	make	VERB	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
4	money	money	NOUN	NN	Number=Sing	3	obj	3:obj	_
5	through	through	ADP	IN	_	6	case	6:case	_
6	sponsorship	sponsorship	NOUN	NN	Number=Sing	3	obl	3:obl:through	_
7	and	and	CCONJ	CC	_	8	cc	8:cc	_
8	advertising	advertising	NOUN	NN	Number=Sing	6	conj	3:obl:through|6:conj:and	SpaceAfter=No
9	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 obj	color:blue
1	They	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	2	nsubj	2:nsubj	_
2	have	have	VERB	VBP	Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	one	one	NUM	CD	NumType=Card	4	nummod	4:nummod	_
4	crack	crack	NOUN	NN	Number=Sing	2	obj	2:obj	_
5	at	at	ADP	IN	_	6	case	6:case	_
6	redemption	redemption	NOUN	NN	Number=Sing	4	nmod	4:nmod:at	SpaceAfter=No
7	,	,	PUNCT	,	_	2	punct	2:punct	_
8	beating	beat	VERB	VBG	VerbForm=Ger	2	parataxis	2:parataxis	_
9	England	England	PROPN	NNP	Number=Sing	8	obj	8:obj	SpaceAfter=No
10	.	.	PUNCT	.	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 obj	color:blue
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


