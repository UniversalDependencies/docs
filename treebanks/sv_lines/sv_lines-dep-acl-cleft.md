---
layout: base
title:  'Statistics of acl:cleft in UD_Swedish-LinES'
udver: '2'
---

## Treebank Statistics: UD_Swedish-LinES: Relations: `acl:cleft`

This relation is a language-specific subtype of <tt><a href="sv_lines-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="sv_lines-dep-acl-relcl.html">acl:relcl</a></tt>.

99 nodes (0%) are attached to their parents as `acl:cleft`.

98 instances of `acl:cleft` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.3030303030303.

The following 14 pairs of parts of speech are connected with `acl:cleft`: <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (34; 34% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (30; 30% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (11; 11% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (8; 8% instances), <tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_lines-pos-VERB.html">VERB</a></tt> (3; 3% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (3; 3% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (2; 2% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (2; 2% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-ADV.html">ADV</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="sv_lines-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_lines-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 9 acl:cleft	color:blue
1	Det	den	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	3	nsubj	_	_
2	var	vara	AUX	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	cop	_	_
3	kvinnor	kvinna	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Comma	_	6	punct	_	_
5	inte	inte	PART	NEG	_	6	advmod	_	_
6	män	man	NOUN	PL-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	conj	_	SpaceAfter=No
7	,	,	PUNCT	Comma	_	6	punct	_	_
8	som	som	PRON	REL	PronType=Rel	9	nsubj	_	_
9	hade	ha	VERB	PAST-ACT	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	3	acl:cleft	_	_
10	makten	makt	NOUN	SG-DEF-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing	9	obj	_	SpaceAfter=No
11	;	;	PUNCT	SemiColon	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 acl:cleft	color:blue
1	Men	men	CCONJ	_	_	4	cc	_	_
2	det	den	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	4	expl	_	_
3	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	det	den	PRON	PERS-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	0	root	_	_
5	jag	jag	PRON	PERS-P1SG-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	6	nsubj	_	_
6	råkar	råka	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:cleft	_	_
7	vara	vara	AUX	INF-ACT	VerbForm=Inf|Voice=Act	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Period	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:cleft	color:blue
1	Hur	hur	ADV	WH	PronType=Int	0	root	_	_
2	är	vara	AUX	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop	_	_
3	det	den	PRON	EX-P3SG	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	1	expl	_	_
4	ni	ni	PRON	PERS-P2PL-NOM	Case=Nom|Definite=Def|Gender=Com|Number=Sing|PronType=Prs	5	nsubj	_	_
5	säger	säga	VERB	PRES-ACT	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:cleft	_	_
6	på	på	ADP	_	_	7	case	_	_
7	engelska	engelska	NOUN	SG-IND-NOM	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	5	obl	_	_
8	–	–	PUNCT	Dash	_	9	punct	_	_
9	good-by	good-by	INTJ	FGN	_	1	parataxis	_	SpaceAfter=No
10	?	?	PUNCT	QuestionMark	_	9	punct	_	_

~~~


