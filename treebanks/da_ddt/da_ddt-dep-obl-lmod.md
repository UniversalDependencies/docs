---
layout: base
title:  'Statistics of obl:lmod in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `obl:lmod`

This relation is a language-specific subtype of <tt><a href="da_ddt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="da_ddt-dep-obl-tmod.html">obl:tmod</a></tt>.

47 nodes (0%) are attached to their parents as `obl:lmod`.

45 instances of `obl:lmod` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.51063829787234.

The following 5 pairs of parts of speech are connected with `obl:lmod`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (29; 62% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (15; 32% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-X.html">X</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:lmod	color:blue
1	Kør	køre	VERB	_	Mood=Imp	11	ccomp	_	_
2	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	3	det	_	_
3	vej	vej	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	1	obl:lmod	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	du	du	PRON	_	Case=Nom|Gender=Com|Number=Sing|Person=2|PronType=Prs	6	nsubj	_	_
6	får	få	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	acl:relcl	_	_
7	besked	besked	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	6	obj	_	_
8	på	på	ADP	_	AdpType=Prep	7	case	_	SpaceAfter=No
9	,	,	PUNCT	_	_	1	punct	_	_
10	"	"	PUNCT	_	_	1	punct	_	SpaceAfter=No
11	lød	lyde	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
12	pistolmandens	pistolmand	NOUN	_	Case=Gen|Definite=Def|Gender=Com|Number=Sing	13	nmod:poss	_	_
13	ordre	ordre	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	11	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 13 obl:lmod	color:blue
1	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	mærkede	mærke	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
4	straks	straks	ADV	_	_	2	advmod	_	_
5	på	på	ADP	_	AdpType=Prep	6	case	_	_
6	stationen	station	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	obl	_	_
7	i	i	ADP	_	AdpType=Prep	9	case	_	_
8	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	9	det	_	_
9	provinsby	provinsby	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	12	punct	_	_
11	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
12	bor	bo	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
13	i	i	ADP	_	AdpType=Prep	12	obl:lmod	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:lmod	color:blue
1	Eller	eller	CCONJ	_	_	3	cc	_	_
2	man	man	PRON	_	Case=Nom|Gender=Com|PronType=Ind	3	nsubj	_	_
3	stiller	stille	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	den	den	PRON	_	Case=Acc|Gender=Com|Number=Sing|Person=3|PronType=Prs	3	obj	_	_
5	allerinderst	indre	ADJ	_	Definite=Def|Degree=Abs	3	obl:lmod	_	SpaceAfter=No
6	.	.	PUNCT	_	_	3	punct	_	_

~~~


