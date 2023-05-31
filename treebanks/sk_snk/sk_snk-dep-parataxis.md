---
layout: base
title:  'Statistics of parataxis in UD_Slovak-SNK'
udver: '2'
---

## Treebank Statistics: UD_Slovak-SNK: Relations: `parataxis`

This relation is universal.

65 nodes (0%) are attached to their parents as `parataxis`.

42 instances of `parataxis` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.69230769230769.

The following 10 pairs of parts of speech are connected with `parataxis`: <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (43; 66% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (5; 8% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (5; 8% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (4; 6% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (2; 3% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PART.html">PART</a></tt> (2; 3% instances), <tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sk_snk-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sk_snk-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="sk_snk-pos-NUM.html">NUM</a></tt>-<tt><a href="sk_snk-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="sk_snk-pos-VERB.html">VERB</a></tt>-<tt><a href="sk_snk-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 2 parataxis	color:blue
1	“	“	PUNCT	Z	_	7	punct	7:punct	_
2	Vieš	vedieť	VERB	VKesb+	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	parataxis	7:parataxis	SpaceAfter=No
3	,	,	PUNCT	Z	_	2	punct	2:punct	_
4	minulé	minulý	ADJ	AAns4x	Case=Acc|Degree=Pos|Gender=Neut|Number=Sing	5	amod	5:amod	_
5	leto	leto	NOUN	SSns4	Case=Acc|Gender=Neut|Number=Sing	7	obl	7:obl:acc	_
6	som	byť	AUX	VKesa+	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	7:aux	_
7	mal	mať	VERB	VLesam+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
8	fantastický	fantastický	ADJ	AAis4x	Animacy=Inan|Case=Acc|Degree=Pos|Gender=Masc|Number=Sing	9	amod	9:amod	_
9	džob	džob	NOUN	SSis4	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	7	obj	7:obj	SpaceAfter=No
10	.	.	PUNCT	Z	_	7	punct	7:punct	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 7 parataxis	color:blue
1	Jeho	jeho	DET	PUms7	Animacy=Anim|Case=Ins|Gender=Masc|Gender[psor]=Masc,Neut|Number=Sing|Number[psor]=Sing|Person=3|Poss=Yes|PronType=Prs	2	det	2:det	_
2	otcom	otec	NOUN	SSms7	Animacy=Anim|Case=Ins|Gender=Masc|Number=Sing	0	root	0:root	_
3	bol	byť	AUX	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	2	cop	2:cop	_
4	cisár	cisár	NOUN	SSms1	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	5	nmod	5:nmod:nom	_
5	Arkadius	arkadius	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	2	nsubj	2:nsubj	_
6	(	(	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
7	vládol	vládnuť	VERB	VLescm+	Animacy=Anim|Aspect=Imp|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	2	parataxis	2:parataxis	_
8	395	395	NUM	0	NumForm=Digit	7	obl	7:obl	_
9	–	–	PUNCT	Z	_	10	punct	10:punct	_
10	408	408	NUM	0	NumForm=Digit	8	conj	7:obl|8:conj	SpaceAfter=No
11	)	)	PUNCT	Z	_	7	punct	7:punct	SpaceAfter=No
12	,	,	PUNCT	Z	_	13	punct	11.1:punct	_
13	matkou	matka	NOUN	SSfs7	Case=Ins|Gender=Fem|Number=Sing	2	conj	11.1:dep	_
14	Eudoxia	eudoxia	PROPN	SSfs1:r	Case=Nom|Gender=Fem|Number=Sing	13	orphan	11.1:dep	SpaceAfter=No
15	,	,	PUNCT	Z	_	16	punct	16:punct	_
16	dcéra	dcéra	NOUN	SSfs1	Case=Nom|Gender=Fem|Number=Sing	14	appos	14:appos	_
17	magistra	magister	NOUN	SSms2	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	19	nmod	19:nmod:gen	_
18	militum	militum	X	%	Foreign=Yes	17	nmod	17:nmod	_
19	Bautona	bauton	PROPN	SSms2:r	Animacy=Anim|Case=Gen|Gender=Masc|Number=Sing	16	nmod	16:nmod:gen	SpaceAfter=No
20	.	.	PUNCT	Z	_	2	punct	2:punct	_

~~~


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 17 parataxis	color:blue
1	"	"	PUNCT	ZIP	_	2	punct	2:punct	SpaceAfter=No
2	Môže	môcť	VERB	VKesc+	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	8	ccomp	8:ccomp	_
3	to	to	DET	PFns1	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	2:nsubj|4:nsubj	_
4	trvať	trvať	VERB	VIe+	Aspect=Imp|Polarity=Pos|VerbForm=Inf	2	xcomp	2:xcomp	_
5	dlho	dlho	ADV	Dx	Degree=Pos	4	advmod	4:advmod	SpaceAfter=No
6	,	,	PUNCT	ZIP	_	2	punct	2:punct	SpaceAfter=No
7	"	"	PUNCT	ZIP	_	2	punct	2:punct	_
8	odvetil	odvetiť	VERB	VLdscm+	Animacy=Anim|Aspect=Perf|Gender=Masc|Number=Sing|Polarity=Pos|Tense=Past|VerbForm=Part	0	root	0:root	_
9	O	o	X	Q	Hyph=Yes	11	nmod	11:nmod	_
10	'	'	PUNCT	ZIP	_	9	punct	9:punct	SpaceAfter=No
11	Brien	brien	PROPN	SSms1:r	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	8	nsubj	8:nsubj	SpaceAfter=No
12	.	.	PUNCT	ZIP	_	8	punct	8:punct	_
13	"	"	PUNCT	ZIP	_	17	punct	17:punct	SpaceAfter=No
14	Ty	ty	PRON	PPhs1	Case=Nom|Number=Sing|Person=2|PronType=Prs	17	nsubj	17:nsubj	_
15	si	byť	AUX	VKesb+	Aspect=Imp|Mood=Ind|Number=Sing|Person=2|Polarity=Pos|Tense=Pres|VerbForm=Fin	17	cop	17:cop	_
16	ťažký	ťažký	ADJ	AAis1x	Animacy=Inan|Case=Nom|Degree=Pos|Gender=Masc|Number=Sing	17	amod	17:amod	_
17	prípad	prípad	NOUN	SSis1	Animacy=Inan|Case=Nom|Gender=Masc|Number=Sing	8	parataxis	8:parataxis	SpaceAfter=No
18	.	.	PUNCT	ZIP	_	8	punct	8:punct	_

~~~


