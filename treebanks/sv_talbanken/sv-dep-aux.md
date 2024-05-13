---
layout: base
title:  'Statistics of aux in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="sv-dep-aux-pass.html">aux:pass</a></tt>.

2517 nodes (3%) are attached to their parents as `aux`.

2511 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16765991259436.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (2371; 94% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (95; 4% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (47; 2% instances), <tt><a href="sv-pos-PRON.html">PRON</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="sv-pos-ADV.html">ADV</a></tt>-<tt><a href="sv-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	'	'	PUNCT	PAD	_	4	punct	_	SpaceAfter=No
2	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
3	skall	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	lyda	lyda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	_	_
5	din	du	DET	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	_	_
6	fader	far	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obj	_	SpaceAfter=No
7	.	.	PUNCT	MAD	_	4	punct	_	SpaceAfter=No
8	'	'	PUNCT	PAD	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	Skillnaderna	skillnad	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	8	nsubj	_	_
2	inom	inom	ADP	PP	_	4	case	_	_
3	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	4	det	_	_
4	land	land	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	nmod	_	_
5	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
6	vara	vara	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	8	cop	_	_
7	mycket	mycket	ADV	AB|POS	Degree=Pos	8	advmod	_	_
8	stora	stor	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	0	root	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	nsubj	_	_
2	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	varit	vara	AUX	VB|SUP|AKT	VerbForm=Sup|Voice=Act	4	cop	_	_
4	lån	lån	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
5	och	och	CCONJ	KN	_	6	cc	_	_
6	gåvor	gåva	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	4	conj	_	_
7	i	i	ADP	PP	_	8	case	_	_
8	pengar	pengar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	6	nmod	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	4	punct	_	_

~~~


