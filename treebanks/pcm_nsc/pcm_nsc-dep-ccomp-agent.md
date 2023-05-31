---
layout: base
title:  'Statistics of ccomp:agent in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `ccomp:agent`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `ccomp`: <tt><a href="pcm_nsc-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="pcm_nsc-dep-ccomp-obl.html">ccomp:obl</a></tt>, <tt><a href="pcm_nsc-dep-ccomp-pred.html">ccomp:pred</a></tt>.

12 nodes (0%) are attached to their parents as `ccomp:agent`.

12 instances of `ccomp:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 6 pairs of parts of speech are connected with `ccomp:agent`: <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (4; 33% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 25% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 17% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 8% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (1; 8% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 16 ccomp:agent	color:blue
1	#	#	X	_	_	13	dep	_	AlignBegin=133754|AlignEnd=134270|Gloss=PUNCT
2	but	but	CCONJ	_	_	13	discourse	_	AlignBegin=134270|AlignEnd=134461|Gloss=but
3	when	when	SCONJ	_	PronType=Int	5	mark	_	AlignBegin=134461|AlignEnd=134631|Gloss=when.Q
4	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	5	nsubj	_	AlignBegin=134631|AlignEnd=134850|Gloss=NOM.2
5	calm	calm	VERB	_	_	13	advcl:periph	_	AlignBegin=134850|AlignEnd=135027|Gloss=calm
6	your	your	PRON	_	Number=Plur|Person=2|Poss=Yes	7	nmod:poss	_	AlignBegin=135027|AlignEnd=135203|Gloss=PL.2.POSS
7	hand	hand	NOUN	_	_	5	obj	_	AlignBegin=135203|AlignEnd=135450|Gloss=hand
8	down	down	ADP	_	_	5	compound:prt	_	AlignBegin=135450|AlignEnd=135691|Gloss=down
9	<	<	X	_	_	5	dep	_	AlignBegin=135691|AlignEnd=135721|Gloss=PUNCT
10	#	#	X	_	_	5	dep	_	AlignBegin=135721|AlignEnd=136402|Gloss=PUNCT
11	but	but	CCONJ	_	_	13	discourse	_	AlignBegin=136402|AlignEnd=136556|Gloss=but
12	it's	na	AUX	_	PartType=Cop	13	cop	_	AlignBegin=136556|AlignEnd=136724|Gloss=be
13	better	beta	ADJ	_	Degree=Cmp	0	root	_	AlignBegin=136724|AlignEnd=137037|Gloss=good.CMPR
14	meh	make	AUX	_	Mood=Opt	16	aux	_	AlignBegin=137037|AlignEnd=137163|Gloss=SBJV
15	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	16	nsubj	_	AlignBegin=137163|AlignEnd=137248|Gloss=NOM.2
16	go	go	VERB	_	_	13	ccomp:agent	_	AlignBegin=137248|AlignEnd=137393|Gloss=go
17	learn	learn	VERB	_	_	16	compound:svc	_	AlignBegin=137393|AlignEnd=137563|Gloss=learn
18	work	work	NOUN	_	_	17	obj	_	AlignBegin=137563|AlignEnd=137786|Gloss=work
19	//	//	X	_	_	13	dep	_	AlignBegin=137786|AlignEnd=137816|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 ccomp:agent	color:blue
1	#	#	X	_	_	5	dep	_	AlignBegin=374520|AlignEnd=375260|Gloss=PUNCT
2	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	expl:subj	_	AlignBegin=375260|AlignEnd=375370|Gloss=NOM.SG.3
3	be	bin	AUX	_	Tense=Past	5	aux	_	AlignBegin=375370|AlignEnd=375510|Gloss=PST
4	no	no	PART	_	Polarity=Neg	5	advmod	_	AlignBegin=375510|AlignEnd=375670|Gloss=NEG
5	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=375670|AlignEnd=375870|Gloss=be
6	easy	easy	ADJ	_	_	5	xcomp:pred	_	AlignBegin=375870|AlignEnd=376080|Gloss=easy
7	to	to	ADP	_	_	8	mark	_	AlignBegin=376080|AlignEnd=376373|Gloss=to
8	continue	continue	VERB	_	_	5	ccomp:agent	_	AlignBegin=376373|AlignEnd=376980|Gloss=continue
9	o	o	PART	_	PartType=Disc	8	advmod:emph	_	AlignBegin=376980|AlignEnd=377020|Gloss=EMPH
10	but	but	CCONJ	_	_	5	conj	_	AlignBegin=377050|AlignEnd=377290|Gloss=but
11	God	God	PROPN	_	_	10	orphan	_	AlignBegin=377290|AlignEnd=377480|Gloss=God
12	&//	&//	X	_	_	5	dep	_	AlignBegin=377480|AlignEnd=377510|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp:agent	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=462231|AlignEnd=462800|Gloss=PUNCT
2	so	so	ADV	_	_	4	discourse	_	AlignBegin=462800|AlignEnd=462890|Gloss=so
3	na	na	AUX	_	PartType=Cop	4	cop	_	AlignBegin=462890|AlignEnd=463080|Gloss=be
4	taboo	taboo	NOUN	_	_	0	root	_	AlignBegin=463080|AlignEnd=463530|Gloss=taboo
5	for	for	ADP	_	_	6	case	_	AlignBegin=463530|AlignEnd=463940|Gloss=for
6	woman	woman	NOUN	_	_	4	nmod	_	AlignBegin=463940|AlignEnd=464290|Gloss=woman
7	to	to	ADP	_	_	8	mark	_	AlignBegin=464290|AlignEnd=464470|Gloss=to
8	go	go	VERB	_	_	4	ccomp:agent	_	AlignBegin=464470|AlignEnd=464586|Gloss=go
9	//	//	X	_	_	4	dep	_	AlignBegin=464586|AlignEnd=464616|Gloss=PUNCT

~~~


