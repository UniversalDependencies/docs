---
layout: base
title:  'Statistics of obl:agent in UD_English-GUM'
udver: '2'
---

## Treebank Statistics: UD_English-GUM: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="en_gum-dep-obl.html">obl</a></tt>.
There are also 2 other language-specific subtypes of `obl`: <tt><a href="en_gum-dep-obl-npmod.html">obl:npmod</a></tt>, <tt><a href="en_gum-dep-obl-tmod.html">obl:tmod</a></tt>.

377 nodes (0%) are attached to their parents as `obl:agent`.

377 instances of `obl:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.74005305039788.

The following 8 pairs of parts of speech are connected with `obl:agent`: <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NOUN.html">NOUN</a></tt> (267; 71% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PROPN.html">PROPN</a></tt> (92; 24% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-PRON.html">PRON</a></tt> (8; 2% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-DET.html">DET</a></tt> (4; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="en_gum-pos-VERB.html">VERB</a></tt>-<tt><a href="en_gum-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 obl:agent	color:blue
1	This	this	PRON	DT	Number=Sing|PronType=Dem	3	nsubj:pass	3:nsubj:pass	Discourse=joint-sequence_m:77->76:1:lex-altlex-596-597|Entity=(49-abstract-giv:act-cf1*-1-ana)
2	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	3	aux:pass	3:aux:pass	_
3	followed	follow	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	0	root	0:root	MSeg=follow-ed
4	by	by	ADP	IN	_	6	case	6:case	_
5	a	a	DET	DT	Definite=Ind|PronType=Art	6	det	6:det	Entity=(100-event-new-cf4-2-sgl
6	repetition	repetition	NOUN	NN	Number=Sing	3	obl:agent	3:obl:agent	MSeg=re-petition
7	of	of	ADP	IN	_	10	case	10:case	_
8	the	the	DET	DT	Definite=Def|PronType=Art	10	det	10:det	Entity=(98-abstract-giv:act-cf2-3-coref
9	original	original	ADJ	JJ	Degree=Pos	10	amod	10:amod	MSeg=origin-al
10	statement	statement	NOUN	NN	Number=Sing	6	nmod	6:nmod:of	Entity=98)|MSeg=state-ment
11	by	by	ADP	IN	_	12	case	12:case	_
12	G	G	PROPN	NNP	Number=Sing	6	nmod	6:nmod:by	Entity=(97-person-giv:act-cf3-1-coref)100)|SpaceAfter=No
13	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 15 obl:agent	color:blue
1	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	4:nsubj	Discourse=joint-other_m:13->4:4:_|Entity=(12-person-acc:com-cf1-1-ana)
2	’m	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	4	cop	4:cop	_
3	your	your	PRON	PRP$	Case=Gen|Number=Sing|Person=2|Poss=Yes|PronType=Prs	4	nmod:poss	4:nmod:poss	Entity=(12-person-giv:act-cf1-2-coref(13-person-acc:com-cf3-1-ana)
4	host	host	NOUN	NN	Number=Sing	0	root	0:root	Entity=12)
5	as	as	ADP	IN	_	6	case	6:case	_
6	always	always	ADV	RB	_	4	obl	4:obl:as	SpaceAfter=No
7	,	,	PUNCT	,	_	8	punct	8:punct	_
8	Dave	Dave	PROPN	NNP	Number=Sing	4	appos	4:appos	Entity=(12-person-giv:act-cf1-1-appos)|SpaceAfter=No
9	,	,	PUNCT	,	_	13	punct	13:punct	_
10	and	and	CCONJ	CC	_	13	cc	13:cc	Discourse=joint-list_m:14->13:0:dm-and-74
11	I	I	PRON	PRP	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	nsubj:pass	13:nsubj:pass	Entity=(12-person-giv:act-cf1-1-ana)
12	am	be	AUX	VBP	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	13	aux:pass	13:aux:pass	_
13	joined	join	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	4	conj	4:conj:and	MSeg=join-ed
14	by	by	ADP	IN	_	15	case	15:case	_
15	Alex	Alex	PROPN	NNP	Number=Sing	13	obl:agent	13:obl:agent	Entity=(6-person-giv:inact-cf2-1-coref)|SpaceAfter=No
16	.	.	PUNCT	.	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 obl:agent	color:blue
1	Professor	Professor	PROPN	NNP	Number=Sing	3	nsubj	3:nsubj	Discourse=attribution-positive:89->90:0:sem-atsrc-772-773+lex-indwd-774|Entity=(50-person-giv:inact-cf1-1,2-coref-Creswell_Eastman|MSeg=Profess-or
2	Eastman	Eastman	PROPN	NNP	Number=Sing	1	flat	1:flat	Entity=50)
3	said	say	VERB	VBD	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	MSeg=sai-d
4	he	he	PRON	PRP	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nsubj:pass	6:nsubj:pass	Discourse=evaluation-comment:90->91:4:lex-indwd-777|Entity=(50-person-giv:act-cf1-1-ana-Creswell_Eastman)
5	is	be	AUX	VBZ	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	6	aux:pass	6:aux:pass	_
6	alarmed	alarm	VERB	VBN	Tense=Past|VerbForm=Part|Voice=Pass	3	ccomp	3:ccomp	MSeg=alarm-ed
7	by	by	ADP	IN	_	8	case	8:case	_
8	what	what	PRON	WP	PronType=Rel	6	obl:agent	6:obl:agent	_
9	they	they	PRON	PRP	Case=Nom|Number=Plur|Person=3|PronType=Prs	10	nsubj	10:nsubj	Entity=(8-person-giv:inact-cf2-1-ana)
10	found	find	VERB	VBD	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	8	acl:relcl	8:acl:relcl	SpaceAfter=No
11	.	.	PUNCT	.	_	3	punct	3:punct	_

~~~


