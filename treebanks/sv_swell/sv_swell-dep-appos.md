---
layout: base
title:  'Statistics of appos in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `appos`

This relation is universal.

23 nodes (0%) are attached to their parents as `appos`.

23 instances of `appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.73913043478261.

The following 9 pairs of parts of speech are connected with `appos`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (8; 35% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (5; 22% instances), <tt><a href="sv_swell-pos-ADP.html">ADP</a></tt>-<tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt> (2; 9% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (2; 9% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (2; 9% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (1; 4% instances), <tt><a href="sv_swell-pos-VERB.html">VERB</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 appos	color:blue
1	Den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	3	det	_	CorrectionLabels=C
2	farligaste	farlig	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	3	amod	_	_
3	brottsligheten	brottslighet	NOUN	_	Case=Nom|Definite=Def|Gender=Com|Number=Sing	0	root	_	CorrectionLabels=L-Der
4	;	;	PUNCT	_	_	5	punct	_	CorrectionLabels=P-W
5	mord	mord	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	3	appos	_	_
6	!	!	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 18 appos	color:blue
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


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 appos	color:blue
1	Från	från	ADP	_	_	0	root	_	_
2	:	:	PUNCT	_	_	3	punct	_	_
3	email@dot.com	email@dot.com	PROPN	_	Case=Nom	1	appos	_	_
4	Till	till	ADP	_	_	1	list	_	_
5	:	:	PUNCT	_	_	6	punct	_	_
6	email@dot.com	email@dot.com	PROPN	_	Case=Nom	4	appos	_	_
7	Subjekt	subjekt	NOUN	_	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing	1	list	_	CorrectionLabels=L-FL
8	:	:	PUNCT	_	_	9	punct	_	_
9	bröllopspresent	bröllopspresent	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	7	appos	_	_
10	.	.	PUNCT	_	_	1	punct	_	_

~~~


