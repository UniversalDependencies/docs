---
layout: base
title:  'Statistics of acl in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `acl`

This relation is universal.
There are 2 language-specific subtypes of `acl`: <tt><a href="sv_swell-dep-acl-cleft.html">acl:cleft</a></tt>, <tt><a href="sv_swell-dep-acl-relcl.html">acl:relcl</a></tt>.

67 nodes (1%) are attached to their parents as `acl`.

66 instances of `acl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.74626865671642.

The following 6 pairs of parts of speech are connected with `acl`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (43; 64% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (14; 21% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (6; 9% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (2; 3% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-ADV.html">ADV</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 9 acl	color:blue
1	Demokratin	demokrati	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	2	nsubj	_	_
2	ger	ge	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	alla	all	PRON	_	Definite=Ind|Number=Plur|PronType=Tot	2	iobj	_	_
4	lika	lika	ADV	_	_	5	advmod	_	_
5	god	god	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	6	amod	_	_
6	chans	chans	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	2	obj	_	_
7	att	att	PART	_	_	9	mark	_	_
8	få	få	AUX	_	VerbForm=Inf|Voice=Act	9	aux	_	_
9	vara	vara	VERB	_	VerbForm=Inf|Voice=Act	6	acl	_	_
10	med	med	ADP	_	_	9	compound:prt	_	_
11	och	och	CCONJ	_	_	12	cc	_	_
12	bestämma	bestämma	VERB	_	VerbForm=Inf|Voice=Act	9	conj	_	_
13	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl	color:blue
1	Jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
2	själv	själv	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	1	acl	_	_
3	köpa	köpa	VERB	_	VerbForm=Inf|Voice=Act	0	root	_	CorrectionLabels=M-Verb
4	kläder	kläder	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	obj	_	_
5	nytt	ny	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Neut|Number=Sing	4	amod	_	CorrectionLabels=M-Num;S-WO
6	och	och	CCONJ	_	_	9	cc	_	CorrectionLabels=S-R
7	när	när	SCONJ	_	_	9	mark	_	_
8	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	9	nsubj:pass	_	_
9	behövs	behöva	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	5	conj	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 acl	color:blue
1	Varje	varje	DET	_	Definite=Ind|Number=Sing|PronType=Tot	2	det	_	_
2	person	person	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	3	nsubj	_	_
3	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	ganska	ganska	ADV	_	_	5	advmod	_	_
5	många	många	ADJ	_	Case=Nom|Degree=Pos	6	amod	_	_
6	kläder	kläder	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	obj	_	_
7	beroende	beroende	ADJ	_	Case=Nom|Degree=Pos|Tense=Pres|VerbForm=Part	6	acl	_	_
8	av	av	ADP	_	_	9	case	_	CorrectionLabels=L-W
9	situationen	situation	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	7	obl	_	_
10	.	.	PUNCT	_	_	3	punct	_	_

~~~


