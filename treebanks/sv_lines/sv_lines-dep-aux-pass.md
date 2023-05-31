---
layout: base
title:  'Statistics of aux:pass in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-aux.html">aux</a></tt>.

131 nodes (0%) are attached to their parents as `aux:pass`.

131 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.36641221374046.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (126; 96% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (5; 4% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux:pass	color:blue
1	Den	den	PRON	PERS-P3SG	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	6	nsubj	_	_
2	är	vara	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
3	till	till	ADV	_	_	6	advmod	_	_
4	och	och	CCONJ	_	_	3	fixed	_	_
5	med	med	ADV	_	Case=Nom	3	fixed	_	_
6	utställd	ställa+ut	VERB	AD-SG-IND	Mood=Ind|VerbForm=Inf|Voice=Pass	0	root	_	_
7	på	på	ADP	_	_	8	case	_	_
8	er	ni	PRON	PERS-P2PL-ACC	Case=Gen|Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux:pass	color:blue
1	Start-	start	NOUN	SG-IND-PFX	_	7	nsubj:pass	_	_
2	och	och	CCONJ	_	_	3	cc	_	_
3	slutmärkena	slutmärke	NOUN	PL-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	1	conj	_	_
4	måste	måste	AUX	AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
5	alltså	alltså	ADV	_	_	7	advmod	_	_
6	vara	vara	AUX	INF-AUX	VerbForm=Inf|Voice=Act	7	aux:pass	_	_
7	inkapslade	inkapslad	ADJ	AD-PL-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	0	root	_	_
8	i	i	ADP	_	_	10	case	_	_
9	andra	annan	ADJ	CMP-PL-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	10	amod	_	_
10	element	element	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	7	obl	_	_
11	på	på	ADP	_	_	13	case	_	_
12	rätt	rätt	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	13	amod	_	_
13	sätt	sätt	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	obl	_	SpaceAfter=No
14	.	.	PUNCT	Period	_	7	punct	_	_

~~~


