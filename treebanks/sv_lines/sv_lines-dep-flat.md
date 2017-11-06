---
layout: base
title:  'Statistics of flat in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `flat`

This relation is universal.

382 nodes (0%) are attached to their parents as `flat`.

382 instances of `flat` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.07591623036649.

The following 8 pairs of parts of speech are connected with `flat`: <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (351; 92% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (13; 3% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-NUM.html">NUM</a></tt> (6; 2% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (5; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-CCONJ.html">CCONJ</a></tt> (1; 0% instances).


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
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 flat	color:blue
1	En	en	DET	SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	2	det	_	_
2	sida	sida	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	11	nsubj:pass	_	_
3	som	som	SCONJ	REL	_	4	mark	_	_
4	har	ha	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	aux	_	_
5	skapats	skapa	VERB	SUP-PASS	VerbForm=Sup|Voice=Pass	2	amod	_	_
6	med	med	ADP	_	_	7	case	_	_
7	Microsoft	Microsoft	PROPN	SG-NOM	Case=Nom	5	obl	_	_
8	Access	Access	PROPN	SG-NOM	Case=Nom	7	flat	_	_
9	2000	2000	NUM	ID	_	7	flat	_	_
10	måste	måste	AUX	AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
11	konverteras	konvertera	VERB	INF-PASS	VerbForm=Inf|Voice=Pass	0	root	_	_
12	innan	innan	SCONJ	_	_	15	mark	_	_
13	den	den	PRON	PERS-P3SG	Definite=Def|Number=Plur|PronType=Prs	15	nsubj:pass	_	_
14	kan	kunna	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	15	aux	_	_
15	användas	använda	VERB	INF-PASS	VerbForm=Inf|Voice=Pass	11	advcl	_	_
16	i	i	ADP	_	_	17	case	_	_
17	Access	Access	PROPN	SG-NOM	Case=Nom	15	obl	_	_
18	2002	2002	NUM	ID	_	17	nummod	_	SpaceAfter=No
19	.	.	PUNCT	Period	_	11	punct	_	_

~~~


