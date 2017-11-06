---
layout: base
title:  'Statistics of aux in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="sv_lines-dep-aux-pass.html">aux:pass</a></tt>.

2066 nodes (3%) are attached to their parents as `aux`.

2056 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.75314617618587.

The following 9 pairs of parts of speech are connected with `aux`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (1915; 93% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (52; 3% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (38; 2% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (21; 1% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (16; 1% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (11; 1% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (7; 0% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="sv_lines-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
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
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 4 aux	color:blue
1	Sådana	sådan	ADJ	POS-PL-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	3	amod	_	_
2	intelligenta	intelligent	ADJ	POS-PL-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	3	amod	_	_
3	synpunkter	synpunkt	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	8	nsubj	_	_
4	har	ha	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
5	inte	inte	PART	NEG	_	8	advmod	_	_
6	alltid	alltid	ADV	_	_	8	advmod	_	_
7	varit	vara	AUX	SUP-ACT	VerbForm=Sup|Voice=Act	8	cop	_	_
8	felaktiga	felaktig	ADJ	POS-PL-IND	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 aux	color:blue
1	Det	det	PRON	PERS-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	nsubj	_	_
2	skulle	skola	AUX	PAST-AUX	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	7	aux	_	_
3	i	i	ADP	_	_	4	case	_	_
4	slutändan	slutända	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl	_	_
5	vara	vara	VERB	INF-ACT	VerbForm=Inf|Voice=Act	7	cop	_	_
6	till	till	ADP	_	_	7	case	_	_
7	nackdel	nackdel	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
8	för	för	ADP	_	_	9	case	_	_
9	konsumenten	konsument	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	7	punct	_	_

~~~


