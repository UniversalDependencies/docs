---
layout: base
title:  'Statistics of aux in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="sv_pud-dep-aux-pass.html">aux:pass</a></tt>.

370 nodes (2%) are attached to their parents as `aux`.

368 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95135135135135.

The following 11 pairs of parts of speech are connected with `aux`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (300; 81% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (31; 8% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (19; 5% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (10; 3% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 aux	color:blue
1	Hon	hon	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj:pass	2:nsubj:pass	_
2	åtalas	åtala	VERB	VB|PRS|SFO	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	0:root	_
3	även	även	ADV	AB	_	2	advmod	2:advmod	_
4	för	för	ADP	PP	_	7	mark	7:mark	_
5	att	att	PART	IE	_	7	mark	7:mark	_
6	ha	ha	AUX	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	aux	7:aux	_
7	försökt	försöka	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	2	advcl	2:advcl:att	_
8	mörda	mörda	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	7	xcomp	7:xcomp	_
9	sin	sin	PRON	PS|UTR|SIN|DEF	Definite=Def|Gender=Com|Number=Sing|Poss=Yes	11	nmod:poss	11:nmod:poss	_
10	tvååriga	tvåårig	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	11	amod	11:amod	_
11	dotter	dotter	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obj	8:obj	SpaceAfter=No
12	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 aux	color:blue
1	Röstning	röstning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	nsubj	8:nsubj|12:nsubj	_
2	har	ha	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	8:aux	SpaceAfter=No
3	,	,	PUNCT	MID	_	6	punct	6:punct	_
4	i	i	ADP	PP	_	6	case	6:case	_
5	terrorns	terror	NOUN	NN|UTR|SIN|DEF|GEN	Case=Gen|Definite=Def|Gender=Com|Number=Sing	6	nmod:poss	6:nmod:poss	_
6	jargong	jargong	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	8	obl	8:obl:i	SpaceAfter=No
7	,	,	PUNCT	MID	_	6	punct	6:punct	_
8	blivit	bliva	VERB	VB|SUP|AKT	VerbForm=Sup|Voice=Act	0	root	0:root	_
9	det	den	DET	DT|NEU|SIN|DEF	Definite=Def|Gender=Neut|Number=Sing	12	det	12:det	_
10	nya	ny	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	12	amod	12:amod	_
11	mjuka	mjuk	ADJ	JJ|POS|UTR/NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Degree=Pos|Number=Sing	12	amod	12:amod	_
12	målet	mål	NOUN	NN|NEU|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	8	xcomp	8:xcomp	SpaceAfter=No
13	.	.	PUNCT	MAD	_	8	punct	8:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 aux	color:blue
1	Inte	inte	PART	AB	Polarity=Neg	2	advmod	2:advmod	_
2	alla	all	DET	DT|UTR/NEU|PLU|IND/DEF	Number=Plur	3	det	3:det	_
3	omvandlingar	omvandling	NOUN	NN|UTR|PLU|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	8	nsubj	8:nsubj	_
4	i	i	ADP	PP	_	5	case	5:case	_
5	regionen	region	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	3	nmod	3:nmod:i	_
6	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	8:aux	_
7	varit	vara	AUX	VB|SUP|AKT	VerbForm=Sup|Voice=Act	8	cop	8:cop	_
8	framgångsrika	framgångsrik	ADJ	JJ|POS|UTR/NEU|PLU|IND/DEF|NOM	Case=Nom|Degree=Pos|Number=Plur	0	root	0:root	SpaceAfter=No
9	.	.	PUNCT	MAD	_	8	punct	8:punct	_

~~~


