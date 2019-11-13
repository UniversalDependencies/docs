---
layout: base
title:  'Statistics of nsubj:pass in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-nsubj.html">nsubj</a></tt>.

685 nodes (1%) are attached to their parents as `nsubj:pass`.

583 instances of `nsubj:pass` (85%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.55036496350365.

The following 9 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (351; 51% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (299; 44% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (23; 3% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (4; 1% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	SQL	SQL	PROPN	SG-NOM	Case=Nom	2	nmod	_	_
2	Server-databasen	server-databas	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nsubj:pass	_	_
3	måste	måste	AUX	AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	köras	köra	VERB	INF-PASS	VerbForm=Inf|Voice=Pass	0	root	_	_
5	på	på	ADP	_	_	6	case	_	_
6	Windows	Windows	PROPN	SG-NOM	Case=Nom	4	obl	_	_
7	NT	NT	PROPN	SG-NOM	Case=Nom	6	flat	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 nsubj:pass	color:blue
1	Det	den	PRON	PERS-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	nsubj:pass	_	_
2	kändes	kännas	VERB	PAST-PASS	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	_
3	kusligt	kuslig	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Sing	2	xcomp	_	SpaceAfter=No
4	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 nsubj:pass	color:blue
1	SQL	SQL	PROPN	SG-NOM	Case=Nom	4	nsubj:pass	_	_
2	Server	server	NOUN	SG-IND-NOM	Case=Nom|Number=Sing	1	flat	_	_
3	måste	måste	AUX	AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	köras	köra	VERB	INF-PASS	VerbForm=Inf|Voice=Pass	0	root	_	_
5	på	på	ADP	_	_	7	case	_	_
6	samma	samma	ADJ	POS-IND	Definite=Ind|PronType=Ind	7	amod	_	_
7	dator	dator	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obl	_	_
8	som	som	ADP	_	_	9	case	_	_
9	Access-projektet	Access-projekt	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	4	punct	_	_

~~~


