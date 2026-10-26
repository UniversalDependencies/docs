---
layout: base
title:  'Statistics of xcomp in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `xcomp`

This relation is universal.

988 nodes (1%) are attached to their parents as `xcomp`.

974 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.72874493927126.

The following 11 pairs of parts of speech are connected with `xcomp`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (898; 91% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (28; 3% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (26; 3% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (19; 2% instances), <tt><a href="sk_snk-pos-ADV.html">ADV</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-DET.html">DET</a></tt> (3; 0% instances), <tt><a href="sk_snk-pos-PART.html">PART</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PART.html">PART</a></tt> (1; 0% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 xcomp	color:blue
1	Väčšina	väčšina	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	4	nsubj	4:nsubj	_
2	zdrojov	zdroj	NOUN	SSip2	Animacy=Inan|Case=Gen|Gender=Masc|Number=Plur	1	nmod	1:nmod:gen	_
3	však	však	PART	T	_	4	advmod	4:advmod	_
4	uvádza	uvádzať	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	0	root	0:root	SpaceAfter=No
5	,	,	PUNCT	ZIP	_	8	punct	8:punct	_
6	že	že	SCONJ	O	_	8	mark	8:mark	_
7	by	by	AUX	Y	Mood=Cnd	8	aux	8:aux	_
8	mal	mať	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	4	ccomp	4:ccomp	_
9	byť	byť	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	8	xcomp	8:xcomp	_
10	v	v	ADP	Eu6	AdpType=Prep|Case=Loc	11	case	11:case	_
11	Šanghaji	šanghaj	PROPN	SSis6:r	Animacy=Inan|Case=Loc|Gender=Masc|Number=Sing	9	obl	9:obl:v:loc	SpaceAfter=No
12	.	.	PUNCT	ZIP	_	4	punct	4:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 xcomp	color:blue
1	Boh	boh	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
2	nemá	mať	VERB	VKesc-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	0	root	0:root	_
3	podobu	podoba	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	2	obj	2:obj	_
4	a	a	CCONJ	O	_	5	cc	5:cc	_
5	nesmie	smieť	VERB	VKesc-	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	2	conj	0:root|2:conj	_
6	byť	byť	AUX	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	7	cop	7:cop	_
7	zobrazovaný	zobrazovaný	ADJ	Gtms1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing|Polarity=Pos|VerbForm=Part|Voice=Pass	5	xcomp	5:xcomp	SpaceAfter=No
8	.	.	PUNCT	ZIP	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 xcomp	color:blue
1	Usadili	usadiť	VERB	VLdpah+	Aspect=Perf|Number=Plur|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
2	sme	byť	AUX	VKepa+	Aspect=Imp|Mood=Ind|Number=Plur|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	1	aux	1:aux	_
3	sa	sa	PRON	R	PronType=Prs|Reflex=Yes	1	expl:pv	1:expl:pv	_
4	pripravení	pripravený	ADJ	AAmp1x	Animacy=Anim|Case=Nom|Degree=Pos|Gender=Masc|Number=Plur	1	advcl:pred	1:advcl:pred	_
5	sledovať	sledovať	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	4	xcomp	4:xcomp	_
6	oblohu	obloha	NOUN	SSfs4	Case=Acc|Gender=Fem|Number=Sing	5	obj	5:obj	SpaceAfter=No
7	.	.	PUNCT	Z	_	1	punct	1:punct	_

~~~


