---
layout: base
title:  'Statistics of csubj in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `csubj`

This relation is universal.

50 nodes (0%) are attached to their parents as `csubj`.

28 instances of `csubj` (56%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.44.

The following 11 pairs of parts of speech are connected with `csubj`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (25; 50% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (13; 26% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (2; 4% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 csubj	color:blue
1	#	#	PUNCT	_	_	8	punct	_	AlignBegin=169390|AlignEnd=178440|Gloss=PUNCT
2	dis	dis	DET	_	Number=Sing|PronType=Dem	3	det	_	AlignBegin=178440|AlignEnd=178645|Gloss=SG.PROX.DEM
3	time	time	NOUN	_	_	8	obl:mod	_	AlignBegin=178645|AlignEnd=178860|Gloss=time
4	around	around	ADP	_	_	3	dep	_	AlignBegin=178860|AlignEnd=179142|Gloss=around
5	<	<	PUNCT	_	_	3	punct	_	AlignBegin=179142|AlignEnd=179172|Gloss=PUNCT
6	Nigeria	Nigeria	PROPN	_	_	7	compound	_	AlignBegin=179172|AlignEnd=179500|Gloss=Nigeria
7	prophet	prophet	VERB	_	_	8	csubj	_	AlignBegin=179500|AlignEnd=179901|Gloss=prophet
8	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=179901|AlignEnd=180131|Gloss=be
9	too	too	ADV	_	_	10	advmod	_	AlignBegin=180131|AlignEnd=180391|Gloss=too
10	hard	hard	ADJ	_	_	8	xcomp	_	AlignBegin=180391|AlignEnd=180660|Gloss=hard
11	o	o	PART	_	PartType=Disc	10	advmod:emph	_	AlignBegin=180660|AlignEnd=180850|Gloss=EMPH
12	//	//	PUNCT	_	_	8	punct	_	AlignBegin=180850|AlignEnd=180880|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 csubj	color:blue
1	#	#	PUNCT	_	_	4	punct	_	AlignBegin=137100|AlignEnd=137440|Gloss=PUNCT
2	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	AlignBegin=137440|AlignEnd=137505|Gloss=NOM.SG.3
3	no	no	PART	_	Polarity=Neg	4	advmod	_	AlignBegin=137505|AlignEnd=137740|Gloss=NEG
4	good	good	ADJ	_	_	0	root	_	AlignBegin=137740|AlignEnd=137880|Gloss=good
5	make	make	AUX	_	Mood=Opt	7	aux	_	AlignBegin=137880|AlignEnd=138020|Gloss=SBJV
6	person	person	NOUN	_	_	7	nsubj	_	AlignBegin=138020|AlignEnd=138350|Gloss=person
7	dey	dey	VERB	_	VerbType=Cop	4	csubj	_	AlignBegin=138350|AlignEnd=138478|Gloss=be
8	idle	idle	ADJ	_	_	7	xcomp	_	AlignBegin=138478|AlignEnd=138803|Gloss=idle
9	//	//	PUNCT	_	_	4	punct	_	AlignBegin=138803|AlignEnd=138833|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 csubj	color:blue
1	#	#	PUNCT	_	_	10	punct	_	AlignBegin=191667|AlignEnd=191878|Gloss=PUNCT
2	but	but	CCONJ	_	_	10	cc	_	AlignBegin=191878|AlignEnd=192040|Gloss=but
3	now	now	ADV	_	_	10	advmod:periph	_	AlignBegin=192040|AlignEnd=192359|Gloss=now
4	<	<	PUNCT	_	_	3	punct	_	AlignBegin=192359|AlignEnd=192389|Gloss=PUNCT
5	#	#	PUNCT	_	_	3	punct	_	AlignBegin=192389|AlignEnd=192519|Gloss=PUNCT
6	even	even	ADV	_	_	8	advmod	_	AlignBegin=192519|AlignEnd=192849|Gloss=even
7	to	to	ADP	_	_	8	mark	_	AlignBegin=192849|AlignEnd=193129|Gloss=to
8	eat	eat	VERB	_	_	10	csubj	_	AlignBegin=193129|AlignEnd=193389|Gloss=eat
9	now	now	ADV	_	_	8	advmod	_	AlignBegin=193389|AlignEnd=193599|Gloss=now
10	na	na	AUX	_	PartType=Cop	0	root	_	AlignBegin=193599|AlignEnd=193970|Gloss=be
11	&//	//	PUNCT	_	_	10	punct	_	AlignBegin=193970|AlignEnd=194000|Gloss=PUNCT

~~~


