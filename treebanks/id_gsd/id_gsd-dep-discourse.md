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
1	Sayang	sayang	INTJ	NSD	_	4	discourse	_	SpaceAfter=No|Morf=^sayang<n>_NSD$
2	,	,	PUNCT	Z--	_	1	punct	_	Morf=^,<z>_Z--$
3	dia	dia	PRON	B--	Number=Sing|Person=3|PronType=Prs	4	nsubj	_	Morf=^dia<b>_B--$
4	bertanya	tanya	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	SpaceAfter=No|Morf=^ber+tanya<v>_VSA$
5	,	,	PUNCT	Z--	_	6	punct	_	Morf=^,<z>_Z--$
6	apa	apa	PRON	W--	PronType=Int	4	advcl	_	Morf=^apa<w>_W--$
7	kabar	kabar	NOUN	NSD	Number=Sing	6	compound	_	Morf=^kabar<n>_NSD$
8	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	7	nmod:poss	_	Morf=^dia<p>_PS3$
9	dengan	dengan	ADP	R--	_	10	case	_	Morf=^dengan<r>_R--$
10	isteri	isteri	NOUN	NSD	Number=Sing	6	nmod	_	Morf=^isteri<n>_NSD$
11	mu	kamu	PRON	PS2	Number=Sing|Person=2|Polite=Infm|PronType=Prs	10	nmod:poss	_	Morf=^kamu<p>_PS2$
12	yang	yang	PRON	S--	PronType=Rel	13	nsubj	_	Morf=^yang<s>_S--$
13	berkulit	kulit	VERB	VSA	Mood=Ind|Voice=Act	10	acl:relcl	_	Morf=^ber+kulit<n>_VSA$
14	sawo	sawo	NOUN	X--	_	13	obj	_	Morf=^sawo<x>_X--$
15	matang	matang	ADJ	ASP	_	14	amod	_	SpaceAfter=No|Morf=^matang<a>_ASP$
16	?	?	PUNCT	Z--	_	6	punct	_	Morf=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 discourse	color:blue
1	Iye	iye	X	X--	Foreign=Yes	4	nmod	_	SpaceAfter=No|Morf=^iye<x>_X--$
2	,	,	PUNCT	Z--	_	1	punct	_	_
3	wah	wah	INTJ	I--	_	4	discourse	_	Morf=^wah<i>_I--$
4	foto	foto	NOUN	NSD	Number=Sing	10	obl	_	Morf=^foto<n>_NSD$
5	kopian-	kopi	NOUN	NSD	Number=Sing	4	nmod	_	Morf=^kopi<n>+an_NSD$
6	ku	aku	PRON	PS1	Number=Sing|Person=1|Polite=Infm|PronType=Prs	5	nmod:poss	_	Morf=^aku<p>_PS1$
7	,	,	PUNCT	Z--	_	4	punct	_	Morf=^(<z>_Z--$
8	mau	mau	AUX	D--	_	10	aux	_	Morf=^mau<d>_D--$
9	kalian	kalian	PRON	PP2	Number=Plur|Person=2|Polite=Infm|PronType=Prs	10	nsubj	_	Morf=^kalian<p>_PP2$
10	lihat	lihat	VERB	VSA	Mood=Ind|Voice=Act	0	root	_	Morf=^lihat<v>_VSA$
11	saya	saya	PRON	PS1	Number=Sing|Person=1|Polite=Form|PronType=Prs	10	obj	_	SpaceAfter=No|Morf=^saya<p>_PS1$
12	?	?	PUNCT	Z--	_	10	punct	_	Morf=^?<z>_Z--$

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 discourse	color:blue
1	``	``	PUNCT	Z--	_	2	punct	_	SpaceAfter=No|Morf=^``<z>_Z--$
2	Wahai	wahai	PROPN	X--	_	6	discourse	_	Morf=^wahai<x>_X--$
3	Gajah	gajah	PROPN	F--	_	6	vocative	_	Morf=^gajah<f>_F--$
4	Mada	mada	PROPN	F--	_	3	flat:name	_	SpaceAfter=No|Morf=^mada<f>_F--$
5	,	,	PUNCT	Z--	_	6	punct	_	Morf=^,<z>_Z--$
6	apa	apa	PRON	W--	PronType=Int	0	root	_	Morf=^apa<w>_W--$
7	maksud	maksud	NOUN	NSD	Number=Sing	6	acl	_	Morf=^maksud<n>_NSD$
8	nya	dia	PRON	PS3	Number=Sing|Person=3|PronType=Prs	7	nmod:poss	_	Morf=^dia<p>_PS3$
9	engkau	engkau	PRON	PS2	Number=Sing|Person=2|Polite=Infm|PronType=Prs	7	nmod:poss	_	Morf=^engkau<p>_PS2$
10	bermulut	mulut	VERB	VSA	Mood=Ind|Voice=Act	9	acl	_	Morf=^ber+mulut<n>_VSA$
11	besar	besar	ADJ	ASP	_	10	amod	_	Morf=^besar<a>_ASP$
12	terhadap	terhadap	ADP	R--	_	13	case	_	Morf=^terhadap<r>_R--$
13	kami	kami	PRON	PP1	Clusivity=Ex|Number=Plur|Person=1|PronType=Prs	10	obl	_	SpaceAfter=No|Morf=^kami<p>_PP1$
14	?	?	PUNCT	Z--	_	6	punct	_	Morf=^?<z>_Z--$

~~~


