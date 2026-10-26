---
layout: base
title:  'Statistics of acl:cleft in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `acl:cleft`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="sv_swell-dep-acl-relcl.html">acl:relcl</a></tt>.

11 nodes (0%) are attached to their parents as `acl:cleft`.

11 instances of `acl:cleft` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.27272727272727.

The following 4 pairs of parts of speech are connected with `acl:cleft`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (7; 64% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (2; 18% instances), <tt><a href="sv_swell-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:cleft	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
3	bästa	bra	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	4	amod	_	_
4	beslut	beslut	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	0	root	_	_
5	jag	jag	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	7	nsubj	_	_
6	har	ha	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	7	aux	_	_
7	tog	ta	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	4	acl:cleft	_	CorrectionLabels=M-Verb
8	att	att	PART	_	_	9	mark	_	_
9	flytta	flytta	VERB	_	VerbForm=Inf|Voice=Act	4	csubj	_	_
10	till	till	ADP	_	_	11	case	_	_
11	Sverige	Sverige	PROPN	_	Case=Nom	9	obl	_	_
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 acl:cleft	color:blue
1	Detta	denna	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	vad	vad	PRON	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	0	root	_	_
4	som	som	PRON	_	PronType=Rel	5	nsubj	_	_
5	gäller	gälla	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:cleft	_	_
6	för	för	ADP	_	_	8	case	_	_
7	min	jag	PRON	_	Definite=Def|Gender=Com|Number=Sing|Poss=Yes|PronType=Prs	8	nmod:poss	_	_
8	del	del	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obl	_	_
9	.	.	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 13 acl:cleft	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	expl	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	därför	därför	ADV	_	_	0	root	_	_
4	familjeförhållandet	familjeförhållande	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	13	nsubj	_	_
5	,	,	PUNCT	_	_	7	punct	_	_
6	social	social	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Gender=Com|Number=Sing	7	amod	_	CorrectionLabels=M-Def
7	livet	liv	NOUN	_	Case=Nom|Definite=Def|Gender=Neut|Number=Sing	4	conj	_	_
8	och	och	CCONJ	_	_	10	cc	_	_
9	även	även	ADV	_	_	10	advmod	_	_
10	fritiden	fritid	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	4	conj	_	_
11	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	13	cop	_	_
12	centrala	central	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur	13	amod	_	_
13	värderingarna	värdering	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur	3	acl:cleft	_	CorrectionLabels=M-Def
14	i	i	ADP	_	_	16	case	_	_
15	mitt	jag	PRON	_	Definite=Def|Gender=Neut|Number=Sing|Poss=Yes|PronType=Prs	16	nmod:poss	_	_
16	hemland	hemland	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	13	obl	_	_
17	,	,	PUNCT	_	_	16	punct	_	_
18	Peru	Peru	PROPN	_	Case=Nom	16	appos	_	_
19	.	.	PUNCT	_	_	13	punct	_	_

~~~


