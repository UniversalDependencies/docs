---
layout: base
title:  'Statistics of ccomp:pred in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `ccomp:pred`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `ccomp`: <tt><a href="pcm_nsc-dep-ccomp-agent.html">ccomp:agent</a></tt>, <tt><a href="pcm_nsc-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="pcm_nsc-dep-ccomp-obl.html">ccomp:obl</a></tt>.

209 nodes (0%) are attached to their parents as `ccomp:pred`.

209 instances of `ccomp:pred` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.46411483253589.

The following 15 pairs of parts of speech are connected with `ccomp:pred`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (162; 78% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (10; 5% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (9; 4% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (8; 4% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (4; 2% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-PART.html">PART</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 13 ccomp:pred	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=212769|AlignEnd=213591|Gloss=PUNCT
2	di	di	DET	_	Definite=Def|PronType=Art	3	det	_	AlignBegin=213591|AlignEnd=213671|Gloss=DEF.ART
3	man	man	NOUN	_	_	4	nsubj	_	AlignBegin=213671|AlignEnd=213841|Gloss=man
4	say	say	VERB	_	_	0	root	_	AlignBegin=213841|AlignEnd=213951|Gloss=say
5	[	[	X	_	_	10	dep	_	AlignBegin=213951|AlignEnd=213981|Gloss=PUNCT
6	okay	OK	INTJ	_	_	10	discourse	_	AlignBegin=213981|AlignEnd=214171|Gloss=OK
7	meh	make	AUX	_	Mood=Opt	10	aux	_	AlignBegin=214201|AlignEnd=214351|Gloss=SBJV
8	me	me	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	dislocated	_	AlignBegin=214351|AlignEnd=214421|Gloss=NOM.SG.1
9	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	AlignBegin=214421|AlignEnd=214581|Gloss=NOM.SG.1
10	start	start	VERB	_	_	4	parataxis	_	AlignBegin=214581|AlignEnd=214963|Gloss=start
11	to	to	ADP	_	_	13	mark	_	AlignBegin=214963|AlignEnd=215141|Gloss=to
12	dey	dey	AUX	_	Aspect=Imp	13	aux	_	AlignBegin=215141|AlignEnd=215274|Gloss=IPFV
13	learn	learn	VERB	_	_	10	ccomp:pred	_	AlignBegin=215274|AlignEnd=215487|Gloss=learn
14	work	work	NOUN	_	_	13	obj	_	AlignBegin=215487|AlignEnd=215711|Gloss=work
15	today	today	NOUN	_	_	13	obl:mod	_	AlignBegin=215711|AlignEnd=215955|Gloss=today
16	]	]	X	_	_	10	dep	_	AlignBegin=215955|AlignEnd=215985|Gloss=PUNCT
17	//	//	X	_	_	4	dep	_	AlignBegin=215955|AlignEnd=215985|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 15 16 ccomp:pred	color:blue
1	#	#	X	_	_	13	dep	_	AlignBegin=268140|AlignEnd=268730|Gloss=PUNCT
2	{	{	X	_	_	3	dep	_	AlignBegin=268700|AlignEnd=268730|Gloss=PUNCT
3	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	13	dislocated	_	AlignBegin=268730|AlignEnd=268860|Gloss=NOM.SG.3
4	||	||	X	_	_	5	dep	_	AlignBegin=268860|AlignEnd=268890|Gloss=PUNCT
5	people	people	NOUN	_	Number=Plur	3	reparandum	_	AlignBegin=268890|AlignEnd=269130|Gloss=people.PL
6	}	}	X	_	_	3	dep	_	AlignBegin=269130|AlignEnd=269160|Gloss=PUNCT
7	wey	wey	SCONJ	_	_	9	mark	_	AlignBegin=269160|AlignEnd=269290|Gloss=REL
8	even	even	ADV	_	_	9	advmod	_	AlignBegin=269290|AlignEnd=269480|Gloss=even
9	dey	dey	VERB	_	VerbType=Cop	5	acl:relcl	_	AlignBegin=269480|AlignEnd=269680|Gloss=dey.COP
10	private	private	ADJ	_	_	9	xcomp:pred	_	AlignBegin=269680|AlignEnd=270060|Gloss=private
11	<	<	X	_	_	3	dep	_	AlignBegin=270060|AlignEnd=270090|Gloss=PUNCT
12	na	na	AUX	_	PartType=Cop	13	cop	_	AlignBegin=270090|AlignEnd=270229|Gloss=be.COP
13	im	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	0	root	_	AlignBegin=270229|AlignEnd=270280|Gloss=NOM.SG.3
14	>+	>+	X	_	_	15	dep	_	AlignBegin=270280|AlignEnd=270310|Gloss=PUNCT
15	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	13	advcl:cleft	_	AlignBegin=270310|AlignEnd=270483|Gloss=NOM.SG.1
16	pity	pity	VERB	_	_	15	ccomp:pred	_	AlignBegin=270483|AlignEnd=270820|Gloss=pity
17	pass	pass	VERB	_	_	16	compound:svc	_	AlignBegin=270820|AlignEnd=271070|Gloss=pass
18	//	//	X	_	_	13	dep	_	AlignBegin=271070|AlignEnd=271100|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 10 ccomp:pred	color:blue
1	no	no	PART	_	Polarity=Neg	2	advmod	_	AlignBegin=326700|AlignEnd=326870|Gloss=NEG
2	sin	sin	NOUN	_	_	0	root	_	AlignBegin=326870|AlignEnd=327332|Gloss=sin
3	#	#	X	_	_	6	dep	_	AlignBegin=327332|AlignEnd=327760|Gloss=PUNCT
4	wey	wey	SCONJ	_	_	6	mark	_	AlignBegin=327760|AlignEnd=327880|Gloss=REL
5	too	too	ADV	_	_	6	advmod	_	AlignBegin=327880|AlignEnd=328000|Gloss=too
6	big	big	ADJ	_	_	2	acl:relcl	_	AlignBegin=328000|AlignEnd=328213|Gloss=big
7	for	for	ADP	_	_	8	case	_	AlignBegin=328213|AlignEnd=328430|Gloss=for
8	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	6	obl:arg	_	AlignBegin=328430|AlignEnd=328570|Gloss=ACC.SG.3
9	to	to	ADP	_	_	10	mark	_	AlignBegin=328570|AlignEnd=328707|Gloss=to
10	forgive	forgive	VERB	_	_	6	ccomp:pred	_	AlignBegin=328707|AlignEnd=329250|Gloss=forgive
11	//	//	X	_	_	2	dep	_	AlignBegin=329250|AlignEnd=329280|Gloss=PUNCT

~~~


