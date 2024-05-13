---
layout: base
title:  'Statistics of obl:loc in UD_Danish-DDT'
udver: '2'
---

## Treebank Statistics: UD_Danish-DDT: Relations: `obl:loc`

This relation is a language-specific subtype of <tt><a href="da_ddt-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="da_ddt-dep-obl-tmod.html">obl:tmod</a></tt>.

612 nodes (1%) are attached to their parents as `obl:loc`.

585 instances of `obl:loc` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.02287581699346.

The following 11 pairs of parts of speech are connected with `obl:loc`: <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (548; 90% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt> (28; 5% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADP.html">ADP</a></tt> (18; 3% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (9; 1% instances), <tt><a href="da_ddt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (3; 0% instances), <tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-ADV.html">ADV</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-VERB.html">VERB</a></tt>-<tt><a href="da_ddt-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="da_ddt-pos-X.html">X</a></tt>-<tt><a href="da_ddt-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 obl:loc	color:blue
1	"	"	PUNCT	_	_	2	punct	_	SpaceAfter=No
2	Se	se	VERB	_	Mood=Imp	0	root	_	_
3	lige	lige	ADV	_	_	4	advmod	_	_
4	frem	frem	ADV	_	_	2	obl:loc	_	SpaceAfter=No
5	.	.	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 obl:loc	color:blue
1	Kør	køre	VERB	_	Mood=Imp	11	ccomp	_	_
2	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	3	det	_	_
3	vej	vej	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	1	obl:loc	_	SpaceAfter=No
4	,	,	PUNCT	_	_	3	punct	_	_
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
# visual-style 12 13 obl:loc	color:blue
1	Det	det	PRON	_	Case=Acc|Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	obj	_	_
2	mærkede	mærke	VERB	_	Mood=Ind|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	2	nsubj	_	_
4	straks	straks	ADV	_	_	2	advmod	_	_
5	på	på	ADP	_	AdpType=Prep	6	case	_	_
6	stationen	station	NOUN	_	Definite=Def|Gender=Com|Number=Sing	2	obl	_	_
7	i	i	ADP	_	AdpType=Prep	9	case	_	_
8	den	den	DET	_	Gender=Com|Number=Sing|PronType=Dem	9	det	_	_
9	provinsby	provinsby	NOUN	_	Definite=Ind|Gender=Com|Number=Sing	6	nmod	_	SpaceAfter=No
10	,	,	PUNCT	_	_	9	punct	_	_
11	vi	vi	PRON	_	Case=Nom|Gender=Com|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	_
12	bor	bo	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	advcl	_	_
13	i	i	ADP	_	AdpType=Prep	12	obl:loc	_	SpaceAfter=No
14	.	.	PUNCT	_	_	2	punct	_	_

~~~


