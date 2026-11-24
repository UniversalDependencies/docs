---
layout: base
title:  'Statistics of fixed in UD_Swedish-Talbanken'
udver: '2'
---

## Treebank Statistics: UD_Swedish-Talbanken: Relations: `fixed`

This relation is universal.

146 nodes (0%) are attached to their parents as `fixed`.

146 instances of `fixed` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.62328767123288.

The following 20 pairs of parts of speech are connected with `fixed`: <tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (36; 25% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-SCONJ.html">SCONJ</a></tt> (25; 17% instances), <tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt> (14; 10% instances), <tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_talbanken-pos-CCONJ.html">CCONJ</a></tt> (14; 10% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (12; 8% instances), <tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (9; 6% instances), <tt><a href="sv_talbanken-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt> (6; 4% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt> (4; 3% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-CCONJ.html">CCONJ</a></tt> (3; 2% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-PART.html">PART</a></tt> (3; 2% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="sv_talbanken-pos-PART.html">PART</a></tt>-<tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt> (2; 1% instances), <tt><a href="sv_talbanken-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_talbanken-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_talbanken-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_talbanken-pos-INTJ.html">INTJ</a></tt> (1; 1% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_talbanken-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_talbanken-pos-ADP.html">ADP</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 fixed	color:blue
1	Kan	kunna	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	5:aux	_
2	vem	vem	PRON	HP|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Tot	5	nsubj	5:nsubj|11:nsubj|12:nsubj	CxnElt=5:Interrogative-WHInfo-Direct.WHWord|ParsemeMWE=1:PronID
3	som	som	ADP	KN	ExtPos=ADV	2	advmod	2:advmod	ParsemeMWE=1
4	helst	gärna	ADV	AB|SUV	Degree=Sup	3	fixed	3:fixed	ParsemeMWE=1
5	slå	slå	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	Cxn=Interrogative-WHInfo-Direct|CxnElt=5:Interrogative-WHInfo-Direct.Clause|ParsemeMWE=2:VID
6	sig	sig	PRON	PN|UTR/NEU|SIN/PLU|DEF|OBJ	Case=Acc|Definite=Def|PronType=Prs	5	obj	5:obj	ParsemeMWE=2
7	ned	ned	ADV	PL	_	5	compound:prt	5:compound:prt	ParsemeMWE=2
8	i	i	ADP	PP	_	9	case	9:case	_
9	Sverige	Sverige	PROPN	PM|NOM	Case=Nom	5	obl	5:obl:i	_
10	och	och	CCONJ	KN	_	11	cc	11:cc	_
11	börja	börja	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	5	conj	5:conj:och	_
12	arbeta	arbeta	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	11	xcomp	11:xcomp	SpaceAfter=No
13	?	?	PUNCT	MAD	_	5	punct	5:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 fixed	color:blue
1	Därför	därför	ADV	HA	ExtPos=SCONJ	6	mark	6:mark	_
2	att	att	SCONJ	SN	_	1	fixed	1:fixed	_
3	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	5	det	5:det	_
4	kapitalistiska	kapitalistisk	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos	5	amod	5:amod	_
5	systemet	system	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	6	nsubj	6:nsubj	_
6	tjänar	tjäna	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
7	på	på	ADP	PP	_	8	case	8:case	_
8	hemmafruarna	hemmafru	NOUN	NN|UTR|PLU|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	6	obl	6:obl:på	SpaceAfter=No|ParsemeMWE=1:NID
9	.	.	PUNCT	MAD	_	6	punct	6:punct	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 fixed	color:blue
1	I	i	ADP	PP	ExtPos=ADP	4	case	4:case	ParsemeMWE=1:AdpID
2	och	och	CCONJ	KN	_	1	fixed	1:fixed	ParsemeMWE=1
3	med	med	ADP	PP	_	1	fixed	1:fixed	ParsemeMWE=1
4	parbildningen	parbildning	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl	7:obl:i_och_med	_
5	och	och	CCONJ	KN	_	6	cc	6:cc	_
6	bobyggandet	bobyggande	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	4	conj	4:conj:och|7:obl:i_och_med	_
7	följer	följa	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
8	beteendet	beteende	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nsubj	7:nsubj	_
9	andra	annan	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	10	amod	10:amod	_
10	mönster	mönster	NOUN	NN|NEU|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	7	obj	7:obj	SpaceAfter=No
11	.	.	PUNCT	MAD	_	7	punct	7:punct	_

~~~


