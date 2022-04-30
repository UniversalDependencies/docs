---
layout: base
title:  'Statistics of parataxis:mod in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `parataxis:mod`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-parataxis.html">parataxis</a></tt>.
There are also 4 other language-specific subtypes of `parataxis`: <tt><a href="pcm_nsc-dep-parataxis-conj.html">parataxis:conj</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-dislocated.html">parataxis:dislocated</a></tt>, <tt><a href="pcm_nsc-dep-parataxis-parenth.html">parataxis:parenth</a></tt>.

28 nodes (0%) are attached to their parents as `parataxis:mod`.

28 instances of `parataxis:mod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 9.35714285714286.

The following 7 pairs of parts of speech are connected with `parataxis:mod`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (17; 61% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (4; 14% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 11% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 parataxis:mod	color:blue
1	but	but	CCONJ	_	_	10	discourse	_	AlignBegin=59550|AlignEnd=59900|Gloss=but
2	#	#	X	_	_	1	dep	_	AlignBegin=59930|AlignEnd=60700|Gloss=PUNCT
3	worst	worst	ADJ	_	Degree=Sup	4	nsubj	_	AlignBegin=60700|AlignEnd=60890|Gloss=bad.SUP
4	get	get	VERB	_	_	10	parataxis:mod	_	AlignBegin=60890|AlignEnd=61037|Gloss=get
5	to	to	ADP	_	_	6	case	_	AlignBegin=61037|AlignEnd=61217|Gloss=to
6	worst	worst	ADJ	_	Degree=Sup	4	obl:arg	_	AlignBegin=61217|AlignEnd=61430|Gloss=bad.SUP
7	<	<	X	_	_	4	dep	_	AlignBegin=61430|AlignEnd=61460|Gloss=PUNCT
8	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	AlignBegin=61460|AlignEnd=61600|Gloss=NOM.SG.1
9	gats	gats	AUX	_	Mood=Nec	10	aux	_	AlignBegin=61600|AlignEnd=61870|Gloss=OBLG
10	move	move	VERB	_	_	0	root	_	AlignBegin=61870|AlignEnd=62150|Gloss=move
11	on	on	ADP	_	_	10	compound:prt	_	AlignBegin=62150|AlignEnd=62290|Gloss=on
12	//	//	X	_	_	10	dep	_	AlignBegin=62290|AlignEnd=62320|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 parataxis:mod	color:blue
1	#	#	X	_	_	11	dep	_	AlignBegin=241160|AlignEnd=241401|Gloss=PUNCT
2	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	4	nsubj	_	AlignBegin=241401|AlignEnd=241481|Gloss=NOM.2
3	go	go	AUX	_	Aspect=Prosp	4	aux	_	AlignBegin=241481|AlignEnd=241669|Gloss=PROSP
4	born	born	VERB	_	_	11	parataxis:mod	_	AlignBegin=241669|AlignEnd=241830|Gloss=give_birth
5	pikin	pikin	NOUN	_	_	4	obj	_	AlignBegin=241830|AlignEnd=242011|Gloss=child
6	<	<	X	_	_	4	dep	_	AlignBegin=242011|AlignEnd=242041|Gloss=PUNCT
7	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	AlignBegin=242041|AlignEnd=242140|Gloss=NOM.SG.3
8	go	go	AUX	_	Aspect=Prosp	11	aux	_	AlignBegin=242140|AlignEnd=242220|Gloss=PROSP
9	be	be	AUX	_	PartType=Cop	11	cop	_	AlignBegin=242220|AlignEnd=242310|Gloss=be
10	like	like	ADP	_	_	11	case	_	AlignBegin=242310|AlignEnd=242470|Gloss=like
11	imbecile	imbecile	NOUN	_	_	0	root	_	AlignBegin=242470|AlignEnd=242910|Gloss=imbecile
12	//	//	X	_	_	11	dep	_	AlignBegin=242910|AlignEnd=242940|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 parataxis:mod	color:blue
1	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	AlignBegin=265520|AlignEnd=265650|Gloss=NOM.2
2	go	go	AUX	_	Aspect=Prosp	3	aux	_	AlignBegin=265650|AlignEnd=265760|Gloss=PROSP
3	go	go	VERB	_	_	12	parataxis:mod	_	AlignBegin=265760|AlignEnd=265960|Gloss=go
4	China	China	PROPN	_	_	3	iobj	_	AlignBegin=265960|AlignEnd=266259|Gloss=China
5	<	<	X	_	_	3	dep	_	AlignBegin=266259|AlignEnd=266289|Gloss=PUNCT
6	one	one	NUM	_	NumType=Card	8	nummod	_	AlignBegin=266289|AlignEnd=266450|Gloss=one
7	full	full	ADJ	_	_	8	amod	_	AlignBegin=266450|AlignEnd=266653|Gloss=full
8	street	street	NOUN	_	_	12	nmod	_	AlignBegin=266653|AlignEnd=266950|Gloss=street
9	<	<	X	_	_	8	dep	_	AlignBegin=266950|AlignEnd=266980|Gloss=PUNCT
10	every	every	DET	_	_	11	det	_	AlignBegin=266980|AlignEnd=267190|Gloss=every
11	family	family	NOUN	_	_	12	dislocated	_	AlignBegin=267190|AlignEnd=267540|Gloss=family
12	wetin	wetin	PRON	_	PronType=Int	0	root	_	AlignBegin=267540|AlignEnd=267772|Gloss=what.Q
13	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	AlignBegin=267772|AlignEnd=267860|Gloss=NOM.PL.3
14	sell	sell	VERB	_	_	12	advcl:cleft	_	AlignBegin=267860|AlignEnd=267990|Gloss=sell
15	?//	?//	X	_	_	12	dep	_	AlignBegin=267990|AlignEnd=268020|Gloss=PUNCT

~~~


