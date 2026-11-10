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
1	#	#	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=169390|WordAlignmentEnd=178440
2	dis	dis	DET	_	Number=Sing|PronType=Dem	3	det	_	Gloss=SG.DEM|WordAlignmentBegin=178440|WordAlignmentEnd=178645
3	time	time	NOUN	_	_	8	obl:mod	_	Gloss=time|WordAlignmentBegin=178645|WordAlignmentEnd=178860
4	around	around	ADP	_	_	3	dep	_	Gloss=around|WordAlignmentBegin=178860|WordAlignmentEnd=179172
5	<	<	PUNCT	_	_	3	punct	_	Gloss=PUNCT|WordAlignmentBegin=179172|WordAlignmentEnd=179172
6	Nigeria	Nigeria	PROPN	_	_	7	compound	_	Gloss=Nigeria|WordAlignmentBegin=179172|WordAlignmentEnd=179500
7	prophet	prophet	VERB	_	_	8	csubj	_	Gloss=prophet|WordAlignmentBegin=179500|WordAlignmentEnd=179901
8	dey	dey	VERB	_	VerbType=Cop	0	root	_	Gloss=be|WordAlignmentBegin=179901|WordAlignmentEnd=180131
9	too	too	ADV	_	_	10	advmod	_	Gloss=too|WordAlignmentBegin=180131|WordAlignmentEnd=180360
10	hard	hard	ADJ	_	_	8	xcomp	_	Gloss=hard|WordAlignmentBegin=180360|WordAlignmentEnd=180660
11	o	o	PART	_	PartType=Disc	8	advmod	_	Gloss=EMPH|WordAlignmentBegin=180660|WordAlignmentEnd=180880
12	//	//	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=180880|WordAlignmentEnd=180880

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	#	#	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=137100|WordAlignmentEnd=137440
2	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	Gloss=NOM.SG.3|WordAlignmentBegin=137440|WordAlignmentEnd=137505
3	no	no	AUX	_	Polarity=Neg	4	aux	_	Gloss=NEG|WordAlignmentBegin=137505|WordAlignmentEnd=137740
4	good	good	ADJ	_	_	0	root	_	Gloss=good|WordAlignmentBegin=137740|WordAlignmentEnd=137880
5	make	make	AUX	_	Mood=Opt	7	aux	_	Gloss=SBJV|WordAlignmentBegin=137880|WordAlignmentEnd=138020
6	person	person	NOUN	_	_	7	nsubj	_	Gloss=person|WordAlignmentBegin=138020|WordAlignmentEnd=138350
7	dey	dey	VERB	_	VerbType=Cop	4	csubj	_	Gloss=be|WordAlignmentBegin=138350|WordAlignmentEnd=138478
8	idle	idle	ADJ	_	_	7	xcomp	_	Gloss=idle|WordAlignmentBegin=138478|WordAlignmentEnd=138833
9	//	//	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=138833|WordAlignmentEnd=138833

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 csubj	color:blue
1	#	#	PUNCT	_	_	5	punct	_	Gloss=PUNCT|WordAlignmentBegin=273940|WordAlignmentEnd=274960
2	no	no	AUX	_	Polarity=Neg	5	aux	_	Gloss=NEG|WordAlignmentBegin=274960|WordAlignmentEnd=275065
3	be	be	AUX	_	PartType=Cop	5	cop	_	Gloss=be|WordAlignmentBegin=275065|WordAlignmentEnd=275140
4	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	5	nmod:poss	_	Gloss=SG.1.POSS|WordAlignmentBegin=275140|WordAlignmentEnd=275250
5	lifestyle	lifestyle	NOUN	_	_	0	root	_	Gloss=lifestyle|WordAlignmentBegin=275250|WordAlignmentEnd=275710
6	to	to	ADP	_	_	8	mark	_	Gloss=to|WordAlignmentBegin=275710|WordAlignmentEnd=275800
7	dey	dey	AUX	_	Aspect=Imp	8	aux	_	Gloss=IPFV|WordAlignmentBegin=275800|WordAlignmentEnd=276227
8	do	do	VERB	_	_	5	csubj	_	Gloss=do|WordAlignmentBegin=276227|WordAlignmentEnd=276361
9	all	all	DET	_	_	11	det	_	Gloss=all|WordAlignmentBegin=276361|WordAlignmentEnd=276480
10	dose	dose	DET	_	Number=Plur|PronType=Dem	11	det	_	Gloss=PL.DIST.DEM|WordAlignmentBegin=276480|WordAlignmentEnd=276590
11	things	ting	NOUN	_	Number=Plur	8	obj	_	Gloss=thing.PL|WordAlignmentBegin=276590|WordAlignmentEnd=276810
12	|c	|c	PUNCT	_	_	21	punct	_	Gloss=PUNCT|WordAlignmentBegin=276810|WordAlignmentEnd=276810
13	but	but	CCONJ	_	_	21	cc	_	Gloss=but|WordAlignmentBegin=276810|WordAlignmentEnd=277318
14	<	<	PUNCT	_	_	21	punct	_	Gloss=PUNCT|WordAlignmentBegin=277318|WordAlignmentEnd=277318
15	#	#	PUNCT	_	_	21	punct	_	Gloss=PUNCT|WordAlignmentBegin=277318|WordAlignmentEnd=277660
16	all	all	DET	_	_	18	dep	_	Gloss=all|WordAlignmentBegin=277660|WordAlignmentEnd=277860
17	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	18	nmod:poss	_	Gloss=SG.1.POSS|WordAlignmentBegin=277860|WordAlignmentEnd=278030
18	life	life	NOUN	_	_	21	obl:mod	_	Gloss=life|WordAlignmentBegin=278030|WordAlignmentEnd=278340
19	<	<	PUNCT	_	_	18	punct	_	Gloss=PUNCT|WordAlignmentBegin=278340|WordAlignmentEnd=278340
20	na	na	AUX	_	PartType=Cop	21	cop	_	Gloss=be|WordAlignmentBegin=278340|WordAlignmentEnd=278540
21	church	church	NOUN	_	_	5	conj	_	Gloss=church|WordAlignmentBegin=278540|WordAlignmentEnd=278720
22	>+	>+	PUNCT	_	_	26	punct	_	Gloss=PUNCT|WordAlignmentBegin=278720|WordAlignmentEnd=278720
23	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	26	nsubj	_	Gloss=NOM.SG.1|WordAlignmentBegin=278720|WordAlignmentEnd=278800
24	don	don	AUX	_	Aspect=Perf	26	aux	_	Gloss=PRF|WordAlignmentBegin=278800|WordAlignmentEnd=278950
25	dey	dey	AUX	_	Aspect=Imp	26	aux	_	Gloss=IPFV|WordAlignmentBegin=278950|WordAlignmentEnd=279515
26	play	play	VERB	_	_	21	advcl:cleft	_	Gloss=play|WordAlignmentBegin=279515|WordAlignmentEnd=279855
27	//	//	PUNCT	_	_	5	punct	_	Gloss=PUNCT|WordAlignmentBegin=279855|WordAlignmentEnd=279855

~~~


