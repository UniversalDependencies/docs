---
layout: base
title:  'Statistics of nmod:poss in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `nmod:poss`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-nmod.html">nmod</a></tt>.

1908 nodes (2%) are attached to their parents as `nmod:poss`.

1908 instances of `nmod:poss` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.29716981132075.

The following 15 pairs of parts of speech are connected with `nmod:poss`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1192; 62% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (439; 23% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (225; 12% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (11; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (10; 1% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (9; 0% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (7; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (4; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-X.html">X</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:poss	color:blue
1	Tack	tack	INTJ	_	_	0	root	_	_
2	för	för	ADP	_	_	4	case	_	_
3	Ditt	du	PRON	SG-GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	4	nmod:poss	_	_
4	bidrag	bidrag	NOUN	IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	nmod	_	SpaceAfter=No
5	.	.	PUNCT	Period	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod:poss	color:blue
1	Du	du	PRON	PERS-P2SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
2	kan	kunna	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	ange	ange	VERB	INF-ACT	VerbForm=Inf|Voice=Act	0	root	_	_
4	färgen	färg	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	obj	_	_
5	och	och	CCONJ	_	_	6	cc	_	_
6	bredden	bredd	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	conj	_	_
7	för	för	ADP	_	_	9	case	_	_
8	kontrollernas	kontroll	NOUN	PL-DEF-GEN	Case=Gen|Definite=Def|Gender=Com|Number=Plur	9	nmod:poss	_	_
9	kantlinjer	kantlinje	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	6	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nmod:poss	color:blue
1	Stillmans	Stillman	PROPN	SG-GEN	Case=Gen	2	nmod:poss	_	_
2	ansikte	ansikte	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	nsubj	_	_
3	sa	säga	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	honom	han	PRON	PERS-P3SG-ACC	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	iobj	_	_
5	emellertid	emellertid	ADV	_	_	3	advmod	_	_
6	fortfarande	fortfarande	ADV	_	_	3	advmod	_	_
7	ingenting	ingenting	PRON	NEG-SG	Definite=Ind|Gender=Neut|Number=Sing|PronType=Neg	3	obj	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	3	punct	_	_

~~~


