---
layout: base
title:  'Statistics of acl:relcl in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sk_snk-dep-acl.html">acl</a></tt>.

721 nodes (1%) are attached to their parents as `acl:relcl`.

716 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.80166435506241.

The following 18 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (539; 75% instances), <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (54; 7% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (53; 7% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (23; 3% instances), <tt><a href="sk_snk-pos-PRON.html">PRON</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (20; 3% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (9; 1% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (3; 0% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-DET.html">DET</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-X.html">X</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Pokúšal	pokúšať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
2	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	1	expl:pv	1:expl:pv	_
3	vytvoriť	vytvoriť	VERB	VId+	Aspect=Perf|Polarity=Pos|VerbForm=Inf	1	xcomp	1:xcomp	_
4	zbierky	zbierka	NOUN	SSfp4	Case=Acc|Gender=Fem|Number=Plur	3	obj	3:obj|8:nsubj	SpaceAfter=No
5	,	,	PUNCT	Z	_	8	punct	8:punct	_
6	ktoré	ktorý	DET	PAfp1	Case=Nom|Gender=Fem|Number=Plur|PronType=Int,Rel	8	nsubj	4:ref	_
7	by	by	AUX	Y	Mood=Cnd	8	aux	8:aux	_
8	zachytávali	zachytávať	VERB	VLepcf+	Aspect=Imp|Gender=Fem|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	4	acl:relcl	4:acl:relcl	_
9	vývoj	vývoj	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	8	obj	8:obj	_
10	ľudstva	ľudstvo	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	9	nmod	9:nmod:gen	SpaceAfter=No
11	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl:relcl	color:blue
1	Židov	žid	PROPN	SSmp4:r	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	7	obj	4:nsubj|7:obj	SpaceAfter=No
2	,	,	PUNCT	Z	_	4	punct	4:punct	_
3	ktorí	ktorý	DET	PAmp1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Plur|PronType=Int,Rel	4	nsubj	1:ref	_
4	podporovali	podporovať	VERB	VLepcm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	1	acl:relcl	1:acl:relcl	_
5	Peržanov	peržan	PROPN	SSmp4:r	Animacy=Anim|Case=Acc|Gender=Masc|Number=Plur	4	obj	4:obj	SpaceAfter=No
6	,	,	PUNCT	Z	_	4	punct	4:punct	_
7	vypovedali	vypovedať	VERB	VLjpcm+	Animacy=Anim|Aspect=Imp,Perf|Gender=Masc|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
8	z	z	ADP	Eu2	AdpType=Prep|Case=Gen	9	case	9:case	_
9	mesta	mesto	NOUN	SSns2	Case=Gen|Gender=Neut|Number=Sing	7	obl	7:obl:z:gen	SpaceAfter=No
10	.	.	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 acl:relcl	color:blue
1	Zaujímavým	zaujímavý	ADJ	AAns7x	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	2	amod	2:amod	_
2	ocenením	ocenenie	NOUN	SSns7	Case=Ins|Gender=Neut|Number=Sing	0	root	0:root	_
3	je	byť	AUX	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	2	cop	2:cop	_
4	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	2:nsubj|8:obj	SpaceAfter=No
5	,	,	PUNCT	Z	_	8	punct	8:punct	_
6	ktoré	ktorý	DET	PAns4	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	8	obj	4:ref	_
7	Bush	bush	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	8:nsubj	_
8	získal	získať	VERB	VLdscm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	4	acl:relcl	4:acl:relcl	_
9	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	10	case	10:case	_
10	roku	rok	NOUN	SSis6	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	8	obl	8:obl:v:loc	_
11	2005	2005	NUM	0	NumForm=Digit	10	nummod	10:nummod	SpaceAfter=No
12	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


