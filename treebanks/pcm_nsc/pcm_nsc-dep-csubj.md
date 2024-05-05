---
layout: base
title:  'Statistics of csubj in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="pcm_nsc-dep-csubj-outer.html">csubj:outer</a></tt>.

61 nodes (0%) are attached to their parents as `csubj`.

42 instances of `csubj` (69%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.55737704918033.

The following 10 pairs of parts of speech are connected with `csubj`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (28; 46% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (19; 31% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (4; 7% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 5% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 csubj	color:blue
1	#	#	X	_	_	8	dep	_	AlignBegin=169390|AlignEnd=178440|Gloss=PUNCT
2	dis	dis	DET	_	Number=Sing|PronType=Dem	3	det	_	AlignBegin=178440|AlignEnd=178645|Gloss=SG.DEM
3	time	time	NOUN	_	_	8	obl:mod	_	AlignBegin=178645|AlignEnd=178860|Gloss=time
4	around	around	ADP	_	_	3	dep	_	AlignBegin=178860|AlignEnd=179172|Gloss=around
5	<	<	X	_	_	3	dep	_	AlignBegin=179172|AlignEnd=179172|Gloss=PUNCT
6	Nigeria	Nigeria	PROPN	_	_	7	compound	_	AlignBegin=179172|AlignEnd=179500|Gloss=Nigeria
7	prophet	prophet	VERB	_	_	8	csubj	_	AlignBegin=179500|AlignEnd=179901|Gloss=prophet
8	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=179901|AlignEnd=180131|Gloss=be
9	too	too	ADV	_	_	10	advmod	_	AlignBegin=180131|AlignEnd=180360|Gloss=too
10	hard	hard	ADJ	_	_	8	xcomp	_	AlignBegin=180360|AlignEnd=180660|Gloss=hard
11	o	o	PART	_	PartType=Disc	8	advmod	_	AlignBegin=180660|AlignEnd=180880|Gloss=EMPH
12	//	//	X	_	_	8	dep	_	AlignBegin=180880|AlignEnd=180880|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=137100|AlignEnd=137440|Gloss=PUNCT
2	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	AlignBegin=137440|AlignEnd=137505|Gloss=NOM.SG.3
3	no	no	AUX	_	Polarity=Neg	4	aux	_	AlignBegin=137505|AlignEnd=137740|Gloss=NEG
4	good	good	ADJ	_	_	0	root	_	AlignBegin=137740|AlignEnd=137880|Gloss=good
5	make	make	AUX	_	Mood=Opt	7	aux	_	AlignBegin=137880|AlignEnd=138020|Gloss=SBJV
6	person	person	NOUN	_	_	7	nsubj	_	AlignBegin=138020|AlignEnd=138350|Gloss=person
7	dey	dey	VERB	_	VerbType=Cop	4	csubj	_	AlignBegin=138350|AlignEnd=138478|Gloss=be
8	idle	idle	ADJ	_	_	7	xcomp	_	AlignBegin=138478|AlignEnd=138833|Gloss=idle
9	//	//	X	_	_	4	dep	_	AlignBegin=138833|AlignEnd=138833|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj	color:blue
1	#	#	X	_	_	5	dep	_	AlignBegin=273940|AlignEnd=274960|Gloss=PUNCT
2	no	no	AUX	_	Polarity=Neg	5	aux	_	AlignBegin=274960|AlignEnd=275065|Gloss=NEG
3	be	be	AUX	_	PartType=Cop	5	cop	_	AlignBegin=275065|AlignEnd=275140|Gloss=be
4	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	AlignBegin=275140|AlignEnd=275250|Gloss=SG.1.POSS
5	lifestyle	lifestyle	NOUN	_	_	0	root	_	AlignBegin=275250|AlignEnd=275710|Gloss=lifestyle
6	to	to	ADP	_	_	8	mark	_	AlignBegin=275710|AlignEnd=275800|Gloss=to
7	dey	dey	AUX	_	Aspect=Imp	8	aux	_	AlignBegin=275800|AlignEnd=276227|Gloss=IPFV
8	do	do	VERB	_	_	5	csubj	_	AlignBegin=276227|AlignEnd=276361|Gloss=do
9	all	all	DET	_	_	11	det	_	AlignBegin=276361|AlignEnd=276480|Gloss=all
10	dose	dose	DET	_	Number=Plur|PronType=Dem	11	det	_	AlignBegin=276480|AlignEnd=276590|Gloss=PL.DIST.DEM
11	things	ting	NOUN	_	Number=Plur	8	obj	_	AlignBegin=276590|AlignEnd=276810|Gloss=thing.PL
12	|c	|c	X	_	_	21	dep	_	AlignBegin=276810|AlignEnd=276810|Gloss=PUNCT
13	but	but	CCONJ	_	_	21	cc	_	AlignBegin=276810|AlignEnd=277318|Gloss=but
14	<	<	X	_	_	21	dep	_	AlignBegin=277318|AlignEnd=277318|Gloss=PUNCT
15	#	#	X	_	_	21	dep	_	AlignBegin=277318|AlignEnd=277660|Gloss=PUNCT
16	all	all	DET	_	_	18	dep	_	AlignBegin=277660|AlignEnd=277860|Gloss=all
17	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	18	nmod:poss	_	AlignBegin=277860|AlignEnd=278030|Gloss=SG.1.POSS
18	life	life	NOUN	_	_	21	obl:mod	_	AlignBegin=278030|AlignEnd=278340|Gloss=life
19	<	<	X	_	_	18	dep	_	AlignBegin=278340|AlignEnd=278340|Gloss=PUNCT
20	na	na	AUX	_	PartType=Cop	21	cop	_	AlignBegin=278340|AlignEnd=278540|Gloss=be
21	church	church	NOUN	_	_	5	conj	_	AlignBegin=278540|AlignEnd=278720|Gloss=church
22	>+	>+	X	_	_	26	dep	_	AlignBegin=278720|AlignEnd=278720|Gloss=PUNCT
23	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	26	nsubj	_	AlignBegin=278720|AlignEnd=278800|Gloss=NOM.SG.1
24	don	don	AUX	_	Aspect=Perf	26	aux	_	AlignBegin=278800|AlignEnd=278950|Gloss=PRF
25	dey	dey	AUX	_	Aspect=Imp	26	aux	_	AlignBegin=278950|AlignEnd=279515|Gloss=IPFV
26	play	play	VERB	_	_	21	advcl:cleft	_	AlignBegin=279515|AlignEnd=279855|Gloss=play
27	//	//	X	_	_	5	dep	_	AlignBegin=279855|AlignEnd=279855|Gloss=PUNCT

~~~


