---
layout: base
title:  'Statistics of orphan in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `orphan`

This relation is universal.

9 nodes (0%) are attached to their parents as `orphan`.

8 instances of `orphan` (89%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.33333333333333.

The following 7 pairs of parts of speech are connected with `orphan`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (2; 22% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (2; 22% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (1; 11% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (1; 11% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (1; 11% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-SCONJ.html">SCONJ</a></tt> (1; 11% instances).


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
5	år	år	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	6	nmod	_	_
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
# visual-style 29	bgColor:blue
# visual-style 29	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 29 orphan	color:blue
1	–	–	PUNCT	Dash	_	17	punct	_	_
2	Det	den	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	17	expl	_	_
3	skulle	skola	AUX	PAST-AUX	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	17	aux	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	5	punct	_	_
5	fortsatte	fortsätta	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	17	parataxis	_	_
6	han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	5	nsubj	_	_
7	utan	utan	ADP	_	_	9	mark	_	_
8	att	att	PART	_	_	9	mark	_	_
9	bry	bry	VERB	INF-ACT	VerbForm=Inf|Voice=Act	5	advcl	_	_
10	sig	sig	PRON	RFL-ACC	Case=Acc|Definite=Def|PronType=Prs	9	obj	_	_
11	om	om	ADP	_	_	13	case	_	_
12	mitt	jag	PRON	P1SG-GEN-SG	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	13	nmod:poss	_	_
13	utbrott	utbrott	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	9	obl	_	SpaceAfter=No
14	,	,	PUNCT	Comma	_	5	punct	_	_
15	vara	vara	AUX	INF-ACT	VerbForm=Inf|Voice=Act	17	cop	_	_
16	av	av	ADP	_	_	17	case	_	_
17	intresse	intresse	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
18	för	för	ADP	_	_	19	case	_	_
19	vetenskapen	vetenskap	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	17	nmod	_	_
20	att	att	PART	_	_	21	mark	_	_
21	iaktta	iaktta	VERB	INF-ACT	VerbForm=Inf|Voice=Act	17	csubj	_	_
22	de	den	DET	PL-DEF	Definite=Def|Number=Plur|PronType=Art	24	det	_	_
23	själsliga	själslig	ADJ	POS-PL-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	24	amod	_	_
24	förändringarna	förändring	NOUN	PL-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Plur	21	obj	_	_
25	hos	hos	ADP	_	_	26	case	_	_
26	individer	individ	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	24	nmod	_	_
27	därute	därute	ADV	_	_	26	advmod	_	SpaceAfter=No
28	,	,	PUNCT	Comma	_	29	punct	_	_
29	men	men	CCONJ	_	_	17	orphan	_	SpaceAfter=No
30	...	...	PUNCT	Dots	_	17	punct	_	_

~~~


