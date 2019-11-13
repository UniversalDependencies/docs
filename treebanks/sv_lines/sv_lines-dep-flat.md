---
layout: base
title:  'Statistics of flat in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `flat`

This relation is universal.

406 nodes (0%) are attached to their parents as `flat`.

406 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.08620689655172.

The following 11 pairs of parts of speech are connected with `flat`: <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (368; 91% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (15; 4% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="sv_lines-pos-X.html">X</a></tt>-<tt><a href="sv_lines-pos-X.html">X</a></tt> (5; 1% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (4; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (2; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 flat	color:blue
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
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat	color:blue
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


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 flat	color:blue
1	Vad	vad	PRON	WH-SG	Definite=Ind|Gender=Neut|Number=Sing|PronType=Prs	3	obj	_	_
2	det	den	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
3	innebär	innebära	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	att	att	PART	_	_	5	mark	_	_
5	använda	använda	VERB	INF-ACT	VerbForm=Inf|Voice=Act	3	csubj	_	_
6	kommandot	kommando	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nmod	_	_
7	Spara	spara	VERB	INF-ACT	VerbForm=Inf|Voice=Act	5	obj	_	_
8	som	som	ADP	_	_	7	flat	_	_

~~~


