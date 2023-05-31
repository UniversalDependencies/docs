---
layout: base
title:  'Statistics of ccomp in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `ccomp`

This relation is universal.

962 nodes (1%) are attached to their parents as `ccomp`.

797 instances of `ccomp` (83%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.75363825363825.

The following 20 pairs of parts of speech are connected with `ccomp`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (721; 75% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (86; 9% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (62; 6% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (23; 2% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (17; 2% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (15; 2% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-INTJ.html">INTJ</a></tt> (9; 1% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (7; 1% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (6; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 ccomp	color:blue
1	Han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	gissade	gissa	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	att	att	SCONJ	_	_	5	mark	_	_
4	hon	hon	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	5	nsubj	_	_
5	var	vara	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	ccomp	_	_
6	i	i	ADP	_	_	7	case	_	_
7	tjugoårsåldern	20-årsålder	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	5	obl	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 ccomp	color:blue
1	Det	den	PRON	PERS-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	nsubj	_	_
2	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	möjligt	möjlig	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	5	ccomp	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	5	punct	_	_
5	sa	säga	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	Auster	Auster	PROPN	SG-NOM	Case=Nom	5	nsubj	_	SpaceAfter=No
7	.	.	PUNCT	Period	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 ccomp	color:blue
1	"	"	PUNCT	Quote	_	7	punct	_	SpaceAfter=No
2	det	den	PRON	DEM-SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	nsubj	_	_
3	här	här	ADV	_	_	2	fixed	_	_
4	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
5	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	7	det	_	_
6	riktig	riktig	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	7	amod	_	_
7	tomtenisse	tomtenisse	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	10	ccomp	_	SpaceAfter=No
8	"	"	PUNCT	Quote	_	7	punct	_	SpaceAfter=No
9	,	,	PUNCT	Comma	_	10	punct	_	_
10	sade	säga	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
11	han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	10	nsubj	_	_
12	bistert	bistert	ADV	POS	_	10	advmod	_	SpaceAfter=No
13	.	.	PUNCT	Period	_	10	punct	_	_

~~~


