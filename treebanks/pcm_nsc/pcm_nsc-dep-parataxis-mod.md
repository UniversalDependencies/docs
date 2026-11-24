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
Average distance between parent and child is 9.25.

The following 7 pairs of parts of speech are connected with `parataxis:mod`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (17; 61% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (4; 14% instances), <tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (3; 11% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="pcm_nsc-pos-AUX.html">AUX</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 4% instances), <tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt>-<tt><a href="pcm_nsc-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 4 parataxis:mod	color:blue
1	but	but	CCONJ	_	_	10	discourse	_	Gloss=but|WordAlignmentBegin=59550|WordAlignmentEnd=59930
2	#	#	PUNCT	_	_	1	punct	_	Gloss=PUNCT|WordAlignmentBegin=59930|WordAlignmentEnd=60700
3	worst	worst	ADJ	_	Degree=Sup	4	nsubj	_	Gloss=bad.SUP|WordAlignmentBegin=60700|WordAlignmentEnd=60890
4	get	get	VERB	_	_	10	parataxis:mod	_	Gloss=get|WordAlignmentBegin=60890|WordAlignmentEnd=61037
5	to	to	ADP	_	_	6	case	_	Gloss=to|WordAlignmentBegin=61037|WordAlignmentEnd=61217
6	worst	worst	ADJ	_	Degree=Sup	4	obl:arg	_	Gloss=bad.SUP|WordAlignmentBegin=61217|WordAlignmentEnd=61460
7	<	<	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=61460|WordAlignmentEnd=61460
8	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	10	nsubj	_	Gloss=NOM.SG.1|WordAlignmentBegin=61460|WordAlignmentEnd=61600
9	gats	gats	AUX	_	Mood=Nec	10	aux	_	Gloss=OBLG|WordAlignmentBegin=61600|WordAlignmentEnd=61870
10	move	move	VERB	_	_	0	root	_	Gloss=move|WordAlignmentBegin=61870|WordAlignmentEnd=62150
11	on	on	ADP	_	_	10	compound:prt	_	Gloss=on|WordAlignmentBegin=62150|WordAlignmentEnd=62320
12	//	//	PUNCT	_	_	10	punct	_	Gloss=PUNCT|WordAlignmentBegin=62320|WordAlignmentEnd=62320

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 4 parataxis:mod	color:blue
1	#	#	PUNCT	_	_	11	punct	_	Gloss=PUNCT|WordAlignmentBegin=241160|WordAlignmentEnd=241401
2	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	4	nsubj	_	Gloss=NOM.2|WordAlignmentBegin=241401|WordAlignmentEnd=241481
3	go	go	AUX	_	Aspect=Prosp	4	aux	_	Gloss=PROSP|WordAlignmentBegin=241481|WordAlignmentEnd=241669
4	born	born	VERB	_	_	11	parataxis:mod	_	Gloss=give_birth|WordAlignmentBegin=241669|WordAlignmentEnd=241830
5	pikin	pikin	NOUN	_	_	4	obj	_	Gloss=child|WordAlignmentBegin=241830|WordAlignmentEnd=242041
6	<	<	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=242041|WordAlignmentEnd=242041
7	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	Gloss=NOM.SG.3|WordAlignmentBegin=242041|WordAlignmentEnd=242140
8	go	go	AUX	_	Aspect=Prosp	11	aux	_	Gloss=PROSP|WordAlignmentBegin=242140|WordAlignmentEnd=242220
9	be	be	AUX	_	PartType=Cop	11	cop	_	Gloss=be|WordAlignmentBegin=242220|WordAlignmentEnd=242310
10	like	like	ADP	_	_	11	case	_	Gloss=like|WordAlignmentBegin=242310|WordAlignmentEnd=242470
11	imbecile	imbecile	NOUN	_	_	0	root	_	Gloss=imbecile|WordAlignmentBegin=242470|WordAlignmentEnd=242940
12	//	//	PUNCT	_	_	11	punct	_	Gloss=PUNCT|WordAlignmentBegin=242940|WordAlignmentEnd=242940

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 parataxis:mod	color:blue
1	you	you	PRON	_	Case=Nom|Person=2|PronType=Prs	3	nsubj	_	Gloss=NOM.2|WordAlignmentBegin=265520|WordAlignmentEnd=265650
2	go	go	AUX	_	Aspect=Prosp	3	aux	_	Gloss=PROSP|WordAlignmentBegin=265650|WordAlignmentEnd=265760
3	go	go	VERB	_	_	12	parataxis:mod	_	Gloss=go|WordAlignmentBegin=265760|WordAlignmentEnd=265960
4	China	China	PROPN	_	_	3	obl:arg	_	Gloss=China|WordAlignmentBegin=265960|WordAlignmentEnd=266289
5	<	<	PUNCT	_	_	3	punct	_	Gloss=PUNCT|WordAlignmentBegin=266289|WordAlignmentEnd=266289
6	one	one	NUM	_	NumType=Card	8	nummod	_	Gloss=one|WordAlignmentBegin=266289|WordAlignmentEnd=266450
7	full	full	ADJ	_	_	8	amod	_	Gloss=full|WordAlignmentBegin=266450|WordAlignmentEnd=266653
8	street	street	NOUN	_	_	12	nmod	_	Gloss=street|WordAlignmentBegin=266653|WordAlignmentEnd=266980
9	<	<	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=266980|WordAlignmentEnd=266980
10	every	every	DET	_	_	11	det	_	Gloss=every|WordAlignmentBegin=266980|WordAlignmentEnd=267190
11	family	family	NOUN	_	_	12	dislocated	_	Gloss=family|WordAlignmentBegin=267190|WordAlignmentEnd=267540
12	wetin	wetin	PRON	_	PronType=Int	0	root	_	Gloss=what.Q|WordAlignmentBegin=267540|WordAlignmentEnd=267772
13	de	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	nsubj	_	Gloss=NOM.PL.3|WordAlignmentBegin=267772|WordAlignmentEnd=267860
14	sell	sell	VERB	_	_	12	advcl:cleft	_	Gloss=sell|WordAlignmentBegin=267860|WordAlignmentEnd=268020
15	?//	?//	PUNCT	_	_	12	punct	_	Gloss=PUNCT|WordAlignmentBegin=268020|WordAlignmentEnd=268020

~~~


