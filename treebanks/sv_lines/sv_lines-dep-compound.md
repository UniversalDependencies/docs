---
layout: base
title:  'Statistics of compound in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `compound`

This relation is universal.
There are 1 language-specific subtypes of `compound`: <tt><a href="sv_lines-dep-compound-prt.html">compound:prt</a></tt>.

46 nodes (0%) are attached to their parents as `compound`.

45 instances of `compound` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.80434782608696.

The following 5 pairs of parts of speech are connected with `compound`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (25; 54% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (16; 35% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (3; 7% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 compound	color:blue
1	XSLT	XSLT	PROPN	SG-NOM	Case=Nom	0	root	_	_
2	(	(	PUNCT	LeftParenthesis	_	6	punct	_	SpaceAfter=No
3	Extensible	extensible	ADJ	POS-FGN	Degree=Pos	5	amod	_	_
4	Stylesheet	stylesheet	NOUN	SG-NOM-FGN	_	5	compound	_	_
5	Language	language	NOUN	SG-NOM-FGN	_	6	compound	_	_
6	Transformation	transformation	NOUN	SG-NOM-FGN	_	1	appos	_	SpaceAfter=No
7	)	)	PUNCT	RightParenthesis	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 7 compound	color:blue
1	Den	den	DET	SG-DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	3	det	_	_
2	konverterade	konvertera	ADJ	AD-DEF	Case=Nom|Definite=Def|Degree=Pos|Gender=Com|Number=Sing	3	amod	_	_
3	informationen	information	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nsubj:pass	_	_
4	visas	visa	VERB	PRES-PASS	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
5	som	som	ADP	_	_	7	case	_	_
6	Mom's	mom	NOUN	SG-GEN-FGN	_	7	nmod:poss	_	_
7	Boston	Boston	PROPN	SG-NOM	Case=Nom	9	compound	_	_
8	Crab	crab	NOUN	SG-NOM-FGN	_	9	compound	_	_
9	Meat	meat	NOUN	SG-NOM-FGN	_	4	obl	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 compound	color:blue
1	Jag	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	träffade	träffa	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	Stella	Stella	PROPN	SG-NOM	Case=Nom|Gender=Com|Number=Sing	2	obj	_	_
4	på	på	ADP	_	_	6	case	_	_
5	Algonquin	Algonquin	PROPN	SG-NOM	Case=Nom	6	compound	_	_
6	Hotel	Hotel	PROPN	SG-NOM	Case=Nom	2	obl	_	SpaceAfter=No
7	.	.	PUNCT	Period	_	2	punct	_	_

~~~


