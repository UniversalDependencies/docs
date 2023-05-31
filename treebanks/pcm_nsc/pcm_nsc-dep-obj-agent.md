---
layout: base
title:  'Statistics of obj:agent in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `obj:agent`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-obj.html">obj</a></tt>.
There are also 1 other language-specific subtypes of `obj`: <tt><a href="pcm_nsc-dep-obj-lvc.html">obj:lvc</a></tt>.

14 nodes (0%) are attached to their parents as `obj:agent`.

14 instances of `obj:agent` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.78571428571429.

The following 6 pairs of parts of speech are connected with `obj:agent`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (6; 43% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (4; 29% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 7% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 7% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (1; 7% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 obj:agent	color:blue
1	#	#	PUNCT	_	_	5	punct	_	AlignBegin=139700|AlignEnd=140640|Gloss=PUNCT
2	so	so	SCONJ	_	_	5	discourse	_	AlignBegin=140640|AlignEnd=140710|Gloss=so
3	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	5	expl:subj	_	AlignBegin=140710|AlignEnd=140740|Gloss=NOM.SG.3
4	come	con	AUX	_	Aspect=Cons	5	aux	_	AlignBegin=140740|AlignEnd=140949|Gloss=CONS
5	get	get	VERB	_	_	11	parataxis:dislocated	_	AlignBegin=140949|AlignEnd=141081|Gloss=get
6	one	one	DET	_	Definite=Spec|PronType=Art	7	det	_	AlignBegin=141081|AlignEnd=141223|Gloss=SPEC.ART
7	day	day	NOUN	_	_	5	obj:agent	_	AlignBegin=141223|AlignEnd=141260|Gloss=day
8	<	<	PUNCT	_	_	11	punct	_	AlignBegin=141260|AlignEnd=141290|Gloss=PUNCT
9	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	AlignBegin=141290|AlignEnd=141409|Gloss=NOM.SG.3
10	come	con	AUX	_	Aspect=Cons	11	aux	_	AlignBegin=141409|AlignEnd=141687|Gloss=CONS
11	call	call	VERB	_	_	0	root	_	AlignBegin=141687|AlignEnd=141879|Gloss=call
12	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	11	obj	_	AlignBegin=141879|AlignEnd=142200|Gloss=ACC.SG.1
13	//	//	PUNCT	_	_	11	punct	_	AlignBegin=142200|AlignEnd=142230|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 13 obj:agent	color:blue
1	#	#	PUNCT	_	_	3	punct	_	AlignBegin=252707|AlignEnd=253063|Gloss=PUNCT
2	better	beta	ADJ	_	Degree=Cmp	3	xcomp	_	AlignBegin=253063|AlignEnd=253510|Gloss=good.CMPR
3	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=253510|AlignEnd=253797|Gloss=be
4	#	#	PUNCT	_	_	13	punct	_	AlignBegin=253827|AlignEnd=254210|Gloss=PUNCT
5	if	if	SCONJ	_	_	9	mark	_	AlignBegin=254210|AlignEnd=254320|Gloss=if
6	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	9	nsubj	_	AlignBegin=254320|AlignEnd=254380|Gloss=NOM.2
7	fit	fit	AUX	_	Mood=Pot	9	aux	_	AlignBegin=254380|AlignEnd=254560|Gloss=ABIL
8	just	just	ADV	_	_	9	advmod	_	AlignBegin=254560|AlignEnd=254830|Gloss=just
9	bow	bow	VERB	_	_	13	advcl:periph	_	AlignBegin=254830|AlignEnd=255229|Gloss=bow
10	<	<	PUNCT	_	_	9	punct	_	AlignBegin=255229|AlignEnd=255259|Gloss=PUNCT
11	#	#	PUNCT	_	_	9	punct	_	AlignBegin=255259|AlignEnd=256360|Gloss=PUNCT
12	just	just	ADV	_	_	13	advmod	_	AlignBegin=256360|AlignEnd=256592|Gloss=just
13	bow	bow	VERB	_	_	3	obj:agent	_	AlignBegin=256592|AlignEnd=256883|Gloss=bow
14	to	to	ADP	_	_	15	case	_	AlignBegin=256883|AlignEnd=257050|Gloss=to
15	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	13	obl:arg	_	AlignBegin=257050|AlignEnd=257257|Gloss=ACC.SG.1
16	//	//	PUNCT	_	_	3	punct	_	AlignBegin=257257|AlignEnd=257287|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 10 obj:agent	color:blue
1	#	#	PUNCT	_	_	4	punct	_	AlignBegin=39040|AlignEnd=39480|Gloss=PUNCT
2	but	but	CCONJ	_	_	4	cc	_	AlignBegin=39480|AlignEnd=39580|Gloss=but
3	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	expl:subj	_	AlignBegin=39580|AlignEnd=39620|Gloss=NOM.SG.3
4	better	beta	ADJ	_	Degree=Cmp	0	root	_	AlignBegin=39620|AlignEnd=39845|Gloss=good.CMPR
5	like	like	ADP	_	_	10	case	_	AlignBegin=39845|AlignEnd=40013|EXTPOS=SCONJ|Gloss=like
6	sey	sey	SCONJ	_	_	5	fixed	_	AlignBegin=40013|AlignEnd=40084|Gloss=COMP
7	[	[	PUNCT	_	_	10	punct	_	AlignBegin=40084|AlignEnd=40114|Gloss=PUNCT
8	di	the	DET	_	Definite=Def|PronType=Art	9	det	_	AlignBegin=40114|AlignEnd=40214|Gloss=DEF.ART
9	ting	ting	NOUN	_	_	10	nsubj	_	AlignBegin=40214|AlignEnd=40408|Gloss=thing
10	big	big	ADJ	_	_	4	obj:agent	_	AlignBegin=40408|AlignEnd=40824|Gloss=big
11	]	]	PUNCT	_	_	10	punct	_	AlignBegin=40824|AlignEnd=40854|Gloss=PUNCT
12	//	//	PUNCT	_	_	4	punct	_	AlignBegin=40824|AlignEnd=40854|Gloss=PUNCT

~~~


