---
layout: base
title:  'Statistics of nummod:periph in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nummod:periph`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nummod.html">nummod</a></tt>.
There are also 2 other language-specific subtypes of `nummod`: <tt><a href="pcm_nsc-dep-nummod-det.html">nummod:det</a></tt>, <tt><a href="pcm_nsc-dep-nummod-mod.html">nummod:mod</a></tt>.

6 nodes (0%) are attached to their parents as `nummod:periph`.

6 instances of `nummod:periph` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.83333333333333.

The following 3 pairs of parts of speech are connected with `nummod:periph`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (3; 50% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (2; 33% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 17% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 2 nummod:periph	color:blue
1	#	#	X	_	_	6	dep	_	AlignBegin=228112|AlignEnd=228380|Gloss=PUNCT
2	twenty	twenty	NUM	_	NumType=Card	6	nummod:periph	_	AlignBegin=228380|AlignEnd=228690|Gloss=twenty.CARD
3	nineteen	nineteen	NUM	_	NumType=Card	2	flat	_	AlignBegin=228690|AlignEnd=228943|Gloss=nineteen.CARD
4	na	na	AUX	_	PartType=Cop	6	cop	_	AlignBegin=228943|AlignEnd=229080|Gloss=be
5	ehn	ehn	INTJ	_	_	6	discourse	_	AlignBegin=229110|AlignEnd=229332|Gloss=ehn
6	prediction	prediction	NOUN	_	_	0	root	_	AlignBegin=229362|AlignEnd=229870|Gloss=prediction
7	//	//	X	_	_	6	dep	_	AlignBegin=229870|AlignEnd=229900|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 2 nummod:periph	color:blue
1	#	#	X	_	_	8	dep	_	AlignBegin=23770|AlignEnd=24121|Gloss=PUNCT
2	twenty	twenty	NUM	_	NumType=Card	8	nummod:periph	_	AlignBegin=24121|AlignEnd=24411|Gloss=twenty.CARD
3	fifth	fifth	ADJ	_	NumType=Ord	2	flat	_	AlignBegin=24411|AlignEnd=24800|Gloss=fifth.ORD
4	<	<	X	_	_	2	dep	_	AlignBegin=24800|AlignEnd=24830|Gloss=PUNCT
5	#	#	X	_	_	2	dep	_	AlignBegin=24830|AlignEnd=25036|Gloss=PUNCT
6	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=25036|AlignEnd=25188|Gloss=NOM.PL.1
7	go	go	AUX	_	Aspect=Prosp	8	aux	_	AlignBegin=25188|AlignEnd=25391|Gloss=PROSP
8	cook	cook	VERB	_	_	0	root	_	AlignBegin=25391|AlignEnd=25631|Gloss=cook
9	//	//	X	_	_	8	dep	_	AlignBegin=25631|AlignEnd=25661|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 1 nummod:periph	color:blue
1	two	two	NUM	_	NumType=Card	5	nummod:periph	_	AlignBegin=279040|AlignEnd=279298|Gloss=two.CARD
2	a.m.	a.m.	ADV	_	_	1	advmod	_	AlignBegin=279298|AlignEnd=279556|Gloss=ante_meridiem
3	<	<	X	_	_	1	dep	_	AlignBegin=279556|AlignEnd=279556|Gloss=PUNCT
4	na	na	AUX	_	PartType=Cop	5	cop	_	AlignBegin=279556|AlignEnd=279814|Gloss=be1
5	so	so	ADV	_	_	0	root	_	AlignBegin=279814|AlignEnd=280072|Gloss=so
6	>+	>+	X	_	_	10	dep	_	AlignBegin=280072|AlignEnd=280072|Gloss=PUNCT
7	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	AlignBegin=280072|AlignEnd=280330|Gloss=NOM.SG.1
8	go	go	AUX	_	Aspect=Prosp	10	aux	_	AlignBegin=280330|AlignEnd=280588|Gloss=PROSP
9	just	just	ADV	_	_	10	advmod	_	AlignBegin=280588|AlignEnd=280846|Gloss=just
10	wake	wake	VERB	_	_	5	advcl:cleft	_	AlignBegin=280846|AlignEnd=281104|Gloss=wake
11	up	up	ADP	_	_	10	compound:prt	_	AlignBegin=281104|AlignEnd=281362|Gloss=up
12	{	{	X	_	_	14	dep	_	AlignBegin=281362|AlignEnd=281362|Gloss=PUNCT
13	dey	dey	AUX	_	Aspect=Imp	14	aux	_	AlignBegin=281362|AlignEnd=281620|Gloss=IPFV
14	tink	tink	VERB	_	_	10	advcl	_	AlignBegin=281620|AlignEnd=281878|Gloss=think
15	|c	|c	X	_	_	17	dep	_	AlignBegin=281878|AlignEnd=281878|Gloss=PUNCT
16	dey	dey	AUX	_	Aspect=Imp	17	aux	_	AlignBegin=281878|AlignEnd=282136|Gloss=IPFV
17	scan	scan	VERB	_	_	14	conj	_	AlignBegin=282136|AlignEnd=282393|Gloss=scan
18	{	{	X	_	_	19	dep	_	AlignBegin=282393|AlignEnd=282393|Gloss=PUNCT
19	wetin	wetin	PRON	_	PronType=Int	17	obj	_	AlignBegin=282393|AlignEnd=282651|Gloss=what.Q
20	||	||	X	_	_	21	dep	_	AlignBegin=282651|AlignEnd=282651|Gloss=PUNCT
21	wetin	wetin	PRON	_	PronType=Int	19	reparandum	_	AlignBegin=282651|AlignEnd=282909|Gloss=what.Q
22	}	}	X	_	_	19	dep	_	AlignBegin=282909|AlignEnd=282909|Gloss=PUNCT
23	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	25	nsubj	_	AlignBegin=282909|AlignEnd=283167|Gloss=NOM.SG.1
24	never	never	AUX	_	Aspect=Perf|Polarity=Neg	25	aux	_	AlignBegin=283167|AlignEnd=283425|Gloss=PRF.NEG
25	set	set	VERB	_	_	21	acl:relcl	_	AlignBegin=283425|AlignEnd=283683|Gloss=set
26	on	on	ADP	_	_	27	case	_	AlignBegin=283683|AlignEnd=283941|Gloss=on
27	ground	ground	NOUN	_	_	25	obl:arg	_	AlignBegin=283941|AlignEnd=284199|Gloss=ground
28	//=	//=	X	_	_	29	dep	_	AlignBegin=284199|AlignEnd=284199|Gloss=PUNCT
29	wetin	wetin	PRON	_	PronType=Int	21	parataxis:conj	_	AlignBegin=284199|AlignEnd=284457|Gloss=what.Q
30	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	32	nsubj	_	AlignBegin=284457|AlignEnd=284715|Gloss=NOM.SG.1
31	never	never	AUX	_	Aspect=Perf|Polarity=Neg	32	aux	_	AlignBegin=284715|AlignEnd=284973|Gloss=PRF.NEG
32	set	set	VERB	_	_	29	acl:relcl	_	AlignBegin=284973|AlignEnd=285231|Gloss=set
33	on	on	ADP	_	_	32	dep:comp	_	AlignBegin=285231|AlignEnd=285489|Gloss=on
34	&//	&//	X	_	_	5	dep	_	AlignBegin=285489|AlignEnd=285489|Gloss=PUNCT

~~~


