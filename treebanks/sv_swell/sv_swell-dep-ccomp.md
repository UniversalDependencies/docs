---
layout: base
title:  'Statistics of ccomp in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `ccomp`

This relation is universal.

175 nodes (2%) are attached to their parents as `ccomp`.

174 instances of `ccomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.89142857142857.

The following 7 pairs of parts of speech are connected with `ccomp`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (107; 61% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (45; 26% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (16; 9% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	2	obj	_	_
2	tycker	tycka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
4	att	att	SCONJ	_	_	7	mark	_	_
5	du	du	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	7	nsubj	_	_
6	ska	skola	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	göra	göra	VERB	_	VerbForm=Inf|Voice=Act	2	ccomp	_	_
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp	color:blue
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
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 ccomp	color:blue
1	Jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
2	tycker	tycka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	att	att	SCONJ	_	_	7	mark	_	_
4	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	7	nsubj	_	_
5	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	cop	_	_
6	bästa	bra	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	7	amod	_	_
7	mat	mat	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	ccomp	_	CorrectionLabels=M-Def
8	.	.	PUNCT	_	_	2	punct	_	_

~~~


