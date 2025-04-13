---
layout: base
title:  'Statistics of root in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `root`

This relation is universal.

6026 nodes (6%) are attached to their parents as `root`.

6026 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.16080318619316.

The following 9 pairs of parts of speech are connected with `root`: -<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (4426; 73% instances), -<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (915; 15% instances), -<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (539; 9% instances), -<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (59; 1% instances), -<tt><a href="sv_talbanken-pos-PROPN.html">PROPN</a></tt> (35; 1% instances), -<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (30; 0% instances), -<tt><a href="sv_talbanken-pos-NUM.html">NUM</a></tt> (17; 0% instances), -<tt><a href="sv_talbanken-pos-INTJ.html">INTJ</a></tt> (4; 0% instances), -<tt><a href="sv_talbanken-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 4 root	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 2 root	color:blue
1	En	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	2	det	2:det	_
2	huvudtes	huvudtes	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	0:root	_
3	i	i	ADP	PP	_	4	case	4:case	_
4	kibbutzideologin	kibbutzideologi	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nmod	2:nmod:i	_
5	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	2:cop	_
6	fullständig	fullständig	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	7	amod	7:amod	_
7	jämställdhet	jämställdhet	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
8	mellan	mellan	ADP	PP	_	9	case	9:case	_
9	könen	kön	NOUN	NN|NEU|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Plur	7	nmod	7:nmod:mellan	SpaceAfter=No
10	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	Publicerad	publicerad	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	0:root	_
2	i	i	ADP	PP	_	3	case	3:case	_
3	Children	Children	PROPN	PM|NOM	Case=Nom	1	obl	1:obl:i	_
4	1958	1958	NUM	RG|NOM	Case=Nom|NumType=Card	3	nmod	3:nmod	SpaceAfter=No
5	,	,	PUNCT	MID	_	4	punct	4:punct	_
6	Vol.	volym	NOUN	NN|AN	Abbr=Yes	7	nmod	7:nmod	_
7	5	5	NUM	RG|NOM	Case=Nom|NumType=Card	4	obl	4:obl	SpaceAfter=No
8	,	,	PUNCT	MID	_	7	punct	7:punct	_
9	179-184	179-184	NUM	RG|NOM	Case=Nom|NumType=Card	7	nummod	7:nummod	_
10	.	.	PUNCT	MAD	_	1	punct	1:punct	_

~~~


