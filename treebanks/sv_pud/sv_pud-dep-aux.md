---
layout: base
title:  'Statistics of aux in UD_Swedish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Swedish-PUD: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="sv_pud-dep-aux-pass.html">aux:pass</a></tt>.

369 nodes (2%) are attached to their parents as `aux`.

367 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.95663956639566.

The following 6 pairs of parts of speech are connected with `aux`: <tt><a href="sv_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (334; 91% instances), <tt><a href="sv_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (19; 5% instances), <tt><a href="sv_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (11; 3% instances), <tt><a href="sv_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-AUX.html">AUX</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (2; 1% instances), <tt><a href="sv_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_pud-pos-AUX.html">AUX</a></tt> (1; 0% instances).


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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 6 aux	color:blue
1	Dess	dess	PRON	PS|UTR/NEU|SIN/PLU|DEF	Definite=Def|Poss=Yes	2	nmod:poss	2:nmod:poss	_
2	ledning	ledning	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	10	nsubj	10:nsubj	SpaceAfter=No
3	,	,	PUNCT	MID	_	4	punct	4:punct	_
4	däremot	däremot	ADV	AB	_	10	advmod	10:advmod	SpaceAfter=No
5	,	,	PUNCT	MID	_	4	punct	4:punct	_
6	har	ha	AUX	VB|PRS|AKT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	10	aux	10:aux	_
7	inte	inte	PART	AB	Polarity=Neg	10	advmod	10:advmod	_
8	varit	vara	AUX	VB|SUP|AKT	VerbForm=Sup|Voice=Act	10	cop	10:cop	_
9	utan	utan	ADP	PP	_	10	case	10:case	_
10	kritik	kritik	NOUN	NN|UTR|SIN|IND|NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	0:root	SpaceAfter=No
11	.	.	PUNCT	MAD	_	10	punct	10:punct	_

~~~


