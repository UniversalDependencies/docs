---
layout: base
title:  'Statistics of aux in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="sv_swell-dep-aux-pass.html">aux:pass</a></tt>.

322 nodes (3%) are attached to their parents as `aux`.

319 instances of `aux` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.62422360248447.

The following 4 pairs of parts of speech are connected with `aux`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (299; 93% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (16; 5% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (6; 2% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Slutligen	slutligen	ADV	_	_	4	advmod	_	_
2	vill	vilja	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	4	nsubj	_	_
4	påpekar	påpeka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	CorrectionLabels=M-Verb
5	att	att	SCONJ	_	_	8	mark	_	_
6	unga	ung	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	8	nsubj	_	_
7	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	läraktiga	läraktig	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	4	ccomp	_	_
9	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 aux	color:blue
1	Lycka	lycka	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	4	nsubj	_	_
2	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
3	vara	vara	AUX	_	VerbForm=Inf|Voice=Act	4	cop	_	_
4	olika	olik	ADJ	_	Case=Nom|Degree=Pos|Number=Plur	0	root	_	_
5	beroende	beroende	ADJ	_	Case=Nom|Degree=Pos|Tense=Pres|VerbForm=Part	4	advcl	_	_
6	i	i	ADP	_	_	8	case	_	CorrectionLabels=L-W
7	vilken	vilken	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Int	8	det	_	_
8	kultur	kultur	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	11	obl	_	_
9	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	11	nsubj	_	_
10	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
11	växt	växa	VERB	_	VerbForm=Sup|Voice=Act	5	advcl	_	_
12	upp	upp	ADV	_	_	11	compound:prt	_	_
13	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 aux	color:blue
1	I	i	ADP	_	_	3	case	_	_
2	många	många	ADJ	_	Case=Nom|Degree=Pos	3	amod	_	_
3	år	år	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	11	obl	_	_
4	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	aux	_	_
5	åldersgransen	åldersgräns	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|Typo=Yes	11	nsubj	_	CorrectionLabels=O|SurfaceLemma=åldersgrans
6	för	för	ADP	_	_	8	mark	_	_
7	att	att	PART	_	_	8	mark	_	_
8	rosta	rösta	VERB	_	Typo=Yes|VerbForm=Inf|Voice=Act	5	acl	_	CorrectionLabels=O|SurfaceLemma=rosta
9	varit	vara	AUX	_	VerbForm=Sup|Voice=Act	11	cop	_	_
10	18	18	NUM	_	Case=Nom|NumType=Card	11	nummod	_	_
11	år	år	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	0	root	_	_
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


