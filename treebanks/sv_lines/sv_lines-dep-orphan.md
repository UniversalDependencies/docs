---
layout: base
title:  'Statistics of orphan in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `orphan`

This relation is universal.

10 nodes (0%) are attached to their parents as `orphan`.

8 instances of `orphan` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.1.

The following 8 pairs of parts of speech are connected with `orphan`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (2; 20% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (2; 20% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 10% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (1; 10% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (1; 10% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 10% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (1; 10% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-SCONJ.html">SCONJ</a></tt> (1; 10% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 16 orphan	color:blue
1	När	när	SCONJ	_	_	6	mark	_	_
2	jag	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	6	nsubj	_	_
3	var	vara	AUX	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	6	cop	_	_
4	fem	fem	NUM	CARD-PL	_	5	nummod	_	_
5	år	år	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	6	obl	_	_
6	gammal	gammal	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	7	advcl	_	_
7	gick	gå	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
8	min	jag	PRON	P1SG-GEN-SG	Case=Gen|Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	9	nmod:poss	_	_
9	far	far	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	nsubj	_	_
10	på	på	ADP	_	_	11	case	_	_
11	tabletter	tablett	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	7	obl	_	_
12	och	och	CCONJ	_	_	14	cc	_	_
13	min	jag	PRON	P1SG-GEN-SG	Case=Gen|Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	14	nmod:poss	_	_
14	mor	mor	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	conj	_	_
15	på	på	ADP	_	_	16	case	_	_
16	gin	gin	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	14	orphan	_	SpaceAfter=No
17	.	.	PUNCT	Period	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 4 orphan	color:blue
1	Nja	nja	INTJ	_	_	12	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	1	punct	_	_
3	nästan	nästan	ADV	_	_	4	advmod	_	_
4	på	på	ADP	_	_	12	orphan	_	SpaceAfter=No
5	...	...	PUNCT	Dots	_	4	punct	_	_
6	Jag	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	12	nsubj	_	_
7	måste	måste	AUX	AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	12	aux	_	_
8	i	i	ADP	_	_	10	case	_	_
9	varje	varje	DET	TOT-SG-IND	Definite=Ind|Number=Sing|PronType=Tot	10	det	_	_
10	fall	fall	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	12	obl	_	_
11	ha	ha	AUX	INF-AUX	VerbForm=Inf|Voice=Act	12	aux	_	_
12	druckit	dricka	VERB	SUP-ACT	VerbForm=Sup|Voice=Act	0	root	_	_
13	hundratals	hundratal	NOUN	PL-IND-GEN	Case=Gen|Definite=Ind|Gender=Neut|Number=Plur	14	nmod:poss	_	_
14	koppar	kopp	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	15	nmod	_	_
15	kaffe	kaffe	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	12	obj	_	SpaceAfter=No
16	...	...	PUNCT	Dots	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 10 orphan	color:blue
1	I	i	ADP	_	_	3	case	_	_
2	det	den	DET	SG-DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	3	det	_	_
3	ena	ena	PRON	POS-SG-DEF	Case=Nom|Definite=Def|Number=Sing|PronType=Tot	4	obl	_	_
4	stod	stå	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	6	det	_	_
6	våningssäng	våningssäng	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	nsubj	_	SpaceAfter=No
7	,	,	PUNCT	Comma	_	4	punct	_	_
8	i	i	ADP	_	_	10	case	_	_
9	det	den	DET	SG-DEF	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	10	det	_	_
10	andra	två	ADJ	POS-DEF	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	12	orphan	_	_
11	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	12	det	_	_
12	dubbelsäng	dubbelsäng	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	parataxis	_	SpaceAfter=No
13	.	.	PUNCT	Period	_	4	punct	_	_

~~~


