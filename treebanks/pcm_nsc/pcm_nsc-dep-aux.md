---
layout: base
title:  'Statistics of aux in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `aux`

This relation is universal.

8910 nodes (6%) are attached to their parents as `aux`.

8910 instances of `aux` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.35375982042649.

The following 11 pairs of parts of speech are connected with `aux`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (8579; 96% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (155; 2% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (53; 1% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (51; 1% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (39; 0% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (13; 0% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (8; 0% instances), <tt><a href="pcm_nsc-pos-INTJ.html">INTJ</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="pcm_nsc-pos-ADP.html">ADP</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-NUM.html">NUM</a></tt>-<tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 8 aux	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=10145|AlignEnd=10516|Gloss=PUNCT
2	sey	sey	SCONJ	_	_	4	discourse	_	AlignBegin=10516|AlignEnd=10640|Gloss=COMP
3	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	AlignBegin=10640|AlignEnd=10679|Gloss=NOM.SG.3
4	wan	want	VERB	_	_	0	root	_	AlignBegin=10679|AlignEnd=10850|Gloss=want
5	carry	carry	VERB	_	_	4	xcomp:obj	_	AlignBegin=10850|AlignEnd=11170|Gloss=carry
6	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obj	_	AlignBegin=11170|AlignEnd=11370|Gloss=ACC.SG.1
7	go	go	VERB	_	_	5	compound:svc	_	AlignBegin=11370|AlignEnd=11503|Gloss=go
8	meh	make	AUX	_	Mood=Opt	10	aux	_	AlignBegin=11533|AlignEnd=11710|Gloss=SBJV
9	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	AlignBegin=11710|AlignEnd=11770|Gloss=NOM.SG.3
10	go	go	VERB	_	_	5	advcl	_	AlignBegin=11770|AlignEnd=12120|Gloss=go
11	train	train	VERB	_	_	10	xcomp:obj	_	AlignBegin=12120|AlignEnd=12430|Gloss=train
12	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	11	obj	_	AlignBegin=12430|AlignEnd=12550|Gloss=ACC.SG.1
13	//	//	X	_	_	5	dep	_	AlignBegin=12550|AlignEnd=12580|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 7 aux	color:blue
1	and	and	CCONJ	_	_	8	discourse	_	AlignBegin=310667|AlignEnd=310928|Gloss=and
2	#	#	X	_	_	1	dep	_	AlignBegin=310928|AlignEnd=311071|Gloss=PUNCT
3	one	one	NOUN	_	_	8	nsubj	_	AlignBegin=311071|AlignEnd=311267|Gloss=one
4	of	of	ADP	_	_	6	case	_	AlignBegin=311267|AlignEnd=311467|Gloss=of
5	im	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	6	nmod:poss	_	AlignBegin=311467|AlignEnd=311548|Gloss=NOM.SG.3
6	inlaw	inlaw	NOUN	_	_	3	nmod	_	AlignBegin=311548|AlignEnd=311907|Gloss=inlaw
7	dey	dey	AUX	_	Aspect=Imp	8	aux	_	AlignBegin=311907|AlignEnd=312037|Gloss=IPFV
8	sick	sick	ADJ	_	_	0	root	_	AlignBegin=312037|AlignEnd=312317|Gloss=sick
9	sef	sef	PART	_	PartType=Disc	8	advmod:emph	_	AlignBegin=312317|AlignEnd=312514|Gloss=FOC
10	//	//	X	_	_	8	dep	_	AlignBegin=312514|AlignEnd=312544|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 aux	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=215985|AlignEnd=216864|Gloss=PUNCT
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	4	nsubj	_	AlignBegin=216864|AlignEnd=216936|Gloss=NOM.SG.1
3	con	con	AUX	_	Aspect=Cons	4	aux	_	AlignBegin=216936|AlignEnd=217156|Gloss=CONS
4	dey	dey	AUX	_	Aspect=Imp	0	root	_	AlignBegin=217156|AlignEnd=217286|Gloss=IPFV
5	dey	dey	AUX	_	Aspect=Imp	6	aux	_	AlignBegin=217286|AlignEnd=217416|Gloss=IPFV
6	learn	learn	VERB	_	_	4	advcl	_	AlignBegin=217416|AlignEnd=217646|Gloss=learn
7	work	work	NOUN	_	_	6	obj	_	AlignBegin=217646|AlignEnd=217916|Gloss=work
8	o	o	PART	_	PartType=Disc	7	advmod:emph	_	AlignBegin=217916|AlignEnd=218144|Gloss=EMPH
9	//	//	X	_	_	4	dep	_	AlignBegin=218144|AlignEnd=218174|Gloss=PUNCT

~~~


