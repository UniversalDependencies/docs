---
layout: base
title:  'Statistics of xcomp in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `xcomp`

This relation is universal.

229 nodes (1%) are attached to their parents as `xcomp`.

227 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.20524017467249.

The following 10 pairs of parts of speech are connected with `xcomp`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (104; 45% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (58; 25% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (49; 21% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-ADV.html">ADV</a></tt> (7; 3% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 xcomp	color:blue
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
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 11 xcomp	color:blue
1	Jag	jag	PRON	PN|UTR|SIN|DEF|SUB	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	2:nsubj	_
2	tar	ta	VERB	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	0:root	_
3	inte	inte	PART	AB	Polarity=Neg	2	advmod	2:advmod	_
4	lätt	lätt	ADV	AB|POS	Degree=Pos	2	advmod	2:advmod	_
5	på	på	ADP	PP	_	7	mark	7:mark	_
6	att	att	PART	IE	_	7	mark	7:mark	_
7	kalla	kalla	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	2	advcl	2:advcl:att	_
8	det	det	PRON	PN|NEU|SIN|DEF|SUB/OBJ	Definite=Def|Gender=Neut|Number=Sing	7	obj	7:obj|11:nsubj	_
9	för	för	ADP	PP	_	11	case	11:case	_
10	en	en	DET	DT|UTR|SIN|IND	Definite=Ind|Gender=Com|Number=Sing	11	det	11:det	_
11	best	best	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	xcomp	7:xcomp	SpaceAfter=No
12	.	.	PUNCT	MAD	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 xcomp	color:blue
1	Vinteruniversiaden	vinteruniversiaden	NOUN	NN|UTR|SIN|DEF|NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	nsubj	4:nsubj	_
2	2019	2019	NUM	RG|NOM	Case=Nom	1	nummod	1:nummod	_
3	kommer	komma	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	4:aux	_
4	ha	ha	VERB	VB|INF|AKT	VerbForm=Inf|Voice=Act	0	root	0:root	_
5	Krasnoyarsk	Krasnoyarsk	PROPN	PM|SIN|NOM	Case=Nom|Number=Sing	4	obj	4:obj|7:nsubj	_
6	som	som	SCONJ	KN	_	7	mark	7:mark	_
7	värd	värd	ADJ	JJ|POS|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	4	xcomp	4:xcomp	SpaceAfter=No
8	.	.	PUNCT	MAD	_	4	punct	4:punct	_

~~~


