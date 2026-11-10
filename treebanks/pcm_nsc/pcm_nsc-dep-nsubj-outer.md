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
1	#	#	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=259220|WordAlignmentEnd=259680
2	di	di	DET	_	Definite=Def|PronType=Art	3	det	_	Gloss=DEF.ART|WordAlignmentBegin=259680|WordAlignmentEnd=259779
3	gist	gist	NOUN	_	_	8	nsubj:outer	_	Gloss=gist|WordAlignmentBegin=259779|WordAlignmentEnd=259950
4	be	be	AUX	_	PartType=Cop	8	cop	_	Gloss=be|WordAlignmentBegin=259950|WordAlignmentEnd=260029
5	sey	sey	SCONJ	_	_	8	mark	_	Gloss=COMP|WordAlignmentBegin=260029|WordAlignmentEnd=260160
6	[	[	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=260160|WordAlignmentEnd=260160
7	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	8	nsubj	_	Gloss=NOM.SG.3|WordAlignmentBegin=260160|WordAlignmentEnd=260259
8	say	say	VERB	_	_	0	root	_	Gloss=say|WordAlignmentBegin=260259|WordAlignmentEnd=260410
9	a'ah	a'ah	INTJ	_	_	8	parataxis	_	Gloss=no|WordAlignmentBegin=260410|WordAlignmentEnd=260680
10	]	]	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=260680|WordAlignmentEnd=260680
11	//	//	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=260650|WordAlignmentEnd=260680

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 1 nsubj:outer	color:blue
1	wetin	wetin	PRON	_	PronType=Int	9	nsubj:outer	_	Gloss=what.Q|WordAlignmentBegin=275640|WordAlignmentEnd=275910
2	help	help	VERB	_	_	1	acl:relcl	_	Gloss=help|WordAlignmentBegin=275910|WordAlignmentEnd=276090
3	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	2	obj	_	Gloss=ACC.SG.1|WordAlignmentBegin=276090|WordAlignmentEnd=276180
4	be	be	AUX	_	PartType=Cop	9	cop	_	Gloss=be.COP|WordAlignmentBegin=276180|WordAlignmentEnd=276300
5	sey	sey	SCONJ	_	_	9	mark	_	Gloss=COMP|WordAlignmentBegin=276300|WordAlignmentEnd=276660
6	#	#	PUNCT	_	_	9	punct	_	Gloss=PUNCT|WordAlignmentBegin=276660|WordAlignmentEnd=277120
7	[	[	PUNCT	_	_	9	punct	_	Gloss=PUNCT|WordAlignmentBegin=277090|WordAlignmentEnd=277120
8	creche	creche	NOUN	_	_	9	nsubj	_	Gloss=crèche|WordAlignmentBegin=277120|WordAlignmentEnd=277420
9	dey	dey	VERB	_	VerbType=Cop	0	root	_	Gloss=dey.COP|WordAlignmentBegin=277420|WordAlignmentEnd=277590
10	my	my	PRON	_	Number=Sing|Person=1|Poss=Yes	11	nmod:poss	_	Gloss=SG.1.POSS|WordAlignmentBegin=277590|WordAlignmentEnd=277745
11	office	office	NOUN	_	_	9	xcomp	_	Gloss=office|WordAlignmentBegin=277745|WordAlignmentEnd=278190
12	]	]	PUNCT	_	_	9	punct	_	Gloss=PUNCT|WordAlignmentBegin=278190|WordAlignmentEnd=278190
13	//	//	PUNCT	_	_	9	punct	_	Gloss=PUNCT|WordAlignmentBegin=278160|WordAlignmentEnd=278190

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 nsubj:outer	color:blue
1	so	so	ADV	_	_	12	discourse	_	Gloss=so|WordAlignmentBegin=129900|WordAlignmentEnd=130320
2	<	<	PUNCT	_	_	1	punct	_	Gloss=PUNCT|WordAlignmentBegin=130320|WordAlignmentEnd=130320
3	why	why	ADV	_	PronType=Int	12	nsubj:outer	_	Gloss=why.Q|WordAlignmentBegin=130320|WordAlignmentEnd=130562
4	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	nsubj	_	Gloss=NOM.PL.1|WordAlignmentBegin=130562|WordAlignmentEnd=130680
5	bring	bring	VERB	_	_	3	acl:relcl	_	Gloss=bring|WordAlignmentBegin=130680|WordAlignmentEnd=130889
6	dis	dis	DET	_	Number=Sing|PronType=Dem	7	det	_	Gloss=SG.DEM|WordAlignmentBegin=130889|WordAlignmentEnd=131065
7	opportunity	opportunity	NOUN	_	_	5	obj	_	Gloss=opportunity|WordAlignmentBegin=131065|WordAlignmentEnd=131440
8	be	be	AUX	_	PartType=Cop	12	cop	_	Gloss=be|WordAlignmentBegin=131440|WordAlignmentEnd=131522
9	sey	sey	SCONJ	_	_	12	mark	_	Gloss=COMP|WordAlignmentBegin=131522|WordAlignmentEnd=131630
10	[	[	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=131630|WordAlignmentEnd=131780
11	we	we	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	12	nsubj	_	Gloss=NOM.PL.1|WordAlignmentBegin=131630|WordAlignmentEnd=131780
12	wan	want	VERB	_	_	0	root	_	Gloss=want|WordAlignmentBegin=131780|WordAlignmentEnd=131950
13	carry	carry	VERB	_	_	12	xcomp	_	Gloss=carry|WordAlignmentBegin=131950|WordAlignmentEnd=132191
14	Nigeria	Nigeria	PROPN	_	_	13	obj	_	Gloss=Nigeria|WordAlignmentBegin=132191|WordAlignmentEnd=132704
15	comot	comot	VERB	_	_	13	compound:svc	_	Gloss=get_out|WordAlignmentBegin=132704|WordAlignmentEnd=133020
16	from	from	ADP	_	_	18	case	_	Gloss=from|WordAlignmentBegin=133020|WordAlignmentEnd=133285
17	Ponzi	Ponzi	PROPN	_	_	18	compound	_	Gloss=Ponzi|WordAlignmentBegin=133285|WordAlignmentEnd=133640
18	Scheme	scheme	NOUN	_	_	15	obl:arg	_	Gloss=scheme|WordAlignmentBegin=133640|WordAlignmentEnd=134010
19	]	]	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=134010|WordAlignmentEnd=134010
20	//	//	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=133980|WordAlignmentEnd=134010

~~~


