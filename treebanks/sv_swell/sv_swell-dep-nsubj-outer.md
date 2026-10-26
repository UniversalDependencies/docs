---
layout: base
title:  'Statistics of nsubj:outer in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sv_swell-dep-nsubj-pass.html">nsubj:pass</a></tt>.

9 nodes (0%) are attached to their parents as `nsubj:outer`.

9 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 7.77777777777778.

The following 4 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (6; 67% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 11% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 11% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 11% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 2 nsubj:outer	color:blue
1	En	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	2	det	_	_
2	lösning	lösning	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	nsubj:outer	_	_
3	till	till	ADP	_	_	4	case	_	CorrectionLabels=L-W
4	detta	denna	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	2	nmod	_	_
5	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
6	vara	vara	AUX	_	VerbForm=Inf|Voice=Act	9	cop	_	_
7	att	att	SCONJ	_	_	9	mark	_	_
8	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	9	nsubj	_	_
9	inför	införa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
10	politik	politik	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	9	obj	_	_
11	som	som	SCONJ	_	_	12	mark	_	_
12	ämne	ämne	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	9	xcomp	_	_
13	tidigt	tidigt	ADV	_	Degree=Pos	9	advmod	_	_
14	i	i	ADP	_	_	15	case	_	_
15	skolan	skola	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	9	obl	_	_
16	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 7 nsubj:outer	color:blue
1	Först	först	ADV	_	_	2	advmod	_	_
2	tycker	tycka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	2	nsubj	_	_
4	att	att	SCONJ	_	_	13	mark	_	_
5	den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	7	det	_	CorrectionLabels=C
6	viktigaste	viktig	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	7	amod	_	_
7	sak	sak	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	13	nsubj:outer	_	CorrectionLabels=S-R
8	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
9	att	att	SCONJ	_	_	13	mark	_	_
10	du	du	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	13	nsubj	_	_
11	måste	måste	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	13	aux	_	CorrectionLabels=L-W
12	vara	vara	AUX	_	VerbForm=Inf|Voice=Act	13	cop	_	_
13	lugn	lugn	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	2	ccomp	_	_
14	,	,	PUNCT	_	_	15	punct	_	_
15	ren	ren	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	13	conj	_	_
16	och	och	CCONJ	_	_	18	cc	_	_
17	att	att	PART	_	_	18	mark	_	CorrectionLabels=S-R
18	klä	klä	VERB	_	VerbForm=Inf|Voice=Act	13	conj	_	_
19	dig	du	PRON	_	Case=Acc|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	18	obj	_	_
20	hel	hel	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	18	xcomp	_	CorrectionLabels=M-Adj/adv
21	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 10 nsubj:outer	color:blue
1	Återigen	återigen	ADV	_	_	3	advmod	_	_
2	,	,	PUNCT	_	_	1	punct	_	CorrectionLabels=P-R
3	tycker	tycka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	3	nsubj	_	_
5	att	att	SCONJ	_	_	9	mark	_	_
6	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	9	dislocated	_	_
7	som	som	PRON	_	PronType=Rel	9	nsubj	_	_
8	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
9	viktigast	viktig	ADJ	_	Case=Nom|Definite=Ind|Degree=Sup	3	ccomp	_	_
10	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	16	nsubj:outer	_	_
11	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	cop	_	_
12	att	att	SCONJ	_	_	16	mark	_	_
13	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	16	nsubj	_	_
14	ska	skola	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	16	aux	_	_
15	vara	vara	AUX	_	VerbForm=Inf|Voice=Act	16	cop	_	_
16	nöjd	nöjd	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing|Tense=Past|VerbForm=Part	3	parataxis	_	_
17	med	med	ADP	_	_	18	case	_	_
18	sig	sig	PRON	_	Case=Acc|Definite=Def|PronType=Prs	16	obl	_	_
19	själv	själv	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	18	acl	_	_
20	och	och	CCONJ	_	_	22	cc	_	_
21	sina	sig	PRON	_	Definite=Def|Number=Plur|Poss=Yes|PronType=Prs	22	nmod:poss	_	_
22	käder	käder	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	18	conj	_	_
23	.	.	PUNCT	_	_	3	punct	_	_

~~~


