---
layout: base
title:  'Statistics of nmod:appos in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nmod:appos`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nmod.html">nmod</a></tt>.
There are also 3 other language-specific subtypes of `nmod`: <tt><a href="pcm_nsc-dep-nmod-emph.html">nmod:emph</a></tt>, <tt><a href="pcm_nsc-dep-nmod-periph.html">nmod:periph</a></tt>, <tt><a href="pcm_nsc-dep-nmod-poss.html">nmod:poss</a></tt>.

45 nodes (0%) are attached to their parents as `nmod:appos`.

45 instances of `nmod:appos` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.06666666666667.

The following 8 pairs of parts of speech are connected with `nmod:appos`: <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (19; 42% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (9; 20% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (5; 11% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (5; 11% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (3; 7% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (2; 4% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 nmod:appos	color:blue
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=34370|AlignEnd=34546|Gloss=NOM.SG.1
2	dey	dey	AUX	_	Aspect=Imp	3	aux	_	AlignBegin=34546|AlignEnd=34722|Gloss=IPFV
3	pray	pray	VERB	_	_	0	root	_	AlignBegin=34722|AlignEnd=34898|Gloss=pray
4	[	[	X	_	_	8	dep	_	AlignBegin=34898|AlignEnd=34898|Gloss=PUNCT
5	make	make	AUX	_	Mood=Opt	8	aux	_	AlignBegin=34898|AlignEnd=35074|Gloss=SBJV
6	Baba	baba	NOUN	_	_	8	nsubj	_	AlignBegin=35074|AlignEnd=35250|Gloss=father
7	God	God	PROPN	_	_	6	nmod:appos	_	AlignBegin=35250|AlignEnd=35426|Gloss=God
8	stand	stand	VERB	_	_	3	parataxis	_	AlignBegin=35426|AlignEnd=35602|Gloss=stand
9	by	by	ADP	_	_	10	case	_	AlignBegin=35602|AlignEnd=35778|Gloss=by
10	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	8	obl:arg	_	AlignBegin=35778|AlignEnd=35954|Gloss=ACC.SG.1
11	o	o	PART	_	PartType=Disc	10	advmod:emph	_	AlignBegin=35954|AlignEnd=36130|Gloss=EMPH
12	]	]	X	_	_	8	dep	_	AlignBegin=36130|AlignEnd=36130|Gloss=PUNCT
13	//	//	X	_	_	3	dep	_	AlignBegin=36130|AlignEnd=36130|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 nmod:appos	color:blue
1	#	#	X	_	_	5	dep	_	AlignBegin=65560|AlignEnd=66140|Gloss=PUNCT
2	dat	dat	PRON	_	Number=Sing|PronType=Dem	5	nsubj	_	AlignBegin=66140|AlignEnd=66230|Gloss=SG.DEM
3	na	na	AUX	_	PartType=Cop	5	cop	_	AlignBegin=66230|AlignEnd=66380|Gloss=be
4	to	to	ADP	_	_	5	mark	_	AlignBegin=66380|AlignEnd=66520|Gloss=to
5	show	show	VERB	_	_	0	root	_	AlignBegin=66520|AlignEnd=66780|Gloss=show
6	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	5	obj	_	AlignBegin=66780|AlignEnd=67160|Gloss=ACC.PL.1
7	#	#	X	_	_	9	dep	_	AlignBegin=67160|AlignEnd=67860|Gloss=PUNCT
8	[	[	X	_	_	9	dep	_	AlignBegin=67830|AlignEnd=67860|Gloss=PUNCT
9	wetin	wetin	PRON	_	PronType=Int	5	obj	_	AlignBegin=67860|AlignEnd=68250|Gloss=what.Q
10	Hebrew	Hebrew	PROPN	_	_	13	nsubj	_	AlignBegin=68250|AlignEnd=68440|Gloss=Hebrew
11	four	four	NUM	_	NumType=Card	10	nmod:appos	_	AlignBegin=68440|AlignEnd=68690|Gloss=four.CARD
12	fifteen	fifteen	NUM	_	_	11	flat	_	AlignBegin=68690|AlignEnd=69090|Gloss=fifteen
13	tell	tell	VERB	_	_	9	acl:relcl	_	AlignBegin=69090|AlignEnd=69390|Gloss=tell
14	us	us	PRON	_	Case=Acc|Number=Plur|Person=1|PronType=Prs	13	obj	_	AlignBegin=69390|AlignEnd=69610|Gloss=ACC.PL.1
15	]	]	X	_	_	9	dep	_	AlignBegin=69610|AlignEnd=69640|Gloss=PUNCT
16	//	//	X	_	_	5	dep	_	AlignBegin=69610|AlignEnd=69640|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 nmod:appos	color:blue
1	{	{	X	_	_	3	dep	_	AlignBegin=198535|AlignEnd=198565|Gloss=PUNCT
2	di	di	DET	_	Definite=Def|PronType=Art	3	det	_	AlignBegin=198565|AlignEnd=198715|Gloss=DEF.ART
3	Minister	minister	NOUN	_	_	12	dislocated	_	AlignBegin=198715|AlignEnd=199135|ExtPos=PROPN|Gloss=minister|PhraseType=Title
4	for	for	ADP	_	_	5	case	_	AlignBegin=199135|AlignEnd=199305|Gloss=for|InTitle=Yes
5	Education	education	NOUN	_	_	3	nmod	_	AlignBegin=199305|AlignEnd=199735|Gloss=education|InTitle=Yes
6	|a	|a	X	_	_	7	dep	_	AlignBegin=199735|AlignEnd=199765|Gloss=PUNCT
7	Mr	Mr	NOUN	_	_	3	nmod:appos	_	AlignBegin=199765|AlignEnd=200085|Gloss=Mr
8	Adamu	Adamu	PROPN	_	_	7	flat	_	AlignBegin=200085|AlignEnd=200616|Gloss=Adamu
9	Adamu	Adamu	PROPN	_	_	7	flat	_	AlignBegin=200616|AlignEnd=201104|Gloss=Adamu
10	}	}	X	_	_	3	dep	_	AlignBegin=201104|AlignEnd=201134|Gloss=PUNCT
11	na	na	AUX	_	PartType=Cop	12	cop	_	AlignBegin=201134|AlignEnd=201295|Gloss=be
12	so	so	ADV	_	_	0	root	_	AlignBegin=201295|AlignEnd=201495|Gloss=so
13	>+	>+	X	_	_	15	dep	_	AlignBegin=201495|AlignEnd=201525|Gloss=PUNCT
14	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	15	nsubj	_	AlignBegin=201525|AlignEnd=201675|Gloss=NOM.SG.3
15	polongo	polongo	VERB	_	_	12	advcl:cleft	_	AlignBegin=201675|AlignEnd=202190|Gloss=proclain
16	//	//	X	_	_	12	dep	_	AlignBegin=202190|AlignEnd=202220|Gloss=PUNCT

~~~


