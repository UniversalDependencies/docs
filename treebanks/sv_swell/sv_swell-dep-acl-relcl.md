---
layout: base
title:  'Statistics of acl:relcl in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="sv_swell-dep-acl-cleft.html">acl:cleft</a></tt>.

107 nodes (1%) are attached to their parents as `acl:relcl`.

107 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.31775700934579.

The following 10 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (78; 73% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (12; 11% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (4; 4% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (4; 4% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	5	det	_	_
4	bästa	bra	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	5	amod	_	_
5	sak	sak	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
6	vad	vad	PRON	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	9	obj	_	CorrectionLabels=L-W
7	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	9	nsubj	_	_
8	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	uppleva	uppleva	VERB	_	VerbForm=Inf|Voice=Act	5	acl:relcl	_	_
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl:relcl	color:blue
1	Vårt	vi	PRON	_	Definite=Def|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	2	nmod:poss	_	_
2	liv	liv	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	6	nsubj	_	_
3	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	6	aux	_	_
4	vara	vara	AUX	_	VerbForm=Inf|Voice=Act	6	cop	_	_
5	helt	helt	ADV	_	Degree=Pos	6	advmod	_	_
6	annorlunda	annorlunda	ADV	_	_	0	root	_	_
7	än	än	SCONJ	_	_	8	mark	_	_
8	det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	6	obl	_	_
9	som	som	PRON	_	PronType=Rel	10	nsubj	_	_
10	syns	synas	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	8	acl:relcl	_	_
11	på	på	ADP	_	_	13	case	_	_
12	exempelvis	exempelvis	ADV	_	_	13	advmod	_	_
13	facebook	facebook	PROPN	_	Case=Nom|Typo=Yes	10	obl	_	CorrectionLabels=O-Cap
14	.	.	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 acl:relcl	color:blue
1	Det	den	DET	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Art	2	det	_	_
2	första	första	ADJ	_	Case=Nom|NumType=Ord	0	root	_	_
3	i	i	ADP	_	_	5	case	_	_
4	alla	all	DET	_	Number=Plur|PronType=Tot	5	det	_	_
5	fall	fall	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Plur	6	nmod	_	_
6	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	7	nsubj	_	_
7	lägger	lägga	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	acl:relcl	_	_
8	märke	märke	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	7	compound:prt	_	_
9	till	till	ADP	_	_	2	case	_	_
10	när	när	SCONJ	_	_	12	mark	_	_
11	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	12	nsubj	_	_
12	träffar	träffa	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	advcl	_	_
13	en	en	DET	_	Definite=Ind|Gender=Com|Number=Sing|PronType=Art	16	det	_	_
14	annan	annan	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	16	amod	_	CorrectionLabels=S-R
15	ny	ny	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	16	amod	_	_
16	person	person	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	12	obj	_	_
17	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
18	vad	vad	PRON	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	20	obj	_	_
19	den	den	PRON	_	Definite=Def|Gender=Com|Number=Sing|PronType=Prs	20	nsubj	_	_
20	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	csubj	_	_
21	på	på	ADP	_	_	22	case	_	_
22	sig	sig	PRON	_	Case=Acc|Definite=Def|PronType=Prs	20	obl	_	_
23	.	.	PUNCT	_	_	2	punct	_	_

~~~


