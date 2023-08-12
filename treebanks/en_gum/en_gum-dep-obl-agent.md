---
layout: base
title:  'Statistics of obl:agent in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>, <tt><a href="en_gum-dep-obl-tmod.html">obl:tmod</a></tt>.

341 nodes (0%) are attached to their parents as `obl:agent`.

341 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.72140762463343.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (238; 70% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (87; 26% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (7; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:agent	color:blue
1	This	this	PRON	DT	Number=Sing|PronType=Dem	3	nsubj:pass	3:nsubj:pass	Discourse=joint-sequence_m:77->76:1|Entity=(49-abstract-giv:act-cf1*-1-ana)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	followed	follow	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
4	by	by	ADP	IN	_	6	case	6:case	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(100-event-new-cf4-2-sgl
6	repetition	repetition	NOUN	NN	Number=Sing	3	obl:agent	3:obl:agent	_
7	of	of	ADP	IN	_	10	case	10:case	_
8	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Entity=(98-abstract-giv:act-cf2-3-coref
9	original	original	ADJ	JJ	Degree=Pos	10	amod	10:amod	_
10	statement	statement	NOUN	NN	Number=Sing	6	nmod	6:nmod:of	Entity=98)
11	by	by	ADP	IN	_	12	case	12:case	_
12	G	G	PROPN	NNP	Number=Sing	6	nmod	6:nmod:by	Entity=(97-person-giv:act-cf3-1-coref)100)|SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:agent	color:blue
1	Uh	uh	INTJ	UH	_	4	discourse	4:discourse	Discourse=causal-cause:22->24:1
2	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj:pass	4:nsubj:pass	Entity=(2-person-giv:act-cf1*-1-ana)
3	was	be	AUX	VBD	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin	4	aux:pass	4:aux:pass	_
4	called	call	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	_
5	by	by	ADP	IN	_	6	case	6:case	_
6	Matthew	Matthew	PROPN	NNP	Number=Sing	4	obl:agent	4:obl:agent	Entity=(3-person-giv:inact-cf2-1-coref
7	here	here	ADV	RB	PronType=Dem	6	advmod	6:advmod	Entity=3)|SpaceAfter=No
8	,	,	PUNCT	,	_	10	punct	10:punct	_
9	to	to	PART	TO	_	10	mark	10:mark	Discourse=purpose-goal:23->22:0
10	do	do	VERB	VB	VerbForm=Inf	4	advcl	4:advcl:to	_
11	the	the	DET	DT	Definite=Def|PronType=Art	12	det	12:det	Entity=(12-abstract-giv:inact-cf3-2-coref
12	job	job	NOUN	NN	Number=Sing	10	obj	10:obj	Entity=12)
13	for	for	ADP	IN	_	14	case	14:case	_
14	him	he	PRON	PRP	Case=Acc|Gender=Masc|Number=Sing|Person=3|PronType=Prs	10	obl	10:obl:for	Entity=(3-person-giv:act-cf2-1-ana)|SpaceAfter=No
15	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Professor	Professor	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj	Discourse=attribution-positive:89->90:0|Entity=(50-person-giv:inact-cf1-1,2-coref-Creswell_Eastman
2	Eastman	Eastman	PROPN	NNP	Number=Sing	1	flat	1:flat	Entity=50)
3	said	say	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
4	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj:pass	6:nsubj:pass	Discourse=evaluation-comment:90->91:4|Entity=(50-person-giv:act-cf1-1-ana-Creswell_Eastman)
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	6:aux:pass	_
6	alarmed	alarm	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	3	ccomp	3:ccomp	_
7	by	by	ADP	IN	_	8	case	8:case	_
8	what	what	PRON	WP	PronType=Rel	6	obl:agent	6:obl:agent	_
9	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	10:nsubj	Entity=(8-person-giv:inact-cf2-1-ana)
10	found	find	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	acl:relcl	8:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


