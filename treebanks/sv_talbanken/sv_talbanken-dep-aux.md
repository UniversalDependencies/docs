---
layout: base
title:  'Statistics of aux in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="sv_talbanken-dep-aux-pass.html">aux:pass</a></tt>.

2515 nodes (3%) are attached to their parents as `aux`.

2510 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.16540755467197.

The following 5 pairs of parts of speech are connected with `aux`: <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (2367; 94% instances), <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (95; 4% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (50; 2% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	'	'	PUNCT	PAD	_	4	punct	4:punct	SpaceAfter=No
2	Du	du	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	4:nsubj	_
3	skall	skola	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	lyda	lyda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
5	din	du	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	nmod:poss	6:nmod:poss	_
6	fader	far	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obj	4:obj	SpaceAfter=No
7	.	.	PUNCT	MAD	_	4	punct	4:punct	SpaceAfter=No
8	'	'	PUNCT	PAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux	color:blue
1	Skillnaderna	skillnad	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	8	nsubj	8:nsubj	_
2	inom	inom	ADP	PP	_	4	case	4:case	_
3	ett	en	DET	DT|NEU|SIN|IND	Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	4	det	4:det	_
4	land	land	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	nmod	1:nmod:inom	_
5	kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	8:aux	_
6	vara	vara	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	8	cop	8:cop	_
7	mycket	mycket	ADV	AB|POS	Degree=Pos	8	advmod	8:advmod	_
8	stora	stor	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	MAD	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	nsubj	4:nsubj|6:nsubj	_
2	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
3	varit	vara	AUX	VB|SUP|AKT	VerbForm=Sup|Voice=Act	4	cop	4:cop	_
4	lån	lån	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	0	root	0:root	_
5	och	och	CCONJ	KN	_	6	cc	6:cc	_
6	gåvor	gåva	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	4	conj	4:conj:och	_
7	i	i	ADP	PP	_	8	case	8:case	_
8	pengar	pengar	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	6	nmod	6:nmod:i	SpaceAfter=No
9	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


