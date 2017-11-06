---
layout: base
title:  'Statistics of csubj in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="sv_lines-dep-csubj-pass.html">csubj:pass</a></tt>.

189 nodes (0%) are attached to their parents as `csubj`.

145 instances of `csubj` (77%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.08465608465608.

The following 12 pairs of parts of speech are connected with `csubj`: <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (72; 38% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (54; 29% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (37; 20% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (10; 5% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="sv_lines-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 csubj	color:blue
1	Att	att	PART	_	_	2	mark	_	_
2	hitta	hitta	VERB	INF-ACT	VerbForm=Inf|Voice=Act	5	csubj	_	_
3	bolagets	bolag	NOUN	SG-DEF-GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Sing	4	nmod:poss	_	_
4	lokaler	lokal	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	2	obj	_	_
5	vållade	vålla	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
6	mig	jag	PRON	PERS-P1SG-ACC	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	5	iobj	_	_
7	ingen	ingen	DET	NEG-SG-IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Neg	8	det	_	_
8	svårighet	svårighet	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obj	_	SpaceAfter=No
9	.	.	PUNCT	Period	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	Så	så	ADV	_	_	2	advmod	_	_
2	roligt	rolig	ADJ	POS-SG-IND	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	0	root	_	_
3	att	att	PART	_	_	4	mark	_	_
4	träffas	träffas	VERB	INF-PASS	VerbForm=Inf|Voice=Pass	2	csubj	_	SpaceAfter=No
5	,	,	PUNCT	Comma	_	2	punct	_	_
6	Ron	Ron	PROPN	SG-NOM	Case=Nom	8	nsubj	_	_
7	har	ha	AUX	PRES-AUX	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
8	berättat	berätta	VERB	SUP-ACT	VerbForm=Sup|Voice=Act	2	parataxis	_	_
9	så	så	ADV	_	_	10	advmod	_	_
10	mycket	mycket	PRON	IND-SG	Definite=Ind|Gender=Neut|Number=Sing|PronType=Ind	8	obl	_	_
11	om	om	ADP	_	_	8	obl	_	SpaceAfter=No
12	"	"	PUNCT	Quote	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj	color:blue
1	Faktum	faktum	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
2	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	att	att	SCONJ	_	_	8	mark	_	_
4	jag	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	8	nsubj	_	_
5	till	till	ADV	_	_	8	advmod	_	_
6	och	och	CCONJ	_	_	5	fixed	_	_
7	med	med	ADV	_	Case=Nom	5	fixed	_	_
8	undrade	undra	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	1	csubj	_	_
9	över	över	ADP	_	_	12	case	_	_
10	vart	vart	ADV	WH	_	12	advmod	_	_
11	ni	ni	PRON	PERS-P2PL-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	12	nsubj	_	_
12	tagit	ta	VERB	SUP-ACT	VerbForm=Sup|Voice=Act	8	ccomp	_	_
13	vägen	väg	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	12	obj	_	SpaceAfter=No
14	.	.	PUNCT	Period	_	1	punct	_	_

~~~


