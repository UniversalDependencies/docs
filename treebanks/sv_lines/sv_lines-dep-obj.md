---
layout: base
title:  'Statistics of obj in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `obj`

This relation is universal.

4855 nodes (5%) are attached to their parents as `obj`.

4501 instances of `obj` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.01503604531411.

The following 23 pairs of parts of speech are connected with `obj`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (2837; 58% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1682; 35% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (176; 4% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (39; 1% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (23; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (22; 0% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (16; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-INTJ.html">INTJ</a></tt> (13; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (12; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (11; 0% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (4; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-SYM.html">SYM</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-SYM.html">SYM</a></tt>-<tt><a href="sv_lines-pos-SYM.html">SYM</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obj	color:blue
1	Importera	importera	VERB	IMP-ACT	Mood=Imp|VerbForm=Fin|Voice=Act	0	root	_	_
2	XML-data	XML-data	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	1	obj	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 obj	color:blue
1	Du	du	PRON	PERS-P2SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
2	kan	kunna	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	aux	_	_
3	byta	byta	VERB	INF-ACT	VerbForm=Inf|Voice=Act	0	root	_	_
4	färg	färg	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	obj	_	_
5	på	på	ADP	_	_	7	case	_	_
6	en	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	7	det	_	_
7	kontroll	kontroll	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	obl	_	_
8	eller	eller	CCONJ	_	_	9	cc	_	_
9	göra	göra	VERB	INF-ACT	VerbForm=Inf|Voice=Act	3	conj	_	_
10	den	den	PRON	PERS-P3SG	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	9	obj	_	_
11	genomskinlig	genomskinlig	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	9	xcomp	_	SpaceAfter=No
12	.	.	PUNCT	Period	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obj	color:blue
1	Access	Access	PROPN	SG-NOM	Case=Nom	2	nsubj	_	_
2	stöder	stödja	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	XML-schemastandarden	XML-schemastandard	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nmod	_	_
4	XSD	XSD	PROPN	SG-NOM	Case=Nom	2	obj	_	SpaceAfter=No
5	.	.	PUNCT	Period	_	2	punct	_	_

~~~


