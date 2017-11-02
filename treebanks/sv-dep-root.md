---
layout: base
title:  'Statistics of root in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `root`

This relation is universal.

6026 nodes (6%) are attached to their parents as `root`.

6026 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.12860935944242.

The following 10 pairs of parts of speech are connected with `root`: -<tt><a href="sv-pos-VERB.html">VERB</a></tt> (4503; 75% instances), -<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (865; 14% instances), -<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (531; 9% instances), -<tt><a href="sv-pos-PRON.html">PRON</a></tt> (44; 1% instances), -<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (31; 1% instances), -<tt><a href="sv-pos-ADV.html">ADV</a></tt> (25; 0% instances), -<tt><a href="sv-pos-NUM.html">NUM</a></tt> (16; 0% instances), -<tt><a href="sv-pos-ADP.html">ADP</a></tt> (6; 0% instances), -<tt><a href="sv-pos-INTJ.html">INTJ</a></tt> (4; 0% instances), -<tt><a href="sv-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	En	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	2	det	_	_
2	huvudtes	huvudtes	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
3	i	i	ADP	PP	_	4	case	_	_
4	kibbutzideologin	kibbutzideologi	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nmod	_	_
5	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
6	fullständig	fullständig	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	7	amod	_	_
7	jämställdhet	jämställdhet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	_	_
8	mellan	mellan	ADP	PP	_	9	case	_	_
9	könen	kön	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Publicerad	publicera	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
2	i	i	ADP	PP	_	3	case	_	_
3	Children	Children	PROPN	PM|NOM	Case=Nom	1	obl	_	_
4	1958	1958	NUM	RG|NOM	Case=Nom|NumType=Card	3	nmod	_	SpaceAfter=No
5	,	,	PUNCT	MID	_	4	punct	_	_
6	Vol.	Vol.	NOUN	NN|AN	Abbr=Yes	7	nmod	_	_
7	5	5	NUM	RG|NOM	Case=Nom|NumType=Card	4	obl	_	SpaceAfter=No
8	,	,	PUNCT	MID	_	7	punct	_	_
9	179-184	179-184	NUM	RG|NOM	Case=Nom|NumType=Card	7	nummod	_	_
10	.	.	PUNCT	MAD	_	1	punct	_	_

~~~


