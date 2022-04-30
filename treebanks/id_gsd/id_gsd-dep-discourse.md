---
layout: base
title:  'Statistics of discourse in UD_Indonesian-GSD'
udver: '2'
---

## Treebank Statistics: UD_Indonesian-GSD: Relations: `discourse`

This relation is universal.

8 nodes (0%) are attached to their parents as `discourse`.

8 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 7 pairs of parts of speech are connected with `discourse`: <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-INTJ.html">INTJ</a></tt> (2; 25% instances), <tt><a href="id_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="id_gsd-pos-INTJ.html">INTJ</a></tt> (1; 13% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 13% instances), <tt><a href="id_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="id_gsd-pos-X.html">X</a></tt> (1; 13% instances), <tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt>-<tt><a href="id_gsd-pos-INTJ.html">INTJ</a></tt> (1; 13% instances), <tt><a href="id_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="id_gsd-pos-PROPN.html">PROPN</a></tt> (1; 13% instances), <tt><a href="id_gsd-pos-X.html">X</a></tt>-<tt><a href="id_gsd-pos-INTJ.html">INTJ</a></tt> (1; 13% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	Sayang	sayang	INTJ	NSD	_	4	discourse	_	SpaceAfter=No|MorphInd=^sayang<n>_NSD$
2	,	,	PUNCT	Z--	_	1	punct	_	MorphInd=^,<z>_Z--$
3	dia	dia	PRON	B--	Number=Sing|Person=3|PronType=Prs	4	nsubj	_	MorphInd=^dia<b>_B--$
4	bertanya	tanya	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	SpaceAfter=No|MorphInd=^ber+tanya<v>_VSA$
5	,	,	PUNCT	Z--	_	6	punct	_	MorphInd=^,<z>_Z--$
6	apa	apa	PRON	W--	PronType=Int	4	advcl	_	MorphInd=^apa<w>_W--$
7	kabar	kabar	NOUN	NSD	Number=Sing	6	compound	_	MorphInd=^kabar<n>_NSD$
8	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	7	nmod:poss	_	MorphInd=^dia<p>_PS3$
9	dengan	dengan	ADP	R--	_	10	case	_	MorphInd=^dengan<r>_R--$
10	isteri	isteri	NOUN	NSD	Number=Sing	6	nmod	_	MorphInd=^isteri<n>_NSD$
11	mu	kamu	PRON	PS2	Number=Sing|Person=2|Polite=Infm|PronType=Prs	10	nmod:poss	_	MorphInd=^kamu<p>_PS2$
12	yang	yang	PRON	S--	PronType=Rel	13	nsubj	_	MorphInd=^yang<s>_S--$
13	berkulit	kulit	VERB	VSA	Mood=Ind|Voice=Act	10	acl:relcl	_	MorphInd=^ber+kulit<n>_VSA$
14	sawo	sawo	NOUN	X--	_	13	obj	_	MorphInd=^sawo<x>_X--$
15	matang	matang	ADJ	ASP	_	14	amod	_	SpaceAfter=No|MorphInd=^matang<a>_ASP$
16	?	?	PUNCT	Z--	_	6	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	Iye	iye	X	X--	Foreign=Yes	4	nmod	_	SpaceAfter=No|MorphInd=^iye<x>_X--$
2	,	,	PUNCT	_	_	1	punct	_	_
3	wah	wah	INTJ	I--	_	4	discourse	_	MorphInd=^wah<i>_I--$
4	foto	foto	NOUN	NSD	Number=Sing	10	obl	_	MorphInd=^foto<n>_NSD$
5	kopian-	kopi	NOUN	NSD	Number=Sing	4	nmod	_	MorphInd=^kopi<n>+an_NSD$
6	ku	aku	PRON	PS1	Number=Sing|Person=1|Polite=Infm|PronType=Prs	5	nmod:poss	_	MorphInd=^aku<p>_PS1$
7	,	,	PUNCT	Z--	_	4	punct	_	MorphInd=^(<z>_Z--$
8	mau	mau	AUX	D--	_	10	aux	_	MorphInd=^mau<d>_D--$
9	kalian	kalian	PRON	PP2	Number=Plur|Person=2|Polite=Infm|PronType=Prs	10	nsubj	_	MorphInd=^kalian<p>_PP2$
10	lihat	lihat	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	MorphInd=^lihat<v>_VSA$
11	saya	saya	PRON	PS1	Number=Sing|Person=1|Polite=Form|PronType=Prs	10	obj	_	SpaceAfter=No|MorphInd=^saya<p>_PS1$
12	?	?	PUNCT	Z--	_	10	punct	_	MorphInd=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 discourse	color:blue
1	``	``	PUNCT	Z--	_	2	punct	_	SpaceAfter=No|MorphInd=^``<z>_Z--$
2	Wahai	wahai	PROPN	X--	_	6	discourse	_	MorphInd=^wahai<x>_X--$
3	Gajah	gajah	PROPN	F--	_	6	vocative	_	MorphInd=^gajah<f>_F--$
4	Mada	mada	PROPN	F--	_	3	flat:name	_	SpaceAfter=No|MorphInd=^mada<f>_F--$
5	,	,	PUNCT	Z--	_	6	punct	_	MorphInd=^,<z>_Z--$
6	apa	apa	PRON	W--	PronType=Int	0	root	_	MorphInd=^apa<w>_W--$
7	maksud	maksud	NOUN	NSD	Number=Sing	6	acl	_	MorphInd=^maksud<n>_NSD$
8	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	7	nmod:poss	_	MorphInd=^dia<p>_PS3$
9	engkau	engkau	PRON	PS2	Number=Sing|Person=2|Polite=Infm|PronType=Prs	7	nmod:poss	_	MorphInd=^engkau<p>_PS2$
10	bermulut	mulut	VERB	VSA	Mood=Ind|Voice=Act	9	acl	_	MorphInd=^ber+mulut<n>_VSA$
11	besar	besar	ADJ	ASP	_	10	amod	_	MorphInd=^besar<a>_ASP$
12	terhadap	terhadap	ADP	R--	_	13	case	_	MorphInd=^terhadap<r>_R--$
13	kami	kami	PRON	PP1	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	10	obl	_	SpaceAfter=No|MorphInd=^kami<p>_PP1$
14	?	?	PUNCT	Z--	_	6	punct	_	MorphInd=^?<z>_Z--$

~~~


