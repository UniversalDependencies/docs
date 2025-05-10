---
layout: base
title:  'Statistics of aux:pass in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `aux:pass`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-aux.html">aux</a></tt>.

146 nodes (0%) are attached to their parents as `aux:pass`.

146 instances of `aux:pass` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38356164383562.

The following 2 pairs of parts of speech are connected with `aux:pass`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (135; 92% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (11; 8% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 aux:pass	color:blue
1	Den	den	PRON	PERS-P3SG	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	6	nsubj	_	_
2	är	vara	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux:pass	_	_
3	till	till	ADP	_	ExtPos=ADV	6	advmod	_	_
4	och	och	CCONJ	_	_	3	fixed	_	_
5	med	med	ADP	_	_	3	fixed	_	_
6	utställd	ställa+ut	VERB	AD-SG-IND	Mood=Ind|VerbForm=Inf|Voice=Pass	0	root	_	_
7	på	på	ADP	_	_	8	case	_	_
8	er	ni	PRON	PERS-P2PL-ACC	Case=Gen|Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	6	obl	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 5 aux:pass	color:blue
1	När	när	SCONJ	_	_	3	mark	_	_
2	han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
3	kom	komma	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	advcl	_	_
4	hem	hem	ADV	_	_	3	advmod	_	_
5	var	vara	AUX	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	8	aux:pass	_	_
6	han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	8	nsubj:pass	_	_
7	inte	inte	PART	NEG	Polarity=Neg	8	advmod	_	_
8	väntad	väntad	ADJ	AD-IND-SG	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
9	av	av	ADP	_	_	11	case	_	_
10	min	jag	PRON	P1SG-GEN-SG	Case=Gen|Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
11	mor	mor	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obl	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	8	punct	_	_

~~~


