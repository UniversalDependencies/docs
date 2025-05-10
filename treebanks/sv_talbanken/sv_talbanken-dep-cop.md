---
layout: base
title:  'Statistics of cop in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `cop`

This relation is universal.

1842 nodes (2%) are attached to their parents as `cop`.

1651 instances of `cop` (90%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.38599348534202.

The following 9 pairs of parts of speech are connected with `cop`: <tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (970; 53% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (658; 36% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (85; 5% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (68; 4% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (37; 2% instances), <tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (12; 1% instances), <tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="sv_talbanken-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (2; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 cop	color:blue
1	Man	man	PRON	PN|UTR|SIN|IND|SUB	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	2	nsubj	2:nsubj	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	anledning	anledning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	2:obj	_
4	att	att	PART	IE	_	6	mark	6:mark	_
5	vara	vara	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	6	cop	6:cop	_
6	pessimistisk	pessimistisk	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	3	acl	3:acl:att	SpaceAfter=No
7	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 cop	color:blue
1	Är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	4:cop	_
2	kvinnan	kvinna	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nsubj	1:nsubj	_
3	på	på	ADP	PP	_	4	case	4:case	_
4	väg	väg	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	0:root	Cxn=Interrogative-Polar-Direct|CxnElt=4:Interrogative-Polar-Direct.Clause
5	tillbaka	tillbaka	ADV	AB	_	4	nmod	4:nmod	_
6	till	till	ADP	PP	_	7	case	7:case	_
7	kök	kök	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	5	obl	5:obl:till	_
8	och	och	CCONJ	KN	_	9	cc	9:cc	_
9	barnkammare	barnkammare	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	conj	5:obl:till|7:conj:och	SpaceAfter=No
10	?	?	PUNCT	MAD	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 cop	color:blue
1	Annat	annan	PRON	PN|NEU|SIN|IND|SUB/OBJ	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	0	root	0:root	_
2	var	vara	AUX	VB|PRT|AKT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	1	cop	1:cop	_
3	det	den	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	1	nsubj	1:nsubj	_
4	i	i	ADP	PP	_	5	case	5:case	_
5	bondesamhället	bondesamhälle	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	1	obl	1:obl:i	SpaceAfter=No
6	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


