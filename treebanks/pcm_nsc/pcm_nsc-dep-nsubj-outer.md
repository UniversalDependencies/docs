---
layout: base
title:  'Statistics of nsubj:outer in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `nsubj:outer`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-nsubj.html">nsubj</a></tt>.

105 nodes (0%) are attached to their parents as `nsubj:outer`.

105 instances of `nsubj:outer` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 11.2761904761905.

The following 11 pairs of parts of speech are connected with `nsubj:outer`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (51; 49% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (38; 36% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (5; 5% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (3; 3% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (2; 2% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 3 nsubj:outer	color:blue
1	#	#	X	_	_	8	dep	_	AlignBegin=259220|AlignEnd=259680|Gloss=PUNCT
2	di	di	DET	_	Definite=Def|PronType=Art	3	det	_	AlignBegin=259680|AlignEnd=259779|Gloss=DEF.ART
3	gist	gist	NOUN	_	_	8	nsubj:outer	_	AlignBegin=259779|AlignEnd=259950|Gloss=gist
4	be	be	AUX	_	PartType=Cop	8	cop	_	AlignBegin=259950|AlignEnd=260029|Gloss=be
5	sey	sey	SCONJ	_	_	8	mark	_	AlignBegin=260029|AlignEnd=260160|Gloss=COMP
6	[	[	X	_	_	8	dep	_	AlignBegin=260160|AlignEnd=260160|Gloss=PUNCT
7	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	AlignBegin=260160|AlignEnd=260259|Gloss=NOM.SG.3
8	say	say	VERB	_	_	0	root	_	AlignBegin=260259|AlignEnd=260410|Gloss=say
9	a'ah	a'ah	INTJ	_	_	8	parataxis	_	AlignBegin=260410|AlignEnd=260680|Gloss=no
10	]	]	X	_	_	8	dep	_	AlignBegin=260680|AlignEnd=260680|Gloss=PUNCT
11	//	//	X	_	_	8	dep	_	AlignBegin=260650|AlignEnd=260680|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:outer	color:blue
1	wetin	wetin	PRON	_	PronType=Int	9	nsubj:outer	_	AlignBegin=275640|AlignEnd=275910|Gloss=what.Q
2	help	help	VERB	_	_	1	acl:relcl	_	AlignBegin=275910|AlignEnd=276090|Gloss=help
3	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	_	AlignBegin=276090|AlignEnd=276180|Gloss=ACC.SG.1
4	be	be	AUX	_	PartType=Cop	9	cop	_	AlignBegin=276180|AlignEnd=276300|Gloss=be.COP
5	sey	sey	SCONJ	_	_	9	mark	_	AlignBegin=276300|AlignEnd=276660|Gloss=COMP
6	#	#	X	_	_	9	dep	_	AlignBegin=276660|AlignEnd=277120|Gloss=PUNCT
7	[	[	X	_	_	9	dep	_	AlignBegin=277090|AlignEnd=277120|Gloss=PUNCT
8	creche	creche	NOUN	_	_	9	nsubj	_	AlignBegin=277120|AlignEnd=277420|Gloss=crèche
9	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=277420|AlignEnd=277590|Gloss=dey.COP
10	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	11	nmod:poss	_	AlignBegin=277590|AlignEnd=277745|Gloss=SG.1.POSS
11	office	office	NOUN	_	_	9	xcomp	_	AlignBegin=277745|AlignEnd=278190|Gloss=office
12	]	]	X	_	_	9	dep	_	AlignBegin=278190|AlignEnd=278190|Gloss=PUNCT
13	//	//	X	_	_	9	dep	_	AlignBegin=278160|AlignEnd=278190|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 nsubj:outer	color:blue
1	so	so	ADV	_	_	12	discourse	_	AlignBegin=129900|AlignEnd=130320|Gloss=so
2	<	<	X	_	_	1	dep	_	AlignBegin=130320|AlignEnd=130320|Gloss=PUNCT
3	why	why	ADV	_	PronType=Int	12	nsubj:outer	_	AlignBegin=130320|AlignEnd=130562|Gloss=why.Q
4	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	AlignBegin=130562|AlignEnd=130680|Gloss=NOM.PL.1
5	bring	bring	VERB	_	_	3	acl:relcl	_	AlignBegin=130680|AlignEnd=130889|Gloss=bring
6	dis	dis	DET	_	Number=Sing|PronType=Dem	7	det	_	AlignBegin=130889|AlignEnd=131065|Gloss=SG.DEM
7	opportunity	opportunity	NOUN	_	_	5	obj	_	AlignBegin=131065|AlignEnd=131440|Gloss=opportunity
8	be	be	AUX	_	PartType=Cop	12	cop	_	AlignBegin=131440|AlignEnd=131522|Gloss=be
9	sey	sey	SCONJ	_	_	12	mark	_	AlignBegin=131522|AlignEnd=131630|Gloss=COMP
10	[	[	X	_	_	12	dep	_	AlignBegin=131630|AlignEnd=131780|Gloss=PUNCT
11	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	AlignBegin=131630|AlignEnd=131780|Gloss=NOM.PL.1
12	wan	want	VERB	_	_	0	root	_	AlignBegin=131780|AlignEnd=131950|Gloss=want
13	carry	carry	VERB	_	_	12	xcomp	_	AlignBegin=131950|AlignEnd=132191|Gloss=carry
14	Nigeria	Nigeria	PROPN	_	_	13	obj	_	AlignBegin=132191|AlignEnd=132704|Gloss=Nigeria
15	comot	comot	VERB	_	_	13	compound:svc	_	AlignBegin=132704|AlignEnd=133020|Gloss=get_out
16	from	from	ADP	_	_	18	case	_	AlignBegin=133020|AlignEnd=133285|Gloss=from
17	Ponzi	Ponzi	PROPN	_	_	18	compound	_	AlignBegin=133285|AlignEnd=133640|Gloss=Ponzi
18	Scheme	scheme	NOUN	_	_	15	obl:arg	_	AlignBegin=133640|AlignEnd=134010|Gloss=scheme
19	]	]	X	_	_	12	dep	_	AlignBegin=134010|AlignEnd=134010|Gloss=PUNCT
20	//	//	X	_	_	12	dep	_	AlignBegin=133980|AlignEnd=134010|Gloss=PUNCT

~~~


