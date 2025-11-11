---
layout: base
title:  'Statistics of cop in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `cop`

This relation is universal.

250 nodes (3%) are attached to their parents as `cop`.

227 instances of `cop` (91%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.972.

The following 7 pairs of parts of speech are connected with `cop`: <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (149; 60% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (77; 31% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (8; 3% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (7; 3% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (7; 3% instances), <tt><a href="sv_swell-pos-NUM.html">NUM</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 cop	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	CorrectionLabels=L-Ref
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	hans	han	PRON	_	Definite=Def|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
4	bästa	bra	ADJ	_	Case=Nom|Definite=Def|Degree=Sup|Number=Plur	5	amod	_	_
5	vänner	vän	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	_	_
6	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 cop	color:blue
1	Jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	växt	växa	VERB	_	VerbForm=Sup|Voice=Act	0	root	_	CorrectionLabels=M-Verb
3	upp	upp	ADV	_	_	2	compound:prt	_	_
4	där	där	ADV	_	_	2	advmod	_	_
5	,	,	PUNCT	_	_	8	punct	_	_
6	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	8	expl	_	_
7	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	8	cop	_	_
8	varför	varför	ADV	_	_	2	parataxis	_	CorrectionLabels=L-W
9	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	10	nsubj	_	_
10	tycke	tycka	VERB	_	Mood=Ind|Tense=Pres|Typo=Yes|VerbForm=Fin|Voice=Act	8	csubj	_	CorrectionLabels=O
11	om	om	ADP	_	_	10	compound:prt	_	_
12	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	10	obj	_	CorrectionLabels=L-Ref
13	!	!	PUNCT	_	_	2	punct	_	_

~~~


