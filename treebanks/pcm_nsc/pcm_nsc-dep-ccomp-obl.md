---
layout: base
title:  'Statistics of ccomp:obl in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `ccomp:obl`

This relation is a language-specific subtype of .
There are also 3 other language-specific subtypes of `ccomp`: <tt><a href="pcm_nsc-dep-ccomp-agent.html">ccomp:agent</a></tt>, <tt><a href="pcm_nsc-dep-ccomp-obj.html">ccomp:obj</a></tt>, <tt><a href="pcm_nsc-dep-ccomp-pred.html">ccomp:pred</a></tt>.

44 nodes (0%) are attached to their parents as `ccomp:obl`.

44 instances of `ccomp:obl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.68181818181818.

The following 6 pairs of parts of speech are connected with `ccomp:obl`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (34; 77% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (4; 9% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (3; 7% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt> (1; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 12 ccomp:obl	color:blue
1	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=55070|AlignEnd=55300|Gloss=NOM.SG.1
2	bin	bin	AUX	_	Tense=Past	3	aux	_	AlignBegin=55300|AlignEnd=55540|Gloss=PST
3	reason	reason	VERB	_	_	0	root	_	AlignBegin=55540|AlignEnd=55803|Gloss=reason
4	like	like	ADP	_	_	12	mark	_	AlignBegin=55803|AlignEnd=56040|ExtPos=SCONJ|Gloss=like|PhraseType=Idiom
5	sey	sey	SCONJ	_	_	4	fixed	_	AlignBegin=56040|AlignEnd=56150|Gloss=COMP
6	[	[	X	_	_	12	dep	_	AlignBegin=56150|AlignEnd=56180|Gloss=PUNCT
7	make	make	AUX	_	Mood=Opt	12	aux	_	AlignBegin=56180|AlignEnd=56349|Gloss=SBJV
8	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	12	nsubj	_	AlignBegin=56349|AlignEnd=56487|Gloss=NOM.SG.1
9	just	just	ADV	_	_	12	advmod	_	AlignBegin=56487|AlignEnd=56740|Gloss=just
10	like	like	ADP	_	_	12	discourse	_	AlignBegin=56740|AlignEnd=57150|Gloss=like
11	#	#	X	_	_	10	dep	_	AlignBegin=57150|AlignEnd=57230|Gloss=PUNCT
12	call	call	VERB	_	_	3	ccomp:obl	_	AlignBegin=57230|AlignEnd=57440|Gloss=call
13	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	12	obj	_	AlignBegin=57440|AlignEnd=57580|Gloss=ACC.SG.3
14	quit	quit	VERB	_	_	12	ccomp:pred	_	AlignBegin=57580|AlignEnd=57790|Gloss=quit
15	]	]	X	_	_	12	dep	_	AlignBegin=57790|AlignEnd=57820|Gloss=PUNCT
16	//	//	X	_	_	3	dep	_	AlignBegin=57790|AlignEnd=57820|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 8 ccomp:obl	color:blue
1	#	#	X	_	_	3	dep	_	AlignBegin=223940|AlignEnd=224500|Gloss=PUNCT
2	noting	noting	PRON	_	_	3	nsubj	_	AlignBegin=224500|AlignEnd=224730|Gloss=nothing
3	dey	dey	VERB	_	VerbType=Cop	0	root	_	AlignBegin=224730|AlignEnd=224820|Gloss=be
4	wrong	wrong	ADJ	_	_	3	xcomp:pred	_	AlignBegin=224820|AlignEnd=225040|Gloss=wrong
5	wit	wit	ADP	_	_	8	mark	_	AlignBegin=225040|AlignEnd=225130|Gloss=with
6	being	be	AUX	_	_	8	cop	_	AlignBegin=225130|AlignEnd=225339|Gloss=being
7	a	a	DET	_	Definite=Ind|PronType=Art	8	det	_	AlignBegin=225339|AlignEnd=225450|Gloss=INDF.ART
8	queen	queen	NOUN	_	_	4	ccomp:obl	_	AlignBegin=225450|AlignEnd=225750|Gloss=queen
9	//	//	X	_	_	3	dep	_	AlignBegin=225750|AlignEnd=225780|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 15	bgColor:blue
# visual-style 15	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 15 ccomp:obl	color:blue
1	#	#	X	_	_	3	dep	_	AlignBegin=101918|AlignEnd=102213|Gloss=PUNCT
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=102213|AlignEnd=102290|Gloss=NOM.SG.1
3	wan	want	VERB	_	_	0	root	_	AlignBegin=102290|AlignEnd=102526|Gloss=want
4	go	go	VERB	_	_	3	xcomp:obj	_	AlignBegin=102526|AlignEnd=102679|Gloss=go
5	play	play	VERB	_	_	4	xcomp:obj	_	AlignBegin=102679|AlignEnd=102916|Gloss=play
6	because	because	SCONJ	_	_	8	mark	_	AlignBegin=102916|AlignEnd=103198|Gloss=because
7	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=103198|AlignEnd=103301|Gloss=NOM.SG.1
8	see	see	VERB	_	_	3	advcl	_	AlignBegin=103301|AlignEnd=103466|Gloss=see
9	di	di	DET	_	Definite=Def|PronType=Art	10	det	_	AlignBegin=103466|AlignEnd=103596|Gloss=DEF.ART
10	work	work	NOUN	_	_	8	obj	_	AlignBegin=103596|AlignEnd=103853|Gloss=work
11	as	as	ADP	_	_	15	mark	_	AlignBegin=103853|AlignEnd=104218|Gloss=as
12	{	{	X	_	_	15	dep	_	AlignBegin=104218|AlignEnd=104411|Gloss=PUNCT
13	#	#	X	_	_	15	dep	_	AlignBegin=104218|AlignEnd=104411|Gloss=PUNCT
14	na	na	AUX	_	PartType=Cop	15	cop	_	AlignBegin=104411|AlignEnd=104542|Gloss=be
15	part	part	NOUN	_	_	8	ccomp:obl	_	AlignBegin=104542|AlignEnd=104868|Gloss=part
16	of	of	ADP	_	_	17	case	_	AlignBegin=104868|AlignEnd=105088|Gloss=of
17	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	15	nmod	_	AlignBegin=105088|AlignEnd=105575|Gloss=ACC.SG.1
18	|c	|c	X	_	_	21	dep	_	AlignBegin=105575|AlignEnd=105605|Gloss=PUNCT
19	#	#	X	_	_	21	dep	_	AlignBegin=105605|AlignEnd=105794|Gloss=PUNCT
20	na	na	AUX	_	PartType=Cop	21	cop	_	AlignBegin=105794|AlignEnd=105878|Gloss=be
21	sometin	sometin	PRON	_	_	15	conj	_	AlignBegin=105878|AlignEnd=106198|Gloss=something
22	wey	wey	SCONJ	_	_	23	mark	_	AlignBegin=106198|AlignEnd=106318|Gloss=REL
23	dey	dey	VERB	_	VerbType=Cop	21	acl:relcl	_	AlignBegin=106318|AlignEnd=106488|Gloss=be
24	inside	inside	ADP	_	_	25	case	_	AlignBegin=106488|AlignEnd=106902|Gloss=inside
25	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	23	xcomp:pred	_	AlignBegin=106902|AlignEnd=107297|Gloss=ACC.SG.1
26	}	}	X	_	_	15	dep	_	AlignBegin=107297|AlignEnd=107327|Gloss=PUNCT
27	//	//	X	_	_	3	dep	_	AlignBegin=107297|AlignEnd=107327|Gloss=PUNCT

~~~


