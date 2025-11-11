---
layout: base
title:  'Statistics of amod in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `amod`

This relation is universal.

5001 nodes (5%) are attached to their parents as `amod`.

4838 instances of `amod` (97%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.22695460907818.

The following 17 pairs of parts of speech are connected with `amod`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (4795; 96% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (58; 1% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (48; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (38; 1% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (30; 1% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (6; 0% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="sv_lines-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-INTJ.html">INTJ</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADP.html">ADP</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 amod	color:blue
1	SQL	SQL	PROPN	SG-NOM	Case=Nom	4	nsubj:pass	_	_
2	Server	server	NOUN	SG-IND-NOM	Case=Nom|Number=Sing	1	flat	_	_
3	måste	måste	AUX	AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	köras	köra	VERB	INF-PASS	VerbForm=Inf|Voice=Pass	0	root	_	_
5	på	på	ADP	_	_	7	case	_	_
6	samma	samma	ADJ	POS-IND	Case=Nom|Definite=Ind|Degree=Pos	7	amod	_	_
7	dator	dator	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	obl	_	_
8	som	som	ADP	_	_	9	case	_	_
9	Access-projektet	Access-projekt	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	7	nmod	_	SpaceAfter=No
10	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 amod	color:blue
1	Han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	undrade	undra	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	om	om	SCONJ	_	_	7	mark	_	_
4	den	den	DET	SG-DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	6	det	_	_
5	unge	ung	ADJ	POS-SG-DEF	Case=Nom|Definite=Def|Degree=Pos	6	amod	_	_
6	Auster	Auster	PROPN	SG-NOM	Case=Nom	7	nsubj	_	_
7	hade	ha	AUX	PAST-AUX	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	2	advcl	_	_
8	varit	vara	AUX	SUP-ACT	VerbForm=Sup|Voice=Act	9	cop	_	_
9	bättre	bra	ADJ	CMP	Case=Nom|Degree=Cmp	7	xcomp	_	_
10	på	på	ADP	_	_	11	case	_	_
11	det	den	PRON	PERS-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	9	nmod	_	_
12	än	än	SCONJ	CMP	_	13	case	_	_
13	han	han	PRON	PERS-P3SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	Period	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 amod	color:blue
1	Nej	nej	INTJ	_	_	4	discourse	_	SpaceAfter=No
2	,	,	PUNCT	Comma	_	1	punct	_	_
3	jag	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
4	missade	missa	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
5	den	den	PRON	PERS-P3SG	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	obj	_	SpaceAfter=No
6	.	.	PUNCT	Period	_	4	punct	_	_
7	Nåt	någon	PRON	IND-SG	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	4	parataxis	_	_
8	bra	bra	ADJ	POS-IND	Case=Nom|Degree=Pos	7	amod	_	_
9	att	att	PART	_	_	10	mark	_	_
10	rapportera	rapportera	VERB	INF-ACT	VerbForm=Inf|Voice=Act	7	acl	_	SpaceAfter=No
11	?	?	PUNCT	QuestionMark	_	7	punct	_	_

~~~


