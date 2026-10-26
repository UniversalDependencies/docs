---
layout: base
title:  'Statistics of dep in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `dep`

This relation is universal.

4 nodes (0%) are attached to their parents as `dep`.

4 instances of `dep` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.5.

The following 3 pairs of parts of speech are connected with `dep`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-X.html">X</a></tt> (2; 50% instances), <tt><a href="sv_lines-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 25% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 25% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 10 dep	color:blue
1	Den	den	DET	SG-DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	3	det	_	_
2	utsålda	utsåld	ADJ	AD-PL-DEF	Case=Nom|Definite=Def|Degree=Pos	3	amod	_	_
3	kryssningen	kryssning	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	14	nsubj:pass	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	7	punct	_	_
5	i	i	ADP	_	_	6	case	_	_
6	sig	sig	PRON	RFL-ACC	Case=Acc|Definite=Def|PronType=Prs	7	obl	_	_
7	påminnande	påminnande	ADJ	NDE	Case=Nom|Degree=Pos|Tense=Pres|VerbForm=Part	3	acl	_	_
8	om	om	ADP	_	_	11	case	_	_
9	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	11	det	_	_
10	foie	foie	X	FGN	_	11	dep	_	_
11	gras-fest	gras-fest	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	obl	_	SpaceAfter=No
12	,	,	PUNCT	Comma	_	7	punct	_	_
13	var	vara	AUX	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	14	aux:pass	_	_
14	fullpackad	fullpackad	ADJ	AD-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	0	root	_	_
15	av	av	ADP	_	_	16	case	_	_
16	ateister	ateist	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	14	obl	_	_
17	på	på	ADP	_	_	18	case	_	_
18	mysteriejakt	mysteriejakt	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	16	nmod	_	SpaceAfter=No
19	.	.	PUNCT	Period	_	14	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	JAG	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	dep	_	SpaceAfter=No
2	:	:	PUNCT	Colon	_	1	punct	_	_
3	Nej	nej	INTJ	_	_	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	3	punct	_	SpacesAfter=\n\n

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 dep	color:blue
1	HON	hon	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	dep	_	SpaceAfter=No
2	:	:	PUNCT	Colon	_	1	punct	_	_
3	Kvinnor	kvinna	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	_	_
4	också	också	ADV	_	_	3	advmod	_	SpaceAfter=No
5	?	?	PUNCT	QuestionMark	_	3	punct	_	SpacesAfter=\n\n

~~~


