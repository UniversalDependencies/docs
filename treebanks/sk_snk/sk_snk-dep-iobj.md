---
layout: base
title:  'Statistics of iobj in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `iobj`

This relation is universal.

752 nodes (1%) are attached to their parents as `iobj`.

385 instances of `iobj` (51%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.57313829787234.

The following 7 pairs of parts of speech are connected with `iobj`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (501; 67% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (146; 19% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt> (77; 10% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (18; 2% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (6; 1% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 iobj	color:blue
1	Filónoé	filónoé	PROPN	SUfs1:r	Case=Nom|Gender=Fem|Number=Sing	3	nsubj	3:nsubj	_
2	mu	on	PRON	PFms3	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	3	iobj	3:iobj	_
3	porodila	porodiť	VERB	VLdscf+	Aspect=Perf|Gender=Fem|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
4	tri	tri	NUM	NNnp4	Case=Acc|Gender=Neut|Number=Plur	5	nummod	5:nummod	_
5	deti	dieťa	NOUN	SSnp4	Case=Acc|Gender=Neut|Number=Plur	3	obj	3:obj	SpaceAfter=No
6	,	,	PUNCT	Z	_	7	punct	7:punct|9:punct|11:punct	_
7	Isandra	isandrus	PROPN	SSms4:r	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	5	appos	5:appos	SpaceAfter=No
8	,	,	PUNCT	Z	_	9	punct	9:punct	_
9	Hippolocha	hippolochos	PROPN	SSms4:r	Animacy=Anim|Case=Acc|Gender=Masc|Number=Sing	7	conj	5:appos|7:conj	_
10	a	a	CCONJ	O	_	11	cc	11:cc	_
11	Laodameiu	laodameia	PROPN	SSfs4:r	Case=Acc|Gender=Fem|Number=Sing	7	conj	5:appos|7:conj	SpaceAfter=No
12	.	.	PUNCT	Z	_	3	punct	3:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 iobj	color:blue
1	Prorok	prorok	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	sprostredkováva	sprostredkovávať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	Božie	boží	ADJ	AAns4x:r	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	4	amod	4:amod	_
4	slovo	slovo	NOUN	SSns4	Case=Acc|Gender=Neut|Number=Sing	2	obj	2:obj	_
5	a	a	CCONJ	O	_	7	cc	7:cc	_
6	jeho	jeho	DET	PUfs4	Case=Acc|Gender=Fem|Gender[psor]=Masc,Neut|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	7	det	7:det	_
7	vôľu	vôľa	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	4	conj	2:obj|4:conj	_
8	ľuďom	človek	NOUN	SSmp3	Animacy=Anim|Case=Dat|Gender=Masc|Number=Plur	2	iobj	2:iobj	SpaceAfter=No
9	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 iobj	color:blue
1	Prednáša	prednášať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	_
2	Bohu	boh	PROPN	SSms3:r	Animacy=Anim|Case=Dat|Gender=Masc|Number=Sing	1	iobj	1:iobj	_
3	prosby	prosba	NOUN	SSfp4	Case=Acc|Gender=Fem|Number=Plur	1	obj	1:obj	_
4	ľudí	človek	NOUN	SSmp2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Plur	3	nmod	3:nmod	_
5	a	a	CCONJ	O	_	6	cc	6:cc	_
6	prihovárá	prihovárať	VERB	VKesc+:q	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|Typo=Yes|VerbForm=Fin	1	conj	0:root|1:conj	_
7	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	6	expl:pv	6:expl:pv	_
8	za	za	ADP	Eu4	AdpType=Prep|Case=Acc	9	case	9:case	_
9	ne	ona	PRON	PFfp4	Case=Acc|Gender=Fem|Number=Plur|Person=3|PronType=Prs	6	obl:arg	6:obl:arg	SpaceAfter=No
10	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


