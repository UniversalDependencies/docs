---
layout: base
title:  'Statistics of aux in UD_Afrikaans'
udver: '2'
---

## Treebank Statistics: UD_Afrikaans: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="af-dep-aux-pass.html">aux:pass</a></tt>.

1638 nodes (3%) are attached to their parents as `aux`.

1276 instances of `aux` (78%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.15018315018315.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-AUX.html">AUX</a></tt> (1489; 91% instances), <tt><a href="af-pos-AUX.html">AUX</a></tt>-<tt><a href="af-pos-AUX.html">AUX</a></tt> (110; 7% instances), <tt><a href="af-pos-AUX.html">AUX</a></tt>-<tt><a href="af-pos-VERB.html">VERB</a></tt> (26; 2% instances), <tt><a href="af-pos-VERB.html">VERB</a></tt>-<tt><a href="af-pos-VERB.html">VERB</a></tt> (13; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 aux	color:blue
1	Die	die	DET	LB	Definite=Def|PronType=Art	2	det	_	_
2	agent	agent	NOUN	NSE	Number=Sing	11	nsubj	_	_
3	by	by	ADP	SVS	AdpType=Prep	5	case	_	_
4	die	die	DET	LB	Definite=Def|PronType=Art	5	det	_	_
5	oproepsentrum	oproepsentrum	NOUN	NSE	Number=Sing	2	nmod	_	_
6	sal	sal	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	11	aux	_	_
7	sekere	seker	ADJ	ASA	AdjType=Attr|Case=Nom|Degree=Pos	8	amod	_	_
8	vrae	vraag	NOUN	NSM	Number=Plur	11	obj	_	_
9	aan	aan	ADP	SVS	AdpType=Prep	10	case	_	_
10	jou	jou	PRON	PTEDP	Case=Acc|Number=Sing|Person=2|PronType=Prs	11	obl	_	_
11	stel	stel	VERB	VTHOG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	0	root	_	SpaceAfter=No
12	.	.	PUNCT	ZE	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 aux	color:blue
1	Hierdie	hierdie	DET	PA	PronType=Dem	2	det	_	_
2	jaar	jaar	NOUN	NSE	Number=Sing	8	nsubj	_	SpaceAfter=No
3	,	,	PUNCT	ZM	_	4	punct	_	_
4	2010	2010	SYM	RS	_	2	amod	_	SpaceAfter=No
5	,	,	PUNCT	ZM	_	4	punct	_	_
6	sal	sal	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	11	aux	_	_
7	'n	'n	DET	LO	Definite=Ind|PronType=Art	8	det	_	_
8	jaar	jaar	NOUN	NSE	Number=Sing	0	root	_	_
9	van	van	ADP	SVS	AdpType=Prep	10	case	_	_
10	aksie	aksie	NOUN	NSE	Number=Sing	8	nmod	_	_
11	wees	wees	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	8	cop	_	SpaceAfter=No
12	.	.	PUNCT	ZE	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 aux	color:blue
1	Ons	ons	PRON	PEMP	Case=Acc,Nom|Number=Plur|Person=1|PronType=Prs	3	nsubj	_	_
2	is	is	AUX	VTHOK	Tense=Pres|VerbForm=Fin,Inf|VerbType=Cop	3	cop	_	_
3	bly	bly	ADJ	ASP	AdjType=Pred|Case=Nom|Degree=Pos	0	root	_	_
4	dat	dat	SCONJ	KO	_	2	amod	_	_
5	ons	ons	PRON	PEMB	Number=Plur|Person=1|Poss=Yes|PronType=Prs	6	det	_	_
6	reddingspanne	reddingspan	NOUN	NSM	Number=Plur	8	nsubj	_	_
7	hulle	hulle	PRON	PDMP	Case=Acc,Nom|Number=Plur|Person=3|PronType=Prs	8	obj	_	_
8	kon	kan	AUX	VVUOM	Tense=Past|VerbForm=Fin|VerbType=Mod	4	dep	_	_
9	gaan	gaan	AUX	VTUOM	Tense=Pres|VerbForm=Fin,Inf|VerbType=Mod	8	aux	_	_
10	bystaan	bystaan	VERB	VTHSG	Subcat=Tran|Tense=Pres|VerbForm=Fin,Inf	8	aux	_	SpaceAfter=No
11	.	.	PUNCT	ZE	_	8	punct	_	_

~~~


