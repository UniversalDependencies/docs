---
layout: base
title:  'Statistics of obl:agent in UD_Swedish'
udver: '2'
---

## Treebank Statistics: UD_Swedish: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="sv-dep-obl.html">obl</a></tt>.

181 nodes (0%) are attached to their parents as `obl:agent`.

166 instances of `obl:agent` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.39779005524862.

The following 9 pairs of parts of speech are connected with `obl:agent`: <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (123; 68% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (26; 14% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (9; 5% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-PROPN.html">PROPN</a></tt> (9; 5% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-PRON.html">PRON</a></tt> (5; 3% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-PRON.html">PRON</a></tt> (3; 2% instances), <tt><a href="sv-pos-VERB.html">VERB</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="sv-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="sv-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 obl:agent	color:blue
1	Börjar	börja	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
2	hennes	hon	DET	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes|PronType=Prs	3	nmod:poss	_	_
3	jobb	jobb	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	nsubj	_	_
4	att	att	PART	IE	_	5	mark	_	_
5	delas	dela	VERB	VB|INF|SFO	VerbForm=Inf|Voice=Pass	1	xcomp	_	_
6	av	av	ADP	PP	_	9	case	_	_
7	den	en	DET	DT|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|PronType=Art	9	det	_	_
8	moderne	modern	ADJ	JJ|POS|MAS|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Gender=Masc|Number=Sing	9	amod	_	_
9	mannen	man	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	5	obl:agent	_	SpaceAfter=No
10	?	?	PUNCT	MAD	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 obl:agent	color:blue
1	Han	han	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	anför	anföra	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	en	man	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	8	det	_	_
4	av	av	ADP	PP	_	5	case	_	_
5	regeringen	regering	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl:agent	_	_
6	särskilt	särskilt	ADV	AB	_	7	advmod	_	_
7	utsedd	utse	ADJ	PC|PRF|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	8	amod	_	_
8	innertrio	innertrio	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	SpaceAfter=No
9	.	.	PUNCT	MAD	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:agent	color:blue
1	Äktenskapet	äktenskap	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	5	nsubj	_	_
2	är	vara	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	av	av	ADP	PP	_	4	case	_	_
4	Gud	Gud	PROPN	PM|NOM	Case=Nom	5	obl:agent	_	_
5	stiftat	stifta	ADJ	PC|PRF|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part	0	root	_	_
6	till	till	ADP	PP	_	9	case	_	_
7	'	'	PUNCT	PAD	_	9	punct	_	SpaceAfter=No
8	samhällets	samhälle	NOUN	NN|NEU|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Neut|Number=Sing	9	nmod:poss	_	_
9	bestånd	bestånd	NOUN	NN|NEU|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	5	obl	_	SpaceAfter=No
10	'	'	PUNCT	PAD	_	9	punct	_	SpaceAfter=No
11	.	.	PUNCT	MAD	_	5	punct	_	_

~~~


