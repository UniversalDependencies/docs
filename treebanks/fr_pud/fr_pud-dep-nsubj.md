---
layout: base
title:  'Statistics of nsubj in UD_French-PUD'
udver: '2'
---

## Treebank Statistics: UD_French-PUD: Relations: `nsubj`

This relation is universal.
There are 2 language-specific subtypes of `nsubj`: <tt><a href="fr_pud-dep-nsubj-caus.html">nsubj:caus</a></tt>, <tt><a href="fr_pud-dep-nsubj-pass.html">nsubj:pass</a></tt>.

1421 nodes (6%) are attached to their parents as `nsubj`.

1358 instances of `nsubj` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 3.50105559465165.

The following 23 pairs of parts of speech are connected with `nsubj`: <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (561; 39% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (464; 33% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (196; 14% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (51; 4% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (48; 3% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (29; 2% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (19; 1% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (12; 1% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt> (11; 1% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="fr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (4; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-SYM.html">SYM</a></tt> (3; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fr_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="fr_pud-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fr_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="fr_pud-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fr_pud-pos-X.html">X</a></tt>-<tt><a href="fr_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 nsubj	color:blue
1	Tout	_	ADJ	PDT	Gender=Masc|Number=Sing	3	amod	_	_
2	le	_	DET	DT	Gender=Masc|Number=Sing	3	det	_	_
3	monde	_	NOUN	NN	Gender=Masc|Number=Sing	5	nsubj	_	_
4	ne	_	ADV	RB	Polarity=Neg	5	advmod	_	_
5	peut	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
6	pas	_	ADV	RB	Polarity=Neg	5	advmod	_	_
7	s'	_	PRON	PRP	Gender=Masc|Number=Sing|Person=3	8	obj	_	SpaceAfter=No
8	élever	_	VERB	VB	_	5	xcomp	_	_
9	à	à	ADP	IN	_	13	case	_	_
10	le	le	DET	_	_	9	fixed	_	_
11	dessus	_	X	GW	_	9	fixed	_	_
12	de	_	ADP	IN	_	9	fixed	_	_
13	ça	_	PRON	PDEM	_	8	obl	_	SpaceAfter=No
14	.	_	PUNCT	.	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj	color:blue
1	C'	_	PRON	PDEM	_	2	nsubj	_	SpaceAfter=No
2	est	_	VERB	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	0	root	_	_
3	parfois	_	ADV	RB	_	2	advmod	_	_
4	comme	_	ADP	IN	_	7	case	_	_
5	un	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
6	super	_	ADJ	JJ	Gender=Masc|Number=Sing	7	amod	_	_
7	pouvoir	_	NOUN	NN	Gender=Masc|Number=Sing	2	obl	_	SpaceAfter=No
8	.	_	PUNCT	.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 nsubj	color:blue
1	Sa	_	DET	DTP$	Gender=Fem|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	_	_
2	voix	_	NOUN	NN	Gender=Fem|Number=Sing	5	nsubj	_	_
3	a	_	AUX	VBC	Mood=Ind|Number=Sing|Person=3|Tense=Pres	5	aux:tense	_	_
4	littéralement	_	ADV	RB	_	5	advmod	_	_
5	fait	_	VERB	VBN	Gender=Masc|Number=Sing	12	parataxis	_	_
6	le	_	DET	DT	Gender=Masc|Number=Sing	7	det	_	_
7	tour	_	NOUN	NN	Gender=Masc|Number=Sing	5	obj	_	_
8	de	de	ADP	INDT	_	10	case	_	_
9	le	le	DET	_	Gender=Masc|Number=Sing	10	det	_	_
10	monde	_	NOUN	NN	Gender=Masc|Number=Sing	7	nmod	_	SpaceAfter=No
11	,	_	PUNCT	,	_	5	punct	_	_
12	dit	_	VERB	VBN	Number=Sing	0	root	_	_
13	Leive	_	PROPN	NNP	Gender=Fem|Number=Sing	12	nsubj	_	SpaceAfter=No
14	.	_	PUNCT	.	_	12	punct	_	_

~~~


